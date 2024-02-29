import { makeAutoObservable } from 'mobx';
import Invoice from '../../1-models/invoice';

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
  private _selected: number | undefined;

  get invoices() {
    if (!this._memo) {
      this._memo = Object.values(this._data);
    }

    return this._memo;
  }

  get selected(): Invoice | undefined {
    if (this._selected === undefined) {
      return undefined;
    }

    const selected = this._data[this._selected];

    if (!selected) {
      return undefined;
    }

    return selected.clone();
  }

  setData = (invoices: Invoice[]) => {
    this._memo = undefined;
    this._selected = undefined;
    this._data = invoices.reduce<Data>(normalize, {});
  };

  select = (invoidId?: number) => {
    this._selected = invoidId;
  };

  private changeStatus = (status: string) => {
    return (invoice: Invoice) => {
      const finding = this._data[invoice?.id];

      if (!finding) {
        return;
      }

      this._data[finding.id] = finding.clone({
        status,
      });
      this._memo = undefined;
    };
  };

  approve = this.changeStatus('APPROVED');
  reject = this.changeStatus('REJECTED');
}

function normalize(data: Data, invoice: Invoice): Data {
  return {
    ...data,
    [invoice.id]: invoice,
  };
}

export default InvoicesStore;
