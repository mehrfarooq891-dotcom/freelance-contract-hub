/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 px-4 sm:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
      <div className="flex items-center gap-6">
        <Link to="/about" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">About Us</Link>
        <Link to="/legal-disclaimer" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">Legal Disclaimer</Link>
        <Link to="/faq" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">Support</Link>
      </div>
      <div className="text-[11px] text-slate font-bold uppercase tracking-widest">
        © 2025 FreelanceContractHub.com
      </div>
    </footer>
  );
}
