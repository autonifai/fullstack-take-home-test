import getFormatter from './getFormatter'

describe('getFormatter', () => {
  it('should return the same formatter instance given the same currency code', () => {
    const sameCurrencyCode = 'USD'

    const firstFormatter = getFormatter(sameCurrencyCode)
    const secondFormatter = getFormatter(sameCurrencyCode)

    expect(firstFormatter).toBe(secondFormatter)
  })
})