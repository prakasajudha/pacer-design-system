import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@pacer-ui/react';
import { useMemo, useState } from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Progress PACER sesuai guideline Figma.',
          '',
          'Props utama:',
          '- value: 0 - 100 (akan di-clamp)',
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
    style: { width: 190 },
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
      table: { type: { summary: 'xs | sm | md | lg' }, defaultValue: { summary: "'md'" } },
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
    style: {
      control: 'object',
      description: 'Gunakan style untuk set width wrapper di Storybook (default 190px).',
      table: { type: { summary: 'React.CSSProperties' } },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Progress {...args} />,
};

export const AnimatedExample: Story = {
  render: (args) => {
    const [value, setValue] = useState<number>(Number(args.value ?? 30));
    const mergedArgs = useMemo(() => ({ ...args, value }), [args, value]);

    return (
      <div className="flex flex-col gap-3 items-center">
        <Progress {...mergedArgs} />
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded-md border border-slate-300 text-sm"
            onClick={() => setValue((v) => Math.max(0, v - 10))}
          >
            -10
          </button>
          <button
            className="px-3 py-1 rounded-md border border-slate-300 text-sm"
            onClick={() => setValue((v) => Math.min(100, v + 10))}
          >
            +10
          </button>
        </div>
        <div className="text-xs text-slate-600">value: {value}</div>
      </div>
    );
  },
};

