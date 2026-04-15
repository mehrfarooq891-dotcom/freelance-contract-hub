/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Download, Copy, CheckCircle2, Info } from 'lucide-react';
import { ContractData, US_STATES, PROJECT_TYPES } from '../types';
import { generatePDF } from '../lib/generatePDF';
import { generateContractText } from '../lib/templates';

interface WizardProps {
  initialType?: string;
}

export default function ContractWizard({ initialType }: WizardProps) {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm<ContractData>({
    defaultValues: {
      projectType: initialType || 'Graphic Design',
      pricingType: 'fixed',
      ipRights: 'work-for-hire',
      confidentiality: true,
      nonSolicitation: false,
      terminationNotice: '30',
      revisionCount: '2',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    }
  });

  const formData = watch();

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) setStep(s => Math.min(s + 1, 6));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const getFieldsForStep = (s: number) => {
    switch (s) {
      case 1: return ['freelancerName', 'freelancerEmail'];
      case 2: return ['clientName', 'clientEmail', 'clientState'];
      case 3: return ['projectType', 'projectDescription', 'deliverables', 'startDate', 'endDate'];
      case 4: return ['amount', 'paymentSchedule'];
      default: return [];
    }
  };

  const onSubmit = (data: ContractData) => {
    generatePDF(data);
    setIsComplete(true);
  };

  const copyToClipboard = () => {
    const text = generateContractText(formData);
    navigator.clipboard.writeText(text);
    alert('Contract copied to clipboard!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">Let's start with the basics</h2>
              <p className="text-slate-500">This takes about 10 seconds. Who are you?</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Your Full Name</label>
                <input 
                  {...register('freelancerName', { required: 'Name is required' })}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
                {errors.freelancerName && <span className="text-red-500 text-xs mt-1">{errors.freelancerName.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Business Name (Optional)</label>
                <input 
                  {...register('freelancerBusinessName')}
                  placeholder="e.g. JD Design Studio"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Your Email Address</label>
                <input 
                  {...register('freelancerEmail', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
                {errors.freelancerEmail && <span className="text-red-500 text-xs mt-1">{errors.freelancerEmail.message}</span>}
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">Who are you working with?</h2>
              <p className="text-slate-500">Tell us about your client.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Client Name / Company</label>
                <input 
                  {...register('clientName', { required: 'Client name is required' })}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Client Email</label>
                <input 
                  {...register('clientEmail', { required: 'Client email is required' })}
                  placeholder="client@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Client's State</label>
                <select 
                  {...register('clientState', { required: 'State is required' })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a state</option>
                  {US_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">The Work</h2>
              <p className="text-slate-500">What exactly are you building?</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Type of Work</label>
                <select 
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-white"
                >
                  {PROJECT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Project Description</label>
                <textarea 
                  {...register('projectDescription', { required: 'Description is required' })}
                  placeholder="e.g. Design a new logo and brand identity package for a food startup..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Deliverables</label>
                <textarea 
                  {...register('deliverables', { required: 'Deliverables are required' })}
                  placeholder="e.g. 1x Logo (SVG, PNG), 1x Brand Guidelines PDF"
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Start Date</label>
                  <input type="date" {...register('startDate')} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">End Date</label>
                  <input type="date" {...register('endDate')} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">Getting Paid</h2>
              <p className="text-slate-500">Let's talk numbers.</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" value="fixed" {...register('pricingType')} className="hidden peer" />
                  <div className="p-4 border-2 border-slate-200 rounded-xl peer-checked:border-teal peer-checked:bg-teal/5 transition-all text-center">
                    <span className="font-semibold">Fixed Price</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" value="hourly" {...register('pricingType')} className="hidden peer" />
                  <div className="p-4 border-2 border-slate-200 rounded-xl peer-checked:border-teal peer-checked:bg-teal/5 transition-all text-center">
                    <span className="font-semibold">Hourly Rate</span>
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Amount ($)</label>
                <input 
                  type="number"
                  {...register('amount', { required: 'Amount is required' })}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Payment Schedule</label>
                <select 
                  {...register('paymentSchedule')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-white"
                >
                  <option value="50% upfront, 50% on delivery">50% upfront, 50% on delivery</option>
                  <option value="100% upfront">100% upfront</option>
                  <option value="Net-15">Net-15</option>
                  <option value="Net-30">Net-30</option>
                  <option value="Milestone-based">Milestone-based</option>
                </select>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <input type="checkbox" {...register('lateFee')} id="lateFee" className="w-5 h-5 accent-teal" />
                <label htmlFor="lateFee" className="text-sm font-medium">Apply 1.5% monthly late fee to overdue balances</label>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">The Legal Stuff</h2>
              <p className="text-slate-500">Important protections for your work.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  Who owns the final work?
                  <div className="group relative">
                    <Info className="w-4 h-4 text-slate-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-navy text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      Work-for-hire means once you're paid, the client owns everything. A license means you still own it.
                    </div>
                  </div>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="radio" value="work-for-hire" {...register('ipRights')} className="w-4 h-4 accent-teal" />
                    <span className="text-sm">Work-for-Hire (Full rights to client)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="radio" value="license" {...register('ipRights')} className="w-4 h-4 accent-teal" />
                    <span className="text-sm">License (You keep ownership)</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <input type="checkbox" {...register('confidentiality')} id="conf" className="w-5 h-5 accent-teal" />
                  <label htmlFor="conf" className="text-sm font-medium">Confidentiality</label>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <input type="checkbox" {...register('nonSolicitation')} id="nonsol" className="w-5 h-5 accent-teal" />
                  <label htmlFor="nonsol" className="text-sm font-medium">Non-solicitation</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Termination Notice (Days)</label>
                <select {...register('terminationNotice')} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white">
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="space-y-6"
          >
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-display font-bold">Review & Download</h2>
              <p className="text-slate-500">Your professional contract is ready.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 max-h-80 overflow-y-auto shadow-inner text-[10px] font-mono whitespace-pre-wrap text-slate-700">
              {generateContractText(formData)}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleSubmit(onSubmit)}
                className="flex-1 flex items-center justify-center gap-2 bg-teal text-white py-4 rounded-xl font-bold hover:bg-teal-hover transition-all shadow-lg shadow-teal/20"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button 
                onClick={copyToClipboard}
                className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all"
              >
                <Copy className="w-5 h-5" />
                Copy as Text
              </button>
            </div>
            
            <p className="text-[10px] text-center text-slate-400 italic">
              This document is provided for informational purposes. For complex projects over $10,000, consider having an attorney review it.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isComplete) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-teal/10 rounded-full mb-4">
          <CheckCircle2 className="w-10 h-10 text-teal" />
        </div>
        <h2 className="text-3xl font-display font-bold">Contract Generated!</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Your contract has been downloaded. You're now protected and ready to start your project.
        </p>
        <button 
          onClick={() => { setIsComplete(false); setStep(1); }}
          className="text-teal font-semibold hover:underline"
        >
          Create another contract
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-navy/5 border border-navy/5 overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1.5 bg-slate-100 flex">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div 
            key={i} 
            className={`flex-1 transition-all duration-500 ${i <= step ? 'bg-teal' : 'bg-transparent'}`}
          />
        ))}
      </div>

      <div className="p-8 sm:p-12">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
          {step > 1 && step < 6 ? (
            <button 
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-500 font-semibold hover:text-navy transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          ) : <div />}

          {step < 6 && (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-full font-bold hover:bg-navy/90 transition-all"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
