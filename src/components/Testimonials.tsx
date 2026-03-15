import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';


const testimonials = [
  {
    name: "Ryan Chigwengwe",
    role: "CEO, Tailorbit",
    content: "Rymora Technologies transformed our entire ICT infrastructure. Their attention to detail and proactive support have been game-changers for our operations.",
    avatar: "/Radza.jpg",
    rating: 5
  },
  {
    name: "Leo Mare",
    role: "Chegutu Zol Administrator",
    content: "The creative branding work they did for our rebrand was phenomenal. They truly understood our vision and translated it into a stunning visual identity.",
    avatar: "/Leo.jpg",
    rating: 5
  },
  {
    name: "Lazarus Musarurwa",
    role: "IT Administrator",
    content: "Their cybersecurity solutions gave us the peace of mind we needed. Professional, knowledgeable, and always available when we need them.",
    avatar: "/musa.jpeg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rymora-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Client <span className="text-rymora-accent">Feedback</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from the businesses we've helped scale and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative group hover:border-rymora-accent/30 transition-colors"
            >
              <div className="absolute top-6 right-8 text-rymora-accent/20 group-hover:text-rymora-accent/40 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} size={16} className="fill-rymora-accent text-rymora-accent" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <div className="relative">
                    <Star size={16} className="text-rymora-accent/20" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                      <Star size={16} className="fill-rymora-accent text-rymora-accent" />
                    </div>
                  </div>
                )}
              </div>

              <p className="text-slate-300 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
