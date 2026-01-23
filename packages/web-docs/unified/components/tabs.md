<ComponentHero title="Tabs" description="Tabs digunakan untuk mengorganisir konten ke dalam beberapa panel yang dapat diakses melalui tab triggers. Menggunakan compound components pattern untuk fleksibilitas maksimal." />

<script setup lang="ts">
import { ref, h } from 'vue';

const activeTab = ref('tab1');
const activeTab2 = ref('tab1');
const activeTab3 = ref('tab1');
const activeTab4 = ref('tab1');
const activeTab5 = ref('tab1');

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
</script>

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Tabs component terdiri dari:

- **Tabs Container**: Container utama yang mengatur state
- **TabsList**: Container untuk tab triggers
- **TabsTrigger**: Individual tab button
- **TabsContent**: Content untuk setiap tab

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Tabs Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Tabs Anatomy Diagram 2" />
  </div>
</div>

## Components

Tabs menggunakan compound components pattern dengan 4 komponen utama:

- **`PtTabs`** (Vue) / **`Tabs`** (React) / **`PtTabs`** (Blazor): Container utama
- **`PtTabsList`** (Vue) / **`TabsList`** (React) / **`PtTabsList`** (Blazor): Container untuk tab triggers
- **`PtTabsTrigger`** (Vue) / **`TabsTrigger`** (React) / **`PtTabsTrigger`** (Blazor): Individual tab button
- **`PtTabsContent`** (Vue) / **`TabsContent`** (React) / **`PtTabsContent`** (Blazor): Content untuk setiap tab

## Variants

Tabs supports two variants:

- **`default`**: Background abu-abu, selected dengan bg putih + shadow
- **`line`**: Border bottom, selected dengan border biru tebal

</template>

<template #Implementation>

## Visual Preview

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

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab2" variant="default">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
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
    </PtTabs>
  </div>

<template #react>

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
  <TabsList>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
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
    </PtTabsList>
    <!-- PtTabsContent components -->
</PtTabs>
```

</template>
</ComponentDemo>

### Line Variant

<ComponentDemo>
  <div class="w-[600px]">
    <PtTabs v-model="activeTab3" variant="line">
      <PtTabsList>
        <PtTabsTrigger value="tab1">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab2">Label</PtTabsTrigger>
        <PtTabsTrigger value="tab3">Label</PtTabsTrigger>
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
    </PtTabs>
  </div>

<template #react>

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
  <TabsList>
    <TabsTrigger value="tab1">Label</TabsTrigger>
    <TabsTrigger value="tab2">Label</TabsTrigger>
    <TabsTrigger value="tab3">Label</TabsTrigger>
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
    </PtTabsList>
    <!-- PtTabsContent components -->
</PtTabs>
```

</template>
</ComponentDemo>

## API Reference

### Props

#### PtTabs / Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'line'` | `'default'` | Variant visual dari tabs |
| `v-model` / `value` | `string \| number` | - | Value dari tab yang aktif |

#### PtTabsList / TabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stretch` | `boolean` | `false` | Stretch container dan tab items |

#### PtTabsTrigger / TabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | `(required)` | Value untuk tab ini |
| `disabled` | `boolean` | `false` | Disable tab |

#### PtTabsContent / TabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | `(required)` | Value yang harus match dengan TabsTrigger |

</template>

</PageTabs>