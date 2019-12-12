import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//import NotFound from './pages/NotFound';
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import User from './Pages/User/Home/User'
import Admin from './Pages/Admin/Home/Admin'
import DadosPessoais from './Pages/EditarDadosPessoais/EditarDadosPessoais'
import ListauUsuario from './Pages/Admin/ListaUsuario/ListaUsuario'
import ListarEventos from './Pages/Admin/ListarEventos/ListarEventos'
import EditarDadosAdmin from'./Pages/Admin/EditarDadosAdmin/EditarDadosAdmin'
import EditarSenhaAdmin from './Pages/Admin/EditarSenhaAdmin/EditarSenhaAdmin'
import EditarSenhaUser from './Pages/User/EditarSenhaUser/EditarSenhaUser'
import CadastrarEvento from './Pages/CadastrarEvento/CadastrarEvento'
import ListaDeCategoria from './Pages/User/ListaDeCategoria/ListaDeCategoria';
import EditarDadosPessoais from './Pages/EditarDadosPessoais/EditarDadosPessoais';
import { usuarioAutenticado, parseJwt } from './services/auth';

const PermissaoAdm = ({ component: Component}) => (
    <Route 
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <component {...props} />
            ) : (
                <Redirect to={{ path: '/Admin'}} />
            )
        }
        />
)

const Rotas = (
    <Router>
        <div>
            <Switch>
                {/** Rotas comuns */}
                <Route path="/" exact component={App} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Login" component={Login} />


                {/** Rotas dos usuarios */}
                <Route path="/User" component={User} />
                <Route path="/EditarDadosPessoais" component={EditarDadosPessoais} />
                <Route path="/EditarSenhaUser" component={EditarSenhaUser}/>
                <Route path="/CadastrarEvento" component={CadastrarEvento} />
                <Route path="/ListaDeCategoria" component={ListaDeCategoria}/>
                


                {/** Rotas do administrador */}
                <PermissaoAdm path="/Admin" component={Admin}/>
                <Route path="/ListaUsuario" component={ListauUsuario}/>
                <Route path="/ListarEventos" component={ListarEventos}/>
                <Route path="/EditarDadosAdmin" component={EditarDadosAdmin}/>
                <Route path="/EditarSenhaAdmin" component={EditarSenhaAdmin}/>
                
            


                {/*<Route component={NotFound} />*/}
                
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();