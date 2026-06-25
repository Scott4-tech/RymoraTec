import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Cpu, Globe, Database, Shield, Zap, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ICTSolutions = () => {
  const features = [
    {
      icon: <Cpu className="text-rymora-accent w-6 h-6" />,
      title: "Infrastructure Management",
      description: "Scalable server and network infrastructure designed for high-performance enterprise workloads."
    },
    {
      icon: <Globe className="text-rymora-accent w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless migration and management of cloud services across AWS, Azure, and Google Cloud."
    },
    {
      icon: <Database className="text-rymora-accent w-6 h-6" />,
      title: "Data Analytics",
      description: "Turn your raw data into actionable insights with our advanced AI-driven analytics tools."
    },
    {
      icon: <Shield className="text-rymora-accent w-6 h-6" />,
      title: "Managed Services",
      description: "24/7 monitoring and support to ensure your business operations never skip a beat."
    },
    {
      icon: <Zap className="text-rymora-accent w-6 h-6" />,
      title: "Digital Transformation",
      description: "Modernize your legacy systems with cutting-edge software and hardware solutions."
    },
    {
      icon: <Monitor className="text-rymora-accent w-6 h-6" />,
      title: "Workplace Solutions",
      description: "Empower your remote and on-site teams with integrated communication and collaboration tools."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-rymora-accent/30 font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-rymora-accent/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-rymora-accent">
                <Cpu className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-rymora-accent tracking-widest uppercase mb-4 block">
                Enterprise ICT
              </span>
              <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white">
                ICT <span className="text-rymora-accent">Solutions.</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Comprehensive IT management and support tailored to your business needs. 
                We build the digital backbone that powers Zimbabwe's leading enterprises.
              </p>
            </motion.div>
          </div>

          {/* Detailed Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-rymora-accent/50 transition-all flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center mb-6 text-rymora-accent group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 border border-white/10 rounded-3xl bg-white/5 text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rymora-accent/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white relative z-10">
                Ready to Modernize Your Infrastructure?
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed relative z-10">
                Let's discuss how our ICT solutions can drive efficiency and growth for your organization.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-10 py-4 bg-rymora-accent text-slate-950 rounded-full font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-2 relative z-10 hover:shadow-lg hover:shadow-rymora-accent/20"
              >
                Get Started Today <ArrowRight className="w-4 h-4" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ICTSolutions;
