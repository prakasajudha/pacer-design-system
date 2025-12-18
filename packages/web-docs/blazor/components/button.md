# Button Component (PtButton)

Buttons allow users to take actions and make choices with a single tap or click.

## Live Preview

<ButtonDemo />

## Import

```razor
@using Pertamina.DesignSystem.Blazor
```

## Usage

### Basic Button

```razor
<PtButton>Click me</PtButton>
```

### With Click Handler

```razor
<PtButton OnClick="HandleClick">
    Click me
</PtButton>

@code {
    private void HandleClick()
    {
        Console.WriteLine("Button clicked!");
    }
}
```

## Variants

Buttons come in different variants to indicate different levels of emphasis.

```razor
<PtButton Variant="ButtonVariant.Primary">Primary</PtButton>
<PtButton Variant="ButtonVariant.Secondary">Secondary</PtButton>
<PtButton Variant="ButtonVariant.Success">Success</PtButton>
<PtButton Variant="ButtonVariant.Danger">Danger</PtButton>
<PtButton Variant="ButtonVariant.Warning">Warning</PtButton>
<PtButton Variant="ButtonVariant.Info">Info</PtButton>
<PtButton Variant="ButtonVariant.Text">Text</PtButton>
```

## Sizes

Buttons are available in different sizes.

```razor
<PtButton Size="ButtonSize.Small">Small</PtButton>
<PtButton Size="ButtonSize.Medium">Medium</PtButton>
<PtButton Size="ButtonSize.Large">Large</PtButton>
```

## Disabled State

```razor
<PtButton Disabled="true">Disabled Button</PtButton>
```

## Full Width

```razor
<PtButton FullWidth="true">Full Width Button</PtButton>
```

## Loading State

```razor
<PtButton Loading="true">Loading...</PtButton>
```

## With Icon

```razor
<PtButton>
    <i class="icon-save"></i> Save Changes
</PtButton>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Variant` | `ButtonVariant` | `Primary` | Button style variant |
| `Size` | `ButtonSize` | `Medium` | Button size |
| `Disabled` | `bool` | `false` | Whether the button is disabled |
| `Loading` | `bool` | `false` | Shows loading state |
| `FullWidth` | `bool` | `false` | Makes button full width |
| `Type` | `string` | `"button"` | HTML button type |
| `OnClick` | `EventCallback` | - | Click event handler |
| `ChildContent` | `RenderFragment` | - | Button content |
| `Class` | `string` | `""` | Additional CSS classes |

## ButtonVariant Enum

```csharp
public enum ButtonVariant
{
    Primary,
    Secondary,
    Success,
    Danger,
    Warning,
    Info,
    Text
}
```

## ButtonSize Enum

```csharp
public enum ButtonSize
{
    Small,
    Medium,
    Large
}
```

## Examples

### Form Submit Button

```razor
<EditForm Model="@model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <PtInput @bind-Value="model.Name" Label="Name" />
    
    <PtButton Type="submit" Variant="ButtonVariant.Primary">
        Submit Form
    </PtButton>
</EditForm>

@code {
    private FormModel model = new();
    
    private void HandleSubmit()
    {
        // Handle form submission
    }
}
```

### Action Buttons

```razor
<div class="button-group">
    <PtButton Variant="ButtonVariant.Success" OnClick="Save">
        Save
    </PtButton>
    <PtButton Variant="ButtonVariant.Danger" OnClick="Delete">
        Delete
    </PtButton>
    <PtButton Variant="ButtonVariant.Text" OnClick="Cancel">
        Cancel
    </PtButton>
</div>

@code {
    private void Save() => Console.WriteLine("Saving...");
    private void Delete() => Console.WriteLine("Deleting...");
    private void Cancel() => Console.WriteLine("Cancelled");
}
```

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation
- Proper ARIA attributes
- Focus management
- Screen reader support

## Styling

The component uses Tailwind CSS classes and can be customized via the `Class` property:

```razor
<PtButton Class="custom-class">Custom Styled Button</PtButton>
```
