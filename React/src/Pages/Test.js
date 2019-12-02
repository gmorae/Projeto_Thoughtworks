import React, {Component} from 'react';
import kk from '../components/modalCategorias/ModalCategorias';
import ModalCategorias from '../components/modalCategorias/ModalCategorias';


class Test extends Component{
    
    render (){
        return(
            <main>
                <div>
                    <form>
                    <a className="textEsqueceuSenha" data-toggle="modal" data-target="#modalEsqueceuSenha"> 
                        <button className="modalCategoria">#</button>
                        </a>
                        <ModalCategorias />
                    </form>
                </div>

            </main>
        )
    }
}

export default Test;