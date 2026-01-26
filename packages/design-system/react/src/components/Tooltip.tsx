import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';

export type TooltipPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';
export type TooltipVariant = 'primary' | 'secondary';
export type TooltipSize = 'sm' | 'md';

export interface TooltipProps {
  /** Title content (string or React node e.g. JSX). */
  title?: ReactNode;
  /** Description content (string or React node e.g. JSX). */
  description?: ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  size?: TooltipSize;
  delayDuration?: number;
  skipDelayDuration?: number;
  children: ReactNode;
}

const GAP = 8;
const ARROW_SIZE = 6;

const ARROW_POINTS_DOWN: TooltipPosition[] = ['top', 'top-left', 'top-right'];
const ARROW_POINTS_UP: TooltipPosition[] = ['bottom', 'bottom-left', 'bottom-right'];
const ARROW_POINTS_LEFT: TooltipPosition[] = ['right', 'bottom-right', 'top-right'];
const ARROW_POINTS_RIGHT: TooltipPosition[] = ['left', 'bottom-left', 'top-left'];

function getArrowClasses(position: TooltipPosition): string {
  const placementArrow: Record<TooltipPosition, string> = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    'top-left': 'bottom-0 left-4 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    'top-right': 'bottom-0 right-4 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    'bottom-left': 'top-0 left-4 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    'bottom-right': 'top-0 right-4 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-t-transparent border-b-transparent border-l-transparent',
    right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-t-transparent border-b-transparent border-r-transparent',
  };
  return cn('absolute w-0 h-0 border-solid pointer-events-none', placementArrow[position]);
}

function getArrowStyle(position: TooltipPosition, variant: TooltipVariant): React.CSSProperties {
  const color = variant === 'primary' ? '#1A1A1A' : '#ffffff';
  const transparent = 'transparent';
  const base: React.CSSProperties = { borderWidth: ARROW_SIZE };
  if (ARROW_POINTS_DOWN.includes(position)) {
    return { ...base, borderTopColor: color, borderLeftColor: transparent, borderRightColor: transparent, borderBottomColor: transparent };
  }
  if (ARROW_POINTS_UP.includes(position)) {
    return { ...base, borderBottomColor: color, borderLeftColor: transparent, borderRightColor: transparent, borderTopColor: transparent };
  }
  if (ARROW_POINTS_LEFT.includes(position)) {
    return { ...base, borderRightColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderLeftColor: transparent };
  }
  if (ARROW_POINTS_RIGHT.includes(position)) {
    return { ...base, borderLeftColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderRightColor: transparent };
  }
  return { ...base, borderLeftColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderRightColor: transparent };
}

