import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Key, 
  Cpu, 
  Users, 
  User, 
  Check, 
  ChevronDown, 
  ChevronRight,
  Sparkles, 
  Lock, 
  Building, 
  Cloud, 
  CheckCircle2,
  Award,
  ArrowRight,
  Server
} from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EnpassPage = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'personal'>('business');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pillars = [
    {
      icon: <Server className="text-cohere-black w-6 h-6" />,
      title: "Data Sovereignty",
      description: "Enpass provides user-controlled data storage: your sensitive data is stored where you choose, and in your jurisdiction."
    },
    {
      icon: <CheckCircle2 className="text-cohere-black w-6 h-6" />,
      title: "Independently Audited",
      description: "Enpass ensures that security experts regularly review our technology, and we stay ahead of the hackers."
    },
    {
      icon: <Shield className="text-cohere-black w-6 h-6" />,
      title: "Full Security",
      description: "Enpass lets you access your passwords even without an internet connection, so you stay in control, online or offline."
    },
    {
      icon: <Lock className="text-cohere-black w-6 h-6" />,
      title: "No Mass Breach Risk",
      description: "Enpass has no central vault, so there’s nothing for attackers to target at scale."
    },
    {
      icon: <Cpu className="text-cohere-black w-6 h-6" />,
      title: "Beyond Zero Knowledge",
      description: "Enpass has robust zero-knowledge encryption; we don’t see your data or store it."
    }
  ];

  const testimonials = [
    {
      quote: "Enpass let our global team securely share local account access with marketing teams worldwide, ensuring continuity despite staff changes, absences, or time zone differences within the team.",
      author: "Director of IT Security",
      company: "Global Consulting Firm",
      rating: 5
    },
    {
      quote: "Enpass makes it easy for our team to manage passwords without storing anything on Enpass cloud. It gives us more control and keeps our company data safe and private in our Microsoft 365 environment.",
      author: "Marketing Head",
      company: "Leading Healthcare Firm",
      rating: 5
    },
    {
      quote: "To meet strict client requirements, we needed full control over credential storage. Enpass delivered, keeping everything within our Microsoft 365 setup, not on Enpass servers.",
      author: "Director of IT",
      company: "European Car Manufacturer",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What if Enpass servers are ever compromised or get hacked? Has Enpass ever been breached?",
      answer: "No, Enpass has never been breached. More importantly, because Enpass is built on local data sovereignty and has no central vault server, there is no master database for hackers to target. Your encrypted passwords remain exclusively within your own chosen storage (like Microsoft 365, Google Workspace, or completely offline on your device). A breach at Enpass has zero impact on your security because they never possess your data."
    },
    {
      question: "How is Enpass unique among other password managers?",
      answer: "Unlike traditional password managers (which store all user vaults on their own cloud servers, creating a major single point of failure), Enpass is a local-first, offline-capable password manager. It gives you 100% data sovereignty. You choose where your encrypted database is stored, while enjoying the exact same seamless experience—such as cross-device syncing, browser auto-fill, and passkey support."
    },
    {
      question: "Can I use Enpass without the internet?",
      answer: "Yes, absolutely! Enpass stores its database locally on your devices. You can read, write, auto-fill, and search your vaults entirely without an internet connection. Synced changes will simply update across your other devices once you choose to reconnect via your private cloud storage."
    },
    {
      question: "Can Enpass see my passwords?",
      answer: "No. Enpass utilizes a strict, zero-knowledge security architecture. Your master password never leaves your device, and all data is encrypted locally using peer-reviewed AES-256 with PBKDF2 derivation. Enpass employees, servers, and systems have absolute zero visibility into your credentials."
    },
    {
      question: "Can I import my existing passwords and data into Enpass?",
      answer: "Yes, easily. Enpass provides built-in desktop import tools that can automatically parse and migrate your passwords from almost all major web browsers and other password managers (such as 1Password, LastPass, Bitwarden, Dashlane, KeePass, and custom CSV files) in just a few clicks."
    },
    {
      question: "Can I try Enpass for free?",
      answer: "Yes! Enpass is completely free to download and use on desktop platforms (Windows, macOS, and Linux) with full standard features. Mobile applications offer free versions with optional upgrades. Businesses can also get in touch with Rymoratech Technologies for tailored enterprise trials and POC setups."
    }
  ];

  const personalPlans = [
    {
      name: "Individual Plan",
      price: "$3.99",
      period: "/month, billed yearly",
      cta: "Subscribe",
      features: [
        "Apps for Windows, MacOS, Linux, Apple and Android",
        "Passkey support",
        "Unlimited passwords and items",
        "Unlimited vaults",
        "Unlimited devices",
        "Security alerts for website breaches",
        "Identification of accounts with 2FA support",
        "Email and Forum support"
      ]
    },
    {
      name: "Family Plan",
      price: "$8.99",
      period: "/month, billed yearly",
      cta: "Subscribe",
      highlight: true,
      features: [
        "Apps for Windows, MacOS, Linux, Apple and Android",
        "Passkey support",
        "Add up to 6 members",
        "Unlimited passwords and items",
        "Unlimited vaults",
        "Unlimited devices",
        "Security alerts for website breaches",
        "Identification of accounts with 2FA support",
        "Email and Forum support"
      ]
    },
    {
      name: "3-Year Plan",
      price: "$99.99",
      period: "One-time payment",
      cta: "Buy Now",
      subNote: "Pay for 2 years, get 1 year access free!",
      features: [
        "Apps for Windows, MacOS, Linux, Apple and Android",
        "Passkey support",
        "All features access for 3 years",
        "Unlimited passwords and items",
        "Unlimited vaults",
        "Unlimited devices",
        "Security alerts for website breaches",
        "Identification of accounts with 2FA support",
        "Email and Forum support"
      ]
    }
  ];

  return (
    <div className="bg-canvas-white min-h-screen text-cohere-black selection:bg-action-blue/30 font-sans">
      <Navbar />

      <main className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-12 flex flex-col items-center">
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
                Official Distributor in Zimbabwe
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight mb-6 text-cohere-black leading-none uppercase">
                Password Management <span className="text-action-blue font-medium">Your Way.</span>
              </h1>
              <p className="text-muted-slate text-base font-light max-w-xl mx-auto leading-relaxed mb-8">
                All password managers do the same thing, but Enpass is different in one big way — <span className="text-action-blue font-mono uppercase tracking-wider font-semibold hover:underline">Data Sovereignty</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <HashLink
                  to="#pricing"
                  className="px-6 py-2.5 rounded-full bg-cohere-black text-canvas-white text-base font-medium hover:bg-action-blue transition-colors flex items-center gap-2 group"
                >
                  View Pricing Plans <ArrowRight className="w-3.5 h-3.5" />
                </HashLink>
                <HashLink
                  to="/#contact"
                  smooth
                  className="px-6 py-2.5 rounded-full bg-soft-stone border border-hairline text-cohere-black text-base font-medium hover:text-action-blue hover:border-action-blue/40 transition-all flex items-center gap-2"
                >
                  Request Zimbabwe Enterprise Demo <ChevronRight size={14} />
                </HashLink>
              </div>
            </motion.div>
          </div>

          {/* Interactive Vault Storage Mockup Card */}
          <div className="max-w-2xl mx-auto mb-16 md:mb-24 lg:mb-16 pt-12 text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-soft-stone border border-hairline"
            >
              <div className="relative space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] uppercase tracking-widest text-muted-slate font-mono">Vault Storage Option</span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-700 text-[12px] font-mono font-bold uppercase tracking-wider">Secured</span>
                </div>
                <div className="p-4 rounded-2xl bg-canvas-white border border-hairline flex items-center gap-4">
                  <div className="p-2.5 rounded-full bg-soft-stone border border-hairline text-cohere-black">
                    <Cloud size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-cohere-black text-base">Your Microsoft 365</h4>
                    <p className="text-muted-slate text-s font-light">Or Google Workspace, Nextcloud, iCloud</p>
                  </div>
                </div>
                <div className="flex justify-center my-2 text-muted-slate">
                  <ChevronDown size={18} className="animate-bounce text-action-blue" />
                </div>
                <div className="p-4 rounded-2xl bg-canvas-white border border-hairline flex items-center gap-4">
                  <div className="p-2.5 rounded-full bg-soft-stone border border-hairline text-cohere-black">
                    <Lock size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-cohere-black text-base">Zero Enpass Server Storage</h4>
                    <p className="text-muted-slate text-s font-light">Decrypted strictly inside your devices</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-hairline flex justify-between items-center text-[13px] font-mono text-muted-slate">
                  <span>Active Security Audited</span>
                  <span className="text-action-blue font-semibold">AES-256-GCM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enpass is Different Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24 lg:mb-16 text-left">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-soft-stone border border-hairline text-muted-slate text-[13px] font-mono uppercase tracking-[0.2em]">
                Why Enpass?
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-cohere-black uppercase leading-none">
                Enpass is Different
              </h2>
              <p className="text-ink text-base font-light leading-relaxed">
                Most password managers offer the same core features, including password generation, autofill, passkeys, and end-to-end encryption. Enpass delivers all of this while remaining a privacy-first, zero-knowledge password manager built on true data sovereignty.
              </p>
              <p className="text-muted-slate text-base font-light leading-relaxed">
                This means your encrypted data stays under your control, never on Enpass servers, so only you can access it.
              </p>
              <blockquote className="border-l-2 border-action-blue pl-6 text-base italic font-light text-cohere-black">
                "Your password management, your data, your way."
              </blockquote>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-[22px] bg-soft-stone border border-hairline flex flex-col justify-between group ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div>
                    <div className="w-9 h-9 rounded-full bg-canvas-white border border-hairline flex items-center justify-center mb-6 text-cohere-black group-hover:text-action-blue transition-colors duration-300">{pillar.icon}</div>
                    <h3 className="font-display font-medium text-cohere-black text-base mb-2 group-hover:text-action-blue transition-colors">{pillar.title}</h3>
                    <p className="text-ink text-base font-light leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enpass for Everyone Tabs Section */}
          <div className="mb-16 md:mb-24 lg:mb-16 text-left">
            <div className="text-center mb-16 space-y-4 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-soft-stone border border-hairline text-muted-slate text-[12.5px] font-mono uppercase tracking-[0.2em]">
                Flexible Orchestration
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-cohere-black uppercase">
                Enpass for Everyone
              </h2>
              <p className="text-muted-slate text-base font-light max-w-xl mx-auto text-center leading-relaxed">
                Select the tailored password orchestration platform crafted precisely for corporate infrastructure or individual peace of mind.
              </p>
              <div className="flex justify-center gap-3 pt-6">
                <button
                  onClick={() => setActiveTab('business')}
                  className={`px-5 py-2 rounded-full text-[14px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'business' ? 'bg-cohere-black text-canvas-white' : 'bg-soft-stone border border-hairline text-muted-slate hover:text-action-blue'}`}
                >
                  <div className="flex items-center gap-2">
                    <Building size={12} /> Business Solutions
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-5 py-2 rounded-full text-[14px] font-mono uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'personal' ? 'bg-cohere-black text-canvas-white' : 'bg-soft-stone border border-hairline text-muted-slate hover:text-action-blue'}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={12} /> Personal Plans
                  </div>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'business' ? (
                <motion.div
                  key="business"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-5 space-y-6">
                    <div className="w-10 h-10 rounded-full bg-soft-stone border border-hairline flex items-center justify-center text-cohere-black">
                      <Building size={18} />
                    </div>
                    <h3 className="font-display text-xl font-medium uppercase text-cohere-black leading-tight">Ideal for businesses that want full data control.</h3>
                    <p className="text-muted-slate text-s font-light leading-relaxed">
                      By storing vaults inside your corporate cloud (OneDrive, SharePoint, Google Drive), you avoid third-party liability and ensure total jurisdictional sovereignty inside Zimbabwe.
                    </p>
                    <div className="p-6 rounded-[22px] bg-soft-stone border border-hairline">
                      <h4 className="font-display font-medium text-action-blue text-sm mb-2 uppercase">Did You Know?</h4>
                      <p className="text-ink text-base font-light leading-relaxed">
                        Zimbabwean businesses subject to security regulations can ensure complete regulatory compliance because passwords never transit outside of your chosen IT infrastructure boundaries.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    {[
                      { num: 1, title: "Integrated storage", desc: "Password vaults are stored in the users’ existing Microsoft 365 or Google Workspace." },
                      { num: 2, title: "Unified management", desc: "Easily manage users and groups, define password policies, all from one place." },
                      { num: 3, title: "Secure collaboration", desc: "Share credentials with colleagues safely with access level controls." },
                      { num: 4, title: "Quick recovery", desc: "Recover access for employees when they forget their master passwords." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 rounded-[22px] bg-soft-stone border border-hairline hover:bg-canvas-white transition-colors flex gap-4">
                        <div className="w-7 h-7 rounded-full bg-canvas-white border border-hairline text-cohere-black flex items-center justify-center shrink-0 font-mono text-xs font-bold">{item.num}</div>
                        <div>
                          <h4 className="font-display font-medium text-cohere-black text-sm mb-1">{item.title}</h4>
                          <p className="text-muted-slate text-s font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-5 space-y-6">
                    <div className="w-10 h-10 rounded-full bg-soft-stone border border-hairline flex items-center justify-center text-cohere-black">
                      <User size={18} />
                    </div>
                    <h3 className="font-display text-xl font-medium uppercase text-cohere-black leading-tight">Ideal for users who want privacy and security.</h3>
                    <p className="text-muted-slate text-base font-light leading-relaxed">
                      Protect your online life with zero friction. Automate passwords, logins, bank cards, and secure notes with zero threat of broad server breaches.
                    </p>
                    <div className="p-6 rounded-[22px] bg-soft-stone border border-hairline">
                      <h4 className="font-display font-medium text-action-blue text-sm mb-2 uppercase">Cross-Platform Syncing</h4>
                      <p className="text-ink text-base font-light leading-relaxed">
                        Sync effortlessly across Android, Apple, Windows, and Linux via your secure private OneDrive, Google Drive, Dropbox, or totally offline over local Wi-Fi.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    {[
                      { title: "Complete coverage", desc: "No restrictions on the number of credentials you can store." },
                      { title: "Effortless security", desc: "Automatically generate and save strong and unique passwords." },
                      { title: "Instant access", desc: "Autofill logins, payments, and forms effortlessly." },
                      { title: "Seamless protection", desc: "Access and authenticate with biometrics and passkeys." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 rounded-[22px] bg-soft-stone border border-hairline hover:bg-canvas-white transition-colors flex gap-4">
                        <div className="w-7 h-7 rounded-full bg-canvas-white border border-hairline text-cohere-black flex items-center justify-center shrink-0 font-bold text-xs">✓</div>
                        <div>
                          <h4 className="font-display font-medium text-cohere-black text-sm mb-1">{item.title}</h4>
                          <p className="text-muted-slate text-base font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 md:mb-24 lg:mb-16 text-left">
            <div className="text-center mb-16 space-y-4 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-soft-stone border border-hairline text-muted-slate text-[12.5px] font-mono uppercase tracking-[0.2em]">
                Global Endorsements
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal uppercase text-cohere-black tracking-tight">
                Total Trust, Globally
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-action-blue font-mono text-s font-semibold">App Store 4.3 ★</div>
                  <div className="text-[12.5px] text-muted-slate font-mono">Google Play 4.1 ★</div>
                </div>
                <div className="h-6 w-px bg-hairline" />
                <div className="text-center">
                  <div className="text-action-blue font-mono text-sfont-semibold">G2 4.6 ★</div>
                  <div className="text-[12.5x] text-muted-slate font-mono">Capterra 4.7 ★</div>
                </div>
                <div className="h-6 w-px bg-hairline" />
                <div className="text-center">
                  <div className="text-action-blue font-mono text-s font-semibold">GetApp 4.3 ★</div>
                  <div className="text-[12.5px] text-muted-slate font-mono">Top-Tier Media Mentioned</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-8 rounded-[22px] bg-soft-stone border border-hairline flex flex-col justify-between">
                  <p className="text-ink italic text-s font-light leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="flex text-action-blue text-xs mb-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <h4 className="font-display font-medium text-cohere-black text-sm">{t.author}</h4>
                    <p className="text-muted-slate text-[12.5px] font-mono uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16 md:mb-24 lg:mb-16 relative text-left">
            <div className="text-center mb-16 space-y-4 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-soft-stone border border-hairline text-muted-slate text-[12.5px] font-mono uppercase tracking-[0.2em]">
                Flexible Licensing
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal text-cohere-black uppercase">
                Your Plan, Your Way
              </h2>
              <p className="text-muted-slate text-s font-light max-w-xl text-center">
                Choose the perfect tier that covers your devices, family, or business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {personalPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-10 rounded-[22px] bg-soft-stone border flex flex-col justify-between relative ${plan.highlight ? 'border-action-blue ring-1 ring-action-blue' : 'border-hairline'}`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-action-blue text-canvas-white font-mono text-[12.5px] tracking-[0.15em] uppercase rounded-full">
                      Recommended
                    </span>
                  )}
                  <div>
                    <h3 className="font-display font-medium text-cohere-black text-xl mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-3xl font-medium text-cohere-black">{plan.price}</span>
                      <span className="text-muted-slate text-s font-mono">{plan.period}</span>
                    </div>
                    {plan.subNote && (
                      <p className="text-xs text-emerald-600 font-medium mb-6">{plan.subNote}</p>
                    )}
                    <div className="w-full h-px bg-hairline my-6" />
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-s text-ink font-light">
                          <Check size={14} className="text-action-blue mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:sales@rymoratech.co.zw?subject=Inquiry about Enpass ${plan.name}&body=Hello Rymoratech Sales Team,%0A%0AI am interested in licensing the Enpass ${plan.name}. Please reach back to me with details.%0A%0ABest regards,`}
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

            {/* Compliance Logos */}
            <div className="mt-20 pt-10 border-t border-hairline flex flex-wrap justify-center gap-12 items-center text-muted-slate text-s font-mono">
              <div className="flex items-center gap-2">
                <Award className="text-action-blue" size={16} />
                <span>ISO 27001:2022 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-action-blue" size={16} />
                <span>SOC 2 Type II Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-action-blue" size={16} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 md:mb-24 lg:mb-16 text-left">
            <div className="text-center mb-16 space-y-4 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-soft-stone border border-hairline text-muted-slate text-[12.5px] font-mono uppercase tracking-[0.2em]">
                Resolve Doubts
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-normal text-cohere-black uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-[22px] border border-hairline bg-soft-stone overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-canvas-white/40 transition-colors cursor-pointer border-b-0"
                  >
                    <span className="font-display font-medium text-cohere-black text-base md:text-lg hover:text-action-blue">{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-action-blue transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-ink leading-relaxed text-s font-light border-t border-hairline/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
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
              <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight mb-6 text-cohere-black uppercase">
                Secure Passwords YOUR Way
              </h2>
              <p className="text-muted-slate text-s font-light max-w-lg mb-10 leading-relaxed">
                Take control of your password security with Enpass. Secure, offline-first password management that puts your data sovereignly in your hands.
              </p>
              <a 
                href="mailto:sales@rymoratech.co.zw?subject=Inquiry about Enpass deployment in Zimbabwe&body=Hello Rymoratech Sales Team,%0A%0AWe are interested in deploying Enpass for our organization. Please get in touch to schedule a demo and discuss licensing.%0A%0ABest regards,"
                className="px-8 py-3 bg-cohere-black text-canvas-white hover:bg-action-blue rounded-full font-medium text-s transition-colors flex items-center gap-2"
              >
                Deploy Enpass Zimbabwe <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnpassPage;
