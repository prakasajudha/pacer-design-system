<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../lib/utils';

export interface AvatarItem {
  img?: string;
  fullName?: string;
}

export interface AvatarProps {
  /**
   * Mode avatar: single atau group
   */
  mode?: 'single' | 'group';

  /**
   * Type avatar: circle atau square (diabaikan jika mode group, selalu circle)
   */
  type?: 'circle' | 'square';

  /**
   * Ukuran avatar
   */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Badge status (hanya untuk single mode)
   */
  badge?: 'online' | 'offline' | 'icon';

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

const props = withDefaults(defineProps<AvatarProps>(), {
  mode: 'single',
  type: 'circle',
  size: 'sm',
  badge: undefined,
  img: undefined,
  iconImg: undefined,
  fullName: 'User',
  items: () => [],
  showGroupCount: 1,
});

// Size configurations
const sizeConfig = {
  xxs: {
    size: 'w-4 h-4',
    text: 'text-[8px]',
    badge: 'w-1 h-1',
    badgeBorder: 'border',
    groupOverlap: '-mr-0.5',
    groupPadding: 'pr-0.5',
  },
  xs: {
    size: 'w-6 h-6',
    text: 'text-xs',
    badge: 'w-1.5 h-1.5 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-1',
    groupPadding: 'pr-1',
  },
  sm: {
    size: 'w-8 h-8',
    text: 'text-sm',
    badge: 'w-2 h-2 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-1.5',
    groupPadding: 'pr-1.5',
  },
  md: {
    size: 'w-10 h-10',
    text: 'text-base',
    badge: 'w-2.5 h-2.5 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-2',
    groupPadding: 'pr-2',
  },
  lg: {
    size: 'w-12 h-12',
    text: 'text-lg',
    badge: 'w-3 h-3 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-2.5',
    groupPadding: 'pr-2.5',
  },
  xl: {
    size: 'w-14 h-14',
    text: 'text-xl',
    badge: 'w-3.5 h-3.5 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-3',
    groupPadding: 'pr-3',
  },
  '2xl': {
    size: 'w-16 h-16',
    text: 'text-2xl',
    badge: 'w-4 h-4 border',
    badgeBorder: 'border',
    groupOverlap: '-mr-3.5',
    groupPadding: 'pr-3.5',
  },
} as const;

// Generate initials from full name
const getInitials = (name: string): string => {
  if (!name || name.trim() === '') return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

// Wrapper untuk single avatar (badge tidak ikut ke-clip)
const singleWrapperClasses = computed(() => {
  const config = sizeConfig[props.size];
  return cn('relative shrink-0', config.size);
});

// Inner avatar shape (yang nge-clip image/initials)
const singleAvatarClasses = computed(() => {
  const isCircle = props.mode === 'group' ? true : props.type === 'circle';
  const roundedClass =
    isCircle
      ? 'rounded-full'
      : props.size === 'xs'
        ? 'rounded-md'
        : props.size === 'sm' || props.size === 'md'
          ? 'rounded-lg'
          : props.size === 'lg' || props.size === 'xl'
            ? 'rounded-xl'
            : 'rounded-2xl';

  return cn('relative w-full h-full border-2 border-white overflow-hidden', roundedClass);
});

// Badge classes
const badgeClasses = computed(() => {
  if (!props.badge || props.mode === 'group') return '';
  
  const config = sizeConfig[props.size];
  const baseClasses = cn(
    'absolute bottom-0 right-0 flex items-center justify-center overflow-hidden rounded-full',
    config.badge,
    config.badgeBorder,
    'border-white'
  );

  if (props.badge === 'online') {
    return cn(baseClasses, 'bg-green-500');
  }
  if (props.badge === 'offline') {
    return cn(baseClasses, 'bg-slate-300');
  }
  if (props.badge === 'icon') {
    return cn(baseClasses, 'bg-brand-50');
  }

  return '';
});

// Initials container classes (inner shape)
const initialsClasses = computed(() => {
  const config = sizeConfig[props.size];
  const isCircle = props.mode === 'group' ? true : props.type === 'circle';
  const roundedClass = isCircle ? 'rounded-full' : props.size === 'xs' ? 'rounded-md' : props.size === 'sm' || props.size === 'md' ? 'rounded-lg' : props.size === 'lg' || props.size === 'xl' ? 'rounded-xl' : 'rounded-2xl';
  
  return cn(
    'flex items-center justify-center bg-slate-200 text-slate-950 relative',
    'w-full h-full',
    config.text,
    'font-normal leading-none',
    roundedClass
  );
});

// Group avatar classes
const groupAvatarClasses = computed(() => {
  const config = sizeConfig[props.size];
  return cn(
    'flex items-center isolate relative',
    config.groupPadding
  );
});

// Single avatar item classes
const groupItemClasses = computed(() => {
  const config = sizeConfig[props.size];
  const roundedClass = 'rounded-full'; // Group selalu circle
  
  return cn(
    'relative shrink-0 border-2 border-white overflow-hidden',
    config.size,
    roundedClass,
    config.groupOverlap
  );
});

// Group count badge classes
const groupCountClasses = computed(() => {
  const config = sizeConfig[props.size];
  const roundedClass = 'rounded-full';
  
  return cn(
    'flex items-center justify-center bg-slate-200 text-slate-950 border-2 border-white',
    config.size,
    config.text,
    'font-normal leading-none',
    roundedClass,
    config.groupOverlap
  );
});

// Computed untuk single mode
const singleInitials = computed(() => getInitials(props.fullName || 'User'));
const hasImage = computed(() => !!props.img);

// Computed untuk group mode
const visibleAvatars = computed(() => {
  if (props.mode !== 'group' || !props.items || props.items.length === 0) return [];
  return props.items.slice(0, props.showGroupCount);
});

const remainingCount = computed(() => {
  if (props.mode !== 'group' || !props.items) return 0;
  const remaining = props.items.length - props.showGroupCount;
  return remaining > 0 ? remaining : 0;
});

// Get initials untuk group item
const getGroupItemInitials = (item: AvatarItem): string => {
  return getInitials(item.fullName || 'User');
};
</script>

<template>
  <!-- Single Mode -->
  <div v-if="mode === 'single'" class="flex items-center relative">
    <div :class="singleWrapperClasses">
      <!-- Inner shape: image -->
      <div v-if="hasImage" :class="singleAvatarClasses">
        <img
          :src="img"
          :alt="fullName || 'Avatar'"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      <!-- Inner shape: initials -->
      <div v-else :class="cn(singleAvatarClasses, 'bg-slate-200')">
        <div :class="initialsClasses">
          {{ singleInitials }}
        </div>
      </div>

      <!-- Badge (di luar clip area) -->
      <div v-if="badge" :class="badgeClasses">
        <div
          v-if="badge === 'icon' && iconImg"
          class="w-full h-full flex items-center justify-center overflow-hidden"
        >
          <img :src="iconImg" alt="" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </div>

  <!-- Group Mode -->
  <div v-else-if="mode === 'group'" :class="groupAvatarClasses">
    <!-- Visible avatars -->
    <div
      v-for="(item, index) in visibleAvatars"
      :key="index"
      :class="groupItemClasses"
      :style="{ zIndex: visibleAvatars.length - index }"
    >
      <!-- Avatar dengan image -->
      <img
        v-if="item.img"
        :src="item.img"
        :alt="item.fullName || 'Avatar'"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-full"
      />
      <!-- Avatar dengan initials -->
      <div
        v-else
        class="flex items-center justify-center bg-slate-200 text-slate-950 w-full h-full rounded-full"
        :class="sizeConfig[size].text"
      >
        {{ getGroupItemInitials(item) }}
      </div>
    </div>

    <!-- Count badge jika ada remaining -->
    <div
      v-if="remainingCount > 0"
      :class="groupCountClasses"
      style="z-index: 0"
    >
      {{ remainingCount }}+
    </div>
  </div>
</template>
