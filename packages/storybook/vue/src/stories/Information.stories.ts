import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';
import { PtInformation } from '@pacer-ui/vue';

const meta = {
  id: 'components-information',
  title: 'Components/Disclosure/Information',
  component: PtInformation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Information component untuk menampilkan informasi, peringatan, atau notifikasi dengan berbagai variant dan ukuran. Mendukung title, description, custom icon, dan slot content (VNode). Background color dapat di-override dengan class atau style prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'slate', 'success', 'warning', 'danger'],
      description: 'Variant visual dari information.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'info'" },
      },
    },
    title: {
      control: 'text',
      description: 'Title information.',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Description information (muncul di bawah title).',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size information (sm atau md saja).',
      table: {
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: "'md'" },
      },
    },
    icon: {
      control: false,
      description: 'Icon override (jika tidak ada, akan menggunakan default icon sesuai variant).',
      table: {
        type: { summary: 'VNode' },
      },
    },
    iconClassName: {
      control: 'text',
      description: 'Custom className untuk icon container.',
      table: {
        type: { summary: 'string' },
      },
    },
    iconStyle: {
      control: 'object',
      description: 'Custom style untuk icon container.',
      table: {
        type: { summary: 'Record<string, string>' },
      },
    },
    titleClassName: {
      control: false,
      description: 'Override class untuk title (termasuk warna teks).',
      table: { disable: true },
    },
    descriptionClassName: {
      control: false,
      description: 'Override class untuk description (termasuk warna teks).',
      table: { disable: true },
    },
  },
  args: {
    variant: 'info',
    size: 'md',
  },
} satisfies Meta<typeof PtInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Silakan upload data terlebih dahulu untuk melanjutkan proses.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Informasi Penting',
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    title: 'Informasi Penting',
    description: 'Pastikan semua data sudah lengkap sebelum melanjutkan.',
  },
};

export const InfoVariant: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation variant="info">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
      </PtInformation>
    `,
  }),
};

export const SlateVariant: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation variant="slate">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
      </PtInformation>
    `,
  }),
};

export const SuccessVariant: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation variant="success">
        Proses telah selesai dan tidak memerlukan tindakan lanjutan.
      </PtInformation>
    `,
  }),
};

export const WarningVariant: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation variant="warning">
        Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
      </PtInformation>
    `,
  }),
};

export const DangerVariant: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation variant="danger">
        Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
      </PtInformation>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <div>
          <p class="text-sm text-slate-600 mb-2">Small</p>
          <PtInformation variant="info" size="sm" title="Lorem Ipsum" description="Silakan upload data terlebih dahulu untuk melanjutkan proses." />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Medium (Default)</p>
          <PtInformation variant="info" size="md" title="Lorem Ipsum" description="Silakan upload data terlebih dahulu untuk melanjutkan proses." />
        </div>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <PtInformation variant="info">
          Silakan upload data terlebih dahulu untuk melanjutkan proses.
        </PtInformation>
        <PtInformation variant="slate">
          Silakan upload data terlebih dahulu untuk melanjutkan proses.
        </PtInformation>
        <PtInformation variant="success">
          Proses telah selesai dan tidak memerlukan tindakan lanjutan.
        </PtInformation>
        <PtInformation variant="warning">
          Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
        </PtInformation>
        <PtInformation variant="danger">
          Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
        </PtInformation>
      </div>
    `,
  }),
};

export const WithCustomIcon: Story = {
  render: () => ({
    components: { PtInformation },
    setup() {
      const customIcon = h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '20',
        height: '20',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        class: 'text-purple-600',
      }, [
        h('path', { d: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' }),
      ]);
      return { customIcon };
    },
    template: `
      <PtInformation variant="info" :icon="customIcon">
        Custom icon information component.
      </PtInformation>
    `,
  }),
};

export const WithClassNameOverride: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation 
        variant="info" 
        class="bg-blue-50 p-4 rounded-lg border border-blue-200"
      >
        Information dengan custom className untuk override styling.
      </PtInformation>
    `,
  }),
};

export const WithStyleOverride: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <PtInformation 
        variant="info"
        :style="{
          backgroundColor: '#f0f9ff',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #bfdbfe'
        }"
      >
        Information dengan custom style untuk override styling secara agresif.
      </PtInformation>
    `,
  }),
};

export const WithVNodeChildren: Story = {
  render: () => ({
    components: { PtInformation },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <PtInformation variant="info">
          <div>
            <strong>Custom VNode Content</strong>
            <p class="text-sm text-slate-600 mt-1">
              Slot content dapat berupa VNode apapun, bukan hanya string.
            </p>
          </div>
        </PtInformation>
        <PtInformation variant="success">
          <div class="flex items-center gap-2">
            <span>✅</span>
            <span>Dengan icon dan styling custom di dalam slot content</span>
          </div>
        </PtInformation>
        <PtInformation variant="warning">
          <div>
            <div class="font-semibold">Title dalam VNode</div>
            <div class="text-sm mt-1">Description juga bisa dalam VNode</div>
          </div>
        </PtInformation>
      </div>
    `,
  }),
};
