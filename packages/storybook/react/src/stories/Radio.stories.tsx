import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@pacer-ui/react';
import { useEffect, useState } from 'react';

const meta = {
  id: 'components-radio',
  title: 'Components/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Radio Button PACER sesuai Figma.',
          '',
          'Props:',
          '- disabled (boolean) default false',
          '- label (string) default empty',
          '- description (string) default empty',
          '- position (left/right) default left',
          '- outlined (boolean) default false',
          '- error (boolean) default false (text merah; outline merah jika outlined)',
          '',
          'State:',
          '- checked / defaultChecked + onCheckedChange',
          '- value (required) string | number - nilai yang akan di-submit jika radio ini terpilih',
          '',
          'States:',
          '- Focus: auto dari focus state (ada focus ring)',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    checked: true,
    value: 'option1',
    disabled: false,
    name: 'radio-group',
    id: 'radio-option1',
    label: 'Option 1',
    description: 'This is the first option.',
    position: 'left',
    outlined: false,
    error: false,
  },
  argTypes: {
    checked: { control: 'boolean', description: 'Controlled checked state' },
    value: { control: 'text', description: 'Nilai yang akan di-submit jika radio ini terpilih (required)' },
    disabled: { control: 'boolean' },
    name: { control: 'text', description: 'HTML form name untuk grouping (semua radio dalam grup yang sama punya name yang sama)' },
    id: { control: 'text', description: 'Optional id for aria bindings' },
    label: { control: 'text' },
    description: { control: 'text' },
    position: { control: 'select', options: ['left', 'right'] },
    outlined: { control: 'boolean' },
    error: { control: 'boolean' },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);

    // Sync local state when controls change
    useEffect(() => {
      setChecked(args.checked ?? false);
    }, [args.checked]);

    return (
      <div className="w-[428px]">
        <Radio
          {...args}
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(true);
          }}
        />
        <div className="mt-4 text-sm text-slate-600">Current checked: {String(checked)}</div>
      </div>
    );
  },
};

export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('option1');
    return (
      <div className="w-[428px] space-y-2">
        <Radio checked={selectedValue === 'option1'} value="option1" name="group1" label="Option 1" onCheckedChange={setSelectedValue} />
        <Radio checked={selectedValue === 'option2'} value="option2" name="group1" label="Option 2" onCheckedChange={setSelectedValue} />
        <Radio checked={selectedValue === 'option3'} value="option3" name="group1" label="Option 3" onCheckedChange={setSelectedValue} />
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('option1');
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="group2"
          label="Option 1"
          description="This is the first option with a description."
          onCheckedChange={setSelectedValue}
        />
        <Radio
          checked={selectedValue === 'option2'}
          value="option2"
          name="group2"
          label="Option 2"
          description="This is the second option with a description."
          onCheckedChange={setSelectedValue}
        />
      </div>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('option1');
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="group3"
          label="Option 1"
          description="This is the first option with a description."
          outlined
          onCheckedChange={setSelectedValue}
        />
        <Radio
          checked={selectedValue === 'option2'}
          value="option2"
          name="group3"
          label="Option 2"
          description="This is the second option with a description."
          outlined
          onCheckedChange={setSelectedValue}
        />
      </div>
    );
  },
};

export const RightPosition: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('option1');
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="group4"
          label="Option 1"
          description="This is the first option with a description."
          position="right"
          onCheckedChange={setSelectedValue}
        />
        <Radio
          checked={selectedValue === 'option2'}
          value="option2"
          name="group4"
          label="Option 2"
          description="This is the second option with a description."
          position="right"
          onCheckedChange={setSelectedValue}
        />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number | null>(null);
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="group5"
          label="Option 1"
          description="Please select an option."
          error
          onCheckedChange={(v) => setSelectedValue(v)}
        />
        <Radio
          checked={selectedValue === 'option2'}
          value="option2"
          name="group5"
          label="Option 2"
          description="Please select an option."
          error
          onCheckedChange={(v) => setSelectedValue(v)}
        />
      </div>
    );
  },
};

export const ErrorOutlined: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number | null>(null);
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="group6"
          label="Option 1"
          description="Please select an option."
          error
          outlined
          onCheckedChange={(v) => setSelectedValue(v)}
        />
        <Radio
          checked={selectedValue === 'option2'}
          value="option2"
          name="group6"
          label="Option 2"
          description="Please select an option."
          error
          outlined
          onCheckedChange={(v) => setSelectedValue(v)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[428px] space-y-2">
        <Radio checked={false} disabled label="Unchecked disabled" value="option1" name="group7" />
        <Radio checked={true} disabled label="Checked disabled" value="option2" name="group7" />
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [selectedValue1, setSelectedValue1] = useState<string | number>('option1');
    const [selectedValue2, setSelectedValue2] = useState<string | number | null>(null);
    return (
      <div className="w-[428px] space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium text-slate-700 mb-2">Unchecked</div>
          <Radio checked={selectedValue2 === 'unchecked'} value="unchecked" name="group8" label="Unchecked option" onCheckedChange={setSelectedValue2} />
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium text-slate-700 mb-2">Checked</div>
          <Radio checked={selectedValue1 === 'option1'} value="option1" name="group9" label="Checked option" onCheckedChange={setSelectedValue1} />
        </div>
      </div>
    );
  },
};

export const MandatoryWithTooltip: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('option1');
    return (
      <div className="w-[428px] space-y-2">
        <Radio
          checked={selectedValue === 'option1'}
          value="option1"
          name="mandatory-radio"
          label="Option 1"
          description="Pilih salah satu opsi untuk melanjutkan."
          isMandatory
          showTooltip
          tooltipInformation="Field ini wajib diisi; pilih salah satu opsi yang sesuai."
          onCheckedChange={setSelectedValue}
        />
      </div>
    );
  },
};
