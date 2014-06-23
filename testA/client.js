// 

var midi = require("../midi.js");

var output = new midi.output();
output.openVirtualPort("JellyVibesNew");

var PORT = 33334;
var HOST = '68.181.54.61';
var dgram = require('dgram');
//var message = new Buffer('Note Played');
var client = dgram.createSocket('udp4');

var start ;

var send = new Buffer('151, 57, 127') ;

  client.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    console.log(send) ;
//     //client.close();
start = new Date() ;

 });


///////////


// setTimeout(function() {
//   input.closePort();
// }, 100000);



/////////////////////

// client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     client.close();
// });


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


var MYPORT = 33333 ;
//var .... 33333
//var HOST = '192.168.70.3';
//var MYHOST = '10.120.79.164'
var MYHOST = '68.181.54.61' ;
//var MYHOST = '68.181.54.61'
//var HOST = ipAdd ;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');



var output1 = new midi.output();
output1.openVirtualPort("JellyVibes");

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
 	var end = new Date() - start ;
 	console.log(end + 'ms') ;

});
// //server.bind(PORT, HOST);
server.bind(MYPORT, MYHOST) ;