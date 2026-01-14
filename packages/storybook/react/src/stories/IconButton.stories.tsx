import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@pacer-ui/react';

const CloseIcon = () => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'IconButton adalah komponen tombol **ikon-only** (tanpa label teks) sesuai PACER Figma.',
          '',
          '- Wajib isi `aria-label` untuk aksesibilitas.',
          '- `tone`: `primary | destructive` (default: primary)',
          '- `variant`: `primary | secondary | outline | ghost | link-primary | link-secondary`',
          '- `size`: `md | sm | xs | xss`',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    'aria-label': 'Close',
    icon: <CloseIcon />,
    variant: 'primary',
    size: 'md',
    tone: 'primary',
    selected: false,
    loading: false,
    disabled: false,
  },
  argTypes: {
    icon: { control: false },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'sm', 'xs', 'xss'],
    },
    tone: {
      control: 'inline-radio',
      options: ['primary', 'destructive'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="primary" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="secondary" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="outline" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="ghost" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="link-primary" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="link-secondary" />
      <IconButton aria-label="Delete" icon={<CloseIcon />} tone="destructive" />
    </div>
  ),
};


