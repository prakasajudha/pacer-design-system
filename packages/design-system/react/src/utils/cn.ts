import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility untuk merge class names dengan Tailwind CSS
 * Menggunakan clsx untuk conditional classes dan twMerge untuk merge Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
