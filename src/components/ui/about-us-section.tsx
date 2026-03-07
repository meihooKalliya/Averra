"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { StaggerTestimonials } from "./stagger-testimonials";

export default function AboutUsSection(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about-section" ref={sectionRef} className="w-full py-24 px-4 bg-gradient-to-b from-black to-zinc-900 text-white overflow-hidden relative">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] rounded-full blur-[140px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(79,70,229,0.6), rgba(168,85,247,0.4), transparent 70%)" }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 clash-display bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">About Us</h2>
        <p className="text-sm md:text-base text-zinc-300 mb-10 max-w-3xl">We build reliable, modern trading experiences that help you operate with confidence. Our team blends engineering discipline with design craft to deliver tools traders actually love.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-zinc-900/40 hover:border-white/20 transition-all">
            <h3 className="text-lg font-medium mb-2">Mission</h3>
            <p className="text-sm text-zinc-300">Provide a fast, secure platform that empowers traders with clarity, speed, and control.</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-zinc-900/40 hover:border-white/20 transition-all">
            <h3 className="text-lg font-medium mb-2">Values</h3>
            <p className="text-sm text-zinc-300">Trust, transparency, and performance. We ship pragmatic solutions, not buzzwords.</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-zinc-900/40 hover:border-white/20 transition-all">
            <h3 className="text-lg font-medium mb-2">Approach</h3>
            <p className="text-sm text-zinc-300">User-led design, tested releases, and measurable improvements across every feature.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Uptime" value="99.99%" />
          <StatCard label="Latency" value="< 80ms" />
          <StatCard label="Active Traders" value="20k+" />
          <StatCard label="Countries" value="45+" />
        </div>

        <div className="mt-12 rounded-xl border border-white/10 p-6 bg-zinc-900/40 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-300">Want to learn more about our roadmap and team?</p>
            <p className="text-xs text-zinc-400">Visit our blog for engineering write-ups and product updates.</p>
          </div>
          <a href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white hover:opacity-90 transition-all">Explore Blog</a>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-8 clash-display text-center">Loved by Traders</h3>
            <StaggerTestimonials />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 p-4 bg-zinc-900/40 hover:border-white/20 transition-all">
      <p className="text-xs text-zinc-400 mb-1">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
  );
}
