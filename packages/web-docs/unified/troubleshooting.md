# Troubleshooting & Post-Mortem

Dokumentasi error dan masalah yang terjadi selama development PACER Design System beserta solusinya.

## Build & Development Errors

### 1. Storybook: "Failed to fetch dynamically imported module: preview.ts"

**Error:**
```
TypeError: Failed to fetch dynamically imported module: 
http://localhost:6006/.storybook/preview.ts
```

**Penyebab:**
Storybook mencoba import `@pacer-ui/vue/styles.css` atau `@pacer-ui/react/styles.css`, tetapi file `dist/styles.css` belum di-generate karena monorepo development setup. Di development, package design-system belum di-build sehingga `dist/` folder kosong.

**Solusi:**
Modifikasi `packages/storybook/{vue|react}/.storybook/main.ts` dengan fallback mechanism:

```typescript
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

async viteFinal(config) {
  const { mergeConfig } = await import('vite');

  // Check if dist/styles.css exists, otherwise use src/styles.css
  const distStylesPath = resolve(__dirname, '../../../design-system/vue/dist/styles.css');
  const srcStylesPath = resolve(__dirname, '../../../design-system/vue/src/styles.css');
  const stylesPath = existsSync(distStylesPath) ? distStylesPath : srcStylesPath;

  // Allow Vite to access files outside Storybook package root
  const repoRootPath = resolve(__dirname, '../../../../');

  return mergeConfig(config, {
    resolve: {
      alias: {
        '@pacer-ui/vue/styles.css': stylesPath,
      },
    },
    css: {
      postcss: resolve(__dirname, '../postcss.config.js'),
    },
    server: {
      fs: {
        allow: [repoRootPath],
      },
    },
  });
}
```

### 2. Watch Mode: dist/styles.css Hilang Saat Rebuild

**Error:**
File `dist/styles.css` terhapus saat menjalankan `vite build --watch` atau `tsup --watch`, menyebabkan Storybook error.

**Penyebab:**
- Vite default behavior: `build.emptyOutDir = true` (hapus semua file di `dist/`)
- Tsup default behavior: `clean = true` (hapus `dist/` sebelum build)

**Solusi:**

**Vue (`vite.config.ts`):**
```typescript
export default defineConfig({
  // ...
  build: {
    // ...
    emptyOutDir: false, // Jangan hapus dist/ saat rebuild
  },
});
```

**React (`tsup.config.ts`):**
```typescript
export default defineConfig({
  // ...
  clean: false, // Jangan hapus dist/ saat rebuild
});
```

### 3. TypeScript Build Error: "Module has no exported member"

**Error:**
```
src/components/IconButton.tsx(3,15): error TS2305: 
Module '"./Button"' has no exported member 'ButtonSize'.
```

**Penyebab:**
1. Type exports tidak defined di `Button.tsx`
2. Ada duplicate file `ui/button.tsx` (lowercase) dan `Button.tsx` (uppercase) - Windows case-insensitive filesystem menyebabkan TypeScript bingung

**Solusi:**

**Step 1:** Hapus file duplicate/old template:
```bash
rm packages/design-system/react/src/components/ui/button.tsx
```

**Step 2:** Export types di `Button.tsx`:
```typescript
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'link-primary'
  | 'link-secondary'
  | 'success'
  | 'warning'
  | 'error';

export type ButtonSize = 'sm' | 'md';

export type ButtonTone = 'primary' | 'destructive';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  // ...
}
```

**Step 3:** Extract types di `IconButton.tsx` (avoid direct import yang bermasalah):
```typescript
import type { ButtonProps } from './Button';

type ExtractVariant = NonNullable<ButtonProps['variant']>;
type ExtractSize = NonNullable<ButtonProps['size']>;
type ExtractTone = NonNullable<ButtonProps['tone']>;

export type IconButtonSize = 'xss' | 'xs' | ExtractSize;
export type IconButtonVariant = ExtractVariant;
export type IconButtonTone = ExtractTone;
```

### 4. Blazor: "Can't resolve '@pacer-ui/tailwind-preset'"

**Error:**
```
Tailwind CSS is unable to load your config file: 
Can't resolve '@pacer-ui/tailwind-preset' in 'C:\...\packages\design-system\blazor'
```

**Penyebab:**
Blazor package tidak punya `node_modules` lokal karena bukan JavaScript project. Tailwind CLI mencari preset di `node_modules` local.

**Solusi:**

**Option 1:** Run `pnpm install` di root workspace (akan install dependencies untuk semua packages termasuk Blazor):
```bash
cd /path/to/workspace/root
pnpm install
```

**Option 2:** Build CSS dari root workspace:
```bash
pnpm --filter @pacer-ui/blazor build:css
```

**Option 3:** Gunakan `npx tailwindcss` (fallback):
```bash
cd packages/design-system/blazor
npx tailwindcss -i ./styles/input.css -o ./wwwroot/css/pertamina-design-system.css --minify
```

## PowerShell & Terminal Errors

### 5. PowerShell: "The token '&&' is not a valid statement separator"

**Error:**
```powershell
The token '&&' is not a valid statement separator in this version.
```

**Penyebab:**
PowerShell versi lama tidak support `&&` operator untuk command chaining.

**Solusi:**

