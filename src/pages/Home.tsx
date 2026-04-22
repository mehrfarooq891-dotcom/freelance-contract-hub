/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Pencil, 
  FileText, 
  Download, 
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTRACT_TYPES = [
  { id: 'graphic-design', title: 'Graphic Design', emoji: '🎨', desc: 'IP transfers, revision limits, portfolio rights' },
  { id: 'seo-consultant', title: 'SEO Consultant', emoji: '🔍', desc: 'Reporting schedules and ranking disclaimers' },
  { id: 'web-developer', title: 'Web Developer', emoji: '💻', desc: 'Code ownership, hosting, browser testing' },
  { id: 'social-media', title: 'Social Media Manager', emoji: '📱', desc: 'Ad spend management and password security' },
  { id: 'copywriter', title: 'Copywriter', emoji: '✍️', desc: 'Commercial rights and editorial approval' },
  { id: 'video-editor', title: 'Video Editor', emoji: '📹', desc: 'Raw footage rights and music licensing' },
  { id: 'photographer', title: 'Photographer', emoji: '📸', desc: 'Usage duration and high-res file delivery' },
  { id: 'virtual-assistant', title: 'Virtual Assistant', emoji: '🤖', desc: 'Confidentiality and weekly hourly caps' },
];

const FAQ_DATA = [
  { 
    q: "Are these contracts legally binding?", 
    a: "Yes. These templates are based on standard US contract law and include necessary clauses for independent contractors such as scope of work, payment terms, and IP rights." 
  },
  { 
    q: "Which states are covered?", 
    a: "All 50 US states are covered. Our generator includes specific considerations for strict states like California (AB5 compliance) and New York." 
  },
  { 
    q: "Can I customize the contract?", 
    a: "Absolutely. The wizard allows you to input specific project details, revision limits, and custom payment schedules tailored to your project." 
  },
  { 
    q: "Do I need a lawyer to review it?", 
    a: "While our templates are legally solid for most freelance projects, for very high-stakes or complex enterprise deals (e.g., $50k+), we always recommend a brief attorney review." 
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-8 pt-20 pb-24 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 hero-grain pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="badge-trust mb-8"
            >
              ✓ 50,000+ US Freelancers Protected
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-6 leading-tight"
            >
              Create a Freelance Contract <br className="hidden md:block" /> in 60 Seconds
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-charcoal/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              No lawyer. No signup. No stress. Just a solid contract that protects your work and gets you paid.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-8"
            >
              <Link 
                to="/generator" 
                className="btn-purple text-xl px-12 py-5"
              >
                Build My Contract Free →
              </Link>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-charcoal/40 uppercase tracking-widest">
                <span className="flex items-center gap-2">✓ No login required</span>
                <span className="flex items-center gap-2">✓ Instant PDF download</span>
                <span className="flex items-center gap-2">✓ All 50 US States</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-8 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-charcoal/60">Professional protection in three simple steps.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {[
                { step: 1, title: 'Tell us about your project', desc: 'Answer a few simple questions about your work and client', icon: Pencil },
                { step: 2, title: 'We build your contract', desc: 'Our engine generates a legally-solid agreement in plain English', icon: FileText },
                { step: 3, title: 'Download your PDF', desc: 'Get your professional contract instantly. No email required.', icon: Download },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold text-purple uppercase tracking-[0.2em] mb-4">Step {item.step}</div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Types Grid */}
        <section id="contract-types" className="py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Choose Your Template</h2>
            <p className="text-charcoal/60">Specifically tailored for your line of work.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTRACT_TYPES.map((type) => (
              <Link key={type.id} to={`/contract/${type.id}`} className="card-contract group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform w-fit italic">{type.emoji}</div>
                <h3 className="text-lg font-display font-bold mb-2">{type.title}</h3>
                <p className="text-slate text-sm leading-snug mb-6 flex-grow">{type.desc}</p>
                <div className="text-purple text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  Create Free →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Section */}
        <section className="py-24 px-4 sm:px-8 bg-charcoal text-white rounded-[40px] mx-4 sm:mx-8 mb-24 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#7c3aed,transparent_50%)]" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-purple">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">100% Free Forever</h3>
              <p className="text-white/60 text-sm">No hidden fees, no subscriptions, no credit card required. Our mission is to protect freelancers.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-purple">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Plain English Contracts</h3>
              <p className="text-white/60 text-sm">We've removed the "heretofore" and "whereas". Easy to read and legally solid.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-purple">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Built for US Law</h3>
              <p className="text-white/60 text-sm">All 50 states including CA (AB5) and NY compliance. Specifically designed for US-based freelancers.</p>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-12 rounded-[32px]">
            <img 
              src="https://randomuser.me/api/portraits/women/33.jpg" 
              alt="Jessica Park" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg shrink-0"
            />
            <div className="flex-grow">
              <div className="text-purple font-bold uppercase tracking-widest text-xs mb-4">Meet our specialist</div>
              <p className="text-xl font-display font-bold text-charcoal mb-4 italic leading-snug">
                "Every freelancer deserves a solid contract — regardless of budget."
              </p>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                Jessica Park spent 11 years as a paralegal specializing in independent contractor agreements across New York and California. After seeing countless freelancers get burned by verbal agreements and handshake deals, she built FreelanceContractHub to give every freelancer access to solid, plain-English contracts — for free.
              </p>
              <div>
                <div className="font-bold text-charcoal">Jessica Park</div>
                <div className="text-charcoal/60 text-xs font-bold uppercase tracking-wider">Legal Specialist & Founder</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-8 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-4 sm:px-8 text-center bg-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 hero-grain" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Stop working without a contract.<br className="hidden md:block"/> Protect yourself starting today.</h2>
            <Link to="/generator" className="inline-block bg-white text-purple px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
              Create My Free Contract →
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 px-4 sm:px-8 bg-white text-center">
          <p className="text-[10px] text-slate uppercase tracking-[0.2em] max-w-2xl mx-auto font-medium leading-relaxed">
            FreelanceContractHub is not a law firm. Templates are for informational purposes only. Use of this service does not constitute an attorney-client relationship.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-charcoal">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-purple" /> : <Plus className="w-5 h-5 text-slate-400 group-hover:text-purple transition-colors" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-charcoal/60 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
