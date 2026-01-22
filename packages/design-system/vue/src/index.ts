import type { App } from 'vue';

// Components
import PtButton from './components/PtButton.vue';
import PtIconButton from './components/PtIconButton.vue';
import PtInput from './components/PtInput.vue';
import PtCard from './components/PtCard.vue';
import PtBadge from './components/PtBadge.vue';
import PtSkeleton from './components/PtSkeleton.vue';
import PtInformation from './components/PtInformation.vue';
import PtAvatar from './components/PtAvatar.vue';
import PtProgress from './components/PtProgress.vue';
import PtSwitch from './components/PtSwitch.vue';
import PtCheckbox from './components/PtCheckbox.vue';
import PtRadio from './components/PtRadio.vue';

// Export components
export { PtButton, PtIconButton, PtInput, PtCard, PtBadge, PtSkeleton, PtInformation, PtAvatar, PtProgress, PtSwitch, PtCheckbox, PtRadio };

// Plugin untuk install semua components
export default {
  install(app: App) {
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
  },
};

// Export types
export type { ButtonProps } from './components/PtButton.vue';
export type { IconButtonProps } from './components/PtIconButton.vue';
export type { InputProps } from './components/PtInput.vue';
export type { CardProps } from './components/PtCard.vue';
export type { BadgeProps } from './components/PtBadge.vue';
export type { SkeletonProps } from './components/PtSkeleton.vue';
export type { InformationProps } from './components/PtInformation.vue';
export type { AvatarProps, AvatarItem } from './components/PtAvatar.vue';
export type { ProgressProps, ProgressSize } from './components/PtProgress.vue';
export type { SwitchProps, SwitchPosition, SwitchSize } from './components/PtSwitch.vue';
export type { CheckboxProps, CheckboxPosition } from './components/PtCheckbox.vue';
export type { RadioProps, RadioPosition } from './components/PtRadio.vue';