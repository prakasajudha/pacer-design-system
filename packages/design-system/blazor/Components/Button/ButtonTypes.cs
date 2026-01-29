namespace Pertamina.DesignSystem.Blazor;

public enum ButtonVariant
{
    Solid,
    Secondary,
    Outline,
    Ghost,
    LinkPrimary,
    LinkSecondary
}

public enum ButtonSize
{
    Small,
    Medium,
    /// <summary>Obsolete: Figma PACER hanya sm/md. Map ke Medium.</summary>
    [Obsolete("Use Medium. Size lg tidak ada di design PACER.")]
    Large
}

/// <summary>
/// Button color (primary / danger / success / warning / neutral).
/// </summary>
public enum ButtonColor
{
    Primary,
    Danger,
    Success,
    Warning,
    Neutral
}
