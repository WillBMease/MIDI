function dataProcess(index, c){

        user[index] = c 

          // Receive the incoming message and play it calling midi function
              $('#messages').append('<br>Now chatting with ' + user[index].peer);
    user[index].on('data', function(data){
      // $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');

      if (data[1] == '0' && data[2] == '0')
      {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[index].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[index].peer);

      }

          else if (data[1] == '0' && data[2] == '1')
          {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
       $('#messages').append('<br> Latency for ' + user[index].peer + ': ' + '  - - -  ' + rttString + 'ms');
          }

      else if (data[1] == 1) {
      triggerMidiDevice(index, data) ;
     }

      else if (data[1] == 2) {
      triggerSample(index, data) ;
     }

     else if (data[1] == 3) {
      loadInstrument(index, data[2])
     }

     else if (data[1] == 4) {
      audioPrc++
      if (data[2] == 500) {
        var percent = ((audioPrc / 500) * 100)
        console.log('<br> % received is ' + percent)
        audioPrc = 0
        var msg = []
        msg[0] = peer.label
        msg[1] = 5
        msg[2] = percent
        user[index].send(msg)
      }
     }

     else if (data[1] == 5)
     {
      console.log('<br> Received is %' + data[2])
      lastDate = new Date()
      var finalDate = lastDate - firstDate
      console.log(finalDate)
     }


    });
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 

          });

}