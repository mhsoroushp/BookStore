namespace Application.DTOs;

public class PaginatedBooksDto<T>
{
    public List<T> Items { get; set; } = new();
    public string? NextCursor { get; set; }
    public string? PreviousCursor { get; set; }
    public bool HasNextPage { get; set; }
    public bool HasPreviousPage { get; set; }
}
