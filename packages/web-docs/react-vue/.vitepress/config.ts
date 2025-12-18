import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PACER Design System',
  description: 'Pertamina Patra Niaga Components & Experience Resources',
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Design Tokens', link: '/tokens' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is PACER?', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Card', link: '/components/card' },
        ],
      },
      {
        text: 'Design Tokens',
        items: [
          { text: 'Overview', link: '/tokens' },
        ],
      },
      {
        text: 'Patterns',
        items: [
          { text: 'Forms', link: '/patterns/forms' },
          { text: 'Navigation', link: '/patterns/navigation' },
          { text: 'Data Display', link: '/patterns/data-display' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'Contributing', link: '/contributing' },
          { text: 'Changelog', link: '/changelog' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/pertamina/design-system' }],
    footer: {
      message: 'Released under the Proprietary License.',
      copyright: 'Copyright © 2025 PT Pertamina Patra Niaga',
    },
  },
});
