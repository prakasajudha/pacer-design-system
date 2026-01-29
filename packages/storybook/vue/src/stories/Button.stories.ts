import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';
import { ref, onMounted, nextTick, h, defineComponent } from 'vue';

const meta = {
  id: 'components-button',
  title: 'Components/Basic/Button',
  component: PtButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen tombol PACER sesuai guideline Figma.',
          '',
          'Ringkasan guideline:',
          '- sm: h-9 (36px), md: h-10 (40px)',
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
    shape: 'square',
    loading: false,
    color: 'primary',
    selected: false,
  },
  argTypes: {
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded'],
      description: 'Square = rounded-lg + border 1px #000; rounded = rounded-full.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'square'" } },
    },
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
      description: 'Ukuran tombol (non-link). sm: 36px, md: 40px.',
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
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Color button: primary / danger / success / warning / neutral.',
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

export const Medium: Story = {
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

export const Success: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Confirm</PtButton>',
  }),
  args: {
    color: 'success',
  },
};

export const Warning: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Warning</PtButton>',
  }),
  args: {
    color: 'warning',
  },
};

export const Neutral: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Cancel</PtButton>',
  }),
  args: {
    color: 'neutral',
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

// Simple icon components untuk contoh - menggunakan defineComponent
const ArrowRightIcon = defineComponent({
  name: 'ArrowRightIcon',
  setup() {
    return () =>
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
  },
});

const CheckIcon = defineComponent({
  name: 'CheckIcon',
  setup() {
    return () =>
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
  },
});

const PlusIcon = defineComponent({
  name: 'PlusIcon',
  setup() {
    return () =>
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
  },
});

const DownloadIcon = defineComponent({
  name: 'DownloadIcon',
  setup() {
    return () =>
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
  },
});

export const WithLeftIcon: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Download</PtButton>',
  }),
  args: {
    variant: 'solid',
    leftIcon: DownloadIcon,
  },
};

export const WithRightIcon: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Continue</PtButton>',
  }),
  args: {
    variant: 'solid',
    rightIcon: ArrowRightIcon,
  },
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { PtButton },
    setup() {
      return { args };
    },
    template: '<PtButton v-bind="args">Submit</PtButton>',
  }),
  args: {
    variant: 'solid',
    leftIcon: PlusIcon,
    rightIcon: CheckIcon,
  },
};

// Matriks varian sesuai Figma PACER (148 designs): variant × color × size × state
const VARIANTS: Array<{ variant: 'solid' | 'secondary' | 'outline' | 'ghost' | 'link-primary' | 'link-secondary'; label: string }> = [
  { variant: 'solid', label: 'Solid' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'outline', label: 'Outline' },
  { variant: 'ghost', label: 'Ghost' },
  { variant: 'link-primary', label: 'Link Primary' },
  { variant: 'link-secondary', label: 'Link Secondary' },
];
const SIZES: Array<'sm' | 'md'> = ['sm', 'md'];

export const VariantMatrixPrimary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Primary (brand) × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { VARIANTS, SIZES };
    },
    template: `
      <div class="flex flex-col gap-8">
        <template v-for="item in VARIANTS.filter(v => v.variant !== 'link-primary' && v.variant !== 'link-secondary')" :key="item.variant">
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">{{ item.label }}</p>
            <div class="flex flex-wrap items-center gap-3">
              <PtButton v-for="size in SIZES" :key="size" :variant="item.variant" :size="size" color="primary">
                Button {{ size }}
              </PtButton>
            </div>
          </div>
        </template>
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Link Primary / Link Secondary</p>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="link-primary" color="primary">Link Primary</PtButton>
            <PtButton variant="link-secondary" color="primary">Link Secondary</PtButton>
          </div>
        </div>
      </div>
    `,
  }),
};

export const VariantMatrixDanger: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Danger × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { VARIANTS, SIZES };
    },
    template: `
      <div class="flex flex-col gap-8">
        <template v-for="item in VARIANTS.filter(v => v.variant !== 'link-primary' && v.variant !== 'link-secondary')" :key="item.variant">
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">{{ item.label }} (Danger)</p>
            <div class="flex flex-wrap items-center gap-3">
              <PtButton v-for="size in SIZES" :key="size" :variant="item.variant" :size="size" color="danger">
                Delete {{ size }}
              </PtButton>
            </div>
          </div>
        </template>
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Link Danger</p>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="link-primary" color="danger">Link Danger</PtButton>
          </div>
        </div>
      </div>
    `,
  }),
};

export const VariantMatrixSuccess: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Success × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { VARIANTS, SIZES };
    },
    template: `
      <div class="flex flex-col gap-8">
        <template v-for="item in VARIANTS.filter(v => v.variant !== 'link-primary' && v.variant !== 'link-secondary')" :key="item.variant">
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">{{ item.label }} (Success)</p>
            <div class="flex flex-wrap items-center gap-3">
              <PtButton v-for="size in SIZES" :key="size" :variant="item.variant" :size="size" color="success">
                Confirm {{ size }}
              </PtButton>
            </div>
          </div>
        </template>
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Link Success</p>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="link-primary" color="success">Link Success</PtButton>
          </div>
        </div>
      </div>
    `,
  }),
};

