import React from 'react';
import { motion } from 'motion/react';
import { Users, Zap, ShieldCheck, Cpu, Award, Layers, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Reliable Expertise",
      description: "Rymora Technologies combines technical ICT expertise with creative design solutions, allowing businesses to access professional technology and branding services from one trusted partner.",
      icon: <Award size={24} />
    },
    {
      title: "Integrated Solutions",
      description: "We provide both technology infrastructure and creative branding services, helping businesses streamline their operations while strengthening their digital and visual presence.",
      icon: <Layers size={24} />
    },
    {
      title: "Customer-Focused Approach",
      description: "We take time to understand each client’s needs and deliver customized solutions that align with their goals, ensuring long-term value and satisfaction.",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rymora-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-rymora-accent/10 rounded-full blur-[100px]" />
          <div className="relative glass-card p-12 flex items-center justify-center aspect-square max-w-md mx-auto border-rymora-accent/20">
            <div className="relative">
              <ShieldCheck size={160} className="text-rymora-accent opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-rymora-accent/10 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-rymora-accent/30 animate-ping" />
                  <ShieldCheck size={80} className="text-rymora-accent drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]" />
                </div>
              </div>
            </div>
            
            {/* Floating Stats or Labels */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 border-rymora-accent/30">
              <span className="text-rymora-accent font-bold">Reliable</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 border-blue-500/30">
              <span className="text-blue-400 font-bold">Scalable</span>
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 tracking-tight leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-rymora-accent to-blue-400">Choose Us</span>
            </h2>
          </motion.div>
          
          <div className="space-y-10">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="mt-1 w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-rymora-accent border border-white/10 group-hover:bg-rymora-accent group-hover:text-slate-900 group-hover:border-rymora-accent transition-all duration-500 shadow-xl">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-rymora-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
