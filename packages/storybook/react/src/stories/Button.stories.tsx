import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@pacer-ui/react';

const ArrowRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Komponen tombol Pertamina dengan varian warna, ukuran, state loading, dan dukungan ikon sesuai implementasi di paket @pacer-ui/react.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Primary Action',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'ghost', 'link'],
      description: 'Pilihan gaya visual tombol.',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran tombol.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Rentangkan tombol agar memenuhi lebar kontainer.',
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan indikator loading dan nonaktifkan interaksi.',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol tanpa state loading.',
    },
    startIcon: {
      control: false,
      description: 'Ikon sebelum label tombol.',
    },
    endIcon: {
      control: false,
      description: 'Ikon setelah label tombol.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Action',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Action',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Size',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Continue',
    startIcon: <ArrowRight />,
    endIcon: <Check />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled State',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Action',
  },
};
