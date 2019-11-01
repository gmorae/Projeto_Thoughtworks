using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace api_tw.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase {

        UsuarioRepository repositorio = new UsuarioRepository ();

        [HttpGet]

        public async Task<ActionResult<List<UsuarioModel>>> Get () {
            try {
                var list = await repositorio.Get ();
                foreach (var item in list) {
                    item.IdTipoNavigation.Usuario = null;
                }
                return list;

            } catch (System.Exception) {
                throw;
            }
        }

        [HttpGet ("{id}")]

        public async Task<ActionResult<UsuarioModel>> GetAction (int id) {
            try {
                return await repositorio.Get(id);
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpPost]

        public async Task<ActionResult<UsuarioModel>> Post (UsuarioModel usuario) {
            try {
                return await repositorio.Post (usuario);
            } catch (System.Exception) {

                throw;
            }
        }

        [HttpPut ("{id}")]
        public async Task<ActionResult<UsuarioModel>> Put (int id, UsuarioModel usuario) {
            if (id != usuario.IdUsuario) {
                return BadRequest ();
            }
            try {
                await repositorio.Put (usuario);
            } catch (System.Exception) {
                var user = repositorio.Get (id);
                if (user == null) {
                    return NotFound ();
                } else {
                    throw;
                }
            }
            return usuario;

        }

        [HttpDelete ("{id}")]
        public async Task<ActionResult<UsuarioModel>> Delete (int id) {
            var buscaId = await repositorio.Get (id);
            if (buscaId == null) {
                return NotFound ();
            }
            await repositorio.Delete (buscaId);
            return buscaId;
        }
    }
}