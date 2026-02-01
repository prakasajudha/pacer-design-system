import { type ReactNode } from 'react';
import { cn } from '../utils/cn';
import { Popover } from './Popover';

export interface BreadcrumbItem {
  /** Display title */
  title: string;
  /** Optional icon (React node, e.g. icon component) */
  icon?: ReactNode;
  /** Link href; if absent, item is current/active (no link) */
  link?: string;
  /** Disabled state */
  disabled?: boolean;
}

export type BreadcrumbType = 'ellipsis' | 'dropdown';

export interface BreadcrumbProps {
  /**
   * List of breadcrumb items
   */
  items: BreadcrumbItem[];

  /**
   * Separator between items. Default ">"
   */
  separator?: string;

  /**
   * Type of collapsed trigger: ellipsis (...) or dropdown (chevron). Default "dropdown"
   */
  type?: BreadcrumbType;

  /**
   * When true, collapse middle items into ellipsis/dropdown when there are more than 3 items. Default true
   */
  collapse?: boolean;

  /**
   * Additional class for the root nav
   */
  className?: string;
}

const DEFAULT_SEPARATOR = '>';
const COLLAPSE_THRESHOLD = 3;

function BreadcrumbSeparator({ separator }: { separator: string }) {
  return (
    <span
      aria-hidden
      className="mx-2 text-slate-500 text-sm font-normal leading-5 select-none shrink-0"
    >
      {separator}
    </span>
  );
}

function BreadcrumbItemLink({
  item,
  isActive,
  className,
}: {
  item: BreadcrumbItem;
  isActive: boolean;
  className?: string;
}) {
  const content = (
    <>
      {item.icon != null && (
        <span className="shrink-0 mr-1.5 inline-flex items-center [&>svg]:size-4" aria-hidden>
          {item.icon}
        </span>
      )}
      <span className="truncate">{item.title}</span>
    </>
  );

  const linkClass = cn(
    'inline-flex items-center text-sm font-normal leading-5 no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
    isActive && 'text-slate-500 cursor-default',
    !isActive && item.link && !item.disabled && 'text-brand-300 hover:underline transition-colors',
    item.disabled && 'opacity-50 pointer-events-none cursor-not-allowed text-slate-500',
    className
  );

  if (item.disabled) {
    return (
      <span className={linkClass}>
        {content}
      </span>
    );
  }

  if (isActive || !item.link) {
    return (
      <span className={linkClass} aria-current="page">
        {content}
      </span>
    );
  }

  return (
    <a href={item.link} className={linkClass}>
      {content}
    </a>
  );
}

export function Breadcrumb({
  items,
  separator = DEFAULT_SEPARATOR,
  type = 'dropdown',
  collapse = true,
  className,
}: BreadcrumbProps) {
  const shouldCollapse =
    collapse && items.length > COLLAPSE_THRESHOLD;
  const head = shouldCollapse ? items[0] : null;
  const tail = shouldCollapse ? items[items.length - 1] : null;
  /** For ellipsis: middle = items[1..last-1]. For dropdown: trigger = item[1], hidden = items[2..last-1] */
  const middle = shouldCollapse ? items.slice(1, -1) : [];
  const dropdownTriggerItem = shouldCollapse && type === 'dropdown' ? items[1] : null;
  const hiddenInPopover = type === 'dropdown' && dropdownTriggerItem ? items.slice(2, -1) : middle;

  const triggerLabel = type === 'ellipsis' ? 'Show more breadcrumbs' : 'More breadcrumbs';
  const triggerContent =
    type === 'ellipsis' ? (
      <span
        className="inline-flex items-center justify-center w-6 h-6 text-slate-500 text-sm font-normal leading-5 rounded hover:bg-muted hover:text-slate-600 cursor-pointer"
        aria-label={triggerLabel}
      >
        …
      </span>
    ) : dropdownTriggerItem ? (
      <span
        className="inline-flex items-end gap-1 text-brand-300 text-sm font-normal leading-5 rounded hover:bg-muted hover:text-brand-400 cursor-pointer px-1 py-0.5 -my-0.5"
        aria-label={triggerLabel}
      >
        {dropdownTriggerItem.icon != null && (
          <span className="shrink-0 inline-flex items-center [&>svg]:size-4" aria-hidden>
            {dropdownTriggerItem.icon}
          </span>
        )}
        <span className="truncate">{dropdownTriggerItem.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    ) : (
      <span
        className="inline-flex items-center justify-center w-6 h-6 text-slate-500 rounded hover:bg-muted hover:text-slate-600 cursor-pointer"
        aria-label={triggerLabel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    );

  const popoverContent = (
    <ul className="py-1 list-none" role="list">
      {hiddenInPopover.map((item, index) => (
        <li key={index} className="list-none">
          <div className="px-3 py-2">
            <BreadcrumbItemLink
              item={item}
              isActive={false}
              className="block w-full text-left text-slate-900 text-sm font-normal leading-5 truncate"
            />
          </div>
        </li>
      ))}
    </ul>
  );

  if (shouldCollapse) {
    return (
      <nav
        aria-label="Breadcrumb"
        className={cn('flex flex-wrap items-center', className)}
      >
        <ol className="flex flex-wrap items-center list-none p-0 m-0 gap-0">
          <li>
            <BreadcrumbItemLink
              item={head!}
              isActive={false}
            />
          </li>
          <li>
            <BreadcrumbSeparator separator={separator} />
          </li>
          <li>
            <Popover
              position="bottom-start"
              content={popoverContent}
              contentClassName="max-h-[min(400px,80vh)] overflow-auto"
            >
              {triggerContent}
            </Popover>
          </li>
          <li>
            <BreadcrumbSeparator separator={separator} />
          </li>
          <li>
            <BreadcrumbItemLink
              item={tail!}
              isActive={true}
            />
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex flex-wrap items-center', className)}
    >
      <ol className="flex flex-wrap items-center list-none p-0 m-0 gap-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && <BreadcrumbSeparator separator={separator} />}
              <BreadcrumbItemLink item={item} isActive={isLast} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.displayName = 'Breadcrumb';
