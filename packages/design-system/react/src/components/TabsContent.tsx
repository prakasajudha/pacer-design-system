import React from 'react';
import { cn } from '../utils/cn';
import { useTabsContext } from './Tabs';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value untuk content ini (harus match dengan TabsTrigger value)
   */
  value: string | number;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const { activeValue } = useTabsContext();

    const isActive = activeValue === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        className={cn('outline-none', className)}
        role="tabpanel"
        aria-labelledby={`tab-${value}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent';
