import { ref } from 'vue';
import type { ToastProps } from '../components/PtToast.vue';

export type ToastPosition = 
  | 'top-left' 
  | 'top' 
  | 'top-right' 
  | 'right' 
  | 'bottom-right' 
  | 'bottom' 
  | 'bottom-left' 
  | 'left';

export interface ToastOptions extends Omit<ToastProps, 'id' | 'onClose'> {
  /**
   * Duration dalam milliseconds (default: 5000)
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
const toasts = ref<ToastItem[]>([]);

// Global position state
const globalPosition = ref<ToastPosition>('top-right');

/**
 * Generate unique ID untuk toast
 */
const generateId = () => {
  return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Remove toast dari list
 */
const removeToast = (id: string) => {
  const index = toasts.value.findIndex((t) => t.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
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
    position: options.position ?? globalPosition.value,
  };

  toasts.value.push(toast);
  return id;
};

/**
 * Remove toast by ID
 */
const remove = (id: string) => {
  removeToast(id);
};

/**
 * Clear all toasts
 */
const clear = () => {
  toasts.value = [];
};

/**
 * Set global position untuk semua toast
 */
const setPosition = (position: ToastPosition) => {
  globalPosition.value = position;
};

/**
 * Get global position
 */
const getPosition = () => globalPosition;

/**
 * Toast API - seperti toastify
 */
export const useToast = () => {
  return {
    /**
     * Show neutral toast
     */
    neutral: (title: string, description?: string, options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>) => {
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
    information: (title: string, description?: string, options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>) => {
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
    success: (title: string, description?: string, options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>) => {
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
    warning: (title: string, description?: string, options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>) => {
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
    error: (title: string, description?: string, options?: Omit<ToastOptions, 'variant' | 'title' | 'description'>) => {
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
    show: (options: ToastOptions) => {
      return addToast(options);
    },

    /**
     * Remove toast by ID
     */
    remove,

    /**
     * Clear all toasts
     */
    clear,

    /**
     * Set global position untuk semua toast baru
     */
    setPosition,

    /**
     * Get current global position
     */
    getPosition: () => globalPosition.value,
  };
};

/**
 * Global toast instance (optional, untuk convenience)
 */
export const toast = useToast();

/**
 * Export setPosition untuk digunakan langsung
 */
export { setPosition };

/**
 * Export getPosition untuk digunakan dengan ToastContainer
 */
export { getPosition };

/**
 * Export toasts state untuk digunakan dengan ToastContainer
 */
export const getToasts = () => toasts;

/**
 * Export removeToast untuk digunakan dengan ToastContainer
 */
export { removeToast };
