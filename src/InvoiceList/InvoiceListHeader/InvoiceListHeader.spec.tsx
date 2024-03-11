import { render, screen } from '@testing-library/react';
import InvoiceListHeader from './InvoiceListHeader';

describe('InvoiceListHeader', () => {
  it('should render every label', () => {
    render(<InvoiceListHeader />)

    const nameLabel = screen.getByText('Invoice name')
    const vendorLabel = screen.getByText('Vendor name')
    const descriptionLabel = screen.getByText('Invoice description')
    const dueDateLabel = screen.getByText('Due date')
    const amountLabel = screen.getByText('Amount')

    expect(nameLabel).toBeVisible()
    expect(vendorLabel).toBeVisible()
    expect(descriptionLabel).toBeVisible()
    expect(dueDateLabel).toBeVisible()
    expect(amountLabel).toBeVisible()
  })
})