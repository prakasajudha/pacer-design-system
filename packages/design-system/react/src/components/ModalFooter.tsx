import React from 'react';
import { Button } from './Button';
import { cn } from '../utils/cn';

export interface ModalFooterProps {
  /**
   * Callback ketika Cancel button diklik
   * Jika ada, akan auto-render Cancel button
   */
  onCancel?: () => void;

  /**
   * Callback ketika Confirm/Action button diklik
   * Jika ada, akan auto-render Confirm button
   */
  onConfirm?: () => void;

  /**
   * Text untuk Cancel button (default: "Cancel")
   */
  onCancelText?: string;

  /**
   * Text untuk Confirm button (default: "Continue")
   */
  onConfirmText?: string;

  /**
   * Custom footer content (children)
   */
  children?: React.ReactNode;
  className?: string;
}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  (
    {
      onCancel,
      onConfirm,
      onCancelText = 'Cancel',
      onConfirmText = 'Continue',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const hasChildren = !!children;
    const shouldRenderButtons = !hasChildren && (onCancel || onConfirm);

    return (
      <div
        ref={ref}
        className={cn('flex gap-2 items-center justify-end w-full p-6 pt-4', className)}
        {...props}
      >
        {/* Custom Footer (children) */}
        {hasChildren && children}

        {/* Default Footer (auto-render buttons) */}
        {shouldRenderButtons && (
          <>
            {onCancel && (
              <Button variant="outline" size="sm" onClick={onCancel}>
                {onCancelText}
              </Button>
            )}
            {onConfirm && (
              <Button variant="solid" size="sm" onClick={onConfirm}>
                {onConfirmText}
              </Button>
            )}
          </>
        )}
      </div>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';
