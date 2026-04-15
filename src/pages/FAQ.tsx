/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQS = [
  {
    q: "Is this contract legally binding in the USA?",
    a: "Yes. When signed by both parties, this contract is a legally binding agreement in the United States. It covers essential elements like offer, acceptance, and consideration."
  },
  {
    q: "Do I need a lawyer to use this?",
    a: "For most standard freelance projects, no. These templates are designed to cover 95% of common freelance scenarios. However, for high-value projects (over $10k) or complex IP arrangements, we always recommend a brief review by an attorney."
  },
  {
    q: "Can I edit the contract after downloading?",
    a: "Yes! You can download it as a PDF, or copy the text directly to paste into Word, Google Docs, or your favorite editor for further customization."
  },
  {
    q: "Is my information private?",
    a: "Absolutely. We do not store any of the information you enter into the generator. All processing happens locally in your browser, and once you close the tab, the data is gone."
  },
  {
    q: "What if my client is in a different state?",
    a: "The contract includes a 'Governing Law' clause where you can specify which state's laws apply to the agreement. Usually, this is the state where the work is being performed or where the freelancer is based."
  },
  {
    q: "Does this cover intellectual property rights?",
    a: "Yes. You can choose between 'Work-for-Hire' (client owns everything) or 'License' (you keep ownership, client gets rights to use). This is one of the most important parts of any freelance contract."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      
      <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-navy/5 shadow-sm">
                <h3 className="text-xl font-display font-bold mb-4">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-teal/5 rounded-3xl border border-teal/10 text-center">
            <h4 className="font-display font-bold mb-2">Still have questions?</h4>
            <p className="text-slate-500 text-sm mb-6">We're here to help you navigate the freelance world.</p>
            <a href="mailto:support@freelancecontracthub.com" className="text-teal font-bold hover:underline">Contact Support</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
