using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositorio;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api_tw.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    [Produces ("application/json")]

    public class TipoUsuarioController : ControllerBase {
        TipoUsuarioRepositorio repositorio = new TipoUsuarioRepositorio ();

        [HttpGet]
        [Authorize(Roles="Administrador")]
        public async Task<ActionResult<List<TipoUsuario>>> Get () {
            try {
                return await repositorio.Get ();
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<TipoUsuario>> Get (int id) {

            try {
                return await repositorio.Get (id);
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult<TipoUsuario>> Post (TipoUsuario tipoUsuario) {
            try {
                return await repositorio.Post (tipoUsuario);
            } catch (System.Exception) {
                throw;
            }
        }

        [HttpPut ("{id}")]
        public async Task<ActionResult<TipoUsuario>> Put (int id, TipoUsuario tipoUsuario) {
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
        public async Task<ActionResult<TipoUsuario>> Delete (int id) {
            var buscarId = await repositorio.Get (id);
            if (buscarId == null) {
                return NotFound ();
            }
            await repositorio.Delete (buscarId);
            return buscarId;
        }

    }
}