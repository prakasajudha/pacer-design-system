import type { Meta, StoryObj } from '@storybook/vue3';
import { PtSwitch } from '@pacer-ui/vue';
import { ref, watch } from 'vue';

const meta = {
  id: 'components-switch',
  title: 'Components/Form/Switch',
  component: PtSwitch,
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
          'Model:',
          '- v-model (modelValue) boolean',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    modelValue: true,
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
    isMandatory: false,
    showTooltip: false,
    tooltipInformation: '',
  },
  argTypes: {
    modelValue: { control: 'boolean', description: 'v-model (checked state)' },
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
      description: 'Isi tooltip informasi (string; untuk konten kompleks gunakan slot #tooltip-information).',
    },
  },
} satisfies Meta<typeof PtSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtSwitch },
    setup() {
      const value = ref<boolean>(!!args.modelValue);
      watch(
        () => args.modelValue,
        (v) => (value.value = !!v)
      );
      return { args, value };
    },
    template: `
      <div class="w-[428px]">
        <PtSwitch v-bind="args" v-model="value" />
      </div>
    `,
  }),
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

export const Mandatory: Story = {
  args: {
    label: 'Accept terms and conditions',
    isMandatory: true,
    description: 'You agree to our Terms of Service and Privacy Policy.',
  },
  render: Playground.render,
};

export const WithTooltip: Story = {
  args: {
    label: 'Accept terms and conditions',
    showTooltip: true,
    tooltipInformation: 'Centang untuk menyetujui syarat dan ketentuan.',
    description: 'You agree to our Terms of Service and Privacy Policy.',
  },
  render: Playground.render,
};

export const MandatoryWithTooltip: Story = {
  args: {
    label: 'Accept terms and conditions',
    isMandatory: true,
    showTooltip: true,
    tooltipInformation: 'Field ini wajib dicentang untuk melanjutkan.',
    description: 'You agree to our Terms of Service and Privacy Policy.',
  },
  render: Playground.render,
};
