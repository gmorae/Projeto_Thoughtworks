import React, { Component } from 'react';
import './EditarSenha.css'

class FormEditarSenha extends Component {
    render() {
        return (
            <div>
                <div className="div_principal">
                    <div id="editar">
                        <h1>editar senha </h1>
                    </div>
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
