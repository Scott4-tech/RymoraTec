import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactProps {
  theme?: 'dark' | 'verdant';
}

const Contact = ({ theme = 'dark' }: ContactProps) => {
  const isVerdant = theme === 'verdant';
  
  const bgClass = isVerdant ? 'bg-verdant-pale' : 'bg-[#020617]';
  const titleClass = isVerdant ? 'text-verdant-deep' : 'text-white';
  const textClass = isVerdant ? 'text-verdant-mid/80' : 'text-slate-400';
  const accentTextClass = isVerdant ? 'text-verdant-mid' : 'text-rymora-accent';
  const cardBgClass = isVerdant ? 'bg-white border-verdant-mid/10' : 'bg-white/5 border-white/10';
  const cardHoverBorderClass = isVerdant ? 'hover:border-verdant-mid/30' : 'hover:border-rymora-accent/50';
  const iconBgClass = isVerdant ? 'bg-verdant-mid/10 text-verdant-mid' : 'bg-rymora-accent/10 text-rymora-accent';

  const contactInfo = {
    email: "info@rymoratech.co.zw",
    phone: "+263789057818",
    whatsapp: "+263789057818"
  };

  return (
    <section id="contact" className={`py-24 ${bgClass}`}>
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
              <h2 className={`text-5xl md:text-6xl font-bold ${titleClass} mb-4 leading-tight`}>
                Let's Build Something <br />
                <span className={accentTextClass}>Extraordinary</span>
              </h2>
              <p className={`${textClass} text-lg mb-12 max-w-xl leading-relaxed`}>
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
                className={`group p-8 rounded-2xl ${cardBgClass} border ${cardHoverBorderClass} transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${titleClass} mb-2`}>Email</h3>
                    <p className={textClass}>Reach out for innovative solutions</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className={`${accentTextClass} font-semibold hover:underline inline-flex items-center gap-2 mt-4`}
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
                className={`group p-8 rounded-2xl ${cardBgClass} border ${cardHoverBorderClass} transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${titleClass} mb-2`}>Phone</h3>
                    <p className={textClass}>Connect with us for expert guidance</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className={`${accentTextClass} font-semibold hover:underline inline-flex items-center gap-2 mt-4`}
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
                className={`group p-8 rounded-2xl ${cardBgClass} border ${cardHoverBorderClass} transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${titleClass} mb-2`}>WhatsApp</h3>
                    <p className={textClass}>Get instant support and updates</p>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${accentTextClass} font-semibold hover:underline inline-flex items-center gap-2 mt-4`}
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
            className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
              alt="Collaboration" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${isVerdant ? 'from-verdant-deep/30' : 'from-[#020617]/50'} to-transparent`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
