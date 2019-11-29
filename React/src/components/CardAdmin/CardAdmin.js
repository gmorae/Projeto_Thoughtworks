import React, {Component} from 'react'
import './CardAdmin.css'
import EventosAprovar from '../../img/imagens/iconeAdmin/evento.png'
import Negados from '../../img/imagens/iconeAdmin/negados.png'
import Aprovados from '../../img/imagens/iconeAdmin/aprovados.png'
import AdicionarEventos from '../../img/imagens/iconeAdmin/criareventos.png'
import EventosPassados from '../../img/imagens/iconeAdmin/passados.png'
import EventosProximos from '../../img/imagens/iconeAdmin/proximos.png'

class CardAdmin extends Component{
  render(){
    return(
      <div>
                <div class="mt-5">
            <div class="card_flex">
                <a href="todosOsEventos.html">
                    <div class="card">
                      <img src={EventosAprovar} alt=""/>
                        <p>Eventos para aprovar</p>
                    </div>
                </a>
                <a href="eventosRejeitados.html">
                    <div class="card">
                      <img src={Negados} alt=""/>                   
                        <p>Eventos negados</p>
                    </div>
                </a>
                <a href="eventos_aprovados.html">
                    <div class="card">
                      <img src={Aprovados} alt=""/>
                      <p>Eventos aprovados</p>
                    </div>
                </a>
                <a href="#">
                    <div class="card">
                   <img src={AdicionarEventos} alt=""/>
                        <p>Adicionar evento</p>
                    </div>
                </a>
                <a href="">
                    <div class="card">
     <img src={EventosPassados} alt=""/>
                        <p>Eventos passados</p>
                    </div>
                </a>
                <a href="">
                    <div class="card">
                  <img src={EventosProximos} alt=""/>
                        <p>Próximos eventos</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    )
 
  }
}

export default CardAdmin;