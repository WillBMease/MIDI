

var midi = require("../midi.js");

var output = new midi.output();
output.openVirtualPort("JellyVibesNew");

var PORT = 33333;
var HOST = '10.120.91.147';
var dgram = require('dgram');
//var message = new Buffer('Note Played');
var client = dgram.createSocket('udp4');


//var send = new Buffer('151, 57, 127') ;

//   client.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     console.log(send) ;
//     //client.close();

// });


///////////

var input = new midi.input();
console.log(input.getPortCount());
console.log(input.getPortName(0));
input.on('message', function(deltaTime, message) {
  //console.log('m:' + message + ' d:' + deltaTime);

var send0 = message[0] ;
var send1 = message[1] ;
var send2 = message[2] ;
var send = new Buffer(send0 + " " + send1 + " " + send2) ;

// console.log(message[0]) ;
// console.log(message[1]) ;
// console.log(message[2]) ;

console.log(send) ;
   output.sendMessage(message) ;
  client.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    //console.log(send) ;
    //client.close();

 }); // end client send 

});
input.openPort(0);
// setTimeout(function() {
//   input.closePort();
// }, 100000);



/////////////////////

// client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     client.close();
// });