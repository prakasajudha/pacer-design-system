import type { Meta, StoryObj } from '@storybook/vue3';
import { PtRadio } from '@pacer-ui/vue';
import { ref, watch } from 'vue';

const meta = {
  id: 'components-radio',
  title: 'Components/Form/Radio',
  component: PtRadio,
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
          'Model:',
          '- v-model (modelValue) string | number - nilai yang terpilih dari radio group',
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
    modelValue: 'option1',
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
    modelValue: {
      control: 'text',
      description: 'v-model: nilai yang terpilih dari radio group',
    },
    value: {
      control: 'text',
      description: 'Nilai yang akan di-submit jika radio ini terpilih (required)',
    },
    disabled: { control: 'boolean' },
    name: { control: 'text', description: 'HTML form name untuk grouping (semua radio dalam grup yang sama punya name yang sama)' },
    id: { control: 'text', description: 'Optional id for aria bindings' },
    label: { control: 'text' },
    description: { control: 'text' },
    position: { control: 'select', options: ['left', 'right'] },
    outlined: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof PtRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtRadio },
    setup() {
      const selectedValue = ref<string | number>(args.modelValue ?? args.value);
      // Sync with args changes from Storybook controls
      watch(
        () => args.modelValue,
        (v) => {
          if (v !== undefined) {
            selectedValue.value = v;
          }
        },
        { immediate: true }
      );
      return { args, selectedValue };
    },
    template: `
      <div class="w-[428px]">
        <PtRadio
          v-bind="args"
          v-model="selectedValue"
          @update:modelValue="(v) => { selectedValue = v; args.modelValue = v; }"
        />
        <div class="mt-4 text-sm text-slate-600">
          Selected value: {{ selectedValue }}
        </div>
      </div>
    `,
  }),
};

export const Default: Story = {
  render: () => {
    const selectedValue = ref('option1');
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio v-model="selectedValue" value="option1" name="group1" label="Option 1" />
          <PtRadio v-model="selectedValue" value="option2" name="group1" label="Option 2" />
          <PtRadio v-model="selectedValue" value="option3" name="group1" label="Option 3" />
        </div>
      `,
    };
  },
};

export const WithDescription: Story = {
  render: () => {
    const selectedValue = ref('option1');
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio
            v-model="selectedValue"
            value="option1"
            name="group2"
            label="Option 1"
            description="This is the first option with a description."
          />
          <PtRadio
            v-model="selectedValue"
            value="option2"
            name="group2"
            label="Option 2"
            description="This is the second option with a description."
          />
        </div>
      `,
    };
  },
};

export const Outlined: Story = {
  render: () => {
    const selectedValue = ref('option1');
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio
            v-model="selectedValue"
            value="option1"
            name="group3"
            label="Option 1"
            description="This is the first option with a description."
            outlined
          />
          <PtRadio
            v-model="selectedValue"
            value="option2"
            name="group3"
            label="Option 2"
            description="This is the second option with a description."
            outlined
          />
        </div>
      `,
    };
  },
};

export const RightPosition: Story = {
  render: () => {
    const selectedValue = ref('option1');
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio
            v-model="selectedValue"
            value="option1"
            name="group4"
            label="Option 1"
            description="This is the first option with a description."
            position="right"
          />
          <PtRadio
            v-model="selectedValue"
            value="option2"
            name="group4"
            label="Option 2"
            description="This is the second option with a description."
            position="right"
          />
        </div>
      `,
    };
  },
};

export const Error: Story = {
  render: () => {
    const selectedValue = ref(null);
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio
            v-model="selectedValue"
            value="option1"
            name="group5"
            label="Option 1"
            description="Please select an option."
            error
          />
          <PtRadio
            v-model="selectedValue"
            value="option2"
            name="group5"
            label="Option 2"
            description="Please select an option."
            error
          />
        </div>
      `,
    };
  },
};

export const ErrorOutlined: Story = {
  render: () => {
    const selectedValue = ref(null);
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue }),
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio
            v-model="selectedValue"
            value="option1"
            name="group6"
            label="Option 1"
            description="Please select an option."
            error
            outlined
          />
          <PtRadio
            v-model="selectedValue"
            value="option2"
            name="group6"
            label="Option 2"
            description="Please select an option."
            error
            outlined
          />
        </div>
      `,
    };
  },
};

export const Disabled: Story = {
  render: () => {
    return {
      components: { PtRadio },
      template: `
        <div class="w-[428px] space-y-2">
          <PtRadio checked={false} disabled label="Unchecked disabled" value="option1" name="group7" />
          <PtRadio checked={true} disabled label="Checked disabled" value="option2" name="group7" />
        </div>
      `,
    };
  },
};

export const States: Story = {
  render: () => {
    const selectedValue1 = ref('option1');
    const selectedValue2 = ref(null);
    return {
      components: { PtRadio },
      setup: () => ({ selectedValue1, selectedValue2 }),
      template: `
        <div class="w-[428px] space-y-4">
          <div class="space-y-2">
            <div class="text-sm font-medium text-slate-700 mb-2">Unchecked</div>
            <PtRadio v-model="selectedValue2" value="unchecked" name="group8" label="Unchecked option" />
          </div>
          <div class="space-y-2">
            <div class="text-sm font-medium text-slate-700 mb-2">Checked</div>
            <PtRadio v-model="selectedValue1" value="option1" name="group9" label="Checked option" />
          </div>
        </div>
      `,
    };
  },
};
