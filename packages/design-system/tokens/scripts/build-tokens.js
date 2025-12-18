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

// Colors
Object.entries(tokens.colors.brand.primary).forEach(([key, value]) => {
    cssLines.push(`  --color-brand-primary-${key}: ${value};`);
});
Object.entries(tokens.colors.brand.secondary).forEach(([key, value]) => {
    cssLines.push(`  --color-brand-secondary-${key}: ${value};`);
});
Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    cssLines.push(`  --color-neutral-${key}: ${value};`);
});

// Success, Warning, Error, Info
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
cssLines.push(`  --font-family-mono: ${tokens.typography.fontFamily.mono};`);

Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    cssLines.push(`  --font-size-${key}: ${value};`);
});

// Border Radius
Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    const varName = key === 'DEFAULT' ? 'default' : key;
    cssLines.push(`  --radius-${varName}: ${value};`);
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
