
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "../../lib/utils";

const MetricCard = ({ title, value, trend, trendValue, icon: Icon, delay = 0 }) => {
    const isPositive = trend === "up";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className="group relative p-6 rounded-2xl bg-[#09090b] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-xl overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 transform translate-x-10 -translate-y-10" />

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                {trend && (
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border",
                        isPositive
                            ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                            : "text-rose-400 bg-rose-500/10 border-rose-500/20"
                    )}>
                        {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {trendValue}
                    </div>
                )}
            </div>

            <div className="relative z-10">
                <h3 className="text-zinc-500 text-sm font-medium mb-1">{title}</h3>
                <div className="text-2xl font-bold text-white tracking-tight clash-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">
                    {value}
                </div>
            </div>
        </motion.div>
    );
};

export default MetricCard;
