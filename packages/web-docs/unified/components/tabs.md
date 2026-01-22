# Tabs Component

Tabs digunakan untuk mengorganisir konten ke dalam beberapa panel yang dapat diakses melalui tab triggers. Menggunakan compound components pattern untuk fleksibilitas maksimal.

<script setup lang="ts">
import { ref, h } from 'vue';

const activeTab = ref('tab1');
const activeTab2 = ref('tab1');
const activeTab3 = ref('tab1');
const activeTab4 = ref('tab1');
const activeTab5 = ref('tab1');
const activeTab6 = ref('tab1');
const activeTab7 = ref('tab1');
const activeTab8 = ref('tab1');
const activeTab9 = ref('tab1');
const activeTab10 = ref('tab1');
const activeTab11 = ref('tab1');
const activeTab12 = ref('tab1');

// Icon components
const HouseIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4 shrink-0'
}, [
  h('path', { d: 'M8 2L2 7v7h3v-4h2v4h3V7L8 2z' })
]);

const SettingsIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4 shrink-0'
}, [
  h('circle', { cx: '8', cy: '8', r: '2' }),
  h('path', { d: 'M8 2v2M8 12v2M2 8h2M12 8h2' })
]);

const UserIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4 shrink-0'
}, [
  h('circle', { cx: '8', cy: '6', r: '2' }),
  h('path', { d: 'M3 14c0-2 2-4 5-4s5 2 5 4' })
]);
</script>

## Components

Tabs menggunakan compound components pattern dengan 4 komponen utama:

- **`PtTabs`** (Vue) / **`Tabs`** (React) / **`PtTabs`** (Blazor): Container utama
- **`PtTabsList`** (Vue) / **`TabsList`** (React) / **`PtTabsList`** (Blazor): Container untuk tab triggers
- **`PtTabsTrigger`** (Vue) / **`TabsTrigger`** (React) / **`PtTabsTrigger`** (Blazor): Individual tab button
- **`PtTabsContent`** (Vue) / **`TabsContent`** (React) / **`PtTabsContent`** (Blazor): Content untuk setiap tab

## Props

### PtTabs / Tabs

- **`variant`**: `default | line` (default: `default`)
  - `default`: Background abu-abu, selected dengan bg putih + shadow
  - `line`: Border bottom, selected dengan border biru tebal
- **`v-model`** (Vue) / **`value`** (React) / **`Value`** (Blazor): string | number
  - Value dari tab yang aktif
- **`onValueChange`** (React) / **`ValueChanged`** (Blazor): callback function

### PtTabsList / TabsList

- **`stretch`**: boolean (default: `false`)
  - Jika `true`: container dan tab items stretch untuk mengisi seluruh width menggunakan grid layout
  - Jika `false`: container fit-content, tab items tidak stretch

### PtTabsTrigger / TabsTrigger

- **`value`**: string | number (required)
  - Value untuk tab ini (harus unique dalam satu Tabs)
- **`disabled`**: boolean (default: `false`)

### PtTabsContent / TabsContent

- **`value`**: string | number (required)
  - Value yang harus match dengan `value` dari `PtTabsTrigger` untuk menampilkan konten

## Preview

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab" variant="default">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Tab 1</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Tab 2</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Tab 3</PtTabsTrigger>
      </PtTabsList>
      <PtTabsContent value="tab1">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 1</h3>
          <p class="text-slate-600">This is the content for the first tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab2">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 2</h3>
          <p class="text-slate-600">This is the content for the second tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab3">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 3</h3>
          <p class="text-slate-600">This is the content for the third tab.</p>
        </div>
      </PtTabsContent>
    </PtTabs>
  </div>

<template #react>

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div style={{ width: 600 }}>
      <Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Content for Tab 1</h3>
            <p className="text-slate-600">This is the content for the first tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Content for Tab 2</h3>
            <p className="text-slate-600">This is the content for the second tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Content for Tab 3</h3>
            <p className="text-slate-600">This is the content for the third tab.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent } from '@pacer-ui/vue';
import { ref } from 'vue';

const activeTab = ref('tab1');
</script>

