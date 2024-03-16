import { Routes, Route, Navigate } from 'react-router-dom'
import InvoicesScreen from '@src/Invoice/ui/InvoicesScreen'

export default function Router() {
  return (
      <Routes>
        <Route path="/invoices" element={<InvoicesScreen />} />
        <Route path="/" element={<Navigate to="/invoices" replace />} />
      </Routes>
  )
}
