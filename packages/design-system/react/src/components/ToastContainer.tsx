import React, { useSyncExternalStore } from 'react';
import { cn } from '../lib/utils';
import { Toast } from './Toast';
import {
  subscribe,
  getSnapshot,
  getPositionSnapshot,
  removeToast,
  type ToastPosition,
} from './useToast';

export interface ToastContainerProps {
  /**
   * Override position untuk toast container
   */
  position?: ToastPosition;
}

const positionClassMap: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4',
  top: 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  right: 'right-4 top-1/2 -translate-y-1/2',
  'bottom-right': 'bottom-4 right-4',
  bottom: 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-left': 'bottom-4 left-4',
  left: 'left-4 top-1/2 -translate-y-1/2',
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ position }) => {
  const toasts = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const globalPosition = useSyncExternalStore(subscribe, getPositionSnapshot, getPositionSnapshot);

  const containerPosition = position || globalPosition;

  const handleClose = (id: string) => {
    removeToast(id);
  };

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed z-[9999] flex flex-col gap-2 pointer-events-none',
        positionClassMap[containerPosition]
      )}
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast
            id={toast.id}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
            icon={toast.icon}
            iconClassName={toast.iconClassName}
            iconStyle={toast.iconStyle}
            duration={toast.duration}
            onClose={() => handleClose(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
