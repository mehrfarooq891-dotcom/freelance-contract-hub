/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';
import { ContractData } from '../types';
import { generateContractText } from './templates';

export const generatePDF = (data: ContractData) => {
  const doc = new jsPDF();
  const text = generateContractText(data);
  
  // Set font
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  // Add header
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // Navy
  doc.text('FreelanceContractHub.com', 20, 20);
  
  doc.setFontSize(12);
  doc.text('Freelance Service Agreement', 20, 30);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139); // Slate
  doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, 35);
  
  // Add main content
  doc.setTextColor(15, 23, 42);
  const splitText = doc.splitTextToSize(text, 170);
  
  let y = 45;
  const pageHeight = doc.internal.pageSize.height;
  
  splitText.forEach((line: string) => {
    if (y > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 20, y);
    y += 5;
  });
  
  // Footer
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Page ${i} of ${pageCount} - Generated at FreelanceContractHub.com - For informational purposes only`,
      doc.internal.pageSize.width / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }
  
  const fileName = `FreelanceContract_${data.clientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
