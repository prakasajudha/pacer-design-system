import type { Meta, StoryObj } from '@storybook/vue3';
import {
  PtAccordion,
  PtAccordionItem,
  PtAccordionTrigger,
  PtAccordionContent,
} from '@pacer-ui/vue';

const meta = {
  id: 'components-accordion',
  title: 'Components/Basic/Accordion',
  component: PtAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Accordion line/background variant dari Figma PACER. API: PtAccordion > PtAccordionItem > PtAccordionTrigger + PtAccordionContent.',
          'Props: modelValue/defaultValue (v-model), type (single | multiple), variant (line | background), @change.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    type: 'single',
    variant: 'line',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Single = one open at a time; multiple = many open.',
      table: { type: { summary: '"single" | "multiple"' }, defaultValue: { summary: '"single"' } },
    },
    variant: {
      control: 'select',
      options: ['line', 'background'],
      description: 'Line: bottom border per item. Background: rounded-lg, bg #F8FAFC, border #CBD5E1 per item.',
      table: { type: { summary: '"line" | "background"' }, defaultValue: { summary: '"line"' } },
    },
  },
  render: (args: any) => ({
    components: { PtAccordion, PtAccordionItem, PtAccordionTrigger, PtAccordionContent },
    setup: () => ({ args }),
    template: `
      <div class="w-[400px]">
        <PtAccordion v-bind="args">
          <PtAccordionItem value="accessible">
            <PtAccordionTrigger>Is it accessible?</PtAccordionTrigger>
            <PtAccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </PtAccordionContent>
          </PtAccordionItem>
          <PtAccordionItem value="styled">
            <PtAccordionTrigger>Is it styled?</PtAccordionTrigger>
            <PtAccordionContent>
              Yes. It uses Tailwind and design tokens for consistent styling.
            </PtAccordionContent>
          </PtAccordionItem>
          <PtAccordionItem value="animated">
            <PtAccordionTrigger>Is it animated?</PtAccordionTrigger>
            <PtAccordionContent>
              The chevron rotates on open/close. Content can be extended with animation if needed.
            </PtAccordionContent>
          </PtAccordionItem>
        </PtAccordion>
      </div>
    `,
  }),
} satisfies Meta<typeof PtAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'single', variant: 'line' },
};

export const Multiple: Story = {
  args: { type: 'multiple', variant: 'line' },
};

export const DefaultExpanded: Story = {
  args: {
    type: 'single',
    variant: 'line',
    defaultValue: 'accessible',
  },
};

export const Background: Story = {
  args: { type: 'single', variant: 'background' },
};
