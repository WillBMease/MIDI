// 

var midi = require("../midi.js");

var output = new midi.output();
output.openVirtualPort("JellyVibesNew");

var PORT = 33333;
var HOST = '10.120.91.147';
var dgram = require('dgram');
//var message = new Buffer('Note Played');
var client = dgram.createSocket('udp4');


//var send = new Buffer('151, 57, 127') ;

  client.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    console.log(send) ;
//     //client.close();

// });


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