import React, { Component } from 'react'
import './cabecalhoAdmin.css'
import '../styleCabecalho.css'
class CabecalhoAdmin extends Component {

    render() {
        return (
            <nav class="navbar navbar-dark fixed-top indigo darken-2">
                <div className="container-fluid">
                    <button class="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent22"
                        aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Nome User</a>
                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-power-off"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent22">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default CabecalhoAdmin