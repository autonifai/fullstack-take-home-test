import { z } from 'zod';

const Statuses: Record<string, string> = {
  TO_BE_VALIDATED: 'Validation',
  REJECTED: 'Rejected',
  APPROVED: 'Approved',
  UNKNOWN: 'Unknown',
} as const;

const schema = z.object({
  id: z.number(),
  //TODO: group vendors
  vendor: z.string(),
  vendor_tax_registration_number: z.string(),
  vendor_bank_details: z.string(),
  vendor_address: z.string(),
  billing_address: z.string(),
  number: z.string(),
  po_number: z.string(),
  //TODO: date representation
  date_of_issue: z.string().transform((x) => new Date(x)),
  //TODO: date representation
  due_date: z.string().transform((x) => new Date(x)),
  payment_terms: z.number(),
  description: z.string(),
  line_item_details: z.string(),
  pre_tax_amount: z.number(),
  discount: z.number(),
  tax_amount: z.number(),
  //TODO: number representation, with currency
  total_amount: z.number(),
  currency: z.string(),
  gl_code: z.string(),
  cost_centre: z.string(),
  status: z.string(),
});

export type Invoice = z.output<typeof schema>;
export type InvoiceDTO = z.input<typeof schema>;

export function getStatus(status: string): string {
  return Statuses[status] ?? Statuses.UNKNOWN;
}

export default schema;
