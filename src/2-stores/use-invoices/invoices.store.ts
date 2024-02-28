import { makeAutoObservable } from 'mobx';
import { Invoice } from '../../1-models/invoice/invoice.schema';

type Data = Record<string, Invoice>;

class InvoicesStore {
  constructor() {
    makeAutoObservable(this);
  }

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
