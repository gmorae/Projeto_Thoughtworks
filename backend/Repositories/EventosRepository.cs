using System.Collections.Generic;
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
            using(EasyTalkContext context = new EasyTalkContext()){
            context.Eventos.Remove(evento);
            await context.SaveChangesAsync();
            return evento;
            }
        }

        public async Task<List<Eventos>> Get()
        {
            using(EasyTalkContext context = new EasyTalkContext()){
                return await context.Eventos.Include(c => c.IdCategoriaNavigation).Include(u => u.IdResponsavelNavigation).ToListAsync();
            }
        }

        public async Task<Eventos> Get(int id)
        {
            using(EasyTalkContext context = new EasyTalkContext()){
                return await context.Eventos.Include(c => c.IdCategoriaNavigation).Include(u => u.IdResponsavelNavigation).FirstOrDefaultAsync(x => x.IdEvento == id);
            }
        }

        public async Task<Eventos> Post(Eventos evento)
        {
            using(EasyTalkContext context = new EasyTalkContext()){
            await context.Eventos.AddAsync(evento);
            await context.SaveChangesAsync();
            return evento;
            }
        }

        public async Task<Eventos> Put(Eventos evento)
        {
            using(EasyTalkContext context = new EasyTalkContext()){
            context.Entry(evento).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return evento;
            }
        }
    }
}