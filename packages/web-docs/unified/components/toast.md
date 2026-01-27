---
outline: deep
---

<ComponentHero title="Toast" description="Toast notification component untuk menampilkan notifikasi sementara di aplikasi. Mirip dengan toastify, dengan support untuk berbagai variant, position, dan auto close." />

<script setup lang="ts">
import { useToast, ToastContainer } from '@pacer-ui/vue';

const toast = useToast();

const showNeutral = () => {
  toast.neutral('Notification', 'Anda memiliki pesan baru');
};

const showInformation = () => {
  toast.information('Info', 'Sistem akan melakukan maintenance');
};

const showSuccess = () => {
  toast.success('Success!', 'Data berhasil disimpan');
};

const showWarning = () => {
  toast.warning('Warning!', 'Pastikan semua data sudah diisi');
};

const showError = () => {
  toast.error('Error!', 'Terjadi kesalahan saat menyimpan data');
};

const showCustomDuration = () => {
  toast.success('Success!', 'This toast will close after 10 seconds', {
    duration: 10000,
  });
};

const showNoAutoClose = () => {
  toast.error('Error!', 'This toast will not auto close', {
    duration: 0,
  });
};

const clearAll = () => {
  toast.clear();
};

const setTopLeft = () => {
  toast.setPosition('top-left');
  toast.success('Position Changed', 'Toast position set to top-left');
};

const setTopRight = () => {
  toast.setPosition('top-right');
  toast.success('Position Changed', 'Toast position set to top-right');
};

const setBottomRight = () => {
  toast.setPosition('bottom-right');
  toast.success('Position Changed', 'Toast position set to bottom-right');
};
</script>

<ToastContainer />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Toast component terdiri dari:

- **Icon**: Icon default sesuai variant atau custom icon
- **Content**: Title dan description
- **Close Button**: Tombol untuk menutup toast secara manual
- **Container**: Area yang menampung toast dengan background dan border sesuai variant

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Toast Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Toast Anatomy Diagram 2" />
  </div>
</div>

## Variants

Toast supports 5 variants:

- `neutral` (default): Background putih, border slate-200, icon & teks slate-600/900
- `information`: Background brand-50, border brand-200, icon & teks brand-600/900
- `success`: Background green-50, border green-200, icon & teks green-600/900
- `warning`: Background amber-50, border amber-200, icon & teks amber-600/900
- `error`: Background red-50, border red-200, icon & teks red-600/900

## Position

Toast dapat ditampilkan di 8 posisi berbeda:

- `top-left` - Pojok kiri atas
- `top` - Tengah atas
- `top-right` - Pojok kanan atas (default)
- `right` - Tengah kanan
- `bottom-right` - Pojok kanan bawah
- `bottom` - Tengah bawah
- `bottom-left` - Pojok kiri bawah
- `left` - Tengah kiri

## Auto Close

Toast secara default akan auto close setelah 5 detik. Anda dapat:

- Mengatur custom duration (dalam milliseconds)
- Menonaktifkan auto close dengan `duration: 0`

## Best Practices

- Gunakan toast untuk notifikasi sementara yang tidak memerlukan interaksi user
- Pilih variant yang sesuai dengan konteks (success untuk aksi berhasil, error untuk kesalahan, dll)
- Jangan terlalu banyak toast sekaligus (maksimal 3-4 toast)
- Untuk notifikasi penting yang memerlukan perhatian user, gunakan `duration: 0` atau Modal

</template>

<template #Implementation>

## Basic Usage

### 1. Setup ToastContainer

Tambahkan `ToastContainer` di root component atau layout:

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <p class="text-sm text-gray-600">ToastContainer harus ditambahkan di root component atau layout untuk menampilkan toast.</p>
  </div>

<template #react>

```tsx
import { ToastContainer } from '@pacer-ui/react';

function App() {
  return (
    <div>
      <RouterView />
      <ToastContainer />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { ToastContainer } from '@pacer-ui/vue';
</script>

<template>
  <div>
    <RouterView />
    <ToastContainer />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@* Di App.razor atau MainLayout.razor *@
<ToastContainer />
```

</template>

</ComponentDemo>

## Variants

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <div class="flex flex-wrap gap-2">
      <PtButton @click="showNeutral" variant="secondary" size="sm">Neutral</PtButton>
      <PtButton @click="showInformation" variant="secondary" size="sm">Information</PtButton>
      <PtButton @click="showSuccess" variant="solid" size="sm">Success</PtButton>
      <PtButton @click="showWarning" variant="secondary" size="sm">Warning</PtButton>
      <PtButton @click="showError" variant="solid" color="danger" size="sm">Error</PtButton>
    </div>
  </div>

<template #react>

```tsx
import { useToast, ToastContainer } from '@pacer-ui/react';

function App() {
  const toast = useToast();

  const showSuccess = () => {
    toast.success('Success!', 'Data berhasil disimpan');
  };

  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <ToastContainer />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { useToast, ToastContainer, PtButton } from '@pacer-ui/vue';

const toast = useToast();

const showSuccess = () => {
  toast.success('Success!', 'Data berhasil disimpan');
};
</script>

<template>
  <div>
    <PtButton @click="showSuccess">Show Success</PtButton>
    <ToastContainer />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@code {
    private void ShowSuccess()
    {
        Toast.Success("Success!", "Data berhasil disimpan");
    }
}

<PtButton OnClick="ShowSuccess">Show Success</PtButton>
<ToastContainer />
```

</template>

</ComponentDemo>

## Position

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <div class="flex flex-wrap gap-2">
      <PtButton @click="setTopLeft" variant="outline" size="sm">Top Left</PtButton>
      <PtButton @click="setTopRight" variant="outline" size="sm">Top Right</PtButton>
      <PtButton @click="setBottomRight" variant="outline" size="sm">Bottom Right</PtButton>
    </div>
  </div>

