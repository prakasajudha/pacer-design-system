import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { PtTextarea } from '@pacer-ui/vue';

const meta = {
  id: 'components-textarea',
  title: 'Components/Form/Textarea',
  component: PtTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Textarea untuk input teks multi-baris. Title/description bisa string atau slot #title/#description. Description tidak tampil saat error.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'border',
    title: 'Deskripsi',
    description: 'Jelaskan dengan singkat.',
    placeholder: 'Ketik di sini...',
    resize: 'vertical',
    disabled: false,
    error: false,
    errorMessage: '',
    isMandatory: false,
    showTooltip: false,
    tooltipInformation: '',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['border', 'background'] },
    title: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    resize: { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    isMandatory: {
      control: 'boolean',
      description: 'Tampilkan indikator wajib (*) setelah title.',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Tampilkan icon informasi bulat di samping title.',
    },
    tooltipInformation: {
      control: 'text',
      description: 'Isi tooltip informasi (string; untuk komponen gunakan slot #tooltip-information).',
    },
  },
} satisfies Meta<typeof PtTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const Default: Story = {
  args: {
    title: 'Komentar',
    description: 'Masukkan komentar atau catatan (opsional).',
    placeholder: 'Tulis komentar...',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const VariantBorder: Story = {
  args: {
    variant: 'border',
    title: 'Variant Border',
    description: 'Bg putih, border slate-300. Placeholder slate-400.',
    placeholder: 'Placeholder...',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const VariantBackground: Story = {
  args: {
    variant: 'background',
    title: 'Variant Background',
    description: 'Bg slate-50, tanpa border. Placeholder slate-500.',
    placeholder: 'Placeholder...',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { PtTextarea },
    setup() {
      const s = ref('');
      const m = ref('');
      const l = ref('');
      return { s, m, l };
    },
    template: `
      <div class="flex flex-col gap-4 w-[672px]">
        <PtTextarea v-model="s" size="sm" title="Size sm" placeholder="sm" />
        <PtTextarea v-model="m" size="md" title="Size md" placeholder="md" />
        <PtTextarea v-model="l" size="lg" title="Size lg" placeholder="lg" />
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Deskripsi wajib diisi atau minimal 10 karakter.',
    title: 'Deskripsi',
    description: 'Min. 10 karakter.',
    placeholder: 'Tulis deskripsi...',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const DisabledBorder: Story = {
  args: {
    disabled: true,
    variant: 'border',
    title: 'Disabled (Variant Border)',
    description: 'Bg slate-50, border slate-200, text/placeholder slate-400.',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const DisabledBackground: Story = {
  args: {
    disabled: true,
    variant: 'background',
    title: 'Disabled (Variant Background)',
    description: 'Bg slate-100, tanpa border, text/placeholder slate-400.',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const ResizeNone: Story = {
  args: {
    resize: 'none',
    title: 'No resize',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const Mandatory: Story = {
  args: {
    title: 'Komentar',
    description: 'Masukkan komentar atau catatan (opsional).',
    isMandatory: true,
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const WithTooltip: Story = {
  args: {
    title: 'Komentar',
    description: 'Masukkan komentar atau catatan (opsional).',
    showTooltip: true,
    tooltipInformation: 'Field ini digunakan untuk menambahkan catatan tambahan.',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};

export const MandatoryWithTooltip: Story = {
  args: {
    title: 'Komentar',
    description: 'Masukkan komentar atau catatan (opsional).',
    isMandatory: true,
    showTooltip: true,
    tooltipInformation: 'Field wajib diisi jika ada informasi tambahan yang penting.',
  },
  render: (args) => ({
    components: { PtTextarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<div class="w-[672px]"><PtTextarea v-model="value" v-bind="args" /></div>',
  }),
};
