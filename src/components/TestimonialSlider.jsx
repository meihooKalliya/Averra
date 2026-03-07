import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "James Anderson",
        role: "Agency Owner",
        content: "The efficiency gain is transformative. We can now reach every potential lead in our pipeline without any human bottleneck.",
        image: "/src/assets/testimonials/m1.png"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "VP of Sales",
        content: "The voice quality is indistinguishable from a human. Prospects are consistently impressed by the natural flow of the conversation.",
        image: "/src/assets/testimonials/f1.png"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Growth Marketer",
        content: "The built-in intelligence saves us countless hours on qualification. It filters out the noise so we only talk to high-intent leads.",
        image: "/src/assets/testimonials/m2.png"
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Real Estate Broker",
        content: "Using this to handle initial outreach has been a game changer. It handles the volume so I can focus on building relationships.",
        image: "/src/assets/testimonials/f2.png"
    },
    {
        id: 5,
        name: "Robert Fox",
        role: "SaaS Founder",
        content: "We've scaled our outreach efforts massively. Our calendar is booked with qualified prospects who are actually interested in our solution.",
        image: "/src/assets/testimonials/f3.png"
    }
];

const TestimonialCard = ({ data }) => (
    <div className="w-[350px] md:w-[400px] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-white/10 transition-colors duration-300 mx-4">
        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-0 right-0 p-8 text-white/5">
            <Quote size={80} fill="currentColor" />
        </div>

        <div className="flex gap-1 mb-6 relative z-10">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
            ))}
        </div>

        <p className="text-lg text-zinc-300 mb-8 relative z-10 font-light leading-relaxed">
            "{data.content}"
        </p>

        <div className="flex items-center gap-4 relative z-10">
            <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
            <div>
                <h4 className="text-white font-medium">{data.name}</h4>
                <span className="text-sm text-zinc-500">{data.role}</span>
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


