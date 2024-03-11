const formatterCache: {[currencyFormatter: string]: Intl.NumberFormat} = { }

export default function getFormatter(currencyCode: string): Intl.NumberFormat {
  const formatterKey = currencyCode

  if (!formatterCache[formatterKey]) {
    formatterCache[formatterKey] = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return formatterCache[formatterKey]
}