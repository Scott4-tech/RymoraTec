import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cybersecurity = () => {
  const features = [
    {
      icon: <Shield className="text-purple-500" />,
      title: "Threat Detection",
      description: "Real-time monitoring and AI-powered threat detection to identify vulnerabilities before they are exploited."
    },
    {
      icon: <Lock className="text-purple-500" />,
      title: "Data Encryption",
      description: "Military-grade encryption for your sensitive data at rest and in transit."
    },
    {
      icon: <Eye className="text-purple-500" />,
      title: "Security Audits",
      description: "Comprehensive vulnerability assessments and penetration testing to harden your digital perimeter."
    },
    {
      icon: <AlertTriangle className="text-purple-500" />,
      title: "Incident Response",
      description: "Rapid response protocols to mitigate damage and recover systems in the event of a security breach."
    },
    {
      icon: <FileCheck className="text-purple-500" />,
      title: "Compliance Management",
      description: "Ensuring your business meets international security standards and local regulatory requirements."
    },
    {
      icon: <Users className="text-purple-500" />,
      title: "Employee Training",
      description: "Security awareness programs to turn your workforce into your strongest line of defense."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Security First
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Cyber<span className="text-purple-500">security</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Protecting your digital assets with advanced threat detection and prevention. 
            Unleash heavy-duty defense for your business in an increasingly hostile digital landscape.
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">Is Your Business Truly Secure?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Don't wait for a breach to happen. Get a comprehensive security assessment today.
          </p>
          <HashLink 
            to="/#contact"
            smooth
            className="bg-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-purple-500/20 inline-block"
          >
            Secure Your Assets
          </HashLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
