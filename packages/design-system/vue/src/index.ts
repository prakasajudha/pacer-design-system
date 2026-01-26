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
import PtTabs from './components/PtTabs.vue';
import PtTabsList from './components/PtTabsList.vue';
import PtTabsTrigger from './components/PtTabsTrigger.vue';
import PtTabsContent from './components/PtTabsContent.vue';
import PtModal from './components/PtModal.vue';
import PtModalHeader from './components/PtModalHeader.vue';
import PtModalBody from './components/PtModalBody.vue';
import PtModalFooter from './components/PtModalFooter.vue';
import PtPinInput from './components/PtPinInput.vue';
import PtTooltip from './components/PtTooltip.vue';
import PtDivider from './components/PtDivider.vue';
import PtTextarea from './components/PtTextarea.vue';

// Export components
export { PtButton, PtIconButton, PtInput, PtCard, PtBadge, PtSkeleton, PtInformation, PtAvatar, PtProgress, PtSwitch, PtCheckbox, PtRadio, PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent, PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtPinInput, PtTooltip, PtDivider, PtTextarea };

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
    app.component('PtTextarea', PtTextarea);
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
export type { TabsProps, TabsVariant } from './components/PtTabs.vue';
export type { TabsListProps } from './components/PtTabsList.vue';
export type { TabsTriggerProps } from './components/PtTabsTrigger.vue';
export type { TabsContentProps } from './components/PtTabsContent.vue';
export type { ModalProps, ModalSize } from './components/PtModal.vue';
export type { ModalHeaderProps } from './components/PtModalHeader.vue';
export type { ModalFooterProps } from './components/PtModalFooter.vue';
export type { PinInputProps } from './components/PtPinInput.vue';
export type { TooltipProps, TooltipPosition, TooltipVariant, TooltipSize } from './components/PtTooltip.vue';
export type { DividerProps, DividerColorPalette, DividerVariant, DividerOrientation, DividerSize } from './components/PtDivider.vue';
export type { TextareaProps, TextareaSize, TextareaVariant } from './components/PtTextarea.vue';