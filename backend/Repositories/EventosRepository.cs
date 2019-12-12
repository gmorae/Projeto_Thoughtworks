using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_tw.Models;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class EventoRepository : IEventoRepository
    {
        EasyTalkContext _contexto = new EasyTalkContext();
        public async Task<Eventos> Alterar(Eventos evento)
        {
            _contexto.Entry(evento).State = EntityState.Modified;
            await _contexto.SaveChangesAsync();
            return evento;
        }

        public Eventos BuscarPorID(int id)
        {
            Eventos eventoBuscado = _contexto.Eventos
                .Include("Categoria").ToList().Find(e => e.IdEvento == id) ;
            return eventoBuscado;
        }

        public async Task<Eventos> Excluir(Eventos evento)
        {
            _contexto.Eventos.Remove(evento);
            await _contexto.SaveChangesAsync();
            return evento;
        }

        public List<Eventos> FiltrarPorNome(string filtro)
        {
            List<Eventos> eventos = _contexto.Eventos
                .Include("Categoria").Where(e => e.NomeEvento.Contains(filtro)).ToList();

            return eventos;
        }

        public async Task<List<Eventos>> Listar()
        {
            return await _contexto.Eventos
                .Include(c => c.IdCategoriaNavigation)
                .Include(u => u.IdResponsavelNavigation)
                .ToListAsync();
        }

        public List<Eventos> Ordenar()
        {
            List <Eventos> evento = _contexto.Eventos
                .Include("Categoria").OrderByDescending(u => u.NomeEvento).ToList();

            return evento;
        }

        public async Task<Eventos> Salvar(Eventos evento)
        {
            await _contexto.AddAsync(evento);

            await _contexto.SaveChangesAsync();

            return evento;
        }
    }

    public interface IEventoRepository
    {
    }
}