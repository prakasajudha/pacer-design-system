<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../lib/utils';
import PtPopover from './PtPopover.vue';

export interface BreadcrumbItem {
  title: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
}

export type BreadcrumbType = 'ellipsis' | 'dropdown';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  type?: BreadcrumbType;
  collapse?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '>',
  type: 'dropdown',
  collapse: true,
});

const DEFAULT_SEPARATOR = '>';
const COLLAPSE_THRESHOLD = 3;

const shouldCollapse = computed(
  () => props.collapse && props.items.length > COLLAPSE_THRESHOLD
);
const head = computed(() =>
  shouldCollapse.value ? props.items[0] : null
);
const tail = computed(() =>
  shouldCollapse.value ? props.items[props.items.length - 1] : null
);
const middle = computed(() =>
  shouldCollapse.value ? props.items.slice(1, -1) : []
);
/** For dropdown: trigger = item[1], hidden in popover = items[2..last-1] */
const dropdownTriggerItem = computed(() =>
  shouldCollapse.value && props.type === 'dropdown' ? props.items[1] : null
);
const hiddenInPopover = computed(() =>
  props.type === 'dropdown' && dropdownTriggerItem.value
    ? props.items.slice(2, -1)
    : middle.value
);
const separatorDisplay = computed(() => props.separator || DEFAULT_SEPARATOR);

const getItemLinkClasses = (item: BreadcrumbItem, isActive: boolean) =>
  cn(
    'inline-flex items-center text-sm font-normal leading-5 no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
    isActive && 'text-slate-500 cursor-default',
    !isActive && item.link && !item.disabled && 'text-brand-300 hover:underline transition-colors',
    item.disabled && 'opacity-50 pointer-events-none cursor-not-allowed text-slate-500'
  );
</script>

<template>
  <nav
    aria-label="Breadcrumb"
    class="flex flex-wrap items-center"
  >
    <ol class="flex flex-wrap items-center list-none p-0 m-0 gap-0">
      <!-- Collapsed: first + trigger + last -->
      <template v-if="shouldCollapse && head && tail">
        <li>
          <component
            :is="head.link && !head.disabled ? 'a' : 'span'"
            :href="head.link"
            :class="getItemLinkClasses(head, false)"
            :aria-current="undefined"
          >
            <span v-if="head.icon" class="shrink-0 mr-1.5 inline-flex items-center" aria-hidden>
              {{ head.icon }}
            </span>
            <span class="truncate">{{ head.title }}</span>
          </component>
        </li>
        <li>
          <span
            aria-hidden
            class="mx-2 text-slate-500 text-sm font-normal leading-5 select-none shrink-0"
          >
            {{ separatorDisplay }}
          </span>
        </li>
        <li>
          <PtPopover
            position="bottom-start"
            content-class-name="max-h-[min(400px,80vh)] overflow-auto"
          >
            <span
              v-if="type === 'ellipsis'"
              class="inline-flex items-center justify-center w-6 h-6 text-slate-500 text-sm font-normal leading-5 rounded hover:bg-muted hover:text-slate-600 cursor-pointer"
              aria-label="Show more breadcrumbs"
            >
              …
            </span>
            <span
              v-else-if="dropdownTriggerItem"
              class="inline-flex items-end gap-1 text-brand-300 text-sm font-normal leading-5 rounded hover:bg-muted hover:text-brand-400 cursor-pointer px-1 py-0.5 -my-0.5"
              aria-label="More breadcrumbs"
            >
              <span v-if="dropdownTriggerItem.icon" class="shrink-0 inline-flex items-center" aria-hidden>
                {{ dropdownTriggerItem.icon }}
              </span>
              <span class="truncate">{{ dropdownTriggerItem.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0"
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
            <span
              v-else
              class="inline-flex items-center justify-center w-6 h-6 text-slate-500 rounded hover:bg-muted hover:text-slate-600 cursor-pointer"
              aria-label="More breadcrumbs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
            <template #content>
              <ul class="py-1 list-none" role="list">
                <li
                  v-for="(item, index) in hiddenInPopover"
                  :key="index"
                  class="list-none"
                >
                  <div class="px-3 py-2">
                    <component
                      :is="item.link && !item.disabled ? 'a' : 'span'"
                      :href="item.link"
                      :class="getItemLinkClasses(item, false) + ' block w-full text-left text-slate-900 text-sm font-normal leading-5 truncate'"
                    >
                      <span v-if="item.icon" class="shrink-0 mr-1.5 inline-flex" aria-hidden>
                        {{ item.icon }}
                      </span>
                      <span class="truncate">{{ item.title }}</span>
                    </component>
                  </div>
                </li>
              </ul>
            </template>
          </PtPopover>
        </li>
        <li>
          <span
            aria-hidden
            class="mx-2 text-slate-500 text-sm font-normal leading-5 select-none shrink-0"
          >
            {{ separatorDisplay }}
          </span>
        </li>
        <li>
          <span
            :class="getItemLinkClasses(tail, true)"
            aria-current="page"
          >
            <span v-if="tail.icon" class="shrink-0 mr-1.5 inline-flex items-center" aria-hidden>
              {{ tail.icon }}
            </span>
            <span class="truncate">{{ tail.title }}</span>
          </span>
        </li>
      </template>

      <!-- Full list -->
      <template v-else>
        <li
          v-for="(item, index) in items"
          :key="index"
          class="inline-flex items-center"
        >
          <span
            v-if="index > 0"
            aria-hidden
            class="mx-2 text-slate-500 text-sm font-normal leading-5 select-none shrink-0"
          >
            {{ separatorDisplay }}
          </span>
          <component
            :is="!item.disabled && item.link && index < items.length - 1 ? 'a' : 'span'"
            :href="item.link"
            :class="getItemLinkClasses(item, index === items.length - 1)"
            :aria-current="index === items.length - 1 ? 'page' : undefined"
          >
            <span v-if="item.icon" class="shrink-0 mr-1.5 inline-flex items-center" aria-hidden>
              {{ item.icon }}
            </span>
            <span class="truncate">{{ item.title }}</span>
          </component>
        </li>
      </template>
    </ol>
  </nav>
</template>
