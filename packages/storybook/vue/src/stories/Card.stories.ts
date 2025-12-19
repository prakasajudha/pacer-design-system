import type { Meta, StoryObj } from '@storybook/vue3';
import { PtCard } from '@pacer-ui/vue';

const meta = {
  title: 'Components/Card',
  component: PtCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PtCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { PtCard },
    template: `
      <PtCard class="w-[400px]">
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">Card Title</h3>
          <p class="text-gray-600 mb-4">
            This is a basic card component with a title and description.
          </p>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4">
            Learn More
          </button>
        </div>
      </PtCard>
    `,
  }),
};

export const WithHeader: Story = {
  render: () => ({
    components: { PtCard },
    template: `
      <PtCard class="w-[400px]">
        <div class="border-b p-6">
          <h3 class="text-lg font-semibold">Card Header</h3>
        </div>
        <div class="p-6">
          <p class="text-gray-600">
            Card content goes here with a separated header section.
          </p>
        </div>
      </PtCard>
    `,
  }),
};

export const WithFooter: Story = {
  render: () => ({
    components: { PtCard },
    template: `
      <PtCard class="w-[400px]">
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">Card with Footer</h3>
          <p class="text-gray-600">
            This card has a footer section with actions.
          </p>
        </div>
        <div class="border-t p-6 flex gap-2">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium border bg-white hover:bg-gray-50 h-10 px-4">
            Cancel
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4">
            Confirm
          </button>
        </div>
      </PtCard>
    `,
  }),
};
