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

        [HttpGet]
        [Authorize(Roles="Administrador")]
        public async Task<ActionResult<List<TipoUsuarioModel>>> Get () {
            try {
                return await repositorio.Get ();
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<TipoUsuarioModel>> Get (int id) {

            try {
                return await repositorio.Get (id);
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult<TipoUsuarioModel>> Post (TipoUsuarioModel tipoUsuario) {
            try {
                return await repositorio.Post (tipoUsuario);
            } catch (System.Exception) {
                throw;
            }
        }

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