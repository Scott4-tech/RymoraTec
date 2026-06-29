import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Award, Layers, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "99.99% Uptime",
      description: "Our SLA guarantees continuous availability and responsive managed network operations center support.",
      icon: <ShieldCheck size={18} className="text-[#a75bf5]" />,
      highlight: true
    },
    {
      title: "Reliable Expertise",
      description: "Rymora Technologies combines technical ICT expertise with secure solutions, allowing businesses to access professional technology.",
      icon: <Award size={18} />
    },
    {
      title: "Integrated Solutions",
      description: "We provide both technology infrastructure and custom software systems, helping businesses streamline their operations.",
      icon: <Layers size={18} />
    },
    {
      title: "Client-Centered Focus",
      description: "We take time to understand each client’s operational context and deliver customized solutions that align with their goals.",
      icon: <Users size={18} />
    },
    {
      title: "Security & Sovereignty",
      description: "Our commitment to top-tier security standards ensures that every solution we provide is robust, zero-trust, and sovereign.",
      icon: <ShieldCheck size={18} />
    },
    {
      title: "Innovation First",
      description: "We continuously explore new technologies and AI tools to help Zimbabwean businesses adapt, compete, and lead.",
      icon: <TrendingUp size={18} />
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 lg:py-20 relative overflow-hidden bg-[#080809] border-t border-white/[0.04] font-sans text-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8827DD]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Center Title Area */}
        <div className="text-center mb-16 space-y-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {/* Small purple square */}
            <div className="w-2.5 h-2.5 bg-[#8827DD] shrink-0 rounded-[1px] animate-pulse" />
            <span className="text-[13px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] font-medium">
              Enterprise Value
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight max-w-3xl"
          >
            Sovereign Infrastructure Trust.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed max-w-2xl"
          >
            Zimbabwe's foremost enterprises rely on Rymora Technologies to secure critical datasets, scale infrastructure, and automate routine support handoffs.
          </motion.p>
        </div>

        {/* Bottom Grid: Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 rounded-2xl border bg-[#8827DD]/10 border-[#8827DD]/30 shadow-[0_0_30px_rgba(136,39,221,0.08)] hover:bg-[#8827DD]/15 hover:border-[#8827DD]/50 hover:shadow-[0_0_35px_rgba(136,39,221,0.12)] transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-4 transition-all duration-300 bg-[#8827DD]/20 text-[#a75bf5] group-hover:bg-[#8827DD]/30">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-serif font-normal text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;