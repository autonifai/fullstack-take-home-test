import { Document, Page } from 'react-pdf';
import loadPdfWorker from './loadPdfWorker';
import './PDFViewer.sass'

loadPdfWorker()

export default function PDFViewer({ pdfUri }: PDFViewerProps) {
  console.log(pdfUri)

  return (
    <Document file={pdfUri}>
      <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={1}/>
    </Document>
  )
}

type PDFViewerProps = {
  pdfUri: string,
}

