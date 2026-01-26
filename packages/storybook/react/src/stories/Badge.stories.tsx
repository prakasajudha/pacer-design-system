import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@pacer-ui/react';

const meta = {
  id: 'components-badge',
  title: 'Components/Basic/Badge',
  component: Badge,
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
    children: {
      control: 'text',
      description: 'Konten badge (JSX).',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  args: {
    label: 'Badge',
    variant: 'solid',
    type: 'rounded',
    color: 'slate',
  },
} satisfies Meta<typeof Badge>;

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
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="solid" color="slate" label="Slate" />
      <Badge variant="solid" color="primary" label="Primary" />
      <Badge variant="solid" color="danger" label="Danger" />
      <Badge variant="solid" color="warning" label="Warning" />
      <Badge variant="solid" color="success" label="Success" />
      <Badge variant="solid" color="purple" label="Purple" />
      <Badge variant="solid" color="pink" label="Pink" />
      <Badge variant="solid" color="orange" label="Orange" />
    </div>
  ),
};

export const SecondaryColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="secondary" color="slate" label="Slate" />
      <Badge variant="secondary" color="primary" label="Primary" />
      <Badge variant="secondary" color="danger" label="Danger" />
      <Badge variant="secondary" color="warning" label="Warning" />
      <Badge variant="secondary" color="success" label="Success" />
      <Badge variant="secondary" color="purple" label="Purple" />
      <Badge variant="secondary" color="pink" label="Pink" />
      <Badge variant="secondary" color="orange" label="Orange" />
    </div>
  ),
};

export const OutlineColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="outline" color="slate" label="Slate" />
      <Badge variant="outline" color="primary" label="Primary" />
      <Badge variant="outline" color="danger" label="Danger" />
      <Badge variant="outline" color="warning" label="Warning" />
      <Badge variant="outline" color="success" label="Success" />
      <Badge variant="outline" color="purple" label="Purple" />
      <Badge variant="outline" color="pink" label="Pink" />
      <Badge variant="outline" color="orange" label="Orange" />
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="solid" color="primary">
        <span>Custom Content</span>
      </Badge>
      <Badge variant="secondary" color="danger">
        <span>🚨 Alert</span>
      </Badge>
      <Badge variant="outline" color="success">
        <span>✓ Verified</span>
      </Badge>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Solid Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="solid" type="rounded" color="slate" label="Slate" />
          <Badge variant="solid" type="rounded" color="primary" label="Primary" />
          <Badge variant="solid" type="rounded" color="danger" label="Danger" />
          <Badge variant="solid" type="square" color="slate" label="Slate" />
          <Badge variant="solid" type="square" color="primary" label="Primary" />
          <Badge variant="solid" type="square" color="danger" label="Danger" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Secondary Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary" type="rounded" color="slate" label="Slate" />
          <Badge variant="secondary" type="rounded" color="primary" label="Primary" />
          <Badge variant="secondary" type="rounded" color="danger" label="Danger" />
          <Badge variant="secondary" type="square" color="slate" label="Slate" />
          <Badge variant="secondary" type="square" color="primary" label="Primary" />
          <Badge variant="secondary" type="square" color="danger" label="Danger" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Outline Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" type="rounded" color="slate" label="Slate" />
          <Badge variant="outline" type="rounded" color="primary" label="Primary" />
          <Badge variant="outline" type="rounded" color="danger" label="Danger" />
          <Badge variant="outline" type="square" color="slate" label="Slate" />
          <Badge variant="outline" type="square" color="primary" label="Primary" />
          <Badge variant="outline" type="square" color="danger" label="Danger" />
        </div>
      </div>
    </div>
  ),
};
