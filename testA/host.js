var midi = require("../midi.js");
var count = 0 ;
//var input = new midi.input() ;

var output1 = new midi.output();
output1.openVirtualPort("JellyVibes1");
// var output2 = new midi.output();
// output2.openVirtualPort("JellyVibes2");
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
var HOST = '10.120.79.164';
//var HOST = ipAdd ;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var client = dgram.createSocket('udp4');

  client.send(send, 0, send.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    console.log(send) ;
    //client.close();

});

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
   // var d = [message[0] + " " + message[1] + " " + message[2]] ;
   var newMsg = message.toString('utf8');
   var sendMsg1 = newMsg[0] + newMsg[1] + newMsg[2] ;
   var sendMsg2 = newMsg[4] + newMsg[5] ;
   var sendMsg3 = newMsg[7] + newMsg[8] ; 
   var intMsg1 = parseInt(sendMsg1,10);
   var intMsg2 = parseInt(sendMsg2,10);
   var intMsg3 = parseInt(sendMsg3,10);
   // console.log(intMsg1) ;
   //    console.log(intMsg2) ;
   //       console.log(intMsg3) ;
   // console.log(sendMsg1) ;
   // console.log(sendMsg2) ;
   // console.log(sendMsg3) ;
    //var sendMsg = [intMsg1,intMsg2,intMsg3] ;
    //console.log(sendMsg) ;
	output1.sendMessage([intMsg1,intMsg2,intMsg3]) ;
	count += 1 ;
	console.log(count) ;
	//output.sendMessage([137,40,64]) ;
    //console.log(message) ;

});
//server.bind(PORT, HOST);
server.bind(PORT, HOST) ;

var output2 = new midi.output();
output2.openVirtualPort("JellyVibes2");
