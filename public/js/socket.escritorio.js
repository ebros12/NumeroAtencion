//Comando para establecer la conexión
var socket = io();


var seacrchParams = new URLSearchParams(window.location.search)

if (!seacrchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}

var escritorio = seacrchParams.get('escritorio');
var label = $('small')
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio)


$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay tickets') {
            alert(resp);
            label.text(resp)
            return
        }
        console.log(resp);
        label.text("Ticket: " + resp.numero)
    })
})