<template>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab" variant="default">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Tab 1</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Tab 2</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Tab 3</PtTabsTrigger>
      </PtTabsList>
      <PtTabsContent value="tab1">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 1</h3>
          <p class="text-slate-600">This is the content for the first tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab2">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 2</h3>
          <p class="text-slate-600">This is the content for the second tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab3">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 3</h3>
          <p class="text-slate-600">This is the content for the third tab.</p>
        </div>
      </PtTabsContent>
    </PtTabs>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div style="width: 600px;">
    <PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
        <PtTabsList>
            <PtTabsTrigger Value="@("tab1")">Tab 1</PtTabsTrigger>
            <PtTabsTrigger Value="@("tab2")">Tab 2</PtTabsTrigger>
            <PtTabsTrigger Value="@("tab3")">Tab 3</PtTabsTrigger>
        </PtTabsList>
        <PtTabsContent Value="@("tab1")">
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for Tab 1</h3>
                <p class="text-slate-600">This is the content for the first tab.</p>
            </div>
        </PtTabsContent>
        <PtTabsContent Value="@("tab2")">
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for Tab 2</h3>
                <p class="text-slate-600">This is the content for the second tab.</p>
            </div>
        </PtTabsContent>
        <PtTabsContent Value="@("tab3")">
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for Tab 3</h3>
                <p class="text-slate-600">This is the content for the third tab.</p>
            </div>
        </PtTabsContent>
    </PtTabs>
</div>

@code {
    private string activeTab = "tab1";
}
```

</template>

</ComponentDemo>

## Variants

### Default Variant

Default variant menggunakan background abu-abu untuk container, dengan selected tab memiliki background putih dan shadow.

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab2" variant="default">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
      </PtTabsList>
      <PtTabsContent value="tab1">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the first tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab2">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the second tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab3">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the third tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab4">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the fourth tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab5">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the fifth tab.</p>
        </div>
      </PtTabsContent>
    </PtTabs>
  </div>

<template #react>

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
    <TabsTrigger value="tab4">Label</TabsTrigger>
    <TabsTrigger value="tab5">Label</TabsTrigger>
  </TabsList>
  {/* TabsContent components */}
</Tabs>
```

</template>

<template #vue>

```vue
<PtTabs v-model="activeTab" variant="default">
  <PtTabsList>
    <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
  </PtTabsList>
  <!-- PtTabsContent components -->
</PtTabs>
```

</template>

<template #blazor>

```razor
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab2")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab3")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab4")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab5")">Label</PtTabsTrigger>
    </PtTabsList>
    <!-- PtTabsContent components -->
</PtTabs>
```

</template>

</ComponentDemo>

### Line Variant

Line variant menggunakan border bottom untuk container, dengan selected tab memiliki border biru tebal (2px) di bagian bawah.

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab3" variant="line">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
      </PtTabsList>
      <PtTabsContent value="tab1">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the first tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab2">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the second tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab3">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the third tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab4">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the fourth tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab5">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <p class="text-slate-600">This is the content for the fifth tab.</p>
        </div>
      </PtTabsContent>
    </PtTabs>
  </div>

<template #react>

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
  <TabsList>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
    <TabsTrigger value="tab4">Label</TabsTrigger>
    <TabsTrigger value="tab5">Label</TabsTrigger>
  </TabsList>
  {/* TabsContent components */}
</Tabs>
```

</template>

<template #vue>

```vue
<PtTabs v-model="activeTab" variant="line">
  <PtTabsList>
    <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
  </PtTabsList>
  <!-- PtTabsContent components -->
</PtTabs>
```

</template>

<template #blazor>

```razor
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Line">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab2")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab3")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab4")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab5")">Label</PtTabsTrigger>
    </PtTabsList>
    <!-- PtTabsContent components -->
</PtTabs>
```

</template>

</ComponentDemo>

## Stretch

Prop `stretch` pada `PtTabsList` / `TabsList` mengontrol apakah container dan tab items harus stretch untuk mengisi seluruh width. Ketika `stretch: true`, container menggunakan grid layout dengan `grid-auto-columns: 1fr` untuk membuat setiap tab mengisi space secara merata.

<ComponentDemo>
  <div class="w-[600px] space-y-8">
    <div>
      <div class="text-sm font-medium text-slate-700 mb-2">Stretch: False</div>
      <PtTabs v-model="activeTab4" variant="default">
        <PtTabsList>
          <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
        </PtTabsList>
      </PtTabs>
    </div>
    <div>
      <div class="text-sm font-medium text-slate-700 mb-2">Stretch: True</div>
      <PtTabs v-model="activeTab5" variant="default">
        <PtTabsList stretch>
          <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab4">Label</PtTabsTrigger>
          <PtTabsTrigger value="tab5">Label</PtTabsTrigger>
        </PtTabsList>
      </PtTabs>
    </div>
  </div>

<template #react>

```tsx
// Stretch: False
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
  </TabsList>
