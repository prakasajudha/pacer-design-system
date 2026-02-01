import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@pacer-ui/react';

const meta = {
  id: 'components-accordion',
  title: 'Components/Basic/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Accordion line variant dari Figma PACER. API: Accordion > AccordionItem > AccordionTrigger + AccordionContent.',
          'Props: value/defaultValue (controlled/uncontrolled), type (single | multiple), variant (line | background), onValueChange.',
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
      description: 'Line: bottom border per item. Background: rounded-lg, border-border, bg-muted per item.',
      table: { type: { summary: '"line" | "background"' }, defaultValue: { summary: '"line"' } },
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <Accordion {...args}>
        <AccordionItem value="accessible">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="styled">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It uses Tailwind and design tokens for consistent styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animated">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            The chevron rotates on open/close. Content can be extended with animation if needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma: Line variant – single item open, "Is it accessible?" / WAI-ARIA copy */
export const Default: Story = {
  args: {
    type: 'single',
    variant: 'line',
  },
};

/** Figma: Line variant – multiple items can be open */
export const Multiple: Story = {
  args: {
    type: 'multiple',
    variant: 'line',
  },
};

/** Figma: Line – first item expanded by default */
export const DefaultExpanded: Story = {
  args: {
    type: 'single',
    variant: 'line',
    defaultValue: 'accessible',
  },
};

/** Controlled: value and onValueChange */
export const Controlled: Story = {
  args: {
    type: 'single',
    variant: 'line',
    value: 'styled',
    onValueChange: (v) => console.log('Accordion value:', v),
  },
};

/** Background variant: rounded-lg, border-border, bg-muted per item */
export const Background: Story = {
  args: {
    type: 'single',
    variant: 'background',
  },
};
