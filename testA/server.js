// SERVER TEST A

var http = require("http") ;
var url = require("url") ;
var midi = require("../midi.js");
var count = 0 ;

 var ipAdd ;
function start(route, handle)
{


//var output = new midi.output();
// output.openVirtualPort("JellyVibes");



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

var length = postDataChunk.length ;

ipAdd = postDataChunk[5] ;
for (var i = 6 ; i < length ; i++)
{
	ipAdd += postDataChunk[i] ;
}

		console.log(ipAdd) ;

////////////////////

// if (ipAdd != 'null')
// {


var PORT = 33333;
//var HOST = '10.120.91.147';
var HOST = ipAdd;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

   var newMsg = message.toString('utf8');
   var sendMsg1 = newMsg[0] + newMsg[1] + newMsg[2] ;
   var sendMsg2 = newMsg[4] + newMsg[5] ;
   var sendMsg3 = newMsg[7] + newMsg[8] ; 
   var intMsg1 = parseInt(sendMsg1,10);
   var intMsg2 = parseInt(sendMsg2,10);
   var intMsg3 = parseInt(sendMsg3,10);



	//output.sendMessage([intMsg1,intMsg2,intMsg3) ;
	count += 1 ;
	if (count % 2 == 0)
	{
	var counter = count / 2 ;
	console.log(counter) ;
	} 

});
server.bind(PORT, HOST);

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