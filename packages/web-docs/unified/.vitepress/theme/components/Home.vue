<template>
  <div class="home-page">
    <!-- Main Content (Navbar and Sidebar are in Layout.vue) -->
    <div class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="section-container">
          <div class="hero-container">
          <div class="hero-content">
            <div class="version-badge">
              <span>Version 1.0</span>
            </div>
            
            <h1 class="hero-title">
              Build Faster <br/>with 
              <span class="pacer-rose">PACER</span>
            </h1>
            
            <p class="hero-description">
              Pertamina Patra Niaga Components & Experience Resources. A unified toolkit for designers and developers to create consistent, accessible digital experiences.
            </p>
            
            <div class="hero-actions">
              <PtButton
                variant="solid"
                size="sm"
                :right-icon="RightArrowIcon"
                @click="navigateTo('/getting-started')"
                class="cta-primary hero-cta-get-started"
              >
                Get Started
              </PtButton>
              
              <PtButton
                variant="secondary"
                size="sm"
                :right-icon="CodeIcon"
                @click="navigateTo('/components/')"
                class="cta-secondary hero-cta-view-components"
              >
                Live Playground
              </PtButton>
            </div>
          </div>
          <div class="hero-image">
            <img src="/asset/main-page-image.png" alt="PACER Design System" class="hero-img" />
          </div>
          </div>
        </div>
      </section>

      <!-- Built for Speed & Scale Section -->
      <section class="features-section animate-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Built for Speed & Scale</h2>
            <p class="section-description">
              From foundational design tokens to reusable components, PACER provides a scalable system that supports efficient development and consistent implementation across products.
            </p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon feature-icon-img-wrap">
                <img src="/asset/homepage/design-tokens.png" alt="Design Tokens" class="feature-icon-img" />
              </div>
              <h3 class="feature-title">Design Tokens</h3>
              <p class="feature-description">
                A unified design language with 5+ token categories, fully synchronized between Figma and code
              </p>
              <a href="/tokens" class="feature-card-link" @click.prevent="navigateTo('/tokens')" tabindex="0" aria-label="See more about Design Tokens">
                See More
                <component :is="FeatureCardArrowIcon" />
              </a>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon feature-icon-img-wrap">
                <img src="/asset/homepage/25-components.png" alt="25+ Components" class="feature-icon-img" />
              </div>
              <h3 class="feature-title">25+ Components</h3>
              <p class="feature-description">
                A unified design language with 5+ token categories, fully synchronized between Figma and code
              </p>
              <a href="/components/" class="feature-card-link" @click.prevent="navigateTo('/components/')" tabindex="0" aria-label="See more about Components">
                See More
                <component :is="FeatureCardArrowIcon" />
              </a>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon feature-icon-img-wrap">
                <img src="/asset/homepage/ready-to-use-template.png" alt="6 Templates" class="feature-icon-img" />
              </div>
              <h3 class="feature-title">Ready-to-Use Templates</h3>
              <p class="feature-description">
                Pre-built responsive templates for common layouts—ready to customize and deploy.
               </p>
              <a href="/getting-started" class="feature-card-link" @click.prevent="navigateTo('/getting-started')" tabindex="0" aria-label="See more about Templates">
                See More
                <component :is="FeatureCardArrowIcon" />
              </a>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon feature-icon-playground">
                <img src="/asset/homepage/playground.png" alt="Live Playground" class="feature-icon-img" />
              </div>
              <h3 class="feature-title">Live Playground</h3>
              <p class="feature-description">
                Interactive editor with real-time preview to test components and see changes instantly.
              </p>
              <a href="/components/" class="feature-card-link" @click.prevent="navigateTo('/components/')" tabindex="0" aria-label="See more about Live Playground">
                See More
                <component :is="FeatureCardArrowIcon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Multi-Framework Section -->
      <section class="frameworks-section animate-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Multi-Framework UI Component Library</h2>
            <p class="section-description">
              Reusable UI components built to ensure consistent and scalable experiences across frameworks.
            </p>
          </div>
          
          <div class="frameworks-grid">
            <div class="framework-card">
              <div class="framework-icon-wrapper">
                <div class="framework-icon framework-icon-img-wrap">
                  <img src="/asset/homepage/react.png" alt="React Components" class="framework-icon-img" />
                </div>
              </div>
              <h3 class="framework-title">React Components</h3>
              <p class="framework-description">
                Production-ready React components built with Tailwind CSS and TypeScript. </p>
            </div>
            
            <div class="framework-card">
              <div class="framework-icon-wrapper">
                <div class="framework-icon framework-icon-img-wrap">
                  <img src="/asset/homepage/vue.png" alt="Vue 3" class="framework-icon-img" />
                </div>
              </div>
              <h3 class="framework-title">Vue 3 Components</h3>
              <p class="framework-description">
                Modern Vue 3 components using the Composition API with full TypeScript support.
              </p>
            </div>
            
            <div class="framework-card">
              <div class="framework-icon-wrapper">
                <div class="framework-icon framework-icon-img-wrap">
                  <img src="/asset/homepage/blazor-icon-full.png" alt="Blazor Components" class="framework-icon-img" />
                </div>
              </div>
              <h3 class="framework-title">Blazor Components</h3>
              <p class="framework-description">
                Native .NET 8 Blazor Razor components built for enterprise-grade applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Role Selection Section -->
      <section class="roles-section animate-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Find Your Path</h2>
            <p class="section-description">
              Pick your role and start building with the right tools
            </p>
          </div>
          
          <div class="roles-grid">
            <div class="role-card">
              <div class="role-content">
                <div class="role-image-wrapper">
                  <img src="/asset/homepage/designer.webp" alt="Designer" class="role-image" />
                </div>
                <div class="role-text">
                  <h3 class="role-title">Designer</h3>
                  <p class="role-description">
                    Create beautiful, consistent interfaces with our comprehensive design system and intuitive tools
                  </p>
                  <a href="/design-principles" @click.prevent="navigateTo('/design-principles')" class="role-cta-link">
                    Get Started
                    <component :is="FeatureCardArrowIcon" />
                  </a>
                </div>
              </div>
            </div>
            
            <div class="role-card">
              <div class="role-content">
                <div class="role-image-wrapper">
                  <img src="/asset/homepage/developer.webp" alt="Developer" class="role-image" />
                </div>
                <div class="role-text">
                  <h3 class="role-title">Developer</h3>
                  <p class="role-description">
                    Build faster with production-ready components, comprehensive docs, and multi-framework support
                  </p>
                  <a href="/getting-started" @click.prevent="navigateTo('/getting-started')" class="role-cta-link">
                    Get Started
                    <component :is="FeatureCardArrowIcon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';
