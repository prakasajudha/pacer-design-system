import React from 'react';
import { cn } from '../utils/cn';
import { FormFieldLabel } from './FormFieldLabel';

export type CheckboxPosition = 'left' | 'right';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Uncontrolled default checked state.
   */
  defaultChecked?: boolean;

  /**
   * Indeterminate state (shows minus icon instead of checkmark)
   */
  indeterminate?: boolean;

  /**
   * Callback ketika checked berubah.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Optional boolean change callback (form-friendly).
   */
  onChange?: (checked: boolean) => void;

  disabled?: boolean;
  /**
   * Name untuk kebutuhan HTML form submit (akan submit value true/false via hidden input).
   */
  name?: string;

  /**
   * Optional id untuk a11y binding (aria-labelledby / aria-describedby).
   */
  id?: string;

  label?: string;
  description?: string;
  position?: CheckboxPosition;
  outlined?: boolean;
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
   * Error state: text merah; jika outlined maka border merah.
   */
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      indeterminate = false,
      onCheckedChange,
      onChange,
      disabled = false,
      name,
      id,
      label = '',
      description = '',
      position = 'left',
      outlined = false,
      isMandatory = false,
      showTooltip = false,
      tooltipInformation,
      error = false,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = typeof checked === 'boolean';
    const [internal, setInternal] = React.useState<boolean>(defaultChecked);
    const [isFocused, setIsFocused] = React.useState(false);
    const isChecked = isControlled ? (checked as boolean) : internal;
    const isIndeterminate = indeterminate === true;

    const toggle = () => {
      if (disabled) return;
      // Cycle: false -> true -> false
      // If indeterminate, go to false (uncheck)
      const next = isIndeterminate ? false : isChecked ? false : true;
      if (!isControlled) setInternal(next);
      onCheckedChange?.(next);
      onChange?.(next);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    };

    const hasContent =
      Boolean(label) ||
      Boolean(description) ||
      isMandatory ||
      (showTooltip && tooltipInformation != null && tooltipInformation !== '');
    const labelId = id ? `${id}-label` : undefined;
    const descId = id ? `${id}-description` : undefined;

    const wrapperClasses = cn(
      'flex items-start',
      position === 'right' ? 'flex-row-reverse justify-between' : 'gap-2',
      outlined ? 'border rounded-lg p-4 gap-4' : 'p-0',
      outlined && !hasContent ? 'p-0 border-0' : '',
      disabled && 'opacity-50 cursor-not-allowed',
      outlined && (error ? 'border-error-500' : 'border-slate-300'),
      className
    );

    const isSelected = isChecked || isIndeterminate;
    const checkboxClasses = cn(
      'relative shrink-0 w-4 h-4 rounded',
      'border border-solid transition-colors duration-200 ease-out',
      'focus-visible:outline-none',
      isSelected
        ? 'border-[#016BF8]'
        : error
          ? 'bg-white border-error-500'
          : disabled
            ? 'bg-slate-100 border-slate-300'
            : 'bg-white border-slate-300',
      !disabled && 'cursor-pointer'
    );

    const checkboxBgStyle: React.CSSProperties = isSelected
      ? { backgroundColor: '#016BF8' }
      : {};

    const checkboxStyle: React.CSSProperties = isFocused
      ? {
          ...checkboxBgStyle,
          boxShadow: '0px 0px 0px 2px white, 0px 0px 0px 4px #016BF8',
        }
      : checkboxBgStyle;

    const contentClasses = cn('flex flex-col gap-1 min-w-0 flex-1');

    const labelClasses = cn('text-sm font-medium leading-none', error ? 'text-error-600' : 'text-slate-950');

    const descriptionClasses = cn('text-sm font-normal leading-5 text-slate-500');

    return (
      <div ref={ref} className={wrapperClasses} {...props}>
        {/* HTML form submit support: submit true/false (intermediate treated as false) */}
        {name ? <input type="hidden" name={name} value={String(isChecked)} disabled={disabled} /> : null}

        <button
          type="button"
          className={checkboxClasses}
          style={checkboxStyle}
          id={id}
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          aria-disabled={disabled || undefined}
          aria-invalid={error || undefined}
          aria-labelledby={labelId}
          aria-describedby={descId}
          disabled={disabled}
          onClick={toggle}
          onKeyDown={onKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <span className="sr-only">Checkbox</span>
          {/* Checkmark icon (checked state) */}
          {isChecked && !isIndeterminate ? (
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] text-white pointer-events-none"
              fill="none"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
          {/* Minus icon (intermediate state) */}
          {isIndeterminate ? (
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] text-white pointer-events-none"
              fill="none"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 7H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : null}
        </button>

        {hasContent ? (
          <div
            className={contentClasses}
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={label || 'Toggle checkbox'}
          >
            <FormFieldLabel
              label={label}
              isMandatory={isMandatory}
              showTooltip={showTooltip}
              tooltipInformation={tooltipInformation}
              id={labelId}
              className={cn(labelClasses, '[overflow-wrap:anywhere]')}
            />
            {description ? (
              <div id={descId} className={descriptionClasses} style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                {description}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
