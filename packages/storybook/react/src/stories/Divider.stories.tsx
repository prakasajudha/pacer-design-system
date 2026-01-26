import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@pacer-ui/react';

const meta = {
  id: 'components-divider',
  title: 'Components/Basic/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Divider memisahkan konten secara visual. Mendukung warna (colorPalette), variant (solid/dashed/dotted), orientation (horizontal/vertical), dan size (xs/sm/md/lg).',
          '',
          '**Props `as` dan `asChild`:**',
          '- `as`: elemen dasar yang di-render (default `div`).',
          '- `asChild`: bila `true`, satu child dipakai sebagai elemen yang di-render dan props digabung ke sana.',
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
      table: { type: { summary: 'React.ElementType' } },
    },
    asChild: {
      control: 'boolean',
      description: 'Use the single child as the rendered element and merge props.',
      table: { type: { summary: 'boolean' } },
    },
  },
  render: (args) => (
    <div className={args.orientation === 'vertical' ? 'flex items-stretch gap-4 h-24' : 'w-64'}>
      <span className="text-sm text-slate-600">Above</span>
      <Divider {...args} />
      <span className="text-sm text-slate-600">Below</span>
    </div>
  ),
} satisfies Meta<typeof Divider>;

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
  render: (args) => (
    <div className="w-64 space-y-2">
      <p className="text-sm text-slate-700">Section one</p>
      <Divider {...args} />
      <p className="text-sm text-slate-700">Section two</p>
    </div>
  ),
  args: { ...base, orientation: 'horizontal' },
};

export const HorizontalWithWidth: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-500 mb-1">width=&quot;192px&quot;</p>
        <Divider {...args} orientation="horizontal" width="192px" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-1">width=&quot;256px&quot;</p>
        <Divider {...args} orientation="horizontal" width="256px" />
      </div>
      <div>
        <p className="text-xs text-slate-500 mb-1">width=&quot;100%&quot; (default)</p>
        <Divider {...args} orientation="horizontal" width="100%" />
      </div>
    </div>
  ),
  args: { ...base, orientation: 'horizontal' },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 h-12">
      <span className="text-sm text-slate-700">Left</span>
      <Divider {...args} />
      <span className="text-sm text-slate-700">Right</span>
    </div>
  ),
  args: { ...base, orientation: 'vertical' },
};

export const VerticalWithHeight: Story = {
  render: (args) => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-slate-500">height=&quot;32px&quot;</p>
        <div className="flex items-center gap-2 h-12">
          <span className="text-sm text-slate-700">L</span>
          <Divider {...args} orientation="vertical" height="32px" />
          <span className="text-sm text-slate-700">R</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-slate-500">height=&quot;48px&quot;</p>
        <div className="flex items-center gap-2 h-12">
          <span className="text-sm text-slate-700">L</span>
          <Divider {...args} orientation="vertical" height="48px" />
          <span className="text-sm text-slate-700">R</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-slate-500">height=&quot;100%&quot;</p>
        <div className="flex items-stretch gap-2 h-12">
          <span className="text-sm text-slate-700 flex items-center">L</span>
          <Divider {...args} orientation="vertical" height="100%" />
          <span className="text-sm text-slate-700 flex items-center">R</span>
        </div>
      </div>
    </div>
  ),
  args: { ...base, orientation: 'vertical' },
};

export const VariantSolid: Story = { args: { ...base, variant: 'solid' } };
export const VariantDashed: Story = { args: { ...base, variant: 'dashed' } };
export const VariantDotted: Story = { args: { ...base, variant: 'dotted' } };

export const SizeXs: Story = { args: { ...base, size: 'xs' } };
export const SizeSm: Story = { args: { ...base, size: 'sm' } };
export const SizeMd: Story = { args: { ...base, size: 'md' } };
export const SizeLg: Story = { args: { ...base, size: 'lg' } };

export const ColorPalettes: Story = {
  render: (args) => (
    <div className="w-64 space-y-4">
      {(
        [
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
        ] as const
      ).map((colorPalette) => (
        <div key={colorPalette}>
          <p className="text-xs text-slate-500 mb-1 capitalize">{colorPalette}</p>
          <Divider {...args} colorPalette={colorPalette} />
        </div>
      ))}
    </div>
  ),
  args: { ...base },
};

export const AsHr: Story = {
  render: (args) => (
    <div className="w-64">
      <p className="text-sm text-slate-700">Content</p>
      <Divider {...args} as="hr" />
      <p className="text-sm text-slate-700">More content</p>
    </div>
  ),
  args: { ...base, as: 'hr' },
};

export const AsChild: Story = {
  render: (args) => (
    <div className="w-64 space-y-2">
      <p className="text-sm text-slate-700">Above</p>
      <Divider {...args} asChild>
        <div />
      </Divider>
      <p className="text-sm text-slate-700">Below (child receives merged separator props)</p>
    </div>
  ),
  args: { ...base, asChild: true, variant: 'dashed' },
};
