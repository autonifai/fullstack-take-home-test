/** TESTING NOTE
 * On the real app the culture would not be hard-coded,
 * it rather come from the appropriate place according to the business rule
 */
const culture = 'en-IE';

const NUMBER = {
  minimumFractionDigits: 2,
};

function useFormatting() {
  return {
    getDate(date: Date) {
      return date.toLocaleDateString(culture, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    },
    getMoney(amount: number, currency: string) {
      return amount.toLocaleString(culture, {
        ...NUMBER,
        style: 'currency',
        currency,
      });
    },
    getNumber(amount: number) {
      return amount.toLocaleString(culture, {
        ...NUMBER,
        style: 'decimal',
      });
    },
  };
}

export default useFormatting;
