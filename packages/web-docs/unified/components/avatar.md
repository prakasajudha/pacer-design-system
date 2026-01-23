<ComponentHero title="Avatar" description="Avatar digunakan untuk menampilkan gambar profil atau inisial pengguna dengan berbagai ukuran dan bentuk. Mendukung mode single dan group dengan badge status." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Avatar component terdiri dari:

- **Container**: Area yang menampung gambar atau inisial
- **Image/Initials**: Gambar profil atau inisial yang ditampilkan
- **Badge** (optional): Indikator status (online, offline, atau icon) di pojok kanan bawah
- **Border**: Border putih untuk memisahkan avatar dari background

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Avatar Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Avatar Anatomy Diagram 2" />
  </div>
</div>

## Modes

Avatar supports two modes:

- `single` (default): Menampilkan satu avatar dengan optional badge
- `group`: Menampilkan beberapa avatar yang overlap dengan count badge

## Types

Avatar supports two types (hanya untuk single mode):

- `circle` (default): Bentuk bulat (rounded-full)
- `square`: Bentuk kotak dengan border radius sesuai ukuran

**Catatan**: Di mode group, type selalu `circle` dan diabaikan.

## Sizes

Avatar supports 7 sizes:

- `xxs`: 16px
- `xs`: 24px
- `sm`: 32px (default)
- `md`: 40px
- `lg`: 48px
- `xl`: 56px
- `2xl`: 64px

## Badge Types

Avatar badge supports 3 types (hanya untuk single mode):

- `online`: Badge hijau untuk status online
- `offline`: Badge abu-abu untuk status offline
- `icon`: Badge dengan icon custom (background brand-50)

</template>

<template #Implementation>

## Visual Preview

### Single Mode

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtAvatar mode="single" size="md" full-name="John Doe" />
    <PtAvatar mode="single" size="md" img="https://i.pravatar.cc/150?img=1" full-name="Jane Smith" />
    <PtAvatar mode="single" size="md" img="https://i.pravatar.cc/150?img=2" full-name="Bob Johnson" badge="online" />
    <PtAvatar mode="single" size="md" full-name="Alice Brown" badge="offline" />
  </div>

<template #react>

```tsx
import { Avatar } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar mode="single" size="md" fullName="John Doe" />
      <Avatar 
        mode="single" 
        size="md" 
        img="https://example.com/avatar.jpg" 
        fullName="Jane Smith" 
      />
      <Avatar 
        mode="single" 
        size="md" 
        img="https://example.com/avatar.jpg" 
        fullName="Bob Johnson" 
        badge="online" 
      />
      <Avatar 
        mode="single" 
        size="md" 
        fullName="Alice Brown" 
        badge="offline" 
      />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtAvatar } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtAvatar mode="single" size="md" full-name="John Doe" />
    <PtAvatar 
      mode="single" 
      size="md" 
      img="https://example.com/avatar.jpg" 
      full-name="Jane Smith" 
    />
    <PtAvatar 
      mode="single" 
      size="md" 
      img="https://example.com/avatar.jpg" 
      full-name="Bob Johnson" 
      badge="online" 
    />
    <PtAvatar 
      mode="single" 
      size="md" 
      full-name="Alice Brown" 
      badge="offline" 
    />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Md" FullName="John Doe" />
    <PtAvatar 
        Mode="AvatarMode.Single" 
        Size="AvatarSize.Md" 
        Img="https://example.com/avatar.jpg" 
        FullName="Jane Smith" />
    <PtAvatar 
        Mode="AvatarMode.Single" 
        Size="AvatarSize.Md" 
        Img="https://example.com/avatar.jpg" 
        FullName="Bob Johnson" 
        Badge="AvatarBadge.Online" />
    <PtAvatar 
        Mode="AvatarMode.Single" 
        Size="AvatarSize.Md" 
        FullName="Alice Brown" 
        Badge="AvatarBadge.Offline" />
</div>
```

</template>
</ComponentDemo>

### Group Mode

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtAvatar 
      mode="group" 
      size="md" 
      :show-group-count="3"
      :items="[
        { img: 'https://i.pravatar.cc/150?img=1', fullName: 'John Doe' },
        { img: 'https://i.pravatar.cc/150?img=2', fullName: 'Jane Smith' },
        { img: 'https://i.pravatar.cc/150?img=3', fullName: 'Bob Johnson' },
        { fullName: 'Alice Brown' }
      ]"
    />
  </div>

<template #react>

