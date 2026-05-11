using Application.Core;
using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using FluentValidation;
using Domain;

namespace Application.Services.Books;

public class BookService(IBookRepository bookRepository, IValidator<BookDto> validator) : IBookService
{
    public async Task<Result<List<BookDto>>> GetAllAsync()
    {
        var books = await bookRepository.GetAllAsync();
        var dtos = books.Select(b => new BookDto
        {
            Id = b.Id,
            Title = b.Title,
            Author = b.Author,
            Price = b.Price,
            Description = b.Description
        }).ToList();
        return Result<List<BookDto>>.Success(dtos);
    }

    public async Task<Result<BookDto>> GetByIdAsync(string id)
    {
        var book = await bookRepository.GetByIdAsync(id);
        if (book is null)
            return Result<BookDto>.Failure("Book not found", 404);

        return Result<BookDto>.Success(new BookDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            Price = book.Price,
            Description = book.Description
        });
    }

    public async Task<Result<string>> CreateAsync(BookDto dto)
    {
        var validation = await validator.ValidateAsync(dto);
        if (!validation.IsValid)
        {
            var errors = validation.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());
            return Result<string>.ValidationFailure(errors);
        }

        var book = new Book
        {
            Title = dto.Title,
            Author = dto.Author,
            Price = dto.Price,
            Description = dto.Description
        };

        var createdBook = await bookRepository.CreateAsync(book);

        if (createdBook is null) return Result<string>.Failure("Failed to create book", 400);

        return Result<string>.Success(createdBook.Id);
    }

    public async Task<Result<bool>> DeleteAsync(string id)
    {
        var book = await bookRepository.GetByIdAsync(id);
        if (book is null)
            return Result<bool>.Failure("Book not found", 404);

        var isDeleted = await bookRepository.DeleteAsync(book);
        return Result<bool>.Success(isDeleted);
    }

    public async Task<Result<BookDto>> UpdateAsync(string id, BookDto dto)
    {
        var validation = await validator.ValidateAsync(dto);
        if (!validation.IsValid)
        {
            var errors = validation.Errors
                .GroupBy(e => e.PropertyName)
                .ToDictionary(g => g.Key, g => g.Select(e => e.ErrorMessage).ToArray());
            return Result<BookDto>.ValidationFailure(errors);
        }

        var book = await bookRepository.GetByIdAsync(id);
        if (book is null)
            return Result<BookDto>.Failure("Book not found", 404);

        book.Title = dto.Title;
        book.Author = dto.Author;
        book.Price = dto.Price;
        book.Description = dto.Description;

        await bookRepository.UpdateAsync(book);

        var updatedDto = new BookDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            Price = book.Price,
            Description = book.Description
        };

        return Result<BookDto>.Success(updatedDto);
    }

    public async Task<Result<PaginatedBooksDto<BookDto>>> GetPaginatedAsync(string? cursor, int take = 3)
    {
        var (books, nextCursor, hasNextPage) = await bookRepository.GetPaginatedAsync(cursor, take);

        var dtos = books.Select(b => new BookDto
        {
            Id = b.Id,
            Title = b.Title,
            Author = b.Author,
            Price = b.Price,
            Description = b.Description
        }).ToList();

        var result = new PaginatedBooksDto<BookDto>
        {
            Items = dtos,
            NextCursor = nextCursor,
            HasNextPage = hasNextPage,
            HasPreviousPage = !string.IsNullOrEmpty(cursor)
        };

        return Result<PaginatedBooksDto<BookDto>>.Success(result);
    }
}
