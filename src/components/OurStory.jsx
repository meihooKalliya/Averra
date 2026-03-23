import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    {
        year: "Sep 2025",
        title: "Inception",
        description: "It started with a simple question: Why do sales teams settle for second-rate outreach? We began brainstorming the architecture."
    },
    {
        year: "Oct 2025",
        title: "Start of Development",
        description: "The first lines of code were written. We focused on building a scalable, low-latency AI voice engine from the ground up."
    },
    {
        year: "Jan 2026",
        title: "Product Complete",
        description: "The core engine reached a stable release. We achieved sub-0.5s latency and implemented real-time objection handling."
    },
    {
        year: "Feb 2026",
        title: "Website Launch",
        description: "Averra's digital presence goes live, showcasing our capabilities to the world and opening our platform to early adopters."
    },
    {
        year: "Mar 2026",
        title: "Start of Pitching",
        description: "We officially begin demonstrating Averra's power to enterprises, showing them exactly how we cut the average cost per meeting to just ₹575."
    }
];

const OurStory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 bg-[#040812] relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 clash-display text-white"
                    >
                        Our Journey
                    </motion.h2>
                    <p className="text-zinc-400">
                        From a few lines of code to a global trading infrastructure.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-800">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"
                        />
                    </div>

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                {/* Content */}
                                <div className="w-5/12">
                                    <div className={`p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/30 transition-colors ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <span className="text-indigo-400 font-mono font-bold text-xl mb-2 block">{item.year}</span>
                                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-[#040812] border-2 border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                                        <div className="w-full h-full rounded-full bg-indigo-500 animate-pulse opacity-50"></div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;


