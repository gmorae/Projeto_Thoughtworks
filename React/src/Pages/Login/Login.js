import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import './Login.css'
// import img from '../../img/login.svg'
import image from '../../img/login1.jpeg'
import { EsqueceuSenha } from "../EsqueceuSenha/EsqueceuSenha";
class Login extends Component {
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
                                <form class="text-center">
                                    <div class="md-form">
                                        <input type="email" id="materialLoginFormEmail" class="form-control" />
                                        <label for="materialLoginFormEmail">E-mail</label>
                                    </div>
                                    <div class="md-form">
                                        <input type="password" id="materialLoginFormPassword" class="form-control" />
                                        <label for="materialLoginFormPassword">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-around mt-3 mb-3">

                                        <Link className="textEsqueceuSenha" data-toggle="modal" data-target="#modalEsqueceuSenha">Esqueceu a senha? </Link>

                                    </div>
                                    <button class="btn btn-blue-login btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Login</button>
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