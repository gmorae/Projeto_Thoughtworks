import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sobre.css'
import image from '../../img/about.svg'
import Modal from '../ModalSobre/ModalSobre'

export class Sobre extends Component {
    render() {
        return (
            <div className="fundoBlue">
                <div className="container mt-5">
                    <section className="white-text">
                        <div className="row pr-lg-5">
                            <div className="col-md-7 mb-4 mt-5">

                                <div className="view">
                                    <img src={image} className="img-fluid" alt="smaple image" />
                                </div>

                            </div>
                            <div className="col-md-5 d-flex align-items-center mb-3">
                                <div>
                                    <h1 className="h1-responsive font-weight-bold text-uppercase space">Bem-vindo a easy talk</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adip elit. Maiores deleniti explicabo voluptatem quisquam nulla asperiores aspernatur aperiam voluptate et consectetur minima delectus, fugiat eum soluta blanditiis adipisci, velit dolore magnam.</p>
                                    <Link className="btn btn-defaulttt text-white radius" data-toggle="modal" data-target="#ModalSobre">Saiba Mais</Link>
                                </div>
                            </div>
                        </div>

                    </section>
                    <Modal />
                </div>
            </div>
        )
    }
}

export default Sobre
