using Application.Interfaces.Repositories;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories;

public class BookRepository(AppDbContext context) : IBookRepository
{
    public Task<List<Book>> GetAllAsync() => context.Books.ToListAsync();

    public async Task<Book?> GetByIdAsync(string id) => await context.Books.FindAsync(id);

    public async Task<Book> CreateAsync(Book book)
    {
        context.Books.Add(book);
        await context.SaveChangesAsync();
        return book;
    }

    public async Task<bool> DeleteAsync(Book book)
    {
        context.Books.Remove(book);
        var result = await context.SaveChangesAsync();
        return result > 0;
    }

    public async Task<Book> UpdateAsync(Book book)
    {
        context.Books.Update(book);
        await context.SaveChangesAsync();
        return book;
    }
}
