import React from 'react';
import { motion } from 'motion/react';
import { Headphones, ShieldCheck, Wrench, Clock, Database, Cloud, RefreshCw, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ITSupport = () => {
  const features = [
    {
      icon: <Headphones className="text-cohere-black w-5 h-5" />,
      title: "24/7 Managed Helpdesk",
      description: "Around-the-clock technical assistance and ticketholder management to resolve your team's software and hardware issues instantly."
    },
    {
      icon: <ShieldCheck className="text-cohere-black w-5 h-5" />,
      title: "Proactive Infrastructure Monitoring",
      description: "Continuous real-time auditing of server health, database performance, and network latencies to resolve problems before they disrupt business."
    },
    {
      icon: <Wrench className="text-cohere-black w-5 h-5" />,
      title: "Hardware Lifecycle & Setup",
      description: "Routine physical maintenance, OS installation, storage upgrades, and certified multi-brand hardware procurement for your office staff."
    },
    {
      icon: <Cloud className="text-cohere-black w-5 h-5" />,
      title: "SaaS & Cloud Directory Administration",
      description: "Full administration of Google Workspace, Microsoft 365, IAM policies, and cloud directories for seamless onboarding and offboarding."
    },
    {
      icon: <Database className="text-cohere-black w-5 h-5" />,
      title: "Automated Backups & Disaster Recovery",
      description: "Zero-loss daily automated backup strategies with rapid restore drills so your enterprise operations remain completely bulletproof."
    },
    {
      icon: <RefreshCw className="text-cohere-black w-5 h-5" />,
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
      emailBody: "Hello Rymoratech Sales Team,\n\nWe are interested in the Standard Helpdesk SLA Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
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
      emailBody: "Hello Rymoratech Sales Team,\n\nWe are interested in the Managed Enterprise SLA Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
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
      emailBody: "Hello Rymoratech Sales Team,\n\nWe are interested in a bespoke SLA Custom Retainer Plan for our business. Please provide us with more information on getting started.\n\nBest regards,"
    }
  ];

  return (
    <div className="bg-canvas-white min-h-screen text-cohere-black selection:bg-action-blue/30 font-sans">
      <Navbar />
      
      <main className="pt-36 pb-20 px-6 animate-fade-in text-left">
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
                <Headphones size={18} />
              </div>
              <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">
                On-Demand Support
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 text-white text-center">
                IT Support <span className="text-action-blue">as a Service.</span>
              </h1>
              <p className="text-muted-slate text-s font-light max-w-xl mx-auto leading-relaxed text-center">
                Empower your workforce and ensure uninterrupted operations with Rymoratech's proactive IT Support as a Service (ITSaaS). We provide fast, reliable, and secure remote and on-site troubleshooting tailored to your business scale.
              </p>
            </motion.div>
          </div>

          {/* Subtitle Header for Features */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-mono text-[11px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">Our Helpdesk</span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white">Enterprise-Grade Managed Helpdesk</h2>
            <p className="text-muted-slate max-w-xl mx-auto text-s font-light leading-relaxed text-center mt-2">
              Our comprehensive support package is designed to act as your fully fledged internal IT department, without the overhead.
            </p>
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
                className="p-8 border border-hairline rounded-[22px] bg-soft-stone group transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-canvas-white border border-hairline flex items-center justify-center mb-6 text-cohere-black group-hover:text-action-blue transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif font-normal text-lg mb-3 text-white group-hover:text-action-blue transition-colors">{feature.title}</h3>
                  <p className="text-ink text-s font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SLAs / Pricing Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-mono text-[12.5px] text-muted-slate tracking-[0.2em] uppercase mb-4 block">Pricing & SLAs</span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white">Support SLA Levels</h2>
            <p className="text-muted-slate max-w-xl mx-auto text-s font-light leading-relaxed text-center mt-2">
              We offer highly flexible SLA models to align perfectly with your operations and budget constraints.
            </p>
          </div>

          {/* SLAs / Pricing Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24 lg:mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-[22px] p-10 flex flex-col justify-between bg-soft-stone relative ${
                  plan.highlight 
                    ? 'border-action-blue ring-1 ring-action-blue' 
                    : 'border-hairline'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-action-blue text-canvas-white font-mono text-[12px] tracking-[0.15em] uppercase rounded-full">
                    Most Popular
                  </span>
                )}
                
                <div>
                  <h3 className="font-display font-medium text-cohere-black text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-display text-3xl font-medium text-cohere-black">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-slate text-s font-mono">/tier</span>}
                  </div>
                  <p className="text-muted-slate text-s font-light leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  <div className="w-full h-px bg-hairline my-6" />
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-s text-ink font-light">
                        <Clock className="w-3.5 h-3.5 text-action-blue shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`mailto:sales@rymoratech.co.zw?subject=${encodeURIComponent(plan.emailSubject)}&body=${encodeURIComponent(plan.emailBody)}`}
                  className={`w-full py-3 rounded-full text-s font-medium transition-colors flex items-center justify-center gap-2 ${
                    plan.highlight 
                      ? 'bg-cohere-black text-canvas-white hover:bg-action-blue' 
                      : 'bg-canvas-white border border-hairline text-cohere-black hover:text-action-blue hover:border-action-blue/30'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 border border-hairline rounded-[22px] bg-soft-stone text-center flex flex-col items-center relative overflow-hidden"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-6 text-white">
                Stop reacting to IT failures
              </h2>
              <p className="text-muted-slate text-s font-light max-w-lg mb-10 leading-relaxed">
                Let Rymoratech Technologies run your systems proactively so your team can focus purely on business growth.
              </p>
              <HashLink 
                to="/#contact"
                smooth
                className="px-8 py-3 bg-cohere-black text-canvas-white hover:bg-action-blue rounded-full font-medium text-s transition-colors flex items-center gap-2"
              >
                Start Your SLA Consultation <ArrowRight className="w-3.5 h-3.5" />
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