export const VariantMatrixWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Warning × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { VARIANTS, SIZES };
    },
    template: `
      <div class="flex flex-col gap-8">
        <template v-for="item in VARIANTS.filter(v => v.variant !== 'link-primary' && v.variant !== 'link-secondary')" :key="item.variant">
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">{{ item.label }} (Warning)</p>
            <div class="flex flex-wrap items-center gap-3">
              <PtButton v-for="size in SIZES" :key="size" :variant="item.variant" :size="size" color="warning">
                Warning {{ size }}
              </PtButton>
            </div>
          </div>
        </template>
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Link Warning</p>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="link-primary" color="warning">Link Warning</PtButton>
          </div>
        </div>
      </div>
    `,
  }),
};

export const VariantMatrixNeutral: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Neutral × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { VARIANTS, SIZES };
    },
    template: `
      <div class="flex flex-col gap-8">
        <template v-for="item in VARIANTS.filter(v => v.variant !== 'link-primary' && v.variant !== 'link-secondary')" :key="item.variant">
          <div>
            <p class="text-sm font-medium text-slate-700 mb-2">{{ item.label }} (Neutral)</p>
            <div class="flex flex-wrap items-center gap-3">
              <PtButton v-for="size in SIZES" :key="size" :variant="item.variant" :size="size" color="neutral">
                Cancel {{ size }}
              </PtButton>
            </div>
          </div>
        </template>
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Link Neutral</p>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="link-primary" color="neutral">Link Neutral</PtButton>
          </div>
        </div>
      </div>
    `,
  }),
};

export const VariantMatrixStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default, Disabled, Loading, Selected untuk Solid Primary.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <PtButton variant="solid" color="primary" size="md">Default</PtButton>
        <PtButton variant="solid" color="primary" size="md" :disabled="true">Disabled</PtButton>
        <PtButton variant="solid" color="primary" size="md" :loading="true">Loading</PtButton>
        <PtButton variant="solid" color="primary" size="md" :selected="true">Selected</PtButton>
      </div>
    `,
  }),
};

export const VariantMatrixWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary Solid dengan left icon per size (sesuai Figma).',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { SIZES, PlusIcon };
    },
    template: `
      <div class="flex flex-wrap items-center gap-4">
        <PtButton v-for="size in SIZES" :key="size" variant="solid" color="primary" :size="size" :leftIcon="PlusIcon">
          Button
        </PtButton>
      </div>
    `,
  }),
};

/** 148 designs Figma PACER: semua variant × color × size + states (default, disabled, loading, selected). */
const COLORS_148: Array<{ color: 'primary' | 'danger' | 'success' | 'warning' | 'neutral'; label: string }> = [
  { color: 'primary', label: 'Primary' },
  { color: 'danger', label: 'Danger' },
  { color: 'success', label: 'Success' },
  { color: 'warning', label: 'Warning' },
  { color: 'neutral', label: 'Neutral' },
];

const VARIANTS_NON_LINK = ['solid', 'secondary', 'outline', 'ghost'] as const;

export const All148Designs: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Grid lengkap 148 design Figma PACER: variant × color × size (sm/md) + states (default, disabled, loading, selected). Verifikasi warna dan state sesuai Figma.',
      },
    },
  },
  render: () => ({
    components: { PtButton },
    setup() {
      return { COLORS_148, VARIANTS_NON_LINK, SIZES, PlusIcon };
    },
    template: `
      <div class="p-6 space-y-10 max-w-6xl mx-auto">
        <h2 class="text-lg font-semibold text-slate-900">Variant × Color × Size</h2>
        <div v-for="item in COLORS_148" :key="item.color">
          <h3 class="text-sm font-medium text-slate-600 mb-3">{{ item.label }}</h3>
          <div class="flex flex-col gap-3">
            <div v-for="variant in VARIANTS_NON_LINK" :key="variant" class="flex flex-wrap items-center gap-2">
              <span class="w-20 text-xs text-slate-500 capitalize">{{ variant }}</span>
              <PtButton :variant="variant" :color="item.color" size="sm">{{ item.label }} sm</PtButton>
              <PtButton :variant="variant" :color="item.color" size="md">{{ item.label }} md</PtButton>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="w-20 text-xs text-slate-500">link</span>
              <PtButton variant="link-primary" :color="item.color">Link Primary</PtButton>
              <PtButton v-if="item.color === 'primary'" variant="link-secondary" color="primary">Link Secondary</PtButton>
            </div>
          </div>
        </div>

        <h2 class="text-lg font-semibold text-slate-900 mt-10">States (Default, Disabled, Loading, Selected)</h2>
        <div v-for="item in COLORS_148" :key="'states-' + item.color">
          <h3 class="text-sm font-medium text-slate-600 mb-2">{{ item.label }}</h3>
          <div class="flex flex-wrap items-center gap-3">
            <PtButton variant="solid" :color="item.color" size="md">Default</PtButton>
            <PtButton variant="solid" :color="item.color" size="md" :disabled="true">Disabled</PtButton>
            <PtButton variant="solid" :color="item.color" size="md" :loading="true">Loading</PtButton>
            <PtButton variant="solid" :color="item.color" size="md" :selected="true">Selected</PtButton>
          </div>
        </div>

        <h2 class="text-lg font-semibold text-slate-900 mt-10">With icon (Solid × Color × Size)</h2>
        <div class="flex flex-wrap gap-3">
          <PtButton v-for="item in COLORS_148" :key="'icon-' + item.color" variant="solid" :color="item.color" size="md" :leftIcon="PlusIcon">
            Button
          </PtButton>
        </div>
      </div>
    `,
  }),
};
