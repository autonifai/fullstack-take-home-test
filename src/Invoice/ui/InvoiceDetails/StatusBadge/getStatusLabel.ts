import { InvoiceStatus } from '@src/Invoice/domain';

export default function getStatusLabel(status?: string): string {
  switch (status) {
    case InvoiceStatus.TO_BE_VALIDATED:
      return 'Validation'
    
    case InvoiceStatus.APPROVED:
      return 'Validated'
    
    case InvoiceStatus.REJECTED:
      return 'Rejected'
  
    default:
      return InvoiceStatus.UNKONWN
  }
}