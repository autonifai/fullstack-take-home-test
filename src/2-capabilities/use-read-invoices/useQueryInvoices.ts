import { useQuery } from '@tanstack/react-query';

import { Invoice } from '../../1-models/invoice/invoice.schema';
import InvoicesGateway from '../../2-gateways/invoices.gateway';

function useQueryInvoices() {
  const {
    isLoading: loading,
    error,
    data: invoices,
  } = useQuery<Invoice[]>({
    queryKey: ['invoices'],
    //avoids refetching from time to time
    staleTime: Infinity,
    queryFn: InvoicesGateway.listInvoices,
  });

  return {
    loading,
    error,
    data: {
      invoices,
    },
  };
}

export default useQueryInvoices;
