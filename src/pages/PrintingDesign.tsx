import React from 'react';
import { motion } from 'motion/react';
import { Printer, Palette, Layout, Layers, ChevronRight, CheckCircle2, ArrowRight, Box, Maximize, MousePointer2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const PrintingDesign = () => {
  return (
    <div className="bg-verdant-pale min-h-screen font-sans text-verdant-deep selection:bg-verdant-accent/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-verdant-pale">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full bg-verdant-mid/10 text-verdant-mid text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
              >
                Rymora Creative Studio
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-bold text-verdant-deep mb-8 leading-[1.1]"
              >
                Your One-Stop Branding Shop for Creative Design & High-Quality Printing.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-verdant-mid/80 font-serif italic mb-10 leading-relaxed max-w-2xl"
              >
                Advertising made simple. Where Zimbabwean heritage meets digital precision, we provide affordable solutions that help you plan your business strategy with our experts.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <a 
                  href="#contact" 
                  className="bg-verdant-deep text-white px-10 py-4 rounded-lg font-bold hover:bg-verdant-mid transition-all shadow-lg shadow-verdant-deep/10"
                >
                  Transform Your Visual Identity
                </a>
                
              </motion.div>
            </div>

            {/* Hero Images Stack */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2"
              >
                <div className="bg-slate-100 rounded-xl overflow-hidden">
                  <img 
                    src="/print1.avif" 
                    alt="Luxury Branding & Design" 
                    className="w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-4 w-1/2 md:w-2/5 rounded-xl overflow-hidden shadow-2xl border-4 border-verdant-pale"
              >
                <img 
                  src="/brand.jpg" 
                  alt="Branding Detail" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-32 bg-verdant-pale">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-verdant-deep mb-4">Our Core Expertise</h2>
            <div className="w-20 h-1 bg-verdant-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Corporate Branding */}
            <div className="lg:col-span-2 bg-verdant-light p-10 rounded-2xl flex flex-col justify-between group hover:bg-verdant-mid hover:text-white transition-all duration-500">
              <div>
                <Palette className="mb-8 w-8 h-8" />
                <h3 className="text-3xl font-serif font-bold mb-4">Corporate Branding</h3>
                <p className="text-lg opacity-80 font-serif italic">Comprehensive identity systems for businesses of all sizes.</p>
              </div>
            </div>

            {/* Exhibition Materials */}
            <div className="bg-verdant-light p-10 rounded-2xl flex flex-col justify-between group hover:bg-verdant-mid hover:text-white transition-all duration-500">
              <div>
                <Maximize className="mb-8 w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold mb-4">Exhibition Materials</h3>
                <p className="text-sm opacity-80">Branded displays for maximum impact.</p>
              </div>
            </div>

            {/* Strategy & Planning */}
            <div className="bg-verdant-light p-10 rounded-2xl flex flex-col justify-between group hover:bg-verdant-mid hover:text-white transition-all duration-500">
              <div>
                <Layout className="mb-8 w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold mb-4">Strategy & Planning</h3>
                <p className="text-sm opacity-80">Expert guidance for your brand strategy.</p>
              </div>
            </div>

            {/* Digital & Large Format Full Width */}
            <div className="lg:col-span-4 bg-verdant-deep p-10 rounded-2xl flex items-center justify-between text-white group hover:bg-verdant-mid transition-all duration-500">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Digital & Large Format Printing</h3>
                <p className="text-sm uppercase tracking-widest opacity-70">Affordable, High-Precision Advertising Solutions</p>
              </div>
              <Printer className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Process Sections */}
      <section className="py-32 bg-verdant-pale">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
          
          {/* 01 Branding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-8xl font-serif font-bold text-verdant-mid/10 mb-8">01</div>
              <h2 className="text-5xl font-serif font-bold text-verdant-deep mb-8">Branding</h2>
              <p className="text-xl text-verdant-mid/80 font-serif italic mb-10 leading-relaxed">
                Beyond a logo, we construct a living ethos. Our branding process explores the root values of your business to create a timeless, organic identity.
              </p>
              <ul className="space-y-4 mb-10">
                {['Visual Identity Systems', 'Brand Voice & Strategy', 'Typography Curation'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-verdant-deep font-medium">
                    <CheckCircle2 size={20} className="text-verdant-mid" />
                    {item}
                  </li>
                ))}
              </ul>
              
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/brand.jpg" 
                alt="Branding Process" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 02 Printing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="pri1.avif" 
                alt="Printing Press" 
                className="w-full aspect-[5/4] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-8xl font-serif font-bold text-verdant-mid/10 mb-8">02</div>
              <h2 className="text-5xl font-serif font-bold text-verdant-deep mb-8">Printing</h2>
              <p className="text-xl text-verdant-mid/80 font-serif italic mb-10 leading-relaxed">
                The tactile realization of your vision. We specialize in premium finishes, sustainable paper stocks, and high-fidelity production.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-verdant-light p-6 rounded-xl text-center">
                  <Layers className="mx-auto mb-3 w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest">Letterpress</span>
                </div>
                <div className="bg-verdant-light p-6 rounded-xl text-center">
                  <Layout className="mx-auto mb-3 w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest">Foil Stamping</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* 03 Design */}
          <div className="bg-verdant-deep rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-verdant-mid/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="text-8xl font-serif font-bold text-white/10 mb-8">03</div>
              <h2 className="text-5xl font-serif font-bold mb-8">Design</h2>
              <p className="text-xl opacity-80 font-serif italic mb-12 leading-relaxed">
                Functional artistry for every touchpoint. From editorial layouts to digital experiences, we design with purpose and prestige.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-verdant-accent/20 rounded-xl flex items-center justify-center text-verdant-accent">
                    <Palette size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Editorial Design</h4>
                    <p className="text-sm opacity-60">Curation of magazines, lookbooks, and annual reports with a focus on negative space.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-verdant-accent/20 rounded-xl flex items-center justify-center text-verdant-accent">
                    <Maximize size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Exhibition Design</h4>
                    <p className="text-sm opacity-60">Branded exhibition materials and corporate displays that command attention at any event.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-verdant-pale">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-verdant-light to-white p-16 md:p-24 rounded-[3rem] text-center shadow-xl border border-verdant-mid/5">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-verdant-deep mb-8">Ready to bloom?</h2>
            <p className="text-xl text-verdant-mid/80 font-serif italic mb-12">
              Schedule a consultation at our studio to explore materials and vision.
            </p>
            <button className="bg-verdant-deep text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-verdant-mid transition-all shadow-xl shadow-verdant-deep/20">
              START A PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* Selected Works Gallery */}
      <section className="py-32 bg-verdant-pale">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-verdant-mid mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-verdant-deep tracking-tight">
              A curated gallery of <span className="italic text-verdant-mid">botanical elegance</span> and precise craft.
            </h2>
            <p className="mt-8 text-xl text-verdant-mid/80 font-serif italic max-w-2xl">
              From tactile print materials to digital identities, we weave nature's rhythm into every brand touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Item */}
            <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-xl group">
              <div className="relative h-full">
                <img 
                  src="/printing.avif" 
                  alt="Luxury Branding" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Luxury Branding</h3>
                  <p className="text-white/70 italic">Safi Redesign</p>
                </div>
              </div>
            </div>

            {/* Small Items */}
            <div className="bg-verdant-deep rounded-3xl p-10 flex flex-col justify-between text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Palette size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-2 block">Logo</span>
                <h4 className="text-2xl font-serif font-bold">SafeWom Branding</h4>
              </div>
            </div>

            <div className="bg-verdant-light rounded-3xl p-10 flex flex-col justify-between">
              <Layout className="w-8 h-8 text-verdant-deep" />
              <div>
                <h4 className="text-2xl font-serif font-bold mb-2">Flora Guide</h4>
                <p className="text-sm opacity-60">Editorial Layout & Print</p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-2 bg-verdant-light rounded-3xl p-12 md:p-20 flex flex-col items-center justify-center text-center">
              <Printer className="w-12 h-12 text-verdant-mid mb-8" />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-verdant-deep mb-8">The Printing House</h3>
              <p className="text-xl text-verdant-mid/80 font-serif italic max-w-lg">
                "Every project is a dialogue between the paper's soul and the ink's intent."
              </p>
              <a href="#contact">
              <button className="mt-12 bg-verdant-deep text-white px-10 py-4 rounded-lg font-bold hover:bg-verdant-mid transition-all">
                Get In Touch
              </button>
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="ddd.jpg" 
                alt="Business Cards" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-verdant-light rounded-3xl p-10 flex flex-col justify-between">
              <Palette className="w-8 h-8 text-verdant-deep" />
              <div>
                <h4 className="text-2xl font-serif font-bold mb-2">2026 Collection</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact theme="verdant" />
      <Footer theme="verdant" />
    </div>
  );
};

export default PrintingDesign;
