import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function cx(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
