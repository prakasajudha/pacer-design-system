# Rekomendasi Versi — PACER Design System

Dokumen ini merangkum **versi React, Vue, dan .NET** yang dipakai dan direkomendasikan untuk penggunaan PACER Design System. Semua nilai mengacu ke konfigurasi aktual di monorepo.

---

## Ringkasan

| Stack | Versi yang direkomendasikan | Sumber di repo |
|-------|-----------------------------|----------------|
| **React** | **18.x** (minimal ^18.0.0, direkomendasikan 18.2+) | `packages/design-system/react/package.json` |
| **Vue** | **3.4.x** (minimal ^3.0.0, direkomendasikan 3.4+) | `packages/design-system/vue/package.json` |
| **.NET / Blazor** | **.NET 8** | `packages/design-system/blazor/Pertamina.DesignSystem.Blazor.csproj` |

---

## React

- **Rekomendasi:** **React 18.2+** (mis. `^18.2.0`).
- **Peer dependencies di @pacer-ui/react:** `react: ^18.0.0`, `react-dom: ^18.0.0`.
- **Dev/Storybook:** `react@^18.2.0`, `react-dom@^18.2.0`; `@types/react@^18.2.48`, `@types/react-dom@^18.2.18`.

Aplikasi konsumen sebaiknya memakai **React 18** (atau lebih baru) agar kompatibel dengan peer dan API yang dipakai (mis. `createRoot`, React 18 lifecycle).

---

## Vue

- **Rekomendasi:** **Vue 3.4+** (mis. `^3.4.0`).
- **Peer dependency di @pacer-ui/vue:** `vue: ^3.0.0`.
- **Dev/Storybook/web-docs:** `vue@^3.4.15` (design-system), `vue@^3.4.0` (web-docs).

Gunakan **Vue 3.4+** agar sesuai dengan environment development dan dukungan Composition API/script setup yang dipakai di library dan docs.

---

## .NET / Blazor

- **Rekomendasi:** **.NET 8**.
- **Target framework:** `net8.0` di `Pertamina.DesignSystem.Blazor.csproj`.
- **Package:** `Microsoft.AspNetCore.Components.Web` Version="8.0.0".

Proyek Blazor (Server atau WebAssembly) yang memakai PACER Blazor harus target **.NET 8**.

---

## Lainnya (konsisten di monorepo)

| Dependency | Rekomendasi / catatan |
|------------|------------------------|
| **Node** | `>=18.0.0` (dari `engines` di root `package.json`) |
| **pnpm** | `>=8.0.0` (packageManager: `pnpm@8.15.0`) |
| **TypeScript** | `^5.3.x` (dipakai di react, vue, tokens, tailwind) |
| **Tailwind CSS** | `^3.4.0` (peer/dev di react, vue, tailwind-preset) |
| **Vite** | `^5.0.11` (vue, storybook) |
| **Storybook** | `^8.6.15` (react & vue) |
| **VitePress** | `^1.0.0` (web-docs unified) |

---

## Referensi file

- React peer & dev: `packages/design-system/react/package.json`
- Vue peer & dev: `packages/design-system/vue/package.json`
- Blazor target & packages: `packages/design-system/blazor/Pertamina.DesignSystem.Blazor.csproj`
- Storybook React: `packages/storybook/react/package.json`
- Storybook Vue: `packages/storybook/vue/package.json`
- Web-docs: `packages/web-docs/unified/package.json`
- Root engines: `package.json` (root)

---

*Terakhir disesuaikan mengacu ke konfigurasi di repo (packages/design-system, storybook, web-docs, csproj).*
