import { useCallback } from 'react';
import useMutateInvoice from './use-mutate-invoice';
import useInvoices from '../../2-stores/use-invoices';
import Invoice from '../../1-models/invoice';

export type ApproveInvoicePayload = {
  invoice: Invoice;
};

function useApproveInvoice() {
  const { approve: update } = useInvoices();
  const { execute, loading } = useMutateInvoice();

  const approve = useCallback(
    async ({ invoice }: ApproveInvoicePayload) => {
      await execute(invoice.id);
      update(invoice);
    },
    [execute, update],
  );

  return { approve, loading };
}

export default useApproveInvoice;
