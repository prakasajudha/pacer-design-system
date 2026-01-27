# PtToast Component

Toast notification component untuk menampilkan notifikasi sementara di aplikasi.

## Features

- ✅ 5 Variants: `neutral`, `information`, `success`, `warning`, `error`
- ✅ Title dan Description support
- ✅ Custom icon support
- ✅ Auto close dengan delay (configurable)
- ✅ Manual close button
- ✅ API seperti toastify (useToast composable)
- ✅ ToastContainer untuk render toast di DOM

## Installation

```bash
npm install @pacer-ui/vue
```

## Basic Usage

### 1. Setup ToastContainer

Tambahkan `ToastContainer` di root component atau layout:

```vue
<template>
  <div>
    <!-- Your app content -->
    <RouterView />
    
    <!-- Toast Container -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { ToastContainer } from '@pacer-ui/vue';
</script>
```

### 2. Use Toast API

```vue
<script setup lang="ts">
import { useToast } from '@pacer-ui/vue';

const toast = useToast();

// Show toast
const showSuccess = () => {
  toast.success('Success!', 'Data berhasil disimpan');
};

const showError = () => {
  toast.error('Error!', 'Terjadi kesalahan saat menyimpan data');
};

const showWarning = () => {
  toast.warning('Warning!', 'Pastikan semua data sudah diisi');
};

const showInfo = () => {
  toast.information('Info', 'Sistem akan melakukan maintenance');
};

const showNeutral = () => {
  toast.neutral('Notification', 'Anda memiliki pesan baru');
};
</script>
```

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
}
```

## Examples

### Custom Duration

```typescript
// Toast akan auto close setelah 10 detik
toast.success('Success!', 'Data berhasil disimpan', {
  duration: 10000
});

// Toast tidak akan auto close
toast.error('Error!', 'Silakan coba lagi', {
  duration: 0
});
```

### Custom Icon

```vue
<script setup lang="ts">
import { useToast } from '@pacer-ui/vue';
import { h } from 'vue';

const toast = useToast();

const CustomIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
}, [
  h('path', { d: 'M12 2v20M2 12h20' })
]);

const showCustom = () => {
  toast.show({
    variant: 'information',
    title: 'Custom Icon',
    description: 'Toast dengan custom icon',
    icon: CustomIcon,
  });
};
</script>
```

### Manual Remove

```typescript
const toastId = toast.success('Success!', 'Data berhasil disimpan');

// Remove setelah 2 detik
setTimeout(() => {
  toast.remove(toastId);
}, 2000);
```

### Clear All

```typescript
// Clear semua toast
toast.clear();
```

## Global Toast Instance

Anda juga bisa menggunakan global toast instance:

```typescript
import { toast } from '@pacer-ui/vue';

// Langsung pakai tanpa useToast()
toast.success('Success!', 'Data berhasil disimpan');
```

## Component Props

Jika ingin menggunakan `PtToast` langsung sebagai component:

```vue
<template>
  <PtToast
    variant="success"
    title="Success!"
    description="Data berhasil disimpan"
    :duration="5000"
    @close="handleClose"
  />
</template>

<script setup lang="ts">
import { PtToast } from '@pacer-ui/vue';

const handleClose = () => {
  console.log('Toast closed');
};
</script>
```

## Styling

Toast menggunakan Tailwind CSS classes. Anda bisa customize dengan:

- `iconClassName` - Custom class untuk icon container
- `iconStyle` - Custom style untuk icon container

Toast container berada di `top-4 right-4` dengan `z-index: 9999`. Anda bisa override dengan CSS jika diperlukan.
