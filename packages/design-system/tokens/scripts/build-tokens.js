const fs = require('fs');
const path = require('path');

// Import tokens (akan di-load dari compiled JS)
const { tokens } = require('../dist/index.js');

const outputDir = path.join(__dirname, '../dist');

// 1. Generate JSON
const jsonPath = path.join(outputDir, 'tokens.json');
fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2));
console.log('✓ Generated tokens.json');

// 2. Generate CSS Custom Properties
const cssLines = [':root {'];

// Brand Colors
Object.entries(tokens.colors.brand).forEach(([key, value]) => {
    cssLines.push(`  --color-brand-${key}: ${value};`);
});

// Base Colors
Object.entries(tokens.colors.base).forEach(([key, value]) => {
    cssLines.push(`  --color-base-${key}: ${value};`);
});

// Pertamina Colors
Object.entries(tokens.colors.pertamina).forEach(([key, value]) => {
    cssLines.push(`  --color-pertamina-${key}: ${value};`);
});

// Color scales
['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'green', 'yellow', 'blue'].forEach((colorName) => {
    if (tokens.colors[colorName]) {
        Object.entries(tokens.colors[colorName]).forEach(([key, value]) => {
            cssLines.push(`  --color-${colorName}-${key}: ${value};`);
        });
    }
});

// Semantic Colors
['success', 'warning', 'error', 'info'].forEach((type) => {
    Object.entries(tokens.colors[type]).forEach(([key, value]) => {
        cssLines.push(`  --color-${type}-${key}: ${value};`);
    });
});

// Spacing
Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssLines.push(`  --spacing-${key}: ${value};`);
});

// Typography
cssLines.push(`  --font-family-sans: ${tokens.typography.fontFamily.sans};`);
cssLines.push(`  --font-family-serif: ${tokens.typography.fontFamily.serif};`);
cssLines.push(`  --font-family-mono: ${tokens.typography.fontFamily.mono};`);

Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    cssLines.push(`  --font-size-${key}: ${value};`);
});

Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
    cssLines.push(`  --font-weight-${key}: ${value};`);
});

Object.entries(tokens.typography.lineHeight).forEach(([key, value]) => {
    cssLines.push(`  --line-height-${key}: ${value};`);
});

// Border Radius
Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    const varName = key === 'DEFAULT' ? 'default' : key;
    cssLines.push(`  --radius-${varName}: ${value};`);
});

// Opacity
Object.entries(tokens.opacity).forEach(([key, value]) => {
    cssLines.push(`  --opacity-${key}: ${value};`);
});

// Max Width
Object.entries(tokens.maxWidth).forEach(([key, value]) => {
    cssLines.push(`  --max-width-${key}: ${value};`);
});

// Shadows
Object.entries(tokens.shadows).forEach(([key, value]) => {
    const varName = key === 'DEFAULT' ? 'default' : key;
    cssLines.push(`  --shadow-${varName}: ${value};`);
});

// Motion
Object.entries(tokens.motion.duration).forEach(([key, value]) => {
    cssLines.push(`  --duration-${key}: ${value};`);
});

Object.entries(tokens.motion.easing).forEach(([key, value]) => {
    cssLines.push(`  --easing-${key}: ${value};`);
});

// Z-Index
Object.entries(tokens.zIndex).forEach(([key, value]) => {
    cssLines.push(`  --z-index-${key}: ${value};`);
});

cssLines.push('}');

const cssPath = path.join(outputDir, 'tokens.css');
fs.writeFileSync(cssPath, cssLines.join('\n'));
console.log('✓ Generated tokens.css');

console.log('\n✓ All token artifacts generated successfully');
