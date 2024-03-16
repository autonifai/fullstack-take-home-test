import { render, screen } from '@testing-library/react';
import InvoiceListHeader from '../../../../../Invoice/ui/InvoiceList/InvoiceListHeader/InvoiceListHeader';

describe('InvoiceListHeader', () => {
  it('should render every label', () => {
    render(<InvoiceListHeader />)

    const nameLabel = screen.getByText('Invoice Number')
    const vendorLabel = screen.getByText('Vendor Name')
    const descriptionLabel = screen.getByText('Invoice Description')
    const dueDateLabel = screen.getByText('Due Date')
    const amountLabel = screen.getByText('Amount')

    expect(nameLabel).toBeVisible()
    expect(vendorLabel).toBeVisible()
    expect(descriptionLabel).toBeVisible()
    expect(dueDateLabel).toBeVisible()
    expect(amountLabel).toBeVisible()
  })
})