import React, { Component } from 'react'
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import './Login.css'
import img from '../../img/login.svg'
class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="row col-12">
                    {/** Metade onde mostra a imagem, col-md-6  */}
                    <div class="col-md-7 mt-9">
                        <img src={img} class="img-fluid" alt="smaple image" />
                    </div>
                    <div class="col-md-5 mt-9">
                        <div class="container">
                            <h5 class="card-header info-color white-text text-center py-4">
                                <strong>Sign in</strong>
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
                                       
                                    <a className="" data-toggle="modal" data-target="#esqueceuSenha">Esqueceu a senha? </a>

                                    </div>

                                    <div class="modal fade" id="esqueceuSenha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1>Encontre sua conta</h1>
                                                    
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                
                                                   <input placeholder="Digite seu E-Mail." class="form-control "></input>
                                                   <button class="btn info-color text-white btn-block my-4 ">Enviar
                                                    </button>
                    </div>



                                            </div>
                                        </div>
                                    </div>

                                    <button class="btn btn-blue-login btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Login</button>
                                    <button class="btn btn-blue-login btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Cadastre-se</button>

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