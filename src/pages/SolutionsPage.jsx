import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Building2, BarChart3, Users, Zap } from 'lucide-react';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Custom Solutions for Your Scale</h1>
        <p className="text-xl text-zinc-400">
          We understand that every business has unique needs. Our pricing is custom-tailored based on your calling volume, required integrations, and specific use cases.
        </p>
      </motion.div>

      {/* Value Props Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {[
          { icon: <BarChart3 className="w-8 h-8 text-blue-500" />, title: "Volume-Based Pricing", desc: "Pay for the capacity you actually need. We scale with your campaign sizes." },
          { icon: <Building2 className="w-8 h-8 text-blue-500" />, title: "Enterprise Ready", desc: "Dedicated support, custom SLAs, and tailored onboarding for large teams." },
          { icon: <Zap className="w-8 h-8 text-blue-500" />, title: "Unlimited Concurrency", desc: "Make 10 or 10,000 calls simultaneously without performance degradation." },
          { icon: <Users className="w-8 h-8 text-blue-500" />, title: "Dedicated AI Agents", desc: "Train agents specifically on your knowledge base, CRM, and past calls." }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 transition-colors"
          >
            <div className="mb-4 bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-4xl bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Let's discuss your requirements</h2>
        <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with our team to walk through your specific workflow and get a customized proposal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all hover:scale-105">
            <Phone className="w-5 h-5" />
            Book a Consultation
          </a>
          <a href="mailto:sales@averra.ai" className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-4 px-8 rounded-xl transition-all">
            <Mail className="w-5 h-5" />
            Email Sales Team
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionsPage;
