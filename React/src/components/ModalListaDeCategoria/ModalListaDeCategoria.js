import React, { Component } from "react"

class ModalListaDeCategoria extends Component {
    render() {
        return (
            <div class="modal fade" id="ModalListaDeCategoria" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-notify modal-info" role="document">
                    <div class="modal-content text-center">
                        <div class="modal-header d-flex info-color justify-content-center">
                            <p class="heading">Crie sua categoria</p>
                        </div>
                        <div class="modal-body">
                            <p>Insira o nome da categoria desejada</p>
                            <div class="md-form">
                                <input type="text" id="email" class="form-control" />
                                <label for="email">Categoria desejada</label>
                            </div>
                            <div class="md-form">
                                <input type="text" id="email" class="form-control" />
                                <label for="email">Descrição da categoria</label>
                            </div>
                        </div>
                        <div class="modal-footer flex-center">
                            <a class="btn btn-bluee-login ">Criar categoria</a>
                            <a class="btn btn btn-blue-login color" data-dismiss="modal">Cancelar</a>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ModalListaDeCategoria
