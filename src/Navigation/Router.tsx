import { Routes, Route, Navigate } from 'react-router-dom'
import InvoicesScreen from '@src/Invoice/ui/InvoicesScreen'
import { HttpClient } from '@src/Common'
import { RestInvoiceRepository } from '@src/Invoice/infrastructure'
import { InvoiceService } from '@src/Invoice/application'

export default function Router() {
  const httpClient = new HttpClient('http://localhost:8000')
  const invoiceRepository = new RestInvoiceRepository(httpClient)
  const invoiceService = new InvoiceService(invoiceRepository)

  return (
      <Routes>
        <Route path="/invoices" element={<InvoicesScreen invoiceService={invoiceService} />} />
        <Route path="/invoices/:invoiceId" element={<InvoicesScreen invoiceService={invoiceService} />} />
        <Route path="/" element={<Navigate to="/invoices" replace />} />
      </Routes>
  )
}
