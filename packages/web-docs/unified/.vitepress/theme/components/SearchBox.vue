<template>
  <div class="search-wrapper">
    <button
      class="search-trigger"
      @click="open = true"
      aria-label="Search documentation"
    >
      <svg class="search-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z" />
        <path d="M19 19l-4.35-4.35" />
      </svg>
      <span class="search-placeholder">Search</span>
      <kbd class="search-shortcut">Ctrl K</kbd>
    </button>
    
    <Teleport to="body">
      <Transition name="search-modal">
        <div v-if="open" class="search-modal-overlay" @click="open = false">
          <div class="search-modal" @click.stop>
            <div class="search-modal-header">
              <div class="search-input-wrapper">
                <svg class="search-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z" />
                  <path d="M19 19l-4.35-4.35" />
                </svg>
                <input
                  ref="searchInput"
                  v-model="query"
                  type="text"
                  class="search-input-field"
                  placeholder="Search documentation..."
                  @keydown.esc="open = false"
                  @keydown.enter="handleSearch"
                />
              </div>
              <button class="search-close" @click="open = false" aria-label="Close search">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </button>
            </div>
            <div class="search-results">
              <div v-if="!query" class="search-empty">
                <p>Type to search documentation...</p>
              </div>
              <div v-else-if="results.length === 0" class="search-empty">
                <p>No results found for "{{ query }}"</p>
              </div>
              <div v-else class="search-results-list">
                <a
                  v-for="(result, index) in results"
                  :key="result.url"
                  :href="result.url"
                  class="search-result-item"
                  :class="{ 'highlighted': index === 0 }"
                  @click="open = false"
                  @mouseenter="highlightedIndex = index"
                  @mouseleave="highlightedIndex = -1"
                >
                  <div class="search-result-icon">
                    <component :is="getIconForResult(result)" />
                  </div>
                  <div class="search-result-content">
                    <div class="search-result-title">{{ result.title }}</div>
                    <div class="search-result-excerpt">{{ result.excerpt || result.url }}</div>
                    <div class="search-result-url">{{ result.url }}</div>
                  </div>
                  <div class="search-result-arrow">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 5l6 5-6 5" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted, h } from 'vue';
import { useRouter, useData } from 'vitepress';
import { Teleport, Transition } from 'vue';

const router = useRouter();
const { site } = useData();
const open = ref(false);
const query = ref('');
const searchInput = ref<HTMLInputElement | null>(null);
const results = ref<Array<{ title: string; url: string; excerpt: string }>>([]);
const searchIndex = ref<any>(null);
const highlightedIndex = ref(-1);

// Get icon component for each result based on URL or title
const getIconForResult = (result: { title: string; url: string; excerpt: string }) => {
  const url = result.url.toLowerCase();
  const title = result.title.toLowerCase();
  
  // Component-specific icons
  if (url.includes('/components/button') || title.includes('button')) {
    return ButtonIcon;
  }
  if (url.includes('/components/modal') || title.includes('modal')) {
    return ModalIcon;
  }
  if (url.includes('/components/input') || title.includes('input')) {
    return InputIcon;
  }
  if (url.includes('/components/card') || title.includes('card')) {
    return CardIcon;
  }
  if (url.includes('/components/tabs') || title.includes('tab')) {
    return TabsIcon;
  }
  if (url.includes('/components/avatar') || title.includes('avatar')) {
    return AvatarIcon;
  }
  if (url.includes('/components/badge') || title.includes('badge')) {
    return BadgeIcon;
  }
  if (url.includes('/components/checkbox') || title.includes('checkbox')) {
    return CheckboxIcon;
  }
  if (url.includes('/components/radio') || title.includes('radio')) {
    return RadioIcon;
  }
  if (url.includes('/components/switch') || title.includes('switch')) {
    return SwitchIcon;
  }
  if (url.includes('/components/progress') || title.includes('progress')) {
    return ProgressIcon;
  }
  if (url.includes('/components/skeleton') || title.includes('skeleton')) {
    return SkeletonIcon;
  }
  if (url.includes('/components/information') || title.includes('information')) {
    return InformationIcon;
  }
  if (url.includes('/components/icon-button') || title.includes('icon button')) {
    return IconButtonIcon;
  }
  
  // Framework icons
  if (url.includes('/frameworks/react') || title.includes('react')) {
    return ReactIcon;
  }
  if (url.includes('/frameworks/vue') || title.includes('vue')) {
    return VueIcon;
  }
  if (url.includes('/frameworks/blazor') || title.includes('blazor')) {
    return BlazorIcon;
  }
  
  // Guide/documentation icons
  if (url.includes('/getting-started') || url.includes('/introduction') || title.includes('getting started') || title.includes('introduction')) {
    return GuideIcon;
  }
  if (url.includes('/design-principles') || title.includes('design principles')) {
    return DesignIcon;
  }
  if (url.includes('/tokens') || title.includes('token')) {
    return TokenIcon;
  }
  if (url.includes('/contributing') || title.includes('contributing')) {
    return ContributingIcon;
  }
  
  // Default icon
  return DefaultIcon;
};

