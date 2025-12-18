# Pertamina.DesignSystem.Blazor

Blazor Razor Component Library untuk PACER (Pertamina Patra Niaga Components & Experience Resources).

## Installation

```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

## Setup

### 1. Add CSS Reference

Di `App.razor` atau `_Host.cshtml` / `index.html`:

```html
<link href="_content/Pertamina.DesignSystem.Blazor/css/pertamina-design-system.css" rel="stylesheet" />
```

### 2. Add Namespace (Optional)

Di `_Imports.razor`:

```razor
@using Pertamina.DesignSystem.Blazor
```

## Usage

### Button

```razor
@page "/example"
@using Pertamina.DesignSystem.Blazor

<PtButton Variant="ButtonVariant.Primary" Size="ButtonSize.Medium">
    Primary Button
</PtButton>

<PtButton Variant="ButtonVariant.Secondary" Loading="true">
    Loading...
</PtButton>

<PtButton 
    Variant="ButtonVariant.Success" 
    OnClick="HandleSave">
    <StartIcon>
        <!-- SVG Icon -->
    </StartIcon>
    Save
</PtButton>

@code {
    private async Task HandleSave()
    {
        // Handle save logic
    }
}
```

**Parameters:**
- `Variant` - ButtonVariant enum (Primary, Secondary, Success, Warning, Error, Ghost, Link)
- `Size` - ButtonSize enum (Small, Medium, Large)
- `FullWidth` - bool
- `Loading` - bool
- `Disabled` - bool
- `Type` - string (default: "button")
- `StartIcon` - RenderFragment
- `EndIcon` - RenderFragment
- `OnClick` - EventCallback<MouseEventArgs>

### Input

```razor
<PtInput 
    @bind-Value="email"
    Label="Email"
    Type="InputType.Email"
    Placeholder="nama@email.com"
    HelperText="Masukkan email yang terdaftar" />

<PtInput 
    @bind-Value="password"
    Label="Password"
    Type="InputType.Password"
    Error="@passwordError" />

<PtInput 
    @bind-Value="search"
    Placeholder="Cari...">
    <StartIcon>
        <!-- Search Icon SVG -->
    </StartIcon>
</PtInput>

@code {
    private string email = "";
    private string password = "";
    private string search = "";
    private string? passwordError => password.Length < 8 ? "Password minimal 8 karakter" : null;
}
```

**Parameters:**
- `Value` / `@bind-Value` - TValue
- `Label` - string
- `Error` - string
- `HelperText` - string
- `Type` - InputType enum
- `Placeholder` - string
- `FullWidth` - bool
- `Disabled` - bool
- `StartIcon` - RenderFragment
- `EndIcon` - RenderFragment

### Card

```razor
<PtCard 
    Variant="CardVariant.Elevated"
    Padding="CardPadding.Large">
    <Header>
        <h3 class="text-xl font-bold">Dashboard</h3>
    </Header>
    <ChildContent>
        <p>Card content goes here...</p>
    </ChildContent>
    <Footer>
        <PtButton Variant="ButtonVariant.Primary">View Details</PtButton>
    </Footer>
</PtCard>
```

**Parameters:**
- `Variant` - CardVariant enum (Default, Outlined, Elevated)
- `Padding` - CardPadding enum (None, Small, Medium, Large)
- `Header` - RenderFragment
- `ChildContent` - RenderFragment
- `Footer` - RenderFragment

## Building the Library

### Prerequisites

- .NET 8 SDK
- Node.js 18+ (untuk build CSS)
- pnpm

### Build Steps

```bash
# 1. Install Node dependencies (untuk Tailwind)
pnpm install

# 2. Build CSS
pnpm build:css

# 3. Build .NET library
dotnet build

# 4. Create NuGet package
dotnet pack -c Release
```

### Watch Mode (Development)

```bash
# Terminal 1: Watch CSS changes
pnpm watch:css

# Terminal 2: Build .NET project
dotnet watch build
```

## TypeScript Support

Untuk IntelliSense yang lebih baik, gunakan latest Visual Studio atau Rider.

## Accessibility

Semua component sudah:
- ✅ Semantic HTML
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ WCAG 2.1 Level AA compliant

## Best Practices

1. **Data Binding** - Gunakan `@bind-Value` untuk two-way binding
2. **Error Handling** - Display validation errors dengan parameter `Error`
3. **Loading States** - Gunakan `Loading` parameter untuk async operations
4. **Event Handling** - Gunakan `EventCallback` untuk component events

## Blazor Server vs WASM

Library ini mendukung:
- ✅ Blazor Server
- ✅ Blazor WebAssembly
- ✅ Blazor Hybrid (MAUI)
- ✅ .NET 8+

## Migration from Other Libraries

```razor
<!-- Before (MudBlazor) -->
<MudButton Variant="Variant.Filled" Color="Color.Primary">
    Submit
</MudButton>

<!-- After (Pertamina) -->
<PtButton Variant="ButtonVariant.Primary">
    Submit
</PtButton>
```

## Contributing

Lihat [CONTRIBUTING.md](../../../CONTRIBUTING.md) untuk guidelines.

## Support

- Documentation: https://design-system.pertamina.com
- Storybook: https://storybook.pertamina.com/blazor
- Issues: https://github.com/pertamina/design-system/issues

## License

Proprietary - Copyright © 2025 PT Pertamina (Persero)
