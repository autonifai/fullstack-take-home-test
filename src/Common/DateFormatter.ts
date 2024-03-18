import dayjs from 'dayjs';

export default class DateFormatter {
  private static shortDateFormat = 'DD/MM/YY'
  private static longDateFormat = 'DD/MM/YYYY'

  static long(date: string): string {
    return dayjs(date).format(DateFormatter.longDateFormat)
  }

  static short(date: string): string {
    return dayjs(date).format(DateFormatter.shortDateFormat)
  }
}