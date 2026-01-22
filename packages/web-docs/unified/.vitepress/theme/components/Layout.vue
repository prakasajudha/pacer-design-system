<template>
  <div v-if="isHomePage" class="home-layout">
    <Home />
  </div>
  <Layout v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Home from './Home.vue';

const Layout = DefaultTheme.Layout;
const route = useRoute();

const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/index.html';
});
</script>

<style scoped>
.home-layout {
  width: 100%;
  min-height: 100vh;
}
</style>
