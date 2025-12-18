# 🚀 PACER Quick Start

## Step-by-Step untuk Pemula

### 1️⃣ Instalasi Awal (Sekali Aja)

```bash
# Masuk ke folder project
cd "Design System"

# Install semua dependencies
pnpm install

# Build semua packages
pnpm build
```

**Tunggu sampai selesai (~5 menit pertama kali)**

---

### 2️⃣ Development Sehari-hari

#### Buka 3 Terminal:

**Terminal 1 - Watch Mode (Auto Rebuild):**

```bash
pnpm dev
```

Biarkan running, jangan ditutup!

**Terminal 2 - Preview React:**

```bash
pnpm storybook:react
```

Buka: http://localhost:6006

**Terminal 3 - Preview Vue:**

```bash
pnpm storybook:vue
```

Buka: http://localhost:6007

#### Edit Component:

**React:**

```bash
# File: packages/design-system/react/src/components/ui/button.tsx
# Edit → Save → Terminal 1 auto rebuild → Terminal 2 auto reload
```

**Vue:**

```bash
# File: packages/design-system/vue/src/components/PtButton.vue
# Edit → Save → Terminal 1 auto rebuild → Terminal 3 auto reload
```

**Design Tokens (Affects ALL):**

```bash
# File: packages/design-system/tokens/src/index.ts
# Edit → Save → SEMUA framework auto rebuild + reload!
```

---

### 3️⃣ Testing Changes Realtime

1. **Buka browser**: localhost:6006 (React) dan localhost:6007 (Vue)
2. **Edit file** di VSCode
3. **Save** (Ctrl+S)
4. **Lihat perubahan** langsung di browser (1-2 detik)

**Tidak perlu:**

- ❌ Manual refresh browser
- ❌ Restart server
- ❌ Re-build manual

**Semuanya otomatis!** ✨

---

### 4️⃣ Publish Package (Saat Siap Release)

```bash
# 1. Describe changes
pnpm changeset
# → Select packages yang berubah
# → Pilih version type (patch/minor/major)
# → Tulis summary

# 2. Update versions
pnpm version:bump

# 3. Build production
pnpm build

# 4. Publish to NPM
pnpm release

# 5. Publish Blazor to NuGet
cd packages/design-system/blazor
dotnet nuget push ./nupkg/*.nupkg --api-key YOUR_KEY --source https://api.nuget.org/v3/index.json
```

---

### 5️⃣ Deploy Documentation (Auto via GitHub)

**Push ke GitHub:**

```bash
git add .
git commit -m "Update components"
git push
```

**GitHub Actions otomatis:**

- ✅ Build Storybook React
- ✅ Build Storybook Vue
- ✅ Build Web Docs
- ✅ Deploy ke GitHub Pages

**Akses hasil:**

- `https://your-org.github.io/pacer/storybook/react/`
- `https://your-org.github.io/pacer/storybook/vue/`
- `https://your-org.github.io/pacer/docs/`

---

## 🎯 Perintah Penting

| Kapan                | Command                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Install pertama kali | `pnpm install`                                                                                      |
| Setiap mulai coding  | `pnpm dev` (Terminal 1)<br>`pnpm storybook:react` (Terminal 2)<br>`pnpm storybook:vue` (Terminal 3) |
| Cek error            | `pnpm lint`                                                                                         |
| Run tests            | `pnpm test`                                                                                         |
| Build production     | `pnpm build`                                                                                        |
| Publish packages     | `pnpm release`                                                                                      |

---

## 📁 File Penting untuk Edit

```
packages/design-system/
├── tokens/src/index.ts          ← Design tokens (colors, spacing, etc)
├── react/src/components/ui/     ← React components
├── vue/src/components/          ← Vue components
└── blazor/Components/           ← Blazor components
```

---

## 🆘 Troubleshooting

**Error saat build?**

```bash
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

**Storybook tidak update?**

```bash
# Restart storybook
Ctrl+C (stop)
pnpm storybook:react  # start lagi
```

**Changes tidak keliatan?**

```bash
# Hard refresh browser
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

## 📚 Dokumentasi Lengkap

Baca file ini untuk detail lebih lengkap:

- `COMPLETE_GUIDE.md` - Panduan lengkap (Install, Dev, Deploy, Publish)
- `DEVELOPMENT_WORKFLOW.md` - Development workflow detail
- `SETUP.md` - Setup awal

---

## ✅ Checklist Harian

- [ ] Run `pnpm dev` di Terminal 1
- [ ] Run `pnpm storybook:react` di Terminal 2
- [ ] Run `pnpm storybook:vue` di Terminal 3
- [ ] Edit components
- [ ] Check preview di browser
- [ ] Run `pnpm lint` sebelum commit
- [ ] Commit & push changes

**Happy Coding! 🎉**
