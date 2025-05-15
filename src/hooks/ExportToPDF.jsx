import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

const usePdfExport = () => {
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const exportToPdf = async (previewRef) => {
    if (!previewRef.current) return;

    const clone = previewRef.current.cloneNode(true);
    clone.className = previewRef.current.className;

    document.body.appendChild(clone);

    try {
      await document.fonts.ready;

      const images = clone.querySelectorAll('img');
      await Promise.all(
        [...images].map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((res) => {
            img.onload = img.onerror = res;
          });
        })
      );

      const dataUrl = await htmlToImage.toPng(clone, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        cacheBust: true
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise((res) => (img.onload = res));

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = img.width / 3.78;
      const imgHeight = img.height / 3.78;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) * 0.95;

      pdf.addImage(
        dataUrl,
        'PNG',
        (pdfWidth - imgWidth * ratio) / 2,
        (pdfHeight - imgHeight * ratio) / 2,
        imgWidth * ratio,
        imgHeight * ratio
      );

      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);
      setShowPdfPreview(true);
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      document.body.removeChild(clone);
    }
  };

  const downloadPdf = () => {
    if (!pdfUrl) return;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'export.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(pdfUrl);
    setShowPdfPreview(false);
  };

  return {
    showPdfPreview,
    pdfUrl,
    exportToPdf,
    downloadPdf,
    setShowPdfPreview
  };
};

export default usePdfExport;
