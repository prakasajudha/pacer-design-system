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
              <span class="gradient-text">PACER</span>
            </h1>
            
            <p class="hero-description">
              A unified toolkit for designers and developers
            </p>
            
            <div class="hero-actions">
              <PtButton
                variant="solid"
                size="sm"
                :right-icon="RightArrowIcon"
                @click="navigateTo('/getting-started')"
                class="cta-primary"
              >
                Get Started
              </PtButton>
              
              <PtButton
                variant="secondary"
                size="sm"
                :right-icon="RightArrowIcon"
                @click="navigateTo('/components/')"
                class="cta-secondary"
              >
                Components
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
              <div class="feature-icon">
                <svg class="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 class="feature-title">Design Tokens</h3>
              <p class="feature-description">
                Unified design language with 50+ tokens covering colors, typography, spacing, shadows, and borders. Synchronized between Figma and code for perfect consistency.
              </p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg class="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 class="feature-title">45+ Components</h3>
              <p class="feature-description">
                Production-ready, fully React components builts on Radix UI primitives. Fully typed with Typescript, and customizable with Tailwind CSS.
              </p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg class="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18M8 2v4M16 2v4" />
                </svg>
              </div>
              <h3 class="feature-title">6 Templates</h3>
              <p class="feature-description">
                Pre-built responsive templates including Dashboard, Authentication, E-Commerce, and more. Ready to customize and deploy in minutes.
              </p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">
                <svg class="feature-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 class="feature-title">Live Playground</h3>
              <p class="feature-description">
                Interactive code editor powered by real-time preview. Experiment with components, copy code snippets, and see changes instantly without setup.
              </p>
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
                <div class="framework-icon framework-icon-react">
                  <svg class="react-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.5" fill="none" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(-60 12 12)" />
                  </svg>
                </div>
              </div>
              <h3 class="framework-title">React Components</h3>
              <p class="framework-description">
                Production-ready React components built with Radix UI and Typescript
              </p>
            </div>
            
            <div class="framework-card">
              <div class="framework-icon-wrapper">
                <div class="framework-icon framework-icon-vue">
                  <svg class="vue-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 19h5l5-8.5L17 19h5L12 2z" fill="#42b883" />
                    <path d="M17 19l-5-8.5L7 19h10z" fill="#42b883" opacity="0.5" />
                  </svg>
                </div>
              </div>
              <h3 class="framework-title">Vue 3</h3>
              <p class="framework-description">
                Modern Vue 3 components with Composition API and full Typescript support
              </p>
            </div>
            
            <div class="framework-card">
              <div class="framework-icon-wrapper">
                <div class="framework-icon framework-icon-blazor">
                  <img src="/asset/Blazor.png" alt="Blazor Logo" class="blazor-logo" />
                </div>
              </div>
              <h3 class="framework-title">Blazor Components</h3>
              <p class="framework-description">
                Native .NET 8 Blazor Razor components for enterprise applications
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Role Selection Section -->
      <section class="roles-section animate-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Start by selecting your role</h2>
            <p class="section-description">
              Choose your role to access tailored resources and tools designed for your workflow.
            </p>
          </div>
          
          <div class="roles-grid">
            <div class="role-card">
              <div class="role-content">
                <div class="role-icon-wrapper">
                  <div class="role-icon gradient-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div class="role-text">
                  <h3 class="role-title">Designer</h3>
                  <p class="role-description">
                    Access design tokens, Figma components, UI kits, and design guidelines
                  </p>
                </div>
              </div>
            </div>
            
            <div class="role-card">
              <div class="role-content">
                <div class="role-icon-wrapper">
                  <div class="role-icon gradient-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                </div>
                <div class="role-text">
                  <h3 class="role-title">Developer</h3>
                  <p class="role-description">
                    Get started with React, Vue, or Blazor components, documentation, and code examples
                  </p>
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
  class: 'w-5 h-5 ml-1',
}, [
  h('path', { d: 'M6 12l4-4-4-4' }),
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
}

.hero-image {
  flex-shrink: 0;
  width: 481px;
  height: 313px;
  position: relative;
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

.gradient-text {
  background: linear-gradient(166.69deg, #2563eb 0%, #0037b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

.cta-primary :deep(.pt-button) {
  background: linear-gradient(163.5deg, #2563eb 0%, #0037b8 100%) !important;
  border: 1px solid #0067ff !important;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.04), 0px 1px 2px 0px rgba(16, 24, 40, 0.04);
}

.cta-primary :deep(.pt-button:hover) {
  background: linear-gradient(163.5deg, #1d4ed8 0%, #002d96 100%) !important;
  transform: translateY(-1px);
  box-shadow: 0px 2px 4px 0px rgba(16, 24, 40, 0.08), 0px 2px 4px 0px rgba(16, 24, 40, 0.08);
}

.cta-secondary :deep(.pt-button) {
  background: white !important;
  border: 1px solid #0037b8 !important;
  color: #0037b8 !important;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.04), 0px 1px 2px 0px rgba(16, 24, 40, 0.04);
}

.cta-secondary :deep(.pt-button:hover) {
  background: #f8fafc !important;
  transform: translateY(-1px);
  box-shadow: 0px 2px 4px 0px rgba(16, 24, 40, 0.08), 0px 2px 4px 0px rgba(16, 24, 40, 0.08);
}

.icon-right {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
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
  gap: 16px;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
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
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-image {
  animation: float 3s ease-in-out infinite;
}

/* Features Section */
.features-section {
  padding: 72px 0 48px;
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
  width: 67px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-icon-svg {
  transition: stroke 0.3s ease;
  stroke: #1a1a1a;
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

/* Frameworks Section */
.frameworks-section {
  padding: 48px 0;
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
  padding: 12px;
  border-radius: 11.13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.framework-icon-react {
  background: rgba(97, 218, 251, 0.1);
}

.framework-icon-vue {
  background: rgba(66, 184, 131, 0.1);
}

.framework-icon-blazor {
  background: rgba(81, 43, 212, 0.1);
}

.gradient-blue {
  background: linear-gradient(137.51deg, #4d648c 13.47%, #6ca2ff 100%);
}

.gradient-green {
  background: linear-gradient(137.51deg, #4d8c57 13.47%, #54f043 100%);
}

.framework-icon svg {
  width: 40px;
  height: 40px;
}

.blazor-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.react-logo,
.vue-logo,
.blazor-logo {
  width: 40px;
  height: 40px;
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
  background: #eff8ff;
  padding: 48px 0;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1046px;
  margin: 0 auto;
}

.role-card {
  backdrop-filter: blur(40px);
  background: rgba(250, 250, 250, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4);
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
  gap: 16px;
  align-items: flex-start;
}

.role-icon-wrapper {
  flex-shrink: 0;
}

.role-icon {
  width: 64px;
  height: 64px;
  padding: 12px;
  border-radius: 11.13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-icon svg {
  width: 40px;
  height: 40px;
}

.role-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.role-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #1a1a1a;
  margin: 0;
}

.role-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #666;
  margin: 0;
}

/* Responsive */
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
  }
  
  .hero-image {
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
}
</style>
