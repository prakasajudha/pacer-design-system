import type { App } from 'vue';

// Components
import PtButton from './components/PtButton.vue';
import PtInput from './components/PtInput.vue';
import PtCard from './components/PtCard.vue';

// Export components
export { PtButton, PtInput, PtCard };

// Plugin untuk install semua components
export default {
  install(app: App) {
    app.component('PtButton', PtButton);
    app.component('PtInput', PtInput);
    app.component('PtCard', PtCard);
  },
};

// Export types
export type { ButtonProps } from './components/PtButton.vue';
export type { InputProps } from './components/PtInput.vue';
export type { CardProps } from './components/PtCard.vue';
