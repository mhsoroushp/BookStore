using Application.Core;
using Application.DTOs;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BookController(IBookService bookService) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<BookDto>>> GetBooks()
    {
        var result = await bookService.GetAllAsync();
        return HandleResult(result);
    }

    [AllowAnonymous]
    [HttpGet("paginated")]
    public async Task<ActionResult<PaginatedBooksDto<BookDto>>> GetBooksPaginated([FromQuery] string? cursor, [FromQuery] int take = 3)
    {
        var result = await bookService.GetPaginatedAsync(cursor, take);
        return HandleResult(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BookDto>> GetBookById(string id)
    {
        var result = await bookService.GetByIdAsync(id);
        return HandleResult(result);
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateBook(BookDto dto)
    {
        var result = await bookService.CreateAsync(dto);
        return HandleResult(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteBookById(string id)
    {
        var result = await bookService.DeleteAsync(id);
        return HandleResult(result);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> ModifyBook(string id, BookDto dto)
    {
        var result = await bookService.UpdateAsync(id, dto);
        return HandleResult(result);
    }
}
