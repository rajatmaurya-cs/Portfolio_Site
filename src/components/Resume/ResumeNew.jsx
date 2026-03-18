
import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
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
    <Container fluid className="resume-section">

      <Particle />

      
       <Row style={{ justifyContent: "center", position: "relative", marginBottom: "5px"}}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>

      {/* ✅ PDF Viewer */}
      <Row style={{ justifyContent: "center" }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => setLoadError(true)}
          loading="Loading resume..."
        >
          <Row style={{ justifyContent: "center" }}>
            <Page
              pageNumber={1}
              height={previewHeight}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Row>
        </Document>
        {!loadError && numPages > 1 && (
          <p style={{ marginTop: "10px", color: "#cfc7df", textAlign: "center" }}>
            Previewing page 1 of {numPages}. Download to view full resume.
          </p>
        )}
        {loadError && (
          <p style={{ color: "#ffb3b3", marginTop: "12px", textAlign: "center" }}>
            Failed to load resume preview. Please use the download Button.
          </p>
        )}
      </Row>

    

    

    </Container>
  );
}

export default ResumeNew;