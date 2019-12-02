import React from 'react';
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin';
import TabelaListaUsuario from '../../../components/TabelaListaUsuarios/tabelaListaUsuario';

function Admin() {
    return (
        <div>
        <Navbar />
        <TabelaListaUsuario/> 
        </div>
    )
}
export default Admin;


{/* <main>
        <div class="texto">
            <h1>todos os usuários</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>nome</th>
                    <th>email</th>
                    <th>telefone</th>
                    <th>tipo</th>
                    <th>opção</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alexandre Castro</td>
                    <td>alexcastro@gmail.com</td>
                    <td>12345678</td>
                    <td>Administrador</td>
                    <td><i class="fas fa-ellipsis-v"></i></td>
                </tr>
                <tr>
                    <td>Samuel Santos</td>
                    <td>samsantos@gmail.com</td>
                    <td>11987874543</td>
                    <td>Funcionário</td>

                    <td><i class="fas fa-ellipsis-v"></i></td>
                    </td>
                </tr>
                <tr>
                    <td>Luis Cardozo</td>
                    <td>luicard@gmail.com</td>
                    <td>1198767621</td>
                    <td>Administrador</td>
                    <td><i class="fas fa-ellipsis-v"></i></td>
                </tr>

                </tr>
            </tbody>
        </table>
    </main> */}