**Option 1:** Gunakan `cmd /c`:
```bash
cmd /c "cd /d \"C:\\path\\to\\project\" && pnpm run dev"
```

**Option 2:** Gunakan semicolon `;` di PowerShell:
```powershell
cd "C:\path\to\project"; pnpm run dev
```

**Option 3:** Update PowerShell ke versi 7+:
```powershell
winget install Microsoft.PowerShell
```

### 6. Port Already in Use (5174, 6006, 6007)

**Error:**
```
Port 6006 is already in use
```

**Solusi:**

**Step 1:** Cek process yang pakai port:
```bash
netstat -ano | findstr :6006
```

**Step 2:** Kill process by PID:
```bash
taskkill /F /PID 27312
```

**Step 3:** Verify port bebas:
```bash
netstat -ano | findstr :6006
```

Status `TIME_WAIT` normal dan akan hilang otomatis dalam 30-120 detik.

## Design System Implementation Errors

### 7. Button Styling Inconsistent Antara React & Vue

**Masalah:**
Implementasi Button di React berbeda dengan Vue (warna, padding, radius berbeda).

**Penyebab:**
Manual implementation tanpa single source of truth untuk styling logic.

**Solusi:**

**Step 1:** Gunakan Vue sebagai reference (karena paling sesuai Figma)

**Step 2:** Match React dengan Vue line-by-line:
```typescript
// Vue logic yang benar
const variantStyles = {
  primary: 'bg-brand-300 text-white hover:bg-brand-400',
  secondary: 'bg-white text-brand-300 border border-brand-300 hover:bg-brand-50',
  // ...
};

const sizeStyles = {
  sm: 'h-9 px-3 py-1.5 rounded-[6px]',
  md: 'h-10 px-3 py-2 rounded-[6px]',
};
```

**Step 3:** Verifikasi di Storybook bahwa visual match

### 8. Storybook Stories Berbeda Antara React & Vue

**Masalah:**
Struktur stories, argTypes description, dan contoh berbeda antara React & Vue Storybook.

**Penyebab:**
Development dilakukan terpisah tanpa koordinasi.

**Solusi:**

Gunakan Vue stories sebagai reference, samakan:
1. **Meta description** (harus identik)
2. **ArgTypes order** (variant, size, fullWidth, loading, disabled, tone, selected)
3. **ArgTypes description** (wording harus sama)
4. **Story names & order** (Playground, Secondary, Outline, Ghost, Link, LinkSecondary, Small, Large, Loading, Destructive, Selected, Disabled, WithIcons, FullWidth)
5. **Render pattern** (Vue pakai `render: (args) => (...)`, React juga pakai render function bukan inline args)

## Best Practices untuk Avoid Errors

### 1. Single Source of Truth
- **Design Tokens** (`@pacer-ui/tokens`) = single source untuk colors, spacing, typography
- **Vue Component** = reference implementation (paling dekat dengan Figma)
- **React & Blazor** = follow Vue implementation

### 2. Type Safety
- Selalu export types yang diperlukan component lain
- Gunakan `type` keyword untuk type-only exports
- Avoid circular dependencies dengan type extraction (`NonNullable<Props['field']>`)

### 3. Monorepo Development
- Selalu run `pnpm install` di root setelah add/update dependencies
- Build order penting: `tokens` → `tailwind` → `design-system` → `storybook`
- Gunakan `--filter` untuk build specific package: `pnpm --filter @pacer-ui/react build`

### 4. Cross-Platform Compatibility
- Gunakan `cmd /c` untuk run commands di Windows
- Hindari hardcoded paths, gunakan `path.resolve()`
- Test di Windows & Unix untuk ensure compatibility

### 5. Documentation
- Selalu update docs saat ada breaking change
- Tambahkan migration guide untuk deprecated props
- Dokumentasi error di troubleshooting page ini

## Reporting Issues

Jika menemukan error baru yang belum terdokumentasi:

1. **Dokumentasikan error message** (full stack trace)
2. **Catat step-by-step** yang menyebabkan error
3. **Dokumentasikan solusi** yang berhasil
4. **Update page ini** dengan informasi baru
5. **Share** dengan team untuk prevent error yang sama

## Helpful Commands

### Development
```bash
# Install all dependencies
pnpm install

# Build all packages
pnpm run build

# Build specific package
pnpm --filter @pacer-ui/react build

# Watch mode (development)
pnpm run dev

# Run Storybook
pnpm --filter @storybook-vue storybook
pnpm --filter @storybook-react storybook

# Run docs
pnpm --filter @pacer-ui/web-docs dev
```

### Debugging
```bash
# Check port usage
netstat -ano | findstr :6006

# Kill process
taskkill /F /PID <PID>

# Clean all dist folders
pnpm run clean

# Rebuild CSS
pnpm --filter @pacer-ui/vue build:css
pnpm --filter @pacer-ui/react build:css

# Check TypeScript errors
pnpm --filter @pacer-ui/react tsc --noEmit
```

### Git
```bash
# Reset to clean state (DANGER)
git clean -fdx
pnpm install
pnpm run build
```

## Version History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-20 | Initial post-mortem documentation | AI Assistant |

---

Jika ada pertanyaan atau menemukan error lain, silakan update dokumentasi ini! 📝