import { h, onMounted } from 'vue';
import { PtButton } from '@pacer-ui/vue';

const router = useRouter();

const navigateTo = (path: string) => {
  router.go(path);
};

const RightArrowIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'hero-cta-icon',
}, [
  h('path', { d: 'M6 12l4-4-4-4' }),
]);

const FeatureCardArrowIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'feature-card-link-icon',
}, [
  h('path', { d: 'M6 12l4-4-4-4' }),
]);

const CodeIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 20 20',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'hero-cta-icon hero-cta-code-icon',
}, [
  h('path', { d: 'M6.5 6.5L3 10l3.5 3.5M13.5 6.5L17 10l-3.5 3.5M11.5 4l-3 12' }),
]);

// Animation on scroll
onMounted(() => {
  if (typeof window !== 'undefined') {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.feature-card, .framework-card, .role-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    // Observe all sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Animate hero section on load
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.classList.add('animate-fade-in');
    }

    // Cleanup
    return () => {
      cards.forEach(card => observer.unobserve(card));
      sections.forEach(section => observer.unobserve(section));
    };
  }
});
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: white;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  z-index: 1000;
  height: 80px;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
}

.logo-img {
  height: 100%;
  width: auto;
}

.logo-text {
  height: 100%;
  width: auto;
}

.navbar-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.search-container {
  width: 232px;
}

.search-input {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: 40px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #b5b5b5;
  flex-shrink: 0;
}

.search-field {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  background: transparent;
}

.search-field::placeholder {
  color: #9ca3af;
}


/* Main Content */
.main-content {
  width: 100%;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  background: #eff8ff;
  padding: 72px 0;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 60px;
  position: relative;
  min-height: 438px;
}

.hero-image {
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  width: 673px;  /* 481 × 1.4 */
  height: 438px; /* 313 × 1.4 */
  flex-shrink: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 579px;
}

.version-badge {
  background: #fceaeb;
  padding: 10px 16px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
}

.version-badge span {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #000;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: #1a1a1a;
  margin: 0;
}

/* PACER hero: P,C,E,R = Tailwind rose-600; A = rgba(202, 65, 57, 1) */
.pacer-rose {
  color: #e11d48; /* Tailwind rose-600 */
}
.pacer-a {
  color: rgba(202, 65, 57, 1);
}

.hero-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: #666;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

/* Figma Design 1: Get Started — solid blue, rounded-xl, soft shadow */
.cta-primary :deep(.pt-button) {
  background: #0037B8 !important;
  border: none !important;
  border-radius: 0.75rem;
  color: #fff !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.cta-primary :deep(.pt-button:hover) {
  background: #0037B8!important;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

/* Figma Design 2: View Components — white, blue border, blue text, code icon */
.cta-secondary :deep(.pt-button) {
  background: #fff !important;
  border: 1px solid #1d4ed8 !important;
  border-radius: 0.75rem;
  color: #1d4ed8 !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.cta-secondary :deep(.pt-button:hover) {
  background: #f8fafc !important;
  border-color: #1d4ed8 !important;
  color: #1d4ed8 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.hero-actions :deep(.hero-cta-icon) {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 6px;
}

.hero-actions :deep(.icon-right),
.storybook-button :deep(.icon-right) {
  width: 20px;
  height: 20px;
  margin-left: 6px;
}

/* Common Section Styles */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  text-align: center;
  margin-bottom: 0;
  max-width: 1011px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 60px;
  color: #1a1a1a;
  margin: 0;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: #666;
  margin: 0;
  margin-bottom: 3em;
}

