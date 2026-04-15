/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContractWizard from '../components/ContractWizard';

export default function GeneratorPage() {
  const { type } = useParams();
  
  // Map URL slug to display name if needed
  const displayType = type ? type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">
              {displayType ? `${displayType} Contract Generator` : 'Freelance Contract Generator'}
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Complete the steps below to generate your professional freelance agreement. 
              It takes less than 60 seconds.
            </p>
          </div>
          
          <ContractWizard initialType={displayType} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
