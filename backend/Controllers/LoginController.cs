using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using api_tw.Models;
using api_tw.Repositorio;
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
    
        [AllowAnonymous]
        [HttpPost]
        public IActionResult BuscarEmailSenha(LoginViewModel login)
        {
            UsuarioRepositorio repo = new UsuarioRepositorio();
            try
            {
                var usuario = repo.BuscarPorEmailSenha(login.Email, login.Senha);
                if (usuario == null)
                {
                    return NotFound("Usuario não encontrado!");
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuario.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuario.IdTipoNavigation.NomeTipoUsuario)
                };

                var token = new JwtSecurityToken(
                    issuer: "easyTalk",
                    audience: "easyTalk",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30)
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