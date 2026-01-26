import React from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label untuk input
   */
  label?: string;
  /**
   * State error
   */
  error?: boolean;
  /**
   * Pesan saat error (ditampilkan di bawah input)
   */
  errorMessage?: string;
  /**
   * Pesan helper text (ditampilkan ketika tidak error)
   */
  helperText?: string;
  
  /**
   * Icon sebelum input
   */
  startIcon?: React.ReactNode;
  
  /**
   * Icon setelah input
   */
  endIcon?: React.ReactNode;
  
  /**
   * Full width input
   */
  fullWidth?: boolean;
}

/**
 * Input Component
 * 
 * Komponen input yang accessible dengan support untuk label, error, dan helper text.
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="nama@email.com"
 *   helperText="Masukkan email yang valid"
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      helperText,
      startIcon,
      endIcon,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseStyles = 'input block px-3 py-2 border rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0';
    
    const stateStyles = error
      ? 'border-error-500 focus:border-error-500 focus:ring-error-200'
      : 'border-neutral-300 focus:border-brand-primary-500 focus:ring-brand-primary-200';
    
    return (
      <div className={cn('space-y-1', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={cn(
              baseStyles,
              stateStyles,
              startIcon && 'pl-10',
              endIcon && 'pr-10',
              fullWidth && 'w-full',
              className
            )}
            {...props}
          />
          
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-500">
              {endIcon}
            </div>
          )}
        </div>
        
        {error && errorMessage && (
          <p className="text-sm text-error-600" role="alert">
            {errorMessage}
          </p>
        )}
        
        {!error && helperText && (
          <p className="text-sm text-neutral-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
