import DefaultTheme from 'vitepress/theme';
import ComponentDemo from './components/ComponentDemo.vue';
import DocsTabs from './components/DocsTabs.vue';
import Home from './components/Home.vue';
import Layout from './components/Layout.vue';
import InstallationGuide from './components/InstallationGuide.vue';
import IntroductionGuide from './components/IntroductionGuide.vue';
import BadgeGuide from './components/BadgeGuide.vue';
import BadgeHero from './components/BadgeHero.vue';
import ComponentHero from './components/ComponentHero.vue';
import PageTabs from './components/PageTabs.vue';
import GuidelineSection from './components/GuidelineSection.vue';
import ImagePlaceholder from './components/ImagePlaceholder.vue';
import DoDontGrid from './components/DoDontGrid.vue';
import DoDontItem from './components/DoDontItem.vue';

// Import PACER Vue components CSS FIRST (before custom.css)
// This ensures Tailwind classes from components are available
import '@pacer-ui/vue/styles.css';
import './custom.css';

// Import PACER Vue components
import {
  PtButton,
  PtIconButton,
  PtInput,
  PtCard,
  PtBadge,
  PtSkeleton,
  PtInformation,
  PtAvatar,
  PtProgress,
  PtSwitch,
  PtCheckbox,
  PtRadio,
  PtTabs,
  PtTabsList,
  PtTabsTrigger,
  PtTabsContent,
  PtModal,
  PtModalHeader,
  PtModalBody,
  PtModalFooter,
  PtPinInput,
  PtTooltip,
  PtDivider,
} from '@pacer-ui/vue';

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('DocsTabs', DocsTabs);
    app.component('PageTabs', PageTabs);
    app.component('InstallationGuide', InstallationGuide);
    app.component('IntroductionGuide', IntroductionGuide);
    app.component('BadgeGuide', BadgeGuide);
    app.component('BadgeHero', BadgeHero);
    app.component('ComponentHero', ComponentHero);
    app.component('GuidelineSection', GuidelineSection);
    app.component('ImagePlaceholder', ImagePlaceholder);
    app.component('DoDontGrid', DoDontGrid);
    app.component('DoDontItem', DoDontItem);
    
    // Register PACER Vue components globally
    app.component('PtButton', PtButton);
    app.component('PtIconButton', PtIconButton);
    app.component('PtInput', PtInput);
    app.component('PtCard', PtCard);
    app.component('PtBadge', PtBadge);
    app.component('PtSkeleton', PtSkeleton);
    app.component('PtInformation', PtInformation);
    app.component('PtAvatar', PtAvatar);
    app.component('PtProgress', PtProgress);
    app.component('PtSwitch', PtSwitch);
    app.component('PtCheckbox', PtCheckbox);
    app.component('PtRadio', PtRadio);
    app.component('PtTabs', PtTabs);
    app.component('PtTabsList', PtTabsList);
    app.component('PtTabsTrigger', PtTabsTrigger);
    app.component('PtTabsContent', PtTabsContent);
    app.component('PtModal', PtModal);
    app.component('PtModalHeader', PtModalHeader);
    app.component('PtModalBody', PtModalBody);
    app.component('PtModalFooter', PtModalFooter);
    app.component('PtPinInput', PtPinInput);
    app.component('PtTooltip', PtTooltip);
    app.component('PtDivider', PtDivider);
  },
};
