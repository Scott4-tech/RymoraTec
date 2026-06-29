/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ICTSolutions from './pages/ICTSolutions';
import Cybersecurity from './pages/Cybersecurity';
import Networking from './pages/Networking';
import ITSupport from './pages/ITSupport';
import EnpassPage from './pages/Enpass';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#080809]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ict-solutions" element={<ICTSolutions />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/enpass" element={<EnpassPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Premium blurry scroll fade overlay at the bottom of the viewport */}
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080809] via-[#080809]/30 to-transparent backdrop-blur-[2px] pointer-events-none z-50 border-t border-white/[0.01]" />
      </div>
    </Router>
  );
}
