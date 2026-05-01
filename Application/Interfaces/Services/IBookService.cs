using Application.Core;
using Application.DTOs;

namespace Application.Interfaces.Services;

public interface IBookService
{
    Task<Result<List<BookDto>>> GetAllAsync();
    Task<Result<BookDto>> GetByIdAsync(string id);
    Task<Result<BookDto>> CreateAsync(BookDto dto);
    Task<Result<bool>> DeleteAsync(string id);
    Task<Result<bool>> UpdateAsync(string id, BookDto dto);
}
