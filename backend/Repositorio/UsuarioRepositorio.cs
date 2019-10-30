using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Interfaces;
using api_tw.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tw.Repositorio 
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {     
        easyTalkContext conexao = new easyTalkContext();
        

        public async Task<List<Usuario>> Get()
        {
           return await conexao.Usuario.Include(t => t.IdTipoNavigation).ToListAsync();
        }

        public async Task<Usuario> Get(int id)
        {
           return await conexao.Usuario.Include(t => t.IdTipoNavigation).FirstOrDefaultAsync(e => e.IdUsuario == id);
        }

        public async Task<Usuario> Post(Usuario usuario)
        {
           await conexao.Usuario.AddAsync(usuario);
           await conexao.SaveChangesAsync();
           return usuario;
        }

        public async Task<Usuario> Put(Usuario usuario)
        {
           conexao.Entry(usuario).State = EntityState.Modified;
           await conexao.SaveChangesAsync();
           return usuario;
        }
        public async Task<Usuario> Delete(Usuario usuario)
        {
           conexao.Usuario.Remove(usuario);
           await conexao.SaveChangesAsync();
           return usuario;
        }
    }
}