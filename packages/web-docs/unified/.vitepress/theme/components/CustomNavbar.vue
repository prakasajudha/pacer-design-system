<template>
  <nav class="vp-navbar">
    <div class="vp-navbar-container">
      <div class="vp-navbar-logo">
        <a href="/" class="vp-navbar-logo-link">
          <img src="/pacer-logo.png" alt="PACER Logo" class="vp-logo-img" />
          <img src="/pacer-text-logo.png" alt="PACER" class="vp-logo-text" />
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <button 
        v-show="showMenuButton"
        class="vp-navbar-menu-button"
        @click="handleMenuClick"
        aria-label="Toggle sidebar"
      >
        <svg v-if="!sidebarOpen" class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        <svg v-else class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      
      <div class="vp-navbar-nav">
        <a
          v-for="item in navItems"
          :key="item.text"
          :href="item.link"
          class="vp-navbar-nav-item"
          :class="{ 'active': isActive(item.link) }"
        >
          {{ item.text }}
        </a>
        <div
          v-for="item in navDropdowns"
          :key="item.text"
          class="vp-navbar-dropdown"
        >
          <button class="vp-navbar-dropdown-trigger">
            {{ item.text }}
            <svg class="vp-navbar-dropdown-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 7l5 5 5-5" />
            </svg>
          </button>
          <div class="vp-navbar-dropdown-menu">
            <a
              v-for="subItem in item.items"
              :key="subItem.text"
              :href="subItem.link"
              class="vp-navbar-dropdown-item"
            >
              {{ subItem.text }}
            </a>
          </div>
        </div>
      </div>
      
      <div class="vp-navbar-actions">
        <div class="vp-navbar-search">
          <SearchBox />
        </div>
        <StorybookDropdown />
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useData } from 'vitepress';
import SearchBox from './SearchBox.vue';
import StorybookDropdown from './StorybookDropdown.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const props = defineProps<{
  sidebarOpen?: boolean;
}>();

const emit = defineEmits<{
  'toggle-sidebar': [];
}>();

const route = useRoute();
const { site } = useData();

const windowWidth = ref(1920);

const showMenuButton = computed(() => {
  // Show menu button on mobile/tablet (< 960px)
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 960;
});

const handleMenuClick = () => {
  emit('toggle-sidebar');
};

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
  }
});

const navItems = computed(() => {
  return (site.value.themeConfig?.nav || []).filter((item: any) => !item.items);
});

const navDropdowns = computed(() => {
  return (site.value.themeConfig?.nav || []).filter((item: any) => item.items);
});

const isActive = (link?: string) => {
  if (!link) return false;
  return route.path === link || route.path.startsWith(link + '/');
};
</script>

<style scoped>
.vp-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid var(--vp-c-divider);
  z-index: 1000;
  height: 64px;
  transition: background-color 0.3s, border-color 0.3s;
}

.vp-navbar-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.vp-navbar-logo {
  flex-shrink: 0;
}

.vp-navbar-logo-link {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  text-decoration: none;
}

.vp-logo-img,
.vp-logo-text {
  height: 100%;
  width: auto;
}

.vp-navbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.vp-navbar-nav-item {
  padding: 8px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s;
}

.vp-navbar-nav-item:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.vp-navbar-nav-item.active {
  color: var(--vp-c-brand);
}

.vp-navbar-dropdown {
  position: relative;
}

.vp-navbar-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
}

.vp-navbar-dropdown-trigger:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.vp-navbar-dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}

.vp-navbar-dropdown:hover .vp-navbar-dropdown-icon {
  transform: rotate(180deg);
}

.vp-navbar-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s;
}

.vp-navbar-dropdown:hover .vp-navbar-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.vp-navbar-dropdown-item {
  display: block;
  padding: 10px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
}

.vp-navbar-dropdown-item:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.vp-navbar-dropdown-item:first-child {
  border-radius: 8px 8px 0 0;
}

.vp-navbar-dropdown-item:last-child {
  border-radius: 0 0 8px 8px;
}

.vp-navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.vp-navbar-search {
  width: 232px;
}

.vp-navbar-menu-button {
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  color: var(--vp-c-text-1);
  transition: all 0.2s;
  flex-shrink: 0;
  /* Display controlled by media query in custom.css */
  display: none;
}

.vp-navbar-menu-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.menu-icon {
  width: 24px;
  height: 24px;
}

/* Show menu button on mobile/tablet (< 960px) - using :deep to override scoped */
@media (max-width: 959px) {
  :deep(.vp-navbar-menu-button) {
    display: flex !important;
  }
}

/* Hide menu button on desktop */
@media (min-width: 960px) {
  :deep(.vp-navbar-menu-button) {
    display: none !important;
  }
}

/* Hide logo when burger menu appears (< 960px) */
@media (max-width: 959px) {
  .vp-navbar-logo {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .vp-navbar-container {
    padding: 0 16px;
  }
  
  .vp-navbar-nav {
    display: none;
  }
  
  .vp-navbar-search {
    display: none;
  }
}
</style>
