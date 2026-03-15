import React from 'react';
import { motion } from 'motion/react';
import { Network, Wifi, Server, Share2, Radio, Activity } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Networking = () => {
  const features = [
    {
      icon: <Wifi className="text-blue-500" />,
      title: "Enterprise Wireless",
      description: "High-speed, high-density Wi-Fi solutions for offices, campuses, and industrial environments."
    },
    {
      icon: <Server className="text-blue-500" />,
      title: "SD-WAN Solutions",
      description: "Optimize your wide-area network for performance, reliability, and cost-efficiency."
    },
    {
      icon: <Share2 className="text-blue-500" />,
      title: "Network Security",
      description: "Integrated firewall and intrusion prevention systems to keep your network perimeter secure."
    },
    {
      icon: <Radio className="text-blue-500" />,
      title: "Fiber Infrastructure",
      description: "Design and deployment of high-speed fiber optic backbones for seamless connectivity."
    },
    {
      icon: <Activity className="text-blue-500" />,
      title: "Network Monitoring",
      description: "Proactive performance monitoring and troubleshooting to ensure maximum uptime."
    },
    {
      icon: <Network className="text-blue-500" />,
      title: "Unified Communications",
      description: "Seamless integration of voice, video, and data across your entire organization."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Connected World
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Net<span className="text-blue-500">working</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Building robust, scalable network solutions for seamless connectivity. 
            The next era of computing starts with a solid foundation of reliable networking.
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">Connect Your Business to the Future</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let's design a network that grows with you. Contact our experts for a consultation.
          </p>
          <HashLink 
            to="/#contact"
            smooth
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-500/20 inline-block"
          >
            Start Networking
          </HashLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Networking;
