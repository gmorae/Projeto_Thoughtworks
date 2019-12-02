import React, { Component } from 'react'

class EditarDados extends Component {
    render() {
        return (
            <form className="mx-auto col-md-9">
                <div className="md-form">
                    <i className="fas fa-user prefix"></i>
                    <input type="text" id="nomeCompleto" className="form-control validate" />
                    <label for="nomeCompleto" data-error="Campo inválido" data-success="Sucesso">Nome Completo</label>
                </div>
                <div className="md-form">
                    <i className="fas fa-envelope prefix"></i>
                    <input type="email" id="email" className="form-control validate" />
                    <label for="email" data-error="Campo inválido" data-success="Sucesso">Email</label>
                </div>
            <div className="mx-auto mt-5">
                <button type="button" className="btn-cadastro btn-cadastro text-uppercase">Alterar</button>
            </div>
            </form>
        )
    }
}

export default EditarDados;