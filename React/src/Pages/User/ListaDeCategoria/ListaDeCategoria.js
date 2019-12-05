import React, { Component } from 'react'
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin'
import TabelaListarCategorias from '../../../components/TabelaListarCategorias/TabelaListarCategorias'
import ModalListaDeCategoria from '../../../components/ModalListaDeCategoria/ModalListaDeCategoria'


function ListaDeCategoria() {
    let Tabela = {
        marginTop: '5.5em',
    }

    let botaoCriarEvento ={
        left: '94.9em',
        top: '5em',
        width: '10vw',
        height: '5vh',
        color: 'white',
        padding: '0'
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-center mt-5">Lista de Categorias</h1>
            <a href="" data-toggle="modal" data-target="#ModalListaDeCategoria">
            <button className="btn btn-blue" style={botaoCriarEvento}>+ Criar categoria</button>
            </a>
            <ModalListaDeCategoria/>
            <div style={Tabela}>
                <TabelaListarCategorias />
            </div>
        </div>
    )
}

export default ListaDeCategoria