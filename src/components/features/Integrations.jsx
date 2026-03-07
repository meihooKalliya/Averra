import { motion } from "framer-motion";

const Integrations = () => {
    const logos = [
        "Hubspot", "Salesforce", "Pipedrive", "Zoho",
        "Slack", "Zapier", "Gmail", "Outlook"
    ];

    return (
        <section className="py-24 bg-[#020408] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 clash-display">
                    Plays Nice With Your Stack
                </h2>
                <p className="text-white/50">Native two-way sync with major CRMs.</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase hover:text-white/80 transition-colors cursor-default">
                            {logo}
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase hover:text-white/80 transition-colors cursor-default">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 25s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>
        </section>
    );
};

export default Integrations;
