import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        alert("Thanks for reaching out! We'll get back to you shortly.");
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 pt-24">
            {/* Hero Section */}
            <section className="relative pb-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20"
                        >
                            Contact Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            Let's start a conversation.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto"
                        >
                            Whether you're curious about features, pricing, or enterprise solutions, we're here to help.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-indigo-400" />
                                    Get in touch
                                </h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={Mail}
                                        title="Email us"
                                        content="support@averra.ai"
                                        sub="We reply within 24 hours"
                                    />
                                    <ContactItem
                                        icon={Phone}
                                        title="Call us"
                                        content="+1 (555) 123-4567"
                                        sub="Mon-Fri from 8am to 5pm EST"
                                    />
                                    <ContactItem
                                        icon={MapPin}
                                        title="Visit us"
                                        content="100 Finance Street, NY"
                                        sub="New York, NY 10005"
                                    />
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-3xl border border-indigo-500/20">
                                <h3 className="text-xl font-bold mb-2">Enterprise Inquiry?</h3>
                                <p className="text-zinc-400 mb-4">We offer tailored solutions for large trading firms.</p>
                                <a href="#" className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                                    Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-zinc-900/30 p-8 md:p-10 rounded-3xl border border-white/10"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-[#040812]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-700"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-[#040812]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-700"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Subject</label>
                                    <select
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-[#040812]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="sales">Sales Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#040812]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-700 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            </section>

            <CallToAction />
        </div>
    );
};

const ContactItem = ({ icon: Icon, title, content, sub }) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
            <h4 className="font-medium text-white">{title}</h4>
            <p className="text-lg text-zinc-200 font-semibold">{content}</p>
            <p className="text-sm text-zinc-500">{sub}</p>
        </div>
    </div>
);

export default ContactPage;


