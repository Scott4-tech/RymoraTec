import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Shield, Laptop, Network, Headphones, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isLightPage = false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      name: 'ICT Solutions', 
      href: '/ict-solutions', 
      desc: 'Modern corporate infrastructure',
      icon: <Laptop size={16} className="text-cyan-400" /> 
    },
    { 
      name: 'Cybersecurity', 
      href: '/cybersecurity', 
      desc: 'Zero-trust perimeter defense',
      icon: <Shield size={16} className="text-purple-400" /> 
    },
    { 
      name: 'Networking', 
      href: '/networking', 
      desc: 'Enterprise optic & WiFi layouts',
      icon: <Network size={16} className="text-pink-400" /> 
    },
    { 
      name: 'IT Support', 
      href: '/it-support', 
      desc: '24/7 Managed Helpdesk & SLA',
      icon: <Headphones size={16} className="text-emerald-400" /> 
    },
    { 
      name: 'Enpass Password Manager', 
      href: '/enpass', 
      desc: 'Self-sovereign enterprise vault',
      icon: <Lock size={16} className="text-amber-400" /> 
    },
  ];

  const bgColor = isLightPage 
    ? (isScrolled ? 'bg-verdant-pale/80 backdrop-blur-lg' : 'bg-transparent')
    : (isScrolled ? 'bg-[#020617]/85 backdrop-blur-lg border-b border-white/5' : 'bg-transparent');
  
  const textColor = isLightPage ? 'text-verdant-deep' : 'text-slate-300';
  const logoTextColor = isLightPage ? 'text-verdant-deep' : 'text-white';
  const mobileToggleColor = isLightPage ? 'text-verdant-deep' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor} ${isScrolled ? 'py-4 shadow-xl' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className={`w-12 h-12 rounded-xl ${isLightPage ? 'bg-verdant-mid/10 border-verdant-mid/20' : 'bg-rymora-accent/10 border-rymora-accent/20'} flex items-center justify-center overflow-hidden border group-hover:border-rymora-accent/50 transition-all`}>
            <img 
              src="/logo.jpeg" 
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
          <Link to="/" className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors`}>
            Home
          </Link>
          <HashLink to="/#about" smooth className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors`}>
            About Us
          </HashLink>

          {/* Services Dropdown Trigger Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button 
              className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors flex items-center gap-1 py-2 focus:outline-none`}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-[#0b0f19] border border-white/10 rounded-2xl p-4 shadow-2xl z-50"
                >
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item text-left"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover/item:text-rymora-accent transition-colors">{service.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-normal">{service.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/enpass" className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors`}>
            Enpass Distributor
          </Link>

          <HashLink to="/#contact" smooth className={`text-sm font-medium ${textColor} hover:text-rymora-accent transition-colors`}>
            Contact
          </HashLink>

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
            className={`absolute top-full left-0 w-full ${isLightPage ? 'bg-verdant-pale border-verdant-mid/10' : 'bg-[#020617] border-white/10'} border-b p-6 md:hidden max-h-[85vh] overflow-y-auto`}
          >
            <div className="flex flex-col gap-4 text-center">
              <Link 
                to="/" 
                className={`text-lg font-medium ${textColor}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <HashLink 
                to="/#about" 
                smooth
                className={`text-lg font-medium ${textColor}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </HashLink>

              {/* Mobile Services Accordion */}
              <div className="border-t border-b border-white/5 py-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex justify-center items-center gap-2 text-lg font-medium text-white focus:outline-none"
                >
                  Services <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 pt-3 pb-2 text-sm">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white flex items-center justify-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/enpass" 
                className={`text-lg font-medium ${textColor}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enpass Distributor
              </Link>

              <HashLink 
                to="/#contact" 
                smooth
                className={`text-lg font-medium ${textColor}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </HashLink>

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

