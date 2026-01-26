import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { spacing, borderRadius } from '@pacer-ui/tokens';

const meta = {
  id: 'design-tokens-spacing',
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Spacing & layout tokens: gap, padding, border radius. Imported dari @pacer-ui/tokens.',
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

export const SpacingScale: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Spacing (4px base)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
        {spacingScale.map(({ token, px }) => (
          <div key={token} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: px,
                height: px,
                minWidth: 8,
                minHeight: 8,
                background: '#0156C6',
                borderRadius: 4,
              }}
            />
            <div style={{ fontSize: 11, marginTop: 6 }}>p-{token}</div>
            <div style={{ fontSize: 10, color: '#64748B' }}>{px}px</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Border Radius</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
        {radiusScale.map(({ token, px }) => (
          <div key={token} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 56,
                height: 56,
                background: '#E2E8F0',
                borderRadius: typeof px === 'string' ? '50%' : px,
              }}
            />
            <div style={{ fontSize: 11, marginTop: 6 }}>{token}</div>
            <div style={{ fontSize: 10, color: '#64748B' }}>{String(px)}{typeof px === 'number' ? 'px' : ''}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const GapTokens: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Gap</h3>
      <p style={{ fontSize: 14, color: '#64748B', marginBottom: 12 }}>
        Same scale as spacing: gap-1 (4px), gap-2 (8px), gap-4 (16px), dll.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { label: 'gap-2 (8px)', gap: parseInt(spacing[2]) },
          { label: 'gap-4 (16px)', gap: parseInt(spacing[4]) },
          { label: 'gap-6 (24px)', gap: parseInt(spacing[6]) },
        ].map(({ label, gap }) => (
          <div key={label}>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 4 }}>{label}</div>
            <div style={{ display: 'flex', gap }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{ width: 40, height: 40, background: '#CBD5E1', borderRadius: 6 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
