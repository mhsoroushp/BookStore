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
            if (result.ValidationErrors != null)
                return StatusCode(result.Code, result.ValidationErrors);
            return StatusCode(result.Code, result.Error);
        }

        if (result.Value == null)
            return NoContent();

        return Ok(result.Value);
    }
}   