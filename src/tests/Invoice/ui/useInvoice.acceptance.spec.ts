import { renderHook, waitFor } from '@testing-library/react';
import apiGetAllInvoicesFixture from '../../Fixtures/apiGetAllInvoicesFixture';
import useInvoices from '../../../Invoice/ui/useInvoices';
import axios from 'axios'
import InvoiceService from '../../../Invoice/application/InvoiceService';
import RestInvoiceRepository from '../../../Invoice/infrastructure/RestInvoiceRepository';
import { HttpClient } from '../../../Common';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('useInvoice', () => {
  it('should retrieve all the invoices', async () => {
    mockedAxios.get.mockImplementation(async () => {
      return {
        data: apiGetAllInvoicesFixture
      }
    })

    const httpClient = new HttpClient('http://localhost:8000')
    const invoiceRepository = new RestInvoiceRepository(httpClient)
    const invoiceService = new InvoiceService(invoiceRepository)

    const { result } = renderHook(() => useInvoices(invoiceService))

    await waitFor(() => expect(result.current.invoices).toHaveLength(apiGetAllInvoicesFixture.length))
  })
})