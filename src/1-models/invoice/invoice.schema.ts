import { z } from 'zod';

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
  //TODO: factory as float
  pre_tax_amount: z.number(),
  //TODO: factory as float
  discount: z.number(),
  //TODO: factory as float
  tax_amount: z.number(),
  total_amount: z.number(),
  //TODO: number representation, with currency
  currency: z.string(),
  gl_code: z.string(),
  cost_centre: z.string(),
  //TODO: enumify
  status: z.string(),
});

export type Invoice = z.output<typeof schema>;
export type InvoiceDTO = z.input<typeof schema>;

export default schema;
