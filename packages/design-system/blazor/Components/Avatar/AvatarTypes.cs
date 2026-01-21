namespace Pertamina.DesignSystem.Blazor;

public enum AvatarMode
{
    Single,
    Group
}

public enum AvatarType
{
    Circle,
    Square
}

public enum AvatarSize
{
    Xxs,
    Xs,
    Sm,
    Md,
    Lg,
    Xl,
    Xxl
}

public enum AvatarBadge
{
    Online,
    Offline,
    Icon
}

public class AvatarItem
{
    public string? Img { get; set; }
    public string? FullName { get; set; }
}
