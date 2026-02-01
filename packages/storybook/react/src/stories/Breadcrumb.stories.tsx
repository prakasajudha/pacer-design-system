import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@pacer-ui/react';
import type { BreadcrumbItem } from '@pacer-ui/react';

const meta = {
  id: 'components-breadcrumb',
  title: 'Components/Basic/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Breadcrumb menampilkan jalur navigasi. Sesuai Figma PACER: link (biru) = text-primary, item saat ini (terakhir) = text-muted-foreground (abu-abu), separator abu-abu.',
          'Props: items (title, icon?, link?, disabled?), separator (default ">"), type (ellipsis | dropdown), collapse (default true).',
          'Jika collapse=true dan items > 3, item tengah ditampilkan di dalam Popover (ellipsis atau dropdown).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Home', link: '#' },
      { title: 'Products', link: '#' },
      { title: 'Category', link: '#' },
      { title: 'Subcategory', link: '#' },
      { title: 'Current Page' },
    ],
    separator: '>',
    type: 'dropdown',
    collapse: true,
  },
  argTypes: {
    items: {
      description: 'List of breadcrumb items (title, icon?, link?, disabled?).',
      table: { type: { summary: 'BreadcrumbItem[]' } },
    },
    separator: {
      control: 'text',
      description: 'Separator between items.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '">"' } },
    },
    type: {
      control: 'select',
      options: ['ellipsis', 'dropdown'],
      description: 'Type of collapsed trigger.',
      table: { type: { summary: '"ellipsis" | "dropdown"' }, defaultValue: { summary: '"dropdown"' } },
    },
    collapse: {
      control: 'boolean',
      description: 'When true, collapse middle items into ellipsis/dropdown when more than 3 items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

const threeItems: BreadcrumbItem[] = [
  { title: 'Home', link: '#' },
  { title: 'Products', link: '#' },
  { title: 'Current Page' },
];

const fiveItems: BreadcrumbItem[] = [
  { title: 'Home', link: '#' },
  { title: 'Products', link: '#' },
  { title: 'Category', link: '#' },
  { title: 'Subcategory', link: '#' },
  { title: 'Current Page' },
];

const itemsWithIcons: BreadcrumbItem[] = [
  {
    title: 'Home',
    link: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  { title: 'Settings', link: '#' },
  { title: 'Profile' },
];

const itemsWithDisabled: BreadcrumbItem[] = [
  { title: 'Home', link: '#' },
  { title: 'Disabled Step', disabled: true },
  { title: 'Current Page' },
];

export const Default: Story = {
  args: {
    items: fiveItems,
    separator: '>',
    type: 'dropdown',
    collapse: true,
  },
};

export const NoCollapse: Story = {
  args: {
    items: fiveItems,
    separator: '>',
    type: 'dropdown',
    collapse: false,
  },
};

export const CollapsedDropdown: Story = {
  args: {
    items: fiveItems,
    separator: '>',
    type: 'dropdown',
    collapse: true,
  },
};

export const CollapsedEllipsis: Story = {
  args: {
    items: fiveItems,
    separator: '>',
    type: 'ellipsis',
    collapse: true,
  },
};

/** Figma: Home / Components / Breadcrumb (separator slash) */
export const SeparatorSlash: Story = {
  args: {
    items: [
      { title: 'Home', link: '#' },
      { title: 'Components', link: '#' },
      { title: 'Breadcrumb' },
    ],
    separator: '/',
    type: 'dropdown',
    collapse: false,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: fiveItems,
    separator: '/',
    type: 'dropdown',
    collapse: true,
  },
};

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    separator: '>',
    type: 'dropdown',
    collapse: true,
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: itemsWithDisabled,
    separator: '>',
    type: 'dropdown',
    collapse: false,
  },
};

/** Figma: 6 items, no collapse (semua terlihat) */
export const SixItemsNoCollapse: Story = {
  args: {
    items: [
      { title: 'Home', link: '#' },
      { title: 'Breadcrumb', link: '#' },
      { title: 'Components', link: '#' },
      { title: 'Breadcrumb', link: '#' },
      { title: 'Breadcrumb', link: '#' },
      { title: 'Breadcrumb' },
    ],
    separator: '>',
    type: 'dropdown',
    collapse: false,
  },
};

/** Figma: Home > ... > Data Fetching (ellipsis) */
export const EllipsisDataFetching: Story = {
  args: {
    items: [
      { title: 'Home', link: '#' },
      { title: 'Docs', link: '#' },
      { title: 'Guides', link: '#' },
      { title: 'Data Fetching', link: '#' },
      { title: 'Caching and Revalidating' },
    ],
    separator: '>',
    type: 'ellipsis',
    collapse: true,
  },
};

export const LongTitles: Story = {
  args: {
    items: [
      { title: 'Very Long Home Page Title', link: '#' },
      { title: 'Another Long Section Name', link: '#' },
      { title: 'Current Page With Long Name' },
    ],
    separator: '>',
    type: 'dropdown',
    collapse: false,
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="max-w-md">
      <Breadcrumb {...args} />
    </div>
  ),
};
