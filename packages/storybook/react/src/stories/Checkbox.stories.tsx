import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@pacer-ui/react';
import { useEffect, useState } from 'react';

const meta = {
  id: 'components-checkbox',
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Checkbox PACER sesuai Figma.',
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
          '',
          'Props:',
          '- indeterminate (boolean) default false - shows minus icon instead of checkmark',
          '',
          'States:',
          '- Focus: auto dari focus state (ada focus ring)',
          '- Intermediate: set indeterminate prop ke true',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
    name: 'acceptTerms',
    id: 'accept-terms-checkbox',
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
    position: 'left',
    outlined: false,
    error: false,
  },
  argTypes: {
    checked: { control: 'boolean', description: 'Controlled checked state' },
    indeterminate: {
      control: 'boolean',
      description: 'Shows minus icon instead of checkmark (intermediate state)',
    },
    disabled: { control: 'boolean' },
    name: { control: 'text', description: 'HTML form name (submit true/false via hidden input)' },
    id: { control: 'text', description: 'Optional id for aria bindings' },
    label: { control: 'text' },
    description: { control: 'text' },
    position: { control: 'select', options: ['left', 'right'] },
    outlined: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    const [indeterminate, setIndeterminate] = useState(args.indeterminate ?? false);

    // Sync local state when controls change
    useEffect(() => {
      setChecked(args.checked ?? false);
    }, [args.checked]);

    useEffect(() => {
      setIndeterminate(args.indeterminate ?? false);
    }, [args.indeterminate]);
    return (
      <div className="w-[428px]">
        <Checkbox
          {...args}
          checked={checked}
          indeterminate={indeterminate}
          onCheckedChange={(value) => {
            setChecked(value);
            if (value === false) {
              setIndeterminate(false);
            }
          }}
        />
      </div>
    );
  },
};

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="w-[428px]">
        <Checkbox checked={checked} onCheckedChange={setChecked} label="Accept terms and conditions" />
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
        />
      </div>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          outlined
        />
      </div>
    );
  },
};

export const RightPosition: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          position="right"
        />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
          description="You must accept the terms to continue."
          error
        />
      </div>
    );
  },
};

export const ErrorOutlined: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Accept terms and conditions"
          description="You must accept the terms to continue."
          error
          outlined
        />
      </div>
    );
  },
};

export const Intermediate: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
      <div className="w-[428px]">
        <Checkbox
          checked={checked}
          indeterminate={indeterminate}
          onCheckedChange={(value) => {
            setChecked(value);
            if (value === false) {
              setIndeterminate(false);
            }
          }}
          label="Select all items"
          description="Select or deselect all items in the list."
        />
        <div className="mt-4 text-sm text-slate-600">
          Current value: {String(checked)} (indeterminate: {String(indeterminate)})
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[428px] space-y-4">
        <Checkbox checked={false} disabled label="Unchecked disabled" />
        <Checkbox checked={true} disabled label="Checked disabled" />
        <Checkbox checked={true} indeterminate={true} disabled label="Intermediate disabled" />
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [unchecked, setUnchecked] = useState(false);
    const [checked, setChecked] = useState(true);
    const [intermediate, setIntermediate] = useState(true);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
      <div className="w-[428px] space-y-4">
        <Checkbox checked={unchecked} onCheckedChange={setUnchecked} label="Unchecked" />
        <Checkbox checked={checked} onCheckedChange={setChecked} label="Checked" />
        <Checkbox
          checked={intermediate}
          indeterminate={indeterminate}
          onCheckedChange={(value) => {
            setIntermediate(value);
            if (value === false) {
              setIndeterminate(false);
            }
          }}
          label="Intermediate"
        />
      </div>
    );
  },
};
