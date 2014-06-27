var express = require('express');
var app = express();
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;
var net = require('net') ;
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('osc on', function(msg){
		io.emit('osc on', msg) ;
		console.log(msg) ;
	});
	socket.on('osc off', function(msg){
		io.emit('osc off', msg) ;
		console.log(msg) ;
	});
		socket.on('sample on', function(msg){
		io.emit('sample on', msg) ;
		console.log(msg) ;
	});
});

http.listen(8888, function(){
	console.log('listening on *:8888');
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