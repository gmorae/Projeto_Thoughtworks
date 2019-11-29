import React from 'react'
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import './User.css'
import Eventos from '../../../img/imagens/iconeAdmin/evento.png'
import CriarEvento from'../../../img/imagens/iconeAdmin/criareventos.png'
function Home() {
  return (
<div>
  
      <Navbar />
    
        <div class="mt-5">
          <div class="card_flex">
            <a href="#">
              <div class="card">
                 <img src={Eventos} alt="" /> 
                <p>Eventos Antigos</p>
              </div>
            </a>
            <a href="#">
              <div class="card">
                 <img src={CriarEvento} alt="" />  
                <p>Criar Eventos</p>
              </div>
            </a>
          </div>
        </div>
</div>
        )
      }
export default Home