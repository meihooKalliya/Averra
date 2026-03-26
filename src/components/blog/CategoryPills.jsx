import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
    "All blogs",
    "How-To Guides (Tactics)",
    "Benefits & Features",
    "Case Studies (Proof)",
    "Sales Team Tools",
    "Future Trends"
];

const CategoryPills = ({ activeCategory, onCategoryChange }) => {

    return (
        <div className="py-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar"
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => onCategoryChange(category)}
                            className={`whitespace-nowrap px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 relative border ${activeCategory === category
                                ? "text-white bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/25"
                                : "text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white bg-zinc-900/50"
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 rounded-full bg-indigo-600 -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CategoryPills;
