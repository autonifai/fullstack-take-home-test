import { makeAutoObservable } from 'mobx';
import { Invoice } from '../../1-models/invoice/invoice.schema';

/** TEST NOTE
 * I like using a record for entities because they allow for more efficient manipulation of data
 *
 * I think this will not be much visible on this exercise,
 * but in general I think it's a good practice
 */
type Data = Record<string, Invoice>;

class InvoicesStore {
  constructor() {
    makeAutoObservable(this);
  }

  /** TEST NOTE
   * Though "private" exists in typescript,
   * it does not in some javascript implementations
   *
   * So I rather use this keyword together with the prefix convention
   */
  private _data: Data = {};
  private _memo: Invoice[] | undefined;

  get invoices() {
    if (!this._memo) {
      this._memo = Object.values(this._data);
    }

    return this._memo;
  }

  setData = (invoices: Invoice[]) => {
    this._memo = undefined;
    this._data = invoices.reduce<Data>(normalize, {});
  };
}

function normalize(data: Data, invoice: Invoice): Data {
  return {
    ...data,
    [invoice.id]: invoice,
  };
}

export default InvoicesStore;
