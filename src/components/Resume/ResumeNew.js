// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// // import pdf from "../../Assets/../Assets/Rajat_Maurya_Resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);
//    const pdf = "/Rajat_Maurya_Resume.pdf";

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">


//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>


//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;




// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// // import pdf from "../../Assets/Rajat_Maurya_Resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = 
// `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {

//   const [width, setWidth] = useState(1200);
//   const [numPages, setNumPages] = useState(null);
//    const pdf = "/Rajat_Maurya_Resume.pdf";

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   // 👇 VERY IMPORTANT
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         <Row style={{ justifyContent: "center" }}>
//           <Button variant="primary" href={pdf} target="_blank">
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document
//             file={pdf}
//             onLoadSuccess={onDocumentLoadSuccess}
//             className="d-flex flex-column align-items-center"
//           >
//             {/* 👇 MAGIC LINE */}
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 scale={width > 786 ? 1.7 : 0.6}
//               />
//             ))}
//           </Document>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;








import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
// import pdf from "../../Assets/Rajat_Maurya_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

// Worker setup (VERY IMPORTANT)
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {

  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const pdf = "/Rajat_Maurya_Resume.pdf";


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container fluid className="resume-section">

      <Particle />

      
       <Row style={{ justifyContent: "center", position: "relative", }}>
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
          loading="Loading resume..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Row key={index} style={{ justifyContent: "center" }}>
              <Page
                pageNumber={index + 1}
                scale={width > 786 ? 1.6 : 0.9}
              />
            </Row>
          ))}
        </Document>
      </Row>

      {/* ✅ Download Button Bottom */}

      <Row style={{ justifyContent: "center", position: "relative" }}>
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

    </Container>
  );
}

export default ResumeNew;
