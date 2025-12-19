# Frequently Asked Questions

## Apa itu PACER?

PACER (Pertamina Patra Niaga Components & Experience Resources) adalah design system multi-framework untuk React, Vue, dan Blazor dengan fokus pada konsistensi, aksesibilitas, dan kualitas produksi.

## Apakah harus memakai Tailwind?

Tidak wajib. Setiap paket sudah menyertakan CSS hasil build. Tailwind direkomendasikan jika ingin memanfaatkan token secara penuh atau membuat variasi gaya lanjutan.

## Bagaimana cara mengakses design tokens?

Install paket `@pacer-ui/tokens` kemudian gunakan objek token atau CSS variable yang disediakan.

```ts
import { colors, spacing } from '@pacer-ui/tokens';
```

## Kenapa style tidak muncul di aplikasi saya?

Periksa daftar berikut:

1. Pastikan `import '@pacer-ui/{framework}/styles.css';` sudah ditambahkan.
2. Tailwind `content` mencakup jalur komponen PACER.
3. Tidak ada konflik reset CSS lokal.

## Bagaimana alur update versi?

1. Lihat [CHANGELOG](https://github.com/pertamina/design-system/blob/main/CHANGELOG.md).
2. Perbarui paket menggunakan npm, pnpm, atau yarn.
3. Jalankan Storybook dan tes otomatis sebelum deploy.

## Ingin melaporkan bug atau kontribusi?

Silakan buka issue atau pull request setelah membaca [CONTRIBUTING](https://github.com/pertamina/design-system/blob/main/CONTRIBUTING.md).
