// BookReader.js

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './BookReader.css'; // Import CSS file for styling

const BookReader = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  // Set the workerSrc property explicitly
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="book-reader-container">
      <div className="controls">
        <button onClick={handlePrevPage} disabled={pageNumber <= 1} className="control-button">
          Previous Page
        </button>
        <p className="page-info">
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={handleNextPage} disabled={pageNumber >= numPages} className="control-button">
          Next Page
        </button>
      </div>
      <div className="page-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Error loading PDF:', error)}
        >
          <Page pageNumber={pageNumber} className="book-page" />
        </Document>
      </div>
    </div>
  );
};

export default BookReader;
