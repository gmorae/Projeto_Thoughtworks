import React, { Component } from 'react'
import './cabecalhoAdmin.css'
import '../styleCabecalho.css'

class CabecalhoAdmin extends Component {
    render() {
        return (
            <div className="pos-f-t">
                <nav className="navbar navbar-light navb">
                    <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <form className="">
                            <input type="text" className="form-control" placeholder="Pesquise" />
                        </form>
                        <div className="ml-auto">
                            <button className="navbar-toggler" type="button">
                                Sair <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="navbar navbarr navbar-light bg-redeasy">

                    <div className="collapse" id="collapseExample">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link ml-4 " href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-4" href="#">Galeria</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-4" href="#">Eventos</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-4" href="#">Cadastre-se</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-4" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CabecalhoAdmin