import React from 'react';
import { motion } from 'motion/react';
import { FileText, ClipboardList, RefreshCw, Key, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
  const clauses = [
    {
      icon: <ClipboardList className="text-action-blue w-4 h-4" />,
      title: "1. Scope of Service & Engagements",
      content: "These Terms govern all corporate IT consultancies, infrastructure designs, SLA-based helpdesk dispatches, zero-trust cybersecurity solutions, and software delivery (including Enpass vault management integrations) provided by Rymoratech Technologies in Zimbabwe."
    },
    {
      icon: <RefreshCw className="text-action-blue w-4 h-4" />,
      title: "2. SLA Commitments & Dispatches",
      content: "Managed Helpdesk and On-Site IT Support parameters operate strictly under the respective Tier-SLA agreements signed by corporate partners. Dispatch times, technical escalation vectors, and remote screen-shares are handled in strict adherence to agreed performance indicators."
    },
    {
      icon: <Key className="text-action-blue w-4 h-4" />,
      title: "3. Enpass Distributions & Licensing",
      content: "As authorized distributors of Enpass products, we license and provision zero-knowledge enterprise environments. All underlying cryptographic operations (AES-256-GCM) and password directory syncs run within customer-managed clouds, meaning clients retain exclusive responsibility for their access configurations."
    },
    {
      icon: <ShieldCheck className="text-action-blue w-4 h-4" />,
      title: "4. Intellectual Property & Configurations",
      content: "Network routing schemes, firmware integrations, custom dashboards, and structural systems configured by Rymoratech Technologies are protected under applicable IP laws. Client systems, local data directories, and credentials remain the sovereign property of the respective corporate client."
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
                <FileText size={18} className="text-action-blue" />
              </div>
              <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                Legal Framework
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-6 text-white text-center">
                Terms & <span className="text-action-blue">Conditions</span>
              </h1>
              <p className="text-muted-slate text-s font-light max-w-xl mx-auto leading-relaxed text-center">
                Last updated: June 27, 2026. Standard operating terms and service SLA guidelines for Rymoratech Technologies.
              </p>
            </motion.div>
          </div>

          {/* Terms details */}
          <div className="space-y-12 mb-16">
            {clauses.map((clause, idx) => (
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
                    {clause.icon}
                  </div>
                  <h3 className="font-display font-medium text-white text-base">
                    {clause.title}
                  </h3>
                </div>
                <p className="text-muted-slate text-s sm:text-sm font-light leading-relaxed pl-11">
                  {clause.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SLA disclaimer container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-action-blue/20 p-8 md:p-10 relative overflow-hidden bg-soft-stone/80 text-center"
          >
            <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-10 pointer-events-none" />
            <h3 className="font-serif text-xl text-white mb-3">Service Level Guarantees</h3>
            <p className="text-muted-slate text-s max-w-lg mx-auto leading-relaxed">
              Every client engagement is accompanied by a custom, signed SLA. If you have specific regional constraints, custom onsite response limits, or strict disaster mitigation window requirements, please reach out to our Harare desk.
            </p>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
