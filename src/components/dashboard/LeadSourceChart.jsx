import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

const mockData = [
    { name: 'Outbound', calls: 400 },
    { name: 'Inbound', calls: 300 },
    { name: 'Website', calls: 200 },
    { name: 'Referral', calls: 278 },
    { name: 'Social', calls: 189 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#09090b] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
                <p className="text-zinc-400 text-sm mb-2">{label}</p>
                <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-white">
                        Calls: <span className="text-indigo-300">{payload[0].value}</span>
                    </span>
                </div>
            </div>
        );
    }
    return null;
};

const LeadSourceChart = ({ data }) => {
    const chartData = data?.length ? data : mockData;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full h-[350px] bg-[#09090b] border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-50 pointer-events-none" />

            <div className="mb-6 relative z-10">
                <h3 className="text-lg font-bold text-white">Lead Volume by Source</h3>
                <p className="text-xs text-zinc-400">Distribution of calls across channels</p>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff05' }} />
                    <Bar dataKey="calls" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default LeadSourceChart;
