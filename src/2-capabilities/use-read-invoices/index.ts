import { useEffect } from 'react';
import useInvoices from '../../2-stores/use-invoices';
import AsyncStatuses from '../async-statuses.type';
import useQueryInvoices from './useQueryInvoices';
import Invoice from '../../1-models/invoice';

export type ReadInvoicesOutput = { invoices: Invoice[] };

function useReadInvoices() {
  const { loading, error, data } = useQueryInvoices();
  const { setData } = useInvoices();

  //TODO: handle error
  useEffect(() => {
    setData(data?.invoices ?? []);
  }, [data, setData]);

  return {
    status: (loading
      ? 'pending'
      : error
        ? 'error'
        : 'success') as AsyncStatuses,
  };
}

export default useReadInvoices;
