// Claude API client utility for frontend
// Handles API calls to our serverless functions

/**
 * Send a message to the Claude chatbot
 * @param {Array} messages - Array of message objects with role and content
 * @param {Function} onChunk - Callback for streaming chunks (optional)
 * @returns {Promise<string>} - The assistant's response
 */
export async function sendChatMessage(messages, onChunk = null) {
    const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3000/api/chat'  // Development URL
        : '/api/chat';  // Production URL

    try {
        if (onChunk) {
            // Streaming mode
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages,
                    stream: true,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to get response');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = JSON.parse(line.substring(6));
                        if (data.type === 'text') {
                            fullResponse += data.content;
                            onChunk(data.content);
                        } else if (data.type === 'done') {
                            return fullResponse;
                        }
                    }
                }
            }

            return fullResponse;
        } else {
            // Non-streaming mode
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages,
                    stream: false,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to get response');
            }

            const data = await response.json();
            return data.content;
        }
    } catch (error) {
        console.error('Chat API error:', error);
        throw error;
    }
}

/**
 * Send a message to the support agent
 * @param {Array} messages - Array of message objects
 * @param {Function} onChunk - Callback for streaming chunks (optional)
 * @returns {Promise<string>} - The support response
 */
export async function sendSupportMessage(messages, onChunk = null) {
    const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3000/api/support'
        : '/api/support';

    try {
        if (onChunk) {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages,
                    stream: true,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to get response');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = JSON.parse(line.substring(6));
                        if (data.type === 'text') {
                            fullResponse += data.content;
                            onChunk(data.content);
                        } else if (data.type === 'done') {
                            return fullResponse;
                        }
                    }
                }
            }

            return fullResponse;
        } else {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages,
                    stream: false,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to get response');
            }

            const data = await response.json();
            return data.content;
        }
    } catch (error) {
        console.error('Support API error:', error);
        throw error;
    }
}

/**
 * Format messages for the Claude API
 * @param {Array<{role: string, content: string}>} messages
 * @returns {Array} Formatted messages
 */
export function formatMessages(messages) {
    return messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
    }));
}

export default {
    sendChatMessage,
    sendSupportMessage,
    formatMessages,
};
