import React from 'react'


function DetalheEventos() {
    return (
        <div class="modal fade" id="evento" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detalhes sobre a sobre o vento xxxxx</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><span className="font-weight-bold">Nome do evento: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Organizador: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Padrinho: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Data do evento: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Horário do evento: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Localização: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Sala: </span>Infomação da api</p>
                        <hr />
                        <p><span className="font-weight-bold">Coffe: </span>Infomação da api</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetalheEventos