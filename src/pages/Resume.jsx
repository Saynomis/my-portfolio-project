import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { version as pdfjsVersion } from "pdfjs-dist/package.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../styles/resume.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setAnimationClass("page-exit-left");
    setTimeout(() => {
      setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
      setAnimationClass("page-enter-right");
    }, 500);
  }

  function goToNextPage() {
    setAnimationClass("page-exit-right");
    setTimeout(() => {
      setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
      setAnimationClass("page-enter-left");
    }, 500);
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Simon-Ehrlich-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="resume-container">
      <div className="arrows-resume-container">
        <button
          className={pageNumber === 1 ? "arrow-inactive" : "arrow-active"}
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          <FaArrowLeft />
        </button>
        <Document
          className={`page-flip ${animationClass}`}
          file="/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <button
          className={pageNumber === 2 ? "arrow-inactive" : "arrow-active"}
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="btn2-container">
        <button onClick={handleDownload}>Download CV</button>
      </div>
    </div>
  );
}
