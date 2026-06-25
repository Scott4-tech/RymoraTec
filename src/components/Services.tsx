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
    accent: "#00d2ff",
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
    accent: "#3b82f6",
    path: "/networking"
  },
  {
    subtitle: "On-Demand SLA",
    title: "IT Support as a Service",
    description: "Enterprise-grade IT helpdesk, proactive network monitoring, hardware lifecycles, and user setup optimization.",
    icon: <Headphones size={64} />,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    cta: "Secure support",
    accent: "#10b981",
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
  
  const glowColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75],
    ["rgba(0, 210, 255, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(16, 185, 129, 0.5)"]
  );

  return (
    <section id="services" className="relative">
      {/* Desktop View: Grid of Divs */}
      <div className="hidden md:block py-32 bg-[#020617] relative overflow-hidden">
        {/* Background elements for desktop */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rymora-accent/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-rymora-accent">Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We provide cutting-edge technology solutions designed to scale with your business and secure your digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 p-8 rounded-none overflow-hidden transition-all duration-500 hover:border-rymora-accent/50"
              >
                {/* Hover Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img 
                    src={service.image} 
                    alt="" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 text-rymora-accent group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 48 })}
                  </div>
                  <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rymora-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  {service.path.startsWith('#') ? (
                    <HashLink 
                      to={`/${service.path}`}
                      smooth
                      className="flex items-center gap-2 text-rymora-accent font-bold text-sm group/btn cursor-pointer"
                    >
                      <span>{service.cta}</span>
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </HashLink>
                  ) : (
                    <Link 
                      to={service.path}
                      className="flex items-center gap-2 text-rymora-accent font-bold text-sm group/btn cursor-pointer"
                    >
                      <span>{service.cta}</span>
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Bottom Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 transition-all duration-500 w-0 group-hover:w-full"
                  style={{ backgroundColor: service.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View: 3D Cube */}
      <div ref={containerRef} className="md:hidden relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
          {/* Background Glow */}
          <motion.div 
            style={{ backgroundColor: glowColor }}
            className="absolute w-[300px] h-[300px] rounded-full opacity-30 pointer-events-none blur-[100px]"
          />

          <div className="text-center mb-12 z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Our <span className="text-rymora-accent">Services</span></h2>
          </div>

          {/* 3D Cube Container */}
          <div className="relative w-full max-w-[300px] aspect-square perspective-[3000px] z-20 flex items-center justify-center">
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
                      transform: `rotateX(${rotation}deg) translateZ(150px)`,
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    className="flex items-center justify-center p-2"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-none border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-[#020617] group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
                        referrerPolicy="no-referrer"
                      />
                      <div className="w-full h-full flex items-center justify-center p-8">
                         <div className="relative">
                           <div className="absolute inset-0 bg-rymora-accent/20 blur-2xl rounded-full" />
                           <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 text-rymora-accent">
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
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-rymora-accent to-transparent" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
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
      className="flex flex-col items-center"
    >
      <span className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
        {service.subtitle}
      </span>
      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed px-4 line-clamp-3">{service.description}</p>
      {service.path.startsWith('#') ? (
        <HashLink 
          to={`/${service.path}`}
          smooth
          className="bg-rymora-accent text-slate-900 px-10 py-3 rounded-full font-bold text-sm shadow-lg shadow-rymora-accent/20"
        >
          {service.cta}
        </HashLink>
      ) : (
        <Link 
          to={service.path}
          className="bg-rymora-accent text-slate-900 px-10 py-3 rounded-full font-bold text-sm shadow-lg shadow-rymora-accent/20"
        >
          {service.cta}
        </Link>
      )}
    </motion.div>
  );
};

export default Services;