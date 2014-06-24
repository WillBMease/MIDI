var http = require('http'),
    dgram = require('dgram'),
    socketio = require('socket.io');

var app = http.createServer(handleRequest),
    io = socketio.listen(app),
    socket = dgram.createSocket('udp4');

socket.on('message', function(content, rinfo) {
    console.log('got message', content, 'from', rinfo.address, rinfo.port);
    io.sockets.emit('udp message', content.toString());
});

function handleRequest(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end("<!doctype html> \
        <html><head> \
        <script src='/socket.io/socket.io.js'></script> \
        <script> \
            var socket = io.connect('localhost', {port: 8000}); \
            socket.on('udp message', function(message) { console.log(message) }); \
        </script></head></html>");
}

socket.bind(7788);
app.listen(8000);