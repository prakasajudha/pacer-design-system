# Switch Component

Switch digunakan untuk mengubah state boolean (on/off) dengan label dan optional description.

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(true);
const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
const v4 = ref(true);
const v5 = ref(true);
</script>

## Props

- **`disabled`**: boolean (default: `false`)
- **`name`**: string (optional) — untuk HTML form submit (akan submit `true/false` lewat hidden input)
- **`id`**: string (optional) — untuk a11y (`aria-labelledby` / `aria-describedby`)
- **`label`**: string (default: empty)
- **`description`**: string (default: empty)
- **`position`**: `left | right` (default: `left`)
- **`outlined`**: boolean (default: `false`)
- **`bgColor`**: string color (hex/rgb/rgba/var) — default **hex** sesuai Figma
- **`error`**: boolean (default: `false`)  
  Jika `true`: title merah; toggle menampilkan border merah (outline merah jika `outlined`).

## Preview

<ComponentDemo>
  <div class="w-[428px]">
    <PtSwitch
      id="accept-terms-switch"
      name="acceptTerms"
      v-model="checked"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  </div>

<template #react>

```tsx
import { Switch } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(true);
  return (
    <div style={{ width: 428 }}>
      <Switch
        id="accept-terms-switch"
        name="acceptTerms"
        checked={checked}
        onCheckedChange={setChecked}
        label="Accept terms and conditions"
        description="You agree to our Terms of Service and Privacy Policy."
      />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtSwitch } from '@pacer-ui/vue';
import { ref } from 'vue';

const checked = ref(true);
</script>

<template>
  <div class="w-[428px]">
    <PtSwitch
      id="accept-terms-switch"
      name="acceptTerms"
      v-model="checked"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

@* Binding *@
<PtSwitch Id="accept-terms-switch" Name="acceptTerms" @bind-Value="checked" Label="Accept terms and conditions" Description="You agree to our Terms of Service and Privacy Policy." />
```

</template>
</ComponentDemo>

## Variants

<ComponentDemo>
  <div class="w-[428px] space-y-6">
    <PtSwitch v-model="v1" label="Default" />
    <PtSwitch v-model="v2" label="Right position" position="right" />
    <PtSwitch v-model="v3" label="Outlined" description="With outline container" outlined />
    <PtSwitch v-model="v4" label="Error outlined" description="Shows error styling" outlined error />
    <PtSwitch v-model="v5" label="Disabled" description="Disabled state" :disabled="true" />
  </div>

<template #react>

```tsx
import { Switch } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(true);
  const [v3, setV3] = useState(true);
  const [v4, setV4] = useState(true);
  const [v5, setV5] = useState(true);

  return (
    <div style={{ width: 428 }} className="space-y-6">
      <Switch checked={v1} onCheckedChange={setV1} label="Default" />
      <Switch checked={v2} onCheckedChange={setV2} label="Right position" position="right" />
      <Switch checked={v3} onCheckedChange={setV3} label="Outlined" description="With outline container" outlined />
      <Switch checked={v4} onCheckedChange={setV4} label="Error outlined" description="Shows error styling" outlined error />
      <Switch checked={v5} onCheckedChange={setV5} label="Disabled" description="Disabled state" disabled />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtSwitch } from '@pacer-ui/vue';
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
const v4 = ref(true);
const v5 = ref(true);
</script>

<template>
  <div class="w-[428px] space-y-6">
    <PtSwitch v-model="v1" label="Default" />
    <PtSwitch v-model="v2" label="Right position" position="right" />
    <PtSwitch v-model="v3" label="Outlined" description="With outline container" outlined />
    <PtSwitch v-model="v4" label="Error outlined" description="Shows error styling" outlined error />
    <PtSwitch v-model="v5" label="Disabled" description="Disabled state" :disabled="true" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div style="width:428px" class="space-y-6">
    <PtSwitch @bind-Value="v1" Label="Default" />
    <PtSwitch @bind-Value="v2" Label="Right position" Position="SwitchPosition.Right" />
    <PtSwitch @bind-Value="v3" Label="Outlined" Description="With outline container" Outlined="true" />
    <PtSwitch @bind-Value="v4" Label="Error outlined" Description="Shows error styling" Outlined="true" Error="true" />
    <PtSwitch @bind-Value="v5" Label="Disabled" Description="Disabled state" Disabled="true" />
</div>

@code {
    private bool v1 = true;
    private bool v2 = true;
    private bool v3 = true;
    private bool v4 = true;
    private bool v5 = true;
}
```

</template>
</ComponentDemo>

## Form integration

- **SPA form (state)**: gunakan `v-model` (Vue) / `checked + onCheckedChange` (React).
- **Native HTML form submit**: isi `name`, maka Switch akan men-submit field dengan value string **`"true"`** / **`"false"`**.

