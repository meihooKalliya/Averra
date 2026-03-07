// API endpoint for Claude chatbot
// This is a Vercel serverless function

import Anthropic from '@anthropic-ai/sdk';

// Rate limiting storage (in production, use Redis or similar)
const requestCounts = new Map();

// Simple rate limiting - 10 requests per minute per IP
function checkRateLimit(ip) {
    const now = Date.now();
    const key = `${ip}-${Math.floor(now / 60000)}`; // 1-minute window

    const count = requestCounts.get(key) || 0;
    if (count >= 10) {
        return false;
    }

    requestCounts.set(key, count + 1);

    // Cleanup old entries
    for (const [k] of requestCounts) {
        const timestamp = parseInt(k.split('-')[1]);
        if (now - timestamp * 60000 > 120000) {
            requestCounts.delete(k);
        }
    }

    return true;
}

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Check rate limit
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
        if (!checkRateLimit(clientIp)) {
            return res.status(429).json({
                error: 'Rate limit exceeded. Please wait a moment before sending more messages.'
            });
        }

        const { messages, stream = false } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid request: messages array required' });
        }

        // Initialize Anthropic client
        const client = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
        });

        // System prompt for Averra Sales Assistant
        const systemPrompt = `You are the AI Concierge for Averra, a B2B autonomous cold-calling platform.

Your goal is to explain how Averra works and qualify visitors for a demo.

Facts about Averra:
- It is an AI SDR that dials leads automatically (thousands per day).
- It holds real-time voice conversations with <1.2s latency.
- It qualifies leads, handles objections, and pushes meetings to Google Calendar/CRM.
- It is NOT a "predictive dialer" or "robo-caller" - it is conversational AI.
- Ideal for high-volume outbound markets (Dubai, Singapore, US).

Framework:
- Be concise, professional, and helpful.
- Use the "falsifiability" copywriting framework: be concrete and specific. Use numbers.
- Do not be generic. Instead of saying "we help you sell more", say "we book 47 meetings from 500 calls".
- Key call to action: "Book a Demo".

If asked for pricing: "We have flexible tiers based on call volume. To get a quote for your specific needs, the best step is to book a quick demo."`;

        if (stream) {
            // Set headers for streaming
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            // Create streaming response
            const messageStream = await client.messages.create({
                model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250929',
                max_tokens: 1024,
                system: systemPrompt,
                messages: messages,
                stream: true,
            });

            // Stream the response
            for await (const event of messageStream) {
                if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
                    res.write(`data: ${JSON.stringify({ type: 'text', content: event.delta.text })}\n\n`);
                } else if (event.type === 'message_stop') {
                    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
                }
            }

            res.end();
        } else {
            // Non-streaming response
            const message = await client.messages.create({
                model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250929',
                max_tokens: 1024,
                system: systemPrompt,
                messages: messages,
            });

            return res.status(200).json({
                content: message.content[0].text,
                model: message.model,
                usage: message.usage,
            });
        }
    } catch (error) {
        console.error('Claude API Error:', error);

        // Handle specific error types
        if (error.status === 401) {
            return res.status(500).json({ error: 'API authentication failed. Please check server configuration.' });
        } else if (error.status === 429) {
            return res.status(429).json({ error: 'API rate limit reached. Please try again later.' });
        }

        return res.status(500).json({
            error: 'Failed to get response from AI. Please try again.'
        });
    }
}
