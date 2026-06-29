import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Compass, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#080809] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#8827dd1a,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header/Logo */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <Link to="/" className="flex items-center gap-2 group select-none">
          <svg
            className="w-5 h-5 text-[#a75bf5] group-hover:scale-105 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L14.5 9.5H24L16.25 15.5L18.75 25L12 19L5.25 25L7.75 15.5L0 9.5H9.5L12 0Z" />
          </svg>
          <span className="font-sans font-medium tracking-tight text-lg text-white">
            Rymoratech
          </span>
        </Link>
        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.2em] select-none">
          Status Code: 404
        </span>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 z-10 relative">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Animated Glow Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 shadow-inner"
          >
            <ShieldAlert size={12} className="text-[#a75bf5] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a75bf5]">
              Resource Not Found
            </span>
          </motion.div>

          {/* Huge Elegant 404 display with blur background */}
          <div className="relative select-none">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[120px] sm:text-[150px] font-serif font-light leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 select-none drop-shadow-[0_10px_30px_rgba(136,39,221,0.1)]"
            >
              404
            </motion.h1>
            {/* Absolute backdrop glow */}
            <div className="absolute inset-0 bg-[#8827dd]/10 blur-[80px] -z-10 rounded-full w-40 h-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
          </div>

          {/* Error Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-white tracking-tight">
              Lost in Sovereign Space
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
              The page you are looking for has been moved, reconfigured, or is currently encrypted/unavailable under our SLA perimeter.
            </p>
          </motion.div>

          {/* Navigation Options */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
          >
            <Link
              to="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white text-black font-medium text-xs hover:bg-[#a75bf5] hover:text-white transition-all flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_20px_rgba(136,39,221,0.25)]"
            >
              <Home size={13} />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-black border border-white/10 hover:border-white/20 text-white font-light text-xs transition-colors flex items-center justify-center gap-2 group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Quick Discover Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-8 border-t border-white/[0.04] flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono tracking-wider text-zinc-500 uppercase"
          >
            <Link to="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link>
            <span className="text-zinc-800">•</span>
            <Link to="/it-support" className="hover:text-white transition-colors">IT SLA Support</Link>
            <span className="text-zinc-800">•</span>
            <Link to="/enpass" className="hover:text-white transition-colors">Enpass Partner</Link>
          </motion.div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full text-center py-6 z-10">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          © 2026 Rymoratech Technologies. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
