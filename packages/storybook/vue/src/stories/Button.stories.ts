import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Button',
  component: PtButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'text'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof PtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    default: 'Success Button',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    default: 'Error Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    default: 'Warning Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled Button',
  },
};
