import type { Meta, StoryObj } from '@storybook/vue3';
import { PtAvatar } from '@pacer-ui/vue';
import type { AvatarItem } from '@pacer-ui/vue';

// Sample images untuk demo
const sampleImage1 = 'https://i.pravatar.cc/150?img=1';
const sampleImage2 = 'https://i.pravatar.cc/150?img=2';
const sampleImage3 = 'https://i.pravatar.cc/150?img=3';
const sampleImage4 = 'https://i.pravatar.cc/150?img=4';
const sampleImage5 = 'https://i.pravatar.cc/150?img=5';

// Default items untuk group mode
const defaultItems: AvatarItem[] = [
  { img: sampleImage1, fullName: 'John Doe' },
  { img: sampleImage2, fullName: 'Jane Smith' },
  { fullName: 'Bob Johnson' },
  { img: sampleImage4, fullName: 'Alice Brown' },
];

const meta = {
  title: 'Components/Avatar',
  component: PtAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Avatar PACER sesuai guideline Figma.',
          '',
          'Fitur:',
          '- Mode: single atau group',
          '- Type: circle atau square (diabaikan jika mode group, selalu circle)',
          '- Size: xxs, xs, sm, md, lg, xl, 2xl',
          '- Badge: online, offline, icon (hanya untuk single mode)',
          '- Fallback ke initials jika tidak ada gambar',
          '- Group mode dengan overlap dan count badge',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    mode: 'single',
    type: 'circle',
    size: 'sm',
    fullName: 'User',
    items: defaultItems,
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'group'],
      description: 'Mode avatar: single atau group.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'single'" },
      },
    },
    type: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Type avatar: circle atau square (diabaikan jika mode group, selalu circle).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'circle'" },
      },
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Ukuran avatar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'sm'" },
      },
    },
    badge: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'icon'],
      description: 'Badge status (hanya untuk single mode).',
      table: {
        type: { summary: 'string' },
      },
    },
    img: {
      control: 'text',
      description: 'URL gambar avatar (hanya untuk single mode).',
      table: {
        type: { summary: 'string' },
      },
    },
    iconImg: {
      control: 'text',
      description: 'URL icon untuk badge type icon (hanya untuk single mode).',
      table: {
        type: { summary: 'string' },
      },
    },
    fullName: {
      control: 'text',
      description: 'Nama lengkap untuk generate initials (hanya untuk single mode).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'User'" },
      },
    },
    items: {
      control: 'object',
      description: 'Array avatar items (hanya untuk group mode). Struktur: [{ img?: string, fullName?: string }]',
      table: {
        type: { summary: 'AvatarItem[]' },
      },
    },
    showGroupCount: {
      control: 'number',
      description: 'Jumlah maksimal avatar yang ditampilkan sebelum count badge (hanya untuk group mode).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
} satisfies Meta<typeof PtAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
};

// Single Mode Stories
export const SingleWithImage: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: sampleImage1,
    fullName: 'John Doe',
  },
};

export const SingleWithInitials: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    fullName: 'John Doe',
  },
};

export const SingleSquare: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'square',
    size: 'md',
    fullName: 'Jane Smith',
  },
};

export const SingleWithOnlineBadge: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: sampleImage1,
    fullName: 'John Doe',
    badge: 'online',
  },
};

export const SingleWithOfflineBadge: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: sampleImage1,
    fullName: 'John Doe',
    badge: 'offline',
  },
};

export const SingleWithIconBadge: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: sampleImage1,
    fullName: 'John Doe',
    badge: 'icon',
    iconImg: 'https://www.figma.com/api/mcp/asset/8d8bec52-dfed-4e3a-94da-bc02b72f64a0',
  },
};

// Size variations
export const SizeXxs: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'xxs',
    fullName: 'JD',
  },
};

export const SizeXs: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'xs',
    fullName: 'JD',
  },
};

export const SizeSm: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'sm',
    fullName: 'John Doe',
  },
};

export const SizeMd: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'md',
    fullName: 'John Doe',
  },
};

export const SizeLg: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'lg',
    fullName: 'John Doe',
  },
};

export const SizeXl: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: 'xl',
    fullName: 'John Doe',
  },
};

export const Size2Xl: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'single',
    size: '2xl',
    fullName: 'John Doe',
  },
};

// Group Mode Stories
export const GroupWithImages: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 3,
    items: [
      { img: sampleImage1, fullName: 'John Doe' },
      { img: sampleImage2, fullName: 'Jane Smith' },
      { img: sampleImage3, fullName: 'Bob Johnson' },
      { img: sampleImage4, fullName: 'Alice Brown' },
    ] as AvatarItem[],
  },
};

