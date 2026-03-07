
import Sidebar from "../../components/dashboard/Sidebar";
import { User, CreditCard, Lock, Bell, HelpCircle } from "lucide-react";

const SettingsPage = () => {
    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white clash-display mb-2">Workspace Settings</h1>
                    <p className="text-zinc-500">Manage your account and preferences.</p>
                </header>

                <div className="flex gap-8">
                    {/* Settings Sidebar */}
                    <div className="w-64 space-y-2">
                        {[
                            { icon: User, label: "Profile", active: true },
                            { icon: CreditCard, label: "Billing & Plans" },
                            { icon: Lock, label: "API & Security" },
                            { icon: Bell, label: "Notifications" },
                            { icon: HelpCircle, label: "Help & Support" },
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active
                                        ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/10"
                                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-6">
                        {/* Profile Card */}
                        <div className="bg-[#090e1a] border border-white/5 rounded-2xl p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-800 flex items-center justify-center text-2xl font-bold border-2 border-white/10">
                                    JD
                                </div>
                                <div className="space-y-2">
                                    <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white transition-colors">
                                        Change Avatar
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-transparent hover:bg-white/5 text-sm font-medium text-zinc-400 transition-colors border border-white/10 ml-3">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-zinc-500 uppercase">First Name</label>
                                    <input type="text" defaultValue="John" className="w-full bg-[#0b1120] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-indigo-500/50 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-zinc-500 uppercase">Last Name</label>
                                    <input type="text" defaultValue="Doe" className="w-full bg-[#0b1120] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-indigo-500/50 outline-none" />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <label className="text-xs font-medium text-zinc-500 uppercase">Email Address</label>
                                    <input type="email" defaultValue="john.doe@averra.ai" className="w-full bg-[#0b1120] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-indigo-500/50 outline-none" />
                                </div>
                            </div>
                        </div>

                        {/* API Key Snippet */}
                        <div className="bg-[#090e1a] border border-white/5 rounded-2xl p-8">
                            <h2 className="text-xl font-bold text-white mb-2">API Configuration</h2>
                            <p className="text-zinc-500 text-sm mb-6">Manage your API keys for external integrations.</p>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0b1120] border border-white/10 font-mono text-sm text-zinc-400">
                                <span className="select-all">sk_live_51M...8f92k</span>
                                <button className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase">Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
