using Application.Core;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    protected ActionResult HandleResult<T>(Result<T> result)
    {
        if (!result.IsSuccess)
        {
            if (result.ValidationErrors is not null && result.ValidationErrors.Count > 0)
                return StatusCode(result.Code, result);

            if (result.Code == 404)
                return NotFound(result.Error);

            return StatusCode(result.Code, result.Error);
        }

        if (result.Value is null)
             return NoContent();

        return Ok(result.Value);
    }
}   