
import { motion } from "framer-motion";
import { Mic, Phone, Clock, MoreVertical, Activity } from "lucide-react";
import { cn } from "../../lib/utils";

const LiveCallCard = ({ call }) => {
    // Generate random bar heights for a "waveform" effect
    const bars = Array.from({ length: 20 }, () => Math.random() * 24 + 4);

    const getSentimentColor = (s) => {
        if (s === 'positive') return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
        if (s === 'negative') return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group bg-[#09090b] border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 rounded-lg hover:bg-white/10 text-zinc-400">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center relative">
                        <Phone className="w-4 h-4 text-white" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-indigo-500 border-2 border-[#09090b] rounded-full animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium text-sm">{call.prospect}</h4>
                        <p className="text-zinc-500 text-xs">{call.company}</p>
                    </div>
                </div>
                <span className={cn("text-[10px] uppercase font-bold px-2 py-1 rounded-full border", getSentimentColor(call.sentiment))}>
                    {call.sentiment}
                </span>
            </div>

            {/* Waveform Visualization */}
            <div className="h-12 flex items-center justify-center gap-[2px] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {bars.map((height, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [height, height * 0.5, height] }}
                        transition={{
                            duration: 0.5 + Math.random() * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                        className="w-1 rounded-full bg-indigo-500"
                        style={{ height }}
                    />
                ))}
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-white/5 pt-3">
                <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="font-mono text-indigo-300">{call.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    <span>{call.status}</span>
                </div>
            </div>

            {/* Topic Badge */}
            <div className="mt-3">
                <span className="inline-block text-[10px] text-zinc-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                    Topic: {call.topic}
                </span>
            </div>
        </motion.div>
    );
};

export default LiveCallCard;
