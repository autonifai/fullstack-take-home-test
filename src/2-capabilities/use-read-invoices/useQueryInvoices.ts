import { useQuery } from '@tanstack/react-query';

import InvoicesGateway from '../../2-gateways/invoices.gateway';
import Invoice from '../../1-models/invoice';

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
