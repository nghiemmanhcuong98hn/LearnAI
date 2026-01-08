import dayjs from 'dayjs';

// plugins
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isBetween from 'dayjs/plugin/isBetween';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// locale
import 'dayjs/locale/vi';

// extend
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(localizedFormat);

// default locale & timezone
dayjs.locale('vi');
dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

// ========== FORMAT ==========
export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => dayjs(date).format(format);

export const formatDateTime = (date: string | Date) => dayjs(date).format('YYYY-MM-DD HH:mm');

export const fromNow = (date: string | Date) => dayjs(date).fromNow();

// ========== COMPARE ==========
export const isBefore = (a: string | Date, b: string | Date) => dayjs(a).isBefore(dayjs(b));

export const isAfter = (a: string | Date, b: string | Date) => dayjs(a).isAfter(dayjs(b));

export const isBetweenDates = (date: string | Date, start: string | Date, end: string | Date, inclusive = true) =>
  dayjs(date).isBetween(dayjs(start), dayjs(end), null, inclusive ? '[]' : '()');

// ========== MANIPULATE ==========
export const addDays = (date: string | Date, days: number) => dayjs(date).add(days, 'day');

export const subtractDays = (date: string | Date, days: number) => dayjs(date).subtract(days, 'day');

export const startOfDay = (date: string | Date) => dayjs(date).startOf('day');

export const endOfDay = (date: string | Date) => dayjs(date).endOf('day');

// ========== TIMEZONE ==========
export const toLocalTime = (date: string | Date, tz = 'Asia/Ho_Chi_Minh') => dayjs(date).tz(tz);

// ========== NOW ==========
export const now = () => dayjs();
