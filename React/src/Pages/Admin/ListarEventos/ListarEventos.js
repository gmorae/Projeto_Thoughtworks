import React from 'react'
import Navbar from '../../../components/cabecalhos/cabecalhoPadrao/CabecalhoPadrao'
import Tabela from '../../../components/Tabela/tabela'
import '../../../Pages/Admin/ListarEventos/ListarEventos.css'

class ListarEventos extends React.Component {
    render() {
        return (
            <div className="div_principal_listarEventos">
                <div className="texto_h1_listarEventos">
                    <h1>Todos os Eventos</h1>
                </div>
                <Navbar />
                <Tabela /> 
            </div>
        );
    }
}
export default ListarEventos