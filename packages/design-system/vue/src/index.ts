import type { App } from 'vue';

// Components
import PtButton from './components/PtButton.vue';
import PtIconButton from './components/PtIconButton.vue';
import PtInput from './components/PtInput.vue';
import PtCard from './components/PtCard.vue';

// Export components
export { PtButton, PtIconButton, PtInput, PtCard };

// Plugin untuk install semua components
export default {
  install(app: App) {
    app.component('PtButton', PtButton);
    app.component('PtIconButton', PtIconButton);
    app.component('PtInput', PtInput);
    app.component('PtCard', PtCard);
  },
};

// Export types
export type { ButtonProps } from './components/PtButton.vue';
export type { IconButtonProps } from './components/PtIconButton.vue';
export type { InputProps } from './components/PtInput.vue';
export type { CardProps } from './components/PtCard.vue';
