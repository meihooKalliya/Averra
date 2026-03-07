
import Sidebar from "../../components/dashboard/Sidebar";
import { Play, Pause, MoreVertical, Zap, CheckCircle2 } from "lucide-react";

const CampaignsPage = () => {
    const campaigns = [
        { id: 1, name: "Q1 Outreach - SaaS Leaders", status: "active", progress: 45, dials: 1240, meetings: 32 },
        { id: 2, name: "Webinar Follow-up", status: "paused", progress: 88, dials: 560, meetings: 12 },
        { id: 3, name: "Enterprise Penetration", status: "active", progress: 12, dials: 150, meetings: 5 },
        { id: 4, name: "Churn Reactivation", status: "completed", progress: 100, dials: 890, meetings: 45 },
    ];

    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white clash-display mb-2">Campaigns</h1>
                        <p className="text-zinc-500">Orchestrate your autonomous outreach strategies.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                        <Zap className="w-4 h-4" />
                        New Campaign
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => (
                        <div key={campaign.id} className="group bg-[#090e1a] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-all shadow-lg">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <button className="p-1 text-zinc-500 hover:text-white">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{campaign.name}</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className={`w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`} />
                                <span className="text-xs uppercase font-medium text-zinc-400">{campaign.status}</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-zinc-500">Progress</span>
                                        <span className="text-white font-medium">{campaign.progress}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500" style={{ width: `${campaign.progress}%` }} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-1">Total Dials</p>
                                        <p className="text-lg font-mono text-white">{campaign.dials.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 mb-1">Meetings</p>
                                        <p className="text-lg font-mono text-emerald-400">{campaign.meetings}</p>
                                    </div>
                                </div>

                                <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-colors border border-white/5 mt-2 flex items-center justify-center gap-2">
                                    {campaign.status === 'active' ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                                    {campaign.status === 'active' ? 'Pause Campaign' : 'Resume Campaign'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CampaignsPage;
