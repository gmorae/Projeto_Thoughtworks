using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;

namespace api_tw.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        Task<List<TipoUsuarioModel>> Get();

        Task<TipoUsuarioModel> Get(int id);

        Task<TipoUsuarioModel> Post (TipoUsuarioModel tipoUsuario);

        Task<TipoUsuarioModel> Put (TipoUsuarioModel tipoUsuario);

        Task<TipoUsuarioModel> Delete (TipoUsuarioModel tipoUsuario);
        
    }
}