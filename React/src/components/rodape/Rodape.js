import React from 'react'
import './Rodape.css'

function Rodape() {
    
    return (
        <footer className="page-footer font-small unique-color-dark pt-4">
            <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                    <h5 className="mb-1">Registre-se gratuitamente</h5>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn btn-white">Vamos</a>
                </li>
            </ul>

            <div className="footer-copyright text-center py-3">© 2019 Copyright:  ThoughtWors.com</div>

        </footer>
    )
}

export default Rodape