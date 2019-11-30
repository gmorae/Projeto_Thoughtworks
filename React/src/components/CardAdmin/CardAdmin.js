import React, { Component } from 'react'
import './CardAdmin.css'
import EventosAprovar from '../../img/imagens/iconeAdmin/evento.png'
import Negados from '../../img/imagens/iconeAdmin/negados.png'
import Aprovados from '../../img/imagens/iconeAdmin/aprovados.png'
import AdicionarEventos from '../../img/imagens/iconeAdmin/criareventos.png'
import EventosPassados from '../../img/imagens/iconeAdmin/passados.png'
import EventosProximos from '../../img/imagens/iconeAdmin/proximos.png'

import Navbar from '../cabecalhos/cabecalhoAdmin/CabecalhoAdmin'

class CardAdmin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container mt-5 py-5">
          <section class="">
            <div class="row mt-5">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="far fa-money-bill-alt fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>sales</small></p>
                      <h4 class="font-weight-bold mb-0">23 000$</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Better than last week (75%)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="far fa-money-bill-alt fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>sales</small></p>
                      <h4 class="font-weight-bold mb-0">23 000$</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Better than last week (75%)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="far fa-money-bill-alt fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>sales</small></p>
                      <h4 class="font-weight-bold mb-0">23 000$</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Better than last week (75%)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="far fa-money-bill-alt fa-lg primary-color z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>sales</small></p>
                      <h4 class="font-weight-bold mb-0">23 000$</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Better than last week (75%)</p>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="fas fa-chart-line fa-lg teal z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>subscriptions</small></p>
                      <h4 class="font-weight-bold mb-0">3534</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="46" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Worse than last week (46%)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card mt-3">
                  <div class="">
                    <i class="fas fa-chart-pie fa-lg purple z-depth-2 p-4 ml-3 mt-n3 rounded text-white"></i>
                    <div class="float-right text-right p-3">
                      <p class="text-uppercase text-muted mb-1"><small>traffic</small></p>
                      <h4 class="font-weight-bold mb-0">656 234</h4>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="progress md-progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="31" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <p class="card-text">Better than last week (31%)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )

  }
}

export default CardAdmin;