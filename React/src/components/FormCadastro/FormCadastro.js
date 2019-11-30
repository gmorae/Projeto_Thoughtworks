import React, { Component } from 'react'
import '../../components/FormCadastro/FormCadastro.css'

function verificaUrl(url){
    return ((window.location.href).indexOf(url) -1 )
}
export class FormCadastro extends Component {
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
                <div class="md-form">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlockMD" />
                    <label for="password">Senha</label>
                    <small id="password" class="form-text text-muted">
                        Sua senha deve ter entre 8 e 20 caracteres, conter letras e números e não deve conter espaços, caracteres especiais ou emoji.
                        </small>
                </div>
                <div className="md-form">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="confirmPassword" className="form-control validate" />
                    <label for="confirmPassword" data-error="Campo inválido" data-success="Sucesso">Confirmação de senha</label>
                </div>
                <div className="mx-auto">

                    <button type="button" className="btn-cadastro btn-cadastro text-uppercase">{this.props.nome}</button>
                </div>
            </form>
        )
    }
}

export default FormCadastro
