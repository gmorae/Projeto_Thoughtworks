import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import './Login.css'
// import img from '../../img/login.svg'
import image from '../../img/login1.jpeg'
import { parseJwt } from '../../services/auth'
import api from '../../services/api'
import { EsqueceuSenha } from "../EsqueceuSenha/EsqueceuSenha";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        }
        this.atualizaStateCampo = this.atualizaStateCampo.bind(this);
    }

    realizarLogin = (event) => {
        event.preventDefault();

        this.setState({isLoading: true});

        console.log(this.state.email);
        console.log(this.state.senha);

        fetch('http://localhost:5000/api/Login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify ({
                email: this.state.email,
                senha: this.state.senha
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log('Retorno do login - JSON:',);

            console.log('O token é: ', response.token);

            var base64 = localStorage.getItem('usuario-easyTalk').split('.')[1];

            console.log(base64)

            console.log()

            if (parseJwt().Role === 'Administrador') {
                this.props.history.push('/Admin')
            } else {
                this.props.history.push('/');
            }
        })
        .catch(erro => {
            this.setState({isLoading: false})
        })
    }

    atualizaStateCampo(event){
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="row col-12">
                    <div class="col-md-6 imageLogin">
                    </div>
                    {/** Metade onde mostra a imagem, col-md-6  */}
                    <div class="col-md-5 login_posicao">
                        <div class="container">
                            <h5 class="card-header info-color white-text text-center py-4">
                                <strong>LOGIN</strong>
                            </h5>
                            <div class="card-body px-lg-5 pt-0">
                                <form class="text-center" onSubmit={this.realizarLogin.bind(this)}>
                                    <div class="md-form">
                                        <input type="email" name="email" id="materialLoginFormEmail" class="form-control" onChange={this.atualizaStateCampo} value={this.state.email}/>
                                        <label for="materialLoginFormEmail">E-mail</label>
                                    </div>
                                    <div class="md-form">
                                        <input type="password" name="senha" id="materialLoginFormPassword" class="form-control" onChange={this.atualizaStateCampo} value={this.state.senha}/>
                                        <label for="materialLoginFormPassword">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-around mt-3 mb-3">

                                        <Link className="textEsqueceuSenha" data-toggle="modal" data-target="#modalEsqueceuSenha">Esqueceu a senha? </Link>

                                    </div>
                                    <button class="btn btn-blue-login btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" disabled={this.state.is}>Login</button>
                                    <button class="btn btn-bluee-login btn-rounded btn-block my-4 waves-effect z-depth-0">Cadastre-se</button>
                                    <EsqueceuSenha />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login