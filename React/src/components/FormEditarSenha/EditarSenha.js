<<<<<<< HEAD
import React, { Component } from 'react';
import './EditarSenha.css'
=======
// import EditarSenha from './components/FormEditarSenha/EditarSenha'

import React, { Component } from 'react';
import './EditarSenha.css'
// import NaVbar from '../cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
>>>>>>> d0fa4b87319cbd10ef9634582d2a7759fdfa1d52

class FormEditarSenha extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
=======
                
                {/* <NaVbar /> */}
>>>>>>> d0fa4b87319cbd10ef9634582d2a7759fdfa1d52
                <div className="div_principal">
                    <div id="editar">
                        <h1>editar senha </h1>
                    </div>
<<<<<<< HEAD
                    <div class="caixa">
                        <i class="fas fa-key"></i>
                        <input type="text" name="nome" value="" placeholder="senha atual" />
                    </div>
=======

                    {/* <div class="caixa">
                    <i class="fas fa-user-alt"></i>
                    <input type="password" name="nome" value="" placeholder="seu nome" />
                </div> */}
                    <form>
                        <div class="caixa">
                            <i class="fas fa-key"/>
                            <input type="password" name="nome" placeholder="senha atual" />
                        </div>

                        <div class="caixa">
                            <i class="fas fa-lock"/>
                            <input type="password" name="nome" placeholder="nova senha" />
                        </div>
>>>>>>> d0fa4b87319cbd10ef9634582d2a7759fdfa1d52

                        <div class="caixa">
                            <i class="fas fa-check-circle"/>
                            <input type="password" name="nome" placeholder="confirme sua nova senha" />
                        </div>

                        <div id="botao">
                            <input type="button" value="registrar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default FormEditarSenha;
