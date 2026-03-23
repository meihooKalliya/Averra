import { motion } from "framer-motion";
import { Check, X, TrendingUp, Users, Clock, DollarSign, Bot, User } from "lucide-react";

const FeatureComparison = () => {
    const metrics = [
        {
            name: "Dials Per Day",
            averra: "1,000+",
            human: "50-80",
            icon: Users,
            averraSub: "Unlimited Scale",
            humanSub: "Physical Limit"
        },
        {
            name: "Cost Per Meeting",
            averra: "₹575",
            human: "₹15,000+",
            icon: DollarSign,
            averraSub: "Predictable",
            humanSub: "High Overhead"
        },
        {
            name: "Response Latency",
            averra: "< 0.5s",
            human: "Variable",
            icon: Clock,
            averraSub: "Instantaneous",
            humanSub: "Seconds/Minutes"
        },
        {
            name: "Sentiment IQ",
            averra: "100%",
            human: "Inconsistent",
            icon: TrendingUp,
            averraSub: "Data-Driven",
            humanSub: "Mood-Dependent"
        },
    ];

    return (
        <section className="py-32 bg-[#040812] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-semibold mb-6"
                    >
                        <TrendingUp className="w-4 h-4" />
                        <span>ROI Comparison</span>
                    </motion.div>
                    <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-indigo-500/20 to-transparent mb-16 max-w-5xl mx-auto shadow-2xl shadow-indigo-500/5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)] rounded-3xl" />
                        <div className="bg-[#040812]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="text-zinc-300 text-xl md:text-2xl font-light mx-auto leading-relaxed mb-8"
                            >
                                The most expensive thing in your sales process isn't your CRM, your stack, or your office. 
                                <span className="text-white font-medium"> It's the hours between a lead going cold and a human picking up the phone.</span>
                            </motion.p>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-zinc-400 text-lg md:text-xl font-light mx-auto leading-relaxed mb-10"
                            >
                                Averra removes that gap entirely. Every conversation your team would've had — the follow-ups, the cold opens, the qualification calls — happens at a fraction of what it costs to staff for them. <span className="text-indigo-300">Not because quality is cut. Because the overhead is.</span>
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="inline-block px-8 py-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"
                            >
                                <p className="text-indigo-400 text-lg font-semibold tracking-wide">
                                    The teams using Averra aren't just moving faster. They're operating at a cost structure their competitors genuinely can't reverse-engineer with headcount alone.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Averra Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-1 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-500/10"
                    >
                        <div className="bg-[#0b1224] rounded-[22px] p-8 h-full border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Bot className="w-48 h-48 text-indigo-400" />
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/40">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">Averra AI Agent</h3>
                                    <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider">Autonomous Efficiency</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {metrics.map((metric, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                                <metric.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-zinc-500 uppercase font-bold">{metric.name}</p>
                                                <p className="text-white font-semibold">{metric.averra}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-400/10 px-2 py-1 rounded-full">
                                                {metric.averraSub}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Human Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-1 rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/10"
                    >
                        <div className="bg-[#040812] rounded-[22px] p-8 h-full border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <User className="w-48 h-48 text-zinc-400" />
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-300">Traditional Human SDR</h3>
                                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Conventional Setup</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {metrics.map((metric, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
                                                <metric.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-zinc-600 uppercase font-bold">{metric.name}</p>
                                                <p className="text-zinc-400 font-semibold">{metric.human}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] text-zinc-600 font-mono bg-zinc-800 px-2 py-1 rounded-full">
                                                {metric.humanSub}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Final Verdict */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/50 via-blue-950/30 to-indigo-950/50 border border-white/10 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div>
                            <p className="text-indigo-400 font-mono text-sm uppercase mb-2">Total Advantage</p>
                            <h4 className="text-4xl font-semibold text-white clash-display">26x More Efficient</h4>
                        </div>
                        <div className="h-12 w-px bg-white/10 hidden md:block" />
                        <div>
                            <p className="text-indigo-400 font-mono text-sm uppercase mb-2">Cost Reduction</p>
                            <h4 className="text-4xl font-semibold text-white clash-display">96% Lower Cost</h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureComparison;
