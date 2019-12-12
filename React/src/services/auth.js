export const usuarioAutenticado = () => localStorage.getItem('usuario-easyTalk') !== null

export const parseJwt = () => {

    var base64 = localStorage.getItem('usuario-easyTalk').split('.')[1]

    console.log(JSON.parse(window.atob(base64)))
    return JSON.parse(window.atob(base64))
}
