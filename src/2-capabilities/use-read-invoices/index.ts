import { useEffect, useState } from 'react';
import useInvoices from '../../2-stores/use-invoices';
import AsyncStatuses from '../async-statuses.type';
import { Invoice } from '../../1-models/invoice/invoice.schema';
import InvoiceFactory from '../../1-models/invoice/invoice.factory';

export type ReadInvoicesOutput = { invoices: Invoice[] };

function useQueryInvoices() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 5);
  }, []);

  return {
    loading,
    error: null,
    data: {
      invoices: InvoiceFactory.random(5),
    },
  };
}

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
