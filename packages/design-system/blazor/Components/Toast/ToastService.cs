using System;
using System.Collections.Generic;
using System.Linq;

namespace Pertamina.DesignSystem.Blazor;

/// <summary>
/// Service untuk mengelola toast notifications
/// </summary>
public class ToastService : IDisposable
{
    private readonly List<ToastItem> _toasts = new();
    private ToastPosition _globalPosition = ToastPosition.TopRight;
    
    /// <summary>
    /// Event yang dipanggil saat state berubah
    /// </summary>
    public event Action? OnChange;

    /// <summary>
    /// Get current toasts
    /// </summary>
    public IReadOnlyList<ToastItem> Toasts => _toasts.AsReadOnly();

    /// <summary>
    /// Get current global position
    /// </summary>
    public ToastPosition Position => _globalPosition;

    /// <summary>
    /// Generate unique ID untuk toast
    /// </summary>
    private static string GenerateId()
    {
        return $"toast-{DateTime.Now.Ticks}-{Guid.NewGuid().ToString()[..8]}";
    }

    /// <summary>
    /// Show neutral toast
    /// </summary>
    public string Neutral(string title, string? description = null, ToastOptions? options = null)
    {
        return Show(ToastVariant.Neutral, title, description, options);
    }

    /// <summary>
    /// Show information toast
    /// </summary>
    public string Information(string title, string? description = null, ToastOptions? options = null)
    {
        return Show(ToastVariant.Information, title, description, options);
    }

    /// <summary>
    /// Show success toast
    /// </summary>
    public string Success(string title, string? description = null, ToastOptions? options = null)
    {
        return Show(ToastVariant.Success, title, description, options);
    }

    /// <summary>
    /// Show warning toast
    /// </summary>
    public string Warning(string title, string? description = null, ToastOptions? options = null)
    {
        return Show(ToastVariant.Warning, title, description, options);
    }

    /// <summary>
    /// Show error toast
    /// </summary>
    public string Error(string title, string? description = null, ToastOptions? options = null)
    {
        return Show(ToastVariant.Error, title, description, options);
    }

    /// <summary>
    /// Show toast dengan variant custom
    /// </summary>
    public string Show(ToastVariant variant, string title, string? description = null, ToastOptions? options = null)
    {
        var id = GenerateId();
        var toast = new ToastItem
        {
            Id = id,
            Variant = variant,
            Title = title,
            Description = description,
            Duration = options?.Duration ?? 5000,
            Icon = options?.Icon,
            IconClassName = options?.IconClassName,
            IconStyle = options?.IconStyle
        };

        _toasts.Add(toast);
        NotifyStateChanged();
        return id;
    }

    /// <summary>
    /// Remove toast by ID
    /// </summary>
    public void Remove(string id)
    {
        var toast = _toasts.FirstOrDefault(t => t.Id == id);
        if (toast != null)
        {
            _toasts.Remove(toast);
            NotifyStateChanged();
        }
    }

    /// <summary>
    /// Clear all toasts
    /// </summary>
    public void Clear()
    {
        _toasts.Clear();
        NotifyStateChanged();
    }

    /// <summary>
    /// Set global position untuk semua toast baru
    /// </summary>
    public void SetPosition(ToastPosition position)
    {
        _globalPosition = position;
        NotifyStateChanged();
    }

    /// <summary>
    /// Get current global position
    /// </summary>
    public ToastPosition GetPosition()
    {
        return _globalPosition;
    }

    private void NotifyStateChanged() => OnChange?.Invoke();

    public void Dispose()
    {
        _toasts.Clear();
        GC.SuppressFinalize(this);
    }
}
