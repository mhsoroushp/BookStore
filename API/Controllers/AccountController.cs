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
}


public class RegisterDto
{
    public required string Email { get; set; }
    public required string DisplayName { get; set; }
    public required string Password { get; set; }
}