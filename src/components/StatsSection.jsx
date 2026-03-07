import { motion } from "framer-motion";

const stats = [
    { label: "Active Agents", value: "25K+", desc: "Deployed worldwide" },
    { label: "Calls Made", value: "10M+", desc: "In the last quarter" },
    { label: "Response Time", value: "<500ms", desc: "Human-like latency" },
    { label: "Countries", value: "50+", desc: "Native accents" },
];

const StatsSection = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                {stat.value}
                            </h3>
                            <p className="text-indigo-400 font-medium mb-1">{stat.label}</p>
                            <p className="text-xs text-zinc-500 uppercase tracking-wide">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
