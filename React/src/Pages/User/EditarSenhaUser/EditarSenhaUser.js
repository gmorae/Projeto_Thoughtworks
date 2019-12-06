import React, { Component } from 'react';
import FormEditarSenha from '../../../components/FormEditarSenha/EditarSenha'
import NavBar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'


class EditarSenhaUser extends Component{
    render (){
        return(
            <div>   
                <NavBar />
                <FormEditarSenha />

            </div>
        )
    }
}

export default EditarSenhaUser