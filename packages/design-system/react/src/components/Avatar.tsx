import React from 'react';
import { cn } from '../utils/cn';

export type AvatarMode = 'single' | 'group';
export type AvatarType = 'circle' | 'square';
export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarBadge = 'online' | 'offline' | 'icon';

export type AvatarItem = {
  img?: string;
  fullName?: string;
};

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Mode avatar: single atau group
   */
  mode?: AvatarMode;

  /**
   * Type avatar: circle atau square (diabaikan jika mode group, selalu circle)
   */
  type?: AvatarType;

  /**
   * Ukuran avatar
   */
  size?: AvatarSize;

  /**
   * Badge status (hanya untuk single mode)
   */
  badge?: AvatarBadge;

  /**
   * URL gambar avatar (hanya untuk single mode)
   */
  img?: string;

  /**
   * URL icon untuk badge type icon (hanya untuk single mode)
   */
  iconImg?: string;

  /**
   * Nama lengkap untuk generate initials (hanya untuk single mode)
   */
  fullName?: string;

  /**
   * Array avatar items (hanya untuk group mode)
   */
  items?: AvatarItem[];

  /**
   * Jumlah maksimal avatar yang ditampilkan sebelum count badge (hanya untuk group mode)
   * Default: 1
   */
  showGroupCount?: number;
}

const sizeConfig = {
  xxs: {
    avatar: 'w-4 h-4',
    text: 'text-[8px] font-medium',
    badge: 'w-1 h-1',
    badgeBorder: 'border',
    groupOverlap: '-mr-0.5',
    groupPadding: 'pr-0.5',
  },
  xs: {
    avatar: 'w-6 h-6',
    text: 'text-xs font-normal',
    badge: 'w-1.5 h-1.5',
    badgeBorder: 'border',
    groupOverlap: '-mr-1',
    groupPadding: 'pr-1',
  },
  sm: {
    avatar: 'w-8 h-8',
    text: 'text-sm font-normal',
    badge: 'w-2 h-2',
    badgeBorder: 'border',
    groupOverlap: '-mr-1.5',
    groupPadding: 'pr-1.5',
  },
  md: {
    avatar: 'w-10 h-10',
    text: 'text-base font-normal',
    badge: 'w-2.5 h-2.5',
    badgeBorder: 'border',
    groupOverlap: '-mr-2',
    groupPadding: 'pr-2',
  },
  lg: {
    avatar: 'w-12 h-12',
    text: 'text-lg font-normal',
    badge: 'w-3 h-3',
    badgeBorder: 'border',
    groupOverlap: '-mr-2.5',
    groupPadding: 'pr-2.5',
  },
  xl: {
    avatar: 'w-14 h-14',
    text: 'text-xl font-normal',
    badge: 'w-3.5 h-3.5',
    badgeBorder: 'border',
    groupOverlap: '-mr-3',
    groupPadding: 'pr-3',
  },
  '2xl': {
    avatar: 'w-16 h-16',
    text: 'text-2xl font-normal',
    badge: 'w-4 h-4',
    badgeBorder: 'border',
    groupOverlap: '-mr-3.5',
    groupPadding: 'pr-3.5',
  },
} as const;

const getInitials = (name: string) => {
  const trimmed = (name || '').trim();
  if (!trimmed) return 'U';

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const getSquareRadiusClass = (size: AvatarSize) => {
  if (size === 'xxs') return 'rounded'; // 4px
  if (size === 'xs') return 'rounded-md'; // 6px
  if (size === 'sm' || size === 'md') return 'rounded-lg'; // 8px
  if (size === 'lg' || size === 'xl') return 'rounded-xl'; // 12px
  return 'rounded-2xl'; // 16px
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      mode = 'single',
      type = 'circle',
      size = 'sm',
      badge,
      img,
      iconImg,
      fullName = 'User',
      items = [],
      showGroupCount = 1,
      className,
      ...props
    },
    ref
  ) => {
    const cfg = sizeConfig[size];

    const isGroup = mode === 'group';
    const resolvedType: AvatarType = isGroup ? 'circle' : type;

    const avatarRadius = resolvedType === 'circle' ? 'rounded-full' : getSquareRadiusClass(size);

    const badgeClasses =
      !badge || isGroup
        ? null
        : cn(
            'absolute bottom-0 right-0 flex items-center justify-center overflow-hidden rounded-full border-white',
            cfg.badge,
            cfg.badgeBorder,
            badge === 'online'
              ? 'bg-green-500'
              : badge === 'offline'
                ? 'bg-slate-300'
                : 'bg-brand-50'
          );

    // Group computations
    const safeShowCount = Math.max(0, Number.isFinite(showGroupCount) ? showGroupCount : 0);
    const visibleAvatars = isGroup ? items.slice(0, safeShowCount) : [];
    const remainingCount = isGroup ? Math.max(0, items.length - safeShowCount) : 0;

    if (isGroup) {
      return (
        <div
          ref={ref}
          className={cn('flex items-center isolate relative', cfg.groupPadding, className)}
          role="group"
          aria-label="Avatar group"
          {...props}
        >
          {visibleAvatars.map((item, index) => {
            const initials = getInitials(item.fullName || 'User');
            return (
              <div
                key={`${item.img ?? ''}-${item.fullName ?? ''}-${index}`}
                className={cn(
                  'relative shrink-0 border-2 border-white overflow-hidden rounded-full',
                  cfg.avatar,
                  cfg.groupOverlap
                )}
                style={{ zIndex: visibleAvatars.length - index }}
                aria-label={item.fullName || 'User'}
                role="img"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.fullName || 'Avatar'}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-full"
                  />
                ) : (
                  <div
                    className={cn(
                      'flex items-center justify-center bg-slate-200 text-slate-950 w-full h-full rounded-full leading-none',
                      cfg.text
                    )}
                  >
                    {initials}
                  </div>
                )}
              </div>
            );
          })}

          {remainingCount > 0 && (
            <div
              className={cn(
                'flex items-center justify-center bg-slate-200 text-slate-950 border-2 border-white rounded-full leading-none',
                cfg.avatar,
                cfg.text,
                cfg.groupOverlap
              )}
              style={{ zIndex: 0 }}
              aria-label={`${remainingCount}+ more`}
              role="img"
            >
              {remainingCount}+
            </div>
          )}
        </div>
      );
    }

    const initials = getInitials(fullName);
    const hasImage = Boolean(img);

    return (
      <div ref={ref} className={cn('flex items-center relative', className)} {...props}>
        <div className={cn('relative shrink-0', cfg.avatar)} aria-label={fullName} role="img">
          {/* Inner shape: clips image/initials */}
          <div className={cn('relative w-full h-full border-2 border-white overflow-hidden', avatarRadius)}>
            {hasImage ? (
              <img
                src={img}
                alt={fullName || 'Avatar'}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            ) : (
              <div
                className={cn(
                  'flex items-center justify-center w-full h-full bg-slate-200 text-slate-950 leading-none',
                  cfg.text,
                  avatarRadius
                )}
              >
                {initials}
              </div>
            )}
          </div>

          {/* Badge: outside clip area */}
          {badgeClasses && (
            <div className={badgeClasses}>
              {badge === 'icon' && iconImg ? (
                <img src={iconImg} alt="" className="w-full h-full object-contain" />
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