/* Animation classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-section.animate-on-scroll {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-section.animate-on-scroll .section-header {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.feature-card,
.framework-card,
.role-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-section.animate-on-scroll .feature-card,
.animate-section.animate-on-scroll .framework-card,
.animate-section.animate-on-scroll .role-card {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:nth-child(1) { transition-delay: 0.3s; }
.feature-card:nth-child(2) { transition-delay: 0.4s; }
.feature-card:nth-child(3) { transition-delay: 0.5s; }
.feature-card:nth-child(4) { transition-delay: 0.6s; }

.framework-card:nth-child(1) { transition-delay: 0.3s; }
.framework-card:nth-child(2) { transition-delay: 0.4s; }
.framework-card:nth-child(3) { transition-delay: 0.5s; }

.role-card:nth-child(1) { transition-delay: 0.3s; }
.role-card:nth-child(2) { transition-delay: 0.4s; }

.hero-section {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes float {
  0%, 100% {
    transform: translateY(-50%) translateY(0);
  }
  50% {
    transform: translateY(-50%) translateY(-10px);
  }
}

.hero-image {
  animation: float 3s ease-in-out infinite;
}

/* Features Section */
.features-section {
  padding: 72px 0 72px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1046px;
  margin: 0 auto;
}

.feature-card {
  backdrop-filter: blur(40px);
  background: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon-img-wrap {
  border-radius: 8px;
  overflow: hidden;
}

.feature-icon-playground {
  border-radius: 8px;
  background: #D5E7F4;
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
}

.feature-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feature-icon-playground .feature-icon-img {
  max-width: 72px;
  max-height: 72px;
  width: auto;
  height: auto;
}

.feature-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #1a1a1a;
  margin: 0;
}

.feature-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #666;
  margin: 0;
}

.feature-card-link {
  display: inline-flex;
  align-items: center;
  color: #0037B8;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  padding: 0;
  margin-top: 4px;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.feature-card-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.feature-card-link:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 2px;
}

.feature-card-link-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-left: 4px;
  margin-top:4px;
}

/* Frameworks Section */
.frameworks-section {
  background: #eff8ff;
  padding: 72px 0;
}

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 100%;
}

.framework-card {
  backdrop-filter: blur(40px);
  background: rgba(250, 250, 250, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.framework-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}


.framework-icon-wrapper {
  display: flex;
  align-items: center;
}

.framework-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* React, Vue, Blazor: ukuran sama, background dengan border-radius */
.framework-icon-img-wrap {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.framework-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gradient-blue {
  background: linear-gradient(137.51deg, #4d648c 13.47%, #6ca2ff 100%);
}

.gradient-green {
  background: linear-gradient(137.51deg, #4d8c57 13.47%, #54f043 100%);
}

.framework-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #1a1a1a;
  margin: 0;
}

.framework-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #666;
  margin: 0;
  min-height: 84px;
}

/* Roles Section */
.roles-section {
  padding: 72px 0;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1046px;
  margin: 0 auto;
}

.role-card {
  background: #FAFAFA;
  border-radius: 16px;
  padding: 32px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.role-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.role-image-wrapper {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.role-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.role-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.4px;
  color: #1a1a1a;
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.4px;
}

.role-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #666;
  margin: 0;
}

.role-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #2563eb;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;
  transition: color 0.2s ease;
  width: fit-content;
}

.role-cta-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.role-cta-link:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 2px;
}

.role-cta-link :deep(.feature-card-link-icon) {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-left: 0;
}

/* Responsive */
@media (max-width: 1279px) {
  .hero-image {
    display: none;
  }

  .hero-container {
    justify-content: center;
    min-height: 0;
  }

  .hero-content {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  .version-badge {
    align-self: center;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .navbar-container {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  .hero-section {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  .section-container {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  .features-grid,
  .frameworks-grid,
  .roles-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 16px 24px;
  }
  
  .search-container {
    display: none;
  }
  
  .hero-section {
    padding: 48px 24px;
  }
  
  .hero-container {
    flex-direction: column;
    gap: 32px;
    min-height: 0;
  }
  
  .hero-image {
    position: relative;
    transform: none;
    right: auto;
    top: auto;
    width: 100%;
    height: auto;
    max-width: 481px;
  }
  
  .hero-title {
    font-size: 36px;
    line-height: 48px;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-actions .cta-primary,
  .hero-actions .cta-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .section-container {
    padding: 0 24px;
  }
  
  .section-title {
    font-size: 28px;
    line-height: 40px;
  }

  .role-content {
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  }

  .role-image-wrapper {
    width: 200px;
    height: 200px;
  }

  .role-title {
    font-size: 24px;
    line-height: 32px;
  }

  .role-text {
    align-items: center;
    text-align: center;
  }

  .role-cta-link {
    align-self: center;
  }

  .footer-container {
    padding: 0 24px;
  }

  .footer-top {
    gap: 32px;
  }

  .footer-nav {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .footer-corporate-logo {
    align-self: flex-start;
  }
}
</style>
