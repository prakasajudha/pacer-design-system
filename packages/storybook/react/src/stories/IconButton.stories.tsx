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
  id: 'components-iconbutton',
  title: 'Components/Basic/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'IconButton adalah komponen tombol **ikon-only** (tanpa label teks) sesuai PACER Figma.',
          '',
          '- Wajib isi `aria-label` untuk aksesibilitas.',
          '- `color`: `primary | danger` (default: primary)',
          '- `variant`: `solid | secondary | outline | ghost | link-primary | link-secondary`',
          '- `size`: `md | sm | xs | xss`',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    'aria-label': 'Close',
    icon: <CloseIcon />,
    variant: 'solid',
    size: 'md',
    color: 'primary',
    selected: false,
    loading: false,
  },
  argTypes: {
    icon: { control: false },
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'sm', 'xs', 'xss'],
    },
    color: {
      control: 'select',
      options: ['primary', 'danger'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="solid" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="secondary" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="outline" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="ghost" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="link-primary" />
      <IconButton aria-label="Close" icon={<CloseIcon />} variant="link-secondary" />
      <IconButton aria-label="Delete" icon={<CloseIcon />} color="danger" />
    </div>
  ),
};


