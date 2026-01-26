import type { Meta, StoryObj } from '@storybook/vue3';
import { PtSkeleton } from '@pacer-ui/vue';

const meta = {
  id: 'components-skeleton',
  title: 'Components/Basic/Skeleton',
  component: PtSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skeleton component untuk menampilkan placeholder loading dengan animasi pulse. Mendukung variant square dan round, serta height dan width yang dapat diatur dengan berbagai unit (px, em, rem, %).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['square', 'round'],
      description: 'Variant visual dari skeleton.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'square'" },
      },
    },
    height: {
      control: 'text',
      description: 'Height skeleton (px, em, rem, %).',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: 'text',
      description: 'Width skeleton (px, em, rem, %).',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    variant: 'square',
    height: '20px',
    width: '200px',
  },
} satisfies Meta<typeof PtSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: '20px',
    width: '200px',
  },
};

export const Square: Story = {
  args: {
    variant: 'square',
    height: '20px',
    width: '200px',
  },
};

export const Round: Story = {
  args: {
    variant: 'round',
    height: '20px',
    width: '200px',
  },
};

export const DifferentSizes: Story = {
  render: () => ({
    components: { PtSkeleton },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm text-slate-600 mb-2">Small (100px x 20px)</p>
          <PtSkeleton variant="square" height="20px" width="100px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Medium (200px x 20px)</p>
          <PtSkeleton variant="square" height="20px" width="200px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Large (300px x 20px)</p>
          <PtSkeleton variant="square" height="20px" width="300px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Tall (200px x 60px)</p>
          <PtSkeleton variant="square" height="60px" width="200px" />
        </div>
      </div>
    `,
  }),
};

export const DifferentUnits: Story = {
  render: () => ({
    components: { PtSkeleton },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <div>
          <p class="text-sm text-slate-600 mb-2">Pixels (200px x 20px)</p>
          <PtSkeleton variant="square" height="20px" width="200px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Rem (12.5rem x 1.25rem)</p>
          <PtSkeleton variant="square" height="1.25rem" width="12.5rem" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Em (15em x 1.5em)</p>
          <PtSkeleton variant="square" height="1.5em" width="15em" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Percentage (100% x 20px)</p>
          <PtSkeleton variant="square" height="20px" width="100%" />
        </div>
      </div>
    `,
  }),
};

export const RoundVariants: Story = {
  render: () => ({
    components: { PtSkeleton },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm text-slate-600 mb-2">Small Circle (40px x 40px)</p>
          <PtSkeleton variant="round" height="40px" width="40px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Medium Circle (60px x 60px)</p>
          <PtSkeleton variant="round" height="60px" width="60px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Large Circle (80px x 80px)</p>
          <PtSkeleton variant="round" height="80px" width="80px" />
        </div>
        <div>
          <p class="text-sm text-slate-600 mb-2">Round Pill (200px x 40px)</p>
          <PtSkeleton variant="round" height="40px" width="200px" />
        </div>
      </div>
    `,
  }),
};

export const CardSkeleton: Story = {
  render: () => ({
    components: { PtSkeleton },
    template: `
      <div class="border border-slate-200 rounded-lg p-4 space-y-4 w-80">
        <div class="flex items-center gap-3">
          <PtSkeleton variant="round" height="48px" width="48px" />
          <div class="flex-1 space-y-2">
            <PtSkeleton variant="square" height="16px" width="60%" />
            <PtSkeleton variant="square" height="12px" width="40%" />
          </div>
        </div>
        <PtSkeleton variant="square" height="120px" width="100%" />
        <div class="space-y-2">
          <PtSkeleton variant="square" height="12px" width="100%" />
          <PtSkeleton variant="square" height="12px" width="90%" />
          <PtSkeleton variant="square" height="12px" width="95%" />
        </div>
        <div class="flex gap-2">
          <PtSkeleton variant="square" height="32px" width="80px" />
          <PtSkeleton variant="square" height="32px" width="80px" />
        </div>
      </div>
    `,
  }),
};

export const ListSkeleton: Story = {
  render: () => ({
    components: { PtSkeleton },
    template: `
      <div class="space-y-3 w-96">
        <div v-for="item in 5" :key="item" class="flex items-center gap-3">
          <PtSkeleton variant="round" height="40px" width="40px" />
          <div class="flex-1 space-y-2">
            <PtSkeleton variant="square" height="16px" width="70%" />
            <PtSkeleton variant="square" height="12px" width="50%" />
          </div>
        </div>
      </div>
    `,
  }),
};

