import React from 'react';
import OrchestrationFlow from '../components/features/OrchestrationFlow';
import SentimentAnalysis from '../components/features/SentimentAnalysis';
import Integrations from '../components/features/Integrations';
import SecuritySection from '../components/features/SecuritySection';
import FeatureComparison from '../components/features/FeatureComparison';
import CallToAction from '../components/CallToAction';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#030309] text-white font-sans selection:bg-indigo-500/30 relative">

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 px-4 text-center overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 clash-display">
            A complete sales team <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              in one API
            </span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl mx-auto">
            Averra isn't just a dialer. It's an end-to-end autonomous revenue engine.
          </p>
        </div>
      </section>

      {/* 1. Process Flow */}
      <OrchestrationFlow />

      {/* 2. AI Intelligence */}
      <SentimentAnalysis />

      {/* 3. Comparison Table */}
      <FeatureComparison />

      {/* 4. Integrations Ticker */}
      <Integrations />

      {/* 5. Security & Compliance */}
      <SecuritySection />

      {/* Bottom CTA */}
      <CallToAction />

    </div>
  );
}

