import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PinInput } from '@pacer-ui/react';

const meta = {
  title: 'Components/PinInput',
  component: PinInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pin Input untuk OTP/PIN dengan opsi mask, size, dan posisi toggle.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    length: 4,
    size: 'md',
    mask: true,
    position: 'left',
    title: 'Kode OTP',
    description: 'Masukkan 4 digit dari email/SMS.',
    disabled: false,
    error: false,
    errorMessage: '',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    mask: { control: 'boolean' },
    position: {
      control: 'select',
      options: ['left', 'center'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    length: { control: 'number', min: 4, max: 8 },
  },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = (args: React.ComponentProps<typeof PinInput>) => {
  const [value, setValue] = useState('');
  return <PinInput {...args} value={value} onChange={setValue} />;
};

export const Playground: Story = {
  render: (args) => <Controlled {...args} />,
};

export const Default: Story = {
  args: {
    title: 'Kode verifikasi',
    description: 'Masukkan 4 digit kode yang dikirim ke email Anda.',
  },
  render: (args) => <Controlled {...args} />,
};

export const NoMask: Story = {
  args: { mask: false, title: 'PIN' },
  render: (args) => <Controlled {...args} />,
};

export const PositionCenter: Story = {
  args: { position: 'center', title: 'OTP', description: 'Posisi center.' },
  render: (args) => <Controlled {...args} />,
};

export const Sizes: Story = {
  render: () => {
    const [s, setS] = useState('');
    const [m, setM] = useState('');
    const [l, setL] = useState('');
    return (
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <PinInput value={s} onChange={setS} size="sm" title="Size sm" />
        <PinInput value={m} onChange={setM} size="md" title="Size md" />
        <PinInput value={l} onChange={setL} size="lg" title="Size lg" />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Kode tidak valid atau kedaluwarsa.',
    title: 'Kode verifikasi',
    description: 'Masukkan 4 digit kode yang dikirim ke email Anda.',
  },
  render: (args) => {
    const [value, setValue] = useState('1234');
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: { disabled: true, title: 'Disabled' },
  render: (args) => {
    const [value, setValue] = useState('5678');
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
};
