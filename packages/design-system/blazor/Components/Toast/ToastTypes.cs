namespace Pertamina.DesignSystem.Blazor;

/// <summary>
/// Variant visual dari Toast component
/// </summary>
public enum ToastVariant
{
    Neutral,
    Information,
    Success,
    Warning,
    Error
}

/// <summary>
/// Position untuk Toast container
/// </summary>
public enum ToastPosition
{
    TopLeft,
    Top,
    TopRight,
    Right,
    BottomRight,
    Bottom,
    BottomLeft,
    Left
}

/// <summary>
/// Options untuk menampilkan toast
/// </summary>
public class ToastOptions
{
    /// <summary>
    /// Duration dalam milliseconds (default: 5000, 0 = tidak auto close)
    /// </summary>
    public int Duration { get; set; } = 5000;

    /// <summary>
    /// Position toast (optional, akan menggunakan global position jika tidak di-set)
    /// </summary>
    public ToastPosition? Position { get; set; }

    /// <summary>
    /// Custom icon (RenderFragment)
    /// </summary>
    public Microsoft.AspNetCore.Components.RenderFragment? Icon { get; set; }

    /// <summary>
    /// Custom className untuk icon container
    /// </summary>
    public string? IconClassName { get; set; }

    /// <summary>
    /// Custom style untuk icon container
    /// </summary>
    public string? IconStyle { get; set; }
}

/// <summary>
/// Toast item dalam state
/// </summary>
public class ToastItem
{
    /// <summary>
    /// Unique ID untuk toast
    /// </summary>
    public string Id { get; set; } = string.Empty;

    /// <summary>
    /// Variant visual
    /// </summary>
    public ToastVariant Variant { get; set; } = ToastVariant.Neutral;

    /// <summary>
    /// Title toast
    /// </summary>
    public string? Title { get; set; }

    /// <summary>
    /// Description toast
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// Duration dalam milliseconds
    /// </summary>
    public int Duration { get; set; } = 5000;

    /// <summary>
    /// Custom icon
    /// </summary>
    public Microsoft.AspNetCore.Components.RenderFragment? Icon { get; set; }

    /// <summary>
    /// Custom className untuk icon
    /// </summary>
    public string? IconClassName { get; set; }

    /// <summary>
    /// Custom style untuk icon
    /// </summary>
    public string? IconStyle { get; set; }
}
