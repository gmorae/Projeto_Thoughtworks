import React from 'react';
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin';
import CardAdmin from '../../../components/CardAdmin/CardAdmin';


function Admin() {
    return (
        <div>
            <div className="fundo">
                <Navbar />
                <div class="container mt-5 py-5">
                    <section class="">
                        <div class="row mt-4">
                            <CardAdmin nome="Pendentes" cor="warning-color" icone="far fa-calendar-alt" />
                            <CardAdmin nome="Negados" cor="danger-color" icone="fas fa-times" />
                            <CardAdmin nome="Aprovar" cor="success-color" icone="fas fa-check" />
                            <CardAdmin nome="Criar" cor="primary-color" icone="fas fa-plus" />
                            <CardAdmin nome="Anterior" cor="default-color" icone="fas fa-arrow-left" />
                            <CardAdmin nome="Próximo" cor="default-color-dark" icone="fas fa-arrow-right" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Admin;
