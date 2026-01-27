import { useSyncExternalStore, useCallback } from 'react';
import type { ToastVariant } from './Toast';

export type ToastPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export interface ToastOptions {
  /**
   * Variant visual dari toast
   */
  variant?: ToastVariant;

  /**
   * Title toast
   */
  title?: string;

  /**
   * Description toast
   */
  description?: string;

  /**
   * Custom icon
   */
  icon?: React.ReactNode;

  /**
   * Custom className untuk icon
   */
  iconClassName?: string;

  /**
   * Custom style untuk icon
   */
  iconStyle?: React.CSSProperties;

  /**
   * Duration dalam milliseconds (default: 5000, 0 = tidak auto close)
   */
  duration?: number;

  /**
   * Position toast (optional, akan menggunakan global position jika tidak di-set)
   */
  position?: ToastPosition;
}

export interface ToastItem extends ToastOptions {
  id: string;
}

// Global toast state
let toasts: ToastItem[] = [];
let globalPosition: ToastPosition = 'top-right';
let listeners: Array<() => void> = [];

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

/**
 * Generate unique ID untuk toast
 */
const generateId = (): string => {
  return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Add toast ke list
 */
const addToast = (options: ToastOptions): string => {
  const id = generateId();
  const toast: ToastItem = {
    ...options,
    id,
    duration: options.duration ?? 5000,
    position: options.position ?? globalPosition,
  };

  toasts = [...toasts, toast];
  emitChange();
  return id;
};

/**
 * Remove toast by ID
 */
const removeToast = (id: string): void => {
  toasts = toasts.filter((t) => t.id !== id);
  emitChange();
};

/**
 * Clear all toasts
 */
const clearToasts = (): void => {
  toasts = [];
  emitChange();
};

/**
 * Set global position
 */
const setGlobalPosition = (position: ToastPosition): void => {
  globalPosition = position;
  emitChange();
};

/**
 * Get global position
 */
const getGlobalPosition = (): ToastPosition => {
  return globalPosition;
};

/**
 * Get current toasts
 */
const getToasts = (): ToastItem[] => {
  return toasts;
};

/**
 * Subscribe to toast changes
 */
const subscribe = (listener: () => void): (() => void) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

/**
 * Get snapshot for useSyncExternalStore
 */
const getSnapshot = (): ToastItem[] => {
  return toasts;
};

/**
 * Get position snapshot for useSyncExternalStore
 */
const getPositionSnapshot = (): ToastPosition => {
  return globalPosition;
};

/**
 * Toast API object for direct usage
 */
export const toast = {
  /**
   * Show neutral toast
   */
  neutral: (
    title: string,
    description?: string,
    options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>
  ): string => {
    return addToast({
      variant: 'neutral',
      title,
      description,
      ...options,
    });
  },

  /**
   * Show information toast
   */
  information: (
    title: string,
    description?: string,
    options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>
  ): string => {
    return addToast({
      variant: 'information',
      title,
      description,
      ...options,
    });
  },

  /**
   * Show success toast
   */
  success: (
    title: string,
    description?: string,
    options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>
  ): string => {
    return addToast({
      variant: 'success',
      title,
      description,
      ...options,
    });
  },

  /**
   * Show warning toast
   */
  warning: (
    title: string,
    description?: string,
    options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>
  ): string => {
    return addToast({
      variant: 'warning',
      title,
      description,
      ...options,
    });
  },

  /**
   * Show error toast
   */
  error: (
    title: string,
    description?: string,
    options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>
  ): string => {
    return addToast({
      variant: 'error',
      title,
      description,
      ...options,
    });
  },

  /**
   * Show custom toast
   */
  show: (options: ToastOptions): string => {
    return addToast(options);
  },

  /**
   * Remove toast by ID
   */
  remove: removeToast,

  /**
   * Clear all toasts
   */
  clear: clearToasts,

  /**
   * Set global position
   */
  setPosition: setGlobalPosition,

  /**
   * Get current global position
   */
  getPosition: getGlobalPosition,
};

/**
 * React hook for toast management
 */
export const useToast = () => {
  const toasts = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const position = useSyncExternalStore(subscribe, getPositionSnapshot, getPositionSnapshot);

  return {
    /**
     * Current toasts array
     */
    toasts,

    /**
     * Current global position
     */
    position,

    /**
     * Show neutral toast
     */
    neutral: useCallback(toast.neutral, []),

    /**
     * Show information toast
     */
    information: useCallback(toast.information, []),

    /**
     * Show success toast
     */
    success: useCallback(toast.success, []),

    /**
     * Show warning toast
     */
    warning: useCallback(toast.warning, []),

    /**
     * Show error toast
     */
    error: useCallback(toast.error, []),

    /**
     * Show custom toast
     */
    show: useCallback(toast.show, []),

    /**
     * Remove toast by ID
     */
    remove: useCallback(toast.remove, []),

    /**
     * Clear all toasts
     */
    clear: useCallback(toast.clear, []),

    /**
     * Set global position
     */
    setPosition: useCallback(toast.setPosition, []),

    /**
     * Get current global position
     */
    getPosition: useCallback(toast.getPosition, []),
  };
};

// Export for ToastContainer
export { getToasts, removeToast, subscribe, getSnapshot, getPositionSnapshot };
