import { ArrowRight, Phone, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const HeroSection = () => {
    const { user } = useAuth();
    // Concrete, falsifiable, visual taglines
    const taglines = [
        "turning cold calls into warm conversations,",
        "turning hesitation into booked meetings,",
        "turning “who is this?” into “when can we start?”"
    ];

    const [currentTagline, setCurrentTagline] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToDemo = () => {
        const element = document.getElementById('ai-demo');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return <section className="relative container mx-auto px-4 pt-40 pb-20">
        {/* Concrete Descriptor - No "AI Badge" */}
        <div className="flex w-fit py-2 mb-6 px-5 cursor-pointer rounded-full glass border border-white/5 hover:border-white/10 transition-colors">
            <span className="text-sm font-medium text-white/80 tracking-wide">
                Unlimited Outreach. Zero Rejection.
            </span>
        </div>

        <div className="max-w-5xl relative z-10">
            {/* Refined Headline Weight */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-left font-semibold mb-8 leading-[1.1]">
                <span className="text-white block">Averra is the brand that does the talking for you,</span>
                <motion.span
                    key={currentTagline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 block"
                >
                    {taglines[currentTagline]}
                </motion.span>
            </h1>

            {/* Visual & Concrete Description */}
            <p className="text-xl text-blue-100/70 mb-10 max-w-2xl text-left leading-relaxed font-light">
                Averra is an AI caller trained on real <span className="text-white font-medium">sales psychology</span>, not generic chat scripts. It listens, responds, and steers complex conversations in real time—so your pipeline grows while your team focuses on closing.
            </p>

            {/* Luxurious, Approachable CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
                <Link to={user ? "/dashboard" : "/login"}>
                    <button className="bg-white text-black text-lg clash-display px-10 py-5 rounded-full cursor-pointer hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold flex items-center gap-2">
                        {user ? "Dashboard" : "Login Now"}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
                <button
                    onClick={scrollToDemo}
                    className="group text-white text-lg clash-display bg-white/5 border border-white/10 px-10 py-5 rounded-full cursor-pointer hover:-translate-y-1 transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3"
                >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-current" />
                    </div>
                    Hear a Live Call
                </button>
            </div>
        </div>

        {/* Visual Proof / Luxurious visual */}
        <div className="relative mx-auto max-w-6xl mt-24">
            <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                <img src="/src/assets/hero/dash-board.png" alt="Averra Dashboard Interface" className="w-full h-auto opacity-90" />
            </div>
        </div>
    </section>
};
export default HeroSection;