</Tabs>

// Stretch: True
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList stretch>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
  </TabsList>
</Tabs>
```

</template>

<template #vue>

```vue
<!-- Stretch: False -->
<PtTabs v-model="activeTab" variant="default">
  <PtTabsList>
    <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
  </PtTabsList>
</PtTabs>

<!-- Stretch: True -->
<PtTabs v-model="activeTab" variant="default">
  <PtTabsList stretch>
    <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
    <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
  </PtTabsList>
</PtTabs>
```

</template>

<template #blazor>

```razor
@* Stretch: False *@
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab2")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab3")">Label</PtTabsTrigger>
    </PtTabsList>
</PtTabs>

@* Stretch: True *@
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
    <PtTabsList Stretch="true">
        <PtTabsTrigger Value="@("tab1")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab2")">Label</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab3")">Label</PtTabsTrigger>
    </PtTabsList>
</PtTabs>
```

</template>

</ComponentDemo>

## With Icons

Tabs dapat menampilkan icon di sebelah kiri atau kanan label. Icon dapat berupa SVG atau komponen icon lainnya.

<ComponentDemo>
  <div class="w-[600px] space-y-8">
    <div>
      <div class="text-sm font-medium text-slate-700 mb-2">Icons on Left (Default Variant)</div>
      <PtTabs v-model="activeTab6" variant="default">
        <PtTabsList>
          <PtTabsTrigger value="tab1">
            <component :is="HouseIcon" />
            <span class="ml-1">Home</span>
          </PtTabsTrigger>
          <PtTabsTrigger value="tab2">
            <component :is="SettingsIcon" />
            <span class="ml-1">Settings</span>
          </PtTabsTrigger>
          <PtTabsTrigger value="tab3">
            <component :is="UserIcon" />
            <span class="ml-1">Profile</span>
          </PtTabsTrigger>
        </PtTabsList>
        <PtTabsContent value="tab1">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Home Content</h3>
            <p class="text-slate-600">This is the home tab content.</p>
          </div>
        </PtTabsContent>
        <PtTabsContent value="tab2">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Settings Content</h3>
            <p class="text-slate-600">This is the settings tab content.</p>
          </div>
        </PtTabsContent>
        <PtTabsContent value="tab3">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Profile Content</h3>
            <p class="text-slate-600">This is the profile tab content.</p>
          </div>
        </PtTabsContent>
      </PtTabs>
    </div>
    <div>
      <div class="text-sm font-medium text-slate-700 mb-2">Icons on Right (Line Variant)</div>
      <PtTabs v-model="activeTab7" variant="line">
        <PtTabsList>
          <PtTabsTrigger value="tab1">
            <span>Home</span>
            <component :is="HouseIcon" class="ml-1" />
          </PtTabsTrigger>
          <PtTabsTrigger value="tab2">
            <span>Settings</span>
            <component :is="SettingsIcon" class="ml-1" />
          </PtTabsTrigger>
          <PtTabsTrigger value="tab3">
            <span>Profile</span>
            <component :is="UserIcon" class="ml-1" />
          </PtTabsTrigger>
        </PtTabsList>
        <PtTabsContent value="tab1">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Home Content</h3>
            <p class="text-slate-600">This is the home tab content.</p>
          </div>
        </PtTabsContent>
        <PtTabsContent value="tab2">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Settings Content</h3>
            <p class="text-slate-600">This is the settings tab content.</p>
          </div>
        </PtTabsContent>
        <PtTabsContent value="tab3">
          <div class="mt-4 p-4 bg-slate-50 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Profile Content</h3>
            <p class="text-slate-600">This is the profile tab content.</p>
          </div>
        </PtTabsContent>
      </PtTabs>
    </div>
  </div>

<template #react>

```tsx
const HouseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
    <path d="M8 2L2 7v7h3v-4h2v4h3V7L8 2z" />
  </svg>
);

// Icons on Left
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList>
    <TabsTrigger value="tab1">
      <HouseIcon />
      <span className="ml-1">Home</span>
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <SettingsIcon />
      <span className="ml-1">Settings</span>
    </TabsTrigger>
  </TabsList>
</Tabs>

