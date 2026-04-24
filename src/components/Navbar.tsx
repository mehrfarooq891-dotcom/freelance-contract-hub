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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-display font-bold text-charcoal tracking-tight">
              FreelanceContract<span className="text-purple">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-charcoal/70 hover:text-purple transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-charcoal/70 hover:text-purple transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-charcoal/70 hover:text-purple transition-colors">Contact</Link>
          <Link 
            to="/generator" 
            className="btn-purple !text-sm !py-2 !px-5"
          >
            Create Free Contract
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-charcoal/70 hover:text-purple" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block px-3 py-2 text-base font-medium text-charcoal/70 hover:text-purple" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium text-charcoal/70 hover:text-purple" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link 
            to="/generator" 
            className="block w-full text-center px-4 py-3 bg-purple text-white font-semibold rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Create Free Contract
          </Link>
        </div>
      )}
    </nav>
  );
}
