import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@pacer-ui/react';
import { useEffect, useMemo, useState } from 'react';

const meta = {
  id: 'components-switch',
  title: 'Components/Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Switch PACER sesuai Figma.',
          '',
          'Props:',
          '- disabled (boolean) default false',
          '- label (string) default empty',
          '- description (string) default empty',
          '- position (left/right) default left',
          '- outlined (boolean) default false',
          '- bgColor (string) default hex sesuai Figma',
          '- error (boolean) default false (text merah; outline merah jika outlined)',
          '',
          'State:',
          '- checked / defaultChecked + onCheckedChange',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    checked: true,
    disabled: false,
    name: 'acceptTerms',
    id: 'accept-terms-switch',
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
    position: 'left',
    outlined: false,
    bgColor: '#016BF8',
    error: false,
    size: 'md',
  },
  argTypes: {
    checked: { control: 'boolean', description: 'Controlled checked state' },
    disabled: { control: 'boolean' },
    name: { control: 'text', description: 'HTML form name (submit true/false via hidden input)' },
    id: { control: 'text', description: 'Optional id for aria bindings' },
    label: { control: 'text' },
    description: { control: 'text' },
    position: { control: 'select', options: ['left', 'right'] },
    outlined: { control: 'boolean' },
    bgColor: { control: 'text' },
    error: { control: 'boolean' },
    size: { control: 'select', options: ['md', 'sm'] },
    isMandatory: {
      control: 'boolean',
      description: 'Tampilkan indikator wajib (*) setelah label.',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Tampilkan icon informasi bulat di samping label.',
    },
    tooltipInformation: {
      control: 'text',
      description: 'Isi tooltip informasi (string sederhana untuk demo).',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(!!args.checked);
    useEffect(() => setChecked(!!args.checked), [args.checked]);

    const merged = useMemo(
      () => ({
        ...args,
        checked,
        onCheckedChange: setChecked,
      }),
      [args, checked]
    );

    return (
      <div style={{ width: 428 }}>
        <Switch {...merged} />
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    description: '',
    outlined: false,
    position: 'left',
  },
  render: Playground.render,
};

export const WithDescription: Story = {
  args: {
    outlined: false,
    position: 'left',
  },
  render: Playground.render,
};

export const Outlined: Story = {
  args: {
    outlined: true,
    position: 'left',
  },
  render: Playground.render,
};

export const RightPosition: Story = {
  args: {
    outlined: false,
    position: 'right',
  },
  render: Playground.render,
};

export const ErrorOutlined: Story = {
  args: {
    outlined: true,
    error: true,
    position: 'left',
  },
  render: Playground.render,
};

export const MandatoryWithTooltip: Story = {
  args: {
    isMandatory: true,
    showTooltip: true,
    tooltipInformation: 'Field ini wajib diaktifkan sebelum melanjutkan.',
  },
  render: Playground.render,
};
