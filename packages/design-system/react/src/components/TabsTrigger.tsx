import React from 'react';
import { cn } from '../utils/cn';
import { useTabsContext } from './Tabs';
import { useTabsListContext } from './TabsList';

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Value untuk tab ini (harus unique dalam satu Tabs)
   */
  value: string | number;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled = false, className, children, onClick, onKeyDown, ...props }, ref) => {
    const { activeValue, variant, setActiveValue } = useTabsContext();
    const { stretch } = useTabsListContext();

    const isSelected = activeValue === value;

    const baseClasses = 'flex items-center justify-center min-w-[56px] relative transition-colors duration-200 ease-out';
    const stretchClass = stretch ? '' : 'shrink-0';

    const triggerClasses = cn(
      baseClasses,
      stretchClass,
      variant === 'default'
        ? cn(
            'px-3 py-1.5 rounded-md',
            isSelected
              ? 'bg-white text-[#016BF8] font-medium leading-5 shadow-sm'
              : 'bg-transparent text-slate-500 font-normal leading-5'
          )
        : cn(
            'px-4 pt-2',
            isSelected
              ? 'border-b-2 border-[#016BF8] pb-3.5 mb-[-1px] text-[#016BF8] font-semibold leading-none text-sm'
              : 'border-b-2 border-transparent pb-3.5 mb-[-1px] text-slate-500 font-normal leading-none text-sm'
          ),
      !disabled && 'cursor-pointer',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      setActiveValue(value);
      onClick?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveValue(value);
      }
      onKeyDown?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={triggerClasses}
        disabled={disabled}
        aria-selected={isSelected}
        aria-disabled={disabled || undefined}
        role="tab"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';
