import React from 'react';
import { cn } from '../utils/cn';

export type DividerColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';

export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerSize = 'xs' | 'sm' | 'md' | 'lg';

const COLOR_PALETTE_CLASSES: Record<DividerColorPalette, string> = {
  gray: 'border-gray-300',
  red: 'border-red-300',
  orange: 'border-orange-300',
  yellow: 'border-yellow-300',
  green: 'border-green-300',
  teal: 'border-teal-300',
  blue: 'border-blue-300',
  cyan: 'border-cyan-300',
  purple: 'border-purple-300',
  pink: 'border-pink-300',
};

const VARIANT_CLASSES: Record<DividerVariant, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const HORIZONTAL_SIZE_CLASSES: Record<DividerSize, string> = {
  xs: 'border-t',
  sm: 'border-t-2',
  md: 'border-t-4',
  lg: 'border-t-8',
};

const VERTICAL_SIZE_CLASSES: Record<DividerSize, string> = {
  xs: 'border-l',
  sm: 'border-l-2',
  md: 'border-l-4',
  lg: 'border-l-8',
};

/** Ketebalan border per size (px). Dipakai untuk menggambar garis lewat background agar tampil tanpa Tailwind. */
const SIZE_TO_BORDER_WIDTH: Record<DividerSize, string> = {
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '8px',
};

/** Warna per palette (hex), setara Tailwind *-300. Garis digambar pakai background supaya tetap muncul di env tanpa Tailwind. */
const COLOR_PALETTE_TO_CSS: Record<DividerColorPalette, string> = {
  gray: '#d1d5db',
  red: '#fca5a5',
  orange: '#fdba74',
  yellow: '#fde047',
  green: '#86efac',
  teal: '#5eead4',
  blue: '#93c5fd',
  cyan: '#67e8f9',
  purple: '#d8b4fe',
  pink: '#f9a8d4',
};

export interface DividerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Color palette of the divider. */
  colorPalette?: DividerColorPalette;
  /** Variant (line style). */
  variant?: DividerVariant;
  /** Orientation. */
  orientation?: DividerOrientation;
  /** Size (thickness). */
  size?: DividerSize;
  /** Width (nilai CSS), dipakai saat orientation horizontal. Default `100%`. Contoh: `"200px"`, `"100%"`, `"12rem"`. Framework-agnostic (Tailwind, Bootstrap, dll). */
  width?: string;
  /** Height (nilai CSS), dipakai saat orientation vertical. Default `100%` dengan min-height `1em`. Contoh: `"32px"`, `"100%"`, `"2rem"`. Framework-agnostic. */
  height?: string;
  /** The underlying element to render. */
  as?: React.ElementType;
  /** Use the single child as the rendered element and merge props. */
  asChild?: boolean;
  /** Only used when not asChild. Ignored when asChild is true. */
  children?: React.ReactNode;
}

const DividerComponent = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      colorPalette = 'gray',
      variant = 'solid',
      orientation = 'horizontal',
      size = 'sm',
      width,
      height,
      as: Comp = 'div',
      asChild = false,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const colorClass = COLOR_PALETTE_CLASSES[colorPalette];
    const variantClass = VARIANT_CLASSES[variant];
    const sizeClass =
      orientation === 'horizontal' ? HORIZONTAL_SIZE_CLASSES[size] : VERTICAL_SIZE_CLASSES[size];

    const orientationClasses =
      orientation === 'horizontal'
        ? 'border-0 border-t min-h-0'
        : 'border-0 border-l min-w-0 self-stretch';

    const w = SIZE_TO_BORDER_WIDTH[size];
    const color = COLOR_PALETTE_TO_CSS[colorPalette];
    const sizeStyle: React.CSSProperties =
      orientation === 'horizontal'
        ? { width: width ?? '100%', height: w, minHeight: w, backgroundColor: color }
        : {
            width: w,
            minWidth: w,
            height: height ?? '100%',
            ...(height == null ? { minHeight: '1em' } : {}),
            backgroundColor: color,
          };

    const mergedStyle: React.CSSProperties = { ...sizeStyle, ...(style && typeof style === 'object' ? style : {}) };

    const mergedClassName = cn(
      'shrink-0 border-0 bg-transparent',
      orientationClasses,
      sizeClass,
      colorClass,
      variantClass,
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = React.Children.only(children) as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
      const childRef = (child as React.RefAttributes<unknown>).ref;
      const mergedRef = (node: HTMLElement | null) => {
        const value = node as HTMLDivElement | null;
        if (typeof ref === 'function') ref(value);
        else if (ref != null && typeof ref === 'object') (ref as React.MutableRefObject<HTMLDivElement | null>).current = value;
        if (typeof childRef === 'function') childRef(node);
        else if (childRef != null && typeof childRef === 'object') (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
      };
      return React.cloneElement(child, {
        ...props,
        ...child.props,
        ref: mergedRef,
        role: 'separator',
        'aria-orientation': orientation,
        className: cn(mergedClassName, child.props?.className),
        style: { ...mergedStyle, ...(child.props?.style && typeof child.props.style === 'object' ? child.props.style : {}) },
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        role="separator"
        aria-orientation={orientation}
        className={mergedClassName}
        style={mergedStyle}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      />
    );
  }
);

DividerComponent.displayName = 'Divider';

export const Divider = DividerComponent;
