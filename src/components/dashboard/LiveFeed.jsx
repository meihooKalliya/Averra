
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Mail, FileText } from "lucide-react";

const LiveFeed = ({ activities }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'call': return <Phone className="w-4 h-4 text-blue-400" />;
            case 'meeting': return <Calendar className="w-4 h-4 text-emerald-400" />;
            case 'email': return <Mail className="w-4 h-4 text-yellow-400" />;
            case 'proposal': return <FileText className="w-4 h-4 text-purple-400" />;
            default: return <Phone className="w-4 h-4 text-zinc-400" />;
        }
    };

    return (
        <div className="bg-[#09090b] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">Live Activity Feed</h3>

            <div className="flex-1 overflow-hidden relative">
                {/* Mask at bottom for fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#09090b] to-transparent z-10 pointers-events-none" />

                <div className="space-y-4">
                    <AnimatePresence>
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id || index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                            >
                                <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                                    {getIcon(activity.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-zinc-200 truncate">
                                        {activity.message}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {activity.time}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-full border border-indigo-500/20">
                                        {activity.value}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default LiveFeed;
