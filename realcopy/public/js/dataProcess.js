var audioPrc = 0
var receiveCt = 0

function dataProcess(index, c){

        user[index] = c 

          // Receive the incoming message and play it calling midi function
              $('#messages').append('<br>Now chatting with ' + user[index].peer);
    user[index].on('data', function(data){
      // $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');

      if (data[1] == '0' && data[2] == '0') {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[index].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[index].peer);

      }

      else if (data[1] == '0' && data[2] == '1') {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
       $('#messages').append('<br> Latency for ' + user[index].peer + ': ' + '  - - -  ' + rttString + 'ms');
          }

          ////////// Audio packet testing

      else if (data[1] == '5' && data[2] == '2') {
        receiveCt++
        //console.log('I received the packet: ' + data[3])
        data[2] = '3' 
        //data[3] = receiveCt
        //user[index].send(data) 
        //console.log('Now I sent the packet back: ' + data[3])
        if (receiveCt % 100 == 0) {
        $('#messages').append('<br>' + 'Received packetID: ' + data[3] + ' & Count is: ' + receiveCt);
          }
        }

      else if (data[1] == '5' && data[2] == '3') {
       // $('#messages').append('<br>' + 'packetID: ' + packetID + ' & ' + data[3]);
            }

      ///////// End Audio packet testing

      else if (data[1] == 1) {
      triggerMidiDevice(index, data) ;
     }

      else if (data[1] == 2) {
      triggerSample(index, data) ;
     }

     else if (data[1] == 3) {
      loadInstrument(index, data[2])
     }

     else if (data[1] == 6) {
      metronome()
     }

     else if (data[1] == 7) {
      octave = data[2]
     }

     else if (data[1] == 8) {
      incomingEffect(index, data[2])
     }

    });
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 
          });

}