/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Contact Us | FreelanceContractHub.com</title>
        <meta name="description" content="Have questions about our freelance contract generator? Get in touch with the FreelanceContractHub team. We are here to help US freelancers with professional agreements." />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow">
        {/* Section 1 — Heading */}
        <section className="relative py-24 px-4 sm:px-8 bg-charcoal text-white overflow-hidden text-center">
          <div className="absolute inset-0 hero-grain opacity-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-display"
            >
              Have a question or suggestion? We would love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Section 2 — Contact Form */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-xl shadow-charcoal/5">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-charcoal uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-purple focus:ring-4 focus:ring-purple/10 outline-none transition-all font-sans"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-charcoal uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-purple focus:ring-4 focus:ring-purple/10 outline-none transition-all font-sans"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-charcoal uppercase tracking-widest mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-purple focus:ring-4 focus:ring-purple/10 outline-none transition-all font-sans"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-charcoal uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-purple focus:ring-4 focus:ring-purple/10 outline-none transition-all font-sans resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-purple text-white rounded-2xl font-bold text-lg hover:bg-charcoal transition-all shadow-lg shadow-purple/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Section 3 — Info Box */}
        <section className="pb-12 px-4 sm:px-8">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center flex items-center justify-center gap-4">
              <div className="w-10 h-10 bg-purple/10 rounded-full flex items-center justify-center text-purple">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-charcoal/70 font-medium">
                Prefer email? Write to us at: <a href="mailto:support@freelancecontracthub.com" className="text-purple font-bold hover:underline">support@freelancecontracthub.com</a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-charcoal/60 underline-offset-4">
              <div className="space-y-2">
                <div className="font-bold text-charcoal uppercase tracking-widest text-[10px]">Headquarters</div>
                <p>340 Pine Street, Suite 800,<br />San Francisco, CA 94104</p>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-charcoal uppercase tracking-widest text-[10px]">Direct Contact</div>
                <p>Phone: +1 (415) 555-0192</p>
                <p>Email: support@freelancecontracthub.com</p>
                <p>Founded: 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — SEO Text */}
        <section className="py-12 px-4 sm:px-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate font-bold uppercase tracking-widest leading-relaxed">
            Contact the team behind FreelanceContractHub — a free freelance contract generator for the USA.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
