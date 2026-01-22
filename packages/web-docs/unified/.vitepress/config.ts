import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PACER Design System',
  description: 'Pertamina Patra Niaga Components & Experience Resources',
  markdown: {
    html: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Design Tokens', link: '/tokens' },
      { text: 'Contributing', link: '/contributing' },
      {
        text: 'Frameworks',
        items: [
          { text: 'React', link: '/frameworks/react' },
          { text: 'Vue', link: '/frameworks/vue' },
          { text: 'Blazor', link: '/frameworks/blazor' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/getting-started' },
          { text: 'Design Principles', link: '/design-principles' },
        ],
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'React', link: '/frameworks/react' },
          { text: 'Vue', link: '/frameworks/vue' },
          { text: 'Blazor', link: '/frameworks/blazor' },
        ],
      },
      {
        text: 'Design Tokens',
        items: [
          { text: 'Overview', link: '/tokens' },
          { text: 'Colors', link: '/tokens#color-tokens' },
          { text: 'Typography', link: '/tokens#typography-tokens' },
          { text: 'Spacing', link: '/tokens#spacing-tokens' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Button', link: '/components/button' },
          { text: 'Icon Button', link: '/components/icon-button' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Information', link: '/components/information' },
          { text: 'Input', link: '/components/input' },
          { text: 'Card', link: '/components/card' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Radio', link: '/components/radio' },
        ],
      },
      {
        text: 'Contributing',
        items: [
          { text: 'Add Components & Styles', link: '/contributing' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/pertamina/design-system' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Pertamina Patra Niaga',
    },
  },
});
