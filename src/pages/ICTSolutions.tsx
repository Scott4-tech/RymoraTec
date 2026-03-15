import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Cpu, Globe, Database, Shield, Zap } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ICTSolutions = () => {
  const features = [
    {
      icon: <Cpu className="text-rymora-accent" />,
      title: "Infrastructure Management",
      description: "Scalable server and network infrastructure designed for high-performance enterprise workloads."
    },
    {
      icon: <Globe className="text-rymora-accent" />,
      title: "Cloud Integration",
      description: "Seamless migration and management of cloud services across AWS, Azure, and Google Cloud."
    },
    {
      icon: <Database className="text-rymora-accent" />,
      title: "Data Analytics",
      description: "Turn your raw data into actionable insights with our advanced AI-driven analytics tools."
    },
    {
      icon: <Shield className="text-rymora-accent" />,
      title: "Managed Services",
      description: "24/7 monitoring and support to ensure your business operations never skip a beat."
    },
    {
      icon: <Zap className="text-rymora-accent" />,
      title: "Digital Transformation",
      description: "Modernize your legacy systems with cutting-edge software and hardware solutions."
    },
    {
      icon: <Monitor className="text-rymora-accent" />,
      title: "Workplace Solutions",
      description: "Empower your remote and on-site teams with integrated communication and collaboration tools."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rymora-accent/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Enterprise ICT
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            ICT <span className="text-rymora-accent">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive IT management and support tailored to your business needs. 
            We build the digital backbone that powers Zimbabwe's leading enterprises.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rymora-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-rymora-accent/20 to-transparent border border-rymora-accent/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let's discuss how our ICT solutions can drive efficiency and growth for your organization.
          </p>
          <HashLink 
            to="/#contact"
            smooth
            className="bg-rymora-accent text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-rymora-accent/20 inline-block"
          >
            Get Started Today
          </HashLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ICTSolutions;
