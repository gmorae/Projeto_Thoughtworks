var tab = [
    "imagens/iconeAdmin/paisagem_carrosel.jpg",
    "imagens/iconeAdmin/paisagemjpg.jpg",
    "imagens/iconeAdmin/maxresdefault.jpg"
]

var i = 0;

$('#botao_atras').on('click', function() {
    i++;
    $('.imagem_carrosel').attr("src", tab[i % 3]);
    setInterval(function() {
        $('button').click();
    }, 2000);
});