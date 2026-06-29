import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, Laptop, Shield, Network, Headphones, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      name: 'ICT Solutions', 
      href: '/ict-solutions', 
      desc: 'Modern corporate infrastructure',
      icon: <Laptop size={14} className="text-[#a75bf5]" /> 
    },
    { 
      name: 'Cybersecurity', 
      href: '/cybersecurity', 
      desc: 'Zero-trust perimeter defense',
      icon: <Shield size={14} className="text-[#a75bf5]" /> 
    },
    { 
      name: 'Networking', 
      href: '/networking', 
      desc: 'Enterprise optic & WiFi layouts',
      icon: <Network size={14} className="text-[#a75bf5]" /> 
    },
    { 
      name: 'IT Support', 
      href: '/it-support', 
      desc: '24/7 Managed Helpdesk & SLA',
      icon: <Headphones size={14} className="text-[#a75bf5]" /> 
    },
    { 
      name: 'Enpass Password Manager', 
      href: '/enpass', 
      desc: 'Self-sovereign enterprise vault',
      icon: <Lock size={14} className="text-[#a75bf5]" /> 
    },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col font-sans">
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 36, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-[#0c0c0e] border-b border-white/5 text-canvas-white flex items-center justify-between px-6 z-50 text-[11px] tracking-tight select-none"
          >
            <div className="flex-1 text-center font-mono text-[11px] tracking-wider text-muted-slate uppercase">
              <span className="text-[#a75bf5] font-bold mr-2">OFFICIAL DISTRIBUTOR</span>
              <span>Authorized Enpass Password Manager Partner in Zimbabwe.</span>
              <Link to="/enpass" className="underline underline-offset-2 text-white hover:text-[#a75bf5] ml-2 transition-colors">
                Licensing Options &rarr;
              </Link>
            </div>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="text-muted-slate hover:text-canvas-white transition-colors p-1 cursor-pointer"
              aria-label="Close Announcement"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Navigation */}
      <nav className={`w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#080809]/95 backdrop-blur-md border-white/[0.06] py-3' 
          : 'bg-[#080809]/70 backdrop-blur-sm border-white/[0.03] py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* Left Zone: Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
            {/* Elegant Star Icon from the screenshots */}
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 text-white animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L14.5 9.5H24L16.25 15.5L18.75 25L12 19L5.25 25L7.75 15.5L0 9.5H9.5L12 0Z" />
            </svg>
            <span className="text-white font-sans font-medium tracking-tight text-lg leading-none">
              Rymoratech
            </span>
          </Link>

          {/* Center Zone: Horizontal links on laptop view, hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[13.5px] font-mono tracking-widest text-[#8e8e93] uppercase relative">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <HashLink to="/#about" smooth className="hover:text-white transition-colors">About Us</HashLink>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer focus:outline-none uppercase font-mono tracking-widest text-[13.5px]"
              >
                <span>Services</span>
                <ChevronDown size={10} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#a75bf5]' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 flex flex-col gap-1.5 normal-case tracking-normal"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/[0.04] transition-all group"
                      >
                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#8827DD]/10 transition-colors">
                          {service.icon}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-s font-medium text-white group-hover:text-[#a75bf5] transition-colors">
                            {service.name}
                          </span>
                          <span className="text-[13px] text-zinc-500 font-sans leading-tight mt-0.5">
                            {service.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/enpass" className="hover:text-white transition-colors">Enpass Partner</Link>
          </div>

          {/* Right Zone: Pill Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 z-10">
              <HashLink 
                to="/#contact" 
                smooth
                className="px-4 py-2 rounded-lg bg-black border border-white/10 hover:border-[#8827DD]/50 transition-all flex items-center gap-2.5 text-s text-white font-light group tracking-tight"
              >
                <span>Talk to Rymoratech</span>
                {/* Matrix Red Grid icon from the screenshots */}
                <div className="grid grid-cols-3 gap-[2px] w-3 h-3 bg-white/5 p-[1px] rounded-sm group-hover:scale-105 transition-transform">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-[2.5px] h-[2.5px] bg-[#f43f5e] rounded-[1px]" />
                  ))}
                </div>
              </HashLink>
            </div>

            <button 
              className="flex md:hidden flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none group cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-6 bg-white rounded-full transition-all duration-300"
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-4 bg-white rounded-full transition-all duration-300 group-hover:w-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#080809]/98 backdrop-blur-xl z-40 flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            {/* Absolute Close/Collapse Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all cursor-pointer group"
              aria-label="Close Menu"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">Close Menu</span>
              <X size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
            </button>

            <div className="max-w-xl mx-auto w-full flex flex-col h-full justify-between">
              
              {/* Menu Links */}
              <div className="flex flex-col space-y-6 text-left">
                <div>
                  <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-muted-slate block mb-4 border-b border-white/5 pb-2">Navigation</span>
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/" 
                      className="text-2xl font-serif text-white hover:text-[#a75bf5] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <HashLink 
                      to="/#about" 
                      smooth
                      className="text-2xl font-serif text-white hover:text-[#a75bf5] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </HashLink>
                    <Link 
                      to="/enpass" 
                      className="text-2xl font-serif text-white hover:text-[#a75bf5] transition-colors flex items-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Enpass Distributor <span className="text-[13px] uppercase tracking-wider font-mono text-[#a75bf5] bg-[#8827DD]/10 px-2 py-0.5 rounded border border-[#8827DD]/20">Secure</span>
                    </Link>
                    <HashLink 
                      to="/#contact" 
                      smooth
                      className="text-2xl font-serif text-white hover:text-[#a75bf5] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </HashLink>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="pt-4">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex justify-between items-center font-mono text-[13px] uppercase tracking-[0.2em] text-muted-slate border-b border-white/5 pb-2 mb-4 cursor-pointer"
                  >
                    <span>Services</span>
                    <span className="text-[13px] text-[#a75bf5]">{isServicesOpen ? "Collapse —" : "Expand +"}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#8827DD]/30 hover:bg-white/[0.04] transition-all flex items-center gap-3 text-left"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0">
                              {service.icon}
                            </div>
                            <div>
                              <div className="text-[13.5px] font-semibold text-white">{service.name}</div>
                              <div className="text-[12px] text-muted-slate line-clamp-1">{service.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer details inside menu */}
              <div className="pt-8 border-t border-white/5 text-left font-mono text-[13px] text-muted-slate space-y-2">
                <div className="flex justify-between">
                  <span>Sovereign Tech Systems</span>
                  <span className="text-[#a75bf5]">Harare, Zimbabwe</span>
                </div>
                <div className="flex justify-between">
                  <span>info@rymoratech.co.zw</span>
                  <span>+263 78 905 7818</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;