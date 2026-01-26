import type { Meta, StoryObj } from '@storybook/react';
import { Information } from '@pacer-ui/react';

const meta = {
  title: 'Components/Information',
  component: Information,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Information component untuk menampilkan informasi, peringatan, atau notifikasi dengan berbagai variant dan ukuran. Mendukung title, description, custom icon, dan children sebagai ReactNode. Background color dapat di-override dengan className atau style prop.',
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
        type: { summary: 'React.ReactNode' },
      },
    },
    children: {
      control: false,
      description:
        'Content utama sebagai ReactNode. Jika ada children, title dan description akan diabaikan.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Custom className untuk override styling, termasuk background color.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Custom style untuk override styling secara agresif, termasuk background color.',
      table: {
        type: { summary: 'React.CSSProperties' },
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
        type: { summary: 'React.CSSProperties' },
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
} satisfies Meta<typeof Information>;

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
    // children tidak di-set, jadi title akan muncul
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    title: 'Informasi Penting',
    description: 'Pastikan semua data sudah lengkap sebelum melanjutkan.',
    // children tidak di-set, jadi title dan description akan muncul
  },
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    children: 'Silakan upload data terlebih dahulu untuk melanjutkan proses.',
  },
};

export const SlateVariant: Story = {
  args: {
    variant: 'slate',
    children: 'Silakan upload data terlebih dahulu untuk melanjutkan proses.',
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    children: 'Proses telah selesai dan tidak memerlukan tindakan lanjutan.',
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    children: 'Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.',
  },
};

export const DangerVariant: Story = {
  args: {
    variant: 'danger',
    children: 'Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <p className="text-sm text-slate-600 mb-2">Small</p>
        <Information variant="info" size="sm" title="Lorem Ipsum" description="Silakan upload data terlebih dahulu untuk melanjutkan proses." />
      </div>
      <div>
        <p className="text-sm text-slate-600 mb-2">Medium (Default)</p>
        <Information variant="info" size="md" title="Lorem Ipsum" description="Silakan upload data terlebih dahulu untuk melanjutkan proses." />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Information variant="info">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
      </Information>
      <Information variant="slate">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
      </Information>
      <Information variant="success">
        Proses telah selesai dan tidak memerlukan tindakan lanjutan.
      </Information>
      <Information variant="warning">
        Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
      </Information>
      <Information variant="danger">
        Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
      </Information>
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <Information
      variant="info"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-600"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      }
    >
      Custom icon information component.
    </Information>
  ),
};

export const WithClassNameOverride: Story = {
  args: {
    variant: 'info',
    className: 'bg-blue-50 p-4 rounded-lg border border-blue-200',
    children: 'Information dengan custom className untuk override styling.',
  },
};

export const WithStyleOverride: Story = {
  args: {
    variant: 'info',
    style: {
      backgroundColor: '#f0f9ff',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #bfdbfe',
    },
    children: 'Information dengan custom style untuk override styling secara agresif.',
  },
};

export const WithReactNodeChildren: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Information variant="info">
        <div>
          <strong>Custom ReactNode Content</strong>
          <p className="text-sm text-slate-600 mt-1">
            Children dapat berupa ReactNode apapun, bukan hanya string.
          </p>
        </div>
      </Information>
      <Information variant="success">
        <div className="flex items-center gap-2">
          <span>✅</span>
          <span>Dengan icon dan styling custom di dalam children</span>
        </div>
      </Information>
      <Information variant="warning">
        <div>
          <div className="font-semibold">Title dalam ReactNode</div>
          <div className="text-sm mt-1">Description juga bisa dalam ReactNode</div>
        </div>
      </Information>
    </div>
  ),
};
