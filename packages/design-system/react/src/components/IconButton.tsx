import React from 'react';
import { cn } from '../utils/cn';
import type { ButtonProps } from './Button';

type ExtractVariant = NonNullable<ButtonProps['variant']>;
type ExtractSize = NonNullable<ButtonProps['size']>;
type ExtractColor = NonNullable<ButtonProps['color']>;

export type IconButtonSize = 'xss' | 'xs' | ExtractSize;
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
   * Ukuran IconButton (md/sm/xs/xss)
   */
  size?: IconButtonSize;

  /**
   * Color button (Primary (default) / Danger)
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

const Spinner = ({ className }: { className?: string }) => {
  return (
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
};

const getIconButtonSizeClasses = (size: IconButtonSize) => {
  if (size === 'xss') return 'h-5 w-5 p-0.5 rounded-[6px]';
  if (size === 'xs') return 'h-7 w-7 p-1.5 rounded-[6px]';
  if (size === 'sm') return 'h-8 w-8 p-2 rounded-[6px]';
  return 'h-10 w-10 p-3 rounded-[6px]';
};

type VariantOpts = { variant: IconButtonVariant; isDanger: boolean; selected: boolean };

const normalizeVariant = (variant: IconButtonVariant) => {
  return variant;
};

const getIconButtonVariantClasses = ({ variant, isDanger, selected }: VariantOpts) => {
  // IconButton "Link" in Figma is still a square icon area (40x40 for md), just without bg/border.
  const normalizedVariant = normalizeVariant(variant);
  const isLinkVariant =
    normalizedVariant === 'link-primary' || normalizedVariant === 'link-secondary';

  if (isDanger) {
    if (variant === 'secondary') {
      return cn(
        'bg-white text-red-600 border border-red-600',
        'hover:bg-red-50 hover:text-red-700',
        'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'focus-visible:text-red-700',
        selected && 'bg-red-50 text-red-700'
      );
    }

    if (variant === 'outline') {
      return cn(
        'bg-white text-red-600 border border-red-600',
        'hover:bg-red-50 hover:text-red-700',
        'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'focus-visible:text-red-700',
        selected && 'bg-red-50 text-red-700'
      );
    }

    if (variant === 'ghost' || isLinkVariant) {
      return cn(
        'bg-transparent text-red-600',
        'hover:bg-red-50 hover:text-red-700',
        'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'focus-visible:text-red-700',
        selected && 'bg-red-50 text-red-700'
      );
    }

    return cn(
      'bg-red-600 text-white',
      'hover:bg-red-700',
      'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-red-700'
    );
  }

  if (variant === 'solid') {
    return cn(
      'bg-brand-300 text-white',
      'hover:bg-brand-400',
      'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-brand-400'
    );
  }

  if (variant === 'secondary') {
    return cn(
      'bg-white text-brand-300 border border-brand-300',
      'hover:bg-brand-50',
      'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-brand-50'
    );
  }

  if (variant === 'outline') {
    return cn(
      'bg-white text-slate-900 border border-slate-300',
      'hover:bg-slate-50',
      'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-slate-100'
    );
  }

  if (variant === 'ghost') {
    return cn(
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-slate-100'
    );
  }

  if (normalizedVariant === 'link-primary') {
    return cn(
      'bg-transparent text-brand-300',
      'hover:bg-brand-50',
      'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-brand-50'
    );
  }

  if (variant === 'link-secondary') {
    return cn(
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      selected && 'bg-slate-100'
    );
  }

  return '';
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'solid',
      size = 'md',
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
    const normalizedVariant = normalizeVariant(variant);
    // Support deprecated destructive prop for backward compatibility
    const resolvedColor: IconButtonColor = destructive ? 'danger' : color;
    const isDanger = resolvedColor === 'danger';

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center transition-colors select-none disabled:pointer-events-none disabled:opacity-50',
          getIconButtonSizeClasses(size),
          getIconButtonVariantClasses({
            variant: normalizedVariant as any,
            isDanger,
            selected,
          }),
          className
        )}
        aria-pressed={selected || undefined}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          <span className="shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
