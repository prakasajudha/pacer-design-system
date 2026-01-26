import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';
import { typography } from '@pacer-ui/tokens';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Typography tokens: font families, font sizes, font weights, dan line heights. Imported dari @pacer-ui/tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// Import langsung dari tokens package
const fontSizes = [
  { token: 'text-xs', size: typography.fontSize.xs, px: '12px' },
  { token: 'text-sm', size: typography.fontSize.sm, px: '14px' },
  { token: 'text-base', size: typography.fontSize.base, px: '16px' },
  { token: 'text-lg', size: typography.fontSize.lg, px: '18px' },
  { token: 'text-xl', size: typography.fontSize.xl, px: '20px' },
  { token: 'text-2xl', size: typography.fontSize['2xl'], px: '24px' },
  { token: 'text-3xl', size: typography.fontSize['3xl'], px: '30px' },
  { token: 'text-4xl', size: typography.fontSize['4xl'], px: '36px' },
  { token: 'text-5xl', size: typography.fontSize['5xl'], px: '48px' },
];

const fontWeights = [
  { token: 'font-thin', value: Number(typography.fontWeight.thin) },
  { token: 'font-light', value: Number(typography.fontWeight.light) },
  { token: 'font-normal', value: Number(typography.fontWeight.normal) },
  { token: 'font-medium', value: Number(typography.fontWeight.medium) },
  { token: 'font-semibold', value: Number(typography.fontWeight.semibold) },
  { token: 'font-bold', value: Number(typography.fontWeight.bold) },
];

const fontFamilies = [
  { token: 'font-sans', value: typography.fontFamily.sans },
  { token: 'font-serif', value: typography.fontFamily.serif },
  { token: 'font-mono', value: typography.fontFamily.mono },
];

const leading = [
  { token: 'leading-4', px: typography.lineHeight[4] },
  { token: 'leading-5', px: typography.lineHeight[5] },
  { token: 'leading-6', px: typography.lineHeight[6] },
  { token: 'leading-8', px: typography.lineHeight[8] },
];

export const FontSizes: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Font Sizes'),
            h(
              'div',
              { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
              fontSizes.map(({ token, size, px }) =>
                h('div', {
                  key: token,
                  style: { display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' },
                }, [
                  h('code', { style: { fontSize: '12px', color: '#64748B', minWidth: '90px' } }, token),
                  h('span', { style: { fontSize: size, fontFamily: 'sans-serif' } }, 'The quick brown fox'),
                  h('span', { style: { fontSize: '12px', color: '#64748B' } }, px),
                ])
              )
            ),
          ]);
      },
    }),
};

export const FontWeights: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Font Weights'),
            h(
              'div',
              { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
              fontWeights.map(({ token, value }) =>
                h('div', {
                  key: token,
                  style: { display: 'flex', alignItems: 'center', gap: '16px' },
                }, [
                  h('code', { style: { fontSize: '12px', color: '#64748B', minWidth: '110px' } }, token),
                  h('span', {
                    style: { fontWeight: value, fontSize: '16px' },
                  }, `The quick brown fox — ${value}`),
                ])
              )
            ),
          ]);
      },
    }),
};

export const FontFamilies: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Font Families'),
            h(
              'table',
              { style: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' } },
              [
                h('thead', [
                  h('tr', { style: { textAlign: 'left', borderBottom: '1px solid #E2E8F0' } }, [
                    h('th', { style: { padding: '8px 12px' } }, 'Token'),
                    h('th', { style: { padding: '8px 12px' } }, 'Value'),
                  ]),
                ]),
                h(
                  'tbody',
                  fontFamilies.map(({ token, value }) =>
                    h('tr', { key: token, style: { borderBottom: '1px solid #E2E8F0' } }, [
                      h('td', { style: { padding: '8px 12px' } }, [h('code', token)]),
                      h('td', { style: { padding: '8px 12px', color: '#64748B' } }, value),
                    ])
                  )
                ),
              ]
            ),
          ]);
      },
    }),
};

export const LineHeights: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Line Heights'),
            h(
              'div',
              { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
              leading.map(({ token, px }) =>
                h('div', { key: token }, [
                  h('div', { style: { fontSize: '12px', color: '#64748B', marginBottom: '4px' } }, `${token} — ${px}`),
                  h('div', {
                    style: {
                      fontSize: '14px',
                      lineHeight: px,
                      maxWidth: '280px',
                      border: '1px dashed #E2E8F0',
                      padding: '8px',
                    },
                  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'),
                ])
              )
            ),
          ]);
      },
    }),
};
