import { useEffect, useState } from 'react'
import Invoice from '../domain/Invoice'
import InvoiceService from '../application/InvoiceService'

export default function useInvoices(invoiceService: InvoiceService) {
  const [isLoading, setIsLoading] = useState(true)
  const [invoices, setInvoices] = useState<Invoice[]>([])

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      try {
        const invoices = await invoiceService.getAll()
        
        setInvoices(invoices)
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return {
    isLoading,
    invoices,
  }
}