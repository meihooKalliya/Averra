import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const BlogHero = () => {
    return (
        <section className="min-h-[90vh] relative overflow-hidden bg-[#040812] pt-20 flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-blue-200/70 font-mono text-sm tracking-widest uppercase">Sales Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight clash-display">
                        Insights that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 italic">
                            Scale Revenue.
                        </span>
                    </h1>

                    <p className="text-blue-100/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                        Stay ahead of the curve with expert analysis on AI sales automation, scripts, and cold calling strategies.
                    </p>

                    <div className="bg-zinc-900/50 backdrop-blur-md rounded-full p-2 pl-6 border border-white/10 flex items-center max-w-md w-full focus-within:border-indigo-500/50 transition-colors">
                        <Mail className="w-5 h-5 text-zinc-500 mr-3" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-white placeholder-zinc-500 w-full focus:outline-none"
                        />
                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-zinc-500">Join <span className="text-white font-bold">15,000+</span> sales leaders receiving daily updates.</p>
                    </div>
                </motion.div>
            </div>

            {/* Right Content - Visual */}
            <div className="w-full md:w-1/2 relative bg-[#040812] overflow-hidden min-h-[50vh] md:min-h-auto">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[100px]" />

                {/* Floating Cards Animation */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-lg aspect-[4/5] md:aspect-square"
                    >
                        {/* Main Image Card */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                                alt="Market Analysis"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">
                                    Featured Story
                                </span>
                                <h3 className="text-2xl font-bold text-white leading-snug">
                                    Cold Calling 2.0: The Rise of AI Agents
                                </h3>
                            </div>
                        </div>

                        {/* Floating Widgets */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-48 bg-[#040812]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-zinc-400 text-xs">Calls/Min</span>
                                <span className="text-green-400 text-xs">+158%</span>
                            </div>
                            <div className="h-16 w-full opacity-50">
                                {/* Simple SVG Chart */}
                                <svg viewBox="0 0 100 40" className="w-full h-full stroke-green-500 fill-none stroke-2">
                                    <path d="M0 35 C 20 35, 20 10, 40 20 S 60 30, 80 5 S 100 15, 100 15" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 w-40 bg-[#040812]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-xl hidden md:flex"
                        >
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold">New Post</p>
                                <p className="text-zinc-500 text-xs">Just now</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;


