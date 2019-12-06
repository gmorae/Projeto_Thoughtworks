import React, { Component } from 'react'
import NavBar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import FormEditarSenha from '../../../components/FormEditarSenha/EditarSenha'



class EditarSenhaAdmin extends Component {
    render() {
        return(
            <div className="EditarSenhaAdmin">
                <NavBar />
                <FormEditarSenha />



            </div>
        )
    }
}export default EditarSenhaAdmin