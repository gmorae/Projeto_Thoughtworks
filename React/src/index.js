import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import NotFound from './pages/NotFound';
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import User from './Pages/User/Home/User'
import Admin from './Pages/Admin/Home/Admin'
import DadosPessoais from './Pages/EditarDadosPessoais/EditarDadosPessoais'
import ListauUsuario from './Pages/Admin/ListaUsuario/ListaUsuario'
import ListarEventos from './Pages/Admin/ListarEventos/ListarEventos'
import EditarDadosAdmin from'./Pages/Admin/EditarDadosAdmin/EditarDadosAdmin'

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
                <Route path="/DadosPessoais" component={DadosPessoais} />
                


                {/** Rotas do administrador */}
                <Route path="/Admin" component={Admin}/>
                <Route path="/ListaUsuario" component={ListauUsuario}/>
                <Route path="/ListarEventos" component={ListarEventos}/>
                <Route path="/EditarDadosAdmin" component={EditarDadosAdmin}/>
            


                {/*<Route component={NotFound} />*/}
                
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();