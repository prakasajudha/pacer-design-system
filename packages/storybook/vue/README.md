# PACER Storybook - Vue

Interactive component documentation untuk PACER Vue components.

## Running Storybook

```bash
# From root
pnpm storybook:vue

# Or from this directory
pnpm storybook
```

Storybook akan jalan di http://localhost:6007

## Adding New Stories

Buat file `.stories.ts` di `src/stories/`:

```ts
import type { Meta, StoryObj } from '@storybook/vue3';
import { YourComponent } from '@pertamina/design-system-vue';

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
