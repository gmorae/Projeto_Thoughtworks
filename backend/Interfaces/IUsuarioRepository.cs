using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;

namespace api_tw.Interfaces
{
    public interface IUsuarioRepository
    {
         Task<List<UsuarioModel>> Get();

         Task<UsuarioModel> Get(int id);

         Task<UsuarioModel> Post (UsuarioModel usuario);

         Task<UsuarioModel> Put(UsuarioModel usuario);

         Task<UsuarioModel> Delete(UsuarioModel usuario); 
    }
}