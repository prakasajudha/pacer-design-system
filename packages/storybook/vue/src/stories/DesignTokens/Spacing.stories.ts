import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';
import { spacing, borderRadius } from '@pacer-ui/tokens';

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Spacing & layout tokens: gap, padding, border radius. Imported dari @pacer-ui/tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// Import langsung dari tokens package
const spacingScale = [
  { token: '1', px: parseInt(spacing[1]) },
  { token: '2', px: parseInt(spacing[2]) },
  { token: '3', px: parseInt(spacing[3]) },
  { token: '4', px: parseInt(spacing[4]) },
  { token: '5', px: parseInt(spacing[5]) },
  { token: '6', px: parseInt(spacing[6]) },
  { token: '8', px: parseInt(spacing[8]) },
  { token: '10', px: parseInt(spacing[10]) },
  { token: '12', px: parseInt(spacing[12]) },
];

const radiusScale = [
  { token: 'rounded-none', px: parseInt(borderRadius.none) },
  { token: 'rounded-sm', px: parseInt(borderRadius.sm) },
  { token: 'rounded', px: parseInt(borderRadius.DEFAULT) },
  { token: 'rounded-md', px: parseInt(borderRadius.md) },
  { token: 'rounded-lg', px: parseInt(borderRadius.lg) },
  { token: 'rounded-xl', px: parseInt(borderRadius.xl) },
  { token: 'rounded-2xl', px: parseInt(borderRadius['2xl']) },
  { token: 'rounded-full', px: '50%' as const },
];

const gapSamples = [
  { label: 'gap-2 (8px)', gap: parseInt(spacing[2]) },
  { label: 'gap-4 (16px)', gap: parseInt(spacing[4]) },
  { label: 'gap-6 (24px)', gap: parseInt(spacing[6]) },
];

export const SpacingScale: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Spacing (4px base)'),
            h(
              'div',
              {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  alignItems: 'flex-end',
                },
              },
              spacingScale.map(({ token, px }) =>
                h('div', { key: token, style: { textAlign: 'center' } }, [
                  h('div', {
                    style: {
                      width: `${px}px`,
                      height: `${px}px`,
                      minWidth: '8px',
                      minHeight: '8px',
                      background: '#0156C6',
                      borderRadius: '4px',
                    },
                  }),
                  h('div', { style: { fontSize: '11px', marginTop: '6px' } }, `p-${token}`),
                  h('div', { style: { fontSize: '10px', color: '#64748B' } }, `${px}px`),
                ])
              )
            ),
          ]);
      },
    }),
};

export const BorderRadius: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Border Radius'),
            h(
              'div',
              {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  alignItems: 'flex-end',
                },
              },
              radiusScale.map(({ token, px }) =>
                h('div', { key: token, style: { textAlign: 'center' } }, [
                  h('div', {
                    style: {
                      width: '56px',
                      height: '56px',
                      background: '#E2E8F0',
                      borderRadius: typeof px === 'string' ? '50%' : `${px}px`,
                    },
                  }),
                  h('div', { style: { fontSize: '11px', marginTop: '6px' } }, token),
                  h('div', { style: { fontSize: '10px', color: '#64748B' } }, `${px}${typeof px === 'number' ? 'px' : ''}`),
                ])
              )
            ),
          ]);
      },
    }),
};

export const GapTokens: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Gap'),
            h('p', {
              style: { fontSize: '14px', color: '#64748B', marginBottom: '12px' },
            }, 'Same scale as spacing: gap-1 (4px), gap-2 (8px), gap-4 (16px), dll.'),
            h(
              'div',
              { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
              gapSamples.map(({ label, gap }) =>
                h('div', { key: label }, [
                  h('div', { style: { fontSize: '12px', color: '#64748B', marginBottom: '4px' } }, label),
                  h(
                    'div',
                    { style: { display: 'flex', gap: `${gap}px` } },
                    [1, 2, 3].map((i) =>
                      h('div', {
                        key: i,
                        style: { width: '40px', height: '40px', background: '#CBD5E1', borderRadius: '6px' },
                      })
                    )
                  ),
                ])
              )
            ),
          ]);
      },
    }),
};