export const GroupWithInitials: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 2,
    items: [
      { fullName: 'John Doe' },
      { fullName: 'Jane Smith' },
      { fullName: 'Bob Johnson' },
    ] as AvatarItem[],
  },
};

export const GroupWithMixed: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 2,
    items: [
      { img: sampleImage1, fullName: 'John Doe' },
      { fullName: 'Jane Smith' },
      { fullName: 'Bob Johnson' },
    ] as AvatarItem[],
  },
};

export const GroupLargeCount: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      return { args };
    },
    template: '<PtAvatar v-bind="args" />',
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 1,
    items: [
      { img: sampleImage1, fullName: 'John Doe' },
      { img: sampleImage2, fullName: 'Jane Smith' },
      { img: sampleImage3, fullName: 'Bob Johnson' },
      { img: sampleImage4, fullName: 'Alice Brown' },
      { img: sampleImage5, fullName: 'Charlie Wilson' },
    ] as AvatarItem[],
  },
};

export const GroupSizeVariations: Story = {
  render: () => ({
    components: { PtAvatar },
    setup() {
      const items: AvatarItem[] = [
        { img: sampleImage1, fullName: 'John Doe' },
        { img: sampleImage2, fullName: 'Jane Smith' },
        { img: sampleImage3, fullName: 'Bob Johnson' },
      ];
      return { items };
    },
    template: `
      <div class="flex flex-col gap-4 items-center">
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">xxs:</span>
          <PtAvatar mode="group" size="xxs" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">xs:</span>
          <PtAvatar mode="group" size="xs" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">sm:</span>
          <PtAvatar mode="group" size="sm" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">md:</span>
          <PtAvatar mode="group" size="md" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">lg:</span>
          <PtAvatar mode="group" size="lg" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">xl:</span>
          <PtAvatar mode="group" size="xl" :items="items" :show-group-count="2" />
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm w-16">2xl:</span>
          <PtAvatar mode="group" size="2xl" :items="items" :show-group-count="2" />
        </div>
      </div>
    `,
  }),
};

// Contoh lengkap dengan berbagai kombinasi properti
export const GroupCompleteExample: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      // Contoh data lengkap dengan berbagai kombinasi properti
      const exampleItems: AvatarItem[] = [
        {
          img: sampleImage1,
          fullName: 'John Doe',
        },
        {
          img: sampleImage2,
          fullName: 'Jane Smith',
        },
        {
          fullName: 'Bob Johnson',
        },
        {
          img: sampleImage4,
          fullName: 'Alice Brown',
        },
        {
          fullName: 'Charlie Wilson',
        },
      ];
      return { args, exampleItems };
    },
    template: `
      <div class="flex flex-col gap-6 items-center p-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Contoh Data Items Lengkap</h3>
          <PtAvatar v-bind="args" :items="exampleItems" />
        </div>
        <div class="mt-4 p-4 bg-slate-50 rounded-lg max-w-2xl">
          <h4 class="font-semibold mb-2">Struktur Data:</h4>
          <pre class="text-xs overflow-auto">{{ JSON.stringify(exampleItems, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 3,
  },
};

// Contoh dengan minimal data (hanya fullName)
export const GroupMinimalData: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      const minimalItems: AvatarItem[] = [
        { fullName: 'John Doe' },
        { fullName: 'Jane Smith' },
        { fullName: 'Bob Johnson' },
        { fullName: 'Alice Brown' },
      ];
      return { args, minimalItems };
    },
    template: `
      <div class="flex flex-col gap-4 items-center">
        <PtAvatar v-bind="args" :items="minimalItems" />
        <div class="mt-2 p-3 bg-slate-50 rounded text-xs">
          <p class="font-semibold mb-1">Minimal Data (hanya fullName):</p>
          <pre>{{ JSON.stringify(minimalItems, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 2,
  },
};

// Contoh dengan semua properti terisi
export const GroupFullProperties: Story = {
  render: (args) => ({
    components: { PtAvatar },
    setup() {
      const fullItems: AvatarItem[] = [
        {
          img: sampleImage1,
          fullName: 'John Doe',
        },
        {
          img: sampleImage2,
          fullName: 'Jane Smith',
        },
        {
          img: sampleImage3,
          fullName: 'Bob Johnson',
        },
      ];
      return { args, fullItems };
    },
    template: `
      <div class="flex flex-col gap-4 items-center">
        <PtAvatar v-bind="args" :items="fullItems" />
        <div class="mt-2 p-3 bg-slate-50 rounded text-xs max-w-md">
          <p class="font-semibold mb-1">Semua Properti Terisi:</p>
          <pre class="overflow-auto">{{ JSON.stringify(fullItems, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
  args: {
    mode: 'group',
    size: 'md',
    showGroupCount: 2,
  },
};
