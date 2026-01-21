import type { Meta, StoryObj } from '@storybook/vue3';
import { PtProgress } from '@pacer-ui/vue';
import { computed, ref } from 'vue';

const meta = {
  title: 'Components/Progress',
  component: PtProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Progress PACER sesuai guideline Figma.',
          '',
          'Props utama:',
          '- value: 1 - 100 (akan di-clamp)',
          '- bgColor: warna track (hex/rgb/rgba/var())',
          '- color: warna bar (hex/rgb/rgba/var())',
          '',
          'Animasi: perubahan value akan transisi halus (width transition).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    value: 30,
    size: 'md',
    bgColor: '#E6F0FE',
    color: '#016BF8',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Nilai progress (0 - 100).',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Ukuran progress bar (tinggi).',
      table: { type: { summary: 'xs | sm | md | lg' }, defaultValue: { summary: "'lg'" } },
    },
    bgColor: {
      control: 'text',
      description: 'Warna background track (hex/rgb/rgba/var()).',
      table: { type: { summary: 'string' } },
    },
    color: {
      control: 'text',
      description: 'Warna bar (hex/rgb/rgba/var()).',
      table: { type: { summary: 'string' } },
    },
    class: {
      control: 'text',
      description: 'Override class untuk lebar/dll. Default: w-full (bisa set w-[190px]).',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof PtProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtProgress },
    setup() {
      return { args };
    },
    template: '<div class="w-[190px]"><PtProgress v-bind="args" /></div>',
  }),
};

export const AnimatedExample: Story = {
  render: (args) => ({
    components: { PtProgress },
    setup() {
      const value = ref<number>(args.value ?? 30);

      const handleIncrease = () => {
        value.value = Math.min(100, value.value + 10);
      };

      const handleDecrease = () => {
        value.value = Math.max(1, value.value - 10);
      };

      const mergedArgs = computed(() => ({ ...args, value: value.value }));

      return { mergedArgs, value, handleIncrease, handleDecrease };
    },
    template: `
      <div class="flex flex-col gap-3 items-center">
        <div class="w-[190px]">
          <PtProgress v-bind="mergedArgs" />
        </div>
        <div class="flex gap-2">
          <button class="px-3 py-1 rounded-md border border-slate-300 text-sm" @click="handleDecrease">-10</button>
          <button class="px-3 py-1 rounded-md border border-slate-300 text-sm" @click="handleIncrease">+10</button>
        </div>
        <div class="text-xs text-slate-600">value: {{ value }}</div>
      </div>
    `,
  }),
};

