import React from 'react';
import { cn } from '../utils/cn';

export type SkeletonVariant = 'square' | 'round';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant visual dari skeleton
   * @type {SkeletonVariant}
   * @default 'square'
   */
  variant?: SkeletonVariant;

  /**
   * Height skeleton (px, em, rem, %)
   * @type {string}
   */
  height?: string;

  /**
   * Width skeleton (px, em, rem, %)
   * @type {string}
   */
  width?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'square', height, width, className, style, ...props }, ref) => {
    const baseStyles = 'animate-pulse bg-slate-200';

    const variantStyles = {
      square: 'rounded-md',
      round: 'rounded-full',
    } as const;

    const inlineStyles: React.CSSProperties = {
      ...style,
      ...(height && { height }),
      ...(width && { width }),
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        style={inlineStyles}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

