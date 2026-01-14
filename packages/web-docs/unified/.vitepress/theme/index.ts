import DefaultTheme from 'vitepress/theme';
import ComponentDemo from './components/ComponentDemo.vue';
import DocsTabs from './components/DocsTabs.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
    app.component('DocsTabs', DocsTabs);
  },
};
