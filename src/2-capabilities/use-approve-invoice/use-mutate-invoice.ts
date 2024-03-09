import { useMutation } from '@tanstack/react-query';
import InvoicesGateway from '../../2-gateways/invoices.gateway';

function useMutateInvoice() {
  //TODO: handle error
  const { mutateAsync: execute, isPending: loading } = useMutation({
    mutationFn: InvoicesGateway.approveInvoice,
  });

  return { execute, loading };
}

export default useMutateInvoice;
