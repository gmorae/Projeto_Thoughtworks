import React from 'react'
import './Eventos.css'
import Modal from '../DetalheEventos/DetalheEventos'
function Eventos() {
    return (
        <div className="fundoEvento" id="Eventos">
            <div class="container mt-5">
                <h2>Agenda</h2>
                <div class="card-deck">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-defaultt" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</a>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-defaultt" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</a>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-defaultt" data-toggle="modal" data-target="#centralModalSuccess">Detalhes</a>
                        </div>
                    </div>

                </div>
            </div>
            <Modal />
        </div>

    )
}
export default Eventos