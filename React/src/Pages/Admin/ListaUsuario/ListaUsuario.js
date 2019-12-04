import React from 'react';
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin';
import TabelaListaUsuario from '../../../components/TabelaListaUsuarios/tabelaListaUsuario';
import './ListaUsuario.css'

function Admin() {
    return (
        <div>
        <Navbar />
        <TabelaListaUsuario/> 
        </div>
    )
}
export default Admin;


