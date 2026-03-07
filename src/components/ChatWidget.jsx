import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatBubble from './ChatBubble';
import { sendChatMessage } from '../utils/claudeClient';

/**
 * ChatWidget - Main chat interface component
 */
export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'assistant',
            content: "👋 Hi there. I'm Averra's concierge.\n\nI can explain how our autonomous SDRs consistently book meetings, or help you calculate your potential ROI.\n\nWhat questions do you have about automating your outbound?",
            timestamp: new Date(),
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [streamingMessage, setStreamingMessage] = useState('');

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, streamingMessage]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            role: 'user',
            content: inputValue,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setError(null);
        setStreamingMessage('');

        try {
            // Prepare messages for API (exclude IDs and timestamps)
            const apiMessages = [...messages, userMessage].map(msg => ({
                role: msg.role,
                content: msg.content,
            }));

            let assistantMessageId = Date.now() + 1;
            let fullResponse = '';

            // Send request with streaming
            await sendChatMessage(apiMessages, (chunk) => {
                fullResponse += chunk;
                setStreamingMessage(fullResponse);
            });

            // Add complete message to history
            const assistantMessage = {
                id: assistantMessageId,
                role: 'assistant',
                content: fullResponse,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
            setStreamingMessage('');
        } catch (err) {
            console.error('Chat error:', err);
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClearError = () => {
        setError(null);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat bubble button */}
            <ChatBubble onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#111] p-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Averra Concierge</h3>
                                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Automated Support</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Messages container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                            {messages.map(message => (
                                <ChatMessage
                                    key={message.id}
                                    message={message}
                                    isUser={message.role === 'user'}
                                />
                            ))}

                            {/* Streaming message */}
                            {streamingMessage && (
                                <ChatMessage
                                    message={{
                                        id: 'streaming',
                                        role: 'assistant',
                                        content: streamingMessage,
                                        timestamp: new Date(),
                                    }}
                                    isUser={false}
                                />
                            )}

                            {/* Loading indicator */}
                            {isLoading && !streamingMessage && (
                                <div className="flex items-center gap-2 text-white/60">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span className="text-sm">AI is thinking...</span>
                                </div>
                            )}

                            {/* Error message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 flex items-start gap-2"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <p className="text-sm text-red-200">{error}</p>
                                        <button
                                            onClick={handleClearError}
                                            className="text-xs text-red-300 hover:text-red-100 underline mt-1"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input area */}
                        <div className="border-t border-white/20 p-4 bg-black/20 backdrop-blur-sm">
                            <div className="flex items-end gap-2">
                                <textarea
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about autonomous SDRs..."
                                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32 scrollbar-thin scrollbar-thumb-white/20"
                                    rows={1}
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
                                    aria-label="Send message"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5 text-white" />
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-white/40 mt-2 text-center">
                                AI can make mistakes. Verify important information.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
