import { useCallback, useEffect } from 'react';
import useInvoices from '../../2-stores/use-invoices';
import AsyncStatuses from '../async-statuses.type';
import useQueryFile from './useQueryFile';

export type ReadInvoiceFileOutput = { file: File | undefined };

function useInvoiceFile(id: number | undefined) {
  const { loading, error, data, refetch } = useQueryFile(id);
  const { saveFile } = useInvoices();

  const execute = useCallback(
    async (id: number) => {
      await refetch();
    },
    [refetch],
  );

  //TODO: handle error
  useEffect(() => {
    if (!data.file) {
      return;
    }

    saveFile(id!, data.file);
  }, [data.file, id, saveFile]);

  return {
    execute,
    status: (loading
      ? 'pending'
      : error
        ? 'error'
        : 'success') as AsyncStatuses,
  };
}

export default useInvoiceFile;
