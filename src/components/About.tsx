import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-rymora-accent" size={24} />,
      title: "Our Mission",
      description: "To empower Zimbabwean businesses through innovative, scalable, and intelligent digital solutions that drive growth and efficiency."
    },
    {
      icon: <Eye className="text-rymora-accent" size={24} />,
      title: "Our Vision",
      description: "To be the leading catalyst for digital transformation in Africa, setting the standard for excellence in software engineering and AI automation."
    },
    {
      icon: <ShieldCheck className="text-rymora-accent" size={24} />,
      title: "Our Commitment",
      description: "We are dedicated to delivering high-quality, secure, and reliable technology that solves real-world business challenges."
    },
    {
      icon: <Zap className="text-rymora-accent" size={24} />,
      title: "Innovation First",
      description: "We constantly explore emerging technologies like AI and machine learning to keep our clients ahead of the competition."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Driving Digital <span className="text-rymora-accent">Excellence</span> in Zimbabwe
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Rymora Technologies (Private Limited) is a mission-driven tech powerhouse dedicated to transforming the digital landscape. We combine innovative thinking with technical expertise to deliver solutions that empower businesses and communities.
              </p>
              <p>
                Founded on the principles of integrity and technical precision, we have grown into a multi-disciplinary team of engineers and IT experts. As the official distributor of Enpass in Zimbabwe, we deliver top-tier password management alongside our advanced software engineering and AI automation solutions.
              </p>
              <p>
                Our approach is deeply collaborative. We work as an extension of your team, ensuring that every line of code we write and every system we automate aligns perfectly with your long-term strategic goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rymora-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(74, 222, 128, 0.4)" 
              }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 
              }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 transition-colors group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-rymora-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-rymora-accent/20"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rymora-accent transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;