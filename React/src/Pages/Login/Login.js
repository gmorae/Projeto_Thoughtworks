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
                                        <a href="">Esqueceu a senha ?</a>
                                    </div>
                                    <button class="btn btn-blue-login btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Login</button>

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