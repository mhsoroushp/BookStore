using Application.Core;
using Application.DTOs;

namespace Application.Interfaces.Services;

public interface IBookService
{
    Task<Result<List<BookDto>>> GetAllAsync();
    Task<Result<BookDto>> GetByIdAsync(string id);
    Task<Result<string>> CreateAsync(BookDto dto);
    Task<Result<bool>> DeleteAsync(string id);
    Task<Result<BookDto>> UpdateAsync(string id, BookDto dto);
    Task<Result<PaginatedBooksDto<BookDto>>> GetPaginatedAsync(string? cursor, int take = 3);
}
