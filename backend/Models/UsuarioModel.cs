using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_tw.Models
{
    [Table("usuario")]
    public partial class UsuarioModel
    {
        public UsuarioModel()
        {
            EventosIdResponsavelNavigation = new HashSet<Eventos>();
            EventosIdUsuarioNavigation = new HashSet<Eventos>();
        }

        [Column("id_usuario")]
        [Key]
        public int IdUsuario { get; set; }

        [Column("nome_usuario")]
        [StringLength(50)]
        public string NomeUsuario { get; set; }
        [Column("email")]
        [StringLength(100)]
        public string Email { get; set; }
        [Column("senha")]
        [StringLength(100)]
        public string Senha { get; set; }

        [Column("telefone_movel")]
        [StringLength(20)]
        public string TelefoneMovel { get; set; }

        [Column("imagemUsuario")]
        [StringLength(100)]
        public string imagemUsuario { get; set; }
        [Column("id_tipo")]
        [ForeignKey(nameof(IdTipo))]
        [InverseProperty(nameof(TipoUsuarioModel.Usuario))]
        public int? IdTipo { get; set; }
    



        public virtual TipoUsuarioModel IdTipoNavigation { get; set; }
        [InverseProperty(nameof(Eventos.IdResponsavelNavigation))]
        public virtual ICollection<Eventos> EventosIdResponsavelNavigation { get; set; }
        [InverseProperty(nameof(Eventos.IdUsuarioNavigation))]
        public virtual ICollection<Eventos> EventosIdUsuarioNavigation { get; set; }
    }
}
