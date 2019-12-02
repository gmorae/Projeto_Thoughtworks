import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import NotFound from './pages/NotFound';
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Test from './Pages/Test';
// import ModalCategoria from './components/modalCategorias/ModalCategorias';




const Rotas = (
    <Router>
        <div>
            <Switch>
                {/** Rotas comuns */}
                <Route path="/" exact component={App} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Login" component={Login} />
                <Route path="/Test" component={Test} />
                {/* <Route path="/modalcat" component={ModalCategoria} /> */}


                {/** Rotas dos usuarios */}


                {/** Rotas do administrador */}


                {/*<Route component={NotFound} />*/}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();