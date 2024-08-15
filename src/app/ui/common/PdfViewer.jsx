import React from 'react';

const PdfViewer = ({ pdfPath }) => {
  if (!pdfPath) return '';

  return (
    <iframe src={pdfPath} width="100%" height="800px">
        This browser does not support PDFs. Please download the PDF to view it: <a href={pdfPath}>Download PDF</a>
    </iframe>
  );
};

export default PdfViewer;