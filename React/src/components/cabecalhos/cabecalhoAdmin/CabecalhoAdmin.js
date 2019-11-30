import React, { Component } from 'react'
import { Link } from "react-router-dom";

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
                            <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdowLink"
                                aria-haspopup="true" aria-expanded="false">Nome User</Link>
                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" href="#">Action</Link>
                                <Link class="dropdown-item" href="#">Another action</Link>
                                <Link class="dropdown-item" href="#"><i class="fas fa-power-off"></i> Logout</Link>
                            </div>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent22">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <Link class="nav-link" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default CabecalhoAdmin