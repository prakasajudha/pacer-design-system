# Design Tokens

Design tokens are the foundation of the PACER Design System. They ensure consistency across all frameworks (React, Vue, and Blazor) by providing a single source of truth for colors, spacing, typography, and other design decisions.

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain a consistent visual system.

## Why Design Tokens?

### ✅ Consistency

All frameworks use the exact same values for colors, spacing, and typography.

### ✅ Maintainability

Update a token once, and it propagates to all components across all frameworks.

### ✅ Scalability

Easy to add themes, dark mode, or brand variations.

### ✅ Framework Agnostic

Tokens work with React, Vue, Blazor, CSS, and more.

---

## Installation

::: code-group

```bash [npm]
npm install @pacer-ui/tokens
```

```bash [pnpm]
pnpm add @pacer-ui/tokens
```

```bash [yarn]
yarn add @pacer-ui/tokens
```

:::

---

## Color Tokens

### Brand Colors

Pertamina's primary brand colors - a deep, professional blue.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #E6F0FE; height: 48px; border-radius: 8px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">50</div>
    <div style="font-size: 10px; color: #64748B;">#E6F0FE</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #D9E9FE; height: 48px; border-radius: 8px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">100</div>
    <div style="font-size: 10px; color: #64748B;">#D9E9FE</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #B0D1FD; height: 48px; border-radius: 8px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">200</div>
    <div style="font-size: 10px; color: #64748B;">#B0D1FD</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #016BF8; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">300</div>
    <div style="font-size: 10px; color: #64748B;">#016BF8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0160DF; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">400</div>
    <div style="font-size: 10px; color: #64748B;">#0160DF</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0156C6; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">500</div>
    <div style="font-size: 10px; color: #64748B;">#0156C6</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0150BA; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">600</div>
    <div style="font-size: 10px; color: #64748B;">#0150BA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #014095; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">700</div>
    <div style="font-size: 10px; color: #64748B;">#014095</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #003070; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">800</div>
    <div style="font-size: 10px; color: #64748B;">#003070</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #002557; height: 48px; border-radius: 8px;"></div>
    <div style="font-size: 12px; margin-top: 4px; font-weight: 500;">900</div>
    <div style="font-size: 10px; color: #64748B;">#002557</div>
  </div>
</div>

```ts
const brand = {
  50: '#E6F0FE',
  100: '#D9E9FE',
  200: '#B0D1FD',
  300: '#016BF8',
  400: '#0160DF',
  500: '#0156C6', // Primary
  600: '#0150BA',
  700: '#014095',
  800: '#003070',
  900: '#002557',
};
```

### Pertamina Official Colors

The three official Pertamina brand colors.

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #ED1B2F; height: 64px; border-radius: 8px;"></div>
    <div style="font-size: 14px; margin-top: 8px; font-weight: 600;">Pertamina Red</div>
    <div style="font-size: 12px; color: #64748B;">#ED1B2F</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #006CB8; height: 64px; border-radius: 8px;"></div>
    <div style="font-size: 14px; margin-top: 8px; font-weight: 600;">Pertamina Blue</div>
    <div style="font-size: 12px; color: #64748B;">#006CB8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #ACC42A; height: 64px; border-radius: 8px;"></div>
    <div style="font-size: 14px; margin-top: 8px; font-weight: 600;">Pertamina Green</div>
    <div style="font-size: 12px; color: #64748B;">#ACC42A</div>
  </div>
</div>

```ts
const pertamina = {
  red: '#ED1B2F',
  blue: '#006CB8',
  green: '#ACC42A',
};
```

### Base Colors

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FFFFFF; height: 64px; border-radius: 8px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 14px; margin-top: 8px; font-weight: 600;">White</div>
    <div style="font-size: 12px; color: #64748B;">#FFFFFF</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #000000; height: 64px; border-radius: 8px;"></div>
    <div style="font-size: 14px; margin-top: 8px; font-weight: 600;">Black</div>
    <div style="font-size: 12px; color: #64748B;">#000000</div>
  </div>
</div>

---

## Gray Color Scales

We provide multiple gray scales for different aesthetic needs.

### Slate

Professional gray tones with cool undertones, ideal for modern interfaces.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #F8FAFC; height: 40px; border-radius: 6px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#F8FAFC</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F1F5F9; height: 40px; border-radius: 6px; border: 1px solid #E2E8F0;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#F1F5F9</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #E2E8F0; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#E2E8F0</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #CBD5E1; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#CBD5E1</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #94A3B8; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#94A3B8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #64748B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#64748B</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #475569; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#475569</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #334155; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#334155</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1E293B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#1E293B</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0F172A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#0F172A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #020617; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#020617</div>
  </div>
</div>

### Gray

