import React from 'react'
import './ModalCategorias.css'

function ModalCategoria() {
    return (

        <div className="divModalcategoria" >
            <div className='tabelacategoria' >
                <div className="headerModalCategorias" >
                    <p className="titulo">
                        Nome da Categoria
                    </p>
                </div>
                    <button type="button" className="buttonCategorias"><p className="buttonName">
                    Tecnologia
                    </p></button>
                    <button type="button" className="buttonCategorias"><p className="buttonName">
                    Sustentabilidade
                    </p></button>
                    <button type="button" className="buttonCategorias"><p className="buttonName">
                    Diversidade
                    </p></button>
                    <button type="button" className="buttonCategorias"><p className="buttonName">
                    Educação
                    </p></button>
            </div>
        </div>
    )
}
export default ModalCategoria;
