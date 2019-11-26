import React, { Component } from 'react'
import "../Login/Login.css";
export class EsqueceuSenha extends Component {
    render() {
        return (
            <div class="modal fade" id="modalEsqueceuSenha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-notify modal-info" role="document">
                    <div class="modal-content text-center">
                        <div class="modal-header d-flex info-color justify-content-center">
                            <p class="heading">Esqueceu a senha</p>
                        </div>
                        <div class="modal-body">
                            <p>Insira o email e enviaremos a você os próximos passos para acessar sua conta.</p>
                            <div class="md-form">
                                <input type="text" id="email" class="form-control" />
                                <label for="email">Entre com email cadastrado</label>
                            </div>
                        </div>
                        <div class="modal-footer flex-center">
                            <a class="btn btn-bluee-login ">Enviar email</a>
                            <a class="btn btn btn-blue-login color" data-dismiss="modal">Cancelar</a>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EsqueceuSenha
