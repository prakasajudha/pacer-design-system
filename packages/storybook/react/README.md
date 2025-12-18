# PACER Storybook - React

Interactive component documentation untuk PACER React components.

## Running Storybook

```bash
# From root
pnpm storybook:react

# Or from this directory
pnpm storybook
```

Storybook akan jalan di http://localhost:6006

## Adding New Stories

Buat file `.stories.tsx` di `src/stories/`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@pacer-ui/react';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props
  },
};
```
