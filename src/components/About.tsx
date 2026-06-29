import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const ScrollWordReveal = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <p 
      ref={containerRef}
      className="font-serif text-2xl sm:text-3xl md:text-[35px] font-normal leading-[1.35] text-center max-w-4xl flex flex-wrap justify-center"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#52525b", "#ffffff"]
        );

        return (
          <motion.span 
            key={i} 
            style={{ color }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const principles = [
    {
      title: "Solving real problems",
      description: "We work with teams addressing clear, tangible problems that users actually need solved. By focusing on practical application and functional impact, we deliver systems that create immediate business value."
    },
    {
      title: "Early momentum",
      description: "There are signs of user interest, activity, or early traction showing something is starting to work. We build on top of these positive signals to accelerate performance and unlock compounding growth."
    },
    {
      title: "Consistency",
      description: "We work with teams that continue building, testing, and improving instead of stopping at initial ideas. Uncompromising refinement and attention to operational details are what define our engineering culture."
    },
    {
      title: "Building with intent",
      description: "The product is built with clear thinking behind what is being built and why it matters. Every architectural layer we design and every security perimeter we deploy is guided by absolute purpose."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-20 bg-[#080809] border-t border-white/[0.04] relative overflow-hidden text-left">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Core Paragraph Section - EXACT COPY of Image 3 style */}
        <div className="text-center mb-16 md:mb-24 lg:mb-16 flex flex-col items-center">
          {/* Small Purple Square */}
          <div className="w-2.5 h-2.5 bg-[#8827DD] rounded-[1px] mb-6 animate-pulse" />
          
          <span className="font-mono text-[15px] uppercase tracking-[0.25em] text-[#8e8e93] font-medium mb-8 max-w-lg leading-relaxed text-center">
            ENGINEERING THE INFRASTRUCTURE BEHIND AFRICA'S DIGITAL BUILDERS
          </span>
          
          <ScrollWordReveal text="Rymora works with founders, enterprise leaders, and ecosystem partners to transform complex digital challenges into scalable, secure systems. Through strategic positioning, cloud architecture, and zero-trust security systems, we help builders reach global standards." />
        </div>

        {/* Operational Principles List Section - EXACT COPY of Image 2 style */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-20 lg:pt-16">
          <div className="mb-12">
            <span className="font-mono text-[15px] uppercase tracking-[0.25em] text-[#a75bf5] font-semibold block mb-2">
              Operational Culture
            </span>
            <h3 className="text-white font-serif text-3xl font-normal">
              How we build.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Principles Selector List */}
            <div className="md:col-span-5 space-y-4">
              {principles.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="w-full text-left py-4 px-6 flex items-center transition-all focus:outline-none relative cursor-pointer"
                >
                  {/* Left white border bar for active item, matching screenshot */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${
                      activeIndex === idx ? 'bg-white' : 'bg-transparent'
                    }`} 
                  />
                  <span 
                    className={`font-serif text-xl md:text-2xl transition-all duration-300 ${
                      activeIndex === idx ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Principles Description Box */}
            <div className="md:col-span-7 bg-white/[0.01] border border-white/[0.03] rounded-2xl p-8 min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h4 className="font-serif text-xl text-white font-medium">
                    {principles[activeIndex].title}
                  </h4>
                  <p className="text-zinc-400 text-base  font-sans font-light leading-relaxed">
                    {principles[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;