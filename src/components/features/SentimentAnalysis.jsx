import { motion } from "framer-motion";
import { Smile, BarChart2, AlertCircle, Clock } from "lucide-react";

const SentimentAnalysis = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#040812] to-[#020408] border-y border-white/5">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">

                <div className="w-full md:w-1/2">
                    <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 block">
                        Real-Time Intelligence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 clash-display leading-tight">
                        Reads the Room <br />
                        <span className="text-white/40">Better Than Humans</span>
                    </h2>
                    <p className="text-blue-100/60 text-lg mb-8 leading-relaxed">
                        Averra analyzes tone, pace, and hesitation in real-time. If a prospect sounds rushed, it pivots to a concise pitch. If they sound skeptical, it switches to social proof.
                    </p>

                    <ul className="space-y-4">
                        <ListItem icon={Smile} title="Sentiment Detection" desc="Detects frustration vs curiosity in <200ms" />
                        <ListItem icon={AlertCircle} title="Objection Categorization" desc="Tags logs with 'Price', 'Competitor', 'Timing'" />
                        <ListItem icon={BarChart2} title="Converstion Analytics" desc="Dashboard of market trends and common pushbacks" />
                    </ul>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                        {/* Fake waveform / analysis UI */}
                        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div>
                                <div className="text-white font-medium">Prospect #8492</div>
                                <div className="text-xs text-white/40">Duration: 00:42 • <span className="text-green-400">Positive Intent</span></div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="bg-white/5 p-3 rounded-lg rounded-tl-none border border-white/5">
                                <p className="text-white/80 text-sm">"Actually, that sounds interesting. How does the pricing work?"</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded border border-green-500/30">Interest Signal Detected</span>
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30">Pricing Inquiry</span>
                            </div>
                        </div>

                        <div className="h-32 flex items-end justify-between gap-1 overflow-hidden opacity-50">
                            {[40, 60, 30, 80, 50, 90, 40, 20, 50, 70, 60, 40, 80, 50, 30, 60, 40, 80, 50, 20].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 10 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-blue-500/50 rounded-t-sm"
                                />
                            ))}
                        </div>
                        <div className="mt-6 rounded-xl overflow-hidden border border-white/5">
                            <img src="/src/assets/features/sentiment-analysis.png" alt="Sentiment Analysis Visual" className="w-full h-auto opacity-70" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const ListItem = ({ icon: Icon, title, desc }) => (
    <div className="flex gap-4 items-start">
        <div className="mt-1 p-2 bg-white/5 rounded-lg text-white">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h4 className="text-white font-bold">{title}</h4>
            <p className="text-white/40 text-sm">{desc}</p>
        </div>
    </div>
);

export default SentimentAnalysis;
