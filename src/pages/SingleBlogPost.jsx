import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const SingleBlogPost = () => {
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const heroRef = useRef(null);
    const heroScroll = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll.scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(heroScroll.scrollYProgress, [0, 0.5], [1, 0]);

    // Find the post based on ID
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <div className="min-h-screen bg-[#040812] text-white flex items-center justify-center">Post not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 font-sans">

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Floating Share Bar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 hidden xl:flex"
            >
                <SidebarButton icon={Share2} label="Share" />
                <div className="w-px h-8 bg-white/10 mx-auto" />
                <SidebarButton icon={Twitter} color="hover:text-sky-400" />
                <SidebarButton icon={Linkedin} color="hover:text-blue-500" />
                <SidebarButton icon={Facebook} color="hover:text-blue-600" />
                <div className="w-px h-8 bg-white/10 mx-auto" />
                <SidebarButton icon={Heart} color="hover:text-red-500" />
            </motion.div>

            {/* Hero Section */}
            <div ref={heroRef} className="relative h-[85vh] overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={post.image}
                        alt="Hero"
                        className="w-full h-full object-cover filter brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Analysis
                        </Link>

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium tracking-wide uppercase">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight mb-8 clash-display">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" alt="Author" className="w-8 h-8 rounded-full border border-white/10" />
                                <span className="text-white font-medium">{post.author}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-zinc-600" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-4 max-w-3xl py-20">
                <ContentBlock delay={0.2}>
                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-200 font-medium mb-12 first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-400 first-letter:mr-1 first-letter:float-left">
                        {post.description}
                    </p>
                </ContentBlock>

                {post.content.map((block, index) => {
                    switch (block.type) {
                        case 'heading':
                            return (
                                <ContentBlock key={index} delay={0}>
                                    <h2 className="text-3xl font-bold text-white mb-6 mt-16 clash-display">{block.text}</h2>
                                </ContentBlock>
                            );
                        case 'paragraph':
                            // Check if text is bolded with markdown style **
                            const parts = block.text.split(/(\*\*.*?\*\*)/g);
                            return (
                                <ContentBlock key={index} delay={0}>
                                    <p className="text-zinc-400 text-lg leading-loose mb-8">
                                        {parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                </ContentBlock>
                            );
                        case 'list':
                            return (
                                <ContentBlock key={index} delay={0}>
                                    <ul className="list-disc pl-6 space-y-4 mb-8 text-zinc-400 text-lg leading-loose">
                                        {block.items.map((item, i) => {
                                            const itemParts = item.split(/(\*\*.*?\*\*)/g);
                                            return (
                                                <li key={i}>
                                                    {itemParts.map((part, j) => {
                                                        if (part.startsWith('**') && part.endsWith('**')) {
                                                            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                                                        }
                                                        return part;
                                                    })}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ContentBlock>
                            );
                        case 'quote':
                            return (
                                <ContentBlock key={index} delay={0}>
                                    <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-2xl text-white my-12 py-2 bg-indigo-500/5 rounded-r-lg">
                                        "{block.text}"
                                    </blockquote>
                                </ContentBlock>
                            );
                        default:
                            return null;
                    }
                })}

            </article>

            {/* Up Next Section */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Up Next</h3>
                    <Link to={`/blog/${post.id === blogPosts.length ? 1 : post.id + 1}`} className="group block">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="overflow-hidden rounded-2xl aspect-video">
                                <img
                                    src={post.id === blogPosts.length ? blogPosts[0].image : blogPosts[post.id].image}
                                    alt="Next Article"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                    {post.id === blogPosts.length ? blogPosts[0].title : blogPosts[post.id].title}
                                </h2>
                                <p className="text-zinc-400 mb-6">
                                    {post.id === blogPosts.length ? blogPosts[0].description : blogPosts[post.id].description}
                                </p>
                                <div className="flex items-center text-white font-medium">
                                    Read Now <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

        </div>
    );
};

// Helper Components
const SidebarButton = ({ icon: Icon, label, color = "hover:text-indigo-400" }) => (
    <button className={`p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-colors ${color} group relative`}>
        <Icon className="w-5 h-5" />
        {label && (
            <span className="absolute left-full ml-3 px-2 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </span>
        )}
    </button>
);

const ContentBlock = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

const ParallaxImage = ({ src, caption }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <motion.div style={{ y, height: "120%", width: "100%" }} className="absolute -top-[10%] left-0">
                <img src={src} alt={caption} className="w-full h-full object-cover" />
            </motion.div>
            {caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-[#040812]/60 backdrop-blur-md p-3 rounded-lg border border-white/10 inline-block w-fit">
                    <p className="text-xs text-zinc-300">{caption}</p>
                </div>
            )}
        </div>
    );
};

export default SingleBlogPost;


