import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@pacer-ui/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <label className="block text-sm font-medium mb-2">Email Address</label>
      <Input type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="w-[400px]">
      <label className="block text-sm font-medium mb-2">Username</label>
      <Input placeholder="Choose a username" />
      <p className="text-sm text-gray-500 mt-1">
        Your username must be unique and between 3-20 characters.
      </p>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[400px]">
      <label className="block text-sm font-medium mb-2">Email</label>
      <Input
        type="email"
        placeholder="Enter your email"
        className="border-red-500"
        defaultValue="invalid-email"
      />
      <p className="text-sm text-red-600 mt-1">Please enter a valid email address.</p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};
