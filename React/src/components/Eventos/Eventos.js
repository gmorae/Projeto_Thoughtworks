import React from 'react'
import './Eventos.css'
import Modal from '../DetalheEventos/DetalheEventos'
import { Link } from "react-router-dom";
function Eventos() {
    return (
        <div className="fundoEvento" id="Eventos">
            <div className="container mt-5">
                <h2 className="h1-responsive text-center display-4 text-white text-uppercase">Agenda</h2>
                <hr className="mb-5 my-2 text-center" />
                <div className="card-deck">
                    <div className="card hoverable mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Aqui vai o titulo</h4>
                            <p className="card-text">Aqui vai quem é o responsavel</p>
                            <p className="card-text">Aqui vai o horario e a data</p>
                            <Link className="btn btn-defaultt text-white" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</Link>
                        </div>
                    </div>

                    <div className="card hoverable mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Aqui vai o titulo</h4>
                            <p className="card-text">Aqui vai quem é o responsavel</p>
                            <p className="card-text">Aqui vai o horario e a data</p>
                            <Link className="btn btn-defaultt text-white" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</Link>
                        </div>
                    </div>

                    <div className="card hoverable mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Aqui vai o titulo</h4>
                            <p className="card-text">Aqui vai quem é o responsavel</p>
                            <p className="card-text">Aqui vai o horario e a data</p>
                            <Link className="btn btn-defaultt text-white" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-3 mb-5">
                <Link className="btn btn-defaultt text-white radius">Secondary</Link>
            </div>
            <Modal />
        </div>

    )
}
export default Eventos