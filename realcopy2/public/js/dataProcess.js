var audioPrc = 0
var receiveCt = 0
var tempObj = {
      sound:"",
      inst:"",
      insType:"",
      frequency: 0,
      activeVoice:"",
      audioPointer:"",
    }

var pingCheck = []


function dataProcess(index, c){

        user[index] = c 

          // Receive the incoming message and play it calling midi function
              $('#messages').append('<br>Now chatting with ' + user[index].peer);
              loadInstrument(index, firstInst)
    user[index].on('data', function(data){
      // $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');

  console.log('received')

// while (pingFirst < 20) {
//   firstPinger()
// }

      if (data[1] == '0' && data[2] == '0') {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[index].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[index].peer);

      }

      else if (data[1] == '0' && data[2] == '1') {
        var calculate = true
           for (var x = 0 ; x < pingCheck.length ; x++){
            if (pingCheck[x] == data[3])
              calculate = false
           }
           if (calculate) {
            endTime = new Date();
            rttTime = (endTime - startTime[data[3]]) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
            pingCheck.push(data[3])
       $('#messages').clear
       $('#messages').append('<br> Latency for ' + user[index].peer + ': ' + '  - - -  ' + rttString + 'ms');
     }
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

      else if (data[1] == 1) {          // midi play
      triggerMidiDevice(index, data) ;
     }

      else if (data[1] == 2) {          // keyboard play
      triggerSample(index, data) ;
     }

     else if (data[1] == 3) {           // instrument changes
      loadInstrument(index, data[2])
     }

     else if (data[1] == 6) {           // metronome changes

            bpm = data[3]

      if (data[2] == 0)
        metronome()
      else if (data[2] == 1)
      toggleBPM()
      console.log('received metro start')
     }

     else if (data[1] == 7) {           // octave changes
      octave[index] = data[2]
     }

     else if (data[1] == 8) {           // effect changes
      effectsMain(index, data)
     }

     else if (data[1] == 9) {
      console.log('hahahha!')

      if (data[2] == 'on') {
      tempObj.sound = data[3]
      tempObj.inst = data[4]
      tempObj.insType = data[5]
      tempObj.frequency = data[6]
      tempObj.activeVoice = data[7]
      tempObj.audioPointer = data[8]
      startNote(tempObj)
    }

      else if (data[2] == 'off')
        // endNote(tempObj)
      // tempObj.activeVoice.stop(0)
      // tempObj.activeVoice.disconnect()
     }

    });
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 
          });

}