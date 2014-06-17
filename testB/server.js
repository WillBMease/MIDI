var http = require("http") ;
var url = require("url") ;
var midi = require("../midi.js");


function start(route, handle)
{

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
/////////
var output = new midi.output();
output.openVirtualPort("JellyVibes");

var PORT = 33333;
var HOST = postDataChunk;
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
//////////

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
http.createServer(onRequest).listen(8887) ;
console.log("Server has started.") ;
}

exports.start = start ;