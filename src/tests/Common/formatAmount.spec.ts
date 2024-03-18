import formatAmount from '../../Common/formatAmount';

describe('formatAmount', () => {
  it('should format the amount number to the american standard', () => {
    const amount = 10000.0
    const currencyCode = "USD"

    const result = formatAmount(amount, currencyCode)

    const formattedAmount = result.slice(1)

    expect(formattedAmount).toBe('10,000.00')
  })

  it('should format the amount with the right currency symbol', () => {
    const amount = 10000.0
    const dollarCurrencyCode = "USD"
    const euroCurrencyCode = "EUR"

    const dolarResult = formatAmount(amount, dollarCurrencyCode)
    const euroResult = formatAmount(amount, euroCurrencyCode)

    const dollarcurrencySymbol = dolarResult[0]
    const euroCurrencySymbol = euroResult[0]

    expect(dollarcurrencySymbol).toBe('$')
    expect(euroCurrencySymbol).toBe('€')
  })
})