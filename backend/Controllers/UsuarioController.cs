using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api_tw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        UsuarioRepository repositorio = new UsuarioRepository();

        /// <summary>
        /// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
        /// </summary>
        /// <returns>
        /// uma lista com os usuarios
        /// </returns>

        [HttpGet]
        [Authorize(Roles = "Administrador")]

        public async Task<ActionResult<List<UsuarioModel>>> Get()
        {
            try
            {
                var list = await repositorio.Get();
                foreach (var item in list)
                {
                    item.IdTipoNavigation.Usuario = null;
                }
                return list;

            }
            catch (System.Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Busca o Usuario pelo id especificado
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o usuario especificado pelo id.
        /// </returns>
        [HttpGet("{id}")]

        public async Task<ActionResult<UsuarioModel>> GetAction(int id)
        {
            try
            {
                return await repositorio.Get(id);
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
        /// É um metodo que cria um usuario.
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns>
        /// Retorna o usuario criado.
        /// </returns>
        [HttpPost]

        public async Task<ActionResult<UsuarioModel>> Post(UsuarioModel usuario)
        {
            try
            {
                return await repositorio.Post(usuario);
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// O método PUT substitui as alterações antigas pela novas carga dos dados.
        /// É um metodo que atualiza o banco dos usuarios.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="usuario"></param>
        /// <returns> 
        /// retorna o banco de usuarios atualizado.
        /// </returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<UsuarioModel>> Put(int id, UsuarioModel usuario)
        {
            if (id != usuario.IdUsuario)
            {
                return BadRequest();
            }
            try
            {
                await repositorio.Put(usuario);
            }
            catch (System.Exception)
            {
                var user = repositorio.Get(id);
                if (user == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return usuario;

        }

        /// <summary>
        /// O método DELETE remove um recurso específico do banco por id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o banco sem o usuario removido pelo id especificado.
        /// </returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<UsuarioModel>> Delete(int id)
        {
            var buscaId = await repositorio.Get(id);
            if (buscaId == null)
            {
                return NotFound();
            }
            await repositorio.Delete(buscaId);
            return buscaId;
        }
    }
}