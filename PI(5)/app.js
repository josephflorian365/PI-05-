
var resultado = $('#material');
var resuelto = $('#flama');
var producto = $('#mflama');
var obtenido = $('#carrito');
var objetivo = $('#objetivos');

$('.btn-flama').click(function(){
    resuelto.toggle(1000);
})


$('.btn-material').click(function(){
    resultado.toggle(1000);
})

$('.btn-mflama').click(function(){
    producto.toggle(1000);
})

$('.btn-carrito').click(function(){
    obtenido.toggle(1000);
})

$('.btn-objetivos').click(function(){
    objetivo.toggle(1000);
})
