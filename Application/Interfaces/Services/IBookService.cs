using Application.DTOs;
using Domain;

namespace Application.Interfaces.Services;

public interface IBookService
{
    Task<List<BookDto>> GetAllAsync();
    Task<BookDto?> GetByIdAsync(string id);
    Task<bool> DeleteAsync(string id);
    Task<bool> UpdateAsync(string id, BookDto dto);
}
