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
  Palette, 
  Search, 
  Code, 
  Share2, 
  PenTool, 
  Video, 
  Camera, 
  UserCheck,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTRACT_TYPES = [
  { id: 'graphic-design', title: 'Graphic Design', icon: Palette },
  { id: 'seo-consultant', title: 'SEO Consultant', icon: Search },
  { id: 'web-developer', title: 'Web Developer', icon: Code },
  { id: 'social-media', title: 'Social Media Manager', icon: Share2 },
  { id: 'copywriter', title: 'Copywriter', icon: PenTool },
  { id: 'video-editor', title: 'Video Editor', icon: Video },
  { id: 'photographer', title: 'Photographer', icon: Camera },
  { id: 'virtual-assistant', title: 'Virtual Assistant', icon: UserCheck },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="grain" />
      <div className="accent-shape" />
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-[60px] pt-24 pb-16 text-center relative bg-navy text-white overflow-hidden grainy">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/10 blur-3xl -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Create a Freelance Contract<br />in 60 Seconds
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-[700px] mx-auto mb-10 leading-relaxed"
            >
              No lawyer. No signup. No stress. Just a solid contract that protects your work and gets you paid.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-12"
            >
              <Link 
                to="/generator" 
                className="px-10 py-5 bg-teal text-white font-bold rounded-full hover:bg-teal-hover transition-all text-xl shadow-lg shadow-teal/20"
              >
                Build My Contract Free →
              </Link>

              <div className="trust-bar-minimal">
                <div className="trust-badge">
                  <span>✓</span> No login required
                </div>
                <div className="trust-badge">
                  <span>✓</span> Instant PDF download
                </div>
                <div className="trust-badge">
                  <span>✓</span> 50,000+ US Freelancers
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-navy/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-[60px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-slate">Protecting your business shouldn't be complicated.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {[
                { step: 1, title: 'Tell us about your project', desc: 'Answer a few simple questions about your work and client.', icon: Pencil },
                { step: 2, title: 'We build your contract', desc: 'Our engine generates a legally-solid agreement in plain English.', icon: FileText },
                { step: 3, title: 'Download your PDF', desc: 'Get your professional contract instantly. No email required.', icon: Download },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-teal/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-[11px] font-bold text-teal uppercase tracking-widest mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Types Grid */}
        <section id="contract-types" className="px-4 sm:px-[60px] pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTRACT_TYPES.map((type) => (
                <Link 
                  key={type.id}
                  to={`/contract/${type.id}`}
                  className="card-minimal group"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {getEmojiForType(type.id)}
                  </div>
                  <h3 className="font-sans font-bold text-[15px] mb-1">{type.title}</h3>
                  <p className="text-slate text-[12px] leading-[1.4] mb-4 flex-grow">
                    {getDescriptionForType(type.id)}
                  </p>
                  <div className="text-teal text-xs font-bold uppercase tracking-wider mt-auto">
                    Create Free →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold">100% Free Forever</h3>
                <p className="text-slate text-sm">No hidden fees, no subscriptions, no credit card required. Our mission is to protect freelancers.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold">Plain English Contracts</h3>
                <p className="text-slate text-sm">We've removed the "heretofore" and "whereas". Our contracts are easy to read and legally solid.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold">Built for US Law</h3>
                <p className="text-slate text-sm">Specifically designed for independent contractors in all 50 US states, including CA and NY compliance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function getEmojiForType(id: string) {
  const emojis: Record<string, string> = {
    'graphic-design': '🎨',
    'seo-consultant': '🔍',
    'web-developer': '💻',
    'social-media': '📱',
    'copywriter': '✍️',
    'video-editor': '📹',
    'photographer': '📸',
    'virtual-assistant': '🤖'
  };
  return emojis[id] || '📄';
}

function getDescriptionForType(id: string) {
  const descriptions: Record<string, string> = {
    'graphic-design': 'IP transfers, revision limits, and portfolio rights.',
    'web-developer': 'Code ownership, hosting, and browser testing.',
    'copywriter': 'Commercial rights and editorial approval cycles.',
    'seo-consultant': 'Reporting schedules and ranking disclaimers.',
    'social-media': 'Ad spend management and password security.',
    'video-editor': 'Raw footage rights and music licensing.',
    'photographer': 'Usage duration and high-res file delivery.',
    'virtual-assistant': 'Confidentiality and weekly hourly caps.'
  };
  return descriptions[id] || 'Professional freelance contract template.';
}
