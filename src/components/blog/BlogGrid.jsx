import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const deepDives = [
    {
        id: 1,
        title: "Algorithmic Trading: A Deep Dive into HFT Strategies",
        category: "Sales Team Tools",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200",
        description: "exploring the microstructure of modern markets and how high-frequency algorithms exploit inefficiencies."
    },
    {
        id: 2,
        title: "The Psychology of Risk: Mastering Your Mindset",
        category: "Case Studies (Proof)",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200",
        description: "Why most traders fail not because of their strategy, but because of their inability to manage emotion."
    },
    {
        id: 3,
        title: "DeFi vs. TradFi: The Convergence",
        category: "Future Trends",
        image: "https://images.unsplash.com/photo-1639322537228-ad7142913308?q=80&w=1200",
        description: "Analyzing the bridging gap between decentralized finance protocols and traditional banking institutions."
    },
    {
        id: 4,
        title: "Technical Analysis Myths Debunked",
        category: "How-To Guides (Tactics)",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1200",
        description: "Separating signal from noise: which patterns actually have statistical significance in 2025?"
    }
];

const BlogGrid = ({ selectedCategory }) => {
    const filteredDeepDives = selectedCategory === "All blogs"
        ? deepDives
        : deepDives.filter(post => post.category === selectedCategory);

    if (filteredDeepDives.length === 0) return null;

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4 clash-display">Deep Dives</h2>
                        <p className="text-zinc-400 max-w-xl">Long-form analysis for the serious market participant.</p>
                    </div>
                    <Link to="/blog/archive" className="hidden md:flex items-center gap-2 text-white hover:text-indigo-400 transition-colors">
                        View Archive <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredDeepDives.map((post, index) => (
                        <ParallaxCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ParallaxCard = ({ post, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: image moves slightly slower/faster than content
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
        >
            <motion.div
                style={{ y, height: "120%" }}
                className="absolute inset-0 w-full"
            >
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-4">
                        {post.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        {post.title}
                    </h3>
                    <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {post.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
            <Link to={`/blog/${post.id}`} className="absolute inset-0 z-20" aria-label={`Read ${post.title}`} />
        </motion.div>
    );
};

export default BlogGrid;