// Icons on Right
<Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
  <TabsList>
    <TabsTrigger value="tab1">
      <span>Home</span>
      <HouseIcon className="ml-1" />
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <span>Settings</span>
      <SettingsIcon className="ml-1" />
    </TabsTrigger>
  </TabsList>
</Tabs>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { h } from 'vue';

const HouseIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4 shrink-0'
}, [
  h('path', { d: 'M8 2L2 7v7h3v-4h2v4h3V7L8 2z' })
]);
</script>

<template>
  <!-- Icons on Left -->
  <PtTabs v-model="activeTab" variant="default">
    <PtTabsList>
      <PtTabsTrigger value="tab1">
        <component :is="HouseIcon" />
        <span class="ml-1">Home</span>
      </PtTabsTrigger>
    </PtTabsList>
  </PtTabs>

  <!-- Icons on Right -->
  <PtTabs v-model="activeTab" variant="line">
    <PtTabsList>
      <PtTabsTrigger value="tab1">
        <span>Home</span>
        <component :is="HouseIcon" class="ml-1" />
      </PtTabsTrigger>
    </PtTabsList>
  </PtTabs>
</template>
```

</template>

<template #blazor>

```razor
@* Icons on Left *@
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0">
                <path d="M8 2L2 7v7h3v-4h2v4h3V7L8 2z" />
            </svg>
            <span class="ml-1">Home</span>
        </PtTabsTrigger>
    </PtTabsList>
</PtTabs>

@* Icons on Right *@
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Line">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">
            <span>Home</span>
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 ml-1">
                <path d="M8 2L2 7v7h3v-4h2v4h3V7L8 2z" />
            </svg>
        </PtTabsTrigger>
    </PtTabsList>
</PtTabs>
```

</template>

</ComponentDemo>

## Disabled

Tab dapat dinonaktifkan menggunakan prop `disabled` pada `PtTabsTrigger` / `TabsTrigger`.

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab8" variant="default">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Tab 1</PtTabsTrigger>
        <PtTabsTrigger value="tab2" disabled>Tab 2 (Disabled)</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Tab 3</PtTabsTrigger>
      </PtTabsList>
      <PtTabsContent value="tab1">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 1</h3>
          <p class="text-slate-600">This is the content for the first tab.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab2">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 2</h3>
          <p class="text-slate-600">This tab is disabled.</p>
        </div>
      </PtTabsContent>
      <PtTabsContent value="tab3">
        <div class="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Content for Tab 3</h3>
          <p class="text-slate-600">This is the content for the third tab.</p>
        </div>
      </PtTabsContent>
    </PtTabs>
  </div>

<template #react>

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2" disabled>Tab 2 (Disabled)</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  {/* TabsContent components */}
</Tabs>
```

</template>

<template #vue>

```vue
<PtTabs v-model="activeTab" variant="default">
  <PtTabsList>
    <PtTabsTrigger value="tab1">Tab 1</PtTabsTrigger>
    <PtTabsTrigger value="tab2" disabled>Tab 2 (Disabled)</PtTabsTrigger>
    <PtTabsTrigger value="tab3">Tab 3</PtTabsTrigger>
  </PtTabsList>
  <!-- PtTabsContent components -->
</PtTabs>
```

</template>

<template #blazor>

```razor
<PtTabs @bind-Value="activeTab" Variant="TabsVariant.Default">
    <PtTabsList>
        <PtTabsTrigger Value="@("tab1")">Tab 1</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab2")" Disabled="true">Tab 2 (Disabled)</PtTabsTrigger>
        <PtTabsTrigger Value="@("tab3")">Tab 3</PtTabsTrigger>
    </PtTabsList>
    <!-- PtTabsContent components -->
</PtTabs>
```

</template>

</ComponentDemo>

## Notes

- Tabs menggunakan compound components pattern untuk fleksibilitas maksimal
- Setiap `PtTabsTrigger` harus memiliki `value` yang unique dalam satu `PtTabs`
- `PtTabsContent` hanya akan menampilkan konten jika `value`-nya match dengan `value` dari `PtTabs`
- Ketika `stretch: true`, container menggunakan grid layout dengan `grid-auto-columns: 1fr` untuk membuat setiap tab mengisi space secara merata
- Line variant menggunakan `mb-[-1px]` pada tab untuk membuat border sejajar dengan container border
- Icon dapat ditempatkan di sebelah kiri atau kanan label dengan menggunakan slot atau children
