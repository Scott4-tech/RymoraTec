import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, Globe, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="text-action-blue w-4 h-4" />,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when requesting information, subscribing to our services, or contacting support. This includes personal contact details, organizational metadata, and professional inquiries concerning cybersecurity, networking, or database orchestrations."
    },
    {
      icon: <Lock className="text-action-blue w-4 h-4" />,
      title: "2. How We Use Information",
      content: "All operational and analytical data is strictly processed to optimize, configure, and secure your systems. We utilize this information to fulfill support SLAs, dispatch on-site specialists, handle corporate licensing for Enpass deployments, and defend your parameters from threat vectors."
    },
    {
      icon: <Shield className="text-action-blue w-4 h-4" />,
      title: "3. Absolute Data Sovereignty",
      content: "As part of our commitment to true physical data sovereignty and zero-trust computing, we never sell, share, or monetize your network architectures, password directories, or corporate databases. Your records remain localized, encrypted with AES-256-GCM, and stored exclusively on secure assets under your direct organizational oversight."
    },
    {
      icon: <Globe className="text-action-blue w-4 h-4" />,
      title: "4. Compliance & Protection",
      content: "Rymoratech Technologies operates in full alignment with the Data Protection Act [Chapter 11:12] of Zimbabwe and international security architectures (GDPR, ISO 27001). We maintain strict administrative and software-defined firewalls to safeguard our telemetry from unauthorized third-party intervention."
    }
  ];

  return (
    <div className="bg-canvas-white min-h-screen text-ink selection:bg-action-blue/30 font-sans">
      <Navbar />
      
      <main className="pt-36 pb-20 px-6 animate-fade-in text-left">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-soft-stone border border-hairline flex items-center justify-center mb-6 text-cohere-black">
                <Shield size={18} className="text-action-blue" />
              </div>
              <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                Security & Trust
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-6 text-white text-center">
                Privacy <span className="text-action-blue">Policy</span>
              </h1>
              <p className="text-muted-slate text-s font-light max-w-xl mx-auto leading-relaxed text-center">
                Last updated: June 27, 2026. Learn how Rymoratech Technologies protects, structures, and respects corporate data assets in Zimbabwe.
              </p>
            </motion.div>
          </div>

          {/* Privacy Details */}
          <div className="space-y-12 mb-16">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-soft-stone/50 border border-hairline hover:border-white/[0.06] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-soft-stone border border-hairline flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="font-display font-medium text-white text-base">
                    {section.title}
                  </h3>
                </div>
                <p className="text-muted-slate text-base sm:text-sm font-light leading-relaxed pl-11">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core commitment statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-action-blue/20 p-8 md:p-10 relative overflow-hidden bg-soft-stone/80 text-center"
          >
            <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-10 pointer-events-none" />
            <FileText size={24} className="text-action-blue mx-auto mb-6" />
            <h3 className="font-serif text-xl text-white mb-3">Our Sovereign Pledge</h3>
            <p className="text-muted-slate text-s max-w-lg mx-auto leading-relaxed">
              We stand firmly behind local data storage principles. Any deployment handled by Rymoratech Technologies remains entirely in your custody, utilizing certified client-side zero-knowledge protocols. No data leakage. No foreign cloud dependency.
            </p>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
