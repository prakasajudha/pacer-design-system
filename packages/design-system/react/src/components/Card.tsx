import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant visual dari card
   */
  variant?: 'default' | 'outlined' | 'elevated';
  
  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  /**
   * Header content
   */
  header?: React.ReactNode;
  
  /**
   * Footer content
   */
  footer?: React.ReactNode;
}

/**
 * Card Component
 * 
 * Container component untuk mengelompokkan konten terkait.
 * 
 * @example
 * ```tsx
 * <Card
 *   header={<h3>Card Title</h3>}
 *   footer={<Button>Action</Button>}
 * >
 *   Card content here
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      header,
      footer,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'card bg-neutral-0 rounded-lg';
    
    const variantStyles = {
      default: 'shadow-md',
      outlined: 'border border-neutral-200',
      elevated: 'shadow-xl',
    };
    
    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {header && (
          <div className="card-header mb-4 pb-4 border-b border-neutral-200">
            {header}
          </div>
        )}
        
        <div className="card-body">
          {children}
        </div>
        
        {footer && (
          <div className="card-footer mt-4 pt-4 border-t border-neutral-200">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
