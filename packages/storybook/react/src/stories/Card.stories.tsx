import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card } from '@pacer-ui/react';

const meta = {
  id: 'components-card',
  title: 'Components/Basic/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Container serbaguna dengan header, body, dan footer yang dapat dikonfigurasi sesuai Card di paket @pacer-ui/react.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    padding: 'md',
    header: (
      <div className="space-y-1">
        <p className="text-sm font-medium text-neutral-500">Informasi</p>
        <h3 className="text-lg font-semibold text-neutral-900">Card Title</h3>
      </div>
    ),
    children: (
      <div className="space-y-2 text-neutral-700">
        <p>Konten card ditampilkan melalui children.</p>
        <p className="text-sm text-neutral-500">
          Gunakan komponen ini untuk mengelompokkan informasi terkait.
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          Batal
        </Button>
        <Button size="sm">Simpan</Button>
      </div>
    ),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'outlined', 'elevated'],
      description: 'Gaya visual card.',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Ukuran padding internal.',
    },
    header: {
      control: false,
      description: 'Konten header opsional.',
    },
    footer: {
      control: false,
      description: 'Konten footer opsional.',
    },
    children: {
      control: false,
      description: 'Konten utama card.',
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
};

export const CompactPadding: Story = {
  args: {
    padding: 'sm',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="text-neutral-700">
        Konten penuh tanpa padding bawaan, cocok untuk layout custom.
      </div>
    ),
  },
};

export const WithoutHeaderFooter: Story = {
  args: {
    header: undefined,
    footer: undefined,
    children: (
      <div className="space-y-2 text-neutral-700">
        <h4 className="text-base font-semibold">Card Sederhana</h4>
        <p>Gunakan ketika tidak memerlukan header maupun aksi di footer.</p>
      </div>
    ),
  },
};
