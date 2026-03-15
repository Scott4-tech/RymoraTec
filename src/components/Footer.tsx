import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white">
      {/* CTA Section */}
      <div className="py-20 border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Want to be our next success story?</h2>
          <p className="text-slate-400 mb-8">Join the growing list of brands that trust Rymora Technologies for their digital transformation.</p>
          <HashLink 
            to="/#contact" 
            smooth
            className="bg-rymora-accent hover:bg-white text-slate-900 px-8 py-3 rounded-lg font-bold transition-all inline-block"
          >
            Let's Work Together
          </HashLink>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-rymora-accent/10 flex items-center justify-center overflow-hidden border border-rymora-accent/20 group-hover:border-rymora-accent/50 transition-all">
                <img 
                  src="/logo.jpeg" 
                  alt="Rymora Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Rymora<span className="text-rymora-accent">Technologies</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building modern, fast, and intelligent digital experiences — from web to AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-rymora-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-rymora-accent transition-colors"><Linkedin size={20} /></a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><HashLink to="/#" smooth className="hover:text-rymora-accent transition-colors">Home</HashLink></li>
              <li><HashLink to="/#about" smooth className="hover:text-rymora-accent transition-colors">About Us</HashLink></li>
              <li><HashLink to="/#services" smooth className="hover:text-rymora-accent transition-colors">Services</HashLink></li>
              <li><HashLink to="/#contact" smooth className="hover:text-rymora-accent transition-colors">Contact</HashLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/ict-solutions" className="hover:text-rymora-accent transition-colors">ICT Solutions</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-rymora-accent transition-colors">Cybersecurity</Link></li>
              <li><Link to="/networking" className="hover:text-rymora-accent transition-colors">Networking</Link></li>
              <li><HashLink to="/#contact" smooth className="hover:text-rymora-accent transition-colors">Printing & Design</HashLink></li>
              <li>Custom Software</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-rymora-accent" />
                <a href="mailto:info@rymora.co.zw" className="hover:text-rymora-accent transition-colors">info@rymora.co.zw</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rymora-accent" />
                <a href="tel:+263789057818" className="hover:text-rymora-accent transition-colors">+263 78 905 7818</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rymora-accent" />
                <a href="tel:+263789185273" className="hover:text-rymora-accent transition-colors">+263 78 918 5273</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-rymora-accent" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-8 border-t border-white/5 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-6">
          © 2026 <span className="text-rymora-accent font-medium">Rymora Technologies</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
