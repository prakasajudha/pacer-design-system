# Panduan Publish — PACER Design System (npm & NuGet)

Dokumen ini menjelaskan langkah persiapan dan cara publish package PACER:

- **npm**: package JS/TS (`@pacer-ui/tokens`, `@pacer-ui/tailwind-preset`, `@pacer-ui/react`, `@pacer-ui/vue`).
- **NuGet**: package Blazor (`Pertamina.DesignSystem.Blazor`).

**Baca dan selesaikan checklist sebelum eksekusi.**

---

## 1. Ringkasan Package yang Di-publish

| Package | Nama (npm / NuGet) | Publish? | Urutan |
|--------|---------------------|----------|--------|
| Tokens | `@pacer-ui/tokens` (npm) | ✅ Ya | 1 |
| Tailwind Preset | `@pacer-ui/tailwind-preset` (npm) | ✅ Ya | 2 |
| React | `@pacer-ui/react` (npm) | ✅ Ya | 3 |
| Vue | `@pacer-ui/vue` (npm) | ✅ Ya | 4 |
| **Blazor** | **`Pertamina.DesignSystem.Blazor` (NuGet)** | ✅ Ya | terpisah |
| Blazor build tools (Node) | `blazor-build-tools` (npm) | ❌ Tidak (private) | - |
| Root, Storybook, Web Docs, Templates | - | ❌ Tidak (private) | - |

