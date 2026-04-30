using System;

namespace Domain;

public class Book
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; } = null!;
    public string? Author { get; set; } = null!;
    public decimal? Price { get; set; }
    public string? Description { get; set; }
}