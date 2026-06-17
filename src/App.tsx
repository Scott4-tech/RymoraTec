/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import ICTSolutions from './pages/ICTSolutions';
import Cybersecurity from './pages/Cybersecurity';
import Networking from './pages/Networking';
import PrintingDesign from './pages/PrintingDesign';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ict-solutions" element={<ICTSolutions />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/printing-design" element={<PrintingDesign />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
