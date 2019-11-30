import React from 'react'
import { Link } from "react-router-dom";
import './cabecalhoPadrao.css'
import '../styleCabecalho.css'
function CabecalhoPadrao() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-redeasy">
            <div className="container">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link home ml-4 " to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link home ml-4 " to="/Cadastro">Cadastre-se </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-4" to="/Login">Login </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default CabecalhoPadrao