using Domain;

namespace Application.Interfaces.Repositories;

public interface IBookRepository
{
    Task<List<Book>> GetAllAsync();
    Task<Book?> GetByIdAsync(string id);
    Task DeleteAsync(Book book);
    Task UpdateAsync(Book book);
}
