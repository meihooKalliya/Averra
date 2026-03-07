import React from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";

const features = [
    {
        category: "Core Capability",
        items: [
            { name: "Automated Calls", starter: true, pro: true, enterprise: true },
            { name: "Scraper Access", starter: true, pro: true, enterprise: true },
            { name: "Calendar Sync", starter: "Google Cal", pro: "Google + Outlook", enterprise: "All Providers" },
            { name: "Voices", starter: "3 Standard", pro: "10 Premium", enterprise: "Clone Your Own" },
        ]
    },
    {
        category: "Throughput & Limits",
        items: [
            { name: "Calls per Month", starter: "1,000", pro: "10,000", enterprise: "Unlimited" },
            { name: "Concurrent Lines", starter: "1", pro: "5", enterprise: "50+" },
            { name: "Scraper Credits", starter: "500", pro: "5,000", enterprise: "Unlimited" },
            { name: "API Access", starter: false, pro: "Read-only", enterprise: "Full Access" },
        ]
    },
    {
        category: "Support & Security",
        items: [
            { name: "Customer Support", starter: "Email", pro: "Priority 24/7", enterprise: "Dedicated Agent" },
            { name: "Whitelabeling", starter: false, pro: false, enterprise: true },
            { name: "SLA Guarantee", starter: false, pro: false, enterprise: "99.99%" },
        ]
    }
];

const PricingComparison = () => {
    return (
        <section className="py-24 bg-[#040812] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 clash-display">Compare Plans</h2>
                    <p className="text-zinc-400">Detailed feature breakdown to help you make the right choice.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 w-1/4"></th>
                                <th className="p-4 w-1/4 text-center">
                                    <div className="text-xl font-bold text-white mb-2">Simple</div>
                                    <div className="text-sm text-zinc-500">₹85,000/mo</div>
                                </th>
                                <th className="p-4 w-1/4 text-center bg-indigo-500/5 rounded-t-xl border-t border-x border-indigo-500/20 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg shadow-indigo-500/50">
                                        POPULAR
                                    </div>
                                    <div className="text-xl font-bold text-indigo-400 mb-2">Pro</div>
                                    <div className="text-sm text-zinc-500">₹300,000/mo</div>
                                </th>
                                <th className="p-4 w-1/4 text-center">
                                    <div className="text-xl font-bold text-white mb-2">Advanced</div>
                                    <div className="text-sm text-zinc-500">₹600,000/mo</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((section, sIndex) => (
                                <React.Fragment key={sIndex}>
                                    <tr>
                                        <td colSpan={4} className="p-4 pt-8 text-sm font-bold text-zinc-500 uppercase tracking-widest border-b border-indigo-500/10">
                                            {section.category}
                                        </td>
                                    </tr>
                                    {section.items.map((feature, fIndex) => (
                                        <motion.tr
                                            key={fIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: fIndex * 0.05 }}
                                            className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                                        >
                                            <td className="p-4 text-zinc-300 font-medium flex items-center gap-2">
                                                {feature.name}
                                                <HelpCircle className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-help" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <FeatureValue value={feature.starter} />
                                            </td>
                                            <td className="p-4 text-center bg-indigo-500/5 border-x border-indigo-500/10">
                                                <FeatureValue value={feature.pro} active={true} />
                                            </td>
                                            <td className="p-4 text-center">
                                                <FeatureValue value={feature.enterprise} />
                                            </td>
                                        </motion.tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const FeatureValue = ({ value, active = false }) => {
    if (value === true) {
        return (
            <div className="flex justify-center">
                <div className={`p-1 rounded-full ${active ? "bg-indigo-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                    <Check className="w-4 h-4" />
                </div>
            </div>
        );
    }
    if (value === false) {
        return (
            <div className="flex justify-center">
                <X className="w-4 h-4 text-zinc-700" />
            </div>
        );
    }
    return <span className={`text-sm ${active ? "text-indigo-200" : "text-zinc-400"}`}>{value}</span>;
};

export default PricingComparison;


