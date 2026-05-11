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

    public async Task<(List<Book> books, string? nextCursor, bool hasNextPage)> GetPaginatedAsync(string? cursor, int take = 3)
    {
        var query = context.Books
                    .Where(b => string.Compare(b.Id, cursor ?? string.Empty) > 0)
                    .OrderBy(b => b.Id);

        var books = await query.Take(take + 1).ToListAsync();
        bool hasNextPage = books.Count > take;
        if (hasNextPage)            
            books = books.Take(take).ToList();

        string? nextCursor = hasNextPage ? books.Last().Id : null;
    
        return (books, nextCursor, hasNextPage);
    }
}
