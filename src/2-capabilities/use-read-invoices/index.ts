import { useEffect } from 'react';
import useInvoices from '../../2-stores/use-invoices';
import AsyncStatuses from '../async-statuses.type';
import { Invoice } from '../../1-models/invoice/invoice.schema';
import useQueryInvoices from './useQueryInvoices';

export type ReadInvoicesOutput = { invoices: Invoice[] };

function useReadInvoices() {
  const { loading, error, data } = useQueryInvoices();
  const { setData } = useInvoices();

  useEffect(() => {
    setData(data?.invoices ?? []);
  }, [data, setData]);

  //TODO: wrap in generalization
  return {
    status: (loading
      ? 'pending'
      : error
        ? 'error'
        : 'success') as AsyncStatuses,
  };
}

export default useReadInvoices;
