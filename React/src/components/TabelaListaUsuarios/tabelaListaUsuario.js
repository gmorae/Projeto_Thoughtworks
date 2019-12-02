import React, { Component } from 'react';
import '../../components/TabelaListaUsuarios/tabelaListaUsuario.css'


class TabelaListaUsuario extends Component {
    render() {
        return (
            <div>
                <div className="texto_listausuario">
                    <h1>Lista dos Usuarios</h1>
                </div>
                <table class="table">
                    <thead class="indigo darken-2 white-text">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                        <th scope="row">NOME TESTE</th>
                            <td>EMAIL TESTE</td>
                            <td>STATUS TESTE</td>
                            <td>TELEFONE TESTE</td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                    </tbody>
                </table>

                
            </div>
        );
    }
}
export default TabelaListaUsuario