import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Button',
  component: PtButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Komponen tombol untuk Vue dengan varian, ukuran, dan dukungan ikon mengacu pada implementasi @pacer-ui/vue.',
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
      description: 'Tampilkan state loading.',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol.',
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

export const Success: Story = {
  render: renderButton('Success Action'),
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  render: renderButton('Warning Action'),
  args: {
    variant: 'warning',
  },
};

export const Error: Story = {
  render: renderButton('Error Action'),
  args: {
    variant: 'error',
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
    variant: 'link',
  },
};

export const Small: Story = {
  render: renderButton('Small Size'),
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  render: renderButton('Large Size'),
  args: {
    size: 'lg',
  },
};

export const Loading: Story = {
  render: renderButton('Processing'),
  args: {
    loading: true,
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
