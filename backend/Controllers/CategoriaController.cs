using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace api_tw.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]

    public class CategoriaController : ControllerBase
    {
        CategoriaRepository repositorio = new CategoriaRepository();
        
        [EnableCors]
        // [Authorize(Roles= "Administrador")]
        [HttpGet]
        public async Task<ActionResult<List<CategoriaModel>>> Get()
        {
            try
            {
                return await repositorio.Get();
            }
            catch (System.Exception)
            {

                throw;
            }

        }
        
        [HttpGet("{categoria}")]
        public async Task<ActionResult<List<CategoriaModel>>> Get(string categoria)
        {
            try
            {
                List<CategoriaModel> lstCategoria = await repositorio.Get(categoria);

                return lstCategoria;
            }
            catch (System.Exception)
            {
                throw;
            }
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaModel>> Get(int id)
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

        [HttpPost]

        public async Task<ActionResult<CategoriaModel>> Post(CategoriaModel categoria)
        {
            try
            {
                return await repositorio.Post(categoria);
            }
            catch (System.Exception)
            {

                throw;
            }
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<CategoriaModel>> Put(int id, CategoriaModel categoria)
        {
            if (id != categoria.IdCategoria)
            {
                return BadRequest();
            }
            try
            {
                await repositorio.Put(categoria);
            }
            catch (System.Exception)
            {
                var cat = repositorio.Get(id);
                if (cat == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return categoria;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CategoriaModel>> Delete(int id)
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