/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-navy/5 px-4 sm:px-[60px] py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-sans font-bold text-navy tracking-tight">
              FreelanceContract<span className="text-teal">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#contract-types" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">Contract Types</Link>
          <Link to="/faq" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">FAQ</Link>
          <Link 
            to="/generator" 
            className="btn-teal-minimal"
          >
            Create Free Contract
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-b border-navy/5 px-4 pt-2 pb-6 space-y-2">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-navy/70 hover:text-navy" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/#contract-types" className="block px-3 py-2 text-base font-medium text-navy/70 hover:text-navy" onClick={() => setIsOpen(false)}>Contract Types</Link>
          <Link to="/faq" className="block px-3 py-2 text-base font-medium text-navy/70 hover:text-navy" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link 
            to="/generator" 
            className="block w-full text-center px-4 py-3 bg-teal text-white font-semibold rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Create Free Contract
          </Link>
        </div>
      )}
    </nav>
  );
}
