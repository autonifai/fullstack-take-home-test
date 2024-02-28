import { makeAutoObservable } from 'mobx';

const invoices = [6, 7, 8];

class InvoicesStore {
  constructor() {
    makeAutoObservable(this);
  }

  get invoices() {
    return invoices;
  }
}

export default InvoicesStore;
