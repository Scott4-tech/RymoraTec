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
    content: "The custom software work they did for our system upgrade was phenomenal. They truly understood our vision and translated it into a stunning digital implementation.",
    avatar: "/Leo.jpg",
    rating: 5
  },
  {
    name: "Raymond Matsenhura",
    role: "IT Specialist, IDSS",
    content: "Their cybersecurity solutions gave us the peace of mind we needed. Professional, knowledgeable, and always available when we need them.",
    avatar: "/rayimg.jpeg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-20 bg-[#080809] border-t border-white/[0.04] relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        <div className="mb-12 md:mb-16 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2.5 h-2.5 bg-[#8827DD] shrink-0 rounded-[1px] animate-pulse" />
            <span className="text-[13px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] font-medium">
              Success Stories
            </span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6 tracking-tight">
            Client Feedback
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans font-light max-w-xl leading-relaxed">
            Leading Zimbabwean enterprises trust Rymora to power and secure their critical digital architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 bg-[#111113]/50 border border-white/[0.06] hover:border-[#8827DD]/30 hover:shadow-[0_0_20px_rgba(136,39,221,0.04)] rounded-2xl relative group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#a75bf5]/10 transition-colors">
                  <Quote size={32} />
                </div>
                
                <div className="flex gap-1 mb-5">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#a75bf5] text-[#a75bf5] transition-colors" />
                  ))}
                </div>

                <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.04] pt-5">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-8 h-8 rounded-full object-cover border border-white/[0.08]"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="text-[15px] font-bold text-white transition-colors">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-[12px] font-mono uppercase tracking-wider mt-0.5">{testimonial.role}</p>
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