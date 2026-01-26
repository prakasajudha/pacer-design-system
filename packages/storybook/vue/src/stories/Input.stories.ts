import type { Meta, StoryObj } from '@storybook/vue3';
import { PtInput } from '@pacer-ui/vue';

const meta = {
  id: 'components-input',
  title: 'Components/Form/Input',
  component: PtInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Bidang input dengan label, helper text, dan slot ikon sesuai komponen PtInput dari @pacer-ui/vue.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'nama@pertamina.com',
    helperText: 'Gunakan email kantor Pertamina.',
    type: 'email',
    fullWidth: false,
    disabled: false,
    modelValue: '',
    error: false,
    errorMessage: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Tipe input HTML.',
    },
    label: {
      control: 'text',
      description: 'Label yang tampil di atas field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder untuk memberi petunjuk.',
    },
    helperText: {
      control: 'text',
      description: 'Pesan pendukung ketika tidak ada error.',
    },
    error: {
      control: 'text',
      description: 'Pesan error validasi.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Membuat input memenuhi lebar kontainer.',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan field.',
    },
    modelValue: {
      control: 'text',
      description: 'Nilai yang terikat pada input (v-model).',
    },
  },
} satisfies Meta<typeof PtInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseRender =
  (template: string = `<PtInput v-bind="args" :model-value="args.modelValue" />`) =>
  (args: Record<string, unknown>) => ({
    components: { PtInput },
    setup() {
      return { args };
    },
    template,
  });

export const Playground: Story = {
  render: baseRender(),
};

export const WithHelperText: Story = {
  render: baseRender(),
  args: {
    helperText: 'Kami akan mengirimkan info update ke email ini.',
  },
};

export const WithError: Story = {
  render: baseRender(),
  args: {
    error: true,
    errorMessage: 'Format email tidak valid.',
    helperText: undefined,
    modelValue: 'user@example',
  },
};

export const Password: Story = {
  render: baseRender(),
  args: {
    label: 'Password',
    helperText: 'Gunakan kombinasi huruf dan angka.',
    placeholder: 'Minimal 8 karakter',
    type: 'password',
  },
};

export const WithIcons: Story = {
  render: baseRender(`
    <PtInput v-bind="args" :model-value="args.modelValue">
      <template #start-icon>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </template>
      <template #end-icon>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </template>
    </PtInput>
  `),
  args: {
    helperText: 'Email sudah diverifikasi.',
  },
};

export const FullWidth: Story = {
  render: baseRender(),
  args: {
    fullWidth: true,
  },
};

export const Disabled: Story = {
  render: baseRender(),
  args: {
    disabled: true,
    helperText: undefined,
    placeholder: 'Input dinonaktifkan',
  },
};

export const WithoutLabel: Story = {
  render: baseRender(),
  args: {
    label: undefined,
    helperText: undefined,
    placeholder: 'Placeholder tanpa label',
  },
};
