import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';
import { ref, onMounted, nextTick, h } from 'vue';

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
    variant: 'solid',
    size: 'md',
    loading: false,
    color: 'primary',
    selected: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
      description: 'Pilihan gaya visual tombol.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'solid'" },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Ukuran tombol (non-link).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'md'" },
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
    leftIcon: {
      control: false,
      description: 'Ikon sebelum label tombol.',
      table: {
        type: { summary: 'Component' },
      },
    },
    rightIcon: {
      control: false,
      description: 'Ikon setelah label tombol.',
      table: {
        type: { summary: 'Component' },
      },
    },
    type: {
      table: { disable: true },
      description: 'Native HTML button type (button/submit/reset). Jarang perlu diubah.',
    },
  },
} satisfies Meta<typeof PtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Button</PtButton>',
  }),
};

export const Solid: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Solid Button</PtButton>',
  }),
  args: {
    variant: 'solid',
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Secondary Action</PtButton>',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Outline Action</PtButton>',
  }),
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Ghost Button</PtButton>',
  }),
  args: {
    variant: 'ghost',
  },
};

export const LinkPrimary: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Link Primary</PtButton>',
  }),
  args: {
    variant: 'link-primary',
  },
};

export const LinkSecondary: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Link Secondary</PtButton>',
  }),
  args: {
    variant: 'link-secondary',
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Small Size</PtButton>',
  }),
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Medium (md)</PtButton>',
  }),
  args: {
    size: 'md',
  },
};

export const Loading: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Processing</PtButton>',
  }),
  args: {
    loading: true,
  },
};

export const Danger: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Delete</PtButton>',
  }),
  args: {
    color: 'danger',
  },
};

export const Selected: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Selected</PtButton>',
  }),
  args: {
    selected: true,
  },
};

export const Focused: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      const buttonRef = ref<InstanceType<typeof PtButton> | null>(null);
      onMounted(async () => {
        await nextTick();
        const buttonEl = buttonRef.value?.$el as HTMLButtonElement | undefined;
        if (buttonEl) {
          buttonEl.focus();
        }
      });
      return { args, buttonRef };
    },
    template: '<PtButton ref="buttonRef" v-bind="args">Focused Button</PtButton>',
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Disabled State</PtButton>',
  }),
  args: {
    disabled: true,
  },
};

// Simple icon components untuk contoh - menggunakan render function
const ArrowRightIcon = () =>
  h(
    'svg',
    {
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4',
    },
    [h('path', { d: 'M5 12h14' }), h('path', { d: 'm12 5 7 7-7 7' })]
  );

const CheckIcon = () =>
  h(
    'svg',
    {
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4',
    },
    [h('polyline', { points: '20 6 9 17 4 12' })]
  );

const PlusIcon = () =>
  h(
    'svg',
    {
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4',
    },
    [h('path', { d: 'M5 12h14' }), h('path', { d: 'M12 5v14' })]
  );

const DownloadIcon = () =>
  h(
    'svg',
    {
      'aria-hidden': 'true',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4',
    },
    [
      h('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
      h('polyline', { points: '7 10 12 15 17 10' }),
      h('line', { x1: '12', y1: '15', x2: '12', y2: '3' }),
    ]
  );

export const WithLeftIcon: Story = {
  render: (args) => ({
    components: { PtButton, DownloadIcon },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args" :leftIcon="DownloadIcon">Download</PtButton>',
  }),
  args: {
    variant: 'solid',
  },
};

export const WithRightIcon: Story = {
  render: (args) => ({
    components: { PtButton, ArrowRightIcon },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args" :rightIcon="ArrowRightIcon">Continue</PtButton>',
  }),
  args: {
    variant: 'solid',
  },
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { PtButton, PlusIcon, CheckIcon },
    setup() {
      return { args };
    },
    template:
      '<PtButton v-bind="args" :leftIcon="PlusIcon" :rightIcon="CheckIcon">Submit</PtButton>',
  }),
  args: {
    variant: 'solid',
  },
};
