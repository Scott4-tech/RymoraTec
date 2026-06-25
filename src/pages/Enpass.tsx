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
      icon: <Server className="text-cyan-400 w-8 h-8" />,
      title: "Data Sovereignty",
      description: "Enpass provides user-controlled data storage: your sensitive data is stored where you choose, and in your jurisdiction."
    },
    {
      icon: <CheckCircle2 className="text-emerald-400 w-8 h-8" />,
      title: "Independently Audited",
      description: "Enpass ensures that security experts regularly review our technology, and we stay ahead of the hackers."
    },
    {
      icon: <Shield className="text-purple-400 w-8 h-8" />,
      title: "Full Security",
      description: "Enpass lets you access your passwords even without an internet connection, so you stay in control, online or offline."
    },
    {
      icon: <Lock className="text-amber-400 w-8 h-8" />,
      title: "No Mass Breach Risk",
      description: "Enpass has no central vault, so there’s nothing for attackers to target at scale."
    },
    {
      icon: <Cpu className="text-rose-400 w-8 h-8" />,
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
      answer: "Yes! Enpass is completely free to download and use on desktop platforms (Windows, macOS, and Linux) with full standard features. Mobile applications offer free versions with optional upgrades. Businesses can also get in touch with Rymora Technologies for tailored enterprise trials and POC setups."
    }
  ];

  const personalPlans = [
    {
      name: "Individual Plan",
      price: "$1.99",
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
      price: "$3.99",
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
      price: "$49.99",
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
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-cyan-500/30 font-sans">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-cyan-400">
                <Shield className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 block">
                Official Distributor in Zimbabwe
              </span>
              <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-none">
                Password Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Your Way.</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                All password managers do the same thing, but Enpass is different in one big way — <span className="text-cyan-400 font-semibold underline decoration-2 decoration-purple-400 underline-offset-4">Data Sovereignty</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <HashLink
                  to="#pricing"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all shadow-lg shadow-cyan-500/10 flex items-center gap-2 group"
                >
                  View Pricing Plans <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </HashLink>
                <HashLink
                  to="/#contact"
                  smooth
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  Request Zimbabwe Enterprise Demo <ChevronRight size={16} />
                </HashLink>
              </div>
            </motion.div>
          </div>

          {/* Interactive Vault Storage Mockup Card */}
          <div className="max-w-2xl mx-auto mb-32 pt-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-3xl pointer-events-none" />
              <div className="relative space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Vault Storage Option</span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Secured</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Your Microsoft 365</h4>
                    <p className="text-slate-400 text-xs">Or Google Workspace, Nextcloud, iCloud</p>
                  </div>
                </div>
                <div className="flex justify-center my-2 text-slate-500">
                  <ChevronDown size={20} className="animate-bounce" />
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 text-white">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Zero Enpass Server Storage</h4>
                    <p className="text-slate-400 text-xs">Decrypted strictly inside your devices</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                  <span>Active Security Audited</span>
                  <span className="font-mono text-cyan-400">AES-256-GCM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enpass is Different Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-widest mb-6">
                Why Enpass?
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
                Enpass is Different
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Most password managers offer the same core features, including password generation, autofill, passkeys, and end-to-end encryption. Enpass delivers all of this while remaining a privacy-first, zero-knowledge password manager built on true data sovereignty.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                This means your encrypted data stays under your control, never on Enpass servers, so only you can access it.
              </p>
              <blockquote className="border-l-4 border-cyan-400 pl-6 text-lg italic font-light text-slate-300">
                "Your password management, your data, your way."
              </blockquote>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col h-full ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enpass for Everyone Tabs Section */}
          <div className="mb-32">
            <div className="text-center mb-16 space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                Flexible Orchestration
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
                Enpass for Everyone
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mx-auto">
                Select the tailored password orchestration platform crafted precisely for corporate infrastructure or individual peace of mind.
              </p>
              <div className="flex justify-center gap-4 pt-6">
                <button
                  onClick={() => setActiveTab('business')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === 'business' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <Building size={14} /> Business Solutions
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === 'personal' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={14} /> Personal Plans
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
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Building size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">Ideal for businesses that want full data control.</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      By storing vaults inside your corporate cloud (OneDrive, SharePoint, Google Drive), you avoid third-party liability and ensure total jurisdictional sovereignty inside Zimbabwe.
                    </p>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-cyan-400 mb-2">Did You Know?</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
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
                      <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 font-mono text-sm font-bold">{item.num}</div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
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
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <User size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">Ideal for users who want privacy and security.</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Protect your dynamic online life with zero friction. Automate passwords, logins, bank cards, and secure notes with zero threat of broad server breaches.
                    </p>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-purple-400 mb-2">Cross-Platform Syncing</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
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
                      <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 font-bold text-sm">✓</div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testimonials Section */}
          <div className="mb-32">
            <div className="text-center mb-16 space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                Global Endorsements
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
                Total Trust, Globally
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">App Store 4.3 ★</div>
                  <div className="text-xs text-slate-500 font-mono">Google Play 4.1 ★</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-lg">G2 4.6 ★</div>
                  <div className="text-xs text-slate-500 font-mono">Capterra 4.7 ★</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-amber-400 font-bold text-lg">GetApp 4.3 ★</div>
                  <div className="text-xs text-slate-500 font-mono">Top-Tier Media Mentioned</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                  <p className="text-slate-300 italic text-base leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="flex text-amber-400 mb-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <h4 className="font-bold text-white text-sm">{t.author}</h4>
                    <p className="text-slate-500 text-xs">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-32 relative">
            <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />
            
            <div className="text-center mb-16 space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                Flexible Licensing
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
                Your Plan, Your Way
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Choose the perfect tier that covers your devices, family, or business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {personalPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-10 rounded-3xl bg-white/5 border transition-all flex flex-col justify-between relative ${plan.highlight ? 'border-cyan-500 ring-1 ring-cyan-500' : 'border-white/10'}`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-slate-950 font-bold text-[10px] tracking-widest uppercase rounded-full">
                      Recommended Family Choice
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 text-sm font-mono">{plan.period}</span>
                    </div>
                    {plan.subNote && (
                      <p className="text-xs text-emerald-400 font-semibold mb-6">{plan.subNote}</p>
                    )}
                    <div className="w-full h-px bg-white/10 my-6" />
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check size={16} className={`${plan.highlight ? 'text-cyan-400' : 'text-purple-400'} mt-0.5 shrink-0`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:sales@rymoratech.co.zw?subject=Inquiry about Enpass ${plan.name}&body=Hello Rymora Sales Team,%0A%0AI am interested in licensing the Enpass ${plan.name}. Please reach back to me with details.%0A%0ABest regards,`}
                    className={`w-full py-4 rounded-full font-bold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group ${
                      plan.highlight 
                        ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' 
                        : 'bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Compliance Logos */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 items-center text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Award className="text-cyan-500" size={20} />
                <span className="font-semibold text-slate-400">ISO 27001:2022 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-purple-500" size={20} />
                <span className="font-semibold text-slate-400">SOC 2 Type II Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-emerald-500" size={20} />
                <span className="font-semibold text-slate-400">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-32">
            <div className="text-center mb-16 space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                Resolve Doubts
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-white text-lg md:text-xl">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-cyan-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} 
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
                        <div className="px-6 pb-6 pt-2 text-slate-300 leading-relaxed text-sm md:text-base border-t border-white/5 bg-black/20">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 border border-white/10 rounded-3xl bg-white/5 text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 text-white relative z-10">
                Secure Passwords YOUR Way
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed relative z-10">
                Take control of your password security with Enpass. Secure, offline-first password management that puts your data sovereignly in your hands.
              </p>
              <a 
                href="mailto:sales@rymoratech.co.zw?subject=Inquiry about Enpass deployment in Zimbabwe&body=Hello Rymora Sales Team,%0A%0AWe are interested in deploying Enpass for our organization. Please get in touch to schedule a demo and discuss licensing.%0A%0ABest regards,"
                className="px-10 py-4 bg-cyan-500 text-slate-950 rounded-full font-bold text-sm hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-2 relative z-10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Deploy Enpass Zimbabwe <ArrowRight className="w-4 h-4" />
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
