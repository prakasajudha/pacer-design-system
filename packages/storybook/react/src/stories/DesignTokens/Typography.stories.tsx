import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { typography } from '@pacer-ui/tokens';

const meta = {
  id: 'design-tokens-typography',
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

export const FontSizes: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Font Sizes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {fontSizes.map(({ token, size, px }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <code style={{ fontSize: 12, color: '#64748B', minWidth: 90 }}>{token}</code>
            <span style={{ fontSize: size, fontFamily: 'sans-serif' }}>
              The quick brown fox
            </span>
            <span style={{ fontSize: 12, color: '#64748B' }}>{px}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Font Weights</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {fontWeights.map(({ token, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code style={{ fontSize: 12, color: '#64748B', minWidth: 110 }}>{token}</code>
            <span style={{ fontWeight: value as React.CSSProperties['fontWeight'], fontSize: 16 }}>
              The quick brown fox — {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Font Families</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #E2E8F0' }}>
            <th style={{ padding: '8px 12px' }}>Token</th>
            <th style={{ padding: '8px 12px' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
            <td style={{ padding: '8px 12px' }}><code>font-sans</code></td>
            <td style={{ padding: '8px 12px', color: '#64748B' }}>
              {typography.fontFamily.sans}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
            <td style={{ padding: '8px 12px' }}><code>font-serif</code></td>
            <td style={{ padding: '8px 12px', color: '#64748B' }}>
              {typography.fontFamily.serif}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
            <td style={{ padding: '8px 12px' }}><code>font-mono</code></td>
            <td style={{ padding: '8px 12px', color: '#64748B' }}>
              {typography.fontFamily.mono}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => {
    const leading = [
      { token: 'leading-4', px: typography.lineHeight[4] },
      { token: 'leading-5', px: typography.lineHeight[5] },
      { token: 'leading-6', px: typography.lineHeight[6] },
      { token: 'leading-8', px: typography.lineHeight[8] },
    ];
    return (
      <div>
        <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Line Heights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {leading.map(({ token, px }) => (
            <div key={token}>
              <code style={{ fontSize: 12, color: '#64748B' }}>{token}</code> — {px}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: px,
                  maxWidth: 280,
                  border: '1px dashed #E2E8F0',
                  padding: 8,
                  marginTop: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
