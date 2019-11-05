using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet]

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

        [HttpGet("aprovado")]
        public async Task<ActionResult<List<Eventos>>> GetAprovados(){
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

        [HttpGet("aguardando")]
        public async Task<ActionResult<List<Eventos>>> GetAguardando(){
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
        [HttpGet("reprovado")]
        public async Task<ActionResult<List<Eventos>>> GetReprovado(){
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
        [HttpPost]
        public async Task<ActionResult<Eventos>> Post(Eventos eventos)
        {
            try
            {
                return await eventosRepository.Post(eventos);
            }
            catch (System.Exception)
            {
                throw;
            }
        }
        [HttpPut("{id}")]
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
        [HttpDelete("{id}")]
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