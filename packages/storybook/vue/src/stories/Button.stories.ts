import type { Meta, StoryObj } from '@storybook/vue3';
import { PtButton } from '@pacer-ui/vue';
import { ref, watch, h, onMounted, nextTick } from 'vue';

const meta = {
  title: 'Components/Button',
  component: PtButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen tombol PACER sesuai guideline Figma.',
          '',
          'Ringkasan guideline:',
          '- md: h-10 (40px), sm: h-9 (36px)',
          '- gap antar item: 4px (gap-1)',
          '- radius: 6px (rounded-[6px])',
          '- typography: text-sm (14px) + leading-6 (24px)',
          '',
          'Untuk tombol ikon-only gunakan **PtIconButton** (wajib `ariaLabel`).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'md',
    loading: false,
    color: 'primary',
    selected: false,
    focused: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
      description: 'Pilihan gaya visual tombol.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'solid'" },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Ukuran tombol (non-link).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'md'" },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan state loading.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'danger'],
      description: 'Color button: primary (default) / danger.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'primary'" },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Aktifkan selected/toggled state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leftIcon: {
      control: false,
      description: 'Ikon sebelum label tombol.',
      table: {
        type: { summary: 'Component' },
      },
    },
    rightIcon: {
      control: false,
      description: 'Ikon setelah label tombol.',
      table: {
        type: { summary: 'Component' },
      },
    },
    children: {
      control: 'text',
      description: 'Konten tombol.',
      table: {
        type: { summary: 'string' },
      },
    },
    focused: {
      control: 'boolean',
      description: 'Tampilkan focused state (focus ring).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      table: { disable: true },
      description: 'Native HTML button type (button/submit/reset). Jarang perlu diubah.',
    },
  },
} satisfies Meta<typeof PtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component untuk handle focused state
const FocusableButton = {
  name: 'FocusableButton',
  components: { PtButton },
  props: {
    focused: Boolean,
    children: String,
  },
  setup(props: any, { attrs, slots }: any) {
    const componentRef = ref<any>(null);

    const getButtonElement = (): HTMLButtonElement | null => {
      if (!componentRef.value) return null;

      // Jika componentRef adalah component instance, ambil $el
      const el = componentRef.value.$el || componentRef.value;

      // Pastikan el adalah HTMLButtonElement
      if (el && el instanceof HTMLButtonElement) {
        return el;
      }

      // Jika bukan, coba cari button di dalam element
      if (el && el instanceof HTMLElement) {
        const button = el.querySelector('button');
        if (button instanceof HTMLButtonElement) {
          return button;
        }
      }

      return null;
    };

    const updateFocus = async () => {
      await nextTick();
      const element = getButtonElement();
      if (!element || typeof element.focus !== 'function') return;

      if (props.focused) {
        element.focus();
        element.classList.add('storybook-focused');
      } else {
        element.classList.remove('storybook-focused');
        if (document.activeElement === element) {
          element.blur();
        }
      }
    };

    watch(
      () => props.focused,
      () => {
        updateFocus();
      },
      { immediate: false }
    );

    onMounted(() => {
      updateFocus();
    });

    return () =>
      h(
        PtButton,
        {
          ...attrs,
          ref: componentRef,
          'data-focused': props.focused ? 'true' : undefined,
        },
        {
          default: () => props.children || slots.default?.() || '',
        }
      );
  },
};

const renderButton = (label: string) => (args: Record<string, unknown>) => ({
  components: { FocusableButton },
  setup() {
    return { args, label };
  },
  template: '<FocusableButton v-bind="args">{{ label || args.children }}</FocusableButton>',
});

export const Playground: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template: '<FocusableButton v-bind="args">{{ args.children || "Button" }}</FocusableButton>',
  }),
};

export const Solid: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Solid Button" }}</FocusableButton>',
  }),
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Secondary Action" }}</FocusableButton>',
  }),
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Outline Action" }}</FocusableButton>',
  }),
  args: {
    variant: 'outline',
    children: 'Outline Action',
  },
};

export const Ghost: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Ghost Button" }}</FocusableButton>',
  }),
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const LinkPrimary: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Link Primary" }}</FocusableButton>',
  }),
  args: {
    variant: 'link-primary',
    children: 'Link Primary',
  },
};

export const LinkSecondary: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Link Secondary" }}</FocusableButton>',
  }),
  args: {
    variant: 'link-secondary',
    children: 'Link Secondary',
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Small Size" }}</FocusableButton>',
  }),
  args: {
    size: 'sm',
    children: 'Small Size',
  },
};

export const Large: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Medium (md)" }}</FocusableButton>',
  }),
  args: {
    size: 'md',
    children: 'Medium (md)',
  },
};

export const Loading: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Processing" }}</FocusableButton>',
  }),
  args: {
    loading: true,
    children: 'Processing',
  },
};

export const Danger: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template: '<FocusableButton v-bind="args">{{ args.children || "Delete" }}</FocusableButton>',
  }),
  args: {
    color: 'danger',
    children: 'Delete',
  },
};

export const Selected: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template: '<FocusableButton v-bind="args">{{ args.children || "Selected" }}</FocusableButton>',
  }),
  args: {
    selected: true,
    children: 'Selected',
  },
};

export const Focused: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Focused Button" }}</FocusableButton>',
  }),
  args: {
    focused: true,
    children: 'Focused Button',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { FocusableButton },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args">{{ args.children || "Disabled State" }}</FocusableButton>',
  }),
  args: {
    disabled: true,
    children: 'Disabled State',
  },
};

// Simple icon components untuk contoh
const ArrowRightIcon = {
  template: `
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  `,
};

const CheckIcon = {
  template: `
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  `,
};

const PlusIcon = {
  template: `
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  `,
};

const DownloadIcon = {
  template: `
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  `,
};

export const WithLeftIcon: Story = {
  render: (args) => ({
    components: { FocusableButton, DownloadIcon },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args" :leftIcon="DownloadIcon">{{ args.children || "Download" }}</FocusableButton>',
  }),
  args: {
    variant: 'solid',
    children: 'Download',
  },
};

export const WithRightIcon: Story = {
  render: (args) => ({
    components: { FocusableButton, ArrowRightIcon },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args" :rightIcon="ArrowRightIcon">{{ args.children || "Continue" }}</FocusableButton>',
  }),
  args: {
    variant: 'solid',
    children: 'Continue',
  },
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { FocusableButton, PlusIcon, CheckIcon },
    setup() {
      return { args };
    },
    template:
      '<FocusableButton v-bind="args" :leftIcon="PlusIcon" :rightIcon="CheckIcon">{{ args.children || "Submit" }}</FocusableButton>',
  }),
  args: {
    variant: 'solid',
    children: 'Submit',
  },
};
