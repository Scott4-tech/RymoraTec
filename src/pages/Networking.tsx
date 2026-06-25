import React from 'react';
import { motion } from 'motion/react';
import { Network, Wifi, Server, Share2, Radio, Activity, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Networking = () => {
  const features = [
    {
      icon: <Wifi className="text-blue-500 w-6 h-6" />,
      title: "Enterprise Wireless",
      description: "High-speed, high-density Wi-Fi solutions for offices, campuses, and industrial environments."
    },
    {
      icon: <Server className="text-blue-500 w-6 h-6" />,
      title: "SD-WAN Solutions",
      description: "Optimize your wide-area network for performance, reliability, and cost-efficiency."
    },
    {
      icon: <Share2 className="text-blue-500 w-6 h-6" />,
      title: "Network Security",
      description: "Integrated firewall and intrusion prevention systems to keep your network perimeter secure."
    },
    {
      icon: <Radio className="text-blue-500 w-6 h-6" />,
      title: "Fiber Infrastructure",
      description: "Design and deployment of high-speed fiber optic backbones for seamless connectivity."
    },
    {
      icon: <Activity className="text-blue-500 w-6 h-6" />,
      title: "Network Monitoring",
      description: "Proactive performance monitoring and troubleshooting to ensure maximum uptime."
    },
    {
      icon: <Network className="text-blue-500 w-6 h-6" />,
      title: "Unified Communications",
      description: "Seamless integration of voice, video, and data across your entire organization."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-blue-500/30 font-sans">
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
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-blue-500">
                <Network className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-blue-500 tracking-widest uppercase mb-4 block">
                Connected World
              </span>
              <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white">
                Net<span className="text-blue-500">working.</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Building robust, scalable network solutions for seamless connectivity. 
                The next era of computing starts with a solid foundation of reliable networking.
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
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-blue-500/50 transition-all flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white relative z-10">
                Connect Your Business to the Future
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed relative z-10">
                Let's design a network that grows with you. Contact our experts for a consultation.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-10 py-4 bg-blue-500 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-2 relative z-10 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Start Networking <ArrowRight className="w-4 h-4" />
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
