<ComponentHero title="Modal" description="Modal digunakan untuk menampilkan dialog atau overlay yang membutuhkan interaksi user. Menggunakan compound components pattern untuk fleksibilitas maksimal." />

<script setup lang="ts">
import { ref, h } from 'vue';

const isOpen = ref(false);
const isOpen2 = ref(false);

// Info icon component
const InfoIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4'
}, [
  h('circle', { cx: '8', cy: '8', r: '6' }),
  h('path', { d: 'M8 6v2M8 10h.01' })
]);
</script>

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Modal component terdiri dari:

- **Overlay/Backdrop**: Background overlay yang menutupi halaman
- **Modal Container**: Container utama modal
- **Modal Header**: Header dengan title, description, dan close button
- **Modal Body**: Body content
- **Modal Footer**: Footer dengan action buttons

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Modal Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Modal Anatomy Diagram 2" />
  </div>
</div>

## Components

Modal menggunakan compound components pattern dengan 4 komponen utama:

- **`PtModal`** (Vue) / **`Modal`** (React) / **`PtModal`** (Blazor): Container utama dengan overlay dan backdrop
- **`PtModalHeader`** (Vue) / **`ModalHeader`** (React) / **`PtModalHeader`** (Blazor): Header dengan title, description, icon
- **`PtModalBody`** (Vue) / **`ModalBody`** (React) / **`PtModalBody`** (Blazor): Body content
- **`PtModalFooter`** (Vue) / **`ModalFooter`** (React) / **`PtModalFooter`** (Blazor): Footer dengan action buttons

## Sizes

Modal supports three sizes:

- **`sm`**: max-width 400px
- **`md`**: max-width 500px (default)
- **`lg`**: max-width 600px

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
<ClientOnly>
  <div class="flex flex-col gap-4">
    <!-- Primary information modal -->
    <div class="flex items-center gap-3">
      <PtButton variant="solid" size="sm" @click="isOpen = true">
        Open information modal
      </PtButton>
    </div>
    <PtModal v-model:open="isOpen" size="md">
      <PtModalHeader 
        title="Invite team member" 
        description="Undang anggota tim baru untuk berkolaborasi dalam project ini."
        :icon="InfoIcon"
      />
      <PtModalBody>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-medium text-slate-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              class="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            />
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-600 mb-1">Role</label>
            <select
              class="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
            >
              <option selected>Member</option>
              <option>Admin</option>
              <option>Viewer</option>
            </select>
          </div>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen = false"
        :on-confirm="() => isOpen = false"
      />
    </PtModal>
  </div>
</ClientOnly>

<template #react>

```tsx
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@pacer-ui/react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
        <ModalHeader 
          title="Title" 
          description="Description"
          icon={InfoIcon}
        />
        <ModalBody>
          <p>Modal content here</p>
        </ModalBody>
        <ModalFooter 
          onCancel={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<template>
  <div>
    <PtButton @click="isOpen = true">Open Modal</PtButton>
    <PtModal v-model:open="isOpen" size="md">
      <PtModalHeader 
        title="Title" 
        description="Description"
        :icon="InfoIcon"
      />
      <PtModalBody>
        <p>Modal content here</p>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen = false"
        :on-confirm="() => isOpen = false"
      />
    </PtModal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton } from '@pacer-ui/vue';

const isOpen = ref(false);
</script>
```

</template>

<template #blazor>

```razor
@page "/modal-example"

<PtButton Variant="solid" Size="sm" OnClick="OpenModal">Open Modal</PtButton>

<PtModal @bind-Open="isOpen" Size="ModalSize.Md">
    <PtModalHeader 
        Title="Title" 
        Description="Description"
        Icon="@InfoIcon" />
    <PtModalBody>
        <p>Modal content here</p>
    </PtModalBody>
    <PtModalFooter 
        OnCancel="CloseModal"
        OnConfirm="CloseModal" />
</PtModal>

@code {
    private bool isOpen = false;

    private void OpenModal() => isOpen = true;
    private void CloseModal() => isOpen = false;
}
```

</template>
</ComponentDemo>

## API Reference

### Props

#### PtModal / Modal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` / `v-model:open` | `boolean` | `false` | Controlled open state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size modal |
| `closeOnOverlayClick` | `boolean` | `true` | Close modal ketika klik overlay |
| `closeOnEscape` | `boolean` | `true` | Close modal ketika tekan Escape |

#### PtModalHeader / ModalHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Title text |
| `description` | `string` | `undefined` | Description text |
| `icon` | `Component` | `undefined` | Icon di sebelah kiri title |
| `showCloseButton` | `boolean` | `true` | Tampilkan close button |

#### PtModalFooter / ModalFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onCancel` | `function` | `undefined` | Cancel button handler |
| `onConfirm` | `function` | `undefined` | Confirm button handler |
| `onCancelText` | `string` | `"Cancel"` | Text untuk Cancel button |
| `onConfirmText` | `string` | `"Continue"` | Text untuk Confirm button |

## Accessibility

Modal component sudah dilengkapi dengan:

- **ARIA attributes**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **Keyboard navigation**: Escape key untuk menutup modal
- **Focus management**: Focus trap
- **Body scroll lock**: Mencegah scroll pada body ketika modal terbuka

</template>

</PageTabs>