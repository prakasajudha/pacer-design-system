<template>
  <aside class="vp-sidebar" :class="{ 'vp-sidebar-open': isOpen }">
    <div class="vp-sidebar-content">
      <nav class="vp-sidebar-nav">
        <div
          v-for="(group, groupIndex) in sidebarGroups"
          :key="groupIndex"
          class="vp-sidebar-group"
        >
          <div v-if="group.text" class="vp-sidebar-group-title">
            {{ group.text }}
          </div>
          <div class="vp-sidebar-group-items">
            <template v-for="(item, itemIndex) in group.items" :key="item.link || `${item.text}-${itemIndex}`">
              <!-- Subgroup (punya items): expand/collapse on click -->
              <template v-if="item.items?.length">
                <div class="vp-sidebar-group-sub">
                  <button
                    type="button"
                    class="vp-sidebar-item vp-sidebar-trigger"
                    :class="{ 'vp-sidebar-trigger-open': getExpanded(groupIndex, item) }"
                    :aria-expanded="getExpanded(groupIndex, item)"
                    :aria-controls="`sidebar-group-${groupIndex}-${itemIndex}`"
                    :id="`sidebar-trigger-${groupIndex}-${itemIndex}`"
                    @click="handleToggleGroup(groupIndex, item)"
                  >
                    <span class="vp-sidebar-item-text">{{ item.text }}</span>
                    <svg
                      class="vp-sidebar-item-chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      aria-hidden="true"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <div
                    :id="`sidebar-group-${groupIndex}-${itemIndex}`"
                    class="vp-sidebar-subitems"
                    :class="{ 'vp-sidebar-subitems-open': getExpanded(groupIndex, item) }"
                    role="region"
                    :aria-labelledby="`sidebar-trigger-${groupIndex}-${itemIndex}`"
                  >
                    <a
                      v-for="sub in item.items"
                      :key="sub.link"
                      :href="sub.link"
                      class="vp-sidebar-subitem"
                      :class="{
                        'active': isExactActive(sub.link),
                        'parent-active': isParentActive(sub.link),
                      }"
                    >
                      {{ sub.text }}
                    </a>
                  </div>
                </div>
              </template>
              <!-- Link langsung -->
              <a
                v-else-if="item.link"
                :href="item.link"
                class="vp-sidebar-item"
                :class="{
                  'active': isExactActive(item.link),
                  'parent-active': isParentActive(item.link),
                }"
              >
                <span class="vp-sidebar-item-text">{{ item.text }}</span>
              </a>
            </template>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useData } from 'vitepress';

type SidebarItem = { text: string; link?: string; collapsed?: boolean; items?: { text: string; link: string }[] };

const route = useRoute();
const { site } = useData();

defineProps<{
  isOpen?: boolean;
}>();

const sidebarGroups = computed(() => {
  return (site.value.themeConfig?.sidebar || []) as { text: string; items: SidebarItem[] }[];
});

const expandedGroups = ref<Record<string, boolean>>({});

const normalizePath = (path: string) => {
  if (!path) return '';
  let normalized = path;
  if (normalized.endsWith('.html')) normalized = normalized.slice(0, -5);
  if (normalized !== '/' && normalized.endsWith('/')) normalized = normalized.slice(0, -1);
  if (normalized && !normalized.startsWith('/')) normalized = '/' + normalized;
  return normalized || '/';
};

const routePath = computed(() => normalizePath(route.path).split('#')[0]);

const getGroupKey = (groupIndex: number, item: SidebarItem) => `${groupIndex}-${item.text}`;

const getExpanded = (groupIndex: number, item: SidebarItem): boolean => {
  const key = getGroupKey(groupIndex, item);
  if (key in expandedGroups.value) return expandedGroups.value[key];
  if (item.items?.length && routePath.value) {
    const isActiveGroup = item.items.some((c) => c?.link && normalizePath(c.link).split('#')[0] === routePath.value);
    if (isActiveGroup) return true;
  }
  return !(item.collapsed ?? true);
};

const handleToggleGroup = (groupIndex: number, item: SidebarItem) => {
  const key = getGroupKey(groupIndex, item);
  expandedGroups.value[key] = !getExpanded(groupIndex, item);
};

