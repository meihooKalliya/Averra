import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Mic, CheckCircle2, Volume2 } from 'lucide-react';
import { sendChatMessage } from '../utils/claudeClient';

/**
 * AIDemo -> Rebranded to "Live Call Simulator"
 * Shows Averra handling real sales scenarios
 */
export default function AIDemo() {
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [streamingText, setStreamingText] = useState('');

    // Concrete Sales Scenarios
    const scenarios = [
        {
            id: 1,
            icon: '🛡️',
            question: "Prospect says: 'I'm not interested, we already use a competitor.'",
            prompt: "Handle this sales objection: 'I'm not interested, we already use a competitor.' Be concise, empathetic, and specific. Pivot to value.",
            category: 'Objection Handling'
        },
        {
            id: 2,
            icon: '💰',
            question: "Prospect asks: 'How much does this cost?' (Too early in call)",
            prompt: "Handle a price objection early in a cold call. Deflect price politely and focus on value/ROI first to keep the conversation alive.",
            category: 'Negotiation'
        },
        {
            id: 3,
            icon: '📅',
            question: "Prospect says: 'Send me an email and I'll look at it.'",
            prompt: "Handle the 'send me an email' brush-off. Acknowledge it, but push for a micro-commitment or a specific time to follow up.",
            category: 'Closing'
        },
        {
            id: 4,
            icon: '👋',
            question: "Opening the call: 'Who is this and why are you calling?'",
            prompt: "Give a perfect 15-second cold call opener. State name, company, permission based opener or relevance statement. Be authoritative but polite.",
            category: 'Opener'
        }
    ];

    const handleScenarioClick = async (scenario) => {
        setSelectedScenario(scenario);
        setResponse('');
        setStreamingText('');
        setIsLoading(true);

        try {
            const messages = [
                {
                    role: 'user',
                    content: scenario.prompt // Using hidden prompt for better demo results
                }
            ];

            let fullResponse = '';
            await sendChatMessage(messages, (chunk) => {
                fullResponse += chunk;
                setStreamingText(fullResponse);
            });

            setResponse(fullResponse);
        } catch (error) {
            console.error('Demo error:', error);
            setResponse('Connection interrupted. Please try another scenario.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative py-32 px-4 overflow-hidden bg-[#040812]">
            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 clash-display"
                    >
                        We don't train models. <br />
                        <span className="text-indigo-400">We train killers.</span>
                    </motion.h2>

                    <p className="text-xl text-blue-100/60 max-w-2xl mx-auto font-light">
                        Watch Averra handle messy, high‑pressure sales calls in real time—no rigid scripts, just sharp, high‑IQ improvisation that actually moves deals forward.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Scenarios List */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                            Select a Scenario
                        </h3>

                        {scenarios.map((s, index) => (
                            <motion.button
                                key={s.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleScenarioClick(s)}
                                disabled={isLoading}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${selectedScenario?.id === s.id
                                    ? 'bg-indigo-500/10 border-indigo-500/50 shadow-lg shadow-indigo-900/20'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors ${selectedScenario?.id === s.id ? 'bg-indigo-500/20' : 'bg-white/5 group-hover:bg-white/10'
                                        }`}>
                                        {s.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{s.category}</span>
                                            {selectedScenario?.id === s.id && <CheckCircle2 className="w-3 h-3 text-indigo-400" />}
                                        </div>
                                        <p className={`text-lg font-medium leading-snug ${selectedScenario?.id === s.id ? 'text-white' : 'text-white/80 group-hover:text-white'
                                            }`}>
                                            {s.question}
                                        </p>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Simulator Terminal */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none opacity-20"></div>

                        <div className="relative min-h-[500px] bg-[#020408] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col">

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <span className="text-sm font-medium text-white/60 tracking-wider">LIVE CALL</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {!selectedScenario && !isLoading && !response && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center"
                                        >
                                            <Mic className="w-16 h-16 text-white/10 mx-auto mb-6" />
                                            <h3 className="text-xl text-white/40 font-light">Waiting for call...</h3>
                                        </motion.div>
                                    )}

                                    {(isLoading || response) && (
                                        <div className="space-y-8">
                                            {/* Prospect Line */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex gap-4"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-gray-700/50 flex-shrink-0 flex items-center justify-center">
                                                    <span className="text-xs text-white/50">PROS</span>
                                                </div>
                                                <div className="bg-white/5 rounded-2xl rounded-tl-none p-5 max-w-[85%] border border-white/5">
                                                    <p className="text-white/90 text-lg">{selectedScenario?.question}</p>
                                                </div>
                                            </motion.div>

                                            {/* Averra Line */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex flex-row-reverse gap-4"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                                    <Volume2 className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="bg-indigo-600/10 rounded-2xl rounded-tr-none p-5 max-w-[85%] border border-indigo-500/20">
                                                    {streamingText ? (
                                                        <p className="text-indigo-100 text-lg leading-relaxed">
                                                            {streamingText}
                                                            <span className="inline-block w-2 h-5 bg-indigo-400 ml-1 animate-pulse align-middle"></span>
                                                        </p>
                                                    ) : (
                                                        <div className="flex gap-2 py-2">
                                                            <div className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce"></div>
                                                            <div className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce delay-100"></div>
                                                            <div className="w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce delay-200"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Global Stats/Proof */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2 clash-display">1.2s</div>
                        <div className="text-white/40 text-sm tracking-widest uppercase">Avg Latency</div>
                    </div>
                    <div className="text-center border-l border-white/5">
                        <div className="text-4xl font-bold text-white mb-2 clash-display">24/7</div>
                        <div className="text-white/40 text-sm tracking-widest uppercase">Uptime</div>
                    </div>
                    <div className="text-center border-l border-white/5">
                        <div className="text-4xl font-bold text-white mb-2 clash-display">98%</div>
                        <div className="text-white/40 text-sm tracking-widest uppercase">Sentiment Analysis Accuracy</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
