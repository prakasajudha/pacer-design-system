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

export type ButtonShape = 'square' | 'rounded';

export type ButtonColor = 'primary' | 'danger' | 'success' | 'warning' | 'neutral';

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
   * Bentuk: square (tanpa radius) atau rounded (radius 6px). Default square sesuai Figma PACER.
   * @type {ButtonShape}
   */
  shape?: ButtonShape;

  /**
   * Loading state
   * @type {boolean}
   */
  loading?: boolean;

  /**
   * Color button (Primary / Danger / Success / Warning / Neutral)
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
      'inline-flex items-center justify-center font-medium text-sm leading-6 transition-colors select-none disabled:pointer-events-none disabled:opacity-50 active:opacity-90 disabled:active:opacity-50';

    const isLinkVariant = variant === 'link-primary' || variant === 'link-secondary';

    // Link variants are special in Figma (24px height, no padding/bg).
    if (isLinkVariant) {
      const linkColor =
        color === 'danger'
          ? 'text-red-600'
          : color === 'success'
            ? 'text-green-600'
            : color === 'warning'
              ? 'text-amber-600'
              : color === 'neutral'
                ? 'text-slate-600'
                : variant === 'link-primary'
                  ? 'text-brand-300'
                  : 'text-slate-900';
      const focusRing =
        color === 'danger'
          ? 'focus-ring-danger'
          : color === 'success'
            ? 'focus-ring-success'
            : color === 'warning'
              ? 'focus-ring-warning'
              : variant === 'link-primary'
                ? 'focus-ring-primary'
                : 'focus-ring-slate';

      return (
        <button
          ref={ref}
          type={type}
          className={cn(
            baseStyles,
            'h-6 px-0 py-0 rounded-none underline-offset-4',
            color === 'danger'
              ? 'hover:text-red-700 hover:underline'
              : color === 'success'
                ? 'hover:text-green-700 hover:underline'
                : color === 'warning'
                  ? 'hover:text-amber-700 hover:underline'
                  : color === 'neutral'
                    ? 'hover:text-slate-700 hover:underline'
                    : 'hover:underline',
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

    // Shape: square = rounded-lg + border 1px #000; rounded = rounded-full (Figma PACER).
    const radiusClass = shape === 'rounded' ? 'rounded-full' : 'rounded-lg';
    const squareBorderClass =
      shape === 'square' && (variant === 'solid' || variant === 'secondary' || variant === 'ghost')
        ? 'border border-black'
        : '';
    const sizeStyles = {
      sm: `min-w-button-sm h-9 py-1.5 px-2 gap-0 ${radiusClass} text-sm`,
      md: `min-w-button-md h-10 py-2 px-3 gap-1 ${radiusClass} text-sm`,
    } as const;

    // Helper untuk double ring focus effect (outer + inner ring)
    // Menggunakan utility classes dari theme untuk menghindari arbitrary shadow values
    const getFocusRing = (ringColor: string) => {
      if (ringColor === 'brand-300') return 'focus-ring-primary';
      if (ringColor === 'slate-200') return 'focus-ring-slate';
      if (ringColor === 'red-200') return 'focus-ring-danger';
      if (ringColor === 'green-200') return 'focus-ring-success';
      if (ringColor === 'amber-200') return 'focus-ring-warning';
      return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
    };

    const getVariantStyles = () => {
      if (color === 'danger') {
        if (variant === 'secondary') {
          return cn(
            'bg-red-50 text-red-600',
            'hover:bg-red-100 hover:text-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700',
            selected && 'bg-red-200 text-red-800'
          );
        }

        if (variant === 'outline') {
          return cn(
            'text-red-600 border border-red-600',
            'hover:bg-red-50 hover:text-red-700 hover:border-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700 focus-visible:border-red-700',
            selected && 'bg-red-100 text-red-800 border-red-800'
          );
        }

        if (variant === 'ghost') {
          return cn(
            'bg-transparent text-red-600',
            'hover:bg-red-50 hover:text-red-700',
            getFocusRing('red-200'),
            'focus-visible:text-red-700',
            selected && 'bg-red-100 text-red-800'
          );
        }

        // solid variant when danger is true
        return cn(
          'bg-red-600 text-white',
          'hover:bg-red-700',
          getFocusRing('red-200'),
          selected && 'bg-red-800'
        );
      }

      if (color === 'success') {
        if (variant === 'solid') {
          return cn(
            'bg-green-600 text-white',
            'hover:bg-green-700',
            getFocusRing('green-200'),
            selected && 'bg-green-800'
          );
        }
        if (variant === 'secondary') {
          return cn(
            'bg-green-50 text-green-600',
            'hover:bg-green-100 hover:text-green-700',
            getFocusRing('green-200'),
            'focus-visible:text-green-700',
            selected && 'bg-green-200 text-green-800'
          );
        }
        if (variant === 'outline') {
          return cn(
            'btn-outline-no-bg bg-transparent text-green-600 border border-green-600',
            'hover:bg-green-50 hover:text-green-700 hover:border-green-700',
            getFocusRing('green-200'),
            'focus-visible:text-green-700 focus-visible:border-green-700',
            selected && 'bg-green-100 text-green-800 border-green-800'
          );
        }
        if (variant === 'ghost') {
          return cn(
            'bg-transparent text-green-600',
            'hover:bg-green-50 hover:text-green-700',
            getFocusRing('green-200'),
            'focus-visible:text-green-700',
            selected && 'bg-green-100 text-green-800'
          );
        }
      }

      if (color === 'warning') {
        if (variant === 'solid') {
          return cn(
            'bg-amber-600 text-white',
            'hover:bg-amber-700',
            getFocusRing('amber-200'),
            selected && 'bg-amber-800'
          );
        }
        if (variant === 'secondary') {
          return cn(
            'bg-amber-50 text-amber-600',
            'hover:bg-amber-100 hover:text-amber-700',
            getFocusRing('amber-200'),
            'focus-visible:text-amber-700',
            selected && 'bg-amber-200 text-amber-800'
          );
        }
        if (variant === 'outline') {
          return cn(
            'text-amber-600 border border-amber-600',
            'hover:bg-amber-50 hover:text-amber-700 hover:border-amber-700',
            getFocusRing('amber-200'),
            'focus-visible:text-amber-700 focus-visible:border-amber-700',
            selected && 'bg-amber-100 text-amber-800 border-amber-800'
          );
        }
        if (variant === 'ghost') {
          return cn(
            'bg-transparent text-amber-600',
            'hover:bg-amber-50 hover:text-amber-700',
            getFocusRing('amber-200'),
            'focus-visible:text-amber-700',
            selected && 'bg-amber-100 text-amber-800'
          );
        }
      }

      if (color === 'neutral') {
        if (variant === 'solid') {
          return cn(
            'bg-slate-600 text-white',
            'hover:bg-slate-700',
            getFocusRing('slate-200'),
            selected && 'bg-slate-800'
          );
        }
        if (variant === 'secondary') {
          return cn(
            'bg-slate-100 text-slate-600',
            'hover:bg-slate-200 hover:text-slate-700',
            getFocusRing('slate-200'),
            'focus-visible:text-slate-700',
            selected && 'bg-slate-300 text-slate-800'
          );
        }
        if (variant === 'outline') {
          return cn(
            'btn-outline-no-bg bg-transparent text-slate-600 border border-slate-600',
            'hover:bg-slate-50 hover:text-slate-700 hover:border-slate-700',
            getFocusRing('slate-200'),
            'focus-visible:text-slate-700 focus-visible:border-slate-700',
            selected && 'bg-slate-100 text-slate-800 border-slate-800'
          );
        }
        if (variant === 'ghost') {
          return cn(
            'bg-transparent text-slate-600',
            'hover:bg-slate-50 hover:text-slate-700',
            getFocusRing('slate-200'),
            'focus-visible:text-slate-700',
            selected && 'bg-slate-100 text-slate-800'
          );
        }
      }

      if (variant === 'solid') {
        return cn(
          'bg-brand-300 text-white',
          'hover:bg-brand-400',
          getFocusRing('brand-300'),
          selected && 'bg-brand-500'
        );
      }

      if (variant === 'secondary') {
        return cn(
          'bg-brand-50 text-brand-600',
          'hover:bg-brand-100 hover:text-brand-700',
          getFocusRing('brand-300'),
          'focus-visible:text-brand-700',
          selected && 'bg-brand-200 text-brand-800'
        );
      }

      if (variant === 'outline') {
        return cn(
          'text-slate-900 border border-slate-300',
          'hover:bg-slate-50 hover:border-slate-400',
          getFocusRing('slate-200'),
          'focus-visible:border-slate-400',
          selected && 'bg-brand-50 text-brand-700 border-brand-500'
        );
      }

      if (variant === 'ghost') {
        return cn(
          'bg-transparent text-slate-900',
          'hover:bg-slate-100',
          getFocusRing('slate-200'),
          selected && 'bg-brand-50 text-brand-700'
        );
      }

      // Fallback: solid style
      return cn(
        'bg-brand-300 text-white',
        'hover:bg-brand-400',
        getFocusRing('brand-300'),
        selected && 'bg-brand-500'
      );
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, sizeStyles[size], squareBorderClass, getVariantStyles(), className)}
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
