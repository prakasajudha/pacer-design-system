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

export type PopoverPosition = 'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end';

export interface PopoverProps {
  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Default open state for uncontrolled mode
   */
  defaultOpen?: boolean;

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Position of the content panel relative to trigger
   */
  position?: PopoverPosition;

  /**
   * Trigger element (click toggles open state)
   */
  children: ReactNode;

  /**
   * Content rendered inside the popover panel
   */
  content: ReactNode;

  /**
   * Additional class for the content panel
   */
  contentClassName?: string;

  /**
   * Close when clicking outside
   */
  closeOnOutsideClick?: boolean;

  /**
   * Close when pressing Escape
   */
  closeOnEscape?: boolean;
}

const GAP = 8;

export function Popover({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  position = 'bottom-start',
  children,
  content,
  contentClassName,
  closeOnOutsideClick = true,
  closeOnEscape = true,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const popoverId = useId().replace(/:/g, '-');

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && isOpen) {
        setOpen(false);
      }
    },
    [closeOnEscape, isOpen, setOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!closeOnOutsideClick || !isOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [closeOnOutsideClick, isOpen, setOpen]);

  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const updateCoords = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const baseTop = rect.bottom + GAP;
    const baseLeft = rect.left;
    const baseTopAlt = rect.top - GAP;
    const rectWidth = rect.width;

    const positions: Record<PopoverPosition, { top: number; left: number }> = {
      'bottom-start': { top: baseTop, left: baseLeft },
      bottom: { top: baseTop, left: baseLeft + rectWidth / 2 },
      'bottom-end': { top: baseTop, left: baseLeft + rectWidth },
      'top-start': { top: baseTopAlt, left: baseLeft },
      top: { top: baseTopAlt, left: baseLeft + rectWidth / 2 },
      'top-end': { top: baseTopAlt, left: baseLeft + rectWidth },
    };
    setCoords(positions[position]);
  }, [position]);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      updateCoords();
    } else {
      setCoords(null);
    }
  }, [isOpen, updateCoords]);

  useEffect(() => {
    if (!isOpen) return;
    const onScrollOrResize = () => updateCoords();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [isOpen, updateCoords]);

  const panelStyle = useMemo((): React.CSSProperties => {
    if (!coords) return { position: 'fixed' as const, left: -9999, top: -9999 };
    const isEnd = position.endsWith('end');
    return {
      position: 'fixed',
      left: coords.left,
      top: coords.top,
      transform:
        position === 'bottom' || position === 'top'
          ? 'translateX(-50%)'
          : isEnd
            ? 'translateX(-100%)'
            : undefined,
      zIndex: 1060,
    };
  }, [coords, position]);

  const trigger = (
    <div
      ref={triggerRef}
      className="inline-flex"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls={isOpen ? popoverId : undefined}
      onClick={() => setOpen(!isOpen)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(!isOpen);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );

  const panel =
    isOpen && coords ? (
      <div
        id={popoverId}
        ref={panelRef}
        role="dialog"
        aria-label="Menu"
        className={cn(
          'rounded-md border border-border bg-white text-popover-foreground shadow-md py-1 min-w-[160px]',
          contentClassName
        )}
        style={panelStyle}
      >
        {content}
      </div>
    ) : null;

  return (
    <>
      {trigger}
      {typeof document !== 'undefined' &&
        createPortal(panel, document.body)}
    </>
  );
}

Popover.displayName = 'Popover';
