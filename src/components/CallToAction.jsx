import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const CallToAction = () => {
    const { user } = useAuth();
    return (
        <section className="relative py-32 px-4 bg-[#040812] overflow-hidden flex items-center justify-center">

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 clash-display tracking-tight">
                        Ready to scale <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                            your outreach?
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                        Averra scales to thousands of calls without burnout, training costs, or quality drop‑off.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                Contact our team <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                            Listen to Demos
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;


