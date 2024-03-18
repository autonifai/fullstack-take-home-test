import getFormatter from './getFormatter'

export default function formatAmount(amount: number, currencyCode: string): string {
  const formatter = getFormatter(currencyCode)

  return formatter.format(amount)
}