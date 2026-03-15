import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/80 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center overflow-hidden border border-rymora-accent/20 group-hover:border-rymora-accent/50 transition-all">
            <img 
              src="/logo.jpeg" 
              alt="Rymora Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wider text-lg leading-none">RYMORA</span>
            <span className="text-[10px] text-rymora-accent tracking-[0.2em] font-medium">TECHNOLOGIES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <HashLink 
              key={link.name} 
              to={link.href} 
              smooth
              className="text-sm font-medium text-slate-300 hover:text-rymora-accent transition-colors"
            >
              {link.name}
            </HashLink>
          ))}
          <HashLink 
            to="/#contact" 
            smooth
            className="bg-rymora-accent/10 hover:bg-rymora-accent/20 text-rymora-accent border border-rymora-accent/30 px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
          >
            Get In Touch
          </HashLink>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <HashLink 
                  key={link.name} 
                  to={link.href} 
                  smooth
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </HashLink>
              ))}
              <HashLink 
                to="/#contact" 
                smooth
                className="bg-rymora-accent text-slate-900 px-6 py-3 rounded-xl font-bold mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
