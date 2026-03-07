
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";

const CallEventLog = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventTypes = [
            { type: "connect", text: "Connected call with", icon: Phone, color: "text-indigo-400" },
            { type: "sentiment", text: "Positive sentiment detected:", icon: CheckCircle, color: "text-emerald-400" },
            { type: "objection", text: "Handling objection:", icon: AlertTriangle, color: "text-amber-400" },
            { type: "booking", text: "MEETING BOOKED:", icon: Clock, color: "text-white font-bold bg-indigo-500/20 px-2 rounded" },
        ];

        const companies = ["TechFlow", "Nexus", "Global Corp", "StartUp Inc", "Alpha Logic", "BlueSky", "Quantum", "Vertex"];

        const addEvent = () => {
            const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
            const company = companies[Math.floor(Math.random() * companies.length)];
            const newEvent = {
                id: Date.now(),
                ...type,
                company: company,
                time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
            };

            setEvents(prev => [newEvent, ...prev].slice(0, 15)); // Keep last 15
        };

        const interval = setInterval(addEvent, 800); // Fast updates!
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col bg-[#090e1a] border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-[#0b1120] flex justify-between items-center">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Event Feed
                </h3>
                <span className="text-xs text-zinc-500 font-mono">NET_OPS_CHANNEL_01</span>
            </div>

            <div className="flex-1 overflow-hidden relative p-4 space-y-3">
                <AnimatePresence initial={false}>
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-3 text-xs border-b border-white/5 pb-2 last:border-0"
                        >
                            <span className="font-mono text-zinc-600 shrink-0">{event.time}</span>
                            <div className="flex-1 truncate">
                                <span className={`${event.color} mr-2`}>{event.text}</span>
                                <span className="text-zinc-400">{event.company}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#090e1a] to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default CallEventLog;
