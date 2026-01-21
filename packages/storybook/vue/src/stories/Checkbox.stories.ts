import type { Meta, StoryObj } from '@storybook/vue3';
import { PtCheckbox } from '@pacer-ui/vue';
import { ref, watch } from 'vue';

const meta = {
  title: 'Components/Checkbox',
  component: PtCheckbox,
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
          'Model:',
          '- v-model (modelValue) boolean',
          '  - true = checked',
          '  - false = unchecked',
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
    modelValue: true,
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
    modelValue: {
      control: 'boolean',
      description: 'v-model: true=checked, false=unchecked',
    },
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
} satisfies Meta<typeof PtCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtCheckbox },
    setup() {
      const value = ref<boolean>(args.modelValue ?? false);
      const indeterminate = ref<boolean>(args.indeterminate ?? false);
      // Sync with args changes from Storybook controls
      watch(
        () => args.modelValue,
        (v) => {
          if (v !== undefined) {
            value.value = v;
          }
        },
        { immediate: true }
      );
      watch(
        () => args.indeterminate,
        (v) => {
          if (v !== undefined) {
            indeterminate.value = v;
          }
        },
        { immediate: true }
      );
      return { args, value, indeterminate };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox v-bind="args" v-model="value" :indeterminate="indeterminate" />
      </div>
    `,
  }),
};

export const Default: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox v-model="checked" label="Accept terms and conditions" />
      </div>
    `,
  }),
};

export const WithDescription: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
        />
      </div>
    `,
  }),
};

export const Outlined: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(true);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          outlined
        />
      </div>
    `,
  }),
};

export const RightPosition: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          position="right"
        />
      </div>
    `,
  }),
};

export const Error: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          error
        />
      </div>
    `,
  }),
};

export const ErrorOutlined: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          label="Accept terms and conditions"
          description="You agree to our Terms of Service and Privacy Policy."
          error
          outlined
        />
      </div>
    `,
  }),
};

export const Intermediate: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked = ref(true);
      const indeterminate = ref(true);
      // When user clicks indeterminate, it becomes unchecked and indeterminate is cleared
      watch(checked, (newValue) => {
        if (newValue === false && indeterminate.value) {
          indeterminate.value = false;
        }
      });
      return { checked, indeterminate };
    },
    template: `
      <div class="w-[428px]">
        <PtCheckbox
          v-model="checked"
          :indeterminate="indeterminate"
          label="Select all items"
          description="Select or deselect all items in the list."
        />
        <div class="mt-4 text-sm text-slate-600">
          Current value: {{ checked }} (indeterminate: {{ indeterminate }})
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const checked1 = ref(false);
      const checked2 = ref(true);
      const checked3 = ref(true);
      const indeterminate3 = ref(true);
      return { checked1, checked2, checked3, indeterminate3 };
    },
    template: `
      <div class="w-[428px] space-y-4">
        <PtCheckbox v-model="checked1" label="Unchecked disabled" disabled />
        <PtCheckbox v-model="checked2" label="Checked disabled" disabled />
        <PtCheckbox v-model="checked3" :indeterminate="indeterminate3" label="Intermediate disabled" disabled />
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { PtCheckbox },
    setup() {
      const unchecked = ref(false);
      const checked = ref(true);
      const intermediate = ref(true);
      const indeterminate = ref(true);
      return { unchecked, checked, intermediate, indeterminate };
    },
    template: `
      <div class="w-[428px] space-y-4">
        <PtCheckbox v-model="unchecked" label="Unchecked" />
        <PtCheckbox v-model="checked" label="Checked" />
        <PtCheckbox v-model="intermediate" :indeterminate="indeterminate" label="Intermediate" />
      </div>
    `,
  }),
};
