import React, {Component} from 'react'
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'




export class CadastrarEvento extends Component {
    render() {
        return (
            <div className="container ">
                <Navbar/>
            <div className="text-center mt-9 mb-5">
                <h1>Crie seu evento</h1>
            </div>
            <form className="mx-auto col-md-9">
                <div className="md-form">
                <i class="fas fa-users"></i>
                    <input type="text" id="nomeCompleto" className="form-control validate" />
                    <label for="nomeCompleto" data-error="Campo inválido" data-success="Sucesso">Nome do Evento</label>
                </div>
                <div className="md-form">
                    <i className="fas fa-envelope prefix"></i>
                    <input type="email" id="email" className="form-control validate" />
                    <label for="email" data-error="Campo inválido" data-success="Sucesso">Descrição</label>
                </div>
                <div class="md-form">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlockMD" />
                    <label for="password">Data do Evento</label>   
                </div>
                <div class="md-form">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlockMD" />
                    <label for="password">Categoria</label>
                </div>
                <div class="md-form">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="password" class="form-control" aria-describedby="passwordHelpBlockMD" />
                    <label for="password">Deseja café?</label>
                </div>
                <button type="button" className="btn btn-nosso">Cadastrar</button>
            </form>
        </div>
        )
    }
}

export default CadastrarEvento;