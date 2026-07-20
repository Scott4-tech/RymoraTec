import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  return (
    <>
        <Helmet>
          <title>Footer | Rymora Technologies</title>
          <link rel="canonical" href="https://rymoratech.co.zw/footer" />
        </Helmet>
    <footer className="bg-[#080809] text-white border-t border-white/[0.04] font-sans">
      
      {/* CTA Section */}
      <div className="py-16 md:py-20 lg:py-24 text-center bg-[#8827DD] relative overflow-hidden">
        {/* Subtle decorative grid background for the CTA area to feel premium */}
        <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-normal mb-4 text-white tracking-tight">
            Want to be our next success story?
          </h2>
          <p className="text-purple-100/90 text-base sm:text-lg font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Join the growing list of Zimbabwean enterprises that trust Rymora Technologies for absolute control of their IT platforms.
          </p>
          <HashLink 
            to="/#contact" 
            smooth
            className="bg-white hover:bg-black hover:text-white text-[#8827DD] text-base font-mono font-medium tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-300 inline-block cursor-pointer shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </HashLink>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
          
          {/* Brand Column */}
          <div className="space-y-6 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L14.5 9.5H24L16.25 15.5L18.75 25L12 19L5.25 25L7.75 15.5L0 9.5H9.5L12 0Z" />
              </svg>
              <span className="font-sans text-base font-medium tracking-tight text-white uppercase">
                Rymoratech
              </span>
            </Link>
            <p className="text-zinc-500 text-[15px] font-light leading-relaxed">
              Sovereign enterprise networking, zero-trust cybersecurity, and elite 24/7/365 helpdesk support.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="https://www.instagram.com/rymora_technologies?igsh=ZzJhb2U2ZjY4c3lw" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={14} /></a>
              
              <a href="https://www.linkedin.com/company/rymora-technologies/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={14} /></a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[15px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-3 text-[14px] font-light text-zinc-500">
              <li><HashLink to="/#" smooth className="hover:text-white transition-colors">Home</HashLink></li>
              <li><HashLink to="/#about" smooth className="hover:text-white transition-colors">About Us</HashLink></li>
              <li><HashLink to="/#services" smooth className="hover:text-white transition-colors">Services</HashLink></li>
              <li><HashLink to="/#contact" smooth className="hover:text-white transition-colors">Contact</HashLink></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[15px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6 font-bold">Capabilities</h4>
            <ul className="space-y-3 text-[14px] font-light text-zinc-500">
              <li><Link to="/ict-solutions" className="hover:text-white transition-colors">ICT Solutions</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/networking" className="hover:text-white transition-colors">Networking</Link></li>
              <li><Link to="/it-support" className="hover:text-white transition-colors">IT Support</Link></li>
              <li><Link to="/enpass" className="hover:text-white transition-colors">Enpass Vaults</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6 font-bold">Get in Touch</h4>
            <ul className="space-y-3 text-[14px] font-light text-zinc-500">
              <li className="flex items-center gap-2.5">
                <Mail size={12} className="text-zinc-400" />
                <a href="mailto:info@rymoratech.co.zw" className="hover:text-white transition-colors font-mono truncate">info@rymoratech.co.zw</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={12} className="text-zinc-400" />
                <a href="tel:+263789057818" className="hover:text-white transition-colors font-mono truncate">+263 78 905 7818</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={12} className="text-zinc-400 animate-bounce" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-8 border-t border-white/[0.04] text-zinc-600 text-[14px] font-mono uppercase tracking-wider">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Rymoratech Technologies. All rights reserved. Registered Zimbabwe Company.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-zinc-800">•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;