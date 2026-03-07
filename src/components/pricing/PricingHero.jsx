import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TimelineContent } from "../ui/timeline-animation"; // Relative to components/pricing? No, need to adjust path
import { SparklesComp } from "../ui/sparkles";
import { VerticalCutReveal } from "../ui/vertical-cut-reveal";
import { GlowButton } from "../ui/glow-button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cn } from "../../lib/utils";

// Helper for plans data - Cleaned up duplicates
const plans = [
    {
        name: "Simple",
        description: "Perfect for teams starting their autonomous sales journey.",
        price: "85,000",
        usdPrice: "~$1,000",
        yearlyPrice: "850,000",
        buttonText: "Get started",
        buttonVariant: "outline",
        includes: [
            "1 AI Voice Agent",
            "Generous Monthly Calls",
            "Basic Lead Scraper",
            "Google Calendar Integration"
        ],
    },
    {
        name: "Pro",
        description: "For agencies scaling their outreach volume.",
        price: "300,000",
        usdPrice: "~$3,500",
        yearlyPrice: "3,000,000",
        buttonText: "Get started",
        buttonVariant: "default",
        popular: true,
        includes: [
            "Everything in Simple, plus:",
            "Multiple AI Voice Agents",
            "High-Volume Monthly Calls",
            "Advanced Lead Filtering",
            "Priority Support"
        ],
    },
    {
        name: "Advanced",
        description: "Maximum throughput and dedicated infrastructure.",
        price: "600,000",
        usdPrice: "~$7,000",
        yearlyPrice: "6,000,000",
        buttonText: "Contact Sales",
        buttonVariant: "outline",
        includes: [
            "Everything in Pro, plus:",
            "Unlimited Agents",
            "Enterprise Throughput",
            "API Access",
            "Whitelabeling Options"
        ],
    },
];

const PricingSwitch = ({ onSwitch }) => {
    const [selected, setSelected] = useState("0");

    const handleSwitch = (value) => {
        setSelected(value);
        onSwitch(value);
    };

    return (
        <div className="flex justify-center">
            <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
                <button
                    onClick={() => handleSwitch("0")}
                    className={cn(
                        "relative z-10 w-fit h-14 rounded-full sm:px-8 px-6 sm:py-3 py-2 font-bold text-lg transition-colors transition-transform duration-300 hover:scale-[1.03]",
                        selected === "0" ? "text-white" : "text-gray-400",
                    )}
                >
                    {selected === "0" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0 h-14 w-full rounded-full border-2 shadow-lg shadow-indigo-600/50 border-indigo-400 bg-indigo-600"
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                    )}
                    <span className="relative">Monthly</span>
                </button>

                <button
                    onClick={() => handleSwitch("1")}
                    className={cn(
                        "relative z-10 w-fit h-14 flex-shrink-0 rounded-full sm:px-8 px-6 sm:py-3 py-2 font-bold text-lg transition-colors transition-transform duration-300 hover:scale-[1.03]",
                        selected === "1" ? "text-white" : "text-gray-400",
                    )}
                >
                    {selected === "1" && (
                        <motion.span
                            layoutId={"switch"}
                            className="absolute top-0 left-0 h-14 w-full rounded-full border-2 shadow-lg shadow-indigo-600/50 border-indigo-400 bg-indigo-600"
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                    )}
                    <span className="relative flex items-center gap-2">Yearly <span className="text-xs bg-white text-indigo-600 px-2 py-0.5 rounded-full">-20%</span></span>
                </button>
            </div>
        </div>
    );
};

export default function PricingHero() {
    const [isYearly, setIsYearly] = useState(false);
    const pricingRef = useRef(null);

    const revealVariants = {
        visible: (i) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    const togglePricingPeriod = (value) => setIsYearly(Number.parseInt(value) === 1);

    return (
        <div className="relative bg-gradient-to-b from-black to-zinc-950 overflow-x-hidden pt-10 pb-20" ref={pricingRef}>
            <TimelineContent
                animationNum={4}
                customVariants={revealVariants}
                className="absolute top-0 h-96 w-screen overflow-hidden z-0 pointer-events-none [mask-image:radial-gradient(50%_50%,white,transparent)] "
            >
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
                <SparklesComp
                    density={1800}
                    direction="bottom"
                    speed={1}
                    color="#FFFFFF"
                    className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </TimelineContent>

            <article className="text-center mb-16 pt-32 max-w-3xl mx-auto space-y-4 relative z-10 px-4">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    <VerticalCutReveal
                        splitBy="words"
                        staggerDuration={0.15}
                        staggerFrom="first"
                        reverse={false}
                        containerClassName="justify-center clash-display flex flex-wrap"
                        transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
                    >
                        Plans built for your success.
                    </VerticalCutReveal>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Trusted by scaling teams. Pick the one that matches your growth goals.
                </p>
                <div className="pt-8">
                    <PricingSwitch onSwitch={togglePricingPeriod} />
                </div>
            </article>

            <div
                className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at center, #4f46e5 0%, transparent 70%)`, opacity: 0.4, mixBlendMode: "screen" }} // Adjusted blend mode and opacity
            />

            <div className="grid md:grid-cols-3 max-w-6xl gap-8 px-4 mx-auto relative z-10">
                {plans.map((plan, index) => (
                    <TimelineContent key={plan.name} animationNum={2 + index} customVariants={revealVariants}>
                        <Card
                            className={`relative h-full flex flex-col text-white border-white/10 group transition-all duration-500 ${plan.popular
                                ? "scale-105 bg-[#0a0f1c] border-2 border-indigo-500 shadow-[0_0_50px_-10px_rgba(99,102,241,0.4)] z-10"
                                : "bg-zinc-900/50 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-2 scale-100 opacity-80 hover:opacity-100"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-indigo-500/40">
                                    MOST POPULAR
                                </div>
                            )}
                            <CardHeader className="text-left p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-baseline mb-1">
                                        <span className="text-4xl font-bold tracking-tight">₹ {isYearly ? plan.yearlyPrice : plan.price}</span>
                                        <span className="text-zinc-400 ml-2">/{isYearly ? "year" : "month"}</span>
                                    </div>
                                    <span className="text-sm text-indigo-400 font-medium">{plan.usdPrice}</span>
                                </div>
                                <p className="text-sm text-zinc-400 h-10">{plan.description}</p>
                            </CardHeader>

                            <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                                <div className="mb-8">
                                    {plan.popular ? (
                                        <GlowButton className="w-full text-lg py-6 bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-500/50">Get started</GlowButton>
                                    ) : (
                                        <GlowButton variant="outline" className="w-full text-lg py-6 border-white/10 hover:bg-white/5 hover:text-white">
                                            {plan.buttonText}
                                        </GlowButton>
                                    )}
                                </div>

                                <div className="space-y-4 pt-6 border-t border-white/5 flex-grow">
                                    <h4 className="font-medium text-sm text-zinc-300 uppercase tracking-wider mb-4">What's included</h4>
                                    <ul className="space-y-3">
                                        {plan.includes.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <span className="mt-1 h-5 w-5 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                                    <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full" />
                                                </span>
                                                <span className="text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                ))}
            </div>
        </div>
    );
}
