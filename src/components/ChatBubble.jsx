import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

/**
 * ChatBubble - Floating button to open the chat widget
 */
export default function ChatBubble({ onClick, isOpen, unreadCount = 0 }) {
    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClick}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50 flex items-center justify-center text-white cursor-pointer group"
                    aria-label="Open chat"
                >
                    {/* Pulsing animation ring */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-20"></span>

                    {/* Icon */}
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    >
                        <MessageCircle className="w-7 h-7" />
                    </motion.div>

                    {/* Unread count badge */}
                    {unreadCount > 0 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                        >
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </motion.div>
                    )}

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Ask AI Assistant
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
