import DefaultTheme from 'vitepress/theme';
import ComponentDemo from './components/ComponentDemo.vue';
import DocsTabs from './components/DocsTabs.vue';

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
} from '@pacer-ui/vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('DocsTabs', DocsTabs);
    
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
  },
};
