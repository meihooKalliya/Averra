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


