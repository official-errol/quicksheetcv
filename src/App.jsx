import { useState, useRef } from 'react';
import { initialData } from './data';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';
import usePdfExport from './hooks/ExportToPDF';
import PdfPreviewModal from './components/PreviewModal';

function App() {
  const [data, setData] = useState(initialData);
  const previewRef = useRef(null);
  const {
    showPdfPreview,
    pdfUrl,
    exportToPdf,
    downloadPdf,
    setShowPdfPreview
  } = usePdfExport();

  const handleExport = () => {
    exportToPdf(previewRef);
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="w-full p-4">
        <Header
          onExportPdf={handleExport} 
          previewRef={previewRef} 
        />
        <main className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-4">
          <div className="col-span-5 lg:col-span-3">
            <ResumeForm data={data} onChange={setData} />
            <Footer/>
          </div>
          <div
            className="hidden lg:block col-span-2"
            style={{
              width: '130.2mm',
              height: '184.14mm',
              transform: 'scale(0.62)',
              transformOrigin: 'top left'
            }}
          >
            <div ref={previewRef} className="w-[210mm] h-[297mm]">
              <ResumePreview data={data} />
            </div>
          </div>
        </main>
      </div>
      
      <PdfPreviewModal 
        showPdfPreview={showPdfPreview}
        pdfUrl={pdfUrl}
        downloadPdf={downloadPdf}
        setShowPdfPreview={setShowPdfPreview}
      />
    </div>
  );
}

export default App;