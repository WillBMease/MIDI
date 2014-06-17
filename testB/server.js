// SERVER TEST B

var http = require("http") ;
var url = require("url") ;
var midi = require("../midi.js");
var transmit = require("./transmit")
//var ipAdd = 'null' ;




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

		transmit.transmit('10.120.91.147');
		//ipAdd = postDataChunk ; 
/////////////



/////////////////////////////

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

//////////////////////////////////////////////////


////////////////////////////////////////////////

exports.start = start ;