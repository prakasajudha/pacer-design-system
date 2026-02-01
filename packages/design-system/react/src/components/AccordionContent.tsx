import React from 'react';
import { cn } from '../utils/cn';
import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, id, ...props }, ref) => {
  const { variant } = useAccordionContext();
  const { value, isOpen } = useAccordionItemContext();
  const isBackground = variant === 'background';

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      id={id ?? `accordion-content-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      className={cn(
        'py-3 px-4 text-sm font-normal leading-5 text-[#64748B]',
        isBackground ? 'bg-transparent' : 'bg-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AccordionContent.displayName = 'AccordionContent';
