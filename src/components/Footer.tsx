/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy/5 px-4 sm:px-[60px] py-5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
      <div className="text-[10px] text-slate max-w-[650px] leading-[1.4] text-center md:text-left">
        FreelanceContractHub.com is not a law firm. We do not provide legal advice. Contracts generated here are templates for informational purposes only. Consult a licensed attorney for legal advice specific to your situation. Laws vary by state.
      </div>
      <div className="text-[11px] text-slate font-medium whitespace-nowrap">
        © 2025 FreelanceContractHub.com
      </div>
    </footer>
  );
}
