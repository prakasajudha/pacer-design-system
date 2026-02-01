# Rekomendasi API Accordion

## Kenapa compound components?

- **Nyaman dipakai**: Developer bebas isi trigger/body (teks, ikon, custom markup).
- **Konsisten dengan design system**: Pola sama seperti Tabs (`Tabs` > `TabsList` / `TabsTrigger` / `TabsContent`) dan Modal (`Modal` > `ModalHeader` / `ModalBody` / `ModalFooter`).
- **Aksesibilitas & kontrol**: Setiap item punya `value`, bisa controlled/uncontrolled, single/multiple.

## Struktur yang dipakai

```
<Accordion type="single" defaultValue="a">
  <AccordionItem value="a">
    <AccordionTrigger>Judul 1</AccordionTrigger>
    <AccordionContent>Isi panel 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Judul 2</AccordionTrigger>
    <AccordionContent>Isi panel 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Nama komponen:**
- **AccordionTrigger** = tombol yang diklik (bisa disebut "AccordionButton" di dokumentasi).
- **AccordionContent** = panel yang expand/collapse (bisa disebut "AccordionBody" di dokumentasi).

Nama `Trigger` + `Content` mengikuti konvensi Radix/Headless UI dan selaras dengan Tabs (`TabsTrigger` / `TabsContent`).

## Alternatif: data-driven

Jika nanti butuh API lebih ringkas untuk list dari data:

```tsx
<Accordion type="single" items={[
  { value: 'a', trigger: 'Judul 1', content: 'Isi 1' },
  { value: 'b', trigger: 'Judul 2', content: 'Isi 2' },
]} />
```

Bisa ditambah sebagai convenience API di atas compound components (internal tetap pakai AccordionItem/Trigger/Content).

## Ringkasan

| Keputusan | Pilihan |
|-----------|--------|
| API utama | Compound: Accordion > AccordionItem > AccordionTrigger + AccordionContent |
| Nama trigger/body | Trigger + Content (Button/Body hanya alias di docs bila perlu) |
| Single vs multiple | Prop `type="single" \| "multiple"` |
| Controlled | `value` + `onValueChange` (single: satu value, multiple: array) |
