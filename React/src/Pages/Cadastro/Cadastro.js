import React from 'react'
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import FormCadastro from '../../components/FormCadastro/FormCadastro'

function Cadastro() {
    return (
        <div>
            <Navbar />
            <div className="container ">
                <div className="texto_cadastro">
                    <h1>Cadastre-se para criar um evento</h1>
                </div>
                <FormCadastro  nome="Cadastre-se"/>
            </div>

        </div>
    )
}

export default Cadastro