import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, BarChart3, Settings, Shield, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
    const location = useLocation();
    const { user, logout } = useAuth();

    const menuItems = [
        { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
        { icon: Users, label: "Leads", path: "/dashboard/leads" },
        { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
    ];

    const bottomItems = [
        { icon: Shield, label: "Security", path: "/dashboard/security" },
        { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ];

    const NavItem = ({ item }) => {
        const isActive = location.pathname === item.path;
        return (
            <Link to={item.path}>
                <div className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer mb-1",
                    isActive
                        ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                )}>
                    <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-white")} />
                    <span className="font-medium text-sm">{item.label}</span>
                    {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    )}
                </div>
            </Link>
        );
    };

    return (
        <aside className="w-64 h-screen sticky top-0 border-r border-white/5 bg-[#0b1120] flex flex-col p-4 hidden md:flex">
            {/* Logo Area */}
            <div className="flex items-center gap-3 px-4 mb-10 mt-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <span className="font-bold text-white text-lg">A</span>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 clash-display">
                    Averra
                </span>
            </div>

            {/* Main Navigation */}
            <div className="flex-1">
                <h3 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4 px-4">Dashboards</h3>
                <nav>
                    {menuItems.map((item) => (
                        <NavItem key={item.path} item={item} />
                    ))}
                </nav>
            </div>

            {/* Bottom Navigation */}
            <div>
                <h3 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4 px-4">System</h3>
                <nav>
                    {bottomItems.map((item) => (
                        <NavItem key={item.path} item={item} />
                    ))}
                </nav>

                {/* User Profile Snippet */}
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-4 px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border border-white/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                                {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                            </span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{user?.name || 'User'}</p>
                            <p className="text-xs text-zinc-500 truncate">{user?.email || 'admin@workspace.com'}</p>
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors text-sm font-medium w-full"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
