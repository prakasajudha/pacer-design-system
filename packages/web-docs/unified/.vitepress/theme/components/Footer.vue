<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo-wrapper">
            <img src="/pacer-logo.png" alt="PACER Logo" class="footer-logo" />
            <span class="footer-brand-text">PACER</span>
          </div>
          <p class="footer-brand-description">
            Pertamina Patra Niaga Components<br />
            & Experience Resources
          </p>
        </div>

        <div class="footer-nav">
          <div class="footer-nav-column">
            <h4 class="footer-nav-title">Getting Started</h4>
            <ul class="footer-nav-links">
              <li><a href="/" @click.prevent="navigateTo('/')" class="footer-link">Home</a></li>
              <li><a href="/getting-started" @click.prevent="navigateTo('/getting-started')" class="footer-link">Installation</a></li>
              <li><a href="/design-principles" @click.prevent="navigateTo('/design-principles')" class="footer-link">Design Principles</a></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h4 class="footer-nav-title">Frameworks</h4>
            <ul class="footer-nav-links">
              <li><a href="/frameworks/blazor" @click.prevent="navigateTo('/frameworks/blazor')" class="footer-link">Blazor</a></li>
              <li><a href="/frameworks/react" @click.prevent="navigateTo('/frameworks/react')" class="footer-link">React</a></li>
              <li><a href="/frameworks/vue" @click.prevent="navigateTo('/frameworks/vue')" class="footer-link">Vue</a></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h4 class="footer-nav-title">Design Tokens</h4>
            <ul class="footer-nav-links">
              <li><a href="/tokens" @click.prevent="navigateTo('/tokens')" class="footer-link">Overview</a></li>
              <li><a href="/tokens#typography-tokens" @click.prevent="navigateTo('/tokens#typography-tokens')" class="footer-link">Typography</a></li>
              <li><a href="/tokens#color-tokens" @click.prevent="navigateTo('/tokens#color-tokens')" class="footer-link">Colors</a></li>
              <li><a href="/tokens#spacing-tokens" @click.prevent="navigateTo('/tokens#spacing-tokens')" class="footer-link">Spacing</a></li>
            </ul>
          </div>

          <div class="footer-nav-column">
            <h4 class="footer-nav-title">Components</h4>
            <ul class="footer-nav-links">
              <li><a href="/components/" @click.prevent="navigateTo('/components/')" class="footer-link">Overview</a></li>
              <li><a href="/components/" @click.prevent="navigateTo('/components/')" class="footer-link">Basic Components</a></li>
              <li><a href="/components/" @click.prevent="navigateTo('/components/')" class="footer-link">Disclosure</a></li>
              <li><a href="/components/" @click.prevent="navigateTo('/components/')" class="footer-link">Form Components</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copyright">
          © PACER 2026 | PT Pertamina Patra Niaga. All rights reserved.
        </p>
        <div class="footer-corporate-logo">
          <img src="/asset/footer/logo-pertamina.png" alt="Pertamina Patra Niaga" class="footer-corporate-logo-img" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();

const navigateTo = (path: string) => {
  router.go(path);
};
</script>

<style scoped>
/* Footer */
.site-footer {
  background: #EFF8FF;
  padding: 64px 0 32px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.footer-top {
  display: flex;
  gap: 80px;
  margin-bottom: 32px;
}

.footer-brand {
  flex-shrink: 0;
  max-width: 280px;
}

.footer-logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.footer-brand-text {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1a1a1a;
}

.footer-brand-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin: 0;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  flex: 1;
}

.footer-nav-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.footer-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #1a1a1a;
}

.footer-divider {
  height: 1px;
  background: #E5E7EB;
  margin: 32px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.footer-copyright {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #7D7D7D;
  margin: 0;
}

.footer-corporate-logo {
  display: flex;
  align-items: center;
}

.footer-corporate-logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .footer-top {
    flex-direction: column;
    gap: 48px;
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 24px;
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
