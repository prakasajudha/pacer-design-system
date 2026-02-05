import React from 'react';
import type { Preview } from '@storybook/react';

// Use packaged design-system CSS (aliased in main.ts) + local Tailwind utilities
import '@pacer-ui/react/styles.css';
import '../src/styles.css';

// Simple on/off toggle for Storybook maintenance page
// Set to true to show maintenance, false for normal stories
const isMaintenance = true;

const preview: Preview = {
  decorators: [
    (Story) =>
      isMaintenance
        ? React.createElement(
            'div',
            { className: 'sb-maintenance' },
            React.createElement(
              'div',
              { className: 'sb-maintenance-card' },
              React.createElement(
                'div',
                { className: 'sb-maintenance-icon', 'aria-hidden': 'true' },
                '⚙️',
              ),
              React.createElement(
                'h1',
                { className: 'sb-maintenance-title' },
                'Under Maintenance',
              ),
              React.createElement(
                'p',
                { className: 'sb-maintenance-text' },
                "We're updating our systems. Please check back soon.",
              ),
              React.createElement(
                'p',
                { className: 'sb-maintenance-sub' },
                '— PACER Design System',
              ),
            ),
          )
        : React.createElement(Story),
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
