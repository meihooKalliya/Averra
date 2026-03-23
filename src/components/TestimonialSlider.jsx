import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import m1 from "../assets/testimonials/m1.png";
import m2 from "../assets/testimonials/m2.png";
import f1 from "../assets/testimonials/f1.png";
import f2 from "../assets/testimonials/f2.png";

const testimonials = [
    {
        id: 1,
        name: "Siddharth Vadke",
        role: "Founder, B2B SaaS",
        content: "I kept hiring SDRs thinking the next one would finally crack it. Averra was the first thing I tried that didn't need onboarding, didn't need managing, and didn't need a pep talk on Monday morning. My pipeline started moving within the first week. Honestly, I wish I'd stopped hiring sooner.",
        image: m1
    },
    {
        id: 2,
        name: "Rahoul Ssonawane",
        role: "Head of Growth, Fintech",
        content: "We were burning through budget on outreach that felt like shouting into a void. Averra changed the math completely. Conversations started happening at a volume our team couldn't have handled manually — and the quality of leads coming through was sharper than anything we'd seen before. It just works.",
        image: m2
    },
    {
        id: 3,
        name: "Neha Vadke",
        role: "Sales Director, Insurance",
        content: "What surprised me most wasn't the speed — it was how natural the conversations felt. Our prospects weren't put off. They were engaged. Averra handled the top of funnel so well that by the time a lead reached my team, half the work was already done. That's rare.",
        image: f1
    },
    {
        id: 4,
        name: "Swapnali Sonawane",
        role: "Co-Founder, D2C Brand",
        content: "I was skeptical — I'll be honest. AI calling felt gimmicky to me. But Averra isn't a gimmick. It's infrastructure. We scaled outreach without scaling headcount, and our cost-per-meeting dropped to something I wouldn't have believed on paper. I believe it now.",
        image: f2
    },
    {
        id: 5,
        name: "Avishkar Parate",
        role: "Operations Lead, SaaS Startup",
        content: "The thing nobody tells you about growing a sales team is how much breaks when you scale fast. Averra removed an entire layer of that chaos. Consistent calls, consistent follow-ups, consistent output — every single day. Our team finally gets to focus on closing instead of chasing.",
        image: m1
    }
];

const TestimonialCard = ({ data }) => (
    <div className="w-[350px] md:w-[450px] p-10 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/30 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)] transition-all duration-500 mx-4">
        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-0 right-0 p-8 text-white/[0.03] group-hover:text-indigo-500/10 transition-colors duration-500">
            <Quote size={100} fill="currentColor" />
        </div>

        <div className="flex gap-1 mb-6 relative z-10">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
            ))}
        </div>

        <p className="text-lg md:text-xl text-zinc-300 mb-10 relative z-10 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
            "{data.content}"
        </p>

        <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
            <img src={data.image} alt={data.name} className="w-14 h-14 rounded-full border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors duration-300" />
            <div>
                <h4 className="text-white font-semibold clash-display tracking-wide">{data.name}</h4>
            </div>
        </div>
    </div>
);

const TestimonialSlider = () => {
    return (
        <section className="py-24 bg-[#040812] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_50%)]" />

            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <span className="text-indigo-500 font-mono text-sm tracking-wider mb-2 block">TRUSTED BY OUTBOUND TEAMS</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 clash-display">
                    What Our Users Say
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Fade Masks */}
                <div className="absolute top-0 left-0 h-full w-24 md:w-40 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 md:w-40 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                {/* Sliding Content */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* Original Set */}
                    {testimonials.map(t => (
                        <TestimonialCard key={t.id} data={t} />
                    ))}

                    {/* Duplicate Set 1 */}
                    {testimonials.map(t => (
                        <TestimonialCard key={`${t.id}-dup1`} data={t} />
                    ))}

                    {/* Duplicate Set 2 */}
                    {testimonials.map(t => (
                        <TestimonialCard key={`${t.id}-dup2`} data={t} />
                    ))}
                </div>
            </div>

            <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); } 
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
        `}</style>
        </section>
    );
};

export default TestimonialSlider;


