import React from 'react';
import { cn } from '../utils/cn';
import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn('shrink-0 transition-transform duration-200 ease-out', open && 'rotate-180')}
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, onClick, onKeyDown, ...props }, ref) => {
  const { toggle, variant } = useAccordionContext();
  const { value, isOpen } = useAccordionItemContext();
  const isBackground = variant === 'background';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle(value);
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(value);
    }
    onKeyDown?.(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex w-full items-center justify-between gap-2 py-3 px-4 text-left text-sm font-medium leading-6 text-[#020617] outline-none transition-colors duration-200',
        isBackground
          ? 'text-foreground bg-transparent hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted rounded-none'
          : 'text-slate-900 bg-white hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-none',
        className
      )}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-trigger-${value}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span className="flex-1 min-w-0">{children}</span>
      <ChevronIcon open={isOpen} />
    </button>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';