- **npm**: urutan publish penting `tokens` → `tailwind-preset` → `react` / `vue` (dependency antarpackage).
- **Blazor**: publish ke **NuGet** (bukan npm), alur terpisah — lihat [§9 Publish Blazor ke NuGet](#9-publish-blazor-ke-nuget).

### Kalau hanya mau publish React & Vue saja

- **Tokens** — **tetap perlu** di-publish. React dan Vue memakai `@pacer-ui/tokens` di **dependencies**. Tanpa tokens di npm, `npm install @pacer-ui/react` atau `@pacer-ui/vue` akan gagal (npm tidak bisa resolve dependency).
- **Tailwind preset** — **tidak wajib** untuk sekadar bikin install React/Vue berhasil. Preset ada di **devDependencies** (hanya dipakai saat build di repo), jadi konsumen yang `npm i @pacer-ui/react` tidak meng-install preset. Kalau mau konsumen bisa pakai preset di `tailwind.config` mereka (mis. `presets: ['@pacer-ui/tailwind-preset']`), ya preset harus di-publish juga.

**Singkat:** Publish minimal agar React & Vue bisa di-install = **tokens + react + vue**. Tailwind preset opsional (tapi disarankan kalau mau konsumen pakai preset).

---

## 2. Prerequisites (Wajib Sebelum Publish)

### 2.1 Akun npm

- Daftar/login di [npmjs.com](https://www.npmjs.com/).
- Untuk scope `@pacer-ui`: buat **Organization** di npm dengan nama `pacer-ui`, atau pastikan Anda punya akses publish ke org tersebut.

### 2.2 Login npm di mesin lokal

```bash
npm login
```

Ikuti prompt: username, password, OTP (jika 2FA), email. Cek login:

```bash
npm whoami
```

### 2.3 Opsi: Token untuk CI (GitHub Actions)

Jika nanti publish lewat CI:

- npm: **Access tokens** → "Automation" atau "Publish" → copy token.
- Di repo GitHub: **Settings → Secrets and variables → Actions** → tambah secret `NPM_TOKEN` = token tersebut.

---

## 3. Pre-publish Checklist

Lakukan sekali (atau setiap kali ada perubahan kebijakan).

### 3.1 License

- Saat ini package memakai `"license": "UNLICENSED"`.
- **npm public**: biasanya pakai `"MIT"` atau `"Apache-2.0"`. Sesuaikan dengan kebijakan legal.
- **Private npm (bayar)**: `UNLICENSED` bisa dipakai; package tidak muncul di pencarian public.

Jika mengubah ke MIT:

- Tambah file `LICENSE` di root (isi teks MIT).
- Di setiap `package.json` yang di-publish, set `"license": "MIT"`.

### 3.2 Access (scope @pacer-ui)

- Di `.changeset/config.json` sudah ada `"access": "restricted"`.
- Artinya: package scope `@pacer-ui/*` pertama kali publish akan **restricted** (hanya bisa di-install oleh yang punya akses/org).
- Untuk **public** (siapa saja bisa `npm install @pacer-ui/react`): ganti ke `"access": "public"` di `.changeset/config.json`.

### 3.3 Repository & homepage (opsional)

- Di setiap `package.json` yang di-publish, bisa tambah:
  - `"repository": { "type": "git", "url": "https://github.com/prakasajudha/pacer-design-system.git" }`
  - `"homepage": "https://github.com/prakasajudha/pacer-design-system#readme"`

Root sudah punya; bisa diseragamkan ke tiap package.

### 3.4 Build & dependency workspace

- Pastikan **semua package yang akan di-publish** sudah bisa di-build tanpa error.
- `workspace:*` akan di-resolve ke versi konkret saat publish (changeset/publish akan urus).

Perintah cek:

```bash
pnpm install --frozen-lockfile
pnpm run build
```

Pastikan tidak ada error (termasuk `@pacer-ui/tokens`, `@pacer-ui/tailwind-preset`, `@pacer-ui/react`, `@pacer-ui/vue`).

---

## 4. Alur Publish dengan Changesets

Proyek ini memakai [Changesets](https://github.com/changesets/changesets). Alur standar:

1. **Buat changeset** (setiap ada perubahan yang mau dirilis).
2. **Version** (naikkan versi + update CHANGELOG).
3. **Publish** (build lalu publish ke npm).

### 4.1 Buat changeset

Setelah ada perubahan di satu atau lebih package:

```bash
pnpm changeset
```

- Pilih package yang berubah (space = pilih, enter = konfirmasi).
- Pilih tipe: **major** / **minor** / **patch**.
- Tulis summary singkat (akan masuk CHANGELOG).

Ini membuat file di `.changeset/*.md`. Commit file ini bersama perubahan kode.

### 4.2 Naikkan versi (version bump)

Saat mau rilis (biasanya dari branch release/main):

```bash
pnpm version:bump
```

atau:

```bash
pnpm exec changeset version
```

Ini akan:

- Mengupdate `version` di `package.json` yang punya changeset.
- Mengupdate `CHANGELOG.md`.
- Menghapus file changeset yang sudah diproses.

Lalu commit hasilnya, contoh:

```bash
git add .
git commit -m "chore: version bump for release"
```

### 4.3 Publish ke npm

**Lokal (setelah login npm):**

```bash
pnpm run release
```

Script ini = `turbo run build && changeset publish`:

1. Build semua package (sesuai turbo).
2. Publish ke npm hanya package yang versinya berubah (changeset).

Atau dua langkah terpisah:

```bash
pnpm run build
pnpm exec changeset publish
```

- Changeset akan urusi **urutan publish** (tokens → tailwind-preset → react/vue).
- **Workspace dependency** (`@pacer-ui/tokens`, `@pacer-ui/tailwind-preset`) akan diganti ke versi range yang sesuai (bukan `workspace:*`) saat publish.

### 4.4 Cek hasil di npm

- [npmjs.com/org/pacer-ui](https://www.npmjs.com/org/pacer-ui) (ganti jika org beda).
- Atau: `npm view @pacer-ui/react`, `npm view @pacer-ui/tokens`, dll.

---

## 5. Publikasi Pertama Kali (Tanpa Changeset Lama)

Jika ini **rilis pertama** dan belum ada changeset:

1. **Opsi A — Pakai changeset (disarankan)**  
   - Jalankan `pnpm changeset`.
   - Pilih semua package yang mau dirilis (tokens, tailwind-preset, react, vue).
   - Pilih **patch** (atau **minor** jika mau mulai 1.1.0).
   - Isi summary, misalnya: "Initial release".
   - Lalu: `pnpm version:bump` → commit → `pnpm run release`.

2. **Opsi B — Tanpa changeset (manual)**  
   - Pastikan versi di setiap `package.json` sudah benar (mis. `1.0.0`).
   - Build: `pnpm run build`.
   - Publish manual per package (urutan: tokens → tailwind-preset → react → vue):
     ```bash
     cd packages/design-system/tokens    && npm publish --access restricted
     cd ../tailwind                      && npm publish --access restricted
     cd ../react                         && npm publish --access restricted
     cd ../vue                           && npm publish --access restricted
     ```
   - Ganti `restricted` dengan `public` jika package mau public.

---

## 5b. Cara publish lagi (setelah ada perubahan)

1. **Buat changeset** (pilih package & tipe major/minor/patch):
   ```bash
   pnpm changeset
   ```
2. **Bump versi** (naikkan version di package.json + update CHANGELOG):
   ```bash
   pnpm version:bump
   ```
3. **Build** lalu **publish** (set NPM_TOKEN di env dulu):
   ```bash
   pnpm run build
   $env:NPM_TOKEN="your-npm-token"; pnpm exec changeset publish
   ```
   Atau satu langkah: `pnpm run release` (build + publish), dengan NPM_TOKEN sudah di-set.

Jika satu package gagal (mis. E409 Conflict), jalankan lagi `pnpm exec changeset publish` — hanya package yang belum terpublish yang akan di-publish.

---

## 6. Ringkasan Perintah (Quick Reference)

| Tujuan | Perintah |
|--------|----------|
| Login npm | `npm login` |
| Cek login | `npm whoami` |
| Buat changeset | `pnpm changeset` |
| Bump versi + CHANGELOG | `pnpm version:bump` |
| Build + publish | `pnpm run release` |
| Hanya build | `pnpm run build` |
| Hanya publish (setelah build) | `pnpm exec changeset publish` |

---

## 7. Opsi: Otomasi Publish lewat GitHub Actions

Untuk publish otomatis setiap push tag (mis. `v1.0.0`):

1. Tambah workflow `.github/workflows/release.yml` yang:
   - Trigger: `push` tags `v*`.
   - Checkout, setup Node, pnpm, install.
   - Build: `pnpm run build`.
   - Setup npm token dari secret `NPM_TOKEN`.
   - Jalankan `pnpm exec changeset publish`.

2. Proses rilis jadi:
   - Merge ke `main` → buat changeset → `version:bump` → commit & push.
   - Buat tag (mis. `git tag v1.0.0` dan push tag).
   - GitHub Actions jalan dan publish ke npm.

Detail workflow bisa ditambahkan di dokumen terpisah (mis. `docs/RELEASE_WORKFLOW.md`) jika diperlukan.

---

## 8. Hal yang Perlu Diperhatikan (npm)

- **Jangan publish root, storybook, web-docs, templates, blazor-build-tools** — mereka `private: true` atau bukan untuk dikonsumsi via npm.
- **OTP/2FA**: Jika npm pakai 2FA, saat `npm publish` atau `changeset publish` akan diminta OTP.
- **Rate limit**: npm punya rate limit; publish banyak package sekaligus biasanya tidak masalah untuk rilis normal.

Setelah checklist di atas selesai, Anda bisa menjalankan langkah di **§4** atau **§5** untuk eksekusi publish npm.

---

## 9. Publish Blazor ke NuGet

Blazor component library (**Pertamina.DesignSystem.Blazor**) di-publish ke **NuGet**, bukan npm. Folder yang dipakai: `packages/design-system/blazor/` (file `.csproj`), bukan `package.json` (blazor-build-tools itu private, hanya untuk build CSS).

### 9.1 Ringkasan package Blazor

| Item | Nilai |
|------|--------|
| Package ID | `Pertamina.DesignSystem.Blazor` |
| Versi (di .csproj) | `1.0.0` (edit manual di `<Version>`) |
| Target | .NET 8.0 |
| License (saat ini) | `PackageLicenseExpression`: Proprietary |

### 9.2 Prerequisites NuGet

1. **Akun NuGet.org**  
   Daftar/login di [nuget.org](https://www.nuget.org/).

2. **API Key**  
   - NuGet.org → **Account** → **API Keys** → **Create**.
   - Copy key (untuk CI simpan di GitHub Secret, mis. `NUGET_API_KEY`).

3. **Login dari mesin (opsional)**  
   ```bash
   dotnet nuget add source https://api.nuget.org/v3/index.json --name nuget.org
   # Pakai API key untuk push (bisa lewat CLI saat push)
   ```

### 9.3 Generate & pack

Package **tidak** di-generate otomatis saat build (`GeneratePackageOnBuild` = false). Untuk menghasilkan `.nupkg`:

**Opsi A — Pack dari CLI (disarankan untuk rilis):**

```bash
cd packages/design-system/blazor
dotnet pack -c Release
```

Output: `bin/Release/Pertamina.DesignSystem.Blazor.1.0.0.nupkg` (atau versi yang ada di `.csproj`).

**Opsi B — Aktifkan pack on build (untuk development):**

Di `Pertamina.DesignSystem.Blazor.csproj` set `<GeneratePackageOnBuild>true</GeneratePackageOnBuild>`. Untuk rilis resmi biasanya tetap pakai `dotnet pack -c Release`.

### 9.4 Publish ke NuGet.org

```bash
cd packages/design-system/blazor
dotnet nuget push bin/Release/Pertamina.DesignSystem.Blazor.*.nupkg --api-key YOUR_NUGET_API_KEY --source https://api.nuget.org/v3/index.json
```

Ganti `YOUR_NUGET_API_KEY` dengan API key dari NuGet.org. Jika pakai 2FA/API key, tidak perlu login interaktif.

### 9.5 Urutan & sinkronisasi versi

- **NuGet tidak ikut Changesets** (Changesets untuk npm). Versi Blazor naik manual di `.csproj` (`<Version>...</Version>`).
- Disarankan **sinkronkan versi mayor/minor** dengan rilis npm (mis. npm 1.2.0 → Blazor 1.2.0) agar konsisten “rilis PACER”.
- Urutan bebas: bisa publish Blazor sebelum/sesudah npm; tidak ada dependency npm ↔ NuGet.

### 9.6 Quick reference Blazor

| Tujuan | Perintah |
|--------|----------|
| Pack (buat .nupkg) | `cd packages/design-system/blazor && dotnet pack -c Release` |
| Push ke NuGet.org | `dotnet nuget push bin/Release/Pertamina.DesignSystem.Blazor.*.nupkg --api-key <KEY> --source https://api.nuget.org/v3/index.json` |
| Cek versi terpublish | Buka [nuget.org/packages/Pertamina.DesignSystem.Blazor](https://www.nuget.org/packages/Pertamina.DesignSystem.Blazor) |

### 9.7 Opsi: feed internal (Azure DevOps / private NuGet)

Jika pakai feed internal (bukan nuget.org):

- Ganti `--source` dengan URL feed (mis. `https://pkgs.dev.azure.com/org/_packaging/feed/nuget/v3/index.json`).
- Auth: pakai credential/pat yang sesuai (Azure Artifacts, dll.). Detail tergantung setup organisasi.