// Icon components
const ButtonIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '6', width: '14', height: '8', rx: '2' }),
  h('path', { d: 'M7 10h6' })
]);

const ModalIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '4', width: '14', height: '12', rx: '2' }),
  h('path', { d: 'M8 8h4M8 12h4' })
]);

const InputIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '6', width: '14', height: '8', rx: '1' }),
  h('path', { d: 'M7 10h6' })
]);

const CardIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '4', width: '14', height: '12', rx: '2' }),
  h('path', { d: 'M3 8h14' })
]);

const TabsIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M3 5h14M3 5v10h14V5M3 5l7 5 7-5' })
]);

const AvatarIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '7', r: '4' }),
  h('path', { d: 'M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6' })
]);

const BadgeIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '6' }),
  h('path', { d: 'M10 6v8M6 10h8' })
]);

const CheckboxIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '4', y: '6', width: '12', height: '12', rx: '2' }),
  h('path', { d: 'M8 10l2 2 4-4' })
]);

const RadioIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '6' }),
  h('circle', { cx: '10', cy: '10', r: '2', fill: 'currentColor' })
]);

const SwitchIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '8', width: '14', height: '4', rx: '2' }),
  h('circle', { cx: '13', cy: '10', r: '2', fill: 'currentColor' })
]);

const ProgressIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '8', width: '14', height: '4', rx: '2' }),
  h('rect', { x: '3', y: '8', width: '10', height: '4', rx: '2', fill: 'currentColor' })
]);

const SkeletonIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('rect', { x: '3', y: '4', width: '14', height: '12', rx: '2', 'stroke-dasharray': '2 2' })
]);

const InformationIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '7' }),
  h('path', { d: 'M10 7v3M10 13h.01' })
]);

const IconButtonIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '6' }),
  h('path', { d: 'M10 6v8M6 10h8' })
]);

const ReactIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '2', fill: '#61DAFB' }),
  h('ellipse', { cx: '10', cy: '10', rx: '7', ry: '2.5', fill: 'none' }),
  h('ellipse', { cx: '10', cy: '10', rx: '7', ry: '2.5', fill: 'none', transform: 'rotate(60 10 10)' }),
  h('ellipse', { cx: '10', cy: '10', rx: '7', ry: '2.5', fill: 'none', transform: 'rotate(-60 10 10)' })
]);

const VueIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none' }, [
  h('path', { d: 'M10 2L2 16h4l4-7 4 7h4L10 2z', fill: '#42b883' })
]);

const BlazorIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none' }, [
  h('circle', { cx: '10', cy: '10', r: '6', fill: '#512BD4' }),
  h('path', { d: 'M10 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', fill: 'white' })
]);

const GuideIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M4 4h12v12H4z' }),
  h('path', { d: 'M8 8h4M8 12h4' })
]);

const DesignIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M4 4h12v12H4z' }),
  h('path', { d: 'M8 4v12M12 4v12' })
]);

const TokenIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('circle', { cx: '10', cy: '10', r: '6' }),
  h('path', { d: 'M10 6v8M6 10h8' })
]);

const ContributingIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M10 3v4M10 13v4M3 10h4M13 10h4' }),
  h('circle', { cx: '10', cy: '10', r: '6' })
]);

const DefaultIcon = () => h('svg', { viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M9 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z' }),
  h('path', { d: 'M19 19l-4.35-4.35' })
]);

// Load search index
onMounted(async () => {
  try {
    // Try to load VitePress search index
    const response = await fetch('/search-index.json');
    if (response.ok) {
      searchIndex.value = await response.json();
    } else {
      // Fallback: create simple index from page data
      await createSimpleIndex();
    }
  } catch (error) {
    // Fallback: create simple index
    await createSimpleIndex();
  }
});

// Create simple search index from available pages
const createSimpleIndex = async () => {
  // Get all links from navigation and sidebar
  const pages: Array<{ title: string; url: string; text: string }> = [];
  
  // Add pages from site data if available
  if (site.value.themeConfig?.sidebar) {
    const sidebar = site.value.themeConfig.sidebar;
    const extractPages = (items: any[]) => {
      items.forEach((item: any) => {
        if (item.link) {
          pages.push({
            title: item.text || item.link,
            url: item.link,
            text: item.text || item.link
          });
        }
        if (item.items) {
          extractPages(item.items);
        }
      });
    };
    sidebar.forEach((section: any) => {
      if (section.items) {
        extractPages(section.items);
      }
    });
  }
  
  // Add nav items
  if (site.value.themeConfig?.nav) {
    site.value.themeConfig.nav.forEach((item: any) => {
      if (item.link) {
        pages.push({
          title: item.text || item.link,
          url: item.link,
          text: item.text || item.link
        });
      }
      if (item.items) {
        item.items.forEach((subItem: any) => {
          if (subItem.link) {
            pages.push({
              title: subItem.text || subItem.link,
              url: subItem.link,
              text: subItem.text || subItem.link
            });
          }
        });
      }
    });
  }
  
  searchIndex.value = { pages };
};

// Perform search
const performSearch = (searchQuery: string) => {
  if (!searchQuery.trim()) {
    results.value = [];
    return;
  }

  if (!searchIndex.value) {
    results.value = [];
    return;
  }

  const queryLower = searchQuery.toLowerCase();
  const matched: Array<{ title: string; url: string; excerpt: string }> = [];

  // Search in pages
  if (searchIndex.value.pages) {
    searchIndex.value.pages.forEach((page: any) => {
      const title = (page.title || '').toLowerCase();
      const text = (page.text || '').toLowerCase();
      const url = page.url || '';
      
      if (title.includes(queryLower) || text.includes(queryLower) || url.includes(queryLower)) {
        matched.push({
          title: page.title || page.text || url,
          url: url,
          excerpt: page.text || page.title || ''
        });
      }
    });
  }

  // Limit results
  results.value = matched.slice(0, 10);
};

watch(query, (newQuery) => {
  performSearch(newQuery);
});

watch(open, async (isOpen) => {
  if (isOpen) {
    await nextTick();
    searchInput.value?.focus();
  } else {
    query.value = '';
    results.value = [];
  }
});

const handleSearch = () => {
  if (results.value.length > 0) {
    router.go(results.value[0].url);
    open.value = false;
  }
};

// Keyboard shortcuts
let cleanup: (() => void) | null = null;

onMounted(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      open.value = !open.value;
    }
    
    // Escape to close
    if (e.key === 'Escape' && open.value) {
      open.value = false;
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  cleanup = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
});

onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
</script>

<style scoped>
.search-wrapper {
  position: relative;
}

.search-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: 40px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s;
  width: 232px;
}

.search-trigger:hover {
  border-color: #0156C6;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #b5b5b5;
  flex-shrink: 0;
}

