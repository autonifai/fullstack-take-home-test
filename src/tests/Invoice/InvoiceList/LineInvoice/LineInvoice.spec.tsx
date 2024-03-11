import { render, screen } from '@testing-library/react';
import LineInvoice from '../../../../Invoice/InvoiceList/LineInvoice/LineInvoice';
import invoiceFixture from '../../../Fixtures/invoiceFixture';
import dayjs from 'dayjs';

describe('LineInvoice', () => {
  it('should display the name, vendor and description', () => {
    render(<LineInvoice invoice={invoiceFixture} />)

    const name = screen.getByText(invoiceFixture.name)
    const vendor = screen.getByText(invoiceFixture.vendor)
    const description = screen.getByText(invoiceFixture.description)

    expect(name).toBeVisible()
    expect(vendor).toBeVisible()
    expect(description).toBeVisible()
  })

  it('should display the due date properly formatted', () => {
    invoiceFixture.dueDate = dayjs("01/01/2024")

    render(<LineInvoice invoice={invoiceFixture} />)

    const dueDate = screen.getByText(invoiceFixture.dueDate.format('01/01/24'))

    expect(dueDate).toBeInTheDocument()
  })

  it('should display the ammount properly formatted', () => {
    invoiceFixture.totalAmount = 16000.0

    render(<LineInvoice invoice={invoiceFixture} />)

    const dueDate = screen.getByText('$16,000.00')

    expect(dueDate).toBeInTheDocument()
  })
})