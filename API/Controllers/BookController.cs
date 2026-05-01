using Application.DTOs;
using Application.Interfaces.Services;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BookController(IBookService bookService) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<BookDto>>> GetBooks()
    {
        var books = await bookService.GetAllAsync();
        return Ok(books);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BookDto>> GetBookById(string id)
    {
        var book = await bookService.GetByIdAsync(id);

        if (book is null) return NotFound();

        return Ok(book);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteBookById(string id)
    {
        var deleted = await bookService.DeleteAsync(id);

        if (!deleted) return NotFound();

        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> ModifyBook(string id, BookDto dto)
    {
        var updated = await bookService.UpdateAsync(id, dto);

        if (!updated) return NotFound();

        return NoContent();
    }
}
