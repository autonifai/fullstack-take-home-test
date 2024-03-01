import { useCallback } from 'react';
import useMutateInvoice from './use-mutate-invoice';
import useInvoices from '../../2-stores/use-invoices';
import Invoice from '../../1-models/invoice';

export type RejectInvoicePayload = {
  invoice: Invoice;
};

function useApproveInvoice() {
  const { reject: update } = useInvoices();
  const { execute, loading } = useMutateInvoice();

  const reject = useCallback(
    async ({ invoice }: RejectInvoicePayload) => {
      await execute(invoice.id);
      update(invoice);
    },
    [execute, update],
  );

  return { reject, loading };
}

export default useApproveInvoice;
