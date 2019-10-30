using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;

namespace api_tw.Interfaces
{
    public interface IUsuarioRepositorio
    {
         Task<List<Usuario>> Get();

         Task<Usuario> Get(int id);

         Task<Usuario> Post (Usuario usuario);

         Task<Usuario> Put(Usuario usuario);

         Task<Usuario> Delete(Usuario usuario); 
    }
}