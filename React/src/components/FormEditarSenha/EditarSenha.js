import EditarSenha from './components/FormEditarSenha/EditarSenha'

import React, { Component } from 'react';
import './EditarSenha.css'
import NaVbar from '../cabecalhos/cabecalhoAdmin/CabecalhoAdmin'

class FormEditarSenha extends Component {
    render() {
        return (
            <div>
                <NaVbar />
                <div className="div_principal">
                    <div id="editar">
                        <h1>editar senha </h1>
                    </div>

                    {/* <div class="caixa">
                    <i class="fas fa-user-alt"></i>
                    <input type="text" name="nome" value="" placeholder="seu nome" />
                </div> */}

                    <div class="caixa">
                        <i class="fas fa-key"></i>
                        <input type="text" name="nome" value="" placeholder="senha atual" />
                    </div>

                    <div class="caixa">
                        <i class="fas fa-lock"></i>
                        <input type="text" name="nome" value="" placeholder="nova senha" />
                    </div>

                    <div class="caixa">
                        <i class="fas fa-check-circle"></i>
                        <input type="text" name="nome" value="" placeholder="confirme sua nova senha" />
                    </div>

                    <div id="botao">
                        <input type="button" value="registrar" />
                    </div>
                </div>
            </div>
        )
    }
}
export default FormEditarSenha;
