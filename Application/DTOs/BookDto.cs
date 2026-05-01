namespace Application.DTOs;

public class BookDto
{
    public required string Id { get; set; }
    public required string Title { get; set; }
    public string? Author { get; set; }
    public decimal? Price { get; set; }
    public string? Description { get; set; }
}
