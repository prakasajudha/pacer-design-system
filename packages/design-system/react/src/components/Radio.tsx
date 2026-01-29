import React from 'react';
import { cn } from '../utils/cn';
import { FormFieldLabel } from './FormFieldLabel';

export type RadioPosition = 'left' | 'right';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Value yang akan di-submit jika radio ini terpilih
   */
  value: string | number;

  /**
   * Controlled checked state (dibandingkan dengan value).
   */
  checked?: boolean;

  /**
   * Uncontrolled default checked state.
   */
  defaultChecked?: boolean;

  /**
   * Callback ketika radio dipilih (mengirim value).
   */
  onCheckedChange?: (value: string | number) => void;

  /**
   * Optional change callback (form-friendly).
   */
  onChange?: (value: string | number) => void;

  disabled?: boolean;
  /**
   * Name untuk kebutuhan HTML form submit dan grouping (semua radio dalam grup yang sama punya name yang sama).
   */
  name?: string;

  /**
   * Optional id untuk a11y binding (aria-labelledby / aria-describedby).
   */
  id?: string;

  label?: string;
  description?: string;
  position?: RadioPosition;
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

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      value,
      checked,
      defaultChecked = false,
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

    const toggle = () => {
      if (disabled) return;
      if (!isControlled) setInternal(true);
      onCheckedChange?.(value);
      onChange?.(value);
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

    const radioClasses = cn(
      'relative shrink-0 w-4 h-4 rounded-full',
      'border border-solid transition-colors duration-200 ease-out',
      'focus-visible:outline-none',
      isChecked
        ? 'border-[#016BF8]'
        : error
          ? 'bg-white border-error-500'
          : disabled
            ? 'bg-slate-100 border-slate-300'
            : 'bg-white border-slate-300',
      !disabled && 'cursor-pointer'
    );

    const radioBgStyle: React.CSSProperties = isChecked ? { backgroundColor: '#016BF8' } : {};

    const radioStyle: React.CSSProperties = isFocused
      ? {
          ...radioBgStyle,
          boxShadow: '0px 0px 0px 2px white, 0px 0px 0px 4px #016BF8',
        }
      : radioBgStyle;

    const contentClasses = cn('flex flex-col gap-1 min-w-0 flex-1');

    const labelClasses = cn('text-sm font-medium leading-none', error ? 'text-error-600' : 'text-slate-950');
    const descriptionClasses = cn('text-sm font-normal leading-5 text-slate-500');

    return (
      <div ref={ref} className={wrapperClasses} {...props}>
        {/* HTML form submit support: native radio input */}
        {name ? (
          <input
            type="radio"
            name={name}
            value={String(value)}
            checked={isChecked}
            disabled={disabled}
            className="sr-only"
            id={id}
            onChange={() => toggle()}
          />
        ) : null}

        <button
          type="button"
          className={radioClasses}
          style={radioStyle}
          id={id ? `${id}-button` : undefined}
          role="radio"
          aria-checked={isChecked}
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
          <span className="sr-only">Radio</span>
          {/* Dot icon (checked state) */}
          {isChecked ? (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white pointer-events-none" />
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
            aria-label={label || 'Toggle radio'}
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

Radio.displayName = 'Radio';
