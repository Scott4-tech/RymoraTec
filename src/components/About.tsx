import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-rymora-accent" size={24} />,
      title: "Our Mission",
      description: "To empower businesses with reliable ICT solutions and creative digital services that improve efficiency, security, and brand visibility."
    },
    {
      icon: <Eye className="text-rymora-accent" size={24} />,
      title: "Our Vision",
      description: "To become a leading ICT and digital solutions provider in Zimbabwe and across Africa, known for innovation, quality, and reliability."
    },
    {
      icon: <ShieldCheck className="text-rymora-accent" size={24} />,
      title: "Our Commitment",
      description: "We are dedicated to delivering secure, high-quality technology and creative solutions that solve real business challenges and support long-term client success."
    },
    {
      icon: <Zap className="text-rymora-accent" size={24} />,
      title: "Innovation First",
      description: "We continuously explore new technologies and creative ideas to help our clients stay competitive in an ever-evolving digital world."
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
                Rymora Technologies (Private) Limited is an innovative Information and Communication Technology (ICT) company based in Harare, Zimbabwe. We specialize in delivering reliable technology solutions and creative digital services that help businesses operate efficiently in today’s digital environment. Our mission is to empower organizations with modern tools and professional support that improve productivity, security, and brand visibility.
              </p>
              <p>
                Our services include ICT solutions, cybersecurity, networking, printing, graphic design, and corporate branding. By combining technical expertise with creative design, we provide businesses with a complete solution for both their digital infrastructure and visual identity. This integrated approach allows our clients to manage their technology and branding needs through a single trusted partner.
              </p>
              <p>
                At Rymora Technologies, we are committed to innovation, reliability, and customer satisfaction. We strive to build long-term relationships with our clients by delivering secure, scalable, and high-quality solutions that support growth and success in a rapidly evolving digital world.
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
