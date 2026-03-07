import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from "framer-motion";

const COLORS = ['#10b981', '#6366f1', '#f59e0b', '#ef4444'];

const mockData = [
    { name: 'Interested', value: 45 },
    { name: 'Neutral', value: 25 },
    { name: 'Call Back', value: 20 },
    { name: 'Not Interested', value: 10 },
];

const SentimentChart = ({ data }) => {
    const chartData = data?.length ? data : mockData;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-[350px] bg-[#09090b] border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-50 pointer-events-none" />

            <div className="mb-6 relative z-10">
                <h3 className="text-lg font-bold text-white">Call Sentiment Analysis</h3>
                <p className="text-xs text-zinc-400">AI-detected prospect reactions</p>
            </div>

            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff10', borderRadius: '12px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SentimentChart;
