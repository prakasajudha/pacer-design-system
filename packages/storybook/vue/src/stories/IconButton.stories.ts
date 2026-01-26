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
          '- `color`: `primary | danger` (default: primary)',
          '- `variant`: `solid | secondary | outline | ghost | link-primary | link-secondary`',
          '- `size`: `md | sm | xs | xss`',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Close',
    variant: 'solid',
    size: 'md',
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
    color: {
      control: 'select',
      options: ['primary', 'danger'],
      description: 'Color button: primary (default) / danger.',
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


