import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a2a]">
      {/* Background Image with Deep Blue/Purple Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
          alt="IT Professionals in Server Room" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlays to match the moody blue/purple look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2a] via-[#0a0a2a]/80 to-transparent" />
        <div className="absolute inset-0 bg-[#1a1a4a]/30 mix-blend-overlay" />
        
        {/* Subtle Glows */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Software Solutions & AI Automation
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] mb-6 tracking-tighter uppercase">
              SCALE YOUR <br />
              <span className="text-[#3b82f6]">BUSINESS FAST</span>
            </h1>
            
            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-white/10 mb-8 max-w-md" />
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
              We transform complicated business processes into simple, intelligent, and profitable digital solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <HashLink 
                to="/#contact"
                smooth
                className="group relative border border-[#4ade80]/40 hover:border-[#4ade80] text-white px-8 py-4 text-sm font-medium transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm"
              >
                Get Started
                <Plus size={16} className="text-[#4ade80] group-hover:rotate-90 transition-transform duration-300" />
              </HashLink>
              <HashLink 
                to="/#services"
                smooth
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 text-sm font-medium transition-all bg-white/5 backdrop-blur-sm"
              >
                Services
              </HashLink>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;