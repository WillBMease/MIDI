var app = require('express')() ;
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;
var net = require('net') ;

app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		io.emit('chat message', msg) ;
	});
});

http.listen(8888, function(){
	console.log('listening on *:3000');
});

// var http = require("http");


// var net = require("net");

// var server=net.createServer(function(socket){
//     socket.on('connection',function(socket){
//         console.log('socket connection...');
//     });
//     socket.on('data',function(message){
//         console.log('socket message:'+message);
//         socket.write('You wrote:'+message); 
//         socket.end(); // <-- :)    
//     });
//     socket.on('error',function(error){
//         console.log('error on socket message:'+error);      
//     });
// }).listen(1024);