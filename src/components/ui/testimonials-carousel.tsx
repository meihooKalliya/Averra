"use client";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

type Testimonial = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const initialTestimonials: Testimonial[] = [
  { tempId: 1, testimonial: "ForexTrade helped us execute faster with confidence.", by: "Alex, CTO at FinOps", imgSrc: "https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=256&auto=format&fit=crop" },
  { tempId: 2, testimonial: "Latency and reliability are top-notch.", by: "Sam, Lead Trader at Quantica", imgSrc: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=256&auto=format&fit=crop" },
  { tempId: 3, testimonial: "We ship faster thanks to the platform.", by: "Priya, PM at MarketsIQ", imgSrc: "https://images.unsplash.com/photo-1558222217-9acfb8fbe01c?q=80&w=256&auto=format&fit=crop" },
  { tempId: 4, testimonial: "Support is responsive and knowledgeable.", by: "Diego, Ops at TradeFlow", imgSrc: "https://images.unsplash.com/photo-1545315176-46bb19388ef0?q=80&w=256&auto=format&fit=crop" },
  { tempId: 5, testimonial: "Exactly what our desk needed.", by: "Mina, Analyst at BlueBridge", imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" },
  { tempId: 6, testimonial: "Clear, modern, and reliable.", by: "Arman, Trader at Vertex", imgSrc: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop" },
];

export default function TestimonialsCarousel() {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(initialTestimonials);
  const [cardSize, setCardSize] = useState(320);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-muted/30" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2;
        return (
          <TestimonialCard key={testimonial.tempId} testimonial={testimonial} handleMove={handleMove} position={position} cardSize={cardSize} />
        );
      })}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button onClick={() => handleMove(-1)} className={cn("flex h-14 w-14 items-center justify-center text-2xl transition-colors", "rounded-xl border border-white/10 bg-zinc-900/40 text-white hover:bg-white/10")}>‹</button>
        <button onClick={() => handleMove(1)} className={cn("flex h-14 w-14 items-center justify-center text-2xl transition-colors", "rounded-xl border border-white/10 bg-zinc-900/40 text-white hover:bg-white/10")}>›</button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, handleMove, position, cardSize }: { testimonial: Testimonial; handleMove: (s: number) => void; position: number; cardSize: number }) {
  const translateX = position * (cardSize + 24);
  const scale = 1 - Math.abs(position) * 0.06;
  const zIndex = 100 - Math.abs(position);
  const opacity = 1 - Math.abs(position) * 0.1;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" style={{ transform: `translate(${translateX}px, -50%) scale(${scale})`, zIndex, opacity }}>
      <div className="w-[290px] sm:w-[365px] rounded-xl border border-white/10 bg-[#0B0C15] p-4 shadow-lg hover:border-white/20 transition-all">
        <div className="flex items-center gap-3 mb-3">
          <img src={testimonial.imgSrc} alt={testimonial.by} className="w-10 h-10 rounded-full object-cover" />
          <div className="text-xs text-zinc-300">{testimonial.by}</div>
        </div>
        <p className="text-sm text-zinc-200">“{testimonial.testimonial}”</p>
        <div className="mt-4 flex justify-between">
          <button onClick={() => handleMove(-1)} className="text-xs px-3 py-1 rounded-md bg-white/5 hover:bg-white/10">Prev</button>
          <button onClick={() => handleMove(1)} className="text-xs px-3 py-1 rounded-md bg-white/5 hover:bg-white/10">Next</button>
        </div>
      </div>
    </div>
  );
}
