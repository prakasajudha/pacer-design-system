import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Default open state untuk uncontrolled mode
   */
  defaultOpen?: boolean;

  /**
   * Ukuran modal: 'sm' | 'md' | 'lg'
   */
  size?: ModalSize;

  /**
   * Close modal ketika klik overlay/backdrop
   */
  closeOnOverlayClick?: boolean;

  /**
   * Close modal ketika tekan Escape key
   */
  closeOnEscape?: boolean;

  /**
   * Callback ketika modal ditutup
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Callback ketika modal ditutup
   */
  onClose?: () => void;

  children: ReactNode;
  className?: string;
}

interface ModalContextValue {
  close: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used inside Modal');
  }
  return context;
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      defaultOpen = false,
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      onOpenChange,
      onClose,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : internalOpen;

    const close = useCallback(() => {
      if (!isControlled) {
        setInternalOpen(false);
      }
      onOpenChange?.(false);
      onClose?.();
    }, [isControlled, onOpenChange, onClose]);

    // Handle Escape key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape' && isOpen) {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen, closeOnEscape, close]);

    // Body scroll lock
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    // Handle overlay click
    const handleOverlayClick = () => {
      if (closeOnOverlayClick) {
        close();
      }
    };

    // Size classes
    const sizeClasses = cn(
      size === 'sm' && 'max-w-[400px]',
      size === 'md' && 'max-w-[500px]',
      size === 'lg' && 'max-w-[600px]'
    );

    if (!isOpen) return null;

    const modalContent = (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 z-[1040] flex items-center justify-center p-4',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        {...props}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
          onClick={handleOverlayClick}
        />

        {/* Modal Container */}
        <div
          className={cn(
            'relative z-[1050] w-full bg-white rounded-lg shadow-lg flex flex-col transition-all duration-200',
            sizeClasses
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalContext.Provider value={{ close, isOpen }}>
            {children}
          </ModalContext.Provider>
        </div>
      </div>
    );

    return createPortal(modalContent, document.body);
  }
);

Modal.displayName = 'Modal';
