import HeroSection from "../sections/HeroSection";
import VoiceExamples from "../sections/VoiceExamples";

import FeaturesBento from "../components/FeaturesBento";
import BlogCarousel from "../components/BlogCarousel";
import TestimonialSlider from "../components/TestimonialSlider";
import StatsSection from "../components/StatsSection";
import CallToAction from "../components/CallToAction";
import AIDemo from "../components/AIDemo";
import LiveMarketInsights from "../components/LiveMarketInsights";
import RadialOrbitalTimeline from "../components/ui/radial-orbital-timeline";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const timelineData = [
  { id: 1, title: "Lead Discovery", date: "Step 1", content: "AI Scraper identifies high-intent leads from 50+ sources matching your ICP.", category: "Scraping", icon: User, relatedIds: [2], status: "completed", energy: 100 },
  { id: 2, title: "Enrichment", date: "Step 2", content: "Extracting verified direct dial numbers and email addresses.", category: "Data", icon: FileText, relatedIds: [1, 3], status: "completed", energy: 90 },
  { id: 3, title: "Voice Gen", date: "Step 3", content: "Synthesizing dynamic script variations with human-like intonation.", category: "AI", icon: Code, relatedIds: [2, 4], status: "in-progress", energy: 85 },
  { id: 4, title: "Call Execution", date: "Step 4", content: "Agent dials, navigates gatekeepers, and handles objections in real-time.", category: "Calling", icon: Clock, relatedIds: [3, 5], status: "pending", energy: 60 },
  { id: 5, title: "Meeting Booked", date: "Success", content: "Calendar invite sent to prospect and sales rep automatically.", category: "Closing", icon: Calendar, relatedIds: [4], status: "pending", energy: 100 },
];

const HomePage = () => {
  return (
    <div className="text-2xl mx-auto">
      <HeroSection />
      <FeaturesBento />

      {/* AI Demo Section - Try before signup */}
      <div id="ai-demo">
        <AIDemo />
      </div>

      <RadialOrbitalTimeline timelineData={timelineData} />

      {/* Live AI Market Insights */}
      <LiveMarketInsights />

      <VoiceExamples />
      <BlogCarousel />
      <TestimonialSlider />
      {/* <StatsSection /> */}
      <CallToAction />
    </div>
  );
};
export default HomePage;


