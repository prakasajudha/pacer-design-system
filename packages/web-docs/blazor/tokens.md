# Design Tokens

Design tokens are the visual design atoms of the PACER design system for Blazor.

## Colors

PACER uses a carefully crafted color palette that reflects Pertamina's brand identity.

<ColorPalette />

### Primary Colors

The primary color palette is based on Pertamina's brand blue.

```css
/* Primary Blue - Pertamina Brand */
#005BAA
```

<div style="background: #005BAA; height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0;">
  #005BAA - Pertamina Blue
</div>

### Color Scale

```css
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #005BAA;  /* Brand Color */
--primary-600: #004d91;
--primary-700: #003f78;
--primary-800: #00315f;
--primary-900: #002346;
```

### Semantic Colors

#### Success

<div style="background: #10b981; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin: 1rem 0;">
  #10b981 - Success
</div>

```css
--success-500: #10b981;
--success-600: #059669;
--success-700: #047857;
```

#### Warning

<div style="background: #f59e0b; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin: 1rem 0;">
  #f59e0b - Warning
</div>

```css
--warning-500: #f59e0b;
--warning-600: #d97706;
--warning-700: #b45309;
```

#### Danger

<div style="background: #ef4444; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin: 1rem 0;">
  #ef4444 - Danger
</div>

```css
--danger-500: #ef4444;
--danger-600: #dc2626;
--danger-700: #b91c1c;
```

#### Info

<div style="background: #3b82f6; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; margin: 1rem 0;">
  #3b82f6 - Info
</div>

```css
--info-500: #3b82f6;
--info-600: #2563eb;
--info-700: #1d4ed8;
```

### Neutral Colors

```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin: 1rem 0;">
  <div style="background: #f9fafb; height: 50px; border-radius: 4px; border: 1px solid #e5e7eb;"></div>
  <div style="background: #f3f4f6; height: 50px; border-radius: 4px; border: 1px solid #e5e7eb;"></div>
  <div style="background: #e5e7eb; height: 50px; border-radius: 4px;"></div>
  <div style="background: #d1d5db; height: 50px; border-radius: 4px;"></div>
  <div style="background: #9ca3af; height: 50px; border-radius: 4px;"></div>
  <div style="background: #6b7280; height: 50px; border-radius: 4px;"></div>
  <div style="background: #4b5563; height: 50px; border-radius: 4px;"></div>
  <div style="background: #374151; height: 50px; border-radius: 4px;"></div>
  <div style="background: #1f2937; height: 50px; border-radius: 4px;"></div>
  <div style="background: #111827; height: 50px; border-radius: 4px;"></div>
</div>

## Usage in Blazor

### Using Tailwind Classes

```razor
<div class="bg-primary-500 text-white p-4 rounded-lg">
    Pertamina Blue Background
</div>

<PtButton Variant="ButtonVariant.Primary">
    Primary Button (uses primary-500)
</PtButton>
```

### Using CSS Variables

```razor
<div style="background-color: var(--primary-500); color: white;">
    Custom styled element
</div>
```

### In Component Styles

```razor
@* MyComponent.razor *@
<div class="my-component">
    Content
</div>

<style>
.my-component {
    background-color: var(--primary-500);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    padding: var(--spacing-4);
}
</style>
```

## Spacing

Consistent spacing scale for margins, padding, and gaps.

<SpacingDemo />

## Typography

Typography tokens for consistent text styling.

| Token | Value | Usage |
|-------|-------|-------|
| `text-xs` | 0.75rem (12px) | Extra small |
| `text-sm` | 0.875rem (14px) | Small |
| `text-base` | 1rem (16px) | Body text |
| `text-lg` | 1.125rem (18px) | Large text |
| `text-xl` | 1.25rem (20px) | Heading 4 |
| `text-2xl` | 1.5rem (24px) | Heading 3 |
| `text-3xl` | 1.875rem (30px) | Heading 2 |
| `text-4xl` | 2.25rem (36px) | Heading 1 |

```razor
<h1 class="text-4xl font-bold">Large Heading</h1>
<p class="text-base">Body text content</p>
<small class="text-sm text-gray-600">Small caption</small>
```

## Border Radius

<BorderRadiusDemo />

## Shadows

<ShadowDemo />
