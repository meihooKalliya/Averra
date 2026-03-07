import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    {
        year: "2020",
        title: "The Inception",
        description: "It started with a simple question: Why do retail traders settle for second-rate tools? We began coding the engine in a small shared office in London."
    },
    {
        year: "2021",
        title: "Beta Launch",
        description: "We garnered our first 500 alpha testers. The feedback was brutal but invaluable. We iterated, pivoted, and polished."
    },
    {
        year: "2022",
        title: "Global Scale",
        description: "Expanded our infrastructure to Asian and North American markets. Latency dropped by 40%. User base grew to 10,000."
    },
    {
        year: "2023",
        title: "The Series A",
        description: "Raised $20M from top-tier VC firms to double down on engineering and data science. The team grew from 5 to 40."
    },
    {
        year: "2024",
        title: "The New Era",
        description: "Launching v2.0. Completely rewritten core engine, new UI/UX, and AI-driven analytics. This is just the beginning."
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


