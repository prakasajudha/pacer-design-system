<template>
  <section class="component-hero">
    <div class="component-hero__container">
      <div class="component-hero__content">
        <h1 class="component-hero__title">{{ title }}</h1>
        <p class="component-hero__description">
          {{ description }}
        </p>
      </div>
      <div class="component-hero__illustration">
        <div class="component-hero__illustration-wrapper">
          <div class="component-hero__illustration-placeholder">
            <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" :style="`stop-color:${gradientColors[0]};stop-opacity:1`" />
                  <stop offset="50%" :style="`stop-color:${gradientColors[1]};stop-opacity:1`" />
                  <stop offset="100%" :style="`stop-color:${gradientColors[2]};stop-opacity:1`" />
                </linearGradient>
              </defs>
              <rect width="500" height="350" :fill="`url(#${gradientId})`" rx="16"/>
              <rect x="120" y="80" width="260" height="180" rx="12" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
              <rect x="135" y="95" width="230" height="130" rx="6" fill="rgba(255,255,255,0.35)"/>
              <text x="250" y="165" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="monospace">&lt; / &gt;</text>
              <circle cx="80" cy="90" r="20" fill="rgba(255,255,255,0.3)"/>
              <circle cx="85" cy="85" r="8" :fill="gradientColors[0]"/>
              <circle cx="75" cy="95" r="6" :fill="gradientColors[2]"/>
              <rect x="420" cy="250" width="40" height="40" rx="6" fill="rgba(255,255,255,0.25)" transform="rotate(45 440 250)"/>
              <circle cx="430" cy="280" r="15" fill="rgba(255,255,255,0.2)"/>
              <rect x="60" y="280" width="8" height="50" rx="4" fill="rgba(255,255,255,0.3)" transform="rotate(-30 64 305)"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ComponentHeroProps {
  title: string;
  description: string;
  gradientColors?: [string, string, string];
}

const props = withDefaults(defineProps<ComponentHeroProps>(), {
  gradientColors: () => ['#FF6B9D', '#C44569', '#6C5CE7'] as [string, string, string],
});

const gradientId = computed(() => `componentGradient-${props.title.replace(/\s+/g, '-').toLowerCase()}`);
</script>

<style scoped>
.component-hero {
  width: 100%;
  padding: 64px 24px 48px;
  background: linear-gradient(135deg, v-bind('props.gradientColors[0]') 0%, v-bind('props.gradientColors[1]') 50%, v-bind('props.gradientColors[2]') 100%);
  position: relative;
  overflow: hidden;
}

.component-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.component-hero__content {
  z-index: 2;
}

.component-hero__title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: white;
  margin: 0 0 16px 0;
}

.component-hero__description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.component-hero__illustration {
  position: relative;
  z-index: 1;
}

.component-hero__illustration-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-hero__illustration-placeholder {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.component-hero__illustration-placeholder svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .component-hero {
    padding: 48px 16px 32px;
  }

  .component-hero__container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .component-hero__title {
    font-size: 36px;
    line-height: 44px;
  }

  .component-hero__description {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
