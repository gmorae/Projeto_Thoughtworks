import React, { Component } from 'react';
import Navbar from '../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import FormEditarSenha from '../../components/FormEditarSenha/EditarSenha';

class EditarSenhaUser extends Component {
    render () {
        return(
            <div>
                <Navbar />
                <FormEditarSenha />

            </div>
        )
    }
}

export default EditarSenhaUser