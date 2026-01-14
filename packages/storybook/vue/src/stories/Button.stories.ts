import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Button',
  component: PtButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen tombol PACER sesuai guideline Figma.',
          '',
          'Ringkasan guideline:',
          '- md: h-10 (40px), sm: h-9 (36px)',
          '- gap antar item: 4px (gap-1)',
          '- radius: 6px (rounded-[6px])',
          '- typography: text-sm (14px) + leading-6 (24px)',
          '',
          'Untuk tombol ikon-only gunakan **PtIconButton** (wajib `ariaLabel`).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    tone: 'primary',
    selected: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'link-primary',
        'link-secondary',
        // legacy
        'success',
        'warning',
        'error',
      ],
      description: 'Pilihan gaya visual tombol.',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Ukuran tombol (non-link).',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Rentangkan tombol agar memenuhi lebar kontainer.',
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan state loading.',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol.',
    },
    tone: {
      control: 'inline-radio',
      options: ['primary', 'destructive'],
      description: 'Type button sesuai Figma: primary / destructive.',
    },
    selected: {
      control: 'boolean',
      description: 'Aktifkan selected/toggled state.',
    },
    destructive: {
      table: { disable: true },
      description: '@deprecated - gunakan prop `tone="destructive"` sebagai gantinya.',
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
} satisfies Meta<typeof PtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderButton = (label: string) => (args: Record<string, unknown>) => ({
  components: { PtButton },
  setup() {
    return { args, label };
  },
  template: '<PtButton v-bind="args">{{ label }}</PtButton>',
});

export const Playground: Story = {
  render: renderButton('Primary Action'),
};

export const Secondary: Story = {
  render: renderButton('Secondary Action'),
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  render: renderButton('Outline Action'),
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  render: renderButton('Ghost Button'),
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  render: renderButton('Link Button'),
  args: {
    variant: 'link-primary',
  },
};

export const LinkSecondary: Story = {
  render: renderButton('Link Secondary'),
  args: {
    variant: 'link-secondary',
  },
};

export const Small: Story = {
  render: renderButton('Small Size'),
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  render: renderButton('Medium (md)'),
  args: {
    size: 'md',
  },
};

export const Loading: Story = {
  render: renderButton('Processing'),
  args: {
    loading: true,
  },
};

export const Destructive: Story = {
  render: renderButton('Delete'),
  args: {
    tone: 'destructive',
  },
};

export const Selected: Story = {
  render: renderButton('Selected'),
  args: {
    selected: true,
  },
};

export const Disabled: Story = {
  render: renderButton('Disabled State'),
  args: {
    disabled: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: `
      <PtButton v-bind="args">
        Continue
        <template #start-icon>
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </template>
        <template #end-icon>
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
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </template>
      </PtButton>
    `,
  }),
};

export const FullWidth: Story = {
  render: renderButton('Full Width Action'),
  args: {
    fullWidth: true,
  },
};
