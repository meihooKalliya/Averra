import { Command, Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-0" : "py-2"
          }`}
      >
        <div className={`mx-auto transition-all duration-500 ${isScrolled
          ? "bg-[#040812]/60 backdrop-blur-xl border border-white/5 rounded-full px-6 h-16 max-w-5xl shadow-2xl shadow-indigo-500/10"
          : "bg-transparent px-6 h-20 max-w-7xl"
          } flex items-center justify-between`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src="/averra_logo.png" alt="Averra Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl clash-display text-white tracking-tight uppercase">
              Averra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact/CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="relative overflow-hidden bg-white text-black font-bold text-sm px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040812]/95 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
                  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                    <img src="/averra_logo.png" alt="Averra Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-xl text-white uppercase tracking-tight">Averra</span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all"
                    >
                      <span className="text-2xl font-medium text-zinc-300 group-hover:text-white">
                        {link.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                  <button className="w-full bg-indigo-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">
                    Contact Us
                  </button>
                </Link>
                <div className="mt-8 text-center text-zinc-600 text-sm">
                  © {new Date().getFullYear()} Averra AI Inc.
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;


