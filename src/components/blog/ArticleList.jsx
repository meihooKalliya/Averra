import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { blogPosts } from '../../data/blogPosts';

const ArticleList = ({ selectedCategory }) => {
    const [hoveredArticle, setHoveredArticle] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const filteredArticles = selectedCategory === "All blogs"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const handleMouseMove = (e) => {
        const containerRect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - containerRect.left,
            y: e.clientY - containerRect.top
        });
    };

    return (
        <section
            className="py-24 bg-zinc-950 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-12 clash-display">Latest Market Movers</h2>

                <div className="flex flex-col">
                    {filteredArticles.map((article) => (
                        <Link to={`/blog/${article.id}`} key={article.id} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredArticle(article.id)}
                                onMouseLeave={() => setHoveredArticle(null)}
                                className="group relative flex flex-col md:flex-row items-center justify-between py-10 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors px-4 rounded-xl"
                            >
                                <div className="flex items-center gap-6 w-full md:w-2/3">
                                    <span className="text-zinc-500 font-mono text-sm hidden md:block">0{article.id}</span>
                                    <h3 className="text-2xl md:text-4xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                        {article.title}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between w-full md:w-1/3 mt-4 md:mt-0">
                                    <span className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 text-sm uppercase tracking-wider group-hover:border-indigo-500/50 group-hover:text-white transition-colors">
                                        {article.category}
                                    </span>
                                    <span className="text-zinc-500 font-mono">{article.date}</span>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all transform group-hover:-rotate-45">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Floating Image Reveal Element */}
            <AnimatePresence>
                {hoveredArticle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mousePosition.x + 20,
                            y: mousePosition.y - 150
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        className="pointer-events-none absolute top-0 left-0 z-50 w-[300px] h-[200px] rounded-xl overflow-hidden hidden lg:block shadow-2xl border border-white/20"
                    >
                        <img
                            src={filteredArticles.find(a => a.id === hoveredArticle)?.image}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ArticleList;
