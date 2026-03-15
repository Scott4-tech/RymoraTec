import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    email: "info@rymoratech.co.zw",
    phone: "+263789057818",
    whatsapp: "+263789057818"
  };

  return (
    <section id="contact" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content and Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Let's Build Something <br />
                <span className="text-rymora-accent">Extraordinary</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl leading-relaxed">
                Ready to take your project to the next level? Let's collaborate and create something extraordinary together.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rymora-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center text-rymora-accent group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-slate-400 mb-4">Reach out for innovative solutions</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-rymora-accent font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Email us
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rymora-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center text-rymora-accent group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-slate-400 mb-4">Connect with us for expert guidance</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-rymora-accent font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Call us
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rymora-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-rymora-accent/10 flex items-center justify-center text-rymora-accent group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                    <p className="text-slate-400 mb-4">Get instant support and updates</p>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rymora-accent font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[600px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
              alt="Collaboration" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
