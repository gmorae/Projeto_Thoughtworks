$(function(){
    $('.botao1').click(function(){
        $('.table2').hide();
        $('.table3').hide();
        $('.table1').fadeIn(500);
    })

    $('.botao2').click(function(){
        $('.table3').hide();
        $('.table1').hide();
        $('.table2').fadeIn(500);
    })

    $('.botao3').click(function(){
        $('.table2').hide();
        $('.table1').hide();
        $('.table3').fadeIn(500);
    })
});