import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  AlertCircle, 
  Loader2, 
  Clock, 
  ShieldCheck, 
  Activity,
  ChevronRight,
  Building,
  CheckCircle
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const Contact = () => {
  const contactInfo = {
    email: "info@rymoratech.co.zw",
    phone: "+263789057818",
    whatsapp: "+263789057818",
    address: "Harare, Zimbabwe",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM (SLA Support 24/7/365)"
  };

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionId, setSubmissionId] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select an inquiry category';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name as keyof FormErrors];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    setTimeout(() => {
      const id = Math.random().toString(36).substring(2, 9).toUpperCase();
      try {
        const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        existingSubmissions.push({
          ...formData,
          id,
          date: new Date().toISOString()
        });
        localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));
      } catch (err) {
        console.error('Failed to save to localStorage', err);
      }
      
      setSubmissionId(id);
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setErrors({});
    setStatus('idle');
    setSubmissionId('');
  };

  const inputBaseClass = "w-full px-4 py-3 rounded-xl border text-base transition-all duration-300 focus:outline-none focus:ring-1 bg-[#0f1b35] text-white";
  
  const getInputClass = (fieldName: string) => {
    const hasError = fieldName in errors;
    return hasError
      ? `${inputBaseClass} border-red-500/50 focus:border-red-500 focus:ring-red-500/10`
      : `${inputBaseClass} border-blue-500/25 focus:border-blue-500 focus:ring-blue-500/20 hover:border-blue-500/40`;
  };

  const labelClass = "block text-[12px] font-mono uppercase tracking-[0.15em] mb-2 text-blue-300/70";

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-20 relative overflow-hidden bg-[#080809] border-t border-white/[0.04] font-sans text-left">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Corporate Profile & Direct Channels */}
          <div className="md:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[12px] font-mono uppercase tracking-[0.2em] text-[#8e8e93]">
                <span className="w-1.5 h-1.5 rounded-full bg-action-blue animate-pulse" />
                Connect With Us
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-white leading-tight">
                Let's Partner to Secure Your IT.
              </h2>
              
              <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                Partner with Rymoratech Technologies for elite enterprise networking, zero-trust cybersecurity, and 24/7/365 SLA-backed helpdesk support.
              </p>
            </motion.div>

            {/* Direct Contact Channels Grid */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Email channel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-[#111113]/50 hover:border-action-blue/20 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1c1c1f] text-zinc-400 group-hover:text-white flex items-center justify-center shrink-0 border border-white/[0.04]">
                  <Mail size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] text-zinc-500 font-mono uppercase tracking-wider">Email Support</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-base font-bold block truncate text-white hover:text-action-blue mt-0.5 transition-colors font-mono">
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              {/* Phone channel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-[#111113]/50 hover:border-action-blue/20 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1c1c1f] text-zinc-400 group-hover:text-white flex items-center justify-center shrink-0 border border-white/[0.04]">
                  <Phone size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] text-zinc-500 font-mono uppercase tracking-wider">Phone Helpline</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-base font-bold block truncate text-white hover:text-action-blue mt-0.5 transition-colors font-mono">
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp channel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-[#111113]/50 hover:border-action-blue/20 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1c1c1f] text-zinc-400 group-hover:text-white flex items-center justify-center shrink-0 border border-white/[0.04]">
                  <MessageCircle size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] text-zinc-500 font-mono uppercase tracking-wider">WhatsApp Hotline</p>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-base font-bold block truncate text-white hover:text-action-blue mt-0.5 transition-colors"
                  >
                    Chat Live
                  </a>
                </div>
              </motion.div>
            </div>

            {/* SLA Commitments Panel */}
            

          </div>

          {/* Right Column: Structured Interactive Form */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-blue-500/20 p-8 md:p-10 relative overflow-hidden bg-[#0a1224]/90 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="py-8 flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20"
                    >
                      <CheckCircle className="w-5 h-5" />
                    </motion.div>
                    
                    <h3 className="text-xl font-serif font-normal text-white mb-3">
                      Inquiry Logged Successfully
                    </h3>
                    
                    <p className="text-base mb-6 leading-relaxed max-w-sm text-zinc-400 font-light">
                      Thank you, <span className="font-bold text-white">{formData.name}</span>. Your inquiry regarding <span className="font-semibold">{formData.service}</span> has been securely logged on our systems.
                    </p>

                    {/* Styled SLA Ticket Receipt */}
                    <div className="w-full max-w-sm rounded-2xl border border-white/[0.06] text-left p-5 mb-8 bg-[#080809]">
                      <div className="flex justify-between items-center pb-3 border-b border-white/[0.04] mb-3">
                        <span className="text-[12px] font-mono font-bold text-zinc-500 uppercase tracking-wider">SUPPORT TICKET RECEIPT</span>
                        <span className="text-[12px] font-mono font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full">ACTIVE</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[12px] font-mono">
                          <span className="text-zinc-500">Ticket ID</span>
                          <span className="font-bold text-white uppercase">{submissionId}</span>
                        </div>
                        <div className="flex justify-between text-[12px] font-mono">
                          <span className="text-zinc-500">Response Window</span>
                          <span className="font-semibold text-action-blue">&lt; 2 Hours</span>
                        </div>
                        <div className="flex justify-between text-[12px] font-mono">
                          <span className="text-zinc-500">Registered Email</span>
                          <span className="text-white truncate max-w-[180px]">{formData.email}</span>
                        </div>
                        <div className="flex justify-between text-[12px] font-mono">
                          <span className="text-zinc-500">Date Logged</span>
                          <span className="text-white">{new Date().toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full font-medium text-base bg-white text-black hover:bg-action-blue hover:text-white transition-colors cursor-pointer"
                    >
                      Log Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-lg font-serif font-normal text-white">
                        Enterprise Solution Builder
                      </h3>
                      <p className="text-base leading-relaxed text-zinc-500 font-light mt-1">
                        Fill out the specification form below to connect immediately with a Solutions Architect.
                      </p>
                    </div>

                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label htmlFor="contact-name" className={labelClass}>Corporate/Personal Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          placeholder="e.g. John Doe / EcoCash Holdings"
                          className={getInputClass('name')}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1.5 font-medium">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email and Phone Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email input */}
                        <div className="flex flex-col">
                          <label htmlFor="contact-email" className={labelClass}>Business Email Address *</label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'submitting'}
                            placeholder="johndoe@corporate.co.zw"
                            className={getInputClass('email')}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1.5 font-medium">
                              <AlertCircle size={12} /> {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone input */}
                        <div className="flex flex-col">
                          <label htmlFor="contact-phone" className={labelClass}>Direct Phone Line</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === 'submitting'}
                            placeholder="e.g. +263 78 905 7818"
                            className={getInputClass('phone')}
                          />
                        </div>
                      </div>

                      {/* Service / Inquiry Selection */}
                      <div className="flex flex-col">
                        <label htmlFor="contact-service" className={labelClass}>Required ICT Capability *</label>
                        <div className="relative">
                          <select
                            id="contact-service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            disabled={status === 'submitting'}
                            className={`${getInputClass('service')} appearance-none cursor-pointer pr-10`}
                          >
                            <option value="" disabled className="bg-[#0f1b35] text-zinc-400">
                              Select core inquiry category
                            </option>
                            <option value="Cybersecurity & Enpass Deployment" className="bg-[#0f1b35] text-white">
                              Cybersecurity & Enpass Deployment Solutions
                            </option>
                            <option value="Enterprise Networking" className="bg-[#0f1b35] text-white">
                              Enterprise Networking & SD-WAN
                            </option>
                            <option value="IT Support as a Service" className="bg-[#0f1b35] text-white">
                              IT Support as a Service (Managed Helpdesk SLA)
                            </option>
                            <option value="General ICT Solutions" className="bg-[#0f1b35] text-white">
                              General ICT Consulting & Hardware Provisioning
                            </option>
                            <option value="Other Request" className="bg-[#0f1b35] text-white">
                              Other Corporate Inquiry
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-blue-300/50">
                            <ChevronRight size={14} className="rotate-90" />
                          </div>
                        </div>
                        {errors.service && (
                          <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1.5 font-medium">
                            <AlertCircle size={12} /> {errors.service}
                          </p>
                        )}
                      </div>

                      {/* Message textarea */}
                      <div className="flex flex-col">
                        <label htmlFor="contact-message" className={labelClass}>Inquiry Specifications *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          rows={4}
                          placeholder="Please provide details about your corporate infrastructure, current users count, or required hardware specs..."
                          className={getInputClass('message')}
                        />
                        {errors.message && (
                          <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1.5 font-medium">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full py-3.5 px-6 rounded-full font-mono font-medium text-[15px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                          status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                        } bg-blue-600 text-white hover:bg-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.3)]`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Registering Secure Ticket...
                          </>
                        ) : (
                          <>
                            <Send className="w-3 h-3" />
                            Submit Inquiry Specification
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;