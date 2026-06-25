import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cybersecurity = () => {
  const features = [
    {
      icon: <Shield className="text-purple-500 w-6 h-6" />,
      title: "Threat Detection",
      description: "Real-time monitoring and AI-powered threat detection to identify vulnerabilities before they are exploited."
    },
    {
      icon: <Lock className="text-purple-500 w-6 h-6" />,
      title: "Data Encryption",
      description: "Military-grade encryption for your sensitive data at rest and in transit."
    },
    {
      icon: <Eye className="text-purple-500 w-6 h-6" />,
      title: "Security Audits",
      description: "Comprehensive vulnerability assessments and penetration testing to harden your digital perimeter."
    },
    {
      icon: <AlertTriangle className="text-purple-500 w-6 h-6" />,
      title: "Incident Response",
      description: "Rapid response protocols to mitigate damage and recover systems in the event of a security breach."
    },
    {
      icon: <FileCheck className="text-purple-500 w-6 h-6" />,
      title: "Compliance Management",
      description: "Ensuring your business meets international security standards and local regulatory requirements."
    },
    {
      icon: <Users className="text-purple-500 w-6 h-6" />,
      title: "Employee Training",
      description: "Security awareness programs to turn your workforce into your strongest line of defense."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-purple-500/30 font-sans">
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
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-purple-500">
                <Shield className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-purple-500 tracking-widest uppercase mb-4 block">
                Security First
              </span>
              <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white">
                Cyber<span className="text-purple-500">security.</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Protecting your digital assets with advanced threat detection and prevention. 
                Unleash heavy-duty defense for your business in an increasingly hostile digital landscape.
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
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-purple-500/50 transition-all flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Enpass Distributor Section */}
          <div className="max-w-7xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-white/10 rounded-3xl bg-white/5 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/30 transition-all duration-500" />
                    <div className="relative w-40 h-40 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center p-6 shadow-2xl">
                      <span className="text-3xl font-extrabold text-white tracking-wider block">enpass</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-purple-400 font-bold mt-2 block">Distributor</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-widest mb-4">
                    Authorized Partnership
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white mb-6">
                    Official Distributor of <span className="text-purple-400">Enpass</span> in Zimbabwe
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    Rymora Technologies is proud to be the official authorized distributor of Enpass, the leading enterprise password manager. Enpass offers a secure, offline-first password management solution that stores all credentials locally on your own cloud storage or servers, giving Zimbabwean businesses complete sovereignty and control over their sensitive credentials.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">Local-First Storage</span>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">Zero-Knowledge Security</span>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">Active Directory Integration</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white relative z-10">
                Is Your Business Truly Secure?
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed relative z-10">
                Don't wait for a breach to happen. Get a comprehensive security assessment today.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-10 py-4 bg-purple-500 text-white rounded-full font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-2 relative z-10 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Secure Your Assets <ArrowRight className="w-4 h-4" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
