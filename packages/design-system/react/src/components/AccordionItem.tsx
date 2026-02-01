import React, { createContext, useContext } from 'react';
import { cn } from '../utils/cn';
import { useAccordionContext } from './Accordion';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique value for this item (used for open state and onValueChange)
   */
  value: string;
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used inside AccordionItem');
  }
  return context;
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const { openValues, variant } = useAccordionContext();
    const isOpen = openValues.includes(value);

    const contextValue: AccordionItemContextValue = { value, isOpen };

    return (
      <AccordionItemContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'w-full',
            variant === 'line' && 'border-b border-slate-200 last:border-b-0',
            variant === 'background' &&
              'overflow-hidden rounded-lg border-b border-[#CBD5E1] bg-[#F8FAFC]',
            className
          )}
          data-state={isOpen ? 'open' : 'closed'}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
