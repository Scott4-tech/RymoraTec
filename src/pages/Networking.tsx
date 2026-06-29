import React from 'react';
import { motion } from 'motion/react';
import { Network, Wifi, Server, Share2, Radio, Activity, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Networking = () => {
  const features = [
    {
      icon: <Wifi className="text-cohere-black w-5 h-5" />,
      title: "Enterprise Wireless",
      description: "High-speed, high-density Wi-Fi solutions for offices, campuses, and industrial environments."
    },
    {
      icon: <Server className="text-cohere-black w-5 h-5" />,
      title: "SD-WAN Solutions",
      description: "Optimize your wide-area network for performance, reliability, and cost-efficiency."
    },
    {
      icon: <Share2 className="text-cohere-black w-5 h-5" />,
      title: "Network Security",
      description: "Integrated firewall and intrusion prevention systems to keep your network perimeter secure."
    },
    {
      icon: <Radio className="text-cohere-black w-5 h-5" />,
      title: "Fiber Infrastructure",
      description: "Design and deployment of high-speed fiber optic backbones for seamless connectivity."
    },
    {
      icon: <Activity className="text-cohere-black w-5 h-5" />,
      title: "Network Monitoring",
      description: "Proactive performance monitoring and troubleshooting to ensure maximum uptime."
    },
    {
      icon: <Network className="text-cohere-black w-5 h-5" />,
      title: "Unified Communications",
      description: "Seamless integration of voice, video, and data across your entire organization."
    }
  ];

  return (
    <div className="bg-canvas-white min-h-screen text-cohere-black selection:bg-action-blue/30 font-sans">
      <Navbar />
      
      <main className="pt-36 pb-20 px-6 animate-fade-in text-left">
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
                <Network size={18} />
              </div>
              <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                Connected World
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 text-white text-center">
                Net<span className="text-action-blue">working.</span>
              </h1>
              <p className="text-muted-slate text-s font-light max-w-xl mx-auto leading-relaxed text-center">
                Building robust, scalable network solutions for seamless connectivity. 
                The next era of computing starts with a solid foundation of reliable networking.
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
                className="p-8 border border-hairline rounded-[22px] bg-soft-stone group transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-canvas-white border border-hairline flex items-center justify-center mb-6 text-cohere-black group-hover:text-action-blue transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-medium text-lg mb-3 text-cohere-black group-hover:text-action-blue transition-colors">{feature.title}</h3>
                  <p className="text-ink text-s font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 border border-hairline rounded-[22px] bg-soft-stone text-center flex flex-col items-center relative overflow-hidden"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-6 text-white">
                Connect your business to the future
              </h2>
              <p className="text-muted-slate text-s font-light max-w-lg mb-10 leading-relaxed">
                Let's design a network that grows with you. Contact our experts for a consultation.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-8 py-3 bg-cohere-black text-canvas-white hover:bg-action-blue rounded-full font-medium text-s transition-colors flex items-center gap-2"
              >
                Start Networking <ArrowRight className="w-3.5 h-3.5" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Networking;
