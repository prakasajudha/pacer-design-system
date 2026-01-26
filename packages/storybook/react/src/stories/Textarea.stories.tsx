import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from '@pacer-ui/react';

const meta = {
  id: 'components-textarea',
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Textarea untuk input teks multi-baris. Style dan props mengikuti PinInput (title, description, errorMessage).',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    variant: 'border',
    title: 'Deskripsi',
    description: 'Jelaskan dengan singkat.',
    placeholder: 'Ketik di sini...',
    resize: 'vertical',
    disabled: false,
    error: false,
    errorMessage: '',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['border', 'background'] },
    title: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    resize: { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

const containerClass = 'w-[672px]'; // lebar container, textarea (w-full) mengikuti

const Controlled = (args: React.ComponentProps<typeof Textarea>) => {
  const [value, setValue] = useState('');
  return <Textarea {...args} value={value} onChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const Default: Story = {
  args: {
    title: 'Komentar',
    description: 'Masukkan komentar atau catatan (opsional).',
    placeholder: 'Tulis komentar...',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const VariantBorder: Story = {
  args: {
    variant: 'border',
    title: 'Variant Border',
    description: 'Bg putih, border slate-300. Placeholder slate-400.',
    placeholder: 'Placeholder...',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const VariantBackground: Story = {
  args: {
    variant: 'background',
    title: 'Variant Background',
    description: 'Bg slate-50, tanpa border. Placeholder slate-500.',
    placeholder: 'Placeholder...',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => {
    const [s, setS] = useState('');
    const [m, setM] = useState('');
    const [l, setL] = useState('');
    return (
      <div className={`flex flex-col gap-4 ${containerClass}`}>
        <Textarea value={s} onChange={setS} size="sm" title="Size sm" placeholder="sm" />
        <Textarea value={m} onChange={setM} size="md" title="Size md" placeholder="md" />
        <Textarea value={l} onChange={setL} size="lg" title="Size lg" placeholder="lg" />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Deskripsi wajib diisi atau minimal 10 karakter.',
    title: 'Deskripsi',
    description: 'Min. 10 karakter.',
    placeholder: 'Tulis deskripsi...',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const DisabledBorder: Story = {
  args: {
    disabled: true,
    variant: 'border',
    title: 'Disabled (Variant Border)',
    description: 'Bg slate-50, border slate-200, text/placeholder slate-400.',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const DisabledBackground: Story = {
  args: {
    disabled: true,
    variant: 'background',
    title: 'Disabled (Variant Background)',
    description: 'Bg slate-100, tanpa border, text/placeholder slate-400.',
    placeholder: 'Tidak dapat diedit',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};

export const ResizeNone: Story = {
  args: {
    resize: 'none',
    title: 'No resize',
  },
  render: (args) => (
    <div className={containerClass}>
      <Controlled {...args} />
    </div>
  ),
};
