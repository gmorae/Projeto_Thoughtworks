import React, { Component } from 'react';
import '../../components/TabelaListarCategorias/TabelaListarCategorias.css'

class TabelaListarCategorias extends Component {
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
                        <tr>
                            <th scope="row">#001</th>
                            <td>NOME TESTE DA CATEGORIA</td>
                            <td>DESCRIÇÃO TESTE SOBRE A CATEGORIA</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <th scope="row">#002</th>
                            <td>NOME TESTE DA CATEGORIA</td>
                            <td>DESCRIÇÃO TESTE SOBRE A CATEGORIA</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}
export default TabelaListarCategorias