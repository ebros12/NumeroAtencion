//Comando para establecer la conexión
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al servidor');
});

//Escuchar Informacion
socket.on('disconnect', function() {
    console.log('Perdimos Conexion con el servidor');
})

socket.on('estadoActual', function(Resp) {
    label.text(Resp.actual)
})

$('button').on('click', function() {
    socket.emit('siguenteTicket', null, function(siguenteTicket) {
        label.text(siguenteTicket)
    })
})