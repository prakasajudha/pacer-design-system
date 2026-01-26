import type { Meta, StoryObj } from '@storybook/vue3';
import { PtDivider } from '@pacer-ui/vue';

const meta = {
  id: 'components-divider',
  title: 'Components/Basic/Divider',
  component: PtDivider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Divider memisahkan konten secara visual. Mendukung warna (colorPalette), variant (solid/dashed/dotted), orientation (horizontal/vertical), dan size (xs/sm/md/lg).',
          '',
          '**Prop `as`:** elemen dasar yang di-render (default `div`), mis. `hr`. Vue tidak mendukung `asChild`; untuk komposisi gunakan prop `as`.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    colorPalette: 'gray',
    variant: 'solid',
    orientation: 'horizontal',
    size: 'sm',
  },
  argTypes: {
    colorPalette: {
      control: 'select',
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
      description: 'Color palette of the divider.',
      table: { type: { summary: 'DividerColorPalette' }, defaultValue: { summary: "'gray'" } },
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Variant (line style).',
      table: { type: { summary: "'solid' | 'dashed' | 'dotted'" }, defaultValue: { summary: "'solid'" } },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation.',
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size (thickness).',
      table: { type: { summary: "'xs' | 'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'sm'" } },
    },
    width: {
      control: 'text',
      description: 'Width (nilai CSS), dipakai saat orientation horizontal. Contoh: "192px", "100%", "12rem". Framework-agnostic.',
      table: { type: { summary: 'string' } },
    },
    height: {
      control: 'text',
      description: 'Height (nilai CSS), dipakai saat orientation vertical. Contoh: "32px", "100%", "2rem". Framework-agnostic.',
      table: { type: { summary: 'string' } },
    },
    as: {
      control: 'text',
      description: 'The underlying element to render (e.g. div, hr).',
      table: { type: { summary: 'string' } },
    },
  },
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div :class="args.orientation === 'vertical' ? 'flex items-stretch gap-4 h-24' : 'w-64'">
        <span class="text-sm text-slate-600">Above</span>
        <PtDivider v-bind="args" />
        <span class="text-sm text-slate-600">Below</span>
      </div>
    `,
  }),
} satisfies Meta<typeof PtDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

const base = {
  colorPalette: 'gray' as const,
  variant: 'solid' as const,
  orientation: 'horizontal' as const,
  size: 'sm' as const,
};

export const Default: Story = { args: { ...base } };

export const Horizontal: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div class="w-64 space-y-2">
        <p class="text-sm text-slate-700">Section one</p>
        <PtDivider v-bind="args" />
        <p class="text-sm text-slate-700">Section two</p>
      </div>
    `,
  }),
  args: { ...base, orientation: 'horizontal' },
};

export const HorizontalWithWidth: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-xs text-slate-500 mb-1">width="192px"</p>
          <PtDivider v-bind="args" orientation="horizontal" width="192px" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-1">width="256px"</p>
          <PtDivider v-bind="args" orientation="horizontal" width="256px" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-1">width="100%" (default)</p>
          <PtDivider v-bind="args" orientation="horizontal" width="100%" />
        </div>
      </div>
    `,
  }),
  args: { ...base, orientation: 'horizontal' },
};

export const Vertical: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div class="flex items-center gap-4 h-12">
        <span class="text-sm text-slate-700">Left</span>
        <PtDivider v-bind="args" />
        <span class="text-sm text-slate-700">Right</span>
      </div>
    `,
  }),
  args: { ...base, orientation: 'vertical' },
};

export const VerticalWithHeight: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div class="flex items-end gap-6">
        <div class="flex flex-col items-center gap-1">
          <p class="text-xs text-slate-500">height="32px"</p>
          <div class="flex items-center gap-2 h-12">
            <span class="text-sm text-slate-700">L</span>
            <PtDivider v-bind="args" orientation="vertical" height="32px" />
            <span class="text-sm text-slate-700">R</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-1">
          <p class="text-xs text-slate-500">height="48px"</p>
          <div class="flex items-center gap-2 h-12">
            <span class="text-sm text-slate-700">L</span>
            <PtDivider v-bind="args" orientation="vertical" height="48px" />
            <span class="text-sm text-slate-700">R</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-1">
          <p class="text-xs text-slate-500">height="100%"</p>
          <div class="flex items-stretch gap-2 h-12">
            <span class="text-sm text-slate-700 flex items-center">L</span>
            <PtDivider v-bind="args" orientation="vertical" height="100%" />
            <span class="text-sm text-slate-700 flex items-center">R</span>
          </div>
        </div>
      </div>
    `,
  }),
  args: { ...base, orientation: 'vertical' },
};

export const VariantSolid: Story = { args: { ...base, variant: 'solid' } };
export const VariantDashed: Story = { args: { ...base, variant: 'dashed' } };
export const VariantDotted: Story = { args: { ...base, variant: 'dotted' } };

export const SizeXs: Story = { args: { ...base, size: 'xs' } };
export const SizeSm: Story = { args: { ...base, size: 'sm' } };
export const SizeMd: Story = { args: { ...base, size: 'md' } };
export const SizeLg: Story = { args: { ...base, size: 'lg' } };

const palettes = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const;

export const ColorPalettes: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args, palettes }),
    template: `
      <div class="w-64 space-y-4">
        <div v-for="color in palettes" :key="color">
          <p class="text-xs text-slate-500 mb-1 capitalize">{{ color }}</p>
          <PtDivider v-bind="args" :color-palette="color" />
        </div>
      </div>
    `,
  }),
  args: { ...base },
};

export const AsHr: Story = {
  render: (args: any) => ({
    components: { PtDivider },
    setup: () => ({ args }),
    template: `
      <div class="w-64">
        <p class="text-sm text-slate-700">Content</p>
        <PtDivider v-bind="args" as="hr" />
        <p class="text-sm text-slate-700">More content</p>
      </div>
    `,
  }),
  args: { ...base, as: 'hr' },
};
