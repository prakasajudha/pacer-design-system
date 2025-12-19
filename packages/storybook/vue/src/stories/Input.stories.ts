import type { Meta, StoryObj } from '@storybook/vue3';
import { PtInput } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Input',
  component: PtInput,
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
} satisfies Meta<typeof PtInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  render: () => ({
    components: { PtInput },
    template: `
      <div class="w-[400px]">
        <label class="block text-sm font-medium mb-2">Email Address</label>
        <PtInput type="email" placeholder="Enter your email" />
      </div>
    `,
  }),
};

export const WithHelperText: Story = {
  render: () => ({
    components: { PtInput },
    template: `
      <div class="w-[400px]">
        <label class="block text-sm font-medium mb-2">Username</label>
        <PtInput placeholder="Choose a username" />
        <p class="text-sm text-gray-500 mt-1">
          Your username must be unique and between 3-20 characters.
        </p>
      </div>
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { PtInput },
    template: `
      <div class="w-[400px]">
        <label class="block text-sm font-medium mb-2">Email</label>
        <PtInput 
          type="email" 
          placeholder="Enter your email" 
          class="border-red-500"
          model-value="invalid-email"
        />
        <p class="text-sm text-red-600 mt-1">
          Please enter a valid email address.
        </p>
      </div>
    `,
  }),
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
