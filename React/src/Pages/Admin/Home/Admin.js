import React from 'react';
import Navbar from '../../../components/cabecalhos/cabecalhoAdmin/CabecalhoAdmin';
import CardAdmin from '../../../components/CardAdmin/CardAdmin';


function Admin() {
    return(
        <div className="Admin.css">
            <Navbar/>
            <CardAdmin/>
            
        </div>
    )
}
export default Admin;
