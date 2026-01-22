# Modal Component

Modal digunakan untuk menampilkan dialog atau overlay yang membutuhkan interaksi user. Menggunakan compound components pattern untuk fleksibilitas maksimal.

<script setup lang="ts">
import { ref, h } from 'vue';

const isOpen = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);
const isOpen6 = ref(false);
const isOpen7 = ref(false);
const isOpen8 = ref(false);
const isOpen9 = ref(false);

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

## Components

Modal menggunakan compound components pattern dengan 4 komponen utama:

- **`PtModal`** (Vue) / **`Modal`** (React) / **`PtModal`** (Blazor): Container utama dengan overlay dan backdrop
- **`PtModalHeader`** (Vue) / **`ModalHeader`** (React) / **`PtModalHeader`** (Blazor): Header dengan title, description, icon (support children untuk custom)
- **`PtModalBody`** (Vue) / **`ModalBody`** (React) / **`PtModalBody`** (Blazor): Body content
- **`PtModalFooter`** (Vue) / **`ModalFooter`** (React) / **`PtModalFooter`** (Blazor): Footer dengan auto-render buttons jika ada onCancel/onConfirm (support children untuk custom)

## Props

### PtModal / Modal

- **`open`** / **`v-model:open`** (Vue) / **`Open`** (Blazor): boolean
  - Controlled open state
- **`defaultOpen`**: boolean (default: `false`)
  - Default open state untuk uncontrolled mode
- **`size`**: `sm | md | lg` (default: `md`)
  - `sm`: max-width 400px
  - `md`: max-width 500px
  - `lg`: max-width 600px
- **`closeOnOverlayClick`**: boolean (default: `true`)
  - Close modal ketika klik overlay/backdrop
- **`closeOnEscape`**: boolean (default: `true`)
  - Close modal ketika tekan Escape key
- **`onOpenChange`** (React) / **`OpenChanged`** (Blazor): callback function
- **`onClose`** (React) / **`OnClose`** (Blazor): callback function

### PtModalHeader / ModalHeader

- **`title`**: string (optional)
  - Title text (jika tidak pakai children)
- **`description`**: string (optional)
  - Description text di bawah title (jika tidak pakai children)
- **`icon`**: Component (optional)
  - Icon di sebelah kiri title (jika tidak pakai children)
- **`showCloseButton`**: boolean (default: `true`)
  - Tampilkan close button di kanan
- **`children`**: custom header content
  - Jika ada children, props title/description/icon akan diabaikan

### PtModalBody / ModalBody

- **`children`**: content untuk body
  - Tidak ada props khusus, hanya wrapper untuk content

### PtModalFooter / ModalFooter

- **`onCancel`** (React) / **`OnCancel`** (Blazor): callback function (optional)
  - Jika ada, akan auto-render Cancel button
- **`onConfirm`** (React) / **`OnConfirm`** (Blazor): callback function (optional)
  - Jika ada, akan auto-render Confirm button
- **`onCancelText`** (React) / **`OnCancelText`** (Blazor): string (default: `"Cancel"`)
  - Text untuk Cancel button
- **`onConfirmText`** (React) / **`OnConfirmText`** (Blazor): string (default: `"Continue"`)
  - Text untuk Confirm button
- **`children`**: custom footer content
  - Jika ada children, props onCancel/onConfirm akan diabaikan

## Usage

### Vue

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

### React

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

