using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Interfaces;
using api_tw.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tw.Repositories {
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {

        EasyTalkContext context = new EasyTalkContext ();
        public async Task<List<TipoUsuarioModel>> Get () {
            return await context.TipoUsuario.ToListAsync ();
        }

        public async Task<TipoUsuarioModel> Get (int id) {
            return await context.TipoUsuario.FindAsync (id);
        }

        public async Task<TipoUsuarioModel> Post (TipoUsuarioModel tipoUsuario) {
            await context.TipoUsuario.AddAsync (tipoUsuario);
            await context.SaveChangesAsync ();
            return tipoUsuario;
        }

        public async Task<TipoUsuarioModel> Put (TipoUsuarioModel tipoUsuario) {
            context.Entry (tipoUsuario).State = EntityState.Modified;
            await context.SaveChangesAsync ();
            return tipoUsuario;
        }
        public async Task<TipoUsuarioModel> Delete (TipoUsuarioModel tipoUsuario) {
            context.TipoUsuario.Remove (tipoUsuario);
            await context.SaveChangesAsync ();
            return tipoUsuario;
        }
    }
}