<template #react>

```tsx
import { useToast } from '@pacer-ui/react';

const toast = useToast();

// Set global position
toast.setPosition('bottom-right');

// Atau set position per-toast
toast.success('Success!', 'Data berhasil disimpan', {
  position: 'top-left'
});
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { useToast } from '@pacer-ui/vue';

const toast = useToast();

// Set global position
toast.setPosition('bottom-right');

// Atau set position per-toast
toast.success('Success!', 'Data berhasil disimpan', {
  position: 'top-left'
});
</script>
```

</template>

<template #blazor>

```razor
@code {
    private void SetPosition()
    {
        Toast.SetPosition(ToastPosition.BottomRight);
        Toast.Success("Position Changed", "Toast position set to bottom-right");
    }
}
```

</template>

</ComponentDemo>

## Custom Duration

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <div class="flex flex-wrap gap-2">
      <PtButton @click="showCustomDuration" variant="outline" size="sm">10 Seconds</PtButton>
      <PtButton @click="showNoAutoClose" variant="outline" size="sm">No Auto Close</PtButton>
      <PtButton @click="clearAll" variant="ghost" size="sm">Clear All</PtButton>
    </div>
  </div>

<template #react>

```tsx
// Toast akan auto close setelah 10 detik
toast.success('Success!', 'Data berhasil disimpan', {
  duration: 10000
});

// Toast tidak akan auto close
toast.error('Error!', 'Silakan coba lagi', {
  duration: 0
});
```

</template>

<template #vue>

```vue
<script setup lang="ts">
// Toast akan auto close setelah 10 detik
toast.success('Success!', 'Data berhasil disimpan', {
  duration: 10000
});

// Toast tidak akan auto close
toast.error('Error!', 'Silakan coba lagi', {
  duration: 0
});
</script>
```

</template>

<template #blazor>

```razor
@code {
    // Toast akan auto close setelah 10 detik
    Toast.Success("Success!", "Data berhasil disimpan", new ToastOptions 
    { 
        Duration = 10000 
    });

    // Toast tidak akan auto close
    Toast.Error("Error!", "Silakan coba lagi", new ToastOptions 
    { 
        Duration = 0 
    });
}
```

</template>

</ComponentDemo>

## API Reference

### useToast()

Composable untuk mengelola toast notifications.

#### Methods

- `toast.neutral(title, description?, options?)` - Show neutral toast
- `toast.information(title, description?, options?)` - Show information toast
- `toast.success(title, description?, options?)` - Show success toast
- `toast.warning(title, description?, options?)` - Show warning toast
- `toast.error(title, description?, options?)` - Show error toast
- `toast.show(options)` - Show custom toast
- `toast.remove(id)` - Remove toast by ID
- `toast.clear()` - Clear all toasts
- `toast.setPosition(position)` - Set global position untuk semua toast baru
- `toast.getPosition()` - Get current global position

#### Options

```typescript
interface ToastOptions {
  variant?: 'neutral' | 'information' | 'success' | 'warning' | 'error';
  title?: string;
  description?: string;
  icon?: any; // Custom icon component
  iconClassName?: string;
  iconStyle?: Record<string, string>;
  duration?: number; // Auto close delay in ms (0 = no auto close)
  position?: ToastPosition; // Override global position untuk toast ini
}
```

## Examples

### Manual Remove

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <p class="text-sm text-gray-600">Toast ID dapat digunakan untuk remove toast secara manual.</p>
  </div>

<template #react>

```tsx
const toastId = toast.success('Success!', 'Data berhasil disimpan');

// Remove setelah 2 detik
setTimeout(() => {
  toast.remove(toastId);
}, 2000);
```

</template>

<template #vue>

```vue
<script setup lang="ts">
const toastId = toast.success('Success!', 'Data berhasil disimpan');

// Remove setelah 2 detik
setTimeout(() => {
  toast.remove(toastId);
}, 2000);
</script>
```

</template>

<template #blazor>

```razor
@code {
    private string toastId = Toast.Success("Success!", "Data berhasil disimpan");
    
    private async Task RemoveToast()
    {
        await Task.Delay(2000);
        Toast.Remove(toastId);
    }
}
```

</template>

</ComponentDemo>

### Clear All

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtButton @click="clearAll" variant="ghost" size="sm">Clear All Toasts</PtButton>
  </div>

<template #react>

```tsx
// Clear semua toast
toast.clear();
```

</template>

<template #vue>

```vue
<script setup lang="ts">
// Clear semua toast
toast.clear();
</script>
```

</template>

<template #blazor>

```razor
@code {
    private void ClearAll()
    {
        Toast.Clear();
    }
}
```

</template>

</ComponentDemo>

## Global Toast Instance

Anda juga bisa menggunakan global toast instance tanpa perlu memanggil `useToast()`:

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <p class="text-sm text-gray-600">Global toast instance dapat digunakan langsung tanpa useToast().</p>
  </div>

<template #react>

```tsx
import { toast } from '@pacer-ui/react';

// Langsung pakai tanpa useToast()
toast.success('Success!', 'Data berhasil disimpan');
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { toast } from '@pacer-ui/vue';

// Langsung pakai tanpa useToast()
toast.success('Success!', 'Data berhasil disimpan');
</script>
```

</template>

<template #blazor>

```razor
@* Global toast instance tersedia langsung *@
@code {
    private void ShowToast()
    {
        Toast.Success("Success!", "Data berhasil disimpan");
    }
}
```

</template>

</ComponentDemo>

</template>

</PageTabs>
