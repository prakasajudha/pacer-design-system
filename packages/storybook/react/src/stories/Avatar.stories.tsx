import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@pacer-ui/react';
import type { AvatarItem } from '@pacer-ui/react';

const sampleImage1 = 'https://i.pravatar.cc/150?img=1';
const sampleImage2 = 'https://i.pravatar.cc/150?img=2';
const sampleImage3 = 'https://i.pravatar.cc/150?img=3';
const sampleImage4 = 'https://i.pravatar.cc/150?img=4';

const defaultItems: AvatarItem[] = [
  { img: sampleImage1, fullName: 'John Doe' },
  { img: sampleImage2, fullName: 'Jane Smith' },
  { fullName: 'Bob Johnson' },
  { img: sampleImage4, fullName: 'Alice Brown' },
];

const meta = {
  id: 'components-avatar',
  title: 'Components/Basic/Avatar',
  component: Avatar,
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
    showGroupCount: 1,
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'group'],
      description: 'Mode avatar: single atau group.',
      table: { type: { summary: 'string' } },
    },
    type: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Type avatar: circle atau square (diabaikan jika mode group, selalu circle).',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Ukuran avatar.',
      table: { type: { summary: 'string' } },
    },
    badge: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'icon'],
      description: 'Badge status (hanya untuk single mode).',
      table: { type: { summary: 'string' } },
    },
    img: {
      control: 'text',
      description: 'URL gambar avatar (hanya untuk single mode).',
      table: { type: { summary: 'string' } },
    },
    iconImg: {
      control: 'text',
      description: 'URL icon untuk badge type icon (hanya untuk single mode).',
      table: { type: { summary: 'string' } },
    },
    fullName: {
      control: 'text',
      description: 'Nama lengkap untuk generate initials (hanya untuk single mode).',
      table: { type: { summary: 'string' } },
    },
    items: {
      control: 'object',
      description: 'Array avatar items (hanya untuk group mode). Struktur: [{ img?: string, fullName?: string }]',
      table: { type: { summary: 'AvatarItem[]' } },
    },
    showGroupCount: {
      control: 'number',
      description: 'Jumlah maksimal avatar yang ditampilkan sebelum count badge (hanya untuk group mode).',
      table: { type: { summary: 'number' } },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Avatar {...args} />,
};

export const SingleWithImage: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: sampleImage1,
    fullName: 'John Doe',
    badge: undefined,
  },
};

export const SingleWithInitials: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    mode: 'single',
    type: 'circle',
    size: 'md',
    img: undefined,
    fullName: 'John Doe',
  },
};

export const SingleSquare: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    mode: 'single',
    type: 'square',
    size: 'md',
    img: undefined,
    fullName: 'Jane Smith',
  },
};

export const SingleWithOnlineBadge: Story = {
  render: (args) => <Avatar {...args} />,
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
  render: (args) => <Avatar {...args} />,
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
  render: (args) => <Avatar {...args} />,
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

export const GroupWithItems: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    mode: 'group',
    size: 'md',
    type: 'square', // ignored in group
    items: defaultItems,
    showGroupCount: 3,
  },
};

