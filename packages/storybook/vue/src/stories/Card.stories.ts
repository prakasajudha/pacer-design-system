import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton, PtCard } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Card',
  component: PtCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Kontainer konten dengan varian gaya dan slot header/footer sesuai implementasi PtCard di @pacer-ui/vue.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    padding: 'md',
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
  },
} satisfies Meta<typeof PtCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseTemplate = `
  <PtCard v-bind="args" class="max-w-md">
    <template #header>
      <div class="space-y-1">
        <p class="text-sm font-medium text-neutral-500">Ringkasan</p>
        <h3 class="text-lg font-semibold text-neutral-900">Status Project</h3>
      </div>
    </template>

    <p class="text-neutral-700">
      Gunakan Card untuk mengelompokkan informasi yang saling berkaitan dalam satu wadah.
    </p>

    <template #footer>
      <div class="flex items-center gap-2">
        <PtButton variant="secondary" size="sm">Batal</PtButton>
        <PtButton size="sm">Lihat detail</PtButton>
      </div>
    </template>
  </PtCard>
`;

export const Playground: Story = {
  render: (args) => ({
    components: { PtCard, PtButton },
    setup() {
      return { args };
    },
    template: baseTemplate,
  }),
};

export const Outlined: Story = {
  ...Playground,
  args: {
    variant: 'outlined',
  },
};

export const Elevated: Story = {
  ...Playground,
  args: {
    variant: 'elevated',
  },
};

export const CompactPadding: Story = {
  ...Playground,
  args: {
    padding: 'sm',
  },
};

export const NoPadding: Story = {
  render: (args) => ({
    components: { PtCard },
    setup() {
      return { args };
    },
    template: `
      <PtCard v-bind="args" class="max-w-md">
        <p class="text-neutral-700">
          Card tanpa padding bawaan, cocok untuk layout custom atau konten penuh.
        </p>
      </PtCard>
    `,
  }),
  args: {
    padding: 'none',
  },
};

export const WithoutHeaderFooter: Story = {
  render: (args) => ({
    components: { PtCard },
    setup() {
      return { args };
    },
    template: `
      <PtCard v-bind="args" class="max-w-md space-y-2">
        <h4 class="text-base font-semibold">Card sederhana</h4>
        <p class="text-neutral-700">
          Gunakan ketika tidak memerlukan header maupun aksi pada footer.
        </p>
      </PtCard>
    `,
  }),
};
