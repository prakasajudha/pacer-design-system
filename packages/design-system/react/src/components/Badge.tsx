import React from 'react';
import { cn } from '../utils/cn';

export type BadgeVariant = 'solid' | 'secondary' | 'outline';

export type BadgeType = 'rounded' | 'square';

export type BadgeColor =
  | 'slate'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'purple'
  | 'pink'
  | 'orange';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant visual dari badge
   * @type {BadgeVariant}
   */
  variant?: BadgeVariant;

  /**
   * Type badge (rounded atau square)
   * @type {BadgeType}
   */
  type?: BadgeType;

  /**
   * Color badge
   * @type {BadgeColor}
   */
  color?: BadgeColor;

  /**
   * Label badge (jika ada, akan menggantikan children)
   * @type {string}
   */
  label?: string;

  /**
   * Konten badge (JSX)
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { variant = 'solid', type = 'rounded', color = 'slate', label, children, className, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-0.5 py-0.5 px-2.5 text-xs font-semibold';

    const typeStyles = {
      rounded: 'rounded-full',
      square: 'rounded-[4px]',
    } as const;

    const getVariantStyles = () => {
      if (variant === 'solid') {
        if (color === 'slate') {
          return 'bg-slate-900 text-white';
        }
        if (color === 'primary') {
          return 'bg-brand-300 text-white';
        }
        if (color === 'danger') {
          return 'bg-red-600 text-white';
        }
        if (color === 'warning') {
          return 'bg-yellow-500 text-slate-50';
        }
        if (color === 'success') {
          return 'bg-green-600 text-white';
        }
        if (color === 'purple') {
          return 'bg-purple-600 text-white';
        }
        if (color === 'pink') {
          return 'bg-pink-600 text-white';
        }
        if (color === 'orange') {
          return 'bg-orange-600 text-white';
        }
        // Default fallback
        return 'bg-slate-900 text-white';
      }

      if (variant === 'secondary') {
        if (color === 'slate') {
          return 'bg-slate-100 text-slate-900';
        }
        if (color === 'primary') {
          return 'bg-brand-50 text-brand-300';
        }
        if (color === 'danger') {
          return 'bg-red-50 text-red-600';
        }
        if (color === 'warning') {
          return 'bg-yellow-50 text-yellow-700';
        }
        if (color === 'success') {
          return 'bg-green-50 text-green-600';
        }
        if (color === 'purple') {
          return 'bg-purple-50 text-purple-600';
        }
        if (color === 'pink') {
          return 'bg-pink-50 text-pink-600';
        }
        if (color === 'orange') {
          return 'bg-orange-50 text-orange-600';
        }
        // Default fallback
        return 'bg-slate-100 text-slate-900';
      }

      if (variant === 'outline') {
        if (color === 'slate') {
          return 'bg-white text-slate-900 border border-slate-300';
        }
        if (color === 'primary') {
          return 'bg-white text-brand-300 border border-brand-300';
        }
        if (color === 'danger') {
          return 'bg-white text-red-600 border border-red-600';
        }
        if (color === 'warning') {
          return 'bg-white text-yellow-700 border border-yellow-500';
        }
        if (color === 'success') {
          return 'bg-white text-green-600 border border-green-600';
        }
        if (color === 'purple') {
          return 'bg-white text-purple-600 border border-purple-600';
        }
        if (color === 'pink') {
          return 'bg-white text-pink-600 border border-pink-600';
        }
        if (color === 'orange') {
          return 'bg-white text-orange-600 border border-orange-600';
        }
        // Default fallback
        return 'bg-white text-slate-900 border border-slate-300';
      }

      return '';
    };

    const content = label || children;

    return (
      <div
        ref={ref}
        className={cn(baseStyles, typeStyles[type], getVariantStyles(), className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
