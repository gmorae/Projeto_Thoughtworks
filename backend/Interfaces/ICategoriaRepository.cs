using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Models;

namespace api_tw.Interfaces
{
    public interface ICategoriaRepository
    {
         Task<List<CategoriaModel>> Get();

         Task<CategoriaModel> Get(int id);

         Task<CategoriaModel> Post (CategoriaModel categoria);

         Task<CategoriaModel> Put(CategoriaModel categoria);

         Task<CategoriaModel> Delete(CategoriaModel categoria);
    }
}