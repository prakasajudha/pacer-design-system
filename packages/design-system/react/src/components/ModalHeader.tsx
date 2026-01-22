import React from 'react';
import { useModalContext } from './Modal';
import { IconButton } from './IconButton';
import { cn } from '../utils/cn';

export interface ModalHeaderProps {
  /**
   * Title text (jika tidak pakai children)
   */
  title?: string;

  /**
   * Description text di bawah title (jika tidak pakai children)
   */
  description?: string;

  /**
   * Icon di sebelah kiri title (jika tidak pakai children)
   */
  icon?: React.ComponentType<{ className?: string }>;

  /**
   * Tampilkan close button di kanan
   */
  showCloseButton?: boolean;

  /**
   * Custom header content (children)
   */
  children?: React.ReactNode;
  className?: string;
}

const CloseIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M12 4l-8 8M4 4l8 8" />
  </svg>
);

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    {
      title,
      description,
      icon: Icon,
      showCloseButton = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const { close } = useModalContext();

    const hasChildren = !!children;
    const hasProps = !!(title || description || Icon);

    const handleClose = () => {
      close();
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1 items-start w-full p-6 pb-4', className)}
        {...props}
      >
        {/* Custom Header (children) */}
        {hasChildren && (
          <div className="flex gap-2 items-center w-full">{children}</div>
        )}

        {/* Default Header (props) */}
        {!hasChildren && hasProps && (
          <>
            <div className="flex gap-2 items-center w-full">
              {/* Left Icon */}
              {Icon && (
                <div className="flex items-center justify-center p-0.5 rounded-button shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
              )}

              {/* Title */}
              {title && (
                <div className="flex-1 font-semibold text-xl leading-none tracking-[-0.6px] text-slate-900">
                  {title}
                </div>
              )}

              {/* Close Button */}
              {showCloseButton && (
                <IconButton
                  aria-label="Close dialog"
                  icon={CloseIcon}
                  variant="ghost"
                  size="xss"
                  onClick={handleClose}
                />
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="font-normal text-base leading-6 text-slate-500 w-full">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';
