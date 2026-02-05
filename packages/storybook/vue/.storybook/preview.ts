import { h } from 'vue';
import type { Preview } from '@storybook/vue3';

// Use packaged design-system CSS (aliased in main.ts) + local Tailwind utilities
import '@pacer-ui/vue/styles.css';
import '../src/styles.css';

// Simple on/off toggle for Storybook maintenance page
// Set to true to show maintenance, false for normal stories
const isMaintenance = true;

const preview: Preview = {
  decorators: [
    (Story) => ({
      components: { Story },
      setup() {
        return () =>
          isMaintenance
            ? h('div', { class: 'sb-maintenance' }, [
                h('div', { class: 'sb-maintenance-card' }, [
                  h('div', { class: 'sb-maintenance-icon', 'aria-hidden': 'true' }, '⚙️'),
                  h('h1', { class: 'sb-maintenance-title' }, 'Under Maintenance'),
                  h(
                    'p',
                    { class: 'sb-maintenance-text' },
                    "We're updating our systems. Please check back soon.",
                  ),
                  h('p', { class: 'sb-maintenance-sub' }, '— PACER Design System'),
                ]),
              ])
            : h(Story);
      },
    }),
  ],
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
