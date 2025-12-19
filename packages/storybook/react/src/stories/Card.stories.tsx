import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@pacer-ui/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[400px]">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">
          This is a basic card component with a title and description.
        </p>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4">
          Learn More
        </button>
      </div>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card className="w-[400px]">
      <div className="border-b p-6">
        <h3 className="text-lg font-semibold">Card Header</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">Card content goes here with a separated header section.</p>
      </div>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[400px]">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Card with Footer</h3>
        <p className="text-gray-600">This card has a footer section with actions.</p>
      </div>
      <div className="border-t p-6 flex gap-2">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border bg-white hover:bg-gray-50 h-10 px-4">
          Cancel
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4">
          Confirm
        </button>
      </div>
    </Card>
  ),
};
