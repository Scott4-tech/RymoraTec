import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Cybersecurity = () => {
  const features = [
    {
      icon: <Shield className="text-cohere-black w-5 h-5" />,
      title: "Threat Detection",
      description: "Real-time monitoring and AI-powered threat detection to identify vulnerabilities before they are exploited."
    },
    {
      icon: <Lock className="text-cohere-black w-5 h-5" />,
      title: "Data Encryption",
      description: "Military-grade encryption for your sensitive data at rest and in transit."
    },
    {
      icon: <Eye className="text-cohere-black w-5 h-5" />,
      title: "Security Audits",
      description: "Comprehensive vulnerability assessments and penetration testing to harden your digital perimeter."
    },
    {
      icon: <AlertTriangle className="text-cohere-black w-5 h-5" />,
      title: "Incident Response",
      description: "Rapid response protocols to mitigate damage and recover systems in the event of a security breach."
    },
    {
      icon: <FileCheck className="text-cohere-black w-5 h-5" />,
      title: "Compliance Management",
      description: "Ensuring your business meets international security standards and local regulatory requirements."
    },
    {
      icon: <Users className="text-cohere-black w-5 h-5" />,
      title: "Employee Training",
      description: "Security awareness programs to turn your workforce into your strongest line of defense."
    }
  ];

  return (
    <>
        <Helmet>
          <title>Cybersecurity | Rymora Technologies</title>
          <link rel="canonical" href="https://rymoratech.co.zw/cybersecurity " />
        </Helmet>
    <div className="bg-canvas-white min-h-screen text-cohere-black selection:bg-action-blue/30 font-sans">
      <Navbar />
      
      <main className="pt-36 pb-20 px-6 animate-fade-in">
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
                <Shield size={18} />
              </div>
              <span className="font-mono text-[12px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                Security First
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 text-white">
                Cyber<span className="text-action-blue">security.</span>
              </h1>
              <p className="text-muted-slate text-base font-light max-w-xl mx-auto leading-relaxed">
                Protecting your digital assets with advanced threat detection and prevention. 
                Unleash heavy-duty defense for your business in an increasingly hostile digital landscape.
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
                  <p className="text-ink leading-relaxed text-base font-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enpass Distributor Section */}
          <div className="max-w-7xl mx-auto mb-16 md:mb-24 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-hairline rounded-[22px] bg-soft-stone relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 text-left">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative group">
                    <div className="relative w-40 h-40 bg-canvas-white border border-hairline rounded-3xl flex flex-col items-center justify-center p-6">
                      <span className="text-3xl font-display font-medium text-cohere-black tracking-wider block hover:text-action-blue transition-colors uppercase">enpass</span>
                      <span className="text-[13px] uppercase tracking-[0.2em] text-action-blue font-mono font-bold mt-2 block">Distributor</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <span className="inline-block px-3 py-1 rounded-full bg-canvas-white border border-hairline text-muted-slate text-[12px] font-mono uppercase tracking-[0.2em] mb-4">
                    Authorized Partnership
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
                    Official distributor of <span className="text-action-blue">Enpass</span> in Zimbabwe
                  </h2>
                  <p className="text-ink text-base font-light leading-relaxed mb-6">
                    Rymoratech Technologies is proud to be the official authorized distributor of Enpass, the leading enterprise password manager. Enpass offers a secure, offline-first password management solution that stores all credentials locally on your own cloud storage or servers, giving Zimbabwean businesses complete sovereignty and control over their sensitive credentials.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-canvas-white border border-hairline rounded-full text-[13px] text-cohere-black font-mono">Local-First Storage</span>
                    <span className="px-3 py-1 bg-canvas-white border border-hairline rounded-full text-[13px] text-cohere-black font-mono">Zero-Knowledge Security</span>
                    <span className="px-3 py-1 bg-canvas-white border border-hairline rounded-full text-[13px] text-cohere-black font-mono">Active Directory Integration</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Is your business truly secure?
              </h2>
              <p className="text-muted-slate text-base font-light max-w-lg mb-10 leading-relaxed">
                Don't wait for a breach to happen. Get a comprehensive security assessment today.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-8 py-3 bg-cohere-black text-canvas-white rounded-full font-medium text-base hover:bg-action-blue transition-colors flex items-center gap-2"
              >
                Secure Your Assets <ArrowRight className="w-3.5 h-3.5" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Cybersecurity;
