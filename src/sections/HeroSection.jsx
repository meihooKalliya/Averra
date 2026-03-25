import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    const [taglineIndex, setTaglineIndex] = useState(0);
    const taglines = [
        "turning cold calls into warm conversations,",
        "turning hesitation into booked meetings,",
        'turning \u201cwho is this?\u201d into \u201cwhen can we start?\u201d'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-4">

            {/* ─── Slowly Morphing Gradient — matching reference ─── */}
            <div className="absolute inset-0 -z-10 bg-[#06050e]">

                {/* Top-right corner: strong violet/purple wash (reference's dominant corner) */}
                <motion.div
                    animate={{
                        x: [0, -60, 40, -20, 0],
                        y: [0, 50, -30, 20, 0],
                        scale: [1, 1.15, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vh] rounded-full blur-[140px]"
                    style={{ background: "radial-gradient(circle, rgba(147,93,209,0.45) 0%, rgba(120,70,200,0.2) 50%, transparent 80%)" }}
                />

                {/* Bottom-left corner: soft lavender glow */}
                <motion.div
                    animate={{
                        x: [0, 70, -30, 50, 0],
                        y: [0, -50, 40, -30, 0],
                        scale: [1, 0.85, 1.2, 0.95, 1],
                    }}
                    transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute -bottom-[15%] -left-[15%] w-[65vw] h-[60vh] rounded-full blur-[130px]"
                    style={{ background: "radial-gradient(circle, rgba(168,130,230,0.35) 0%, rgba(140,100,210,0.15) 50%, transparent 80%)" }}
                />

                {/* Center wash: bright white-lavender core (reference's lighter center) */}
                <motion.div
                    animate={{
                        scale: [1, 1.08, 0.95, 1.05, 1],
                        opacity: [0.4, 0.55, 0.35, 0.5, 0.4],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full blur-[160px]"
                    style={{ background: "radial-gradient(circle, rgba(220,210,255,0.25) 0%, rgba(180,160,240,0.08) 60%, transparent 85%)" }}
                />

                {/* Top-left accent: subtle pink tint */}
                <motion.div
                    animate={{
                        x: [0, 40, -20, 30, 0],
                        y: [0, 30, -40, 10, 0],
                        scale: [1, 1.2, 0.9, 1.15, 1],
                    }}
                    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                    className="absolute -top-[5%] -left-[5%] w-[40vw] h-[40vh] rounded-full blur-[120px]"
                    style={{ background: "radial-gradient(circle, rgba(190,140,230,0.25) 0%, transparent 70%)" }}
                />

                {/* Bottom-right: faint purple tail */}
                <motion.div
                    animate={{
                        x: [0, -50, 20, -30, 0],
                        y: [0, -30, 50, -20, 0],
                        scale: [1, 1.1, 0.85, 1.05, 1],
                    }}
                    transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                    className="absolute -bottom-[10%] -right-[5%] w-[45vw] h-[35vh] rounded-full blur-[110px]"
                    style={{ background: "radial-gradient(circle, rgba(130,80,200,0.2) 0%, transparent 70%)" }}
                />

                {/* Subtle grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "128px"
                    }}
                />
            </div>

            {/* ─── Badge ─── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-indigo-300 font-medium tracking-wide"
            >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                AI-Powered Outbound Calling
            </motion.div>

            {/* ─── Headline ─── */}
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 clash-display max-w-5xl"
            >
                Automate your outreach
                <br />
                with{" "}
                <span className="relative inline-block px-4 py-1 mx-1 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
                    Averra
                    {/* Arrow accents like the reference */}
                    <span className="absolute -left-7 top-1/2 -translate-y-1/2 text-indigo-400/60 text-3xl pointer-events-none select-none hidden md:block">◂</span>
                    <span className="absolute -right-7 top-1/2 -translate-y-1/2 text-indigo-400/60 text-3xl pointer-events-none select-none hidden md:block">▸</span>
                </span>
            </motion.h1>

            {/* ─── Rotating tagline ─── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="h-8 mb-2 overflow-hidden"
            >
                <motion.p
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-lg text-indigo-300/60 font-light italic"
                >
                    {taglines[taglineIndex]}
                </motion.p>
            </motion.div>

            {/* ─── Subheadline ─── */}
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center text-lg md:text-xl text-zinc-400 max-w-2xl mt-4 mb-10 leading-relaxed font-light"
            >
                Averra is an AI caller trained on real{" "}
                <span className="text-white font-medium">sales psychology</span>, not generic chat scripts. It listens, responds, and steers complex conversations in real time — so your pipeline grows while your team focuses on closing.
            </motion.p>

            {/* ─── CTA Buttons ─── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <Link to="/contact">
                    <button className="bg-white text-black text-base clash-display px-8 py-4 rounded-full cursor-pointer hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-white/20 font-bold flex items-center gap-2">
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
                <Link to="/features">
                    <button className="bg-white/5 border border-white/10 text-white text-base px-8 py-4 rounded-full cursor-pointer hover:bg-white/10 transition-all font-medium backdrop-blur-sm">
                        Explore Features
                    </button>
                </Link>
            </motion.div>

            {/* ─── Floating stat badges ─── */}
            <div className="relative w-full max-w-4xl mx-auto mt-20 h-32 hidden md:block">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 top-0 flex items-center gap-3 bg-[#0d1226]/80 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl"
                >
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Cost / Meeting</p>
                        <p className="text-white font-bold text-sm">₹575 only</p>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center gap-3 bg-[#0d1226]/80 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl"
                >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Latency</p>
                        <p className="text-white font-bold text-sm">&lt; 0.5s response</p>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute right-0 top-0 flex items-center gap-3 bg-[#0d1226]/80 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl"
                >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Uptime</p>
                        <p className="text-white font-bold text-sm">24 / 7 Active</p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default HeroSection;