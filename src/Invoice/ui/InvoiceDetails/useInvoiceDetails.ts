import { useEffect, useState } from 'react';
import { Invoice } from '@src/Invoice/domain';
import { InvoiceService } from '@src/Invoice/application';

export default function useInvoiceDetails(invoiceId: string, invoiceService: InvoiceService) {
  const [details, setDetails] = useState<Invoice>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
      
        const details = await invoiceService.getById(invoiceId)
        setDetails(details)
      } catch(error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }

      setIsLoading(false)
    })()
  }, [invoiceId, invoiceService])

  return {
    details,
    isLoading,
    error,
  }
}