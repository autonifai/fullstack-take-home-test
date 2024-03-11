import { Dayjs } from 'dayjs';
import InvoiceStatus from './InvoiceStatusEnum';

interface Invoice {
  name: string,
  preTaxAmount: number,
  poNumber: string,
  discount: number,
  dateOfIssue: Dayjs,
  taxAmount: number,
  vendor: string,
  id: number,
  dueDate: Dayjs,
  totalAmount: number,
  vendorBankDetails: string,
  currency: string,
  glCode: string,
  vendorTaxRegistrationNumber: string,
  paymentTerms: number,
  vendorAddress: string,
  description: string,
  costCentre: string,
  billingAddress: string,
  lineItemDetails: string,
  status: InvoiceStatus,
}

export default Invoice