import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PACER Blazor',
  description: 'Blazor Components - Pertamina Patra Niaga Design System',
  base: '/blazor/',
  ignoreDeadLinks: true,
  themeConfig: {
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
          { text: 'What is PACER Blazor?', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'PtButton', link: '/components/button' },
          { text: 'PtInput', link: '/components/input' },
          { text: 'PtCard', link: '/components/card' },
        ],
      },
      {
        text: 'Design Tokens',
        items: [{ text: 'Overview', link: '/tokens' }],
      },
      {
        text: 'Resources',
        items: [
          { text: 'API Reference', link: '/api-reference' },
          { text: 'Migration Guide', link: '/migration' },
        ],
      },
    ],
  },
});
