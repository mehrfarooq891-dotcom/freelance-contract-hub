/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 px-4 sm:px-8 py-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">About Us</Link>
            <Link to="/legal-disclaimer" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">Legal Disclaimer</Link>
            <Link to="/faq" className="text-[11px] text-slate font-bold uppercase tracking-widest hover:text-purple transition-colors">Support</Link>
          </div>
          <div className="text-[11px] text-slate font-bold uppercase tracking-widest">
            © 2025 FreelanceContractHub.com • Founded 2022
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] text-slate font-bold uppercase tracking-widest leading-relaxed">
          <div className="space-y-2">
            <div className="text-charcoal opacity-40">Headquarters</div>
            <p className="normal-case font-medium">340 Pine Street, Suite 800,<br />San Francisco, CA 94104</p>
          </div>
          <div className="space-y-2">
            <div className="text-charcoal opacity-40">Contact</div>
            <p className="normal-case font-medium">+1 (415) 555-0192</p>
            <p className="normal-case font-medium lowercase">support@freelancecontracthub.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
