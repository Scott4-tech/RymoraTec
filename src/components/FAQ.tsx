import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Rymora Technologies different from other IT providers in Zimbabwe?",
      answer: "Rymora Technologies is a mission-driven tech powerhouse. Unlike standard service providers, we combine advanced software development, managed IT Support as a Service (SLA-driven models), zero-trust Cybersecurity architecture, and are the official authorized distributor of Enpass in Zimbabwe. We don't believe in quick-fixes—we build long-term, scalable tech foundations for your business."
    },
    {
      question: "How does 'IT Support as a Service' (ITSaaS) work with Rymora?",
      answer: "Our IT Support as a Service operates on a proactive, monthly retainer model with solid Service Level Agreements (SLAs). Instead of waiting for things to break, we continuously monitor your systems, optimize cloud architectures, manage Google Workspace / Microsoft 365, handle onboarding/offboarding, and offer rapid response remote helpdesk and onsite dispatch support."
    },
    {
      question: "Why should our business use Enpass instead of traditional password managers?",
      answer: "Most traditional password managers store your encrypted vaults on their own cloud servers, presenting a high-value central target for hackers. Enpass is a local-first, zero-knowledge manager where you retain 100% data sovereignty. Your encrypted vaults are stored within your own company's Microsoft 365 or Google Workspace environment. As the official Zimbabwean distributor, Rymora offers full local licensing, deployment, and admin integrations."
    },
    {
      question: "Can you help our company migrate to a secure remote work environment?",
      answer: "Yes, absolutely. We specialize in designing modern cloud directories, deploying secure VPNs/SD-WAN, implementing multi-factor authentication (MFA), enforcing secure password management via Enpass, and offering 24/7 continuous network endpoint monitoring so your team can work securely from anywhere."
    },
    {
      question: "How do we get started with Rymora's services?",
      answer: "Getting started is simple. You can reach out through our Contact form below, and our engineering team will schedule a discovery call to analyze your current systems, security vulnerabilities, or support requirements. We will then design a customized proposal and detailed SLA options tailored to your business scale."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
      {/* Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rymora-accent/10 border border-rymora-accent/20 text-rymora-accent text-xs font-bold tracking-[0.15em] uppercase"
          >
            <HelpCircle size={14} /> Clear Answers
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Questions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rymora-accent to-blue-400">Answers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-sm md:text-base"
          >
            Find quick answers to common queries about our IT solutions, partnership with Enpass, security paradigms, and on-demand support systems.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-bold text-white text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-rymora-accent transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                      <p className="mb-4">{faq.answer}</p>
                      {idx === 2 && (
                        <Link 
                          to="/enpass" 
                          className="inline-flex items-center gap-1 text-xs text-rymora-accent font-bold hover:underline"
                        >
                          Explore Enpass Zimbabwe <ArrowRight size={12} />
                        </Link>
                      )}
                      {idx === 1 && (
                        <Link 
                          to="/it-support" 
                          className="inline-flex items-center gap-1 text-xs text-rymora-accent font-bold hover:underline"
                        >
                          View Support SLA Plans <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
