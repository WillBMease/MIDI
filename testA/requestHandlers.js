var midi = require("../midi.js");

var output1 = new midi.output();
output1.openVirtualPort("JellyVibes1");

//var exec = require("child_process").exec ;
var querystring = require("querystring") ;
	fs = require("fs") ;

var ipAdd ;

function start(response, postData)
{
	console.log("Request handler 'start' was called.") ;

	var body = '<html>' +
	'<head>' +
	'<meta http-equiv = "Content-Type" content = "text/html" ; ' +
	'charset = UTF-8 />' +
	'</head>' +

	'<body>'+
	'<form action="/upload" method="post">'+
 	'<textarea name="text" rows="1" cols="35"></textarea>'+
 	'<input type="submit" value="Submit text" />'+
 	'</form>'+
 	'</body>'+
 	'</html>';

 	response.writeHead(200, {"Content-Type": "text/html"}) ;
 	response.write(body) ;
 	response.end() ;

/*
	exec("find /",
	{
		timeout: 3000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr)
		{
			response.writeHead(200, { "Content-Type": "text/plain"}) ;
			response.write(stdout) ;
			response.end() ;
	}) ;
*/

/*
	exec("ls -lah", function (error, stdout, stderr)
		{ 
			response.writeHead(200, {"Content-Type": "text/plain"}) ;
			response.write(stdout) ;
			response.end() ;
		} ) ;

	*/
}

function upload(response, postData)
{
	console.log("Request handler 'upload' was called.") ;
	response.writeHead(200, {"Content-Type": "text/plain"}) ;
	response.write("You've sent: " + querystring.parse(postData).text) ;
	ipAdd = postData ;
	console.log(ipAdd) ;
	response.end() ;
}

function show(response)
{
	console.log("Request handler 'show' was called.") ;
	response.writeHead(200, {"Content-Type": "image/png"}) ;
	fs.createReadStream("/tmp/test.png").pipe(response) ;
}

function printWeb()
{

}

exports.start = start ;
exports.upload = upload ;
exports.show = show ;


