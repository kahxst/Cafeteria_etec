
$('.box2 img').click(function(){
    $('#foto-grande').fadeOut(0);
    caminho = $(this).attr('data-url');
    $('#foto-grande').attr('src',caminho);
    $('#foto-grande').fadeIn(900);
})
