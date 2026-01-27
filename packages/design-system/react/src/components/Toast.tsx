import React, { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

export type ToastVariant = 'neutral' | 'information' | 'success' | 'warning' | 'error';

export interface ToastProps {
  /**
   * Variant visual dari toast
   */
  variant?: ToastVariant;

  /**
   * Title toast
   */
  title?: string;

  /**
   * Description toast (muncul di bawah title)
   */
  description?: string;

  /**
   * Custom icon (jika tidak ada, akan menggunakan default icon sesuai variant)
   */
  icon?: React.ReactNode;

  /**
   * Custom className untuk icon container
   */
  iconClassName?: string;

  /**
   * Custom style untuk icon container
   */
  iconStyle?: React.CSSProperties;

  /**
   * Delay auto close dalam milliseconds (0 = tidak auto close)
   */
  duration?: number;

  /**
   * Callback saat toast di-close
   */
  onClose?: () => void;

  /**
   * ID unik untuk toast
   */
  id?: string;
}

const defaultIcons: Record<ToastVariant, React.ReactNode> = {
  neutral: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-600"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  information: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-600"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-600"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-600"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-600"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};

const variantStyles: Record<ToastVariant, string> = {
  neutral: 'bg-white border-slate-200',
  information: 'bg-brand-50 border-brand-200',
  success: 'bg-green-50 border-green-200',
  warning: 'bg-amber-50 border-amber-200',
  error: 'bg-red-50 border-red-200',
};

const iconColorStyles: Record<ToastVariant, string> = {
  neutral: 'text-slate-600',
  information: 'text-brand-600',
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600',
};

const textColorStyles: Record<ToastVariant, string> = {
  neutral: 'text-slate-900',
  information: 'text-brand-900',
  success: 'text-green-900',
  warning: 'text-amber-900',
  error: 'text-red-900',
};

export const Toast: React.FC<ToastProps> = ({
  variant = 'neutral',
  title,
  description,
  icon,
  iconClassName,
  iconStyle,
  duration = 5000,
  onClose,
  id,
}) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (duration && duration > 0) {
      timeoutRef.current = setTimeout(() => {
        onClose?.();
      }, duration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration, onClose]);

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onClose?.();
  };

  const currentIcon = icon || defaultIcons[variant];

  return (
    <div
      id={id}
      role="alert"
      className={cn(
        'flex items-start gap-3 rounded-lg shadow-lg p-4 min-w-[320px] max-w-[400px] border',
        'animate-toast-in',
        variantStyles[variant]
      )}
    >
      <div
        className={cn('w-5 h-5 shrink-0 mt-0.5', iconColorStyles[variant], iconClassName)}
        style={iconStyle}
      >
        {currentIcon}
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <div className={cn('text-sm font-semibold leading-5', textColorStyles[variant])}>
            {title}
          </div>
        )}
        {description && (
          <div
            className={cn('text-sm font-normal leading-5 mt-1 opacity-80', textColorStyles[variant])}
          >
            {description}
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handleClose}
        className={cn(
          'shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-black/5 transition-colors',
          textColorStyles[variant]
        )}
        aria-label="Close toast"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
