import React, { createContext, useContext } from 'react';
import { cn } from '../utils/cn';
import { useTabsContext } from './Tabs';

export interface TabsListProps {
  /**
   * Stretch container dan labels untuk mengisi seluruh width
   */
  stretch?: boolean;

  children: React.ReactNode;
  className?: string;
}

interface TabsListContextValue {
  stretch: boolean;
}

const TabsListContext = createContext<TabsListContextValue | null>(null);

export const useTabsListContext = () => {
  const context = useContext(TabsListContext);
  return context || { stretch: false };
};

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ stretch = false, children, className, ...props }, ref) => {
    const { variant } = useTabsContext();

    const listClasses = cn(
      stretch ? 'grid relative grid-flow-col auto-cols-[1fr]' : 'flex relative',
      variant === 'default'
        ? stretch
          ? 'bg-slate-100 p-1 rounded-lg'
          : 'items-start bg-slate-100 p-1 rounded-lg'
        : stretch
          ? 'items-end border-b border-slate-300 p-0'
          : 'items-end border-b border-slate-300 p-0',
      stretch ? 'w-full' : 'w-fit',
      className
    );

    return (
      <TabsListContext.Provider value={{ stretch }}>
        <div ref={ref} className={listClasses} role="tablist" {...props}>
          {children}
        </div>
      </TabsListContext.Provider>
    );
  }
);

TabsList.displayName = 'TabsList';
