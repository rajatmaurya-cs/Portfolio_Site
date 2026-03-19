
import React, { useState, useEffect } from "react";
import Particle from "../Particle";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Worker setup (VERY IMPORTANT)
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeNew() {

  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [loadError, setLoadError] = useState(false);
  const pdf = "/Resume.pdf";
  const previewHeight =
    width > 1200 ? 570 : width > 992 ? 520 : width > 786 ? 460 : 330;


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoadError(false);
  }

  return (
    <div className="relative bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.582),rgba(12,8,24,0.904))] pb-[30px] pt-[110px] text-white">

      <Particle />

      
      <div className="relative mb-[5px] flex justify-center">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full max-w-[250px] items-center justify-center rounded-md border border-[#623686] bg-[#623686] px-4 py-2 text-white transition hover:border-[#6d20c5d7] hover:bg-[#6d20c5d7]"
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </a>
      </div>

      {/* ✅ PDF Viewer */}
      <div className="flex justify-center">
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => setLoadError(true)}
          loading="Loading resume..."
        >
          <div className="flex justify-center">
            <Page
              pageNumber={1}
              height={previewHeight}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        </Document>
        {!loadError && numPages > 1 && (
          <p className="mt-[10px] text-center text-[#cfc7df]">
            Previewing page 1 of {numPages}. Download to view full resume.
          </p>
        )}
        {loadError && (
          <p className="mt-3 text-center text-[#ffb3b3]">
            Failed to load resume Preview. Please use the download Button.
          </p>
        )}
      </div>

    
    </div>
  );
}

export default ResumeNew;