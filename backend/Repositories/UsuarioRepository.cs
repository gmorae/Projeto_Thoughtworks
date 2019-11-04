using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_tw.Interfaces;
using api_tw.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tw.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        EasyTalkContext context = new EasyTalkContext();

        public UsuarioModel BuscarPorEmailSenha(string email, string senha)
        {
            using (EasyTalkContext ctx = new EasyTalkContext())
            {
                var usuarioProcurado = ctx.Usuario.Include(x => x.IdTipoNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);

                // if (usuarioProcurado == null)
                // {
                //     return null;
                // }
                return usuarioProcurado;
            }
        }
        public async Task<List<UsuarioModel>> Get()
        {
            return await context.Usuario.Include(t => t.IdTipoNavigation).ToListAsync();
        }

        public async Task<UsuarioModel> Get(int id)
        {
            return await context.Usuario.Include(t => t.IdTipoNavigation).FirstOrDefaultAsync(e => e.IdUsuario == id);
        }

        public async Task<UsuarioModel> Post(UsuarioModel usuario)
        {
            await context.Usuario.AddAsync(usuario);
            await context.SaveChangesAsync();
            return usuario;
        }

        public async Task<UsuarioModel> Put(UsuarioModel usuario)
        {
            context.Entry(usuario).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return usuario;
        }
        public async Task<UsuarioModel> Delete(UsuarioModel usuario)
        {
            context.Usuario.Remove(usuario);
            await context.SaveChangesAsync();
            return usuario;
        }
    }
}