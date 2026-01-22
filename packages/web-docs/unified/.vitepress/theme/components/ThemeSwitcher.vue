<template>
  <div class="theme-switcher" :class="{ 'dark-mode': isDark }" @click="toggleTheme">
    <div class="theme-toggle-track">
      <!-- Sun Icon (Left) - Always visible, gray when inactive -->
      <div class="icon-container icon-sun">
        <svg class="sun-icon" :class="{ 'inactive': isDark }" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </div>
      
      <!-- Moon Icon (Right) - Always visible, gray when inactive -->
      <div class="icon-container icon-moon">
        <svg class="moon-icon" :class="{ 'inactive': !isDark }" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
      
      <!-- Thumb (White Circle) - Moves between positions, contains active icon -->
      <div class="theme-toggle-thumb" :class="{ 'active': isDark }">
        <!-- Active Sun Icon (inside thumb when light mode) -->
        <svg v-if="!isDark" class="active-icon sun-icon-active" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        
        <!-- Active Moon Icon (inside thumb when dark mode) -->
        <svg v-if="isDark" class="active-icon moon-icon-active" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (typeof document !== 'undefined') {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      isDark.value = prefersDark;
    }
    
    updateTheme();
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches;
        updateTheme();
      }
    });
  }
});
</script>

<style scoped>
.theme-switcher {
  width: 80px;
  height: 40px;
  background: #f2f2f3;
  border-radius: 88.425px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.theme-toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.icon-container {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.icon-sun {
  left: 5px;
}

.icon-moon {
  right: 5px;
}

.sun-icon,
.moon-icon {
  width: 20.633px;
  height: 20.633px;
  transition: color 0.3s ease;
}

/* Inactive icons (gray) */
.sun-icon.inactive,
.moon-icon.inactive {
  color: #b9bbc1;
}

/* Active icons outside thumb (should not be visible, but just in case) */
.theme-switcher:not(.dark-mode) .sun-icon:not(.inactive) {
  color: #2e3033;
}

.theme-switcher.dark-mode .moon-icon:not(.inactive) {
  color: #2e3033;
}

/* Thumb (White Circle) */
.theme-toggle-thumb {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 50%;
  transition: left 0.3s ease;
  left: 5px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle-thumb.active {
  left: 43px;
}

/* Active icon inside thumb (always black) */
.active-icon {
  width: 20.633px;
  height: 20.633px;
  color: #2e3033;
}
</style>
