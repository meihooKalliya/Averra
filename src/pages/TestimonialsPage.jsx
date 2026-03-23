import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import m1 from "../assets/testimonials/m1.png";
import m2 from "../assets/testimonials/m2.png";
import f1 from "../assets/testimonials/f1.png";
import f2 from "../assets/testimonials/f2.png";

const testimonials = [
    {
        id: 1,
        name: "Siddharth Vadke",
        content: "I kept hiring SDRs thinking the next one would finally crack it. Averra was the first thing I tried that didn't need onboarding, didn't need managing, and didn't need a pep talk on Monday morning. My pipeline started moving within the first week. Honestly, I wish I'd stopped hiring sooner.",
        image: m1
    },
    {
        id: 2,
        name: "Rahoul Ssonawane",
        content: "We were burning through budget on outreach that felt like shouting into a void. Averra changed the math completely. Conversations started happening at a volume our team couldn't have handled manually — and the quality of leads coming through was sharper than anything we'd seen before. It just works.",
        image: m2
    },
    {
        id: 3,
        name: "Neha Vadke",
        content: "What surprised me most wasn't the speed — it was how natural the conversations felt. Our prospects weren't put off. They were engaged. Averra handled the top of funnel so well that by the time a lead reached my team, half the work was already done. That's rare.",
        image: f1
    },
    {
        id: 4,
        name: "Swapnali Sonawane",
        content: "I was skeptical — I'll be honest. AI calling felt gimmicky to me. But Averra isn't a gimmick. It's infrastructure. We scaled outreach without scaling headcount, and our cost-per-meeting dropped to something I wouldn't have believed on paper. I believe it now.",
        image: f2
    },
    {
        id: 5,
        name: "Avishkar Parate",
        content: "The thing nobody tells you about growing a sales team is how much breaks when you scale fast. Averra removed an entire layer of that chaos. Consistent calls, consistent follow-ups, consistent output — every single day. Our team finally gets to focus on closing instead of chasing.",
        image: m1
    }
];

const TestimonialCard = ({ data, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="p-8 md:p-10 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/30 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col justify-between"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-0 right-0 p-8 text-white/[0.03] group-hover:text-indigo-500/10 transition-colors duration-500">
            <Quote size={80} fill="currentColor" />
        </div>

        <div>
            <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-indigo-500 text-indigo-500" />
                ))}
            </div>

            <p className="text-lg md:text-xl text-zinc-300 mb-10 relative z-10 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                "{data.content}"
            </p>
        </div>

        <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
            <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors duration-300 object-cover" />
            <div>
                <h4 className="text-white font-semibold clash-display tracking-wide">{data.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Verified Customer</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 pt-24">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20"
                    >
                        Wall of Love
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 clash-display"
                    >
                        Don't just take <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                            our word for it.
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        See how the world's most innovative sales teams are using Averra to dominate their markets and completely eliminate manual outreach.
                    </motion.p>
                </div>
            </section>

            {/* Testimonials Grid Layout */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6 max-w-6xl mx-auto">
                        {testimonials.map((t, index) => (
                            <div key={t.id} className="break-inside-avoid">
                                <TestimonialCard data={t} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default TestimonialsPage;