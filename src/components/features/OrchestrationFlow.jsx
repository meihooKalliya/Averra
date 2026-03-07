import { motion } from "framer-motion";
import { GitBranch, Database, Calendar, Mail, MessageSquare, Phone } from "lucide-react";

/**
 * Visualizing the orchestration process
 * Lead List -> Enrichment -> Voice AI -> CRM update
 */
const OrchestrationFlow = () => {
    return (
        <section className="py-32 bg-[#040812] relative overflow-hidden">
            <div className="absolute top-0 right-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 clash-display">
                        Complete Sales Orchestration
                    </h2>
                    <p className="text-blue-100/60 text-lg max-w-2xl mx-auto">
                        From raw lead list to booked meeting, Averra handles the entire lifecycle without human intervention.
                    </p>
                    <div className="mt-12 relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src="/src/assets/features/orchestration-flow.png" alt="Orchestration Flow" className="w-full h-auto opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent" />
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {/* Step 1 */}
                        <StepCard
                            icon={Database}
                            step="01"
                            title="Ingestion"
                            desc="Upload CSV or sync CRM. Averra validates numbers instantly."
                        />
                        {/* Step 2 */}
                        <StepCard
                            icon={GitBranch}
                            step="02"
                            title="Enrichment"
                            desc="AI research gathers prospect news, funding, and tech stack."
                        />
                        {/* Step 3 */}
                        <StepCard
                            icon={Phone}
                            step="03"
                            title="Execution"
                            desc="Concurrent 50-channel dialing. Sub-second AI voice latency."
                        />
                        {/* Step 4 */}
                        <StepCard
                            icon={Calendar}
                            step="04"
                            title="Conversion"
                            desc="Meeting booked on calendar. Call summary synced to Hubspot."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ icon: Icon, step, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl relative group hover:border-blue-500/30 transition-all duration-300"
    >
        <span className="text-4xl font-bold text-white/5 absolute top-4 right-4">{step}</span>
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export default OrchestrationFlow;
