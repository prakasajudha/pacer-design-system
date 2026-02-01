import type { App } from 'vue';

// Components
import PtButton from './components/PtButton.vue';
import PtIconButton from './components/PtIconButton.vue';
import PtInput from './components/PtInput.vue';
import PtFormFieldLabel from './components/PtFormFieldLabel.vue';
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
import PtPopover from './components/PtPopover.vue';
import PtBreadcrumb from './components/PtBreadcrumb.vue';
import PtAccordion from './components/PtAccordion.vue';
import PtAccordionItem from './components/PtAccordionItem.vue';
import PtAccordionTrigger from './components/PtAccordionTrigger.vue';
import PtAccordionContent from './components/PtAccordionContent.vue';
import PtDivider from './components/PtDivider.vue';
import PtTextarea from './components/PtTextarea.vue';
import PtToast from './components/PtToast.vue';
import ToastContainer from './components/ToastContainer.vue';

// Composables
export { useToast, toast } from './composables/useToast';

// Export components
export { PtButton, PtIconButton, PtInput, PtFormFieldLabel, PtCard, PtBadge, PtSkeleton, PtInformation, PtAvatar, PtProgress, PtSwitch, PtCheckbox, PtRadio, PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent, PtAccordion, PtAccordionItem, PtAccordionTrigger, PtAccordionContent, PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtPinInput, PtTooltip, PtPopover, PtBreadcrumb, PtDivider, PtTextarea, PtToast, ToastContainer };

// Plugin untuk install semua components
export default {
  install(app: App) {
    app.component('PtButton', PtButton);
    app.component('PtIconButton', PtIconButton);
    app.component('PtInput', PtInput);
    app.component('PtFormFieldLabel', PtFormFieldLabel);
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
    app.component('PtPopover', PtPopover);
    app.component('PtBreadcrumb', PtBreadcrumb);
    app.component('PtAccordion', PtAccordion);
    app.component('PtAccordionItem', PtAccordionItem);
    app.component('PtAccordionTrigger', PtAccordionTrigger);
    app.component('PtAccordionContent', PtAccordionContent);
    app.component('PtDivider', PtDivider);
    app.component('PtTextarea', PtTextarea);
    app.component('PtToast', PtToast);
    app.component('ToastContainer', ToastContainer);
  },
};

// Export types
export type { ButtonProps } from './components/PtButton.vue';
export type { IconButtonProps } from './components/PtIconButton.vue';
export type { InputProps } from './components/PtInput.vue';
export type { FormFieldLabelProps } from './components/PtFormFieldLabel.vue';
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
export type { PopoverProps, PopoverPosition } from './components/PtPopover.vue';
export type { BreadcrumbProps, BreadcrumbItem, BreadcrumbType } from './components/PtBreadcrumb.vue';
export type { AccordionProps, AccordionType, AccordionVariant } from './components/PtAccordion.vue';
export type { AccordionItemProps } from './components/PtAccordionItem.vue';
export type { DividerProps, DividerColorPalette, DividerVariant, DividerOrientation, DividerSize } from './components/PtDivider.vue';
export type { TextareaProps, TextareaSize, TextareaVariant } from './components/PtTextarea.vue';
export type { ToastProps } from './components/PtToast.vue';
export type { ToastOptions, ToastItem, ToastPosition } from './composables/useToast';