export function Tooltip({
  title,
  description,
  position = 'top',
  variant = 'primary',
  size = 'md',
  delayDuration = 200,
  skipDelayDuration = 100,
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{
    centerX: number;
    top: number;
    bottom: number;
    triggerLeft: number;
    triggerRight: number;
  } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollResizeCleanupRef = useRef<(() => void) | null>(null);
  const tooltipId = useId().replace(/:/g, '-');

  const hasTitle = title != null && (typeof title !== 'string' || title !== '');
  const hasDescription = description != null && (typeof description !== 'string' || description !== '');
  const hasContent = hasTitle || hasDescription;

  const variantStyles: Record<TooltipVariant, string> = {
    primary: 'bg-[#1A1A1A] text-white shadow-lg',
    secondary: 'bg-white text-slate-900 border border-slate-200 shadow-lg',
  };

  const sizeStyles = {
    sm: {
      container: 'px-3 py-2 gap-0.5 max-w-[200px]',
      title: 'text-xs font-semibold leading-tight whitespace-pre-line',
      description: 'text-xs font-normal leading-4 opacity-90 whitespace-pre-line',
    },
    md: {
      container: 'px-4 py-3 gap-1 max-w-[280px]',
      title: 'text-sm font-semibold leading-tight whitespace-pre-line',
      description: 'text-sm font-normal leading-5 opacity-90 whitespace-pre-line',
    },
  } as const;

  const updateCoords = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setCoords({
      centerX: rect.left + rect.width / 2,
      top: rect.top,
      bottom: rect.bottom,
      triggerLeft: rect.left,
      triggerRight: rect.right,
    });
  }, []);

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  }, []);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const show = useCallback(() => {
    clearHideTimeout();
    if (!hasContent) return;
    if (delayDuration <= 0) {
      setOpen(true);
      return;
    }
    showTimeoutRef.current = setTimeout(() => {
      setOpen(true);
      showTimeoutRef.current = null;
    }, delayDuration);
  }, [hasContent, delayDuration, clearHideTimeout]);

  const hide = useCallback(() => {
    clearShowTimeout();
    if (skipDelayDuration <= 0) {
      setOpen(false);
      setCoords(null);
      return;
    }
    hideTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setCoords(null);
      hideTimeoutRef.current = null;
    }, skipDelayDuration);
  }, [skipDelayDuration, clearShowTimeout]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        clearShowTimeout();
        clearHideTimeout();
        setOpen(false);
        setCoords(null);
      }
    },
    [open, clearShowTimeout, clearHideTimeout]
  );

  useEffect(() => {
    if (open && triggerRef.current) {
      updateCoords();
    } else if (!open) {
      setCoords(null);
    }
  }, [open, updateCoords]);

  useEffect(() => {
    scrollResizeCleanupRef.current?.();
    scrollResizeCleanupRef.current = null;
    if (!open) return;
    const onScrollOrResize = () => updateCoords();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    scrollResizeCleanupRef.current = () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
    return () => scrollResizeCleanupRef.current?.();
  }, [open, updateCoords]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(
    () => () => {
      scrollResizeCleanupRef.current?.();
      clearShowTimeout();
      clearHideTimeout();
    },
    [clearShowTimeout, clearHideTimeout]
  );

  const tooltipStyle = useMemo((): React.CSSProperties => {
    const c = coords;
    if (!c)
      return { left: -9999, top: -9999, transform: 'translate(-50%, -100%)' } as React.CSSProperties;
    const centerY = (c.top + c.bottom) / 2;
    const p = position;
    const posTop =
      p === 'top' || p === 'top-left' || p === 'top-right'
        ? c.top - GAP
        : p === 'bottom' || p === 'bottom-left' || p === 'bottom-right'
          ? c.bottom + GAP
          : centerY;
    const posLeft =
      p === 'left' || p === 'top-left' || p === 'bottom-left'
        ? c.triggerLeft - GAP
        : p === 'right' || p === 'top-right' || p === 'bottom-right'
          ? c.triggerRight + GAP
          : c.centerX;
    const transformByPos: Record<TooltipPosition, string> = {
      top: 'translate(-50%, -100%)',
      'top-left': 'translate(0, -100%)',
      'top-right': 'translate(-100%, -100%)',
      right: 'translate(0, -50%)',
      'bottom-right': 'translate(-100%, 0)',
      bottom: 'translate(-50%, 0)',
      'bottom-left': 'translate(0, 0)',
      left: 'translate(-100%, -50%)',
    };
    return {
      position: 'fixed',
      left: posLeft,
      top: posTop,
      transform: transformByPos[p],
      zIndex: 1070,
    };
  }, [coords, position]);

  const tooltipPanel =
    hasContent && open && coords ? (
      <div
        id={tooltipId}
        role="tooltip"
        className={cn(
          'flex flex-col overflow-visible rounded-md whitespace-normal transition-opacity duration-150',
          variantStyles[variant],
          sizeStyles[size].container
        )}
        style={tooltipStyle}
        onMouseEnter={() => {
          clearHideTimeout();
          clearShowTimeout();
          setOpen(true);
        }}
        onMouseLeave={hide}
      >
        {hasTitle && (
          <div className={sizeStyles[size].title}>
            {typeof title === 'string' ? title.replace(/\\n/g, '\n') : title}
          </div>
        )}
        {hasDescription && (
          <div className={sizeStyles[size].description}>
            {typeof description === 'string' ? description.replace(/\\n/g, '\n') : description}
          </div>
        )}
        <div
          className={getArrowClasses(position)}
          style={getArrowStyle(position, variant)}
          aria-hidden
        />
      </div>
    ) : null;

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-flex"
        aria-describedby={hasContent ? tooltipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </div>
      {typeof document !== 'undefined' && createPortal(tooltipPanel, document.body)}
    </>
  );
}

Tooltip.displayName = 'Tooltip';
