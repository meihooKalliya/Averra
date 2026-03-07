import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Shield, FileText, Cookie, ChevronDown, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const SupportLegalPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'faq');

    const tabs = [
        { id: 'faq', label: 'FAQ & Help', icon: HelpCircle },
        { id: 'terms', label: 'Terms of Service', icon: FileText },
        { id: 'privacy', label: 'Privacy Policy', icon: Shield },
        { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
    ];

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && tabs.find(t => t.id === tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (id) => {
        setActiveTab(id);
        setSearchParams({ tab: id });
    };

    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Support & Legal
                    </motion.h1>
                    <p className="text-zinc-400 text-lg">
                        Find answers to your questions and read about our terms and policies.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 space-y-2 bg-zinc-900/30 p-2 rounded-2xl border border-white/5">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${isActive
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-900/20 border border-white/5 rounded-3xl p-8 md:p-12"
                            >
                                {activeTab === 'faq' && <FAQContent />}
                                {activeTab === 'terms' && <TermsContent />}
                                {activeTab === 'privacy' && <PrivacyContent />}
                                {activeTab === 'cookies' && <CookieContent />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

/* --- SUB-COMPONENTS --- */

const FAQContent = () => {
    const faqs = [
        { q: "How do I reset my password?", a: "You can reset your password by clicking 'Forgot Password' on the login screen. We'll send you an email with instructions." },
        { q: "Can I upgrade my plan at any time?", a: "Yes, you can upgrade your plan instantly from your account settings. Prorated charges will apply." },
        { q: "Where can I find trading tutorials?", a: "Check out our 'Education' section in the Blog for comprehensive guides and video tutorials." },
        { q: "Is my data secure?", a: "We use bank-grade 256-bit encryption to protect your personal and financial data." },
        { q: "Do you offer a refund policy?", a: "We offer a 14-day money-back guarantee for all annual subscriptions." },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-indigo-400" />
                Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
                {faqs.map((item, i) => (
                    <div key={i} className="bg-[#040812]/40 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                        <p className="text-zinc-400 leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TermsContent = () => (
    <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-indigo-400" />
            Terms of Service
        </h2>
        <p className="text-zinc-300 mb-6">Last updated: December 2025</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
        <p className="text-zinc-400">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Use License</h3>
        <p className="text-zinc-400">Permission is granted to temporarily download one copy of the materials (information or software) on Averra's website for personal, non-commercial transitory viewing only.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Disclaimer</h3>
        <p className="text-zinc-400">The materials on Averra's website are provided on an 'as is' basis. Averra makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Limitations</h3>
        <p className="text-zinc-400">In no event shall Averra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Averra's website.</p>
    </div>
);

const PrivacyContent = () => (
    <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-400" />
            Privacy Policy
        </h2>

        <p className="text-zinc-400 mb-6">Your privacy is important to us. It is Averra's policy to respect your privacy regarding any information we may collect from you across our website.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Information We Collect</h3>
        <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Log data (IP address, browser type, pages visited)</li>
            <li>Usage data (Time spent on pages, links clicked)</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">How We Use Your Information</h3>
        <p className="text-zinc-400">We use the collected data to provide and maintain our service, notify you about changes, allow you to participate in interactive features, and provide customer support.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Data Security</h3>
        <p className="text-zinc-400">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
    </div>
);

const CookieContent = () => (
    <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Cookie className="w-8 h-8 text-indigo-400" />
            Cookie Policy
        </h2>

        <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-xl mb-8">
            <p className="text-indigo-200">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
        </div>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">What Are Cookies</h3>
        <p className="text-zinc-400">Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">How We Use Cookies</h3>
        <div className="space-y-4">
            <CookieItem title="Essential Cookies" desc="Necessary for the website to function properly." />
            <CookieItem title="Analytics Cookies" desc="Help us understand how visitors interact with the website." />
            <CookieItem title="Marketing Cookies" desc="Used to track visitors across websites to display relevant ads." />
        </div>
    </div>
);

const CookieItem = ({ title, desc }) => (
    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
        <div className="p-2 bg-zinc-800 rounded-lg">
            <Check className="w-4 h-4 text-green-400" />
        </div>
        <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-sm text-zinc-400">{desc}</p>
        </div>
    </div>
);

export default SupportLegalPage;


