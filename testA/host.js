var midi = require("../midi.js");
var count = 0 ;
//var input = new midi.input() ;


var MYPORT = 33334 ;
//var .... 33333
//var HOST = '192.168.70.3';
//var MYHOST = '10.120.79.164'
var MYHOST = '68.181.55.4' ;
//var MYHOST = '68.181.54.61'
//var HOST = ipAdd ;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');



// var output1 = new midi.output();
// output1.openVirtualPort("JellyVibes");

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
   // var d = [message[0] + " " + message[1] + " " + message[2]] ;
var start = new Date() ;
////////////////////////////////////////////

var PORT = 33333;
//var ...33334
//var HOST = '206.117.88.5';
var HOST = '68.181.55.4' ;
//var dgram = require('dgram');
var client1 = dgram.createSocket('udp4');

var send = new Buffer('151, 57, 127') ;

  client1.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    }) ;
var end = start - new Date() ;
console.log(end) ;
/////////////////////////////////////////////


   // READING MIDI DATA
   var newMsg = message.toString('utf8');
   var sendMsg1 = newMsg[0] + newMsg[1] + newMsg[2] ;
   var sendMsg2 = newMsg[4] + newMsg[5] ;
   var sendMsg3 = newMsg[7] + newMsg[8] ; 
   var intMsg1 = parseInt(sendMsg1,10);
   var intMsg2 = parseInt(sendMsg2,10);
   var intMsg3 = parseInt(sendMsg3,10);
   // END READING MIDI DATA

   // console.log(intMsg1) ;
   //    console.log(intMsg2) ;
   //       console.log(intMsg3) ;
   // console.log(sendMsg1) ;
   // console.log(sendMsg2) ;
   // console.log(sendMsg3) ;
    //var sendMsg = [intMsg1,intMsg2,intMsg3] ;
    //console.log(sendMsg) ;
  //output1.sendMessage([intMsg1,intMsg2,90]) ;
  count += 1 ;
  console.log(count) ;
  //output.sendMessage([137,40,64]) ;
    //console.log(message) ;

});
// //server.bind(PORT, HOST);
server.bind(MYPORT, MYHOST) ;



/////////////////////////////////////////////////////

/////////////////////////////////////////////////////


// var PORT = 33334;
// //var ...33334
// var HOST = '192.168.70.3';

// var client1 = dgram.createSocket('udp4');
// //var client2 = dgram.createSocket('upd4') ;

// var input = new midi.input();
// console.log(input.getPortCount());
// console.log(input.getPortName(0));
// input.on('message', function(deltaTime, message) {
//   //console.log('m:' + message + ' d:' + deltaTime);

// var send0 = message[0] ;
// var send1 = message[1] ;
// var send2 = message[2] ;
// var send = new Buffer(send0 + " " + send1 + " " + send2) ;

// // console.log(message[0]) ;
// // console.log(message[1]) ;
// // console.log(message[2]) ;

// //console.log(send) ;
//   // output.sendMessage(message) ;
//   client1.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     console.log(send) ;
//     //client.close();

//  }); // end client send 

// });
// input.openPort(0);



/// NO MIDI
  


<<<<<<< HEAD
var PORT = 33334;
//var ...33334
//var HOST = '206.117.88.5';
//var HOST = '68.181.54.61' ;
var HOST = '54.213.132.53' ;
//var dgram = require('dgram');
var client1 = dgram.createSocket('udp4');

var send0 = 222 ;
var send1 = 22 ;
var send2 = 22 ;
var send = new Buffer(send0 + " " + send1 + " " + send2) ;

var timer = 1000 ;

for (var i = 0 ; i < timer ; i++)
{
	if (i % 500 == 0)
	{

  client1.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    console.log(i + " " + send) ;
    }) ;
	}
}






=======
// var PORT = 33333;
// //var ...33334
// //var HOST = '206.117.88.5';
// var HOST = '68.181.39.48' ;
// //var dgram = require('dgram');
// var client1 = dgram.createSocket('udp4');
>>>>>>> a90534ccd44e507d16ace6d305c82ea7d7c77455

// var send0 = 111 ;
// var send1 = 11 ;
// var send2 = 11 ;
// var send = new Buffer(send0 + " " + send1 + " " + send2) ;

//   client1.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     console.log(i + " " + send) ;
//     var end = new Date() - start ;
//     console.log(end) ;
//     }) ;
