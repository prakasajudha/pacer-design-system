import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, h } from 'vue';
import { colors } from '@pacer-ui/tokens';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Color tokens PACER Design System — brand, Pertamina resmi, gray scale, dan semantic (error/success/warning/info). Imported dari @pacer-ui/tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// Import langsung dari tokens package - single source of truth
const brandScale = Object.entries(colors.brand).map(([n, hex]) => ({ n, hex }));
const pertamina = [
  { name: 'Pertamina Red', hex: colors.pertamina.red },
  { name: 'Pertamina Blue', hex: colors.pertamina.blue },
  { name: 'Pertamina Green', hex: colors.pertamina.green },
];
const slateScale = Object.entries(colors.slate).map(([n, hex]) => ({ n, hex }));

const swatchStyle = (hex: string, height = 48) => {
  const needBorder = ['#FFFFFF', '#F8FAFC', '#F1F5F9'].includes(hex);
  return {
    background: hex,
    height: `${height}px`,
    borderRadius: '8px',
    border: needBorder ? '1px solid #E2E8F0' : undefined,
  };
};

export const BrandColors: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Brand Colors'),
            h(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: '8px',
                },
              },
              brandScale.map(({ n, hex }) =>
                h('div', { key: n, style: { textAlign: 'center' } }, [
                  h('div', { style: swatchStyle(hex) }),
                  h('div', { style: { fontSize: '12px', marginTop: '4px', fontWeight: 500 } }, n),
                  h('div', { style: { fontSize: '10px', color: '#64748B' } }, hex),
                ])
              )
            ),
          ]);
      },
    }),
};

export const PertaminaOfficial: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Pertamina Official Colors'),
            h(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                },
              },
              pertamina.map(({ name, hex }) =>
                h('div', { key: name, style: { textAlign: 'center' } }, [
                  h('div', { style: swatchStyle(hex, 64) }),
                  h('div', { style: { fontSize: '14px', marginTop: '8px', fontWeight: 600 } }, name),
                  h('div', { style: { fontSize: '12px', color: '#64748B' } }, hex),
                ])
              )
            ),
          ]);
      },
    }),
};

export const GrayScaleSlate: Story = {
  render: () =>
    defineComponent({
      setup() {
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Gray Scale — Slate'),
            h(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                  gap: '8px',
                },
              },
              slateScale.map(({ n, hex }) =>
                h('div', { key: n, style: { textAlign: 'center' } }, [
                  h('div', { style: swatchStyle(hex, 40) }),
                  h('div', { style: { fontSize: '11px', marginTop: '4px' } }, n),
                  h('div', { style: { fontSize: '9px', color: '#64748B' } }, hex),
                ])
              )
            ),
          ]);
      },
    }),
};

export const SemanticRed: Story = {
  render: () =>
    defineComponent({
      setup() {
        const scale = [
          { n: '50', hex: colors.red[50] },
          { n: '500', hex: colors.red[500] },
          { n: '900', hex: colors.red[900] },
        ];
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Semantic — Red (Error/Destructive)'),
            h(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: '8px',
                },
              },
              scale.map(({ n, hex }) =>
                h('div', { key: n, style: { textAlign: 'center' } }, [
                  h('div', { style: swatchStyle(hex, 40) }),
                  h('div', { style: { fontSize: '11px', marginTop: '4px' } }, n),
                  h('div', { style: { fontSize: '9px', color: '#64748B' } }, hex),
                ])
              )
            ),
          ]);
      },
    }),
};

export const SemanticGreen: Story = {
  render: () =>
    defineComponent({
      setup() {
        const scale = [
          { n: '50', hex: colors.green[50] },
          { n: '500', hex: colors.green[500] },
          { n: '900', hex: colors.green[900] },
        ];
        return () =>
          h('div', [
            h('h3', { style: { marginBottom: '16px', fontSize: '18px', fontWeight: 600 } }, 'Semantic — Green (Success)'),
            h(
              'div',
              {
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: '8px',
                },
              },
              scale.map(({ n, hex }) =>
                h('div', { key: n, style: { textAlign: 'center' } }, [
                  h('div', { style: swatchStyle(hex, 40) }),
                  h('div', { style: { fontSize: '11px', marginTop: '4px' } }, n),
                  h('div', { style: { fontSize: '9px', color: '#64748B' } }, hex),
                ])
              )
            ),
          ]);
      },
    }),
};
