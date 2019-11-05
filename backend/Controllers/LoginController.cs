using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using api_tw.Models;
using api_tw.Repositories;
using backend.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult BuscarEmailSenha(LoginViewModel login)
        {
            UsuarioRepository repo = new UsuarioRepository();
            try
            {
                var usuario = repo.BuscarPorEmailSenha(login.Email, login.Senha);
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                if (usuario == null)
                {
                    return NotFound("Usuario não encontrado!");
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuario.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuario.IdTipoNavigation.NomeTipoUsuario),
                    new Claim("Role", usuario.IdTipoNavigation.NomeTipoUsuario)
                };

                var token = new JwtSecurityToken(
                    issuer: "easyTalk",
                    audience: "easyTalk",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: credentials
                );

                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}