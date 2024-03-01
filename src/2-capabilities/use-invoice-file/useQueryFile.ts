import { useQuery } from '@tanstack/react-query';

import InvoicesGateway from '../../2-gateways/invoices.gateway';

function useQueryFile(id: number | undefined) {
  const {
    isLoading: loading,
    error,
    data: file,
    refetch,
  } = useQuery({
    //caches the file, to avoid hitting the network
    //if invalidation of file is needed, staleTime can be adjusted
    //or we can use some strategy to invalidade the cache e.g. some other user replaced this invoice
    queryKey: [`invoices/file/${id}`],
    //avoids refetching from time to time
    staleTime: Infinity,
    queryFn: () => InvoicesGateway.getInvoiceFile(id!),
    enabled: false,
  });

  return {
    refetch,
    loading,
    error,
    data: {
      file,
    },
  };
}

export default useQueryFile;
