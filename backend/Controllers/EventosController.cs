using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventosController : ControllerBase
    {
        EventoRepository _repositorio = new EventoRepository();

        /// <summary>
        /// Lista todos os eventos
        /// </summary>
        /// <returns>Retorna uma lista de eventos</returns>
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<List<Eventos>>> Get()
        {
            List<Eventos> eventos = await _repositorio.Listar();

            if (eventos == null)
            {
                return NotFound();
            }

            return eventos;
        }

        /// <summary>
        /// Busca um evento através do seu ID
        /// </summary>
        /// <param name="id">Identificador único do evento buscado</param>
        /// <returns>Retorna um evento buscado</returns>
        [HttpGet("{id}")]
        public ActionResult<Eventos> Get(int id)
        {
            Eventos evento = _repositorio.BuscarPorID(id);

            if (evento == null)
            {
                return NotFound(new { mensagem = "Nenhum usuário encontrado para o ID informado" });
            }

            return evento;
        }

        /// <summary>
        /// Cadastra um novo evento
        /// </summary>
        /// <param name="evento">Objeto evento que será cadastrado</param>
        /// <returns>Retorna os dados do evento cadastrado</returns>
        [HttpPost]
        public async Task<ActionResult<Eventos>> Post(Eventos evento)
        {
            try
            {
                await _repositorio.Salvar(evento);
            }
            catch (System.Exception)
            {
                throw;
            }

            return evento;
        }

        /// <summary>
        /// Atualiza um evento existente
        /// </summary>
        /// <param name="id">Identificador único do evento que será atualizado</param>
        /// <param name="evento">Dados do evento que serão atualizados</param>
        /// <returns>Retorna status code 204 - No Content</returns>
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Eventos evento)
        {
            // Se o ID do objeto não existir, retorna erro 400 - BadRequest
            if (id != evento.IdEvento)
            {
                return BadRequest();
            }

            try
            {
                await _repositorio.Alterar(evento);
            }
            catch (System.Exception)
            {
                // Verifica se o objeto inserido existe no banco
                Eventos evento_valido = _repositorio.BuscarPorID(id);

                if (evento_valido == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // NoContent retorna 204 - Sem conteúdo
            return NoContent();
        }

        /// <summary>
        /// Deleta um evento existente
        /// </summary>
        /// <param name="id">Identificador único do evento que será deletado</param>
        /// <returns>Retorna os dados do evento que foi deletado</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Eventos>> Delete(int id)
        {
            Eventos evento_buscado = _repositorio.BuscarPorID(id);

            if (evento_buscado == null)
            {
                return NotFound(new { mensagem = "Nenhum usuário encontrado para o ID informado" });
            }

            await _repositorio.Excluir(evento_buscado);

            return evento_buscado;
        }

        /// <summary>
        /// Filtra os eventos através do nome
        /// </summary>
        /// <param name="filtro">Filtro que será aplicado na busca</param>
        /// <returns>Retorna uma lista de eventos filtrados</returns>
        [HttpGet("FiltrarPorNome")]
        public ActionResult<List<Eventos>> GetFiltrar([FromBody]string filtro)
        {

            List<Eventos> eventos_filtrados = _repositorio.FiltrarPorNome(filtro);

            return eventos_filtrados;
        }

        /// <summary>
        /// Ordena uma lista de eventos
        /// </summary>
        /// <returns>Retorna uma lista de eventos ordenada</returns>
        [HttpGet("Ordenar")]
        public ActionResult<List<Eventos>> GetOrdenar()
        {

            List<Eventos> eventos_ordenados = _repositorio.Ordenar();

            return eventos_ordenados;
        }
    }
}
