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

			var context = new webkitAudioContext(); // Create audio container with webkit prefix
	oscillator = context.createOscillator(); // Create bass guitar
    gainNode = context.createGainNode(); // Create boost pedal
 
	oscillator.connect(gainNode); // Connect bass guitar to boost pedal
	gainNode.connect(context.destination); // Connect boost pedal to amplifier
	gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume
oscillator.noteOn(0); // Play bass guitar instantly

setTimeout(function(){
oscillator.noteOff(0) ;
}, 100)
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