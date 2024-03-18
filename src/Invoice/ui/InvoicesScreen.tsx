import { useParams } from 'react-router-dom';
import InvoiceService from '../application/InvoiceService';
import useInvoices from './useInvoices';
import { InvoiceList } from './InvoiceList';
import { InvoiceDetails } from './InvoiceDetails';

export default function InvoicesScreen({ invoiceService }: InvoicesScreenProps) {
  const { invoiceId } = useParams()
  const { invoices, isLoading } = useInvoices(invoiceService)

  return (
    <div className='invoices'>
      {isLoading
        ?
          <p>Loading...</p>
        :
          <>
            { invoiceId 
              ?
               <InvoiceDetails invoiceId={invoiceId} invoiceService={invoiceService} />
              :
                null
            }
            <InvoiceList className='invoices__list'
              invoices={invoices}
            />
          </>
      }
    </div>
  )
}

type InvoicesScreenProps = {
  invoiceService: InvoiceService
}