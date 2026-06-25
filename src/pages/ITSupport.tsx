import React from 'react';
import { motion } from 'motion/react';
import { Headphones, ShieldCheck, Wrench, Clock, Database, Cloud, RefreshCw, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ITSupport = () => {
  const features = [
    {
      icon: <Headphones className="text-emerald-500 w-6 h-6" />,
      title: "24/7 Managed Helpdesk",
      description: "Around-the-clock technical assistance and ticketholder management to resolve your team's software and hardware issues instantly."
    },
    {
      icon: <ShieldCheck className="text-emerald-500 w-6 h-6" />,
      title: "Proactive Infrastructure Monitoring",
      description: "Continuous real-time auditing of server health, database performance, and network latencies to resolve problems before they disrupt business."
    },
    {
      icon: <Wrench className="text-emerald-500 w-6 h-6" />,
      title: "Hardware Lifecycle & Setup",
      description: "Routine physical maintenance, OS installation, storage upgrades, and certified multi-brand hardware procurement for your office staff."
    },
    {
      icon: <Cloud className="text-emerald-500 w-6 h-6" />,
      title: "SaaS & Cloud Directory Administration",
      description: "Full administration of Google Workspace, Microsoft 365, IAM policies, and cloud directories for seamless onboarding and offboarding."
    },
    {
      icon: <Database className="text-emerald-500 w-6 h-6" />,
      title: "Automated Backups & Disaster Recovery",
      description: "Zero-loss daily automated backup strategies with rapid restore drills so your enterprise operations remain completely bulletproof."
    },
    {
      icon: <RefreshCw className="text-emerald-500 w-6 h-6" />,
      title: "On-Site & Remote Dispatch SLA",
      description: "Get prompt response times with our hybrid model: instant remote screen-share debugging paired with rapid on-call technician dispatch."
    }
  ];

  const pricingPlans = [
    {
      name: "Standard Helpdesk",
      price: "Bronze",
      description: "Best for growing startups and medium businesses.",
      features: [
        "8 AM - 5 PM SLA Coverage",
        "Next Business Day Onsite",
        "Standard Ticket Support"
      ],
      cta: "Select Plan",
      highlight: false,
      emailSubject: "Inquiry about Standard Helpdesk SLA Plan",
      emailBody: "Hello Rymora Sales Team,\n\nWe are interested in the Standard Helpdesk SLA Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
    },
    {
      name: "Managed Enterprise",
      price: "Silver",
      description: "Best for high-availability corporate teams.",
      features: [
        "24/7 Remote Monitoring & Helpdesk",
        "2-Hour Emergency Onsite SLA",
        "SaaS License & Directory Audit",
        "Monthly Server & Patch Updates"
      ],
      cta: "Select Plan",
      highlight: true,
      emailSubject: "Inquiry about Managed Enterprise SLA Plan",
      emailBody: "Hello Rymora Sales Team,\n\nWe are interested in the Managed Enterprise SLA Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
    },
    {
      name: "SLA Custom Retainer",
      price: "Custom",
      description: "Bespoke SLA structures tailored for heavy operations.",
      features: [
        "Dedicated On-Site Technicians",
        "Custom Reaction Times (< 30 Mins)",
        "Custom DR Testing Protocols"
      ],
      cta: "Select Plan",
      highlight: false,
      emailSubject: "Inquiry about SLA Custom Retainer Plan",
      emailBody: "Hello Rymora Sales Team,\n\nWe are interested in a bespoke SLA Custom Retainer Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-emerald-500/30 font-sans">
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
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-emerald-500">
                <Headphones className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase mb-4 block">
                On-Demand Support
              </span>
              <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white">
                IT Support <span className="text-emerald-500">as a Service.</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Empower your workforce and ensure uninterrupted operations with Rymora's proactive IT Support as a Service (ITSaaS). We provide fast, reliable, and secure remote and on-site troubleshooting tailored to your business scale.
              </p>
            </motion.div>
          </div>

          {/* Subtitle Header for Features */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase mb-4 block">Our Helpdesk</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">Enterprise-Grade Managed Helpdesk</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Our comprehensive support package is designed to act as your fully fledged internal IT department, without the overhead.
            </p>
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
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-emerald-500/50 transition-all flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* SLAs / Pricing Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase mb-4 block">Pricing & SLAs</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">Support SLA Levels</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              We offer highly flexible SLA models to align perfectly with your operations and budget constraints.
            </p>
          </div>

          {/* SLAs / Pricing Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`border rounded-3xl p-10 flex flex-col h-full bg-white/5 relative ${
                  plan.highlight 
                    ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-2xl shadow-emerald-500/5' 
                    : 'border-white/10'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-slate-950 font-bold text-[10px] tracking-widest uppercase rounded-full">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-slate-400 text-sm">/tier</span>}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 mb-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`mailto:sales@rymoratech.co.zw?subject=${encodeURIComponent(plan.emailSubject)}&body=${encodeURIComponent(plan.emailBody)}`}
                  className={`w-full py-4 rounded-full font-bold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group ${
                    plan.highlight 
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' 
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white relative z-10">
                Stop Reacting to IT Failures
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed relative z-10">
                Let Rymora Technologies run your systems proactively so your team can focus purely on business growth.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-10 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-2 relative z-10 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Start Your SLA Consultation <ArrowRight className="w-4 h-4" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ITSupport;
