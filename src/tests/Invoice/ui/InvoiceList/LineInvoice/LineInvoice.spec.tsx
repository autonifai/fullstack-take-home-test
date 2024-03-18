import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LineInvoice from '../../../../../Invoice/ui/InvoiceList/LineInvoice/LineInvoice';
import invoiceFixture from '../../../../Fixtures/invoiceFixture';

describe('LineInvoice', () => {
  it('should display the name, vendor and description', () => {
    render(
      <MemoryRouter>
        <LineInvoice invoice={invoiceFixture} />
      </MemoryRouter>
    )

    const name = screen.getByText(invoiceFixture.number)
    const vendor = screen.getByText(invoiceFixture.vendor)
    const description = screen.getByText(invoiceFixture.description)

    expect(name).toBeVisible()
    expect(vendor).toBeVisible()
    expect(description).toBeVisible()
  })

  it('should display the due date properly formatted', () => {
    invoiceFixture.dueDate = "01/01/2024"

    render(
      <MemoryRouter>
        <LineInvoice invoice={invoiceFixture} />
      </MemoryRouter>
    )

    const dueDate = screen.getByText('01/01/24')

    expect(dueDate).toBeInTheDocument()
  })

  it('should display the ammount properly formatted', () => {
    invoiceFixture.totalAmount = 16000.0

    render(
      <MemoryRouter>
        <LineInvoice invoice={invoiceFixture} />
      </MemoryRouter>
    )

    const dueDate = screen.getByText('$16,000.00')

    expect(dueDate).toBeInTheDocument()
  })
})