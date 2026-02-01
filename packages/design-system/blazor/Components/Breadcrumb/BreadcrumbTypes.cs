namespace Pertamina.DesignSystem.Blazor;

public class BreadcrumbItem
{
    public string Title { get; set; } = string.Empty;
    public string? Icon { get; set; }
    public string? Link { get; set; }
    public bool Disabled { get; set; }
}

public enum BreadcrumbType
{
    Ellipsis,
    Dropdown
}
