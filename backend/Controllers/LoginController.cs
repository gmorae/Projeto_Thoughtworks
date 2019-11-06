using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using api_tw.Models;

namespace EventShareBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        EasyTalkContext context = new EasyTalkContext();

        private IConfiguration config;
        public LoginController(IConfiguration mconfig){
            config = mconfig;
        } 

        /// <summary>
        /// Esse metodo vai autenticar o login do usuario e senha gerando um token valido com autorização ao acesso da area especifica.
        /// </summary>
        /// <param name="login"></param>
        /// <returns>
        /// Retorna o usuario já autenticado com a validação do login e senha.
        /// </returns>  
        [EnableCors]
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(UsuarioModel login){
            IActionResult resposta = Unauthorized();

            var usuario = autenticarUsuario(login);

            if(usuario != null){
                var tokenString = gerarJsonWebToken(usuario);
                resposta = Ok(new { token = tokenString });
            }

            return resposta;
        }

        private UsuarioModel autenticarUsuario(UsuarioModel login){
            var usuario = context.Usuario.Include(u => u.IdTipoNavigation).FirstOrDefault(user => user.Email == login.Email && user.Senha == login.Senha);


            return usuario;
        }

        private string gerarJsonWebToken(UsuarioModel infousuario){
            var chaveDeSegurança = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"])); 
            var credencial = new SigningCredentials(chaveDeSegurança, SecurityAlgorithms.HmacSha256);

            var claims = new[]{
                new Claim(JwtRegisteredClaimNames.Email, infousuario.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, infousuario.IdTipoNavigation.NomeTipoUsuario),
                new Claim("Role", infousuario.IdTipoNavigation.NomeTipoUsuario)
            };

            var token = new JwtSecurityToken(config["Jwt:Issuer"], 
                config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120), 
                signingCredentials: credencial
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        
        }
    }
}