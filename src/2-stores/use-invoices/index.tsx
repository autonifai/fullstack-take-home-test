import { createContext, FC, useContext } from 'react';
import InvoicesStore from './invoices.store';

type Props = {
  children: React.JSX.Element;
  store?: InvoicesStore | (() => InvoicesStore);
};

const InvoicesContext = createContext<InvoicesStore>(new InvoicesStore());

export const InvoicesProvider: FC<Props> = ({
  children,
  store = useInvoices,
}) => {
  /** TESTING NOTE
   * This is a workaround for enabling testing,
   * as I couldnt'mock
   */
  const value = typeof store === 'function' ? store() : store;

  return (
    <InvoicesContext.Provider value={value}>
      {children}
    </InvoicesContext.Provider>
  );
};

const useInvoices = () => useContext(InvoicesContext);

export default useInvoices;
