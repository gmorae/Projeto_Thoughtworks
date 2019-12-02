import React, { Component } from 'react'
import NavBar from '../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import FormCadastro from '../../components/FormCadastro/FormCadastro'
import EditarDados from '../../components/FormEditarDados/EditarDados'

class EditarDadosPessoais extends Component {
    render() {
        return (
            <div className="EditarDadosPessoais">
                <NavBar />
                <div className="container ">
                    <div className=" mt-5 text-center">
                        <h1>Editar dados pessoais</h1>
                    </div>
                    <EditarDados/>
                </div>

            </div>
        )
    }
}

export default EditarDadosPessoais