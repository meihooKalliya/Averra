import { ShieldCheck, Server, Lock } from "lucide-react";

const SecuritySection = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl rounded-3xl bg-[#080808] border border-white/5 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 clash-display">
                        Enterprise-Grade Security
                    </h2>
                    <p className="text-white/50 text-lg mb-8">
                        We process call data for Fortune 500s. Security isn't an afterthought—it's the foundation of our architecture.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white">
                            <ShieldCheck className="text-green-400" />
                            <span>SOC2 Type II Compliant</span>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <Lock className="text-green-400" />
                            <span>End-to-End Encryption (AES-256)</span>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <Server className="text-green-400" />
                            <span>Data Residency Options (US/EU)</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 bg-green-500/10 blur-[60px] rounded-full" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/AICPA_SOC_logo_2024.png" alt="SOC2 Logo" className="relative z-10 w-full object-contain grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
