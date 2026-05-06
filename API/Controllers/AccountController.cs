using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(SignInManager<User> _signInManager) : BaseApiController
{
    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterDto registerDto)
    {
        var user = new User
        {
            UserName = registerDto.Email,
            DisplayName = registerDto.DisplayName
        };
        
        var result = await _signInManager.UserManager.CreateAsync(user, registerDto.Password);
        
        if (!result.Succeeded) return BadRequest(result.Errors);
        
        return Ok(new { user.DisplayName });
    }

    [AllowAnonymous]
    [HttpGet("public-test")]
    public ActionResult PublicTest()
    {
        return Ok("Public endpoint works");
    }

    [HttpGet("auth-test")]
    public ActionResult AuthTest()
    {
        return Ok(new { message = "Authorized endpoint works", user = User.Identity?.Name });
    }

    [Authorize]
    [HttpPost("logout")]
    public async Task<ActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return NoContent();
    }

    [AllowAnonymous]
    [HttpGet("user-info")]
    public async Task<ActionResult> GetUserInfo()
    {
        if (User.Identity?.IsAuthenticated == false) return NoContent();
        
        var user = await _signInManager.UserManager.GetUserAsync(User);

        if (user == null) return Unauthorized();

        return Ok(new
        {
            user.Id,
            user.DisplayName,
            user.UserName,
        });
    }
}


public class RegisterDto
{
    public required string Email { get; set; }
    public required string DisplayName { get; set; }
    public required string Password { get; set; }
}