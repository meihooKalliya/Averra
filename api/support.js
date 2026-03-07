// API endpoint for customer support agent
import Anthropic from '@anthropic-ai/sdk';

// Rate limiting (same as chat.js)
const requestCounts = new Map();

function checkRateLimit(ip) {
    const now = Date.now();
    const key = `${ip}-${Math.floor(now / 60000)}`;
    const count = requestCounts.get(key) || 0;
    if (count >= 15) return false;
    requestCounts.set(key, count + 1);
    return true;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
        if (!checkRateLimit(clientIp)) {
            return res.status(429).json({
                error: 'Rate limit exceeded. Please wait before sending more requests.'
            });
        }

        const { messages, stream = false } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        const client = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
        });

        // Support-focused system prompt
        const systemPrompt = `You are a helpful customer support agent for AVERRA, an AI outbound sales platform. Your role is to:

1. Answer common questions about the platform, features, and pricing
2. Help users navigate the website and find information
3. Provide friendly, professional support
4. If you detect complex technical issues, billing problems, or account-specific questions, suggest contacting human support

Common topics you can help with:
- Platform features and capabilities (AI Voice, Lead Scraper, CRM sync)
- Pricing plans and subscriptions
- General outbound sales strategies
- How to use the Averra dashboard
- FAQ about AI conversational latency and voice quality

Be warm, helpful, and concise. If you're unsure about something specific to the platform, acknowledge it and suggest contacting the support team directly.

IMPORTANT: You cannot access user accounts or make changes. For account-specific requests, always recommend contacting support@averra.ai.`;

        if (stream) {
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            const messageStream = await client.messages.create({
                model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250929',
                max_tokens: 800,
                system: systemPrompt,
                messages: messages,
                stream: true,
            });

            for await (const event of messageStream) {
                if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
                    res.write(`data: ${JSON.stringify({ type: 'text', content: event.delta.text })}\n\n`);
                } else if (event.type === 'message_stop') {
                    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
                }
            }

            res.end();
        } else {
            const message = await client.messages.create({
                model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250929',
                max_tokens: 800,
                system: systemPrompt,
                messages: messages,
            });

            return res.status(200).json({
                content: message.content[0].text,
                model: message.model,
            });
        }
    } catch (error) {
        console.error('Support API Error:', error);
        return res.status(500).json({
            error: 'Failed to connect to support. Please try again or contact support@averra.ai'
        });
    }
}
