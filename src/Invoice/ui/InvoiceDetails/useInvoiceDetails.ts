import { useEffect, useState } from 'react';
import { Invoice } from '@src/Invoice/domain';
import { InvoiceService } from '@src/Invoice/application';

export default function useInvoiceDetails(invoiceId: string, invoiceService: InvoiceService) {
  const [details, setDetails] = useState<Invoice>()
  const [pdfUri, setPdfUri] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
      
        await loadDetails()
      } catch(error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }

      setIsLoading(false)
    })()
  }, [invoiceId, invoiceService])

  async function validate() {
    setIsLoading(true)

    await invoiceService.aproveById(invoiceId)
    await loadDetails()

    setIsLoading(false)
  }

  async function reject() {
    setIsLoading(true)

    await invoiceService.rejectById(invoiceId)
    await loadDetails()

    setIsLoading(false)
  }

  async function loadDetails() {
    const details = await invoiceService.getById(invoiceId);
    setDetails(details);

    await loadPdf(details.number)
  }

  async function loadPdf(invoiceNumber: string) {
    const pdfUri =  await invoiceService.getInvoicePdf(invoiceNumber)
    
    setPdfUri(pdfUri)
  }

  return {
    details,
    pdfUri,
    isLoading,
    error,
    validate,
    reject,
  }
}