# Blazor Guide

Complete guide for using PACER components in Blazor (.NET 8) applications.

## Installation

```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

## Setup

### 1. Add Namespace

Add the namespace to your `_Imports.razor`:

```razor
@using Pertamina.DesignSystem.Blazor
```

### 2. Include Styles

Add the CSS to your `App.razor` or layout file:

```razor
<!-- In the <head> section -->
<link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" />
```

For Blazor Server:

```html
<!-- Pages/_Host.cshtml or App.razor -->
<link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" />
```

For Blazor WebAssembly:

```html
<!-- wwwroot/index.html -->
<link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" />
```

## Basic Usage

```razor
@page "/contact"
@using Pertamina.DesignSystem.Blazor

<PtCard>
    <h2>Contact Form</h2>
    <PtInput
        @bind-Value="email"
        Type="email"
        Placeholder="your@email.com"
        FullWidth="true" />
    <PtButton
        Variant="ButtonVariant.Primary"
        OnClick="HandleSubmit"
        FullWidth="true">
        Submit
    </PtButton>
</PtCard>

@code {
    private string email = "";

    private void HandleSubmit()
    {
        Console.WriteLine($"Email: {email}");
    }
}
```

## Component Patterns

### State Management

```razor
<PtInput @bind-Value="formData.Name" Placeholder="Name" />
<PtInput @bind-Value="formData.Email" Placeholder="Email" />
<PtButton OnClick="HandleSubmit">Submit</PtButton>

@code {
    private FormData formData = new();

    private class FormData
    {
        public string Name { get; set; } = "";
        public string Email { get; set; } = "";
    }

    private void HandleSubmit()
    {
        Console.WriteLine($"Name: {formData.Name}, Email: {formData.Email}");
    }
}
```

### Form Validation

```razor
<EditForm Model="model" OnValidSubmit="HandleValidSubmit">
    <DataAnnotationsValidator />

    <PtInput
        @bind-Value="model.Email"
        Type="email"
        Status="@GetStatus(nameof(model.Email))"
        HelperText="@GetError(nameof(model.Email))" />

    <PtButton Type="submit" Variant="ButtonVariant.Primary">
        Submit
    </PtButton>
</EditForm>

@code {
    private ContactModel model = new();
    private ValidationMessageStore? messageStore;

    private class ContactModel
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; } = "";
    }

    private InputStatus GetStatus(string fieldName)
    {
        return messageStore?.Any() == true ? InputStatus.Error : InputStatus.Default;
    }

    private string GetError(string fieldName)
    {
        return messageStore?.FirstOrDefault() ?? "";
    }

    private void HandleValidSubmit()
    {
        Console.WriteLine($"Valid email: {model.Email}");
    }
}
```

## Type Safety

All components have full C# type safety:

```razor
<PtButton
    Variant="ButtonVariant.Primary"    @* IntelliSense works! *@
    Size="ButtonSize.Large"
    Disabled="false"
    OnClick="HandleClick">
    Click me
</PtButton>

@code {
    // Type-safe parameters
    private ButtonVariant variant = ButtonVariant.Primary;
    private ButtonSize size = ButtonSize.Large;

    private void HandleClick()
    {
        // Handle click
    }
}
```

## Component Composition

```razor
<PtCard>
    <PtCardHeader>
        <img src="@User.Avatar" alt="@User.Name" />
        <h3>@User.Name</h3>
    </PtCardHeader>
    <PtCardContent>
        <p>@User.Bio</p>
    </PtCardContent>
    <PtCardFooter>
        <PtButton Variant="ButtonVariant.Outline">View Profile</PtButton>
        <PtButton Variant="ButtonVariant.Primary">Follow</PtButton>
    </PtCardFooter>
</PtCard>

@code {
    [Parameter]
    public UserModel User { get; set; } = new();

    private class UserModel
    {
        public string Name { get; set; } = "";
        public string Avatar { get; set; } = "";
        public string Bio { get; set; } = "";
    }
}
```

## Styling

### Using Class

```razor
<PtButton Class="custom-class">
    Styled Button
</PtButton>

<style>
    .custom-class {
        margin-top: 1rem;
    }
</style>
```

### Using inline styles

```razor
<PtButton Style="margin-top: 1rem;">
    Styled Button
</PtButton>
```

### Using Tailwind

```razor
<PtButton Class="mt-4 shadow-lg">
    Styled Button
</PtButton>
```

## Navigation

### With NavigationManager

```razor
@inject NavigationManager Navigation

<div>
    <PtButton OnClick="@(() => Navigation.NavigateTo("/home"))">
        Home
    </PtButton>
    <PtButton OnClick="@(() => Navigation.NavigateTo("/about"))">
        About
    </PtButton>
</div>
```

### With NavLink

```razor
<NavLink href="/home">
    <PtButton Variant="ButtonVariant.Ghost">Home</PtButton>
</NavLink>
```

## Server vs WebAssembly

PACER components work in both hosting models:

### Blazor Server

```csharp
// Program.cs
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

var app = builder.Build();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
```

### Blazor WebAssembly

```csharp
// Program.cs
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

