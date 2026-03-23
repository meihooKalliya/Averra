import HeroSection from "../sections/HeroSection";
import VoiceExamples from "../sections/VoiceExamples";

import FeaturesBento from "../components/FeaturesBento";
import BlogCarousel from "../components/BlogCarousel";
import TestimonialSlider from "../components/TestimonialSlider";
import StatsSection from "../components/StatsSection";
import CallToAction from "../components/CallToAction";
import RadialOrbitalTimeline from "../components/ui/radial-orbital-timeline";
import { LineChart, RefreshCw, Search, PhoneCall, Mic } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const timelineData = [
  { id: 1, title: "Analytics Dashboard", date: "UVP 1", content: "Monitor live campaigns, conversion rates, and call outcomes in comprehensive dashboard.", category: "Analytics", icon: LineChart, relatedIds: [2], status: "completed", energy: 100 },
  { id: 2, title: "Daily Script Updates", date: "UVP 2", content: "Continuously refine messaging with daily voice and script changes based on transcripts.", category: "Optimization", icon: RefreshCw, relatedIds: [1, 3], status: "completed", energy: 90 },
  { id: 3, title: "Lead Scrapers", date: "UVP 3", content: "Integrated lead scraping tools available for finding qualified leads in specific growth scenarios.", category: "Data", icon: Search, relatedIds: [2, 4], status: "in-progress", energy: 85 },
  { id: 4, title: "Bulk Calling", date: "UVP 4", content: "Scale your outreach effortlessly by executing thousands of automated cold calls simultaneously.", category: "Scale", icon: PhoneCall, relatedIds: [3, 5], status: "pending", energy: 60 },
  { id: 5, title: "Human Like Voice", date: "UVP 5", content: "Engage prospects seamlessly with natural, human-like cadence, pauses & emotional intonation.", category: "Voice", icon: Mic, relatedIds: [4], status: "pending", energy: 100 },
];

const HomePage = () => {
  return (
    <div className="text-2xl mx-auto">
      <HeroSection />
      <FeaturesBento />

      <RadialOrbitalTimeline timelineData={timelineData} />

      <VoiceExamples />
      <BlogCarousel />
      <TestimonialSlider />
      {/* <StatsSection /> */}
      <CallToAction />
    </div>
  );
};
export default HomePage;


