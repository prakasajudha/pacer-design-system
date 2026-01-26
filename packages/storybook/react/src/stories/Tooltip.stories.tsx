import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '@pacer-ui/react';

const desc =
  'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.';

const meta = {
  id: 'components-tooltip',
  title: 'Components/Disclosure/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Tooltip menampilkan informasi singkat saat elemen trigger di-hover atau mendapat fokus.',
          '',
          '**Best practice:**',
          '- Gunakan untuk label ikon atau deskripsi kontekstual.',
          '- Konten tooltip sebaiknya teks saja, tanpa link/tombol interaktif.',
          '- Muncul setelah delay singkat (~200ms), hilang setelah pointer/fokus keluar.',
          '- Dapat di-dismiss dengan tombol Escape.',
          '- Tetap visible saat pointer pindah dari trigger ke tooltip (hoverable).',
          '',
          '**Title dan description** dapat berupa string atau ReactNode (JSX).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    title: 'Title',
    description: desc,
    position: 'top',
    variant: 'primary',
    size: 'md',
    delayDuration: 200,
    skipDelayDuration: 100,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title. Dapat string atau ReactNode (JSX).',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      control: 'text',
      description: 'Deskripsi tooltip. Dapat string atau ReactNode (JSX).',
      table: { type: { summary: 'ReactNode' } },
    },
    position: {
      control: 'select',
      options: ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'],
      description: 'Posisi tooltip relative ke trigger.',
      table: { type: { summary: 'TooltipPosition' }, defaultValue: { summary: "'top'" } },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Primary (dark) / secondary (light). Default primary.',
      table: { type: { summary: "'primary' | 'secondary'" }, defaultValue: { summary: "'primary'" } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the tooltip content.',
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'Delay in ms before showing.',
      table: { type: { summary: 'number' }, defaultValue: { summary: '200' } },
    },
    skipDelayDuration: {
      control: { type: 'number', min: 0, max: 500, step: 50 },
      description: 'Delay in ms before hiding after hover/focus leave.',
      table: { type: { summary: 'number' }, defaultValue: { summary: '100' } },
    },
  },
  render: (args) => (
    <Tooltip {...args}>
      <span
        className="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
        tabIndex={0}
      >
        Hover or focus me
      </span>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const base = {
  title: 'Title',
  description: desc,
  position: 'top' as const,
  variant: 'primary' as const,
  size: 'md' as const,
};

export const Default: Story = { args: { ...base } };

export const TextTrigger: Story = {
  args: { ...base, title: 'Teks trigger', description: 'Trigger berupa teks biasa (underline dotted).' },
};

export const IconTrigger: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#1A1A1A] text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
        tabIndex={0}
        role="img"
        aria-label="Info"
      >
        ⓘ
      </span>
    </Tooltip>
  ),
  args: { ...base, title: 'Info', description: 'Trigger berupa ikon.' },
};

export const LinkTrigger: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <span
        className="cursor-pointer rounded px-1 text-brand-300 underline underline-offset-2 hover:text-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand-400"
        tabIndex={0}
      >
        Hover link ini
      </span>
    </Tooltip>
  ),
  args: { ...base, title: 'Link tooltip', description: 'Trigger berupa teks link.' },
};

export const ButtonTrigger: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="solid" color="primary">
        Hover tombol
      </Button>
    </Tooltip>
  ),
  args: { ...base, title: 'Tombol', description: 'Trigger berupa tombol.' },
};

export const TitleDescriptionAsJsx: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      title={
        <span>
          Custom <strong>title</strong> (JSX)
        </span>
      }
      description={
        <span>
          Custom <em>description</em> with JSX.
        </span>
      }
    >
      <span
        className="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2"
        tabIndex={0}
      >
        Hover me
      </span>
    </Tooltip>
  ),
  args: { ...base },
};

export const TitleDescriptionAsComponent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      title={
        <span>
          ✨ <strong>Pro tip</strong>
        </span>
      }
      description={
        <span>
          Title & description terima <strong>ReactNode/komponen</strong> + emoji 🎉👍 — bukan cuma string.
        </span>
      }
    >
      <span
        className="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
        tabIndex={0}
      >
        Hover untuk lihat title/description pakai JSX + emoji
      </span>
    </Tooltip>
  ),
  args: { ...base },
};

export const EmojiChildren: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip {...args} title="Semangat!" description="Tooltip di trigger pakai emoji 🎉">
        <span
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-2 text-slate-800 cursor-default ring-1 ring-amber-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          tabIndex={0}
        >
          ✨ Hover aku dong
        </span>
      </Tooltip>
      <Tooltip {...args} title="Pro tip" description="Children bisa teks + emoji apa aja.">
        <span
          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-slate-700 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          tabIndex={0}
        >
          👋 Coba hover 👆
        </span>
      </Tooltip>
      <Tooltip {...args} title="Hot" description="Trigger murni emoji.">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-xl cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          tabIndex={0}
          role="img"
          aria-label="Hot"
        >
          🔥
        </span>
      </Tooltip>
    </div>
  ),
  args: { ...base, variant: 'primary', title: 'Semangat!', description: 'Children bisa pakai emoji & styling bebas.' },
};

export const Primary: Story = { args: { ...base, variant: 'primary' } };
export const Secondary: Story = { args: { ...base, variant: 'secondary' } };

export const PositionTopLeft: Story = { args: { ...base, position: 'top-left', description: 'top-left' } };
export const PositionTop: Story = { args: { ...base, position: 'top', description: 'top' } };
export const PositionTopRight: Story = { args: { ...base, position: 'top-right', description: 'top-right' } };
export const PositionRight: Story = { args: { ...base, position: 'right', description: 'right' } };
export const PositionBottomRight: Story = { args: { ...base, position: 'bottom-right', description: 'bottom-right' } };
export const PositionBottom: Story = { args: { ...base, position: 'bottom', description: 'bottom' } };
export const PositionBottomLeft: Story = { args: { ...base, position: 'bottom-left', description: 'bottom-left' } };
export const PositionLeft: Story = { args: { ...base, position: 'left', description: 'left' } };

export const TitleOnly: Story = { args: { ...base, title: 'Title only', description: undefined } };
export const DescriptionOnly: Story = {
  args: { ...base, title: undefined, description: 'Hanya description, tanpa title — tooltip tetap muncul.' },
};
export const LongContent: Story = {
  args: {
    ...base,
    title: 'Long title that might wrap on small viewports',
    description:
      'Description text can span multiple lines. Keep it concise. Avoid interactive elements inside tooltips per accessibility guidelines.',
  },
};

export const PrimarySmTitleOnly: Story = {
  args: { ...base, variant: 'primary', size: 'sm', title: 'Sm title only', description: undefined },
};
export const SecondarySmTitleOnly: Story = {
  args: { ...base, variant: 'secondary', size: 'sm', title: 'Sm title only', description: undefined },
};
export const PrimaryMdTitleOnly: Story = {
  args: { ...base, variant: 'primary', size: 'md', title: 'Title only', description: undefined },
};
export const SecondaryMdTitleOnly: Story = {
  args: { ...base, variant: 'secondary', size: 'md', title: 'Title only', description: undefined },
};
