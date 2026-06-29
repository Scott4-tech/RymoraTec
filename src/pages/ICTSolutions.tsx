import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Cpu, Globe, Database, Shield, Zap, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ICTSolutions = () => {
  const features = [
    {
      icon: <Cpu className="text-cohere-black w-5 h-5" />,
      title: "Infrastructure Management",
      description: "Scalable server and network infrastructure designed for high-performance enterprise workloads."
    },
    {
      icon: <Globe className="text-cohere-black w-5 h-5" />,
      title: "Cloud Integration",
      description: "Seamless migration and management of cloud services across AWS, Azure, and Google Cloud."
    },
    {
      icon: <Database className="text-cohere-black w-5 h-5" />,
      title: "Data Analytics",
      description: "Turn your raw data into actionable insights with our advanced AI-driven analytics tools."
    },
    {
      icon: <Shield className="text-cohere-black w-5 h-5" />,
      title: "Managed Services",
      description: "24/7 monitoring and support to ensure your business operations never skip a beat."
    },
    {
      icon: <Zap className="text-cohere-black w-5 h-5" />,
      title: "Digital Transformation",
      description: "Modernize your legacy systems with cutting-edge software and hardware solutions."
    },
    {
      icon: <Monitor className="text-cohere-black w-5 h-5" />,
      title: "Workplace Solutions",
      description: "Empower your remote and on-site teams with integrated communication and collaboration tools."
    }
  ];

  return (
    <div className="bg-canvas-white min-h-screen text-cohere-black selection:bg-action-blue/30 font-sans">
      <Navbar />
      
      <main className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-soft-stone border border-hairline flex items-center justify-center mb-6 text-cohere-black">
                <Cpu size={18} />
              </div>
              <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                Enterprise ICT
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 text-white">
                ICT <span className="text-action-blue">Solutions.</span>
              </h1>
              <p className="text-muted-slate text-s font-light max-w-xl mx-auto leading-relaxed">
                Comprehensive IT management and support tailored to your business needs. 
                We build the digital backbone that powers Zimbabwe's leading enterprises.
              </p>
            </motion.div>
          </div>

          {/* Detailed Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24 lg:mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 border border-hairline rounded-[22px] bg-soft-stone group transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-canvas-white border border-hairline flex items-center justify-center mb-6 text-cohere-black group-hover:text-action-blue transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-display font-medium mb-3 text-cohere-black group-hover:text-action-blue transition-colors">{feature.title}</h3>
                  <p className="text-ink leading-relaxed text-s font-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 border border-hairline rounded-[22px] bg-soft-stone text-center flex flex-col items-center relative overflow-hidden"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-6 text-white">
                Ready to modernize your infrastructure?
              </h2>
              <p className="text-muted-slate text-s font-light max-w-lg mb-10 leading-relaxed">
                Let's discuss how our ICT solutions can drive efficiency and growth for your organization.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-8 py-3 bg-cohere-black text-canvas-white hover:bg-action-blue rounded-full font-medium text-s transition-colors flex items-center gap-2"
              >
                Get Started Today <ArrowRight className="w-3.5 h-3.5" />
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
