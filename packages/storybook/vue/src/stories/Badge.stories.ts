import type { Meta, StoryObj } from '@storybook/vue3';
import { PtBadge } from '@pacer-ui/vue';

const meta = {
  id: 'components-badge',
  title: 'Components/Basic/Badge',
  component: PtBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge component untuk menampilkan label atau informasi pendek dengan berbagai variant, type, dan color.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline'],
      description: 'Variant visual dari badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'solid'" },
      },
    },
    type: {
      control: 'select',
      options: ['rounded', 'square'],
      description: 'Type badge (rounded atau square).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'rounded'" },
      },
    },
    color: {
      control: 'select',
      options: ['slate', 'primary', 'danger', 'warning', 'success', 'purple', 'pink', 'orange'],
      description: 'Color badge.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'slate'" },
      },
    },
    label: {
      control: 'text',
      description: 'Label badge (jika ada, akan menggantikan children).',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    label: 'Badge',
    variant: 'solid',
    type: 'rounded',
    color: 'slate',
  },
} satisfies Meta<typeof PtBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Badge',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'Solid Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Badge',
  },
};

export const Rounded: Story = {
  args: {
    type: 'rounded',
    label: 'Rounded Badge',
  },
};

export const Square: Story = {
  args: {
    type: 'square',
    label: 'Square Badge',
  },
};

export const Colors: Story = {
  render: () => ({
    components: { PtBadge },
    template: `
      <div class="flex flex-wrap gap-4">
        <PtBadge variant="solid" color="slate" label="Slate" />
        <PtBadge variant="solid" color="primary" label="Primary" />
        <PtBadge variant="solid" color="danger" label="Danger" />
        <PtBadge variant="solid" color="warning" label="Warning" />
        <PtBadge variant="solid" color="success" label="Success" />
        <PtBadge variant="solid" color="purple" label="Purple" />
        <PtBadge variant="solid" color="pink" label="Pink" />
        <PtBadge variant="solid" color="orange" label="Orange" />
      </div>
    `,
  }),
};

export const SecondaryColors: Story = {
  render: () => ({
    components: { PtBadge },
    template: `
      <div class="flex flex-wrap gap-4">
        <PtBadge variant="secondary" color="slate" label="Slate" />
        <PtBadge variant="secondary" color="primary" label="Primary" />
        <PtBadge variant="secondary" color="danger" label="Danger" />
        <PtBadge variant="secondary" color="warning" label="Warning" />
        <PtBadge variant="secondary" color="success" label="Success" />
        <PtBadge variant="secondary" color="purple" label="Purple" />
        <PtBadge variant="secondary" color="pink" label="Pink" />
        <PtBadge variant="secondary" color="orange" label="Orange" />
      </div>
    `,
  }),
};

export const OutlineColors: Story = {
  render: () => ({
    components: { PtBadge },
    template: `
      <div class="flex flex-wrap gap-4">
        <PtBadge variant="outline" color="slate" label="Slate" />
        <PtBadge variant="outline" color="primary" label="Primary" />
        <PtBadge variant="outline" color="danger" label="Danger" />
        <PtBadge variant="outline" color="warning" label="Warning" />
        <PtBadge variant="outline" color="success" label="Success" />
        <PtBadge variant="outline" color="purple" label="Purple" />
        <PtBadge variant="outline" color="pink" label="Pink" />
        <PtBadge variant="outline" color="orange" label="Orange" />
      </div>
    `,
  }),
};

export const WithChildren: Story = {
  render: () => ({
    components: { PtBadge },
    template: `
      <div class="flex flex-wrap gap-4">
        <PtBadge variant="solid" color="primary">
          <span>Custom Content</span>
        </PtBadge>
        <PtBadge variant="secondary" color="danger">
          <span>🚨 Alert</span>
        </PtBadge>
        <PtBadge variant="outline" color="success">
          <span>✓ Verified</span>
        </PtBadge>
      </div>
    `,
  }),
};

export const Showcase: Story = {
  render: () => ({
    components: { PtBadge },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold mb-3">Solid Variant</h3>
          <div class="flex flex-wrap gap-4">
            <PtBadge variant="solid" type="rounded" color="slate" label="Slate" />
            <PtBadge variant="solid" type="rounded" color="primary" label="Primary" />
            <PtBadge variant="solid" type="rounded" color="danger" label="Danger" />
            <PtBadge variant="solid" type="square" color="slate" label="Slate" />
            <PtBadge variant="solid" type="square" color="primary" label="Primary" />
            <PtBadge variant="solid" type="square" color="danger" label="Danger" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold mb-3">Secondary Variant</h3>
          <div class="flex flex-wrap gap-4">
            <PtBadge variant="secondary" type="rounded" color="slate" label="Slate" />
            <PtBadge variant="secondary" type="rounded" color="primary" label="Primary" />
            <PtBadge variant="secondary" type="rounded" color="danger" label="Danger" />
            <PtBadge variant="secondary" type="square" color="slate" label="Slate" />
            <PtBadge variant="secondary" type="square" color="primary" label="Primary" />
            <PtBadge variant="secondary" type="square" color="danger" label="Danger" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold mb-3">Outline Variant</h3>
          <div class="flex flex-wrap gap-4">
            <PtBadge variant="outline" type="rounded" color="slate" label="Slate" />
            <PtBadge variant="outline" type="rounded" color="primary" label="Primary" />
            <PtBadge variant="outline" type="rounded" color="danger" label="Danger" />
            <PtBadge variant="outline" type="square" color="slate" label="Slate" />
            <PtBadge variant="outline" type="square" color="primary" label="Primary" />
            <PtBadge variant="outline" type="square" color="danger" label="Danger" />
          </div>
        </div>
      </div>
    `,
  }),
};

