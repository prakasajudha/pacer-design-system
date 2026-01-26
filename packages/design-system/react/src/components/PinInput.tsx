import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

const REVEAL_MS = 500;

export type PinInputSize = 'sm' | 'md' | 'lg';
export type PinInputPosition = 'left' | 'center';

export interface PinInputProps {
  /**
   * Nilai pin (controlled)
   */
  value?: string;
  /**
   * Callback saat nilai berubah
   */
  onChange?: (value: string) => void;
  /**
   * Jumlah digit (kotak)
   */
  length?: number;
  /**
   * Size: sm, md, lg
   */
  size?: PinInputSize;
  /**
   * Mask input (tampil • saat true)
   */
  mask?: boolean;
  /**
   * Posisi: left atau center (default left)
   */
  position?: PinInputPosition;
  /**
   * Label di atas
   */
  title?: string;
  /**
   * Teks bantuan di bawah
   */
  description?: string;
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
}

const sizeStyles: Record<PinInputSize, { box: string; gap: string; icon: string }> = {
  sm: { box: 'w-9 h-9 text-sm', gap: 'gap-2', icon: 'w-4 h-4' },
  md: { box: 'w-10 h-10 text-base', gap: 'gap-2', icon: 'w-5 h-5' },
  lg: { box: 'w-12 h-12 text-lg', gap: 'gap-3', icon: 'w-6 h-6' },
};

export const PinInput = React.forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      value = '',
      onChange,
      length = 4,
      size = 'md',
      mask = true,
      position = 'left',
      title,
      description,
      disabled = false,
      error = false,
      errorMessage,
    },
    ref
  ) => {
    /** Toggle mask (tetap di kode, tidak ditampilkan di UI). */
    const [maskVisible, setMaskVisible] = useState(false);
    /** Indeks kotak yang sedang dalam periode "reveal" (karakter terlihat ~0.5s lalu mask lagi). Satu timeout per kotak. */
    const [revealingIndices, setRevealingIndices] = useState<Set<number>>(new Set());
    const revealTimersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const sanitized = (v: string) => v.replace(/\D/g, '').slice(0, length);
    const digits = sanitized(value || '').padEnd(length, ' ').slice(0, length).split('');

    const setValue = useCallback(
      (val: string) => {
        const next = sanitized(val);
        onChange?.(next);
      },
      [length, onChange]
    );

    const startRevealTimeout = useCallback((idx: number) => {
      const existing = revealTimersRef.current.get(idx);
      if (existing != null) {
        clearTimeout(existing);
        revealTimersRef.current.delete(idx);
      }
      setRevealingIndices((prev) => new Set(prev).add(idx));
      const id = setTimeout(() => {
        setRevealingIndices((prev) => {
          const next = new Set(prev);
          next.delete(idx);
          return next;
        });
        revealTimersRef.current.delete(idx);
      }, REVEAL_MS);
      revealTimersRef.current.set(idx, id);
    }, []);

    useEffect(() => {
      return () => {
        revealTimersRef.current.forEach((id) => clearTimeout(id));
        revealTimersRef.current.clear();
      };
    }, []);

    const displayValue = useCallback(
      (idx: number) => {
        const d = digits[idx];
        if (mask && !maskVisible && !revealingIndices.has(idx) && d && d !== ' ') return '•';
        return d === ' ' ? '' : d;
      },
      [digits, mask, maskVisible, revealingIndices]
    );

    useEffect(() => {
      const next = sanitized(value || '');
      if (next !== (value || '')) onChange?.(next);
    }, []);

    const handleInput = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const v = (e.target.value || '').replace(/\D/g, '');
      if (v.length > 1) {
        const cur = digits.join('').replace(/\s/g, '');
        const merged = cur.slice(0, idx) + v.slice(-1) + cur.slice(idx + 1);
        setValue(merged);
        if (mask) startRevealTimeout(idx);
        inputRefs.current[Math.min(idx + 1, length - 1)]?.focus();
        return;
      }
      const arr = [...digits];
      arr[idx] = v;
      setValue(arr.join(''));
      if (mask) startRevealTimeout(idx);
      if (v && idx < length - 1) inputRefs.current[idx + 1]?.focus();
    };

    const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
        inputRefs.current[idx - 1]?.focus();
        const arr = [...digits];
        arr[idx - 1] = '';
        setValue(arr.join(''));
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, length);
      setValue(pasted);
      if (mask && pasted.length > 0) {
        for (let i = 0; i < pasted.length; i++) startRevealTimeout(i);
      }
      inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
    };

    const styles = sizeStyles[size];
    const boxClass = cn(
      'inline-flex items-center justify-center rounded-md border bg-white text-center font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
      styles.box,
      error ? 'border-error-500 focus:border-error-500 focus:ring-error-500 focus-visible:ring-error-500' : 'border-slate-300 focus:ring-brand-300 focus-visible:ring-brand-300'
    );

    const isCenter = position === 'center';
    const rootClass = cn('flex flex-col gap-1.5', isCenter && 'items-center');
    const labelClass = cn('block text-sm font-medium text-slate-700 w-full', isCenter && 'text-center');
    const errorClass = cn('text-sm text-error-600 w-full', isCenter && 'text-center');
    const descClass = cn('text-sm font-normal leading-5 text-slate-500 w-full', isCenter && 'text-center');

    return (
      <div ref={ref} className={rootClass}>
        {title && (
          <label className={labelClass}>{title}</label>
        )}

        <div className={cn('flex w-full items-center', styles.gap, isCenter ? 'justify-center' : 'justify-start')}>
          <div className={cn('flex items-center', styles.gap)}>
            {Array.from({ length }, (_, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                value={displayValue(idx)}
                onChange={(e) => handleInput(idx, e)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                disabled={disabled}
                aria-label={`Digit ${idx + 1}`}
                className={boxClass}
              />
            ))}
          </div>
        </div>

        {description && <p className={descClass}>{description}</p>}
        {error && errorMessage && (
          <p className={errorClass} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

PinInput.displayName = 'PinInput';
