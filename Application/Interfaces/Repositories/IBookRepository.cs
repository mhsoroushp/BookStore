using Domain;

namespace Application.Interfaces.Repositories;

public interface IBookRepository
{
    Task<List<Book>> GetAllAsync();
    Task<Book?> GetByIdAsync(string id);
    Task<Book> CreateAsync(Book book);
    Task<bool> DeleteAsync(Book book);
    Task<Book> UpdateAsync(Book book);
}