```tsx
import { Avatar } from '@pacer-ui/react';
import type { AvatarItem } from '@pacer-ui/react';

const items: AvatarItem[] = [
  { img: 'https://example.com/avatar1.jpg', fullName: 'John Doe' },
  { img: 'https://example.com/avatar2.jpg', fullName: 'Jane Smith' },
  { img: 'https://example.com/avatar3.jpg', fullName: 'Bob Johnson' },
  { fullName: 'Alice Brown' },
];

export default function App() {
  return (
    <Avatar 
      mode="group" 
      size="md" 
      showGroupCount={3}
      items={items}
    />
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtAvatar } from '@pacer-ui/vue';
import type { AvatarItem } from '@pacer-ui/vue';

const items: AvatarItem[] = [
  { img: 'https://example.com/avatar1.jpg', fullName: 'John Doe' },
  { img: 'https://example.com/avatar2.jpg', fullName: 'Jane Smith' },
  { img: 'https://example.com/avatar3.jpg', fullName: 'Bob Johnson' },
  { fullName: 'Alice Brown' },
];
</script>

<template>
  <PtAvatar 
    mode="group" 
    size="md" 
    :show-group-count="3"
    :items="items"
  />
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtAvatar 
    Mode="AvatarMode.Group" 
    Size="AvatarSize.Md" 
    ShowGroupCount="3"
    Items="@items" />

@code {
    private List<AvatarItem> items = new()
    {
        new AvatarItem { Img = "https://example.com/avatar1.jpg", FullName = "John Doe" },
        new AvatarItem { Img = "https://example.com/avatar2.jpg", FullName = "Jane Smith" },
        new AvatarItem { Img = "https://example.com/avatar3.jpg", FullName = "Bob Johnson" },
        new AvatarItem { FullName = "Alice Brown" }
    };
}
```

</template>
</ComponentDemo>

## All Sizes

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtAvatar mode="single" size="xxs" full-name="JD" />
    <PtAvatar mode="single" size="xs" full-name="JD" />
    <PtAvatar mode="single" size="sm" full-name="JD" />
    <PtAvatar mode="single" size="md" full-name="JD" />
    <PtAvatar mode="single" size="lg" full-name="JD" />
    <PtAvatar mode="single" size="xl" full-name="JD" />
    <PtAvatar mode="single" size="2xl" full-name="JD" />
  </div>

<template #react>

```tsx
import { Avatar } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar mode="single" size="xxs" fullName="JD" />
      <Avatar mode="single" size="xs" fullName="JD" />
      <Avatar mode="single" size="sm" fullName="JD" />
      <Avatar mode="single" size="md" fullName="JD" />
      <Avatar mode="single" size="lg" fullName="JD" />
      <Avatar mode="single" size="xl" fullName="JD" />
      <Avatar mode="single" size="2xl" fullName="JD" />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtAvatar } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtAvatar mode="single" size="xxs" full-name="JD" />
    <PtAvatar mode="single" size="xs" full-name="JD" />
    <PtAvatar mode="single" size="sm" full-name="JD" />
    <PtAvatar mode="single" size="md" full-name="JD" />
    <PtAvatar mode="single" size="lg" full-name="JD" />
    <PtAvatar mode="single" size="xl" full-name="JD" />
    <PtAvatar mode="single" size="2xl" full-name="JD" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Xxs" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Xs" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Sm" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Md" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Lg" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Xl" FullName="JD" />
    <PtAvatar Mode="AvatarMode.Single" Size="AvatarSize.Xxl" FullName="JD" />
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'single' \| 'group'` | `'single'` | Mode avatar: single atau group |
| `type` | `'circle' \| 'square'` | `'circle'` | Type avatar (diabaikan jika mode group) |
| `size` | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'sm'` | Ukuran avatar |
| `badge` | `'online' \| 'offline' \| 'icon'` | `undefined` | Badge status (hanya untuk single mode) |
| `img` | `string` | `undefined` | URL gambar avatar (hanya untuk single mode) |
| `iconImg` | `string` | `undefined` | URL icon untuk badge type icon (hanya untuk single mode) |
| `fullName` | `string` | `'User'` | Nama lengkap untuk generate initials (hanya untuk single mode) |
| `items` | `AvatarItem[]` | `[]` | Array avatar items (hanya untuk group mode) |
| `showGroupCount` | `number` | `1` | Jumlah maksimal avatar yang ditampilkan sebelum count badge (hanya untuk group mode) |

## Design Specifications

### Size Dimensions

| Size | Width × Height | Font Size | Badge Size |
|------|----------------|-----------|------------|
| `xxs` | 16px × 16px | 8px | 4px |
| `xs` | 24px × 24px | 12px | 6px |
| `sm` | 32px × 32px | 14px | 8px |
| `md` | 40px × 40px | 16px | 10px |
| `lg` | 48px × 48px | 18px | 12px |
| `xl` | 56px × 56px | 20px | 14px |
| `2xl` | 64px × 64px | 24px | 16px |

### Border Radius

- **Circle**: `9999px` (rounded-full)
- **Square**:
  - `xs`: `6px` (rounded-md)
  - `sm`, `md`: `8px` (rounded-lg)
  - `lg`, `xl`: `12px` (rounded-xl)
  - `2xl`: `16px` (rounded-2xl)

### Colors

- **Initials Background**: `slate-200` (#E2E8F0)
- **Initials Text**: `slate-950` (#020617)
- **Border**: `white` (#FFFFFF)
- **Badge Online**: `green-500` (#22C55E)
- **Badge Offline**: `slate-300` (#CBD5E1)
- **Badge Icon Background**: `brand-50` (#E6F0FE)

</template>

</PageTabs>