
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, MicOff, PhoneOff, User, Bot, Play, Pause } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/utils";

const TranscriptDrawer = ({ isOpen, onClose, call }) => {
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);

    // Simulate transcript generation
    useEffect(() => {
        if (!isOpen || !call) return;

        setMessages([]); // Reset on open

        const introMessages = [
            { role: "ai", text: `Hello, this is Averra calling for ${call.prospect}. Am I speaking with the right person?` },
            { role: "user", text: "Yes, this is speaking. Who is this?" },
            { role: "ai", text: `Hi ${call.prospect}, I'm an AI associate calling from Averra. I noticed your company, ${call.company}, is looking to scale its outbound sales.` },
            { role: "user", text: "We might be. What do you guys do exactly?" },
            { role: "ai", text: "We provide autonomous AI SDRs that can dial every lead in your pipeline simultaneously, just like I'm doing right now. We consistently book meetings for your sales team." },
            { role: "user", text: "Wait, you're an AI? You sound pretty real." },
            { role: "ai", text: "I appreciate that! Yes, I'm a fully autonomous voice agent. The goal is to let your human team focus on closing while I handle the cold outreach." },
            { role: "user", text: "Interesting. How much does it cost?" },
            { role: "ai", text: "Pricing depends on volume, but we usually start with a pilot. Do you have 15 minutes later this week to see a full demo?" }
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < introMessages.length) {
                setMessages(prev => [...prev, introMessages[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1500); // New message every 1.5s

        return () => clearInterval(interval);
    }, [isOpen, call]);

    // Auto-scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0b1120] border-l border-white/10 z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0b1120]">
                            <div>
                                <h3 className="text-lg font-bold text-white clash-display">Live Transcript</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-xs text-emerald-400 font-medium">Call in Progress • {call?.duration}</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-zinc-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Transcript Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#090e1a]">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex gap-3 max-w-[90%]",
                                        msg.role === "ai" ? "mr-auto" : "ml-auto flex-row-reverse"
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5",
                                        msg.role === "ai" ? "bg-indigo-500/10 text-indigo-400" : "bg-zinc-800 text-zinc-400"
                                    )}>
                                        {msg.role === "ai" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm leading-relaxed",
                                        msg.role === "ai"
                                            ? "bg-indigo-500/10 text-indigo-100 rounded-tl-none border border-indigo-500/10"
                                            : "bg-zinc-800/50 text-zinc-300 rounded-tr-none border border-white/5"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Controls */}
                        <div className="p-6 border-t border-white/5 bg-[#0b1120]">
                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/5">
                                    <Mic className="w-5 h-5" />
                                    <span className="text-xs font-medium">Barge In</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all border border-white/5">
                                    <MicOff className="w-5 h-5" />
                                    <span className="text-xs font-medium">Whisper</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-all">
                                    <PhoneOff className="w-5 h-5" />
                                    <span className="text-xs font-medium">Terminate</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TranscriptDrawer;
