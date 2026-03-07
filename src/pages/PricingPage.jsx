import React, { useEffect } from 'react';
import PricingHero from "../components/pricing/PricingHero";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingFAQ from "../components/pricing/PricingFAQ";
import CallToAction from "../components/CallToAction";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30">
      <PricingHero />
      <PricingComparison />
      <PricingFAQ />
      <CallToAction />
    </div>
  );
};

export default PricingPage;

