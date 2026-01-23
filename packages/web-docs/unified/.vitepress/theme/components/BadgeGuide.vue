<template>
  <div class="badge-guide">
    <!-- Header Section -->
    <section class="guide-header">
      <div class="header-container">
        <div class="header-content">
          <h1 class="guide-title">Badge</h1>
          <p class="guide-description">
            Badges allow users to take actions and make choices with a single tap or click.
          </p>
        </div>
        <div class="header-illustration">
          <div class="illustration-wrapper">
            <div class="illustration-placeholder">
              <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#C44569;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#6C5CE7;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect width="500" height="350" fill="url(#badgeGradient)" rx="16"/>
                <rect x="120" y="80" width="260" height="180" rx="12" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
                <rect x="135" y="95" width="230" height="130" rx="6" fill="rgba(255,255,255,0.35)"/>
                <text x="250" y="165" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="monospace">&lt; / &gt;</text>
                <circle cx="80" cy="90" r="20" fill="rgba(255,255,255,0.3)"/>
                <circle cx="85" cy="85" r="8" fill="#FF6B9D"/>
                <circle cx="75" cy="95" r="6" fill="#6C5CE7"/>
                <rect x="420" cy="250" width="40" height="40" rx="6" fill="rgba(255,255,255,0.25)" transform="rotate(45 440 250)"/>
                <circle cx="430" cy="280" r="15" fill="rgba(255,255,255,0.2)"/>
                <rect x="60" y="280" width="8" height="50" rx="4" fill="rgba(255,255,255,0.3)" transform="rotate(-30 64 305)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section with Tabs -->
    <section class="guide-content">
      <div class="content-container">
        <PtTabs v-model="activeTab" variant="line" :default-value="defaultTab">
          <PtTabsList>
            <PtTabsTrigger value="guideline">Guideline</PtTabsTrigger>
            <PtTabsTrigger value="implementation">Implementation</PtTabsTrigger>
          </PtTabsList>
          
          <PtTabsContent value="guideline">
            <div class="guideline-content" ref="guidelineContentRef">
              <slot name="guideline">
                <!-- Default guideline content -->
                <GuidelineSection title="Anatomy">
                  <p>The basic element of a badge is a label. Labels inform users of the action that will occur if they click the badge.</p>
                </GuidelineSection>

                <GuidelineSection title="Variants">
                  <p>Badge supports three variants: solid (default), secondary, and outline. Each variant can be combined with different colors and types.</p>
                </GuidelineSection>

                <div class="badge-guide__image-grid" aria-label="Anatomy and variants diagrams">
                  <div class="badge-guide__image-item">
                    <ImagePlaceholder label="Anatomy Diagram" />
                  </div>
                  <div class="badge-guide__image-item">
                    <ImagePlaceholder label="Variants Diagram" />
                  </div>
                </div>

                <GuidelineSection title="Layout">
                  <p>The basic element of a badge is a label. Labels inform users of the action that will occur if they click the badge.</p>
                  <DoDontGrid>
                    <DoDontItem type="do">
                      <div class="do-dont-example">
                        <PtBadge color="success">Done</PtBadge>
                      </div>
                      <p class="do-dont-text">• With short copy, it clearly indicates that the process has been completed and is easy to scan at a glance.</p>
                    </DoDontItem>
                    <DoDontItem type="dont">
                      <div class="do-dont-example">
                        <PtBadge color="danger">Document has been fully completed</PtBadge>
                      </div>
                      <p class="do-dont-text">• With long copy, badges have limited space and should not contain excessive information.</p>
                    </DoDontItem>
                  </DoDontGrid>
                </GuidelineSection>
              </slot>
            </div>
          </PtTabsContent>

          <PtTabsContent value="implementation">
            <div class="implementation-content" ref="implementationContentRef">
              <!-- Content will be moved here from after BadgeGuide -->
            </div>
          </PtTabsContent>
        </PtTabs>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

interface BadgeGuideProps {
  defaultTab?: 'guideline' | 'implementation';
}

const props = withDefaults(defineProps<BadgeGuideProps>(), {
  defaultTab: 'guideline',
});

const activeTab = ref<string | number>(props.defaultTab);
const implementationContentRef = ref<HTMLElement | null>(null);
const guidelineContentRef = ref<HTMLElement | null>(null);

