import DefaultTheme from 'vitepress/theme';
import ComponentDemo from './components/ComponentDemo.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentDemo', ComponentDemo);
  },
};
