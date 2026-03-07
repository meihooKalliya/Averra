
import Sidebar from "../../components/dashboard/Sidebar";
import SalesChart from "../../components/dashboard/SalesChart";

// Mock data for different charts
const overviewData = [
    { name: 'Mon', calls: 800, meetings: 12 },
    { name: 'Tue', calls: 950, meetings: 15 },
    { name: 'Wed', calls: 1100, meetings: 22 },
    { name: 'Thu', calls: 1050, meetings: 18 },
    { name: 'Fri', calls: 1300, meetings: 28 },
    { name: 'Sat', calls: 400, meetings: 5 },
    { name: 'Sun', calls: 300, meetings: 3 },
];

const sentimentData = [
    { name: 'Mon', calls: 20, meetings: 50 },
    { name: 'Tue', calls: 30, meetings: 45 },
    { name: 'Wed', calls: 45, meetings: 40 },
    { name: 'Thu', calls: 35, meetings: 55 },
    { name: 'Fri', calls: 50, meetings: 60 },
];

const AnalyticsPage = () => {
    return (
        <div className="flex min-h-screen bg-[#0b1120] text-white">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white clash-display mb-2">Performance Analytics</h1>
                    <p className="text-zinc-500">Deep dive into your sales operations metrics.</p>
                </header>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Call Volume vs. Meetings</h2>
                        <SalesChart data={overviewData} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Sentiment Trend</h2>
                            <SalesChart data={sentimentData} />
                            {/* Reusing SalesChart for now as specific Area Chart */}
                        </div>
                        <div className="bg-[#090e1a] border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center">
                            <h2 className="text-xl font-bold text-white mb-6">Objection Analysis</h2>
                            <div className="w-48 h-48 rounded-full border-[12px] border-indigo-500/20 border-t-indigo-500 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">72%</span>
                            </div>
                            <p className="mt-4 text-zinc-500 text-sm">Resolved via AI Rebuttals</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AnalyticsPage;