// Check if this is the exact active page
const isExactActive = (link?: string) => {
  if (!link) return false;
  
  const normalizePath = (path: string) => {
    if (!path) return '';
    let normalized = path;
    // Remove .html extension
    if (normalized.endsWith('.html')) {
      normalized = normalized.slice(0, -5);
    }
    // Remove trailing slash (except for root)
    if (normalized !== '/' && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    // Ensure it starts with /
    if (normalized && !normalized.startsWith('/')) {
      normalized = '/' + normalized;
    }
    return normalized || '/';
  };
  
  const normalizedLink = normalizePath(link);
  const normalizedRoute = normalizePath(route.path);
  const routePathWithoutHash = normalizedRoute.split('#')[0];
  
  // Exact match only
  return routePathWithoutHash === normalizedLink;
};

// Check if this is a parent path of the current route (for subtle highlighting)
const isParentActive = (link?: string) => {
  if (!link) return false;
  
  const normalizePath = (path: string) => {
    if (!path) return '';
    let normalized = path;
    if (normalized.endsWith('.html')) {
      normalized = normalized.slice(0, -5);
    }
    if (normalized !== '/' && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    if (normalized && !normalized.startsWith('/')) {
      normalized = '/' + normalized;
    }
    return normalized || '/';
  };
  
  const normalizedLink = normalizePath(link);
  const normalizedRoute = normalizePath(route.path);
  const routePathWithoutHash = normalizedRoute.split('#')[0];
  
  // Don't highlight parent if it's already exact match
  if (routePathWithoutHash === normalizedLink) {
    return false;
  }
  
  // Only highlight parent if route is a direct child (not grandchild)
  // e.g., /components/ should highlight for /components/button but not for /components/button/variant
  if (normalizedLink !== '/' && routePathWithoutHash.startsWith(normalizedLink + '/')) {
    const remainingPath = routePathWithoutHash.slice(normalizedLink.length + 1);
    // Only highlight if it's a direct child (no additional slashes)
    return !remainingPath.includes('/');
  }
  
  return false;
};
</script>

<style scoped>
.vp-sidebar {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 256px;
  background: white;
  border-right: 1px solid var(--vp-c-divider);
  overflow-y: auto;
  transition: transform 0.3s, background-color 0.3s, border-color 0.3s;
  z-index: 100;
}

.vp-sidebar-content {
  padding: 24px 0;
}

.vp-sidebar-nav {
  padding: 0 12px;
}

.vp-sidebar-group {
  margin-bottom: 12px;
}

.vp-sidebar-group:last-child {
  margin-bottom: 0;
}

.vp-sidebar-group-title {
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.vp-sidebar-group-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.vp-sidebar-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s;
}

.vp-sidebar-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

/* Exact active page - full highlight */
.vp-sidebar-item.active {
  background: #f0f7ff;
  color: #0156C6;
  font-weight: 600;
  border-left: 3px solid #0156C6;
  padding-left: 9px;
}

.dark .vp-sidebar-item.active {
  background: rgba(1, 86, 198, 0.15);
  color: #60a5fa;
}

/* Parent path - subtle highlight (no background, just color) */
.vp-sidebar-item.parent-active {
  color: #0156C6;
  font-weight: 500;
}

.dark .vp-sidebar-item.parent-active {
  color: #60a5fa;
}

.vp-sidebar-item-text {
  flex: 1;
}

.vp-sidebar-item-chevron {
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.vp-sidebar-item.has-children:hover .vp-sidebar-item-chevron {
  transform: translateX(4px);
}

.vp-sidebar-group-sub {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.vp-sidebar-trigger {
  width: 100%;
  text-align: left;
  cursor: pointer;
  border: none;
  background: transparent;
  font: inherit;
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--vp-c-text-1);
  border-radius: 6px;
  transition: all 0.2s;
}

.vp-sidebar-trigger:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

/* Ensure trigger with active state has same styling as regular item */
.vp-sidebar-trigger.active {
  background: #f0f7ff;
  color: #0156C6;
  font-weight: 600;
  border-left: 3px solid #0156C6;
  padding-left: 9px;
}

.dark .vp-sidebar-trigger.active {
  background: rgba(1, 86, 198, 0.15);
  color: #60a5fa;
}

.vp-sidebar-trigger.parent-active {
  color: #0156C6;
  font-weight: 500;
}

.dark .vp-sidebar-trigger.parent-active {
  color: #60a5fa;
}

.vp-sidebar-trigger .vp-sidebar-item-chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.vp-sidebar-trigger-open .vp-sidebar-item-chevron {
  transform: rotate(90deg);
}

.vp-sidebar-subitems {
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.2s ease, opacity 0.2s ease, margin 0.2s ease;
}

.vp-sidebar-subitems.vp-sidebar-subitems-open {
  max-height: 600px;
  opacity: 1;
  margin-top: 4px;
}

.vp-sidebar-subitem {
  padding: 6px 12px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 13px;
  border-radius: 4px;
  transition: all 0.2s;
}

.vp-sidebar-subitem:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.vp-sidebar-subitem.active {
  color: var(--vp-c-brand);
  font-weight: 500;
}

/* Dark mode support */
.dark .vp-sidebar {
  background: var(--vp-c-bg);
}

/* Hide sidebar by default on mobile/tablet (< 960px) */
@media (max-width: 959px) {
  .vp-sidebar {
    transform: translateX(-100%) !important;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }
  
  .vp-sidebar.vp-sidebar-open {
    transform: translateX(0) !important;
  }
}

/* Additional mobile adjustments */
@media (max-width: 768px) {
  .vp-sidebar {
    width: 240px;
  }
}
</style>