// Process slot content to render Vue components
onMounted(() => {
  const processGuidelineContent = () => {
    if (!guidelineContentRef.value) return;
    
    // Find all text nodes that contain Vue component tags
    const walker = document.createTreeWalker(
      guidelineContentRef.value,
      NodeFilter.SHOW_TEXT,
      null
    );
    
    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent || '';
      // Check if text contains Vue component tags
      if (text.includes('<GuidelineSection') || text.includes('<ImagePlaceholder') || text.includes('<DoDontGrid')) {
        // This is a limitation - VitePress doesn't process Vue components in slots
        // We need to use a different approach
      }
    }
  };

  const moveContent = () => {
    if (!implementationContentRef.value) return false;
    
    const badgeGuideEl = implementationContentRef.value.closest('.badge-guide');
    if (!badgeGuideEl || !badgeGuideEl.parentElement) return false;
    
    // Find the parent container - in VitePress, content is usually in a div after the component
    const parent = badgeGuideEl.parentElement;
    const badgeGuideIndex = Array.from(parent.children).indexOf(badgeGuideEl);
    if (badgeGuideIndex === -1) return false;
    
    const contentToMove: Element[] = [];
    // Look for siblings after BadgeGuide
    for (let i = badgeGuideIndex + 1; i < parent.children.length; i++) {
      const sibling = parent.children[i];
      // Skip if it's already inside badge-guide or if it's the footer/pager
      if (!badgeGuideEl.contains(sibling) && 
          !sibling.classList.contains('contentinfo') &&
          !sibling.classList.contains('pager') &&
          sibling.id !== 'VPContent') {
        // Move all content after BadgeGuide - be more inclusive
        // Skip only navigation, footer, and other layout elements
        const skipTags = ['NAV', 'FOOTER', 'HEADER', 'ASIDE'];
        if (!skipTags.includes(sibling.tagName)) {
          // Move all content elements (H2, H3, ComponentDemo, tables, lists, divs, sections)
          const hasContent = sibling.tagName === 'H2' || 
                            sibling.tagName === 'H3' ||
                            sibling.classList.contains('component-demo') ||
                            sibling.querySelector('.component-demo') !== null ||
                            sibling.tagName === 'TABLE' ||
                            sibling.tagName === 'UL' ||
                            sibling.tagName === 'OL' ||
                            sibling.tagName === 'DIV' ||
                            sibling.tagName === 'SECTION';
          
          if (hasContent) {
            // Check if this element is not already inside implementation content
            if (!implementationContentRef.value.contains(sibling)) {
              contentToMove.push(sibling);
            }
          }
        }
      }
    }
    
    if (contentToMove.length > 0) {
      // Move all content at once
      contentToMove.forEach(el => {
        // Remove from original position and add to implementation content
        const parent = el.parentElement;
        if (parent) {
          parent.removeChild(el);
        }
        (el as HTMLElement).style.display = ''; // Restore display
        implementationContentRef.value!.appendChild(el);
      });
      return true;
    }
    return false;
  };

  // Use MutationObserver to watch for content changes
  const observer = new MutationObserver((mutations) => {
    // Only process if content hasn't been moved yet
    if (implementationContentRef.value && implementationContentRef.value.children.length === 0) {
      moveContent();
    }
  });

  nextTick(() => {
    processGuidelineContent();
    
    // Try multiple times with increasing delays to ensure content is ready
    const tryMoveContent = (attempt = 0) => {
      if (moveContent()) {
        // Stop observing once content is moved
        observer.disconnect();
        return; // Success
      }
      if (attempt < 10) {
        setTimeout(() => {
          tryMoveContent(attempt + 1);
        }, 100 * (attempt + 1));
      } else {
        // Start observing if initial attempts failed
        const badgeGuideEl = implementationContentRef.value?.closest('.badge-guide');
        if (badgeGuideEl?.parentElement) {
          observer.observe(badgeGuideEl.parentElement, {
            childList: true,
            subtree: false
          });
        }
      }
    };
    tryMoveContent();
  });

  // Cleanup observer on unmount
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.badge-guide {
  width: 100%;
  min-height: 100vh;
}

/* Header Section */
.guide-header {
  width: 100%;
  padding: 64px 24px 48px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #6C5CE7 100%);
  position: relative;
  overflow: hidden;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.header-content {
  z-index: 2;
}

.guide-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: white;
  margin: 0 0 16px 0;
}

.guide-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.header-illustration {
  position: relative;
  z-index: 1;
}

.illustration-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-placeholder {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Content Section */
.guide-content {
  width: 100%;
  padding: 48px 24px;
  background: white;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Guideline Content */
.guideline-content {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.guideline-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #1a1a1a;
  margin: 0;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666;
  margin: 0;
}

.image-placeholder {
  width: 100%;
  margin-top: 16px;
}

.badge-guide__image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.badge-guide__image-item :deep(.image-placeholder) {
  margin-top: 0;
}

.badge-guide__image-item :deep(.placeholder-content) {
  height: 96px;
}

.badge-guide__image-item :deep(.placeholder-content svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.placeholder-content {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  border: 1px solid #e5e7eb;
}

.placeholder-content svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Do/Don't Grid */
.do-dont-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 16px;
}

.do-dont-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.do-dont-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.do-dont-header svg {
  width: 20px;
  height: 20px;
}

.do-item .do-dont-header {
  color: #10b981;
}

.dont-item .do-dont-header {
  color: #ef4444;
}

.do-dont-line {
  height: 2px;
  width: 100%;
}

.do-line {
  background: #10b981;
}

.dont-line {
  background: #ef4444;
}

.do-dont-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.do-dont-example {
  width: 100%;
}

.example-box {
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
}

.do-box {
  background: #d1fae5;
  color: #065f46;
}

.dont-box {
  background: #fee2e2;
  color: #991b1b;
}

.do-dont-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin: 0;
}

/* Implementation Content */
.implementation-content {
  width: 100%;
  padding-top: 32px;
}


/* Tabs Content Styling */
.content-container :deep(.tabs-content) {
  padding-top: 32px;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .badge-guide__image-grid {
    grid-template-columns: 1fr;
  }

  .guide-title {
    font-size: 36px;
    line-height: 44px;
  }

  .guide-description {
    font-size: 16px;
    line-height: 24px;
  }

  .do-dont-grid {
    grid-template-columns: 1fr;
  }

  .guide-header {
    padding: 48px 16px 32px;
  }

  .guide-content {
    padding: 32px 16px;
  }
}

/* Dark mode */
.dark .guide-content {
  background: var(--vp-c-bg);
}

.dark .section-title {
  color: #ffffff;
}

.dark .section-description,
.dark .do-dont-text {
  color: #a0a0a0;
}

.dark .image-placeholder svg rect {
  fill: #2a2a2a;
  stroke: #404040;
}

.dark .image-placeholder svg text {
  fill: #666;
}
</style>
