import React from 'react'
import './cabecalhoPadrao.css'
import '../styleCabecalho.css'
function CabecalhoPadrao() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-redeasy">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link ml-4 " href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-4" href="#">Galeria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-4" href="#">Eventos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-4" href="#">Cadastre-se</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-4" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CabecalhoPadrao