import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors } from '@pacer-ui/tokens';

const meta = {
  id: 'design-tokens-colors',
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

const swatchStyle = (hex: string, height = 48, border?: string) =>
  ({
    background: hex,
    height,
    borderRadius: 8,
    border: border ?? (hex === '#FFFFFF' || hex === '#F8FAFC' || hex === '#F1F5F9' ? '1px solid #E2E8F0' : undefined),
  } as React.CSSProperties);

export const BrandColors: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Brand Colors</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8 }}>
        {brandScale.map(({ n, hex }) => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={swatchStyle(hex)} />
            <div style={{ fontSize: 12, marginTop: 4, fontWeight: 500 }}>{n}</div>
            <div style={{ fontSize: 10, color: '#64748B' }}>{hex}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const PertaminaOfficial: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Pertamina Official Colors</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {pertamina.map(({ name, hex }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={swatchStyle(hex, 64)} />
            <div style={{ fontSize: 14, marginTop: 8, fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: 12, color: '#64748B' }}>{hex}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const GrayScaleSlate: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Gray Scale — Slate</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: 8 }}>
        {slateScale.map(({ n, hex }) => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={swatchStyle(hex, 40)} />
            <div style={{ fontSize: 11, marginTop: 4 }}>{n}</div>
            <div style={{ fontSize: 9, color: '#64748B' }}>{hex}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SemanticRed: Story = {
  render: () => {
    const scale = [
      { n: '50', hex: colors.red[50] },
      { n: '500', hex: colors.red[500] },
      { n: '900', hex: colors.red[900] },
    ];
    return (
      <div>
        <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Semantic — Red (Error/Destructive)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8 }}>
          {scale.map(({ n, hex }) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={swatchStyle(hex, 40)} />
              <div style={{ fontSize: 11, marginTop: 4 }}>{n}</div>
              <div style={{ fontSize: 9, color: '#64748B' }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const SemanticGreen: Story = {
  render: () => {
    const scale = [
      { n: '50', hex: colors.green[50] },
      { n: '500', hex: colors.green[500] },
      { n: '900', hex: colors.green[900] },
    ];
    return (
      <div>
        <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Semantic — Green (Success)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8 }}>
          {scale.map(({ n, hex }) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={swatchStyle(hex, 40)} />
              <div style={{ fontSize: 11, marginTop: 4 }}>{n}</div>
              <div style={{ fontSize: 9, color: '#64748B' }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
