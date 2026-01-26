import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { PtPinInput } from '@pacer-ui/vue';

const meta = {
  id: 'components-pininput',
  title: 'Components/Form/PinInput',
  component: PtPinInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pin Input untuk OTP/PIN dengan opsi mask, size, dan posisi toggle.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    length: 4,
    size: 'md',
    mask: true,
    title: 'Kode OTP',
    description: 'Masukkan 4 digit dari email/SMS.',
    disabled: false,
    error: false,
    errorMessage: '',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    mask: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    length: { control: 'number', min: 4, max: 8 },
  },
} satisfies Meta<typeof PtPinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtPinInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<PtPinInput v-model="value" v-bind="args" />',
  }),
};

export const Default: Story = {
  args: {
    title: 'Kode verifikasi',
    description: 'Masukkan 4 digit kode yang dikirim ke email Anda.',
  },
  render: (args) => ({
    components: { PtPinInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<PtPinInput v-model="value" v-bind="args" />',
  }),
};

export const NoMask: Story = {
  args: { mask: false, title: 'PIN' },
  render: (args) => ({
    components: { PtPinInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<PtPinInput v-model="value" v-bind="args" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { PtPinInput },
    setup() {
      const s = ref('');
      const m = ref('');
      const l = ref('');
      return { s, m, l };
    },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-xs">
        <PtPinInput v-model="s" size="sm" title="Size sm" />
        <PtPinInput v-model="m" size="md" title="Size md" />
        <PtPinInput v-model="l" size="lg" title="Size lg" />
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Kode tidak valid atau kedaluwarsa.',
    title: 'Kode verifikasi',
    description: 'Masukkan 4 digit kode yang dikirim ke email Anda.',
  },
  render: (args) => ({
    components: { PtPinInput },
    setup() {
      const value = ref('1234');
      return { args, value };
    },
    template: '<PtPinInput v-model="value" v-bind="args" />',
  }),
};

export const Disabled: Story = {
  args: { disabled: true, title: 'Disabled', modelValue: '5678' },
  render: (args) => ({
    components: { PtPinInput },
    setup() {
      const value = ref('5678');
      return { args, value };
    },
    template: '<PtPinInput v-model="value" v-bind="args" />',
  }),
};
