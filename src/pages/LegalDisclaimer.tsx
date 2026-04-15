/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      
      <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl border border-navy/5 shadow-sm">
          <h1 className="text-4xl font-display font-bold mb-8">Legal Disclaimer</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="font-bold text-navy">Last Updated: April 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">1. Not a Law Firm</h2>
              <p>
                FreelanceContractHub.com is not a law firm and does not provide legal advice. The information and tools provided on this website are for informational and educational purposes only. They are not a substitute for the advice of a licensed attorney.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">2. No Attorney-Client Relationship</h2>
              <p>
                Your use of this website, including the generation of any documents, does not create an attorney-client relationship between you and FreelanceContractHub.com or any of its employees or owners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">3. Accuracy and Completeness</h2>
              <p>
                While we strive to provide high-quality templates, laws vary by state and are subject to change. FreelanceContractHub.com makes no guarantees regarding the accuracy, completeness, or legal sufficiency of any document generated through our tool.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">4. State Laws Vary</h2>
              <p>
                Freelance laws, such as California's AB5 or New York's Freelance Isn't Free Act, have specific requirements. Our templates are general in nature and may not comply with every specific state regulation. You are responsible for ensuring your contract complies with local laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">5. Recommendation for Review</h2>
              <p>
                We strongly recommend that you have any contract involving significant financial value, complex intellectual property rights, or long-term commitments reviewed by a qualified legal professional in your jurisdiction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy">6. Limitation of Liability</h2>
              <p>
                FreelanceContractHub.com shall not be liable for any damages, losses, or legal disputes arising from your use of the templates or information provided on this site. You use these tools at your own risk.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
