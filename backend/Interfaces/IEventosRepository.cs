using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;

namespace backend.Interfaces
{
    public interface IEventosRepository
    {
        Task<List<Eventos>> Get();
        Task<List<Eventos>> GetAprovado();
        Task<List<Eventos>> GetAguardando();
        Task<List<Eventos>> GetReprovado();
        Task<Eventos> Get(int id);
        Task<Eventos> Post(Eventos evento);
        Task<Eventos> Put(Eventos evento);
        Task<Eventos> Delete(Eventos evento);

    }
}