Pure gray, neutral balance - perfect for general-purpose UI.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #F9FAFB; height: 40px; border-radius: 6px; border: 1px solid #E5E7EB;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#F9FAFB</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F3F4F6; height: 40px; border-radius: 6px; border: 1px solid #E5E7EB;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#F3F4F6</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #E5E7EB; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#E5E7EB</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #D1D5DB; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#D1D5DB</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #9CA3AF; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#9CA3AF</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #6B7280; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#6B7280</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #4B5563; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#4B5563</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #374151; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#374151</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1F2937; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#1F2937</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #111827; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#111827</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #030712; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#030712</div>
  </div>
</div>

### Zinc

Slightly warm gray - great for dark mode interfaces.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FAFAFA; height: 40px; border-radius: 6px; border: 1px solid #E4E4E7;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#FAFAFA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F4F4F5; height: 40px; border-radius: 6px; border: 1px solid #E4E4E7;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#F4F4F5</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #E4E4E7; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#E4E4E7</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #D4D4D8; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#D4D4D8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #A1A1AA; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#A1A1AA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #71717A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#71717A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #52525B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#52525B</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #3F3F46; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#3F3F46</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #27272A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#27272A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #18181B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#18181B</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #09090B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#09090B</div>
  </div>
</div>

### Neutral

True neutral gray - the most balanced option.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FAFAFA; height: 40px; border-radius: 6px; border: 1px solid #E5E5E5;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#FAFAFA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F5F5F5; height: 40px; border-radius: 6px; border: 1px solid #E5E5E5;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#F5F5F5</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #E5E5E5; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#E5E5E5</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #D4D4D4; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#D4D4D4</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #A3A3A3; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#A3A3A3</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #737373; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#737373</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #525252; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#525252</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #404040; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#404040</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #262626; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#262626</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #171717; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#171717</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0A0A0A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#0A0A0A</div>
  </div>
</div>

### Stone

Warm gray with brown undertones - great for organic, natural designs.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FAFAF9; height: 40px; border-radius: 6px; border: 1px solid #E7E5E4;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#FAFAF9</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F5F5F4; height: 40px; border-radius: 6px; border: 1px solid #E7E5E4;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#F5F5F4</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #E7E5E4; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#E7E5E4</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #D6D3D1; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#D6D3D1</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #A8A29E; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#A8A29E</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #78716C; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#78716C</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #57534E; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#57534E</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #44403C; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#44403C</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #292524; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#292524</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1C1917; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#1C1917</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #0C0A09; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#0C0A09</div>
  </div>
</div>

---

## Semantic Colors

### Red (Error/Destructive)

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FEF2F2; height: 40px; border-radius: 6px; border: 1px solid #FECACA;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#FEF2F2</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FEE2E2; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#FEE2E2</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FECACA; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#FECACA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FCA5A5; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#FCA5A5</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #F87171; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#F87171</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #EF4444; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#EF4444</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #DC2626; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#DC2626</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #B91C1C; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#B91C1C</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #991B1B; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#991B1B</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #7F1D1D; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#7F1D1D</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #450A0A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#450A0A</div>
  </div>
</div>

### Green (Success)

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #F0FDF4; height: 40px; border-radius: 6px; border: 1px solid #BBF7D0;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#F0FDF4</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #DCFCE7; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#DCFCE7</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #BBF7D0; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#BBF7D0</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #86EFAC; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#86EFAC</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #4ADE80; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#4ADE80</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #22C55E; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#22C55E</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #16A34A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#16A34A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #15803D; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#15803D</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #166534; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#166534</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #14532D; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#14532D</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #052E16; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#052E16</div>
  </div>
</div>

### Yellow (Warning)

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #FEFCE8; height: 40px; border-radius: 6px; border: 1px solid #FEF08A;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#FEFCE8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FEF9C3; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#FEF9C3</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FEF08A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#FEF08A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FDE047; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#FDE047</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #FACC15; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#FACC15</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #EAB308; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#EAB308</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #CA8A04; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#CA8A04</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #A16207; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#A16207</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #854D0E; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#854D0E</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #713F12; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#713F12</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #422006; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#422006</div>
  </div>
</div>

