using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain;

namespace Application.Services.Books;

public class BookService(IBookRepository bookRepository) : IBookService
{
    public async Task<List<BookDto>> GetAllAsync()
    {
        var books = await bookRepository.GetAllAsync();
        return books.Select(b => new BookDto
        {
            Id = b.Id,
            Title = b.Title,
            Author = b.Author,
            Price = b.Price,
            Description = b.Description
        }).ToList();
    }

    public async Task<BookDto?> GetByIdAsync(string id)
    {
        var book = await bookRepository.GetByIdAsync(id);
        if (book is null) return null;

        return new BookDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            Price = book.Price,
            Description = book.Description
        };
    }

    public async Task<bool> DeleteAsync(string id)
    {
        var book = await bookRepository.GetByIdAsync(id);
        if (book is null) return false;

        await bookRepository.DeleteAsync(book);
        return true;
    }

    public async Task<bool> UpdateAsync(string id, BookDto dto)
    {
        var book = await bookRepository.GetByIdAsync(id);
        if (book is null) return false;

        book.Title = dto.Title;
        book.Author = dto.Author;
        book.Price = dto.Price;
        book.Description = dto.Description;

        await bookRepository.UpdateAsync(book);
        return true;
    }
}
