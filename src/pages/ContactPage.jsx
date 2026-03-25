import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
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
        const { name, email, subject, message } = formState;
        
        // Native mailto submission so it goes directly to the specified email
        const mailtoLink = `mailto:averra911@gmail.com?subject=${encodeURIComponent(subject || 'New Contact Request: ' + name)}&body=${encodeURIComponent(`You have received a new message from ${name} (${email}).\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30 pt-24">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <section className="relative pb-24 px-4 overflow-hidden z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Get In Touch
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter clash-display"
                        >
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400">
                                conversation.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            Whether you're looking to scale outreach or curious about our tech, we're ready when you are.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                        {/* Left: Info Side */}
                        <div className="lg:col-span-5 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-black border border-white/5 backdrop-blur-xl group hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
                                
                                <h3 className="text-2xl font-bold mb-10 clash-display text-white transition-colors group-hover:text-indigo-400">
                                    Direct Channels
                                </h3>
                                
                                <div className="space-y-10">
                                    <ContactItem
                                        icon={Mail}
                                        title="Official Email"
                                        content="averra911@gmail.com"
                                        color="text-indigo-400"
                                    />
                                    <ContactItem
                                        icon={Phone}
                                        title="Primary Phone"
                                        content="+91 90113 57779"
                                        color="text-blue-400"
                                    />
                                    <ContactItem
                                        icon={Phone}
                                        title="Secondary Phone"
                                        content="+91 7499 205 636"
                                        color="text-purple-400"
                                    />
                                </div>
                            </motion.div>

                            {/* Decorative Sub-card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="p-8 rounded-[2rem] bg-indigo-500/5 border border-indigo-500/10 backdrop-blur-md"
                            >
                                <p className="text-sm text-indigo-300 font-medium flex items-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Global Support Active
                                </p>
                                <p className="text-zinc-500 text-sm">
                                    Our AI systems monitor 24/7. Human responders typically reach back within a single business day.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right: Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-7 bg-white/[0.02] p-10 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl relative"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="group space-y-3">
                                        <label className="text-sm font-semibold text-zinc-500 group-focus-within:text-indigo-400 transition-colors tracking-widest uppercase">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all outline-none"
                                            placeholder="What's your name?"
                                        />
                                    </div>
                                    <div className="group space-y-3">
                                        <label className="text-sm font-semibold text-zinc-500 group-focus-within:text-blue-400 transition-colors tracking-widest uppercase">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all outline-none"
                                            placeholder="Where can we reply?"
                                        />
                                    </div>
                                </div>
                                
                                <div className="group space-y-3">
                                    <label className="text-sm font-semibold text-zinc-500 group-focus-within:text-purple-400 transition-colors tracking-widest uppercase">Purpose</label>
                                    <select
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all outline-none appearance-none"
                                    >
                                        <option value="" className="bg-[#0b1120]">Select Topic...</option>
                                        <option value="sales" className="bg-[#0b1120]">Sales Inquiry</option>
                                        <option value="demo" className="bg-[#0b1120]">Request A Demo</option>
                                        <option value="enterprise" className="bg-[#0b1120]">Enterprise Solutions</option>
                                        <option value="other" className="bg-[#0b1120]">Other</option>
                                    </select>
                                </div>

                                <div className="group space-y-3">
                                    <label className="text-sm font-semibold text-zinc-500 group-focus-within:text-indigo-400 transition-colors tracking-widest uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all outline-none resize-none"
                                        placeholder="How can we help your team scale today?"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-white text-black font-extrabold py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                                >
                                    <span className="relative z-10 text-lg uppercase tracking-wider">Send Message</span>
                                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

const ContactItem = ({ icon: Icon, title, content, color }) => (
    <div className="flex items-center gap-6 group/item cursor-pointer">
        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all duration-300 group-hover/item:border-white/20 group-hover/item:scale-110 ${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">{title}</h4>
            <p className="text-xl text-white font-bold clash-display group-hover/item:text-indigo-400 transition-colors whitespace-nowrap">{content}</p>
        </div>
    </div>
);

export default ContactPage;


