import type { App } from 'vue';

// Components
import PtButton from './components/PtButton.vue';
import PtIconButton from './components/PtIconButton.vue';
import PtInput from './components/PtInput.vue';
import PtCard from './components/PtCard.vue';
import PtBadge from './components/PtBadge.vue';
import PtSkeleton from './components/PtSkeleton.vue';

// Export components
export { PtButton, PtIconButton, PtInput, PtCard, PtBadge, PtSkeleton };

// Plugin untuk install semua components
export default {
  install(app: App) {
    app.component('PtButton', PtButton);
    app.component('PtIconButton', PtIconButton);
    app.component('PtInput', PtInput);
    app.component('PtCard', PtCard);
    app.component('PtBadge', PtBadge);
    app.component('PtSkeleton', PtSkeleton);
  },
};

// Export types
export type { ButtonProps } from './components/PtButton.vue';
export type { IconButtonProps } from './components/PtIconButton.vue';
export type { InputProps } from './components/PtInput.vue';
export type { CardProps } from './components/PtCard.vue';
export type { BadgeProps } from './components/PtBadge.vue';
export type { SkeletonProps } from './components/PtSkeleton.vue';
