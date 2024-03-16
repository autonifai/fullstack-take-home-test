import InvoiceStatus from '../InvoiceStatusEnum'

export default class InvoiceTransformer {
  public static fromApi(apiInvoice: any) {
    return {
      number: apiInvoice.number,
      preTaxAmount: apiInvoice.pre_tax_amount,
      poNumber: apiInvoice.po_number,
      discount: apiInvoice.discount,
      dateOfIssue: apiInvoice.date_of_issue,
      taxAmount: apiInvoice.tax_amount,
      vendor: apiInvoice.vendor,
      id: apiInvoice.id,
      dueDate: apiInvoice.due_date,
      totalAmount: apiInvoice.total_amount,
      vendorBankDetails: apiInvoice.vendor_bank_details,
      currency: apiInvoice.currency,
      glCode: apiInvoice.gl_code,
      vendorTaxRegistrationNumber: apiInvoice.vendor_tax_registration_number,
      paymentTerms: apiInvoice.payment_terms,
      vendorAddress: apiInvoice.vendor_address,
      description: apiInvoice.description,
      costCentre: apiInvoice.cost_centre,
      billingAddress: apiInvoice.billing_address,
      lineItemDetails: apiInvoice.line_item_details,
      status: this.mapStatusToEnum(apiInvoice.status),
    }
  }

  private static mapStatusToEnum(status: string): InvoiceStatus {
    switch (status) {
      case "TO_BE_VALIDATED":
        return InvoiceStatus.TO_BE_VALIDATED
      default:
        return InvoiceStatus.UNKONWN
    }
  }
}
