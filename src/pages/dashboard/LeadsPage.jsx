
import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Search, Upload, Download, Filter, MoreHorizontal } from "lucide-react";

const LeadsPage = () => {
    const leads = [
        { id: 1, name: "David Kim", company: "NextGen Tech", email: "david@nextgen.co", status: "Qualified", score: 85 },
        { id: 2, name: "Sarah Smith", company: "Alpha Logistics", email: "s.smith@alpha.com", status: "Contacted", score: 62 },
        { id: 3, name: "James Wilson", company: "Wilson & Sons", email: "jwilson@ws.com", status: "New", score: 45 },
        { id: 4, name: "Emily Davis", company: "BlueSky Innov", email: "emily@bluesky.io", status: "Closed Won", score: 98 },
        { id: 5, name: "Michael Brown", company: "Quantum Sol", email: "m.brown@quantum.net", status: "Disqualified", score: 20 },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Qualified': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
            case 'Closed Won': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
            case 'Contacted': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
            case 'Disqualified': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
            default: return 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20';
        }
    };

    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white clash-display mb-2">Lead Intelligence</h1>
                        <p className="text-zinc-500">Manage and enrich your prospect lists.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10">
                            <Upload className="w-4 h-4" />
                            Import CSV
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </header>

                <div className="bg-[#090e1a] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex gap-4">
                        <div className="relative flex-1">
                            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search leads by name, company, or email..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white placeholder-zinc-500"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white border border-white/10">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-zinc-400 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="p-4 font-medium">Name</th>
                                    <th className="p-4 font-medium">Company</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium">AI Score</th>
                                    <th className="p-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {leads.map((lead) => (
                                    <tr key={lead.id} className="group hover:bg-white/5 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">
                                                    {lead.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white">{lead.name}</p>
                                                    <p className="text-xs text-zinc-500">{lead.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-zinc-300">{lead.company}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-red-500 to-emerald-500" style={{ width: `${lead.score}%` }} />
                                                </div>
                                                <span className="text-xs text-zinc-400">{lead.score}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-zinc-500 hover:text-white rounded-lg hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LeadsPage;
