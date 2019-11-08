using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_tw.Models;
using backend.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class EventosRepository : IEventosRepository
    {
        public async Task<Eventos> Delete(Eventos evento)
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                context.Eventos.Remove(evento);
                await context.SaveChangesAsync();
                return evento;
            }
        }

        public async Task<List<Eventos>> Get()
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                return await context.Eventos.Include(c => c.IdCategoriaNavigation).Include(u => u.IdResponsavelNavigation).ToListAsync();
            }
        }

        public async Task<Eventos> Get(int id)
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                return await context.Eventos.Include(c => c.IdCategoriaNavigation).Include(u => u.IdResponsavelNavigation).FirstOrDefaultAsync(x => x.IdEvento == id);
            }
        }

        public async Task<List<Eventos>> GetAprovado()
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                List<Eventos> statusList = await context.Eventos.Where(s => s.Ativo == 1).ToListAsync();
                return statusList;
            }
        }
        public async Task<List<Eventos>> GetAguardando()
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                List<Eventos> statusList = await context.Eventos.Where(s => s.Ativo == 2).ToListAsync();
                return statusList;
            }
        }
        public async Task<List<Eventos>> GetReprovado()
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                List<Eventos> statusList = await context.Eventos.Where(s => s.Ativo == 3).ToListAsync();
                return statusList;
            }
        }

        public async Task<Eventos> Post(Eventos eventos)
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                await context.Eventos.AddAsync(eventos);
                await context.SaveChangesAsync();
                return eventos;
            }
        }

        public async Task<Eventos> Put(Eventos evento)
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                context.Entry(evento).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return evento;
            }
        }

        public async Task<List<Eventos>> GetEventos(string evento)
        {
            using (EasyTalkContext context = new EasyTalkContext())
            {
                List<Eventos> listevent = await context.Eventos.Where(c => c.NomeEvento.Contains(evento) || c.Descricao.Contains(evento)).ToListAsync();

                return listevent;
            }
        }
    }
}