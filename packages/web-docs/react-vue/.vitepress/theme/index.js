import DefaultTheme from 'vitepress/theme';
import ButtonDemo from '../components/ButtonDemo.vue';
import ColorPalette from '../components/ColorPalette.vue';
import SpacingDemo from '../components/SpacingDemo.vue';
import BorderRadiusDemo from '../components/BorderRadiusDemo.vue';
import ShadowDemo from '../components/ShadowDemo.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ButtonDemo', ButtonDemo);
    app.component('ColorPalette', ColorPalette);
    app.component('SpacingDemo', SpacingDemo);
    app.component('BorderRadiusDemo', BorderRadiusDemo);
    app.component('ShadowDemo', ShadowDemo);
  }
};
