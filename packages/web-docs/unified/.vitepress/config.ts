import { defineConfig } from 'vitepress';

const GA_ID = 'G-7D5Z0KN1W5';

export default defineConfig({
  title: 'PACER Design System',
  description: 'Pertamina Patra Niaga Components & Experience Resources',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }],
    ['script', { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, defer: '' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
      `,
    ],
  ],
  markdown: {
    html: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      // { text: 'Guide', link: '/getting-started' },
      // { text: 'Components', link: '/components/' },
      // { text: 'Design Tokens', link: '/tokens' },
      // { text: 'Contributing', link: '/contributing' },
      // {
      //   text: 'Frameworks',
      //   items: [
      //     { text: 'React', link: '/frameworks/react' },
      //     { text: 'Vue', link: '/frameworks/vue' },
      //     { text: 'Blazor', link: '/frameworks/blazor' },
      //   ],
      // },
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
          { text: 'Blazor', link: '/frameworks/blazor' },
          { text: 'React', link: '/frameworks/react' },
          { text: 'Vue', link: '/frameworks/vue' },
        ],
      },
      {
        text: 'Design Tokens',
        items: [
          { text: 'Colors', link: '/tokens#color-tokens' },
          { text: 'Overview', link: '/tokens' },
          { text: 'Spacing', link: '/tokens#spacing-tokens' },
          { text: 'Typography', link: '/tokens#typography-tokens' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          {
            text: 'Basic Components',
            collapsed: true,
            items: [
              { text: 'Avatar', link: '/components/avatar' },
              { text: 'Badge', link: '/components/badge' },
              { text: 'Button', link: '/components/button' },
              { text: 'Card', link: '/components/card' },
              { text: 'Divider', link: '/components/divider' },
              { text: 'Icon Button', link: '/components/icon-button' },
              { text: 'Skeleton', link: '/components/skeleton' },
              { text: 'Tabs', link: '/components/tabs' },
            ],
          },
          {
            text: 'Disclosure',
            collapsed: true,
            items: [
              { text: 'Information', link: '/components/information' },
              { text: 'Modal', link: '/components/modal' },
              { text: 'Progress', link: '/components/progress' },
              { text: 'Tooltip', link: '/components/tooltip' },
            ],
          },
          {
            text: 'Form Components',
            collapsed: true,
            items: [
              { text: 'Checkbox', link: '/components/checkbox' },
              { text: 'Input', link: '/components/input' },
              { text: 'Pin Input', link: '/components/pin-input' },
              { text: 'Radio', link: '/components/radio' },
              { text: 'Switch', link: '/components/switch' },
              { text: 'Textarea', link: '/components/textarea' },
            ],
          },
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
