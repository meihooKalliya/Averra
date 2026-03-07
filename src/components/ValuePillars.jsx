import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Database, Lock, BarChart3, Radio, Cpu } from "lucide-react";

/**
 * Enhanced Core Pillars - Creative Masonry Bento Layout
 * Uses falsifiable, concrete copy instead of generic benefits.
 */
const pillars = [
    {
        title: "Ultra-Low Latency",
        description: "Faster than the human ear can detect delay. Our proprietary voice engine processes speech mid-stream, making conversations indistinguishable from humans.",
        icon: Zap,
        gradient: "from-blue-500 via-indigo-500 to-cyan-500",
        colSpan: "md:col-span-2",
        stats: "Instant Response"
    },
    {
        title: "Instant Global Workforce",
        description: "Deploy agents in one click. Localized accents for all major markets. No hiring freeze, no onboarding, no churn.",
        icon: Globe,
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        colSpan: "md:col-span-1",
        stats: "Global Reach"
    },
    {
        title: "Deep Reconnaissance",
        description: "The AI scrapes LinkedIn, News, and verified sources before every call. It knows your prospect's funding round, recent posts, and tech stack.",
        icon: Database,
        gradient: "from-emerald-500 via-teal-500 to-green-500",
        colSpan: "md:col-span-1",
        stats: "Live Data Integration"
    },
    {
        title: "Anti-Hallucination Guardrails",
        description: "Strict SOC2 logic gates prevent the AI from making up facts. It stays on script, handles objections with factual data, and maintains brand integrity.",
        icon: Shield,
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        colSpan: "md:col-span-2",
        stats: "Verified Accuracy"
    }
];

const ValuePillars = () => {
    return (
        <section className="py-32 bg-[#040812] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold mb-6 clash-display text-white leading-tight"
                        >
                            The Engine <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                Behind the Calls
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-blue-100/60 text-xl font-light leading-relaxed"
                        >
                            We built Averra on four non-negotiable pillars. No fluff. Just engineering that converts cold leads into closed revenue.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 overflow-hidden ${pillar.colSpan}`}
                        >
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-[22px] m-[1px]" />

                            <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                                <div>
                                    <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                        <pillar.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-blue-100/60 text-lg leading-relaxed mb-8">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                    <span className={`text-sm font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                                        {pillar.stats}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.gradient} animate-pulse`} />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuePillars;


