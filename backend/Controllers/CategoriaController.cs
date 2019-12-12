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

        /// <summary>
        /// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
        /// É um metodo que retorna as categoria do banco.
        /// </summary>
        /// <returns>
        /// Retorna as categoria do banco.
        /// </returns>
        [EnableCors]
        // [Authorize(Roles = "Administrador")]
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

        /// <summary>
        /// É um metodo que retorna as categoria do banco pela categoria informada pelo usuario.
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns>
        /// Retorna a categoria escolhida.
        /// </returns>
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


        /// <summary>
        /// É um metodo que retorna a categoria do banco pelo Id especifico.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna categoria pelo Id especificado.
        /// </returns>
        [HttpGet("id/{id}")]
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

        /// <summary>
        /// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
        /// É um metodo que cria uma categoria.
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns>
        /// Retorna a categoria criada.
        /// </returns>
        [HttpPost]
        // [Authorize(Roles = "Administrador")]
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


        /// <summary>
        /// O método PUT substitui as alterações antigas pela novas carga dos dados.
        /// É um metodo que atualiza o banco das categorias.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="categoria"></param>
        /// <returns>
        /// Retorna o banco atualizado pelo id.
        /// </returns>
        [HttpPut("{id}")]
        // [Authorize(Roles = "Administrador")]
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

        /// <summary>
        /// O método DELETE remove um recurso específico do banco por id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o banco sem a categoria removida especificada pelo id.
        /// </returns>
        [HttpDelete("{id}")]
        // [Authorize(Roles = "Administrador")]
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