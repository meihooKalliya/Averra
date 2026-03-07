import { Command, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#040812] border-t border-white/5 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src="/averra_logo.png" alt="Averra Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-white uppercase tracking-tight">Averra</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Automating sales outreach with human-like AI agents that scrape, dial, and book meetings.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Youtube} />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              <FooterLink to="/features" label="Features" />
              <FooterLink to="/pricing" label="Pricing" />
              <FooterLink to="/login" label="Dashboard" />
              <FooterLink to="/testimonials" label="Success Stories" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/blog/archive" label="Archive" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              <FooterLink to="/support?tab=faq" label="Help Center" />
              <FooterLink to="/support?tab=privacy" label="Privacy Policy" />
              <FooterLink to="/support?tab=terms" label="Terms of Service" />
              <FooterLink to="/support?tab=cookies" label="Cookie Policy" />
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Averra AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-zinc-500 font-mono">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <li>
    <Link to={to} className="text-sm text-zinc-400 hover:text-white transition-colors hover:pl-2 duration-300 block">
      {label}
    </Link>
  </li>
);

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1">
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;


