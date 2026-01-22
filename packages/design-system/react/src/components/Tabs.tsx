import React, { createContext, useContext, useState, useCallback } from 'react';

export type TabsVariant = 'default' | 'line';

export interface TabsProps {
  /**
   * Controlled value - value dari tab yang aktif
   */
  value?: string | number;

  /**
   * Default value untuk uncontrolled mode
   */
  defaultValue?: string | number;

  /**
   * Variant style: 'default' (background) atau 'line' (border bottom)
   */
  variant?: TabsVariant;

  /**
   * Callback ketika tab berubah
   */
  onValueChange?: (value: string | number) => void;

  children: React.ReactNode;
  className?: string;
}

interface TabsContextValue {
  activeValue: string | number | undefined;
  variant: TabsVariant;
  setActiveValue: (value: string | number) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used inside Tabs');
  }
  return context;
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, defaultValue, variant = 'default', onValueChange, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | number | undefined>(defaultValue);
    const isControlled = value !== undefined;
    const activeValue = isControlled ? value : internalValue;

    const setActiveValue = useCallback(
      (newValue: string | number) => {
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, onValueChange]
    );

    return (
      <TabsContext.Provider value={{ activeValue, variant, setActiveValue }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';
