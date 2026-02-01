import React, { createContext, useContext, useCallback, useState } from 'react';
import { cn } from '../utils/cn';

export type AccordionType = 'single' | 'multiple';
export type AccordionVariant = 'line' | 'background';

export interface AccordionProps {
  /**
   * Controlled value - array of open item values (single: at most one; multiple: any)
   */
  value?: string | string[];

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string | string[];

  /**
   * Type: 'single' (one open at a time) or 'multiple' (many open). Default "single"
   */
  type?: AccordionType;

  /**
   * Variant style: "line" (bottom border per item) or "background" (rounded box with muted bg per item).
   */
  variant?: AccordionVariant;

  /**
   * Callback when open value(s) change
   */
  onValueChange?: (value: string | string[]) => void;

  children: React.ReactNode;
  className?: string;
}

interface AccordionContextValue {
  openValues: string[];
  type: AccordionType;
  variant: AccordionVariant;
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used inside Accordion');
  }
  return context;
};

const normalizeToArray = (v: string | string[] | undefined): string[] => {
  if (v === undefined) return [];
  return Array.isArray(v) ? v : v === '' ? [] : [v];
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      value,
      defaultValue,
      type = 'single',
      variant = 'line',
      onValueChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(() =>
      normalizeToArray(defaultValue)
    );
    const isControlled = value !== undefined;
    const openValues = isControlled ? normalizeToArray(value) : internalValue;

    const toggle = useCallback(
      (itemValue: string) => {
        const next = openValues.includes(itemValue)
          ? openValues.filter((v) => v !== itemValue)
          : type === 'single'
            ? [itemValue]
            : [...openValues, itemValue];

        if (!isControlled) {
          setInternalValue(next);
        }
        onValueChange?.(type === 'single' ? (next[0] ?? '') : next);
      },
      [openValues, type, isControlled, onValueChange]
    );

    const contextValue: AccordionContextValue = {
      openValues,
      type,
      variant,
      toggle,
    };

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'w-full',
            variant === 'background' && 'flex flex-col gap-2',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';
