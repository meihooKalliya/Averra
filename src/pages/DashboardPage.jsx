
import { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MetricCard from "../components/dashboard/MetricCard";
import SalesChart from "../components/dashboard/SalesChart";
import SentimentChart from "../components/dashboard/SentimentChart";
import LeadSourceChart from "../components/dashboard/LeadSourceChart";
import LiveFeed from "../components/dashboard/LiveFeed";
import { fetchDashboardData } from "../services/googleSheetService"; // Simulated
import { Phone, Users, Calendar, DollarSign, Bell, Search, Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Poll for "live" updates
    useEffect(() => {
        const loadData = async () => {
            // 50% chance to show loading state on initial load only
            if (!data) setLoading(true);

            try {
                const result = await fetchDashboardData();
                setData(result);
            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
        const interval = setInterval(loadData, 5000); // Update every 5 seconds to simulate live feed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="sticky top-0 z-20 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Menu className="w-6 h-6 text-zinc-400 md:hidden" />
                        <div>
                            <h1 className="text-xl font-bold text-white clash-display">Overview</h1>
                            <p className="text-xs text-zinc-500">Welcome back, {user?.name?.split(' ')[0] || 'User'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search leads, campaigns..."
                                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-indigo-500/50 w-64 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full" />
                            <Bell className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MetricCard
                            title="Total Calls"
                            value={data?.metrics.totalCalls.toLocaleString() || "..."}
                            trend="up"
                            trendValue="12%"
                            icon={Phone}
                            delay={0}
                        />
                        <MetricCard
                            title="Meetings Booked"
                            value={data?.metrics.meetingsBooked.toLocaleString() || "..."}
                            trend="up"
                            trendValue="8%"
                            icon={Calendar}
                            delay={0.1}
                        />
                        <MetricCard
                            title="Revenue Generated"
                            value={`$${(data?.metrics.revenueGenerated || 0).toLocaleString()}`}
                            trend="up"
                            trendValue="24%"
                            icon={DollarSign}
                            delay={0.2}
                        />
                        <MetricCard
                            title="Active Leads"
                            value={data?.metrics.activeCampaigns * 124 || "..."} // Mock calc
                            trend="down"
                            trendValue="2%"
                            icon={Users}
                            delay={0.3}
                        />
                    </div>

                    {/* Charts & Feed Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <SalesChart data={data?.charts?.overview || []} />
                        </div>
                        <div className="lg:col-span-1 h-full min-h-[350px]">
                            <LiveFeed activities={data?.recentActivity || []} />
                        </div>
                    </div>

                    {/* Secondary Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SentimentChart data={data?.charts?.sentiment || []} />
                        <LeadSourceChart data={data?.charts?.source || []} />
                    </div>

                    {/* Recent Leads Table (Placeholder for now, can be expanded) */}
                    <div className="bg-[#09090b] border border-white/5 rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-white">High Intent Leads</h3>
                            <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-zinc-500 text-xs uppercase tracking-wider border-b border-white/5">
                                        <th className="pb-3 pl-4">Company</th>
                                        <th className="pb-3">Status</th>
                                        <th className="pb-3">Sentiment</th>
                                        <th className="pb-3 text-right pr-4">Pipeline Value</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[1, 2, 3].map((i) => (
                                        <tr key={i} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                            <td className="py-4 pl-4 font-medium text-white">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300">
                                                        TC
                                                    </div>
                                                    TechCorp Inc.
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                                                    Meeting Booked
                                                </span>
                                            </td>
                                            <td className="py-4">
                                                <div className="w-full max-w-[100px] h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[85%]" />
                                                </div>
                                            </td>
                                            <td className="py-4 text-right pr-4 text-zinc-300">$12,500</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
