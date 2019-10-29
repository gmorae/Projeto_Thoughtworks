using System.Collections.Generic;
using System.Threading.Tasks;
using api_tw.Interfaces;
using api_tw.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tw.Repositorio {
    public class TipoUsuarioRepositorio : ITipoUsuarioRepositorio {

        easyTalkContext conexao = new easyTalkContext ();
        public async Task<List<TipoUsuario>> Get () {
            return await conexao.TipoUsuario.ToListAsync ();
        }

        public async Task<TipoUsuario> Get (int id) {
            return await conexao.TipoUsuario.FindAsync (id);
        }

        public async Task<TipoUsuario> Post (TipoUsuario tipoUsuario) {
            await conexao.TipoUsuario.AddAsync (tipoUsuario);
            await conexao.SaveChangesAsync ();
            return tipoUsuario;
        }

        public async Task<TipoUsuario> Put (TipoUsuario tipoUsuario) {
            conexao.Entry (tipoUsuario).State = EntityState.Modified;
            await conexao.SaveChangesAsync ();
            return tipoUsuario;
        }
        public async Task<TipoUsuario> Delete (TipoUsuario tipoUsuario) {
            conexao.TipoUsuario.Remove (tipoUsuario);
            await conexao.SaveChangesAsync ();
            return tipoUsuario;
        }
    }
}