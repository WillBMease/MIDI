var midi = require("../midi.js");

var output = new midi.output();
output.openVirtualPort("JellyVibes");
// setTimeout(function() {
//   output.sendMessage([144,64,90]);
// }, 10000);
// setTimeout(function() {
//   output.sendMessage([128,64,40]);
// }, 15000);
// setTimeout(function() {
//   output.closePort();
// }, 20000);



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
    output.sendMessage([message]) ;

});
server.bind(PORT, HOST);