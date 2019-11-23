import React from 'react'


function DetalheEventos() {
    return (
        <div>
            <div class="modal fade" id="centralModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-notify modal-success" role="document">

                    <div class="modal-content">

                        <div class="modal-header">
                            <p class="heading lead">Modal Success</p>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="text-center">
                                <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam
                                  blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat.
            Esse ratione fuga, enim, ab officiis totam.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default DetalheEventos