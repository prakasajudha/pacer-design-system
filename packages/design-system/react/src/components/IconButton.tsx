import React from 'react';
import { cn } from '../utils/cn';
import type { ButtonProps } from './Button';

type ExtractVariant = NonNullable<ButtonProps['variant']>;
type ExtractSize = NonNullable<ButtonProps['size']>;
type ExtractColor = NonNullable<ButtonProps['color']>;

export type IconButtonSize = 'xss' | 'xs' | ExtractSize;
export type IconButtonShape = 'square' | 'rounded';
export type IconButtonVariant =
  | Exclude<ExtractVariant, 'link-secondary'>
  | 'link-primary'
  | 'link-secondary';
export type IconButtonColor = ExtractColor;

export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'aria-label'
> & {
  /**
   * Icon-only button wajib memiliki aria-label untuk aksesibilitas.
   */
  'aria-label': string;

  /**
   * Icon sebagai komponen/ReactNode (mis. dari lucide-react atau SVG custom).
   */
  icon: React.ReactNode;

  /**
   * Variant visual IconButton (mengikuti guideline Figma Icon Button)
   */
  variant?: IconButtonVariant;

  /**
   * Ukuran IconButton (xss / xs / sm / md)
   */
  size?: IconButtonSize;

  /**
   * Bentuk: square (tanpa radius) atau rounded (radius 6px)
   */
  shape?: IconButtonShape;

  /**
   * Color button (Primary / Danger / Success / Warning / Neutral) — mengikuti state warna Button
   */
  color?: IconButtonColor;

  /**
   * @deprecated gunakan `color="danger"`.
   */
  destructive?: boolean;

  /**
   * Selected/toggled state
   */
  selected?: boolean;

  /**
   * Loading state (akan men-disable tombol dan menampilkan spinner)
   */
  loading?: boolean;
};

const Spinner = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={cn('animate-spin h-4 w-4', className)}
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

const getIconButtonSizeClasses = (size: IconButtonSize, shape: IconButtonShape) => {
  // Square = var(--radius) → rounded-button (6px); rounded = rounded-full (Figma PACER).
  const radius = shape === 'rounded' ? 'rounded-full' : 'rounded-button';
  if (size === 'xss') return cn('h-5 w-5 p-0.5', radius);
  if (size === 'xs') return cn('h-7 w-7 p-1.5', radius);
  if (size === 'sm') return cn('h-8 w-8 p-2', radius);
  return cn('h-10 w-10 p-3', radius);
};

const getFocusRing = (ringColor: string) => {
  if (ringColor === 'brand-300') return 'focus-ring-primary';
  if (ringColor === 'slate-200') return 'focus-ring-slate';
  if (ringColor === 'red-200') return 'focus-ring-danger';
  if (ringColor === 'green-200') return 'focus-ring-success';
  if (ringColor === 'amber-200') return 'focus-ring-warning';
  return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
};

type VariantOpts = {
  variant: IconButtonVariant;
  color: IconButtonColor;
  selected: boolean;
};

const getIconButtonVariantClasses = ({ variant, color, selected }: VariantOpts) => {
  const isLinkVariant = variant === 'link-primary' || variant === 'link-secondary';

  // Danger
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
    if (variant === 'ghost' || isLinkVariant) {
      return cn(
        'bg-transparent text-red-600',
        'hover:bg-red-50 hover:text-red-700',
        getFocusRing('red-200'),
        'focus-visible:text-red-700',
        selected && 'bg-red-100 text-red-800'
      );
    }
    return cn(
      'bg-red-600 text-white',
      'hover:bg-red-700',
      getFocusRing('red-200'),
      selected && 'bg-red-800'
    );
  }

  // Success
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
        'text-green-600 border border-green-600',
        'hover:bg-green-50 hover:text-green-700 hover:border-green-700',
        getFocusRing('green-200'),
        'focus-visible:text-green-700 focus-visible:border-green-700',
        selected && 'bg-green-100 text-green-800 border-green-800'
      );
    }
    if (variant === 'ghost' || isLinkVariant) {
      return cn(
        'bg-transparent text-green-600',
        'hover:bg-green-50 hover:text-green-700',
        getFocusRing('green-200'),
        'focus-visible:text-green-700',
        selected && 'bg-green-100 text-green-800'
      );
    }
    return '';
  }

  // Warning
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
    if (variant === 'ghost' || isLinkVariant) {
      return cn(
        'bg-transparent text-amber-600',
        'hover:bg-amber-50 hover:text-amber-700',
        getFocusRing('amber-200'),
        'focus-visible:text-amber-700',
        selected && 'bg-amber-100 text-amber-800'
      );
    }
    return '';
  }

  // Neutral
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
        'text-slate-600 border border-slate-600',
        'hover:bg-slate-50 hover:text-slate-700 hover:border-slate-700',
        getFocusRing('slate-200'),
        'focus-visible:text-slate-700 focus-visible:border-slate-700',
        selected && 'bg-slate-100 text-slate-800 border-slate-800'
      );
    }
    if (variant === 'ghost' || isLinkVariant) {
      return cn(
        'bg-transparent text-slate-600',
        'hover:bg-slate-50 hover:text-slate-700',
        getFocusRing('slate-200'),
        'focus-visible:text-slate-700',
        selected && 'bg-slate-100 text-slate-800'
      );
    }
    return '';
  }

  // Primary (default)
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
  if (variant === 'link-primary') {
    return cn(
      'bg-transparent text-brand-300',
      'hover:bg-brand-50',
      getFocusRing('brand-300'),
      selected && 'bg-brand-50'
    );
  }
  if (variant === 'link-secondary') {
    return cn(
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      getFocusRing('slate-200'),
      selected && 'bg-slate-100'
    );
  }

  return cn(
    'bg-brand-300 text-white',
    'hover:bg-brand-400',
    getFocusRing('brand-300'),
    selected && 'bg-brand-500'
  );
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'solid',
      size = 'md',
      shape = 'square',
      color = 'primary',
      destructive = false,
      selected = false,
      loading = false,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = Boolean(disabled || loading);
    const resolvedColor: IconButtonColor = destructive ? 'danger' : color;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center transition-colors select-none disabled:pointer-events-none disabled:opacity-50 active:opacity-90 disabled:active:opacity-50',
          getIconButtonSizeClasses(size, shape),
          getIconButtonVariantClasses({ variant, color: resolvedColor, selected }),
          className
        )}
        aria-pressed={selected || undefined}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          <span className="shrink-0 [&>svg]:size-4 [&>svg]:shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
