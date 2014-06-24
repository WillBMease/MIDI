var net = require("net");
var participant = []; // array of participanticpants
var current = -1;
var total_participants = 0;
var server = net.createServer(function(socket){
    participant.push(socket);
    total_participants++;
    for(var i=0;i<participant.length;i++){
        if(participant[i] == socket) continue;
        participant[i].write("A new particpant joined the chat\n");
        participant[i].write("Now there are total " +total_participants+" members\n");
        
    }
    socket.on('data',function(data){
        for(var i=0;i<participant.length;i++){
            if(participant[i] == socket) {
                current = i;
                continue;
            }
            participant[i].write(i+" says : "+data);
        }
    });
    socket.on('close',function(){
        var i = participant.indexOf(socket);
        participant.splice(i,1);
        total_participants--;
        for(var i=0;i<participant.length;i++){
            participant[i].write(i+" left the chat\n");
            participant[i].write("Now there are total " +total_participants+" members\n");
        }
        
    });
    socket.on("error",function(err){
        //console.log("error cooured-->"+err)
    });
// socket.close();    
});

server.listen(1234);