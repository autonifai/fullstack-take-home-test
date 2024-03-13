import { useEffect, useState } from 'react'
import Invoice from './Invoice'
import axios from 'axios'
import InvoiceStatus from './InvoiceStatusEnum'
import dayjs from 'dayjs'

export default function useInvoices() {
  const [isLoading, setIsLoading] = useState(true)
  const [invoices, setInvoices] = useState<Invoice[]>([])

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      try {
        const response = await axios.get('http://localhost:8000/invoices')

        const apiInvoices: any[] = response.data

        const invoices = apiInvoices.map(apiInvoice => adaptInvoices(apiInvoice))
        
        setInvoices(invoices)
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  function mapStatusToEnum(status: string): InvoiceStatus {
    switch (status) {
      case "TO_BE_VALIDATED":
        return InvoiceStatus.TO_BE_VALIDATED
      default:
        return InvoiceStatus.UNKONWN
    }
  }

  function adaptInvoices(apiInvoice: any): Invoice {
    return {
      name: apiInvoice.number,
      preTaxAmount: apiInvoice.pre_tax_amount,
      poNumber: apiInvoice.po_number,
      discount: apiInvoice.discount,
      dateOfIssue: dayjs(apiInvoice.date_of_issue),
      taxAmount: apiInvoice.tax_amount,
      vendor: apiInvoice.vendor,
      id: apiInvoice.id,
      dueDate: dayjs(apiInvoice.due_date),
      totalAmount: apiInvoice.total_amount,
      vendorBankDetails: apiInvoice.vendor_bank_details,
      currency: apiInvoice.currency,
      glCode: apiInvoice.gl_code,
      vendorTaxRegistrationNumber: apiInvoice.vendor_tax_registration_number,
      paymentTerms: apiInvoice.payment_terms,
      vendorAddress: apiInvoice.vendor_address,
      description: apiInvoice.description,
      costCentre: apiInvoice.cost_centre,
      billingAddress: apiInvoice.billing_address,
      lineItemDetails: apiInvoice.line_item_details,
      status: mapStatusToEnum(apiInvoice.status),
    }
  }

  return {
    isLoading,
    invoices,
  }
}