### Blue (Info)

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; margin: 16px 0;">
  <div style="text-align: center;">
    <div style="background: #EFF6FF; height: 40px; border-radius: 6px; border: 1px solid #BFDBFE;"></div>
    <div style="font-size: 11px; margin-top: 4px;">50</div>
    <div style="font-size: 9px; color: #64748B;">#EFF6FF</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #DBEAFE; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">100</div>
    <div style="font-size: 9px; color: #64748B;">#DBEAFE</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #BFDBFE; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">200</div>
    <div style="font-size: 9px; color: #64748B;">#BFDBFE</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #93C5FD; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">300</div>
    <div style="font-size: 9px; color: #64748B;">#93C5FD</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #60A5FA; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">400</div>
    <div style="font-size: 9px; color: #64748B;">#60A5FA</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #3B82F6; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">500</div>
    <div style="font-size: 9px; color: #64748B;">#3B82F6</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #2563EB; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">600</div>
    <div style="font-size: 9px; color: #64748B;">#2563EB</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1D4ED8; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">700</div>
    <div style="font-size: 9px; color: #64748B;">#1D4ED8</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1E40AF; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">800</div>
    <div style="font-size: 9px; color: #64748B;">#1E40AF</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #1E3A8A; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">900</div>
    <div style="font-size: 9px; color: #64748B;">#1E3A8A</div>
  </div>
  <div style="text-align: center;">
    <div style="background: #172554; height: 40px; border-radius: 6px;"></div>
    <div style="font-size: 11px; margin-top: 4px;">950</div>
    <div style="font-size: 9px; color: #64748B;">#172554</div>
  </div>
</div>

---

## Typography Tokens

### Font Families

| Token | Value |
|-------|-------|
| `font-sans` | Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |
| `font-serif` | Inter, Georgia, 'Times New Roman', serif |
| `font-mono` | Manrope, 'Fira Code', Consolas, Monaco, monospace |

### Font Sizes

| Token | Size | Pixels |
|-------|------|--------|
| `text-xs` | 0.75rem | 12px |
| `text-sm` | 0.875rem | 14px |
| `text-base` | 1rem | 16px |
| `text-lg` | 1.125rem | 18px |
| `text-xl` | 1.25rem | 20px |
| `text-2xl` | 1.5rem | 24px |
| `text-3xl` | 1.875rem | 30px |
| `text-4xl` | 2.25rem | 36px |
| `text-5xl` | 3rem | 48px |
| `text-6xl` | 3.75rem | 60px |
| `text-7xl` | 4.5rem | 72px |
| `text-8xl` | 6rem | 96px |
| `text-9xl` | 8rem | 128px |

### Font Weights

| Token | Weight |
|-------|--------|
| `font-thin` | 100 |
| `font-extralight` | 200 |
| `font-light` | 300 |
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |
| `font-extrabold` | 800 |
| `font-black` | 900 |

### Line Heights

| Token | Size | Pixels |
|-------|------|--------|
| `leading-3` | 0.75rem | 12px |
| `leading-4` | 1rem | 16px |
| `leading-5` | 1.25rem | 20px |
| `leading-6` | 1.5rem | 24px |
| `leading-7` | 1.75rem | 28px |
| `leading-8` | 2rem | 32px |
| `leading-9` | 2.25rem | 36px |
| `leading-10` | 2.5rem | 40px |

---

## Layout Tokens

### Border Radius

| Token | Size | Pixels |
|-------|------|--------|
| `rounded-none` | 0 | 0px |
| `rounded-sm` | 0.125rem | 2px |
| `rounded` | 0.25rem | 4px |
| `rounded-md` | 0.375rem | 6px |
| `rounded-lg` | 0.5rem | 8px |
| `rounded-xl` | 0.75rem | 12px |
| `rounded-2xl` | 1rem | 16px |
| `rounded-3xl` | 1.5rem | 24px |
| `rounded-full` | 9999px | Fully rounded |

### Gap / Spacing

| Token | Size | Pixels |
|-------|------|--------|
| `gap-0` | 0 | 0px |
| `gap-px` | 1px | 1px |
| `gap-0.5` | 0.125rem | 2px |
| `gap-1` | 0.25rem | 4px |
| `gap-1.5` | 0.375rem | 6px |
| `gap-2` | 0.5rem | 8px |
| `gap-3` | 0.75rem | 12px |
| `gap-4` | 1rem | 16px |
| `gap-5` | 1.25rem | 20px |
| `gap-6` | 1.5rem | 24px |
| `gap-7` | 1.75rem | 28px |
| `gap-8` | 2rem | 32px |
| `gap-9` | 2.25rem | 36px |
| `gap-10` | 2.5rem | 40px |
| `gap-11` | 2.75rem | 44px |
| `gap-12` | 3rem | 48px |
| `gap-14` | 3.5rem | 56px |
| `gap-16` | 4rem | 64px |
| `gap-18` | 4.5rem | 72px |
| `gap-20` | 5rem | 80px |
| `gap-24` | 6rem | 96px |
| `gap-28` | 7rem | 112px |
| `gap-32` | 8rem | 128px |
| `gap-64` | 16rem | 256px |

### Padding

