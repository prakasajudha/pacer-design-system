import type { Preview } from '@storybook/react';

// Use packaged design-system CSS (aliased in main.ts) + local Tailwind utilities
import '@pacer-ui/react/styles.css';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff',
        },

        dark: {
          name: 'dark',
          value: '#1a1a1a',
        },

        pertamina: {
          name: 'pertamina',
          value: '#005BAA',
        },
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },
};

export default preview;
