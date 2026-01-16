import React from 'react';
import { cn } from '../utils/cn';

// Type exports for IconButton
export type ButtonVariant =
  | 'solid'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link-primary'
  | 'link-secondary';

export type ButtonSize = 'sm' | 'md';

export type ButtonColor = 'primary' | 'danger';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Variant visual dari button
   * @type {ButtonVariant}
   */
  variant?: ButtonVariant;

  /**
   * Ukuran button (non-link)
   * @type {ButtonSize}
   */
  size?: ButtonSize;

  /**
   * Loading state
   * @type {boolean}
   */
  loading?: boolean;

  /**
   * Color button (Primary (default) / Danger)
   * @type {ButtonColor}
   */
  color?: ButtonColor;

  /**
   * Selected/toggled state
   * @type {boolean}
   */
  selected?: boolean;

  /**
   * Icon sebelum label tombol
   * @type {React.ReactNode}
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon setelah label tombol
   * @type {React.ReactNode}
   */
  rightIcon?: React.ReactNode;

  /**
   * Native HTML button type
   * @type {'button' | 'submit' | 'reset'}
   */
  type?: 'button' | 'submit' | 'reset';
}

const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg
      aria-hidden="true"
      className={cn('animate-spin h-4 w-4 mr-1', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      loading = false,
      color = 'primary',
      selected = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium text-sm leading-6 transition-colors select-none disabled:pointer-events-none disabled:opacity-50';

    const isLinkVariant = variant === 'link-primary' || variant === 'link-secondary';

    // Link variants are special in Figma (24px height, no padding/bg).
    if (isLinkVariant) {
      const linkColor =
        color === 'danger'
          ? 'text-red-600'
          : variant === 'link-primary'
            ? 'text-brand-300'
            : 'text-slate-900';
      const focusRing =
        color === 'danger'
          ? 'focus-visible:ring-red-200'
          : variant === 'link-primary'
            ? 'focus-visible:ring-brand-200'
            : 'focus-visible:ring-slate-200';

      return (
        <button
          ref={ref}
          type={type}
          className={cn(
            baseStyles,
            'h-6 px-0 py-0 rounded-none underline-offset-4',
            color === 'danger' ? 'hover:text-red-700 hover:underline' : 'hover:underline',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
            focusRing,
            linkColor,
            selected && 'underline',
            className
          )}
          disabled={disabled || loading}
          aria-pressed={selected || undefined}
          {...props}
        >
          {loading && <Spinner />}
          {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children && <span className="px-1">{children}</span>}
          {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </button>
      );
    }

    // Menggunakan theme values untuk menghindari arbitrary values (SAST/DAST safe)
    const sizeStyles = {
      sm: 'min-w-button-sm py-1.5 px-2 gap-0 rounded-button',
      md: 'min-w-button-md py-2 px-3 gap-1 rounded-button',
    } as const;

    // Helper untuk double ring focus effect (outer + inner ring)
    // Menggunakan utility classes dari theme untuk menghindari arbitrary shadow values
    const getFocusRing = (ringColor: string) => {
      // Menggunakan utility classes yang sudah didefinisikan di Tailwind preset
      if (ringColor === 'brand-300') {
        return 'focus-ring-primary';
      }
      if (ringColor === 'slate-200') {
        return 'focus-ring-slate';
      }
      if (ringColor === 'red-200') {
        return 'focus-ring-danger';
      }
      return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
    };

    const getVariantStyles = () => {
      if (color === 'danger') {
        if (variant === 'secondary') {
          return cn(
            'bg-white text-red-600 border border-red-600',
            'hover:bg-red-50 hover:text-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700',
            selected && 'bg-red-50 text-red-700'
          );
        }

        if (variant === 'outline') {
          return cn(
            'bg-white text-red-600 border border-red-600',
            'hover:bg-red-50 hover:text-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700',
            selected && 'bg-red-50 text-red-700'
          );
        }

        if (variant === 'ghost') {
          return cn(
            'bg-transparent text-red-600',
            'hover:bg-red-50 hover:text-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700',
            selected && 'bg-red-50 text-red-700'
          );
        }

        // solid variant when danger is true
        return cn(
          'bg-red-600 text-white',
          'hover:bg-red-700',
          getFocusRing('red-200'),
          selected && 'bg-red-700'
        );
      }

      if (variant === 'solid') {
        return cn(
          'bg-brand-300 text-white',
          'hover:bg-brand-400',
          getFocusRing('brand-300'),
          selected && 'bg-brand-400'
        );
      }

      if (variant === 'secondary') {
        return cn(
          'bg-white text-brand-300 border border-brand-300',
          'hover:bg-brand-50 hover:text-brand-400',
          getFocusRing('brand-300'),
          'focus-visible:text-brand-400',
          selected && 'bg-brand-50 text-brand-500'
        );
      }

      if (variant === 'outline') {
        return cn(
          'bg-white text-slate-900 border border-slate-300',
          'hover:bg-slate-50',
          getFocusRing('slate-200'),
          selected && 'bg-slate-100'
        );
      }

      if (variant === 'ghost') {
        return cn(
          'bg-transparent text-slate-900',
          'hover:bg-slate-100',
          getFocusRing('slate-200'),
          selected && 'bg-slate-100'
        );
      }

      // Fallback: solid style
      return cn(
        'bg-brand-300 text-white',
        'hover:bg-brand-400',
        getFocusRing('brand-300'),
        selected && 'bg-brand-400'
      );
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, sizeStyles[size], getVariantStyles(), className)}
        disabled={disabled || loading}
        aria-pressed={selected || undefined}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children && <span className="px-1">{children}</span>}
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
