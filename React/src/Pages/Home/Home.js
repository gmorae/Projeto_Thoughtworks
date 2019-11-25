import React from 'react';
import Navbar from '../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import Banner from '../../components/Banner/Banner'
import Eventos from '../../components/Eventos/Eventos'
import Rodape from '../../components/rodape/Rodape'
function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Eventos />
      <Rodape />
    </div>
  );
}

export default Home;
