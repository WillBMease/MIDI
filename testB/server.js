// SERVER TEST B

var http = require("http") ;
var url = require("url") ;
var midi = require("../midi.js");

// var ipAdd = 'null';
function start(route, handle)
{


// var output = new midi.output();
//  output.openVirtualPort("JellyVibes");

var PORT = 33333;
var HOST = '10.120.91.147';
//var HOST = ipAdd;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

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


	function onRequest(request, response)
	{
		var postData = "" ;
	var pathname = url.parse(request.url).pathname ;
	console.log("Request for " + pathname + " received.") ;

	request.setEncoding("utf8") ;

	request.addListener("data", function(postDataChunk)
	{
		postData += postDataChunk ;
		console.log("Received POST data chunk '" +
			postDataChunk + "' .") ;
		//ipAdd = postDataChunk ;

////////////////////

// if (ipAdd != 'null')
// {



// }

///////////////////

	}) ;
/*
	response.writeHead(200, {"Content-Type": "text/plain"}) ;
	var content = route(handle, pathname) ;
	response.write(content) ;
	response.end() ;
	*/

	request.addListener("end", function()
		{ route(handle, pathname, response, postData)
		}) ;
}
http.createServer(onRequest).listen(8888) ;
console.log("Server has started.") ;
}

//////////////////////////////////////


//////////////////////////////////////

exports.start = start ;