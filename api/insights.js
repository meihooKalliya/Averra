// API endpoint for generating daily forex insights
import Anthropic from '@anthropic-ai/sdk';

// In-memory cache (in production, use Redis or similar)
let cachedInsights = null;
let cacheTimestamp = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Check cache
        const now = Date.now();
        if (cachedInsights && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
            return res.status(200).json({
                insights: cachedInsights,
                cached: true,
                nextUpdate: new Date(cacheTimestamp + CACHE_DURATION).toISOString(),
            });
        }

        // Generate new insights
        const client = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY,
        });

        const systemPrompt = `You are a B2B sales operations expert. Generate 4 concrete, data-backed insights about cold calling performance benchmarks.

Each insight should be:
- Focused on outbound metrics (connection rates, conversion rates, dial-to-connect).
- Actionable for a sales leader.
- Concisely written (1 sentence).

Format each insight as a JSON object with:
{
  "category": "Performance|Timing|Scripting|Data",
  "title": "Short title",
  "insight": "The insight text",
  "icon": "Emoji"
}

Return ONLY a valid JSON array of 4 insights.`;

        const message = await client.messages.create({
            model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5-20250929',
            max_tokens: 1000,
            system: systemPrompt,
            messages: [
                {
                    role: 'user',
                    content: `Generate 4 B2B outbound sales insights for ${new Date().toISOString()}`,
                }
            ],
        });

        // Parse response
        let insights;
        try {
            const responseText = message.content[0].text;
            // Extract JSON from response (in case there's extra text)
            const jsonMatch = responseText.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                insights = JSON.parse(jsonMatch[0]);
            } else {
                insights = JSON.parse(responseText);
            }
        } catch (parseError) {
            console.error('Failed to parse AI response:', parseError);
            // Fallback insights
            insights = [
                {
                    category: 'Performance',
                    title: 'Dial Early',
                    insight: 'Connection rates increase by 42% when calling before 10 AM local time.',
                    icon: '⏰'
                },
                {
                    category: 'Data',
                    title: 'Verify Your List',
                    insight: 'Bounced emails and dead numbers waste 20% of your SDR effort. Use a real-time enrichment tool.',
                    icon: '📊'
                },
                {
                    category: 'Scripting',
                    title: 'Lead with Value',
                    insight: 'Mentioning a specific pain point in the first 10 seconds improves stay-on-rate by 2.5x.',
                    icon: '🧠'
                },
                {
                    category: 'Timing',
                    title: 'Persistent Follow-up',
                    insight: '80% of sales require 5 follow-up calls after the initial meeting. Automate your drip.',
                    icon: '🛡️'
                }
            ];
        }

        // Cache the insights
        cachedInsights = insights;
        cacheTimestamp = now;

        return res.status(200).json({
            insights,
            cached: false,
            nextUpdate: new Date(now + CACHE_DURATION).toISOString(),
        });

    } catch (error) {
        console.error('Insights API error:', error);
        return res.status(500).json({
            error: 'Failed to generate insights',
        });
    }
}
