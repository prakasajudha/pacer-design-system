import type { Preview } from '@storybook/vue3';

// Use packaged design-system CSS (aliased in main.ts) + local Tailwind utilities
import '@pacer-ui/vue/styles.css';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Design Tokens', ['Colors', 'Typography', 'Spacing'], 'Components', ['Basic', 'Disclosure', 'Form']],
      },
    },
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
