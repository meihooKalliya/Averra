import { motion } from "framer-motion";
import { Shield, Zap, Globe, PieChart, Lock, Smartphone } from "lucide-react";

const FeaturesBento = () => {
    return (
        <section className="py-24 px-4 bg-[#040812] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-6">
                        Everything you need to automate your sales.
                    </h2>
                    <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
                        A complete sales infrastructure in one platform. Find leads, call them, and book meetings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-full md:h-[600px]">

                    {/* Main Large Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2 text-left">Real sales, not scripts</h3>
                                <p className="text-blue-200/70">Averra doesn’t read lines—it reads the room. It adapts mid‑call, handles curveball questions, and keeps prospects engaged instead of pushing them away.</p>
                            </div>
                            <div className="mt-8 relative rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                                <img src="/src/assets/features/sentiment-analysis.png" alt="Global Markets" className="w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Top Right Wide */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 lg:col-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-blue-300 border border-blue-500/30 px-2 py-1 rounded">SPEED: INSTANT</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2 text-left">Built for high‑stakes calls</h3>
                            <p className="text-sm text-blue-200/70">From B2B cold outreach to qualification and follow‑ups, Averra knows how to ask the right questions, uncover intent, and move buyers to the next step.</p>
                        </div>
                        <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "98%" }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="h-full bg-green-500"
                            />
                        </div>
                    </motion.div>

                    {/* Bottom Middle */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 group"
                    >
                        <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 text-left">Your best rep, on repeat</h3>
                        <p className="text-sm text-blue-200/70">Turn your top performer’s style into a repeatable system. Averra mirrors winning tone, pacing, and rebuttals so every call feels like your A‑player on the line.</p>
                    </motion.div>

                    {/* Bottom Right */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-gradient-to-br from-indigo-900/20 to-black border border-white/10 rounded-3xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/30 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <Smartphone className="w-8 h-8 text-white mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-1 text-left">Plug in, scale out</h3>
                            <p className="text-sm text-blue-200/70">Connect your CRM, define your goals, and go live. Averra scales to thousands of calls without burnout, training costs, or quality drop‑off.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesBento;