await builder.Build().RunAsync();
```

## Dependency Injection

```razor
@inject ILogger<MyComponent> Logger
@inject HttpClient Http

<PtButton OnClick="FetchData" Loading="isLoading">
    Fetch Data
</PtButton>

@code {
    private bool isLoading = false;

    private async Task FetchData()
    {
        isLoading = true;
        try
        {
            var data = await Http.GetFromJsonAsync<DataModel>("/api/data");
            Logger.LogInformation("Data fetched successfully");
        }
        catch (Exception ex)
        {
            Logger.LogError(ex, "Error fetching data");
        }
        finally
        {
            isLoading = false;
        }
    }
}
```

## Event Handling

### Synchronous Events

```razor
<PtButton OnClick="HandleClick">Click me</PtButton>

@code {
    private void HandleClick()
    {
        Console.WriteLine("Button clicked");
    }
}
```

### Asynchronous Events

```razor
<PtButton OnClick="HandleClickAsync" Loading="isLoading">
    Click me
</PtButton>

@code {
    private bool isLoading = false;

    private async Task HandleClickAsync()
    {
        isLoading = true;
        await Task.Delay(1000); // Simulate async work
        isLoading = false;
    }
}
```

### Event Arguments

```razor
<PtInput
    @bind-Value="text"
    ValueChanged="OnValueChanged" />

@code {
    private string text = "";

    private void OnValueChanged(string newValue)
    {
        Console.WriteLine($"New value: {newValue}");
    }
}
```

## Component Parameters

```razor
<!-- Parent Component -->
<MyForm OnSubmit="HandleFormSubmit" InitialEmail="user@example.com" />

<!-- MyForm.razor -->
<PtInput
    @bind-Value="email"
    Placeholder="Email" />
<PtButton OnClick="Submit">Submit</PtButton>

@code {
    [Parameter]
    public string InitialEmail { get; set; } = "";

    [Parameter]
    public EventCallback<string> OnSubmit { get; set; }

    private string email = "";

    protected override void OnInitialized()
    {
        email = InitialEmail;
    }

    private async Task Submit()
    {
        await OnSubmit.InvokeAsync(email);
    }
}
```

## Cascading Parameters

```razor
<!-- Layout or Parent -->
<CascadingValue Value="currentUser">
    @ChildContent
</CascadingValue>

<!-- Child Component -->
<PtCard>
    <p>Welcome, @CurrentUser.Name!</p>
</PtCard>

@code {
    [CascadingParameter]
    public UserModel CurrentUser { get; set; } = new();
}
```

## Best Practices

### ✅ Do

- Use `@bind-Value` for two-way binding
- Leverage dependency injection
- Use `EditForm` for validation
- Handle async operations properly
- Use strong types everywhere

### ❌ Don't

- Don't call `StateHasChanged()` unnecessarily
- Don't forget to dispose of resources
- Don't ignore async/await patterns
- Don't skip error handling
- Don't mix rendering modes carelessly

## Performance Tips

1. **Virtualization**: For long lists

```razor
<Virtualize Items="items" Context="item">
    <PtCard>@item.Name</PtCard>
</Virtualize>
```

2. **Lazy Loading**: Use lazy assemblies

```csharp
// Program.cs
builder.Services.AddLazyAssemblyLoader();
```

3. **Prerendering**: Enable for faster initial load

```csharp
// _Host.cshtml or App.razor
<component type="typeof(App)" render-mode="ServerPrerendered" />
```

## Testing

### bUnit

```csharp
using Bunit;
using Xunit;

public class ButtonTests : TestContext
{
    [Fact]
    public void Button_RendersCorrectly()
    {
        // Arrange
        var cut = RenderComponent<PtButton>(parameters => parameters
            .Add(p => p.Variant, ButtonVariant.Primary)
            .Add(p => p.ChildContent, "Click me"));

        // Assert
        cut.MarkupMatches("<button class=\"pt-button-primary\">Click me</button>");
    }

    [Fact]
    public void Button_TriggersOnClick()
    {
        // Arrange
        var clicked = false;
        var cut = RenderComponent<PtButton>(parameters => parameters
            .Add(p => p.OnClick, () => clicked = true));

        // Act
        cut.Find("button").Click();

        // Assert
        Assert.True(clicked);
    }
}
```

## Interop with JavaScript

```razor
@inject IJSRuntime JS

<PtButton OnClick="ShowAlert">Show Alert</PtButton>

@code {
    private async Task ShowAlert()
    {
        await JS.InvokeVoidAsync("alert", "Hello from PACER!");
    }
}
```

## Examples

See complete examples in our [Blazor Samples](https://github.com/pertamina/design-system/tree/main/samples/blazor).

## Troubleshooting

### Styles not loading

Ensure the CSS is properly referenced:

```razor
<link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" />
```

### Components not found

Check that the namespace is imported:

```razor
@using Pertamina.DesignSystem.Blazor
```

### Build errors

Ensure you're using .NET 8 SDK:

```bash
dotnet --version  # Should be 8.0 or higher
```

## Next Steps

- Browse [All Components](/components/)
- Learn about [Design Tokens](/tokens)
- View [Blazor Examples](https://github.com/pertamina/design-system/tree/main/samples/blazor)
