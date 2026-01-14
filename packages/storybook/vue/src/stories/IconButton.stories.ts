import type { Meta, StoryObj } from '@storybook/vue3';
import { PtIconButton } from '@pacer-ui/vue';

const meta = {
  title: 'Components/IconButton',
  component: PtIconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'PtIconButton adalah komponen tombol **ikon-only** (tanpa label teks) sesuai PACER Figma.',
          '',
          '- Wajib isi `ariaLabel` untuk aksesibilitas.',
          '- `tone`: `primary | destructive` (default: primary)',
          '- `variant`: `primary | secondary | outline | ghost | link-primary | link-secondary`',
          '- `size`: `md | sm | xs | xss`',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Close',
    variant: 'primary',
    size: 'md',
    tone: 'primary',
    selected: false,
    loading: false,
    disabled: false,
  },
  argTypes: {
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
        <PtIconButton aria-label="Close" variant="primary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="secondary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="outline">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="ghost">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="link-primary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Close" variant="link-secondary">${CloseIcon}</PtIconButton>
        <PtIconButton aria-label="Delete" tone="destructive">${CloseIcon}</PtIconButton>
      </div>
    `,
  }),
};


