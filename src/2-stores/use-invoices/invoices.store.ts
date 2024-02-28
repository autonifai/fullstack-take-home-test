import { makeAutoObservable } from 'mobx';

type Data = Record<string, number>;

class InvoicesStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _data: Data = {};
  private _memo: number[] | undefined;

  get invoices() {
    if (!this._memo) {
      this._memo = Object.values(this._data);
    }

    return this._memo;
  }

  setData = (invoices: number[]) => {
    this._memo = undefined;
    this._data = invoices.reduce<Data>(normalize, {});
  };
}

function normalize(data: Data, invoice: number): Data {
  return {
    ...data,
    [invoice]: invoice,
  };
}

export default InvoicesStore;
