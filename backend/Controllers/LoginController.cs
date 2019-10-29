using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using api_tw.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace api_tw.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        easyTalkContext context = new easyTalkContext();

        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]

        public IActionResult Login(Usuario login)
        {
            IActionResult resposta = Unauthorized();

            var usuario  = autenticarUsuario(login);

            if(usuario != null)
            {
                var tokenString  = gerarJsonWebToken(usuario);
                resposta = Ok(new {token = tokenString});
            }

            return resposta;
        }

        private Usuario autenticarUsuario(Usuario login)
        {
            var usuario = context.Usuario.FirstOrDefault(user => user.Email == login.Email && user.Senha == login.Senha);

            if(usuario != null)
            {
                return login;
            }

            return usuario;
        }

        private string gerarJsonWebToken(Usuario infoUsuario)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                // new Claim(JwtRegisteredClaimNames.NameId, infoUsuario.Name),
                new Claim(JwtRegisteredClaimNames.Email, infoUsuario.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(128),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}