import { render, screen } from '@testing-library/react';
import LineInvoice from './LineInvoice';
import invoiceFixture from './invoiceFixture';

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
})