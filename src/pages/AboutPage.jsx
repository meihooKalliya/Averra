import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users, Trophy, Target, Globe, Linkedin, Twitter, Phone, Shield, TrendingUp, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";

import ValuePillars from "../components/ValuePillars";
import OurStory from "../components/OurStory";
import FeatureComparison from "../components/features/FeatureComparison";
// Mock Data for Team
const teamMembers = [
  {
    name: "Mudit Sonawane",
    role: "Tech Lead",
    bio: "Obsessed with finding and solving complex engineering problems. The architect behind the agent's core logic."
  },
  {
    name: "Rajveer Vadke",
    role: "Visionary",
    bio: "A relentless work monster with a vision for the future of automated sales. Driving the product strategy forward."
  }
];

// Fictitious Stats Data
const stats = [
  { value: "50M+", label: "Calls Executed", icon: Phone },
  { value: "98.5%", label: "Uptime SLA", icon: Shield },
  { value: "₹2B+", label: "Pipeline Gen", icon: TrendingUp },
  { value: "<0.5s", label: "Agent Latency", icon: Zap }
];

const AboutPage = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-400 mb-6">
              EST. 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 clash-display">
              Building the Future <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                of Sales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We empower businesses to scale their outreach infinitely, remove the fear of rejection,
              and focus on closing deals rather than dialing numbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & VALUES (Bento / Grid Style) */}
      <section className="py-20 relative bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop"
                alt="Trading Dashboard"
                className="relative rounded-2xl border border-white/10 shadow-2xl"
              />
            </motion.div>
            <div className="md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 clash-display">Our Mission</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                To eliminate the grind of manual sales outreach. We believe every sales team deserves a platform that handles the repetitive work—prospecting, dialing, and qualifying—leaving humans to do what they do best: build relationships and close deals.
              </p>
              <ul className="space-y-4">
                {[
                  "Transparency in every interaction",
                  "Security for your lead data",
                  "AI that sounds human"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-32 relative p-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-indigo-500/30 via-purple-500/10 to-transparent overflow-hidden group shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-shadow duration-700"
          >
            {/* Animated Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-colors duration-700" />

            <div className="relative bg-[#040812]/95 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-12 md:p-24 text-center border border-white/5 h-full overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-500/10 text-indigo-400 mb-10 border border-white/10 shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)] relative z-10"
                >
                    <Globe className="w-10 h-10" />
                </motion.div>

              <h3 className="text-4xl md:text-6xl font-semibold mb-10 text-white clash-display tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-100 to-indigo-300 relative z-10">
                Built at a scale that doesn't need to announce itself.
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <p className="text-zinc-400/90 text-xl md:text-2xl leading-relaxed font-light">
                  Averra runs quietly in the background of the world's sharpest sales teams — handling conversations at a volume no human floor could sustain, with a consistency no human floor could match. Calls go out the moment they're triggered. Agents stay live around the clock. Pipelines don't pause for sick days, time zones, or team stand-ups.
                </p>
                <div className="inline-flex mt-8 px-8 py-4 rounded-full bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
                  <p className="text-indigo-300 font-medium text-lg md:text-xl tracking-wide">
                      When infrastructure works this well, you stop counting calls. You start counting closed deals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ValuePillars />
      <OurStory />
      <FeatureComparison />

      {/* 3. MEET THE TEAM */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 clash-display">The Minds Behind It</h2>
            <p className="text-zinc-400">
              A diverse team of engineers, traders, and designers united by a common obsession: perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden"
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-[#040812] to-black flex items-center justify-center">
                    <Users className="w-20 h-20 text-indigo-500/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-indigo-500 transition-colors"><Linkedin className="w-4 h-4" /></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-sky-500 transition-colors"><Twitter className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-indigo-400 font-mono mb-3">{member.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/10 p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 clash-display">Join the Revolution</h2>
              <p className="text-xl text-zinc-300 mb-10">
                Stop settling for clunky interfaces and slow execution. Upgrade to the platform built for the modern era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={user ? "/dashboard" : "/login"}>
                  <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
                    {user ? "Go to Dashboard" : "Login Now"}
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    Contact Sales <ArrowUpRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;


