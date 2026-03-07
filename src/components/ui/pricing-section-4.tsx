"use client";
import { Card, CardContent, CardHeader } from "./card";
import { SparklesComp } from "./sparkles";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { GlowButton } from "./glow-button";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors transition-transform duration-300 hover:scale-[1.03]",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-indigo-600 border-indigo-600 bg-gradient-to-t from-indigo-500 to-indigo-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors transition-transform duration-300 hover:scale-[1.03]",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-indigo-600 border-indigo-600 bg-gradient-to-t from-indigo-500 to-indigo-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
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

  const togglePricingPeriod = (value: string) => setIsYearly(Number.parseInt(value) === 1);

  return (
    <div className="min-h-screen mx-auto relative bg-gradient-to-b from-black to-zinc-900 overflow-x-hidden" ref={pricingRef}>
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

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-10">
        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
          >
            Plans that work best for you
          </VerticalCutReveal>
        </h2>
        <p className="text-gray-300">
          Trusted by millions, We help teams all around the world, Explore which option is right for you.
        </p>
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at center, #4f46e5 0%, transparent 70%)`, opacity: 0.6, mixBlendMode: "multiply" }}
      />

      {/* SaaS-style gradient accents */}
      <motion.div
        className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-25 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(79,70,229,0.7), rgba(168,85,247,0.4), transparent 70%)" }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-25 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(56,189,248,0.35), rgba(79,70,229,0.5), transparent 70%)" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 top-20 w-[52rem] h-[52rem] z-0 pointer-events-none [background:conic-gradient(from_180deg,rgba(79,70,229,.18),transparent_30%)] [mask-image:radial-gradient(circle_at_center,white,transparent_60%)]"
        aria-hidden
      />

      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto ">
        {plans.map((plan, index) => (
          <TimelineContent key={plan.name} animationNum={2 + index} customVariants={revealVariants}>
            <Card
              className={`relative text-white border-neutral-800 group transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#312e81] hover:shadow-indigo-900/40 z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:shadow-black/30 z-10"
                }`}
            >
              <CardHeader className="text-left ">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold ">$ {isYearly ? plan.yearlyPrice : plan.price}</span>
                  <span className="text-gray-300 ml-1">/{isYearly ? "year" : "month"}</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {plan.popular ? (
                  <GlowButton className="mb-6 text-lg">Get started</GlowButton>
                ) : (
                  <GlowButton variant="outline" className="mb-6 text-lg">
                    {plan.buttonText}
                  </GlowButton>
                )}

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3">{plan.includes[0]}</h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center group-hover:bg-indigo-500/60 transition-colors"></span>
                        <span className="text-sm text-gray-300 group-hover:text-indigo-200 transition-colors">{feature}</span>
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