| Token | Size | Pixels |
|-------|------|--------|
| `p-0` | 0 | 0px |
| `p-0.5` | 0.125rem | 2px |
| `p-1` | 0.25rem | 4px |
| `p-1.5` | 0.375rem | 6px |
| `p-2` | 0.5rem | 8px |
| `p-2.5` | 0.625rem | 10px |
| `p-3` | 0.75rem | 12px |
| `p-3.5` | 0.875rem | 14px |
| `p-4` | 1rem | 16px |
| `p-5` | 1.25rem | 20px |
| `p-6` | 1.5rem | 24px |
| `p-7` | 1.75rem | 28px |
| `p-8` | 2rem | 32px |
| `p-9` | 2.25rem | 36px |
| `p-10` | 2.5rem | 40px |
| `p-11` | 2.75rem | 44px |
| `p-12` | 3rem | 48px |

### Opacity

| Token | Value |
|-------|-------|
| `opacity-0` | 0% |
| `opacity-5` | 5% |
| `opacity-10` | 10% |
| `opacity-20` | 20% |
| `opacity-25` | 25% |
| `opacity-30` | 30% |
| `opacity-40` | 40% |
| `opacity-50` | 50% |
| `opacity-60` | 60% |
| `opacity-70` | 70% |
| `opacity-80` | 80% |
| `opacity-90` | 90% |
| `opacity-95` | 95% |
| `opacity-100` | 100% |

### Max Width

| Token | Size | Pixels |
|-------|------|--------|
| `max-w-xs` | 20rem | 320px |
| `max-w-sm` | 24rem | 384px |
| `max-w-md` | 28rem | 448px |
| `max-w-lg` | 32rem | 512px |
| `max-w-xl` | 36rem | 576px |
| `max-w-2xl` | 42rem | 672px |
| `max-w-3xl` | 48rem | 768px |
| `max-w-4xl` | 56rem | 896px |
| `max-w-5xl` | 64rem | 1024px |
| `max-w-6xl` | 72rem | 1152px |
| `max-w-7xl` | 80rem | 1280px |
| `max-w-screen-sm` | 40rem | 640px |
| `max-w-screen-md` | 48rem | 768px |
| `max-w-screen-lg` | 64rem | 1024px |
| `max-w-screen-xl` | 80rem | 1280px |
| `max-w-screen-2xl` | 96rem | 1536px |

---

## Shadow Tokens

<div style="display: grid; gap: 16px; margin: 16px 0;">
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div>
    <div>
      <div style="font-weight: 600;">shadow-sm</div>
      <code style="font-size: 12px;">0 1px 2px 0 rgba(0, 0, 0, 0.05)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10);"></div>
    <div>
      <div style="font-weight: 600;">shadow</div>
      <code style="font-size: 12px;">0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10);"></div>
    <div>
      <div style="font-weight: 600;">shadow-md</div>
      <code style="font-size: 12px;">0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10);"></div>
    <div>
      <div style="font-weight: 600;">shadow-lg</div>
      <code style="font-size: 12px;">0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10);"></div>
    <div>
      <div style="font-weight: 600;">shadow-xl</div>
      <code style="font-size: 12px;">0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"></div>
    <div>
      <div style="font-weight: 600;">shadow-2xl</div>
      <code style="font-size: 12px;">0 25px 50px -12px rgba(0, 0, 0, 0.25)</code>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
    <div style="width: 80px; height: 48px; background: white; border-radius: 6px; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);"></div>
    <div>
      <div style="font-weight: 600;">shadow-inner</div>
      <code style="font-size: 12px;">inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)</code>
    </div>
  </div>
</div>

---

## Using Tokens

### JavaScript/TypeScript

```ts
import { colors, spacing, typography, borderRadius, shadows } from '@pacer-ui/tokens';

// Use colors
const primaryColor = colors.brand[500]; // #0156C6
const errorColor = colors.red[500]; // #EF4444

// Use spacing
const padding = spacing[4]; // 16px

// Use typography
const fontSize = typography.fontSize['2xl']; // 1.5rem
```

### Tailwind CSS

Use the `@pacer-ui/tailwind-preset` for automatic integration:

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pacer-ui/tailwind-preset').default],
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
};
```

Then use in your components:

```html
<button class="bg-brand-500 text-base-white hover:bg-brand-600 px-4 py-2 rounded-md">
  Click me
</button>
```

---

## Best Practices

### ✅ Do

- Use tokens consistently across all components
- Prefer semantic tokens (success, error) over raw colors
- Use the spacing scale for all margins and padding
- Follow the typography scale for font sizes

### ❌ Don't

- Don't hard-code colors, use tokens
- Don't create custom spacing values outside the scale
- Don't mix token systems
- Don't override token values in components

---

## Related

- [Getting Started](/getting-started)
- [React Components](/frameworks/react)
- [Vue Components](/frameworks/vue)
