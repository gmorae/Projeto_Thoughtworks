using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_tw.Models
{
    [Table("tipo_usuario")]
    public partial class TipoUsuarioModel
    {
        public TipoUsuarioModel()
        {
            Usuario = new HashSet<UsuarioModel>();
        }

        [Key]
        [Column("id_tipo")]
        public int IdTipo { get; set; }
        [Column("nome_tipo_usuario")]
        [StringLength(50)]
        public string NomeTipoUsuario { get; set; }

        [InverseProperty("IdTipoNavigation")]
        public virtual ICollection<UsuarioModel> Usuario { get; set; }
    }
}
