import { Document, Page, pdfjs } from 'react-pdf';
import './PDFViewer.sass'
import { useEffect, useState } from 'react';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


export default function PDFViewer({ className, invoiceNumber }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const [pdfFile, setPdfFile] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/invoices/${invoiceNumber}/pdf/`, { responseType: 'blob' })
      .then(response => {
        setPdfFile(URL.createObjectURL(response.data));
      })
      .catch(error => console.error("Error al obtener el PDF: ", error));
  }, [invoiceNumber]);

  return (
    <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
      <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNumber} />
    </Document>
  )
}

type PDFViewerProps = {
  className?: string,
  invoiceNumber: string,
}

