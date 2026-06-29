import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Monitor, ShieldCheck, Network, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const services = [
  {
    subtitle: "Enterprise ICT",
    title: "ICT Solutions",
    description: "Comprehensive IT management and support tailored to your business needs. AI-driven infrastructure for the modern age.",
    icon: <Monitor size={64} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    cta: "See what's possible",
    accent: "#a855f7",
    path: "/ict-solutions"
  },
  {
    subtitle: "Security First",
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced threat detection and prevention. Unleash heavy-duty defense.",
    icon: <ShieldCheck size={64} />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    cta: "Explore the benefits",
    accent: "#a855f7",
    path: "/cybersecurity"
  },
  {
    subtitle: "Connected World",
    title: "Networking",
    description: "Building robust, scalable network solutions for seamless connectivity. The next era of computing starts here.",
    icon: <Network size={64} />,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    cta: "Get a first look",
    accent: "#a855f7",
    path: "/networking"
  },
  {
    subtitle: "On-Demand SLA",
    title: "IT Support as a Service",
    description: "Enterprise-grade IT helpdesk, proactive network monitoring, hardware lifecycles, and user setup optimization.",
    icon: <Headphones size={64} />,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    cta: "Secure support",
    accent: "#a855f7",
    path: "/it-support"
  }
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 50,
    restDelta: 0.001,
    mass: 0.5
  });

  // Stepped rotation: Snap to 0, -90, -180, -270
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.15, 0.25, 0.4, 0.5, 0.65, 0.75, 0.9, 1],
    [0, 0, -90, -90, -180, -180, -270, -270, -270]
  );

  return (
    <section id="services" className="relative bg-[#080809] border-t border-white/[0.04]">
      {/* Desktop View: Grid of Divs */}
      <div className="hidden md:block py-16 md:py-24 lg:py-20 bg-[#080809] relative overflow-hidden text-left">
        {/* Background elements for desktop */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.01] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[#8e8e93] text-[15px] font-mono tracking-[0.2em] uppercase mb-4"
            >
              Enterprise Offerings
            </motion.div>
            <h2 className="font-serif text-4xl font-normal text-white mb-6 tracking-tight">
              Our Core Capabilities
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light max-w-xl leading-relaxed">
              We engineer secure, sovereign technology platforms and networks optimized for absolute availability and SLA responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#111113]/50 border border-white/[0.06] hover:border-[#8827DD]/40 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(136,39,221,0.06)]"
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <div className="mb-6 text-[#8e8e93] group-hover:text-[#a75bf5] transition-colors duration-300">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 30 })}
                    </div>
                    <span className="text-zinc-500 text-[12px] font-mono tracking-[0.2em] uppercase mb-2 block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-serif font-normal text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    {service.path.startsWith('#') ? (
                      <HashLink 
                        to={`/${service.path}`}
                        smooth
                        className="text-[#8e8e93] group-hover:text-white font-medium text-base inline-flex items-center gap-1.5 transition-all group/btn cursor-pointer"
                      >
                        <span>{service.cta}</span>
                        <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </HashLink>
                    ) : (
                      <Link 
                        to={service.path}
                        className="text-[#8e8e93] group-hover:text-white font-medium text-xs inline-flex items-center gap-1.5 transition-all group/btn cursor-pointer"
                      >
                        <span>{service.cta}</span>
                        <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View: 3D Cube */}
      <div ref={containerRef} className="md:hidden relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#080809]">
          {/* Background Glow */}
          <motion.div 
            className="absolute w-[300px] h-[300px] rounded-full opacity-5 pointer-events-none blur-[100px] bg-[#8827DD]"
          />

          <div className="text-center mb-12 z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[#8e8e93] text-[12.5px] font-mono tracking-[0.2em] uppercase mb-4"
            >
              Our Core Services
            </motion.div>
            <h2 className="text-2xl font-serif font-normal text-white mb-2 tracking-tight">Our Capabilities</h2>
          </div>

          {/* 3D Cube Container */}
          <div className="relative w-full max-w-[260px] aspect-square perspective-[3000px] z-20 flex items-center justify-center">
            <motion.div 
              style={{ 
                rotateX,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full"
            >
              {services.map((service, index) => {
                const rotation = index * 90;
                return (
                  <div
                    key={service.title}
                    style={{
                      transform: `rotateX(${rotation}deg) translateZ(130px)`,
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    className="flex items-center justify-center p-2"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/[0.06] shadow-sm bg-[#111113] group">
                      <div className="w-full h-full flex items-center justify-center p-8">
                         <div className="relative">
                            <div className="absolute inset-0 bg-[#8827DD]/10 blur-2xl rounded-full" />
                            <div className="relative p-6 rounded-2xl border border-white/5 bg-[#080809] text-white">
                              {service.icon}
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile Text (Outside Cube) */}
          <div className="mt-12 px-8 text-center z-30 w-full h-64 relative">
            {services.map((service, index) => (
              <ActiveServiceText 
                key={service.title} 
                service={service} 
                index={index} 
                progress={smoothProgress} 
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-500">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActiveServiceText = ({ service, index, progress }: { service: any; index: number; progress: any; key?: React.Key }) => {
  const start = index * 0.25;
  const end = start + 0.25;
  
  const opacity = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [20, 0, 0, -20]
  );

  const pointerEvents = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    ["none", "auto", "auto", "none"]
  );

  return (
    <motion.div 
      style={{ 
        opacity, 
        y, 
        position: "absolute", 
        left: 0, 
        right: 0, 
        top: 0,
        pointerEvents: pointerEvents as any
      }}
      className="flex flex-col items-center font-sans"
    >
      <span className="text-zinc-500 text-[12.5px] font-mono tracking-[0.2em] uppercase mb-2">
        {service.subtitle}
      </span>
      <h3 className="text-xl font-serif font-normal text-white mb-3">{service.title}</h3>
      <p className="text-zinc-400 text-base leading-relaxed font-light mb-6 px-4 line-clamp-3">{service.description}</p>
      {service.path.startsWith('#') ? (
        <HashLink 
          to={`/${service.path}`}
          smooth
          className="bg-white text-black hover:bg-[#8827DD] hover:text-white px-8 py-2.5 rounded-full font-medium text-s shadow-sm transition-all"
        >
          {service.cta}
        </HashLink>
      ) : (
        <Link 
          to={service.path}
          className="bg-white text-black hover:bg-[#8827DD] hover:text-white px-8 py-2.5 rounded-full font-medium text-s shadow-sm transition-all"
        >
          {service.cta}
        </Link>
      )}
    </motion.div>
  );
};

export default Services;