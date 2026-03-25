import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does the 14-day free trial work?",
        answer: "You get full access to all features in the Pro plan for 14 days. No credit card required to start. We'll email you before your trial expires."
    },
    {
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Prorated refunds are applied automatically."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and crypto payments (USDC, USDT, BTC, ETH) for annual plans."
    },
    {
        question: "Is there an API available for my CRM?",
        answer: "Yes, our Enterprise plan includes full read/write API access to sync leads, call recordings, and outcomes directly into systems like Salesforce, Hubspot, or Pipedrive."
    },
    {
        question: "Do you offer non-profit discounts?",
        answer: "Yes! Registered non-profits and charities can get 50% off the Pro annual plan. Contact our support team for verification."
    }
];

const PricingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 clash-display">Frequently Asked Questions</h2>
                    <p className="text-zinc-400">Everything you need to know about our billing and features.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? "border-indigo-500/30 bg-indigo-500/5" : "border-white/10 bg-zinc-900/20 hover:border-white/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full text-left p-6 flex items-center justify-between"
                            >
                                <span className={`text-lg font-medium ${openIndex === index ? "text-white" : "text-zinc-300"}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-1 rounded-full border transition-all ${openIndex === index
                                        ? "bg-indigo-500 border-indigo-500 text-white rotate-180"
                                        : "border-white/20 text-zinc-500 group-hover:border-white/40"
                                    }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingFAQ;
