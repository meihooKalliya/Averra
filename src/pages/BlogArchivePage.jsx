import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { blogPosts } from '../data/blogPosts';

const allPosts = blogPosts;
const categories = [
    "All blogs",
    "How-To Guides (Tactics)",
    "Benefits & Features",
    "Case Studies (Proof)",
    "Sales Team Tools",
    "Future Trends"
];

const BlogArchivePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All blogs");
    const [filteredPosts, setFilteredPosts] = useState(allPosts);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const results = allPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All blogs" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredPosts(results);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header & Search */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 clash-display"
                    >
                        Archive
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 text-zinc-500" />
                            </button>
                        )}
                    </motion.div>
                </div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                ? "bg-white text-black"
                                : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/blog/${post.id}`} className="group block bg-zinc-900/30 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all h-full flex flex-col">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono text-zinc-500">{post.date}</span>
                                            <span className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm line-clamp-3 mb-4 flex-grow">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-zinc-500 text-xl">No articles found matching your search.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                            className="mt-4 text-indigo-400 hover:text-indigo-300"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default BlogArchivePage;


