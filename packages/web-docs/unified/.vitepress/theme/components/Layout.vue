<template>
  <div class="custom-layout">
    <!-- Custom Navbar for all pages -->
    <CustomNavbar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    
    <!-- Custom Sidebar - tampil di semua halaman termasuk homepage -->
    <CustomSidebar :is-open="sidebarOpen" />
    
    <!-- Content Area -->
    <div class="layout-content" :class="{ 'is-home': isHomePage, 'has-sidebar': true }">
      <Home v-if="isHomePage" />
      <div v-else class="default-layout-wrapper">
        <DefaultLayout />
      </div>
    </div>

    <!-- Footer - appears on all pages -->
    <div class="layout-footer" :class="{ 'is-home': isHomePage, 'has-sidebar': true }">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Home from './Home.vue';
import CustomNavbar from './CustomNavbar.vue';
import CustomSidebar from './CustomSidebar.vue';
import Footer from './Footer.vue';

const DefaultLayout = DefaultTheme.Layout;
const route = useRoute();

const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/index.html';
});

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

// Close sidebar when route changes (mobile)
watch(() => route.path, () => {
  if (window.innerWidth < 960) {
    sidebarOpen.value = false;
  }
});
</script>

<style scoped>
.custom-layout {
  width: 100%;
  min-height: 100vh;
}

.layout-content {
  margin-top: 64px;
  transition: margin-left 0.3s, width 0.3s;
}

.layout-content.is-home {
  margin-left: 0;
  width: 100%;
}

.layout-content.has-sidebar {
  margin-left: 256px;
  width: calc(100% - 256px);
}

.layout-footer {
  transition: margin-left 0.3s, width 0.3s;
}

.layout-footer.is-home {
  margin-left: 0;
  width: 100%;
}

.layout-footer.has-sidebar {
  margin-left: 256px;
  width: calc(100% - 256px);
}

@media (max-width: 768px) {
  .layout-content.has-sidebar {
    margin-left: 0;
    width: 100%;
  }

  .layout-footer.has-sidebar {
    margin-left: 0;
    width: 100%;
  }
}
</style>
