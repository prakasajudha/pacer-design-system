<template>
  <div class="storybook-dropdown" ref="dropdownRef">
    <button
      class="storybook-button"
      :class="{ 'open': isOpen }"
      @click="toggleDropdown"
      @blur="handleBlur"
    >
      <span class="button-text">Storybook</span>
      <svg class="chevron-icon" :class="{ 'rotated': isOpen }" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 6l4 4 4-4" />
      </svg>
    </button>
    
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown-menu">
        <a
          v-for="item in menuItems"
          :key="item.label"
          :href="item.href"
          :target="item.target"
          class="dropdown-item"
          @click="handleItemClick"
        >
          <span>{{ item.label }}</span>
          <svg v-if="item.external" class="external-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 2h4v4M14 2l-8 8M14 6v4h-4" />
          </svg>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const menuItems = [
  {
    label: 'Storybook Vue',
    href: 'http://localhost:6006',
    target: '_blank',
    external: true,
  },
  {
    label: 'Storybook React',
    href: 'http://localhost:6007',
    target: '_blank',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pertamina/design-system',
    target: '_blank',
    external: true,
  },
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleBlur = (e: FocusEvent) => {
  // Close dropdown when clicking outside
  if (dropdownRef.value && !dropdownRef.value.contains(e.relatedTarget as Node)) {
    setTimeout(() => {
      isOpen.value = false;
    }, 200);
  }
};

const handleItemClick = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.storybook-dropdown {
  position: relative;
}

.storybook-button {
  background: #e6f4ff;
  padding: 10px 16px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #1a1a1a;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.storybook-button:hover {
  background: #b0d1fd;
}

.storybook-button.open {
  background: #b0d1fd;
}

.button-text {
  line-height: 18px;
}

.chevron-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.2s;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  color: #1a1a1a;
  text-decoration: none;
  transition: background 0.2s;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
}

.dropdown-item:hover {
  background: #f3f4f6;
}

.dropdown-item:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.dropdown-item:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.external-icon {
  width: 16px;
  height: 16px;
  color: #6b7280;
  margin-left: 8px;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
