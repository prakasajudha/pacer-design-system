import React from 'react';
import { cn } from '../utils/cn';
import { FormFieldLabel } from './FormFieldLabel';

export type SwitchPosition = 'left' | 'right';
export type SwitchSize = 'md' | 'sm';

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Controlled checked state.
   */
  checked?: boolean;

  /**
   * Uncontrolled default checked state.
   */
  defaultChecked?: boolean;

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
  position?: SwitchPosition;
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
   * Active background color (hex/rgb/rgba/var). Default sesuai Figma (hex).
   */
  bgColor?: string;
  /**
   * Error state: text merah; jika outlined maka border merah.
   */
  error?: boolean;
  size?: SwitchSize;
}

const sizes: Record<
  SwitchSize,
  { track: string; thumb: string; translateOn: string }
> = {
  md: { track: 'w-[44px] h-[24px]', thumb: 'w-[20px] h-[20px]', translateOn: 'translate-x-5' }, // 20px
  sm: { track: 'w-[36px] h-[20px]', thumb: 'w-[16px] h-[16px]', translateOn: 'translate-x-4' }, // 16px
};

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
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
      bgColor = '#016BF8',
      error = false,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = typeof checked === 'boolean';
    const [internal, setInternal] = React.useState<boolean>(defaultChecked);
    const isOn = isControlled ? (checked as boolean) : internal;

    const toggle = () => {
      if (disabled) return;
      const next = !isOn;
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
      'flex items-center',
      position === 'right' ? 'flex-row-reverse justify-between' : 'gap-4',
      outlined ? 'border rounded-lg p-4 gap-4' : 'p-0',
      outlined && !hasContent ? 'p-0 border-0' : '',
      disabled && 'opacity-50 cursor-not-allowed',
      outlined && (error ? 'border-error-500' : 'border-slate-300'),
      className
    );

    const trackClasses = cn(
      // Padding 2px untuk inset thumb (match Figma)
      'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary-300',
      'border border-transparent',
      sizes[size].track,
      !disabled && 'cursor-pointer',
      !isOn && 'bg-slate-300'
    );

    const trackStyle: React.CSSProperties | undefined = isOn ? { backgroundColor: bgColor } : undefined;

    const thumbClasses = cn(
      'pointer-events-none inline-block rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-out',
      sizes[size].thumb,
      isOn ? sizes[size].translateOn : 'translate-x-0'
    );

    const labelClasses = cn('text-sm font-medium leading-none break-words', error ? 'text-error-600' : 'text-slate-950');
    const descriptionClasses = cn('text-sm font-normal leading-5 text-slate-500 break-words');

    return (
      <div ref={ref} className={wrapperClasses} {...props} onClick={toggle}>
        {/* HTML form submit support: always submit true/false */}
        {name ? <input type="hidden" name={name} value={String(isOn)} disabled={disabled} /> : null}

        <button
          type="button"
          className={trackClasses}
          style={trackStyle}
          role="switch"
          aria-checked={isOn}
          aria-disabled={disabled || undefined}
          aria-invalid={error || undefined}
          aria-labelledby={labelId}
          aria-describedby={descId}
          disabled={disabled}
          onClick={toggle}
          onKeyDown={onKeyDown}
          onClickCapture={(e) => e.stopPropagation()}
        >
          <span className="sr-only">Toggle</span>
          <span className={thumbClasses} />
        </button>

        {hasContent ? (
          <div className="flex flex-col gap-1 min-w-0 flex-1">
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

Switch.displayName = 'Switch';

