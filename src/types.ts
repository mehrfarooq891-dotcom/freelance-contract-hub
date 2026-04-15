/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContractData {
  freelancerName: string;
  freelancerBusinessName?: string;
  freelancerEmail: string;
  clientName: string;
  clientCompany?: string;
  clientEmail: string;
  clientState: string;
  projectType: string;
  projectDescription: string;
  deliverables: string;
  startDate: string;
  endDate: string;
  pricingType: 'fixed' | 'hourly';
  amount: string;
  paymentSchedule: string;
  lateFee: boolean;
  ipRights: 'work-for-hire' | 'license' | 'shared';
  confidentiality: boolean;
  nonSolicitation: boolean;
  terminationNotice: string;
  disputeState: string;
  revisionCount: string;
}

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export const PROJECT_TYPES = [
  "Graphic Design",
  "SEO Consultant",
  "Web Developer",
  "Social Media Manager",
  "Copywriter",
  "Video Editor",
  "Photographer",
  "Virtual Assistant",
  "Other"
];
