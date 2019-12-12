import React, { Component } from 'react';
import '../../components/TabelaListarCategorias/TabelaListarCategorias.css'
import api from '../../services/api';
import Axios from 'axios';


class TabelaListarCategorias extends Component {
    // indica que iremos startar algo dentro da classe para manipular
    constructor() {
        super();
        this.state = { ListaDeCategoria: [] };
    }

    getCategorias = async () => {
        await Axios.get("https://localhost:5001/api/categoria").then(resposta => {
            console.log("REPOSTA" + resposta)
            this.setState({ ListaDeCategoria: resposta.data });
            console.log("LISTA" + this.state.ListaDeCategoria)
        }).catch(erro => console.log(erro));
    }

    componentDidMount() {
        this.getCategorias();
    }

    render() {
        return (
            <div>
                <table class="table">
                    <thead class="indigo darken-2 white-text">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOME DA CATEGORIA</th>
                            <th scope="col">DESCRIÇÃO DA CATEGORIA</th>
                            <th scope="col">OPÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ListaDeCategoria.map((categoria) => {
                                return (
                                    <tr>
                                        <th scope="row">{categoria.idCategoria}</th>
                                        <td>{categoria.nomeCategoria}</td>
                                        <td>{categoria.descricaoCategoria}</td>
                                        <td><i class="fas fa-ellipsis-v"></i></td>
                                    </tr>
                                )
                            })
                        }
                        {/* {/* <tr>
                            <th scope="row">#002</th>
                            <td>NOME TESTE DA CATEGORIA</td>
                            <td>DESCRIÇÃO TESTE SOBRE A CATEGORIA</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr> */}
                        {/* <tr>
                            <th scope="row">#003</th>
                            <td>NOME TESTE DA CATEGORIA</td>
                            <td>DESCRIÇÃO TESTE SOBRE A CATEGORIA</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">#004</th>
                            <td>NOME TESTE DA CATEGORIA</td>
                            <td>DESCRIÇÃO TESTE SOBRE A CATEGORIA</td>
                            <td><i class="fas fa-ellipsis-v teste"></i></td>
                        </tr> */}
                    </tbody>
                </table>

            </div>
        );
    }
}
export default TabelaListarCategorias