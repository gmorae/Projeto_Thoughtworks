using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using api_tw.Repositories;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class EventosController : ControllerBase
    {
        EventosRepository eventosRepository = new EventosRepository();

        UpRepository up = new UpRepository();

        /// <summary>
        /// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
        /// É um metodo que retorna os eventos do banco.
        /// </summary>
        /// <returns>
        /// Retorna os eventos ja criados do banco.
        /// </returns>
        [HttpGet]
        [Authorize(Roles = "Administrador")]

        public async Task<ActionResult<List<Eventos>>> Get()
        {
            try
            {
                List<Eventos> listaDeEventos = await eventosRepository.Get();
                if (listaDeEventos == null)
                {
                    return NotFound();
                }
                foreach (Eventos item in listaDeEventos)
                {
                    item.IdCategoriaNavigation.Eventos = null;
                    item.IdResponsavelNavigation.EventosIdResponsavelNavigation = null;
                }
                return listaDeEventos;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// É um metodo que retorna as os eventos aprovados do banco.
        /// </summary>
        /// <returns>
        /// Retorna todos eventos aprovados
        /// </returns>
        [HttpGet("aprovado")]
        [Authorize(Roles = "Administrador")]

        public async Task<ActionResult<List<Eventos>>> GetAprovados()
        {
            try
            {
                List<Eventos> listApro = await eventosRepository.GetAprovado();
                if (listApro == null)
                {
                    return NotFound();
                }
                return listApro;

            }
            catch (System.Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// É um metodo que retorna as os eventos que estão aguardando aprovação ou rejeição.
        /// </summary>
        /// <returns>
        /// Retorna todos eventos que estão aguandando uma resposta.
        /// </returns>
        [HttpGet("aguardando")]
        [Authorize(Roles = "Administrador")]

        public async Task<ActionResult<List<Eventos>>> GetAguardando()
        {
            try
            {
                List<Eventos> listAguard = await eventosRepository.GetAguardando();
                if (listAguard == null)
                {
                    return NotFound();
                }
                return listAguard;

            }
            catch (System.Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// É um metodo que retorna as os eventos reprovados do banco.
        /// </summary>
        /// <returns>
        /// Retorna todos eventos reprovados.
        /// </returns>
        [HttpGet("reprovado")]
        [Authorize(Roles = "Administrador")]

        public async Task<ActionResult<List<Eventos>>> GetReprovado()
        {
            try
            {
                List<Eventos> listRepro = await eventosRepository.GetReprovado();
                if (listRepro == null)
                {
                    return NotFound();
                }
                return listRepro;

            }
            catch (System.Exception)
            {

                throw;
            }
        }

        /// <summary>
        ///  É um metodo que retorna o evento pelo id especifico.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// retorna o evento pelo id especificado.
        /// </returns>
        [HttpGet("{id}")]

        public async Task<ActionResult<Eventos>> Get(int id)
        {
            try
            {
                Eventos listaDeEventos = await eventosRepository.Get(id);

                if (listaDeEventos == null)
                {
                    return NotFound();
                }

                return listaDeEventos;

            }
            catch (System.Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// É um metodo que busca alguma informação nos evento.
        /// </summary>
        /// <param name="evento"></param>
        /// <returns>
        /// retorna a informação especificada do evento.
        /// </returns>
        [HttpGet("busca/{evento}")]
        public async Task<ActionResult<List<Eventos>>> GetEventos(string evento)
        {
            try
            {
                List<Eventos> listEvent = await eventosRepository.GetEventos(evento);

                return listEvent;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
        /// É um metodo que cria um evento.
        /// </summary>
        /// <param name="eventos"></param>
        /// <returns>
        /// Retorna o evento criado.
        /// </returns>
        [HttpPost]
        [Authorize(Roles = "Administrador, Comunidade, Funcionário")]

        public async Task<ActionResult<Eventos>> Post([FromForm] Eventos eventos)
        {
          
            try
            {
                var arquivo = Request.Form.Files[0];
                eventos.imagemEvento = up.Upload(arquivo, "images/eventos");
                eventos.NomeEvento = Request.Form["NomeEvento"];
                eventos.Descricao = Request.Form["Descricao"];
                eventos.DataEvento = DateTime.Parse(Request.Form["DataEvento"]);
                eventos.DataEvento = DateTime.Parse(Request.Form["DataEvento"]);
                eventos.Ativo = int.Parse(Request.Form["Ativo"]);
                eventos.Localizacao = Request.Form["Localizacao"];
                eventos.coffe = Request.Form["coffe"];
                eventos.IdCategoria = int.Parse(Request.Form["IdCategoria"]);
                eventos.IdUsuario = int.Parse(Request.Form["IdUsuario"]);
                eventos.IdEvento = int.Parse(Request.Form["IdEvento"]);
                return await eventosRepository.Post(eventos);
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// O método PUT substitui as as alterações antigas pelas novas cargass de dados.
        /// É um metodo que atualiza o banco dos eventos.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="eventos"></param>
        /// <returns>
        /// Retorna o banco atualizado pelo id.
        /// </returns>
        [HttpPut("{id}")]
        [Authorize(Roles = "Administrador, Comunidade, Funcionário")]

        public async Task<ActionResult<Eventos>> Put(int id, Eventos eventos)
        {
            if (id != eventos.IdEvento)
            {
                return BadRequest();
            }
            try
            {
                return await eventosRepository.Put(eventos);
            }
            catch (DbUpdateException)
            {
                var eventosValida = eventosRepository.Get(id);
                if (eventosValida == null)
                {
                    return NotFound();
                }
                else
                {

                    throw;

                }
            }
        }

        /// <summary>
        /// O método DELETE remove um recurso específico do banco por id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Retorna o banco sem o id especifico do evento deletado.
        /// </returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrador, Comunidade, Funcionário")]

        public async Task<ActionResult<Eventos>> Delete(int id)
        {
            try
            {
                Eventos eventosRetornado = await eventosRepository.Get(id);
                if (eventosRepository == null)
                {
                    return NotFound();
                }
                await eventosRepository.Delete(eventosRetornado);

                return eventosRetornado;
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}