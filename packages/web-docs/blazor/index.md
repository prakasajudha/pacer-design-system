---
layout: home

hero:
  name: 'PACER Blazor'
  text: '.NET Blazor Components'
  tagline: 'Enterprise-grade Razor components for .NET 8'
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Components
      link: /components/

features:
  - icon: 🟣
    title: Native Blazor
    details: Built specifically for .NET 8 Blazor with Razor components
  - icon: 🎨
    title: Tailwind CSS
    details: Styled with Tailwind CSS for consistent design
  - icon: ⚡
    title: Performance
    details: Optimized for both Server and WebAssembly hosting models
  - icon: 🔒
    title: Type-Safe
    details: Full C# type safety with IntelliSense support
---

## Quick Start

```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

## Usage

```razor
@using Pertamina.DesignSystem.Blazor

<PtButton Variant="ButtonVariant.Primary" OnClick="HandleClick">
    Click me
</PtButton>

@code {
    private void HandleClick()
    {
        Console.WriteLine("Button clicked!");
    }
}
```

## Setup

Add to your `_Imports.razor`:

```razor
@using Pertamina.DesignSystem.Blazor
```

Add CSS to your layout:

```html
<link href="_content/Pertamina.DesignSystem.Blazor/css/pacer-design-system.css" rel="stylesheet" />
```
