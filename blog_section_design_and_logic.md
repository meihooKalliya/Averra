# Blog Section & Page Code Implementation

## src/components/BlogCarousel.jsx
```jsx
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

import { blogPosts } from "../data/blogPosts";

const BlogCarousel = () => {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { clientWidth } = carouselRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 300); // Check after scroll animation
        }
    };

    return (
        <section className="py-24 bg-[#040812] relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
                        >
                            Latest Updates
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-semibold text-white mt-2 mb-4 leading-tight"
                        >
                            From the Desk
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-zinc-400 text-lg"
                        >
                            Insights, analysis, and news from our expert team.
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/20'}`}
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/20'}`}
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </motion.button>
                        <motion.a
                            href="/blog"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors"
                        >
                            Explore All <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[380px] snap-start"
                        >
                            <Link to={`/blog/${post.id}`} className="block h-full">
                                <CardSpotlight className="h-full group cursor-pointer hover:border-white/20 transition-colors border border-white/5 bg-[#040812]/40">
                                    <div className="flex flex-col h-full relative z-20 p-5">
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-3 left-3 bg-[#040812]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                <span className="text-xs font-medium text-white">{post.category}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                                                    <User className="w-4 h-4 text-zinc-400" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-white">{post.author}</p>
                                                    <p className="text-[10px] text-zinc-500">{post.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-zinc-500">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span className="text-xs">{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardSpotlight>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden mt-6 text-center">
                    <a href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                        View all articles <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogCarousel;
```

---

## src/pages/BlogArchivePage.jsx
```jsx
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
```

---

## src/components/CardSpotlight.jsx
```jsx
"use client";
import { useState, useRef, useEffect } from "react";

export const CardSpotlight = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
```

---

## src/data/blogPosts.js
```javascript
export const blogPosts = [
    {
        id: 1,
        slug: "ai-cold-calling-marketing-campaigns",
        title: "How AI Cold Calling Agents Turn Marketing Campaigns into Booked Meetings",
        category: "Benefits & Features",
        author: "Averra Team",
        date: "Dec 30, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
        description: "See how Averra's AI cold calling agents instantly call inbound leads, align with your marketing campaigns, and convert more clicks into sales meetings.",
        tags: ["AI cold calling", "marketing campaign conversions", "instant lead engagement", "sales marketing alignment", "sales automation"],
        content: [
            {
                type: "paragraph",
                text: "Sales and marketing can spend weeks planning campaigns, only to lose hot leads because follow-up is slow or inconsistent. Campaigns generate clicks, sign-ups, and demo requests, but if humans are the first response layer, leads wait minutes or hours—and intent drops fast."
            },
            {
                type: "paragraph",
                text: "Averra's AI cold calling agents close this gap by **instantly calling leads the moment they engage with a campaign**, turning expensive traffic and form fills into real-time conversations and qualified meetings, without burning out your SDR team."
            },
            {
                type: "heading",
                level: 2,
                text: "Engage Inbound Leads While Intent Is Highest"
            },
            {
                type: "paragraph",
                text: "Most teams measure impressions and clicks, but **conversion happens in the follow-up window**—often the first 5 minutes after a lead takes action. If you miss that window, the lead keeps browsing, compares competitors, or simply moves on with their day."
            }
        ]
    }
    // ... additional posts truncated for brevity in this reference file
];
```
