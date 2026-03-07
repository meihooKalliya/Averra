import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Asterisk } from "lucide-react";

const AuthLayout = () => {
    const location = useLocation();
    const type = location.pathname.includes("signup") ? "signup" : "login";
    const isLogin = type === "login";

    // Gradient configurations for morphing
    const blob1Variants = {
        login: {
            x: "-10%",
            y: "0%",
            scale: 1,
            backgroundColor: "#4f46e5", // Indigo 600
        },
        signup: {
            x: "10%",
            y: "-10%",
            scale: 1.2,
            backgroundColor: "#7c3aed", // Purple 600
        }
    };

    const blob2Variants = {
        login: {
            x: "20%",
            y: "20%",
            scale: 1.2,
            backgroundColor: "#3b82f6", // Blue 500
        },
        signup: {
            x: "-20%",
            y: "10%",
            scale: 1,
            backgroundColor: "#8b5cf6", // Violet 500
        }
    };

    const blob3Variants = {
        login: {
            x: "-20%",
            y: "40%",
            scale: 1,
            backgroundColor: "#1d4ed8", // Blue 700
        },
        signup: {
            x: "30%",
            y: "30%",
            scale: 1.1,
            backgroundColor: "#6366f1", // Indigo 500
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#03060b] p-4 font-sans selection:bg-indigo-500/30 overflow-hidden">
            {/* Main Card Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-6xl h-[850px] bg-[#090e1a] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row relative shadow-2xl shadow-black/50"
            >
                {/* Left Side: Animated Visual */}
                <div className="w-full lg:w-[45%] relative overflow-hidden bg-[#050b14] p-12 flex flex-col justify-between">
                    {/* Morphing Blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            variants={blob1Variants}
                            animate={type}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 mix-blend-screen"
                        />
                        <motion.div
                            variants={blob2Variants}
                            animate={type}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-30 mix-blend-screen"
                        />
                        <motion.div
                            variants={blob3Variants}
                            animate={type}
                            transition={{ duration: 2.2, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 mix-blend-screen"
                        />
                        {/* Noise Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150" />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10">
                        <Link to="/">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2"
                            >
                                <img src="/averra_logo.png" alt="Averra Logo" className="w-full h-full object-contain" />
                            </motion.div>
                        </Link>
                    </div>

                    <div className="relative z-10 max-w-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={type}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <p className="text-indigo-300 font-medium mb-4 uppercase tracking-widest text-xs">
                                    {isLogin ? "Welcome back" : "New Account"}
                                </p>
                                <h2 className="text-4xl font-bold leading-tight text-white mb-6 clash-display">
                                    {isLogin
                                        ? "Your autonomous SDR workspace"
                                        : "The future of sales starts here"}
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    {isLogin
                                        ? "Sign in to manage your agents and track lead sentiment in real-time."
                                        : "Everything you need to automate your outbound in one API call away."}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side: Outlet for Form */}
                <div className="w-full lg:w-[55%] bg-[#090e1a] flex flex-col justify-center overflow-y-auto relative">
                    <div className="max-w-md mx-auto w-full p-8 lg:p-16">
                        <Outlet />

                        <div className="mt-10 pt-10 border-t border-white/5 text-center">
                            <p className="text-xs text-zinc-600">
                                &copy; {new Date().getFullYear()} Averra AI Inc. All rights reserved. <br />
                                <span className="mt-2 block">
                                    <Link to="/support" className="hover:text-white transition-colors">Privacy Policy</Link>
                                    <span className="mx-2">·</span>
                                    <Link to="/support" className="hover:text-white transition-colors">Terms of Service</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthLayout;
