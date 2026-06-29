import React from 'react';
import { motion } from 'motion/react';
import { HashLink } from 'react-router-hash-link';

const CountUp = ({ to, duration = 1.5, decimals = 0 }: { to: number; duration?: number; decimals?: number }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && active) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!active) return;
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(progress * to);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [to, duration]);

  return <span ref={elementRef}>{count.toFixed(decimals)}</span>;
};

const Hero = () => {
  const stats = [
    {
      value: <><CountUp to={100} />+</>,
      label: "Satisfied Clients",
      desc: "Delivered through Rymora's growth and adaptation."
    },
    {
      value: <><CountUp to={99.9} decimals={1} />%</>,
      label: "SLA Uptime",
      desc: "Guaranteed continuous enterprise system availability."
    },
    {
      value: <><CountUp to={10} />M+</>,
      label: "Threats Blocked",
      desc: "Shielded by our advanced zero-trust cybersecurity operations."
    },
    {
      value: <><CountUp to={24} />/7</>,
      label: "Expert Support",
      desc: "Continuous managed helpdesk monitoring and rapid resolution dispatch."
    }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-[#080809] font-sans flex flex-col justify-center items-center">
      {/* Background Subtle Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[25%] w-[400px] h-[400px] bg-[#f43f5e]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl lg:max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-left">
        
        {/* Horizontal Split Layout for Desktop / Stacked for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Heading and Badge */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Category Label with Purple Square - EXACT COPY of Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              {/* Small Purple Square */}
              <div className="w-2.5 h-2.5 bg-action-blue shrink-0 rounded-[1px]" />
              <span className="font-mono text-[13.5px] uppercase tracking-[0.25em] text-[#8e8e93] font-medium">
                IMPACT
              </span>
            </motion.div>

            {/* Monumental Display Headline in Serif - EXACT COPY of Image 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-[64px] xl:text-[72px] font-normal text-white leading-[1.08] tracking-tight max-w-3xl"
            >
              When strategy becomes measurable impact.
            </motion.h1>
          </div>

          {/* Right Column: Wireframe Grid and Floral Art - EXACT COPY of Image 1 */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-[1.8/1] sm:aspect-[2.2/1] lg:aspect-[1.5/1] bg-black border border-white/[0.08] rounded-2xl relative overflow-hidden shadow-2xl group"
            >
              {/* Grid lines overlay */}
              <div className="absolute inset-0 tech-grid opacity-70" />

              {/* Random highlighted colored dots at grid intersections */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top row */}
                <div className="absolute top-[20%] left-[20%] w-[3px] h-[3px] bg-[#f43f5e] rounded-full shadow-[0_0_8px_#f43f5e]" />
                <div className="absolute top-[40%] left-[50%] w-[3px] h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_8px_#a855f7]" />
                <div className="absolute top-[60%] left-[80%] w-[3px] h-[3px] bg-[#a855f7] rounded-full shadow-[0_0_8px_#a855f7]" />
                <div className="absolute top-[80%] left-[30%] w-[3px] h-[3px] bg-[#f43f5e] rounded-full shadow-[0_0_8px_#f43f5e]" />
                <div className="absolute top-[30%] left-[70%] w-[3px] h-[3px] bg-[#f43f5e] rounded-full shadow-[0_0_8px_#f43f5e]" />
              </div>

              {/* Floating Organic Vector Flower Line Art overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-65 transition-opacity duration-700">
                <svg 
                  viewBox="0 0 500 250" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.75" 
                  className="w-[85%] h-[85%] text-white/50"
                  strokeDasharray="2 3"
                >
                  {/* Central flower bulb and complex orchid-like lines */}
                  <path d="M250 200 C240 180, 230 140, 250 110" />
                  <path d="M250 200 C260 180, 270 140, 250 110" />
                  
                  {/* Petal left */}
                  <path d="M250 110 C210 100, 160 110, 150 140 C145 160, 170 180, 210 160 C230 150, 245 130, 250 110" />
                  {/* Petal right */}
                  <path d="M250 110 C290 100, 340 110, 350 140 C355 160, 330 180, 290 160 C270 150, 255 130, 250 110" />
                  
                  {/* Back Petal up */}
                  <path d="M250 110 C230 70, 220 30, 250 15 C280 30, 270 70, 250 110" />
                  
                  {/* Delicate inner orchid wings */}
                  <path d="M250 110 C230 90, 190 80, 180 110 C175 125, 195 135, 220 120 C235 115, 245 110, 250 110" />
                  <path d="M250 110 C270 90, 310 80, 320 110 C325 125, 305 135, 280 120 C265 115, 255 110, 250 110" />
                  
                  {/* Flowing stem and background leaves */}
                  <path d="M250 200 C250 215, 255 240, 260 250" />
                  <path d="M250 210 C220 205, 180 215, 160 230" strokeWidth="0.5" />
                  <path d="M250 220 C280 215, 320 225, 340 240" strokeWidth="0.5" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Divider and Full-Width Stats Section - EXACT COPY of Image 1 Layout with borders */}
        <div className="border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-4 mt-12 lg:mt-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`py-8 lg:py-10 flex flex-col justify-between border-white/[0.08]
                ${idx === 0 || idx === 3 ? 'flex' : 'hidden lg:flex'}
                ${idx !== 3 ? 'lg:border-r border-b lg:border-b-0' : ''}
                px-6 lg:px-8
                ${idx === 0 ? 'lg:pl-0 max-w-sm' : ''}
                ${idx === 3 ? 'lg:pr-0' : ''}
                ${idx === 1 ? 'lg:pr-8' : ''}
              `}
            >
              <div>
                <h3 className="font-serif text-5xl lg:text-[44px] font-normal text-white mb-3">
                  {stat.value}
                </h3>
                <p className="text-white text-[17px] text-xs font-mono uppercase tracking-[0.15em] mb-1.5 font-bold">
                  {stat.label}
                </p>
                <p className="text-[#8e8e93] text-[17px] font-sans font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;