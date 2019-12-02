import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import Eventos from '../../components/Eventos/Eventos'
import Sobre from '../../components/Sobre/Sobre'
import Modal from '../../components/DetalheEventos/DetalheEventos'
import Rodape from '../../components/rodape/Rodape'
function Home() {
  return (
    <div>
      <Navbar />
      <Sobre />
      <div className="fundoEvento" id="Eventos">
        <div className="container mt-5">
          <p className="h1-responsive rosa text-center text-white text-uppercase">nosso horário</p>
          <h2 className="h1-responsive text-center display-4 text-white text-uppercase mb-5">Agenda</h2>
          <div className="card-deck">
            <Eventos nome="titulo" responsavel="responsavel" data="fake" />
            <Eventos nome="titulo" responsavel="responsavel" data="fake" />
            <Eventos nome="titulo" responsavel="responsavel" data="fake" />
          </div>
        </div>
        <div className="mx-auto mt-3 mb-5">
          <Link className="btn btn-defaultt text-white radius">Mais eventos</Link>
        </div>
      </div>
      <Modal />
      <Rodape />
    </div>
  );
}

export default Home;
