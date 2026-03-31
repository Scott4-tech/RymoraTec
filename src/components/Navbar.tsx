import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLightPage = location.pathname === '/printing-design';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Printing & Design', href: '/printing-design' },
    { name: 'Contact', href: '/#contact' },
  ];

  const bgColor = isLightPage 
    ? (isScrolled ? 'bg-verdant-pale/80 backdrop-blur-lg' : 'bg-transparent')
    : (isScrolled ? 'bg-[#020617]/80 backdrop-blur-lg' : 'bg-transparent');
  
  const textColor = isLightPage ? 'text-verdant-deep' : 'text-slate-300';
  const logoTextColor = isLightPage ? 'text-verdant-deep' : 'text-white';
  const mobileToggleColor = isLightPage ? 'text-verdant-deep' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor} ${isScrolled ? 'py-4 shadow-xl' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-12 h-12 rounded-xl ${isLightPage ? 'bg-verdant-mid/10 border-verdant-mid/20' : 'bg-rymora-accent/10 border-rymora-accent/20'} flex items-center justify-center overflow-hidden border group-hover:border-rymora-accent/50 transition-all`}>
            <img 
              src="/logo.png" 
              alt="Rymora Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`${logoTextColor} font-bold tracking-wider text-lg leading-none`}>RYMORA</span>
            <span className={`text-[10px] ${isLightPage ? 'text-verdant-mid' : 'text-rymora-accent'} tracking-[0.2em] font-medium uppercase`}>Technologies</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <HashLink 
              key={link.name} 
              to={link.href} 
              smooth
              className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors`}
            >
              {link.name}
            </HashLink>
          ))}
          <HashLink 
            to="/#contact" 
            smooth
            className={`${isLightPage ? 'bg-verdant-deep text-white hover:bg-verdant-mid' : 'bg-rymora-accent/10 hover:bg-rymora-accent/20 text-rymora-accent border border-rymora-accent/30'} px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]`}
          >
            Get In Touch
          </HashLink>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${mobileToggleColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className={`absolute top-full left-0 w-full ${isLightPage ? 'bg-verdant-pale border-verdant-mid/10' : 'bg-[#020617] border-white/10'} border-b p-6 md:hidden`}
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <HashLink 
                  key={link.name} 
                  to={link.href} 
                  smooth
                  className={`text-lg font-medium ${textColor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </HashLink>
              ))}
              <HashLink 
                to="/#contact" 
                smooth
                className={`${isLightPage ? 'bg-verdant-deep text-white' : 'bg-rymora-accent text-slate-900'} px-6 py-3 rounded-xl font-bold mt-2`}
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
