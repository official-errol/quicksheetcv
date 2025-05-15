const PdfPreviewModal = ({ showPdfPreview, pdfUrl, downloadPdf, setShowPdfPreview }) => {
    if (!showPdfPreview) return null;
  
    return (
      <div className="fixed inset-0 bg-zinc-700/30 backdrop-blur-xs flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full h-full max-w-6xl max-h-screen flex flex-col">
          <div className="flex-grow overflow-auto">
            <iframe 
              src={pdfUrl} 
              className="w-full h-full min-h-[80vh]"
              title="PDF Preview"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 p-4 bg-zinc-900">
            <button 
              onClick={() => setShowPdfPreview(false)}
              className="px-4 sm:px-6 py-2 flex items-center justify-center text-sm font-semibold text-zinc-900 rounded-3xl bg-zinc-100 hover:bg-zinc-300 transition disabled:opacity-10"
            >
              Close Preview
            </button>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => window.print()}
                className="px-4 sm:px-6 py-2 text-sm font-semibold text-zinc-900 rounded-3xl bg-blue-500 hover:bg-white transition disabled:opacity-10"
              >
                Browser Print
              </button>
              <button 
                onClick={downloadPdf}
                className="px-4 sm:px-6 py-2 text-sm font-semibold text-zinc-900 rounded-3xl bg-blue-500 hover:bg-white transition disabled:opacity-10"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default PdfPreviewModal;