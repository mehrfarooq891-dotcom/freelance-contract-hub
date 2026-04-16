/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContractData } from '../types';

export const generateContractText = (data: ContractData): string => {
  const {
    freelancerName,
    freelancerBusinessName,
    freelancerEmail,
    clientName,
    clientCompany,
    clientState,
    projectType,
    projectDescription,
    deliverables,
    startDate,
    endDate,
    pricingType,
    amount,
    paymentSchedule,
    lateFee,
    ipRights,
    confidentiality,
    nonSolicitation,
    terminationNotice,
    revisionCount
  } = data;

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Bug 1 Fix: Use clientState as default for dispute resolution
  const finalDisputeState = clientState || "the applicable state";

  let ipSectionText = '';
  if (ipRights === 'work-for-hire') {
    ipSectionText = `Version A: Work-for-Hire (Full Transfer). Upon full payment of the fees, the Freelancer hereby assigns to the Client all right, title, and interest in and to the Deliverables. The Deliverables shall be considered "work made for hire" under the U.S. Copyright Act.`;
  } else if (ipRights === 'license') {
    ipSectionText = `Version B: License Grant. The Freelancer retains all ownership, including intellectual property rights, in the Deliverables. Upon full payment, the Freelancer grants the Client a non-exclusive, worldwide, perpetual license to use the Deliverables for the Client's business purposes.`;
  } else {
    ipSectionText = `Version C: Shared Ownership. The Freelancer and Client shall share ownership of the Deliverables as tenants-in-common. Each party may use the Deliverables without the consent of or accounting to the other party.`;
  }

  const nicheSpecificClauses = getNicheSpecificClauses(projectType);

  // Define sections
  const sections = [
    {
      title: 'SCOPE OF WORK',
      content: `Project Type: ${projectType}
Project Description: ${projectDescription}
Deliverables: ${deliverables}
Timeline: The project will commence on ${startDate} and is estimated to be completed by ${endDate}.
Revisions: The Freelancer will provide up to ${revisionCount} rounds of revisions. Additional revisions may incur extra fees.`
    },
    {
      title: 'PAYMENT TERMS',
      content: `Total Fee: ${pricingType === 'fixed' ? `$${amount} (Fixed Fee)` : `$${amount}/hour (Hourly Rate)`}
Payment Schedule: ${paymentSchedule}
${lateFee ? 'Late Fees: A late fee of 1.5% per month will be applied to all overdue balances.' : ''}
Kill Fee: If the Client cancels the project after work has started, a kill fee of 50% of the remaining balance shall be due immediately.`
    },
    {
      title: 'INTELLECTUAL PROPERTY RIGHTS',
      content: `${ipSectionText}${nicheSpecificClauses ? `\n${nicheSpecificClauses}` : ''}`
    },
    {
      title: 'CONFIDENTIALITY',
      enabled: confidentiality,
      content: `Both parties agree to keep all project details and proprietary information confidential during the project and for a period of two years following completion. Exceptions include information already in the public domain or required by law.`
    },
    {
      title: 'INDEPENDENT CONTRACTOR STATUS',
      content: `The Freelancer is an independent contractor and not an employee of the Client. The Freelancer is responsible for all taxes (including 1099 reporting), insurance, and benefits.`
    },
    {
      title: 'NON-SOLICITATION',
      enabled: nonSolicitation,
      content: `The Client agrees not to solicit or hire any of the Freelancer's employees or subcontractors for a period of 12 months following the termination of this Agreement.`
    },
    {
      title: 'TERMINATION',
      content: `Either party may terminate this Agreement with ${terminationNotice} days written notice. Upon termination, the Client shall pay the Freelancer for all work completed up to the termination date.`
    },
    {
      title: 'DISPUTE RESOLUTION',
      content: `In the event of a dispute, the parties agree to first attempt good faith negotiation for 30 days. If unresolved, the dispute shall be settled by binding arbitration in the State of ${finalDisputeState}.`
    },
    {
      title: 'LIMITATION OF LIABILITY',
      content: `The Freelancer's total liability under this Agreement shall be limited to the total fees paid by the Client. Neither party shall be liable for consequential or indirect damages.`
    },
    {
      title: 'ENTIRE AGREEMENT',
      content: `This document constitutes the entire agreement between the parties and supersedes all prior discussions. Any amendments must be in writing and signed by both parties.`
    }
  ];

  // Filter and renumber sections
  let sectionNumber = 1;
  const formattedSections = sections
    .filter(s => s.enabled !== false)
    .map(s => {
      return `${sectionNumber++}. ${s.title}\n${s.content}`;
    })
    .join('\n\n');

  return `
FREELANCE SERVICE AGREEMENT

This Freelance Service Agreement (the "Agreement") is entered into as of ${today} by and between:

FREELANCER: ${freelancerName}${freelancerBusinessName ? ` (${freelancerBusinessName})` : ''}, located at ${freelancerEmail} (the "Freelancer").
CLIENT: ${clientName}${clientCompany ? ` (${clientCompany})` : ''}, located in ${clientState} (the "Client").

${formattedSections}

SIGNATURES

__________________________          __________________________
${freelancerName} (Freelancer)          ${clientName} (Client)
Date: ${today}                     Date: ${today}
`;
};

const getNicheSpecificClauses = (type: string): string => {
  switch (type) {
    case 'Graphic Design':
      return '\nDesign Specifics: Client is responsible for licensing any third-party fonts or stock assets. Freelancer retains the right to display the work in their professional portfolio.';
    case 'SEO Consultant':
      return '\nSEO Specifics: Freelancer makes no guarantee of specific search engine rankings. Client must provide necessary access to Google Analytics and CMS.';
    case 'Web Developer':
      return '\nWeb Dev Specifics: Hosting and maintenance are not included unless specified. Client is responsible for third-party plugin licenses.';
    case 'Social Media Manager':
      return '\nSocial Media Specifics: Client is responsible for all ad spend paid directly to platforms. Freelancer will follow the agreed-upon content calendar.';
    default:
      return '';
  }
};
