import type { Meta, StoryObj } from '@storybook/vue3';
import { PtIconButton } from '@pacer-ui/vue';

const meta = {
  id: 'components-iconbutton',
  title: 'Components/Basic/IconButton',
  component: PtIconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'PtIconButton adalah komponen tombol **ikon-only** (tanpa label teks) sesuai PACER Figma.',
          '',
          '- Wajib isi `ariaLabel` untuk aksesibilitas.',
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
    ariaLabel: 'Close',
    variant: 'solid',
    size: 'md',
    shape: 'square',
    color: 'primary',
    selected: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
      description: 'Pilihan gaya visual IconButton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'solid'" },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['md', 'sm', 'xs', 'xss'],
      description: 'Ukuran IconButton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'md'" },
      },
    },
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded'],
      description: 'Square = rounded-button (6px); rounded = rounded-full.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'square'" } },
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Mengikuti state warna Button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'primary'" },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Aktifkan selected/toggled state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan state loading.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    icon: {
      control: false,
      description: 'Icon sebagai komponen Vue.',
      table: {
        type: { summary: 'Component' },
      },
    },
  },
} satisfies Meta<typeof PtIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const CloseIcon = `
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
`;

export const Playground: Story = {
  render: (args) => ({
    components: { PtIconButton },
    setup() {
      return { args, CloseIcon };
    },
    template: `
      <PtIconButton v-bind="args" v-html="CloseIcon" />
    `,
  }),
};

export const Showcase: Story = {
  render: () => ({
    components: { PtIconButton },
    template: `
      <div class="flex items-center gap-3">
        <PtIconButton aria-label="Close" variant="solid">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="secondary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="outline">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="ghost">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="link-primary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="link-secondary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Delete" color="danger">${CloseIcon}</PtIconButton>
      </div>
    `,
  }),
};

const COLORS = ['primary', 'danger', 'success', 'warning', 'neutral'];

export const AllColors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua color (primary, danger, success, warning, neutral) × solid variant.',
      },
    },
  },
  render: () => ({
    components: { PtIconButton },
    setup: () => ({ CloseIcon }),
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <PtIconButton aria-label="primary" color="primary" variant="solid">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="danger" color="danger" variant="solid">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="success" color="success" variant="solid">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="warning" color="warning" variant="solid">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="neutral" color="neutral" variant="solid">${CloseIcon}</PtIconButton>
      </div>
    `,
  }),
};

export const ShapeSquareAndRounded: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shape: square (rounded-button) vs rounded (rounded-full). Pilih shape di kontrol.',
      },
    },
  },
  render: (args) => ({
    components: { PtIconButton },
    setup: () => ({ args, CloseIcon }),
    template: `
      <div class="flex items-center gap-4">
        <PtIconButton v-bind="args" aria-label="Square" shape="square">${CloseIcon}</PtIconButton>
        <PtIconButton v-bind="args" aria-label="Rounded" shape="rounded">${CloseIcon}</PtIconButton>
      </div>
    `,
  }),
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
  render: () => ({
    components: { PtIconButton },
    setup: () => ({ CloseIcon }),
    template: `
      <div class="p-6 space-y-6 max-w-4xl">
        <h3 class="text-sm font-medium text-slate-700">Solid × Color × Shape</h3>
        <div class="flex flex-col gap-4">
          <div class="flex flex-wrap items-center gap-3">
            <span class="w-20 text-xs text-slate-500">primary</span>
            <PtIconButton aria-label="primary" color="primary" variant="solid" shape="square">${CloseIcon}</PtIconButton>
            <PtIconButton aria-label="primary" color="primary" variant="solid" shape="rounded">${CloseIcon}</PtIconButton>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="w-20 text-xs text-slate-500">danger</span>
            <PtIconButton aria-label="danger" color="danger" variant="solid" shape="square">${CloseIcon}</PtIconButton>
            <PtIconButton aria-label="danger" color="danger" variant="solid" shape="rounded">${CloseIcon}</PtIconButton>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="w-20 text-xs text-slate-500">success</span>
            <PtIconButton aria-label="success" color="success" variant="solid" shape="square">${CloseIcon}</PtIconButton>
            <PtIconButton aria-label="success" color="success" variant="solid" shape="rounded">${CloseIcon}</PtIconButton>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="w-20 text-xs text-slate-500">warning</span>
            <PtIconButton aria-label="warning" color="warning" variant="solid" shape="square">${CloseIcon}</PtIconButton>
            <PtIconButton aria-label="warning" color="warning" variant="solid" shape="rounded">${CloseIcon}</PtIconButton>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="w-20 text-xs text-slate-500">neutral</span>
            <PtIconButton aria-label="neutral" color="neutral" variant="solid" shape="square">${CloseIcon}</PtIconButton>
            <PtIconButton aria-label="neutral" color="neutral" variant="solid" shape="rounded">${CloseIcon}</PtIconButton>
          </div>
        </div>
      </div>
    `,
  }),
};


