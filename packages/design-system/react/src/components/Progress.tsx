import React from 'react';
import { cn } from '../utils/cn';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Background color untuk track (default sesuai Figma).
   * Bisa diisi hex/rgb/rgba/var().
   */
  bgColor?: string;

  /**
   * Color untuk bar/surface (default sesuai Figma).
   * Bisa diisi hex/rgb/rgba/var().
   */
  color?: string;

  /**
   * Nilai progress (0 - 100)
   */
  value?: number;

  /**
   * Tampilkan value text (mis. 50%) di sebelah kanan progress.
   */
  showValue?: boolean;

  /**
   * Suffix/placeholder untuk value, default '%'
   */
  valuePlaceholder?: string;

  /**
   * Ukuran progress bar (tinggi).
   */
  size?: ProgressSize;
}

const clampValue = (value: number | undefined) => {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return 0;
  return Math.min(100, Math.max(0, Math.round(raw)));
};

const sizeClasses: Record<ProgressSize, string> = {
  xs: 'h-1', // 4px
  sm: 'h-2', // 8px
  md: 'h-3', // 12px
  lg: 'h-4', // 16px
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      bgColor = '#E6F0FE',
      color = '#016BF8',
      value = 0,
      showValue = false,
      valuePlaceholder = '%',
      size = 'md',
      className,
      style,
      ...props
    },
    ref
  ) => {
    const clamped = clampValue(value);
    const displayValue = `${clamped}${valuePlaceholder ?? '%'}`;

    const trackStyle: React.CSSProperties = {
      ...style,
      backgroundColor: bgColor,
    };

    const barStyle: React.CSSProperties = {
      backgroundColor: color,
      transform: `scaleX(${clamped / 100})`,
    };

    return (
      <div className="flex items-center gap-3">
        <div
          ref={ref}
          className={cn('relative overflow-hidden rounded-full w-full', sizeClasses[size], className)}
          style={trackStyle}
          role="progressbar"
          aria-label="Progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={clamped}
          {...props}
        >
        <div
          className="absolute inset-0 origin-left transition-transform duration-300 ease-out will-change-transform"
          style={barStyle}
        />
        </div>

        {showValue ? (
          <span className="text-sm font-medium text-slate-900 tabular-nums" aria-label="Progress value">
            {displayValue}
          </span>
        ) : null}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