.search-placeholder {
  color: #9ca3af;
  font-size: 14px;
  flex: 1;
  text-align: left;
}

.search-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
}

.search-modal {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.search-modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
}

.search-input-field {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: #1a1a1a;
}

.search-input-field::placeholder {
  color: #9ca3af;
}

.search-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: color 0.2s;
}

.search-close:hover {
  color: #1a1a1a;
}

.search-close svg {
  width: 20px;
  height: 20px;
}

.search-results {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.search-empty {
  padding: 48px 24px;
  text-align: center;
  color: #6b7280;
}

.search-results-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

.search-result-item {
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e5e7eb;
  background: white;
  position: relative;
  overflow: hidden;
}

.search-result-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #0156C6;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.search-result-item:hover,
.search-result-item.highlighted {
  background: #f0f7ff;
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
  transform: translateX(4px);
}

.search-result-item:hover::before,
.search-result-item.highlighted::before {
  transform: scaleY(1);
}

.search-result-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f7ff;
  border-radius: 8px;
  color: #0156C6;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.search-result-item:hover .search-result-icon,
.search-result-item.highlighted .search-result-icon {
  background: #0156C6;
  color: white;
  transform: scale(1.1);
}

.search-result-icon svg {
  width: 20px;
  height: 20px;
}

.search-result-content {
  flex: 1;
  min-width: 0;
}

.search-result-title {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 6px;
  font-size: 15px;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.search-result-item:hover .search-result-title,
.search-result-item.highlighted .search-result-title {
  color: #0156C6;
}

.search-result-excerpt {
  color: #6b7280;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.search-result-url {
  color: #9ca3af;
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.search-result-url::before {
  content: '→';
  color: #0156C6;
  font-weight: bold;
}

.search-result-arrow {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  flex-shrink: 0;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateX(-8px);
}

.search-result-item:hover .search-result-arrow,
.search-result-item.highlighted .search-result-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #0156C6;
}

.search-result-arrow svg {
  width: 16px;
  height: 16px;
}

.search-modal-enter-active,
.search-modal-leave-active {
  transition: opacity 0.2s;
}

.search-modal-enter-from,
.search-modal-leave-to {
  opacity: 0;
}

.dark .search-trigger {
  background: #1a1a1a;
  border-color: #374151;
  color: #ffffff;
}

.dark .search-trigger:hover {
  border-color: #0156C6;
}

.dark .search-placeholder {
  color: #9ca3af;
}

.dark .search-shortcut {
  color: #9ca3af;
  background: #111827;
  border-color: #374151;
}

.dark .search-modal {
  background: #1a1a1a;
  border-color: #374151;
}

.dark .search-input-wrapper {
  background: #111827;
  border-color: #374151;
}

.dark .search-input-field {
  color: #ffffff;
}

.dark .search-close {
  color: #9ca3af;
}

.dark .search-close:hover {
  color: #ffffff;
}

.dark .search-result-item {
  background: #1a1a1a;
  border-color: #374151;
}

.dark .search-result-item:hover,
.dark .search-result-item.highlighted {
  background: rgba(1, 86, 198, 0.1);
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.2);
}

.dark .search-result-icon {
  background: rgba(1, 86, 198, 0.1);
  color: #0156C6;
}

.dark .search-result-item:hover .search-result-icon,
.dark .search-result-item.highlighted .search-result-icon {
  background: #0156C6;
  color: white;
}

.dark .search-result-title {
  color: #ffffff;
}

.dark .search-result-item:hover .search-result-title,
.dark .search-result-item.highlighted .search-result-title {
  color: #60a5fa;
}

.dark .search-result-excerpt {
  color: #9ca3af;
}

.dark .search-result-url {
  color: #6b7280;
}

.dark .search-result-url::before {
  color: #60a5fa;
}

.dark .search-result-arrow {
  color: #6b7280;
}

.dark .search-result-item:hover .search-result-arrow,
.dark .search-result-item.highlighted .search-result-arrow {
  color: #60a5fa;
}
</style>
