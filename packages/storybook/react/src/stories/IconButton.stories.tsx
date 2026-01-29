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
          '- `color`: `primary | danger | success | warning | neutral`',
          '- `variant`: `solid | secondary | outline | ghost | link-primary | link-secondary`',
          '- `size`: `md | sm | xs | xss`',
          '- `shape`: `square` (rounded-button) | `rounded` (rounded-full)',
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
    shape: 'square',
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
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded'],
      description: 'Square = rounded-button (6px); rounded = rounded-full.',
      table: { type: { summary: 'string' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Mengikuti state warna Button.',
      table: { type: { summary: 'string' } },
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

const COLORS: Array<'primary' | 'danger' | 'success' | 'warning' | 'neutral'> = [
  'primary',
  'danger',
  'success',
  'warning',
  'neutral',
];

export const AllColors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua color (primary, danger, success, warning, neutral) × solid variant.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {COLORS.map((color) => (
        <IconButton
          key={color}
          aria-label={color}
          icon={<CloseIcon />}
          variant="solid"
          color={color}
        />
      ))}
    </div>
  ),
};

export const ShapeSquareAndRounded: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shape: square (rounded-button) vs rounded (rounded-full). Pilih shape di kontrol.',
      },
    },
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} aria-label="Square" shape="square" icon={<CloseIcon />} />
      <IconButton {...args} aria-label="Rounded" shape="rounded" icon={<CloseIcon />} />
    </div>
  ),
};

export const AllColorsAndShapes: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Semua color × shape (square, rounded) untuk solid variant.',
      },
    },
  },
  render: () => (
    <div className="p-6 space-y-6 max-w-4xl">
      <h3 className="text-sm font-medium text-slate-700">Solid × Color × Shape</h3>
      <div className="flex flex-col gap-4">
        {COLORS.map((color) => (
          <div key={color} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs text-slate-500 capitalize">{color}</span>
            <IconButton aria-label={color} icon={<CloseIcon />} variant="solid" color={color} shape="square" />
            <IconButton aria-label={color} icon={<CloseIcon />} variant="solid" color={color} shape="rounded" />
          </div>
        ))}
      </div>
    </div>
  ),
};


