# Changesets

Selamat datang di folder changesets! Ini digunakan untuk track perubahan package.

## Cara Menggunakan

Setelah membuat perubahan pada package:

```bash
pnpm changeset
```

Follow prompts untuk:
1. Pilih packages yang berubah
2. Tentukan type perubahan (major/minor/patch)
3. Tulis summary perubahan

Changesets akan digunakan untuk:
- Generate CHANGELOG.md
- Version bump packages
- Publish ke npm/NuGet

Jangan edit file changeset secara manual!
