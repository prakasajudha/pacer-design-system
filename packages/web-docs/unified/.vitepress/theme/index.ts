import DefaultTheme from 'vitepress/theme';
import ComponentDemo from './components/ComponentDemo.vue';
import DocsTabs from './components/DocsTabs.vue';
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
} from '@pacer-ui/vue';
import '@pacer-ui/vue/styles.css';

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
  },
};
