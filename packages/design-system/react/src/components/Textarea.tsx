import React from 'react';
import { cn } from '../utils/cn';
import { FormFieldLabel } from './FormFieldLabel';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaVariant = 'border' | 'background';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children' | 'rows' | 'title' | 'onChange'> {
  /**
   * Nilai (controlled)
   */
  value?: string;
  /**
   * Callback saat nilai berubah
   */
  onChange?: (value: string) => void;
  /**
   * Size: sm, md, lg
   */
  size?: TextareaSize;
  /**
   * Variant tampilan: border (putih + border) atau background (abu-abu isi, tanpa border).
   */
  variant?: TextareaVariant;
  /**
   * Label di atas. String atau ReactNode (komponen/JSX).
   */
  title?: React.ReactNode;
  /**
   * Teks bantuan di bawah. String atau ReactNode (komponen/JSX). Tidak ditampilkan saat error.
   */
  description?: React.ReactNode;
  /**
   * Jika true, tampilkan asterisk merah (*) setelah label (wajib).
   */
  isMandatory?: boolean;
  /**
   * Jika true, tampilkan icon informasi dengan tooltip di samping label.
   */
  showTooltip?: boolean;
  /**
   * Isi tooltip saat showTooltip true. Komponen/ReactNode.
   */
  tooltipInformation?: React.ReactNode;
  /**
   * Nonaktif
   */
  disabled?: boolean;
  /**
   * State error
   */
  error?: boolean;
  /**
   * Pesan saat error
   */
  errorMessage?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Resize behavior: none, vertical, horizontal, both
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const sizeStyles: Record<TextareaSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-3 py-2.5 text-base',
  lg: 'px-3 py-3 text-lg',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      onChange,
      size = 'md',
      variant = 'border',
      title,
      description,
      isMandatory = false,
      showTooltip = false,
      tooltipInformation,
      disabled = false,
      error = false,
      errorMessage,
      placeholder,
      resize = 'vertical',
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const id = providedId ?? `textarea-${React.useId()}`;

    const variantClass =
      variant === 'background'
        ? 'bg-slate-50 text-slate-900 placeholder:text-slate-500'
        : 'bg-white text-slate-900 placeholder:text-slate-400';

    const disabledClass = disabled
      ? variant === 'background'
        ? 'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 disabled:placeholder-slate-400'
        : 'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-400 disabled:placeholder-slate-400'
      : '';

    const baseClass =
      'block w-full min-w-0 min-h-[120px] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    const stateClass = error
      ? 'border border-solid border-error-500 focus:border-error-500 focus:ring-error-500 focus-visible:ring-error-500'
      : variant === 'background'
        ? 'border-0 focus:ring-brand-300 focus-visible:ring-brand-300'
        : 'border border-solid border-slate-300 focus:ring-brand-300 focus-visible:ring-brand-300';
    const resizeClass =
      resize === 'none'
        ? 'resize-none'
        : resize === 'vertical'
          ? 'resize-y'
          : resize === 'horizontal'
            ? 'resize-x'
            : 'resize';

    const rootClass = 'flex flex-col gap-1.5';
    const labelClass = 'block text-sm font-medium text-slate-700 w-full';
    const errorClass = 'block text-sm text-error-600 w-full';
    const descClass = 'block text-sm font-normal leading-5 text-slate-500 w-full';

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    };

    const hasDescription = description != null && description !== '';

    return (
      <div className={rootClass}>
        <FormFieldLabel
          label={title}
          isMandatory={isMandatory}
          showTooltip={showTooltip}
          tooltipInformation={tooltipInformation}
          htmlFor={id}
          className={labelClass}
        />

        <textarea
          ref={ref}
          id={id}
          value={value ?? ''}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            [hasDescription && !error ? `${id}-desc` : null, error && errorMessage ? `${id}-err` : null].filter(Boolean).join(' ') || undefined
          }
          className={cn(baseClass, variantClass, sizeStyles[size], stateClass, resizeClass, disabledClass, className)}
          {...props}
        />

        {hasDescription && !error && (
          <span id={`${id}-desc`} className={descClass}>
            {description}
          </span>
        )}
        {error && errorMessage && (
          <span id={`${id}-err`} className={errorClass} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
