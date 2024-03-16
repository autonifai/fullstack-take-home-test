import { InvoiceService } from '@src/Invoice/application'
import useInvoiceDetails from './useInvoiceDetails'
import './InvoiceDetails.sass'

export default function InvoiceDetails({ invoiceId, invoiceService }: invoiceDetailsProps) {
  const { details, isLoading, error } = useInvoiceDetails(invoiceId, invoiceService)

  return (
    <p>{details?.id}</p>
  )
}

type invoiceDetailsProps = {
  invoiceId: string,
  invoiceService: InvoiceService,
}