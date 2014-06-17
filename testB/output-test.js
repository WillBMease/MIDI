var midi = require("../midi.js");

var output = new midi.output();
console.log(output.getPortCount());
console.log(output.getPortName(0));
output.openPort(0);
output.sendMessage([176,22,1]);
output.sendMessage([176,22,99]);
output.closePort();


var PORT = 33333;
var HOST = '10.120.91.147';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    // console.log(message[0]) ;
    // console.log(message[1]) ;
    // console.log(message[2]) ;
    // console.log(message[3]) ;
    // console.log(message[4]) ;
    // console.log(message[5]) ;

});
server.bind(PORT, HOST);