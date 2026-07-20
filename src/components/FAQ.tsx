import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Rymoratech Technologies different from other IT providers in Zimbabwe?",
      answer: "Rymoratech Technologies is a mission-driven tech powerhouse. Unlike standard service providers, we combine advanced software development, managed IT Support as a Service (SLA-driven models), zero-trust Cybersecurity architecture, and are the official authorized distributor of Enpass in Zimbabwe. We don't believe in quick-fixes—we build long-term, scalable tech foundations for your business."
    },
    {
      question: "How does 'IT Support as a Service' (ITSaaS) work with Rymoratech?",
      answer: "Our IT Support as a Service operates on a proactive, monthly retainer model with solid Service Level Agreements (SLAs). Instead of waiting for things to break, we continuously monitor your systems, optimize cloud architectures, manage Google Workspace / Microsoft 365, handle onboarding/offboarding, and offer rapid response remote helpdesk and onsite dispatch support."
    },
    {
      question: "Why should our business use Enpass instead of traditional password managers?",
      answer: "Most traditional password managers store your encrypted vaults on their own cloud servers, presenting a high-value central target for hackers. Enpass is a local-first, zero-knowledge manager where you retain 100% data sovereignty. Your encrypted vaults are stored within your own company's Microsoft 365 or Google Workspace environment. As the official Zimbabwean distributor, Rymoratech offers full local licensing, deployment, and admin integrations."
    },
    {
      question: "Can you help our company migrate to a secure remote work environment?",
      answer: "Yes, absolutely. We specialize in designing modern cloud directories, deploying secure VPNs/SD-WAN, implementing multi-factor authentication (MFA), enforcing secure password management via Enpass, and offering 24/7 continuous network endpoint monitoring so your team can work securely from anywhere."
    },
    {
      question: "How do we get started with Rymoratech's services?",
      answer: "Getting started is simple. You can reach out through our Contact form below, and our engineering team will schedule a discovery call to analyze your current systems, security vulnerabilities, or support requirements. We will then design a customized proposal and detailed SLA options tailored to your business scale."
    }
  ];

  return (
    <>
        <Helmet>
          <title>FAQs | Rymora Technologies</title>
          <link rel="canonical" href="https://rymoratech.co.zw/FAQs" />
        </Helmet>
    <section id="faq" className="py-16 md:py-24 lg:py-20 bg-[#080809] border-t border-white/[0.04] relative overflow-hidden font-sans text-left">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[#8e8e93] text-[12px] font-mono tracking-[0.2em] uppercase mb-4"
          >
            Clear Answers
          </motion.div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6 tracking-tight">
            Questions & Answers
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg font-sans font-light max-w-xl leading-relaxed">
            Find quick answers to common queries about our IT solutions, partnership with Enpass, security paradigms, and on-demand support systems.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-[#111113]/50 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
              >
                <span className="font-serif font-normal text-white text-base md:text-lg hover:text-action-blue transition-colors leading-relaxed">{faq.question}</span>
                <ChevronDown
                  size={14}
                  className={`text-zinc-500 hover:text-white transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
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
                    <div className="px-6 pb-6 pt-2 text-zinc-400 text-base sm:text-lg leading-relaxed border-t border-white/[0.04] font-light">
                      <p className="mb-4">{faq.answer}</p>
                      {idx === 2 && (
                        <Link 
                          to="/enpass" 
                          className="inline-flex items-center gap-1.5 text-[12px] text-action-blue font-mono uppercase tracking-wider font-semibold hover:underline"
                        >
                          Explore Enpass Zimbabwe <ArrowRight size={10} />
                        </Link>
                      )}
                      {idx === 1 && (
                        <Link 
                          to="/it-support" 
                          className="inline-flex items-center gap-1.5 text-[12px] text-action-blue font-mono uppercase tracking-wider font-semibold hover:underline"
                        >
                          View Support SLA Plans <ArrowRight size={10} />
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
    </>
  );
};

export default FAQ;