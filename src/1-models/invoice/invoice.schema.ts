import { z } from 'zod';

//TODO: add other pieces of information for exhibition
const schema = z.object({
  id: z.number(),
  number: z.string(),
  vendor: z.string(),
  description: z.string(),
  //TODO: date representation
  due_date: z.string().transform((x) => new Date(x)),
  //TODO: number representation, with currency
  total_amount: z.number(),
  currency: z.string(),
});

export type Invoice = z.output<typeof schema>;
export type InvoiceDTO = z.input<typeof schema>;

export default schema;