### Blazor

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

    private RenderFragment InfoIcon => builder =>
    {
        builder.OpenElement(0, "svg");
        builder.AddAttribute(1, "viewBox", "0 0 16 16");
        builder.AddAttribute(2, "class", "h-4 w-4");
        // ... SVG content
        builder.CloseElement();
    };
}
```

## Examples

### Default Modal

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen = true">Open Modal</PtButton>
    <PtModal v-model:open="isOpen" size="md">
      <PtModalHeader 
        title="Title" 
        description="Description"
        :icon="InfoIcon"
      />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen = false"
        :on-confirm="() => isOpen = false"
      />
    </PtModal>
  </div>
</ClientOnly>

### Custom Header

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen2 = true">Open Modal with Custom Header</PtButton>
    <PtModal v-model:open="isOpen2" size="md">
      <PtModalHeader>
        <div class="flex gap-2 items-center w-full">
          <div class="text-2xl">🎉</div>
          <div class="flex-1">
            <h2 class="font-semibold text-xl leading-none tracking-[-0.6px] text-slate-900">Custom Header</h2>
            <p class="mt-1 font-normal text-base leading-6 text-slate-500">This is a custom header using children</p>
          </div>
        </div>
      </PtModalHeader>
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen2 = false"
        :on-confirm="() => isOpen2 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

### Custom Footer

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen3 = true">Open Modal with Custom Footer</PtButton>
    <PtModal v-model:open="isOpen3" size="md">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter>
        <PtButton variant="solid" color="danger" size="sm" @click="isOpen3 = false">Delete</PtButton>
        <PtButton variant="outline" size="sm" @click="isOpen3 = false">Cancel</PtButton>
        <PtButton variant="solid" size="sm" @click="isOpen3 = false">Save</PtButton>
      </PtModalFooter>
    </PtModal>
  </div>
</ClientOnly>

### Sizes

#### Small (400px)

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen4 = true">Open Small Modal</PtButton>
    <PtModal v-model:open="isOpen4" size="sm">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen4 = false"
        :on-confirm="() => isOpen4 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

#### Medium (500px) - Default

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen5 = true">Open Medium Modal</PtButton>
    <PtModal v-model:open="isOpen5" size="md">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen5 = false"
        :on-confirm="() => isOpen5 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

#### Large (600px)

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen6 = true">Open Large Modal</PtButton>
    <PtModal v-model:open="isOpen6" size="lg">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md min-h-[271px]">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen6 = false"
        :on-confirm="() => isOpen6 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

### No Close Button

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen7 = true">Open Modal without Close Button</PtButton>
    <PtModal v-model:open="isOpen7" size="md">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" :show-close-button="false" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen7 = false"
        :on-confirm="() => isOpen7 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

### Only Confirm Button

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen8 = true">Open Modal with Only Confirm</PtButton>
    <PtModal v-model:open="isOpen8" size="md">
      <PtModalHeader title="Success!" description="Your action has been completed successfully." :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-confirm="() => isOpen8 = false"
        on-confirm-text="OK"
      />
    </PtModal>
  </div>
</ClientOnly>

### Disable Overlay Click

<ClientOnly>
  <div>
    <PtButton variant="solid" size="sm" @click="isOpen9 = true">Open Modal (No Overlay Click)</PtButton>
    <PtModal v-model:open="isOpen9" size="md" :close-on-overlay-click="false">
      <PtModalHeader title="Title" description="Description" :icon="InfoIcon" />
      <PtModalBody>
        <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
          <p class="text-sm text-slate-700">Replace Here</p>
        </div>
      </PtModalBody>
      <PtModalFooter 
        :on-cancel="() => isOpen9 = false"
        :on-confirm="() => isOpen9 = false"
      />
    </PtModal>
  </div>
</ClientOnly>

## Accessibility

Modal component sudah dilengkapi dengan:

- **ARIA attributes**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **Keyboard navigation**: Escape key untuk menutup modal
- **Focus management**: Focus trap (dapat ditambahkan jika diperlukan)
- **Body scroll lock**: Mencegah scroll pada body ketika modal terbuka

## Best Practices

1. **Gunakan size yang sesuai**: Pilih `sm`, `md`, atau `lg` berdasarkan konten yang akan ditampilkan
2. **Custom header/footer**: Gunakan children untuk custom header/footer jika diperlukan
3. **Button text**: Customize `onCancelText` dan `onConfirmText` untuk konteks yang lebih jelas
4. **Overlay click**: Pertimbangkan untuk disable `closeOnOverlayClick` jika action di modal bersifat critical
5. **Escape key**: Pertimbangkan untuk disable `closeOnEscape` jika action di modal bersifat critical
