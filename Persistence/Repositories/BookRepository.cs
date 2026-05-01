using Application.Interfaces.Repositories;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories;

public class BookRepository(AppDbContext context) : IBookRepository
{
    public Task<List<Book>> GetAllAsync() => context.Books.ToListAsync();

    public async Task<Book?> GetByIdAsync(string id) => await context.Books.FindAsync(id);

    public async Task DeleteAsync(Book book)
    {
        context.Books.Remove(book);
        await context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Book book)
    {
        context.Books.Update(book);
        await context.SaveChangesAsync();
    }
}
