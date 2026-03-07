import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

/**
 * ChatMessage component - displays individual messages in the chat
 */
export default function ChatMessage({ message, isUser }) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(message.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
        >
            <div className={`flex items-start gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${isUser
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                            : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'
                        }`}
                >
                    {isUser ? 'U' : 'AI'}
                </div>

                {/* Message bubble */}
                <div className="flex-1">
                    <div
                        className={`relative rounded-2xl px-4 py-3 ${isUser
                                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-tr-none'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-tl-none'
                            }`}
                    >
                        {/* Message content */}
                        <div className="prose prose-invert prose-sm max-w-none">
                            {formatMessageContent(message.content)}
                        </div>

                        {/* Copy button for AI messages */}
                        {!isUser && (
                            <button
                                onClick={handleCopy}
                                className="absolute -bottom-2 -right-2 p-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-colors"
                                title="Copy message"
                            >
                                {copied ? (
                                    <Check className="w-3 h-3 text-emerald-400" />
                                ) : (
                                    <Copy className="w-3 h-3 text-white/70" />
                                )}
                            </button>
                        )}
                    </div>

                    {/* Timestamp */}
                    <div className={`text-xs text-white/50 mt-1 px-2 ${isUser ? 'text-right' : 'text-left'}`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/**
 * Format message content with basic markdown support
 */
function formatMessageContent(content) {
    // Split by newlines and render paragraphs
    const paragraphs = content.split('\n\n');

    return paragraphs.map((para, idx) => {
        // Handle bullet points
        if (para.trim().startsWith('- ') || para.trim().startsWith('• ')) {
            const items = para.split('\n').filter(line => line.trim());
            return (
                <ul key={idx} className="list-disc list-inside space-y-1 my-2">
                    {items.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                            {item.replace(/^[-•]\s*/, '')}
                        </li>
                    ))}
                </ul>
            );
        }

        // Handle numbered lists
        if (/^\d+\.\s/.test(para.trim())) {
            const items = para.split('\n').filter(line => line.trim());
            return (
                <ol key={idx} className="list-decimal list-inside space-y-1 my-2">
                    {items.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                            {item.replace(/^\d+\.\s*/, '')}
                        </li>
                    ))}
                </ol>
            );
        }

        // Handle bold text **text**
        let formatted = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Handle italic text *text*
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Handle code `code`
        formatted = formatted.replace(/`(.*?)`/g, '<code class="px-1 py-0.5 bg-black/30 rounded text-sm">$1</code>');

        return (
            <p key={idx} className="leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
    });
}
