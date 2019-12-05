import React, { Component } from 'react'
import NavBar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import EditarDados from '../../../components/FormEditarDados/EditarDados'



class EditarDadosAdmin extends Component {
    render(){
        return (
            <div className="EditarDadosAdmin">
                <NavBar />
                <div className="container ">
                <div className=" mt-5 text-center">
                    <h1>Editar dados pessoais</h1>
                </div>
              <EditarDados />
            </div>
            </div>
        )
        
    }
}

export default EditarDadosAdmin;