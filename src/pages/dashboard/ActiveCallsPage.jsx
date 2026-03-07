
import { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import LiveCallCard from "../../components/dashboard/LiveCallCard";
import TranscriptDrawer from "../../components/dashboard/TranscriptDrawer";
import CallEventLog from "../../components/dashboard/CallEventLog";
import { fetchDashboardData } from "../../services/googleSheetService";
import { Radio, Users, Activity, BarChart2 } from "lucide-react";

const ActiveCallsPage = () => {
    const [calls, setCalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCall, setSelectedCall] = useState(null);

    useEffect(() => {
        const loadCalls = async () => {
            const data = await fetchDashboardData();
            if (data?.activeCalls) {
                setCalls(data.activeCalls);
            }
            setLoading(false);
        };
        loadCalls();
    }, []);

    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="px-8 py-6 border-b border-white/5 bg-[#0b1120] flex-shrink-0">
                    <h1 className="text-2xl font-bold text-white clash-display mb-1">Mission Control</h1>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> System Operational</span>
                        <span>|</span>
                        <span>Latency: 45ms</span>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    {/* Left: Stats & Grid - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-[#090e1a] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                    <Radio className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white clash-display">42</p>
                                    <p className="text-xs text-zinc-500">Live Channels</p>
                                </div>
                            </div>
                            <div className="bg-[#090e1a] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white clash-display">98%</p>
                                    <p className="text-xs text-zinc-500">Uptime</p>
                                </div>
                            </div>
                            <div className="bg-[#090e1a] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white clash-display">15</p>
                                    <p className="text-xs text-zinc-500">Awaiting Connect</p>
                                </div>
                            </div>
                            <div className="bg-[#090e1a] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
                                    <BarChart2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white clash-display">1.2s</p>
                                    <p className="text-xs text-zinc-500">Avg Latency</p>
                                </div>
                            </div>
                        </div>

                        {/* Calls Grid - Dense */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {calls.map((call) => (
                                <div key={call.id} onClick={() => setSelectedCall(call)} className="cursor-pointer hover:scale-[1.02] transition-transform">
                                    <LiveCallCard call={call} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Event Feed - Fixed Width */}
                    <div className="w-80 border-l border-white/5 bg-[#080c16] p-4 hidden xl:block flex-shrink-0">
                        <CallEventLog />
                    </div>
                </div>
            </main>

            <TranscriptDrawer
                isOpen={!!selectedCall}
                onClose={() => setSelectedCall(null)}
                call={selectedCall}
            />
        </div>
    );
};

export default ActiveCallsPage;
