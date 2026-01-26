import React from 'react';
import { cn } from '../utils/cn';

export type InformationVariant = 'info' | 'slate' | 'success' | 'warning' | 'danger';

export interface InformationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant visual dari information
   * @type {InformationVariant}
   * @default 'info'
   */
  variant?: InformationVariant;

  /**
   * Title information
   * @type {string}
   */
  title?: string;

  /**
   * Description information (muncul di bawah title)
   * @type {string}
   */
  description?: string;

  /**
   * Icon override (jika tidak ada, akan menggunakan default icon sesuai variant)
   * @type {React.ReactNode}
   */
  icon?: React.ReactNode;

  /**
   * Custom className untuk icon container
   * @type {string}
   */
  iconClassName?: string;

  /**
   * Custom style untuk icon container
   * @type {React.CSSProperties}
   */
  iconStyle?: React.CSSProperties;

  /**
   * Size information: sm atau md saja (sesuai Figma PACER).
   * @type {'sm' | 'md'}
   * @default 'md'
   */
  size?: 'sm' | 'md';

  /**
   * Custom className untuk title (bisa dipakai override warna teks, mis. "text-red-600").
   * @type {string}
   */
  titleClassName?: string;

  /**
   * Custom className untuk description (bisa dipakai override warna teks).
   * @type {string}
   */
  descriptionClassName?: string;
}

// Helper function untuk membuat default icon
const createDefaultIcon = (variant: InformationVariant, size: number): React.ReactNode => {
  const iconProps: React.SVGProps<SVGSVGElement> = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const colorClasses = {
    info: 'text-brand-300',
    slate: 'text-slate-950',
    success: 'text-green-600',
    warning: 'text-amber-600',
    danger: 'text-red-600',
  };

  switch (variant) {
    case 'info':
      return (
        <svg {...iconProps} className={colorClasses.info}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'slate':
      return (
        <svg {...iconProps} className={colorClasses.slate}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'success':
      return (
        <svg {...iconProps} className={colorClasses.success}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...iconProps} className={colorClasses.warning}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      );
    case 'danger':
      return (
        <svg {...iconProps} className={colorClasses.danger}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
};

export const Information = React.forwardRef<HTMLDivElement, InformationProps>(
  (
    {
      variant = 'info',
      title,
      description,
      icon,
      size = 'md',
      children = null,
      className,
      style,
      iconClassName,
      iconStyle,
      titleClassName,
      descriptionClassName,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'flex rounded-lg';
    const hasChildren = React.Children.count(children) > 0;

    const variantBackgroundStyles = {
      info: 'bg-brand-50',
      slate: 'bg-slate-100',
      success: 'bg-green-100',
      warning: 'bg-amber-100',
      danger: 'bg-red-100',
    } as const;

    const sizeStyles = {
      sm: {
        container: 'py-2 px-3 gap-2',
        icon: 'w-4 h-4 shrink-0',
        title: 'text-sm font-medium leading-none',
        description: 'text-xs font-normal leading-5',
        content: 'text-xs font-normal leading-5',
      },
      md: {
        container: 'p-4 gap-3',
        icon: 'w-4 h-4 shrink-0',
        title: 'text-base font-medium leading-none',
        description: 'text-sm font-normal leading-6',
        content: 'text-sm font-normal leading-6',
      },
    } as const;

    const iconColorStyles = {
      info: 'text-brand-300',
      slate: 'text-slate-950',
      success: 'text-green-600',
      warning: 'text-amber-600',
      danger: 'text-red-600',
    } as const;

    const variantTextStyles = {
      info: 'text-brand-600',
      slate: 'text-slate-950',
      success: 'text-green-600',
      warning: 'text-amber-600',
      danger: 'text-red-600',
    } as const;

    const iconSize = 16;
    const currentIcon = icon || createDefaultIcon(variant, iconSize);
    const currentSizeStyles = sizeStyles[size];

    // Merge style untuk memastikan background color tidak tertimpa
    const mergedStyle: React.CSSProperties = {
      ...(style || {}),
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          'items-start',
          currentSizeStyles.container,
          variantBackgroundStyles[variant],
          className
        )}
        style={mergedStyle}
        {...props}
      >
        <div
          className={cn(
            currentSizeStyles.icon,
            iconColorStyles[variant],
            hasChildren && 'mt-[4.5px]',
            iconClassName
          )}
          style={iconStyle}
        >
          {currentIcon}
        </div>
        <div className="flex-1 min-w-0">
          {React.Children.count(children) > 0 ? (
            <div className={cn(currentSizeStyles.content, variantTextStyles[variant])}>{children}</div>
          ) : (
            <>
              {title && (
                <div className={cn(currentSizeStyles.title, variantTextStyles[variant], titleClassName, 'mb-1')}>
                  {title}
                </div>
              )}
              {description && (
                <div className={cn(currentSizeStyles.description, variantTextStyles[variant], descriptionClassName, title ? '' : 'mb-1')}>
                  {description}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

Information.displayName = 'Information';
