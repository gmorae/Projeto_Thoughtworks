using  System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace api_tw.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    [Produces ("application/json")]

    public class TipoUsuarioController : ControllerBase {
        TipoUsuarioRepository repositorio = new TipoUsuarioRepository ();

        /// <summary>
        /// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
        /// É um metodo que retorna os tipo de usuario do banco.
        /// </summary>
        /// <returns>
        /// Retorna os tipos de usuarios ja criado no banco.
        /// </returns>
        [HttpGet]
        [Authorize(Roles="Administrador")]
        public async Task<ActionResult<List<TipoUsuarioModel>>> Get () {
            try {
                return await repositorio.Get ();
            } catch (System.Exception) {

                throw;
            }
        }

        /// <summary>
        /// É um metodo que retorna o tipo do usuario do banco pelo Id especifico.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o tipo do usuario pelo Id especificado.
        /// </returns>
        [HttpGet ("{id}")]
        public async Task<ActionResult<TipoUsuarioModel>> Get (int id) {

            try {
                return await repositorio.Get (id);
            } catch (System.Exception) {

                throw;
            }
        }

        /// <summary>
        /// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
        /// É um metodo que cria um tipo de usuario.
        /// </summary>
        /// <param name="tipoUsuario"></param>
        /// <returns>
        /// Retorna o tipo do usuario criado.
        /// </returns>
        [HttpPost]
        public async Task<ActionResult<TipoUsuarioModel>> Post (TipoUsuarioModel tipoUsuario) {
            try {
                return await repositorio.Post (tipoUsuario);
            } catch (System.Exception) {
                throw;
            }
        }

        /// <summary>
        /// metodo que atualiza o tipo de usuario pelo id especificado.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="tipoUsuario"></param>
        /// <returns>
        /// retorna o tipo do usuario atualizado
        /// </returns>
        [HttpPut ("{id}")]
        public async Task<ActionResult<TipoUsuarioModel>> Put (int id, TipoUsuarioModel tipoUsuario) {
            if (id != tipoUsuario.IdTipo) {
                return NotFound ();
            }
            try {
                return await repositorio.Put (tipoUsuario);
            } catch (System.Exception) {

                var tipo = repositorio.Get (id);
                if (tipo == null) {
                    return NotFound ();
                } else {
                    throw;
                }

            }
        }

        /// <summary>
        /// O método DELETE remove um recurso específico do banco por id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o banco sem o id especifico do tipo do usuario.
        /// </returns>
        [HttpDelete ("{id}")]
        public async Task<ActionResult<TipoUsuarioModel>> Delete (int id) {
            var buscarId = await repositorio.Get (id);
            if (buscarId == null) {
                return NotFound ();
            }
            await repositorio.Delete (buscarId);
            return buscarId;
        }

    }
}