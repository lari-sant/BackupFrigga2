using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Instituto_Frigga_Backend.Domains;
using Instituto_Frigga_Backend.Interfaces;
using Instituto_Frigga_Backend.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace Instituto_Frigga_Backend.Repositories
{
    public class UsuarioRepository : IUsuario
    {
        public async Task<Usuario> Alterar(Usuario usuario)
        {
            using(InstitutoFriggaContext _context = new InstitutoFriggaContext())
            {

                _context.Entry(usuario).State = EntityState.Modified;
                 await _context.SaveChangesAsync();
            }
            return usuario;        
        }

        public async Task<Usuario> BuscarPorId(int id)
        {

            using(InstitutoFriggaContext _context = new InstitutoFriggaContext())
            {

                var usuario = await _context.Usuario.Include("TipoUsuario").FirstOrDefaultAsync(i => i.UsuarioId == id);
                     
                usuario.Email = null;
                usuario.Senha = null;
                
                return usuario;
            }
        }

        public async Task<Usuario> Excluir(Usuario usuario)
        {
            using(InstitutoFriggaContext _context = new InstitutoFriggaContext())
            {
                _context.Usuario.Remove(usuario);
                await _context.SaveChangesAsync();
                return usuario;
            }
        }

        public async Task<List<Usuario>> Listar()
        {
            using(InstitutoFriggaContext _context = new InstitutoFriggaContext())
            {
                
                //List<Usuario> listaUsuario = new List<Usuario>();
                var listaUsuario = await _context.Usuario.Include("TipoUsuario").ToListAsync();

                foreach(var item in listaUsuario)
                {
                    item.Email = null;
                    item.Senha = null;
                }
                return listaUsuario;
            }
        }

        public async Task<Usuario> Salvar(Usuario usuario)
        {
            using(InstitutoFriggaContext _context = new InstitutoFriggaContext())
            {
                await _context.AddAsync(usuario);
                await _context.SaveChangesAsync();
                return usuario;
            }
        }
    }
}