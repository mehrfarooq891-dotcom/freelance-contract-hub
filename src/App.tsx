/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import GeneratorPage from './pages/GeneratorPage';
import About from './pages/About';
import FAQ from './pages/FAQ';
import LegalDisclaimer from './pages/LegalDisclaimer';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Free Freelance Contract Generator | FreelanceContractHub.com</title>
          <meta name="description" content="Create a professional freelance contract in 60 seconds. No login, no lawyer, instant PDF. Built for US freelancers. 100% free." />
          <meta name="keywords" content="freelance contract generator, independent contractor agreement USA, free freelance contract template" />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/contract/:type" element={<GeneratorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          {/* Fallback to home for now */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
