/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  Globe, 
  Scale, 
  Heart,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const stats = [
    { label: "50,000+ US Freelancers Protected", icon: Users },
    { label: "All 50 States Compliant", icon: Globe },
    { label: "11 Years Legal Experience", icon: Scale },
    { label: "100% Free Forever", icon: Heart },
  ];

  const trustSignals = [
    "Plain English — no legal jargon",
    "Built for US independent contractors",
    "CA and NY compliant"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-8 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 hero-grain opacity-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              About FreelanceContractHub
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-display italic"
            >
              "Every freelancer deserves a solid contract — regardless of budget."
            </motion.p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 px-4 sm:px-8 border-b border-slate-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="sticky top-32">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg" 
                  alt="Jessica Park" 
                  className="w-full aspect-square object-cover rounded-[32px] border-8 border-slate-50 shadow-xl"
                />
                <div className="mt-6 text-center md:text-left">
                  <h2 className="text-2xl font-display font-bold text-charcoal">Jessica Park</h2>
                  <p className="text-purple font-bold text-xs uppercase tracking-widest mt-1">Legal Specialist & Founder</p>
                </div>
              </div>
            </div>
            
            <div className="flex-grow space-y-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-xl text-charcoal leading-relaxed font-medium">
                  Jessica Park spent 11 years as a paralegal specializing in independent contractor agreements across New York and California.
                </p>
                <p className="text-charcoal/70 leading-relaxed py-4 border-l-4 border-purple pl-8 italic">
                  "After seeing countless freelancers get burned by verbal agreements and handshake deals, I built FreelanceContractHub to give every freelancer access to solid, plain-English contracts — for free."
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  The freelance economy is growing, but the legal protection available to independent contractors hasn't kept up. Most freelancers are left choosing between expensive lawyer-drafted agreements or risky DIY templates they don't fully understand. 
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  We believe that professional protection should be a baseline, not a luxury. That's why FreelanceContractHub focuses on "plain English" legal language—ensuring both you and your client know exactly what you're agreeing to.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-charcoal text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="space-y-4 pt-8">
                <h3 className="text-xs font-bold text-slate uppercase tracking-widest">Our Commitment</h3>
                <div className="flex flex-wrap gap-3">
                  {trustSignals.map((signal, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-purple/5 text-purple rounded-full text-xs font-bold border border-purple/10">
                      <CheckCircle2 className="w-4 h-4" />
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-24 px-4 sm:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-500 mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-bold text-charcoal">Legal Disclaimer</h2>
            <p className="text-charcoal/60 text-sm leading-relaxed max-w-2xl mx-auto font-medium uppercase tracking-tight">
              FreelanceContractHub is not a law firm. The information and templates provided on this website do not constitute legal advice. All contract templates are for informational purposes only. We strongly recommend that you consult with a licensed attorney for legal advice specific to your business and state laws.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
