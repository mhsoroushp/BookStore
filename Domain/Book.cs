using System;

namespace Domain;

public class Book
{
    public Guid Id { get; set; }
    public required string Title { get; set; } = null!;
    public string? Author { get; set; } = null!;
    public decimal? Price { get; set; }
    public string? Description { get; set; }
}