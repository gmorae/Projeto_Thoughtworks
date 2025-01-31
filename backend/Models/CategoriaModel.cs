﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_tw.Models
{
    [Table("categoria")]
    public partial class CategoriaModel
    {
        public CategoriaModel()
        {
            Eventos = new HashSet<Eventos>();
        }

        [Key]
        [Column("id_categoria")]
        public int IdCategoria { get; set; }

        [Column("nome_categoria")]
        [StringLength(50)]
        public string NomeCategoria { get; set; }

        [Column("descricao_categoria")]
        [StringLength(200)]
        public string DescricaoCategoria { get; set; }


        [InverseProperty("IdCategoriaNavigation")]
        public virtual ICollection<Eventos> Eventos { get; set; }
    }
}