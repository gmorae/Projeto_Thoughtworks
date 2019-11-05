using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_tw.Interfaces;
using api_tw.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tw.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
        EasyTalkContext context = new EasyTalkContext();

        public async Task<List<CategoriaModel>> Get()
        {
            return await context.Categoria.ToListAsync();
        }

        public async Task<CategoriaModel> Get(int id)
        {
            return await context.Categoria.FindAsync(id);
        }

        public async Task<CategoriaModel> Post(CategoriaModel categoria)
        {
            await context.Categoria.AddAsync(categoria);
            await context.SaveChangesAsync();
            return categoria;
        }

        public async Task<CategoriaModel> Put(CategoriaModel categoria)
        {
            context.Entry(categoria).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return categoria;
        }

        public async Task<CategoriaModel> Delete(CategoriaModel categoria)
        {
            context.Categoria.Remove(categoria);
            await context.SaveChangesAsync();
            return categoria;
        }

        public async Task<List<CategoriaModel>> Get(string nomeCategoria)
        {
            List<CategoriaModel> lstCategoria = await context.Categoria.Where(c => c.NomeCategoria == nomeCategoria).ToListAsync();

            return lstCategoria;
        }
    }
}