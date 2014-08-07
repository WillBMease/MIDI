var audioPrc = 0
var receiveCt = 0
var tempOsc = {
      sound:"",
      inst:"",
      insType:"",
      frequency: 0,
      activeVoice:"",
      audioPointer:"",
      pathPointer:""
    }

var tempObj = {
      sound:"",
      inst:"",
      insType:"",
      frequency: 0,
      activeVoice:"",
      audioPointer:"",
      pathPointer:""
    }


function dataProcess(index, c){

var pingCheck = []
var pingIncoming = []
var midiCheck = []
var sampleCheck = []
var logRTT = []
  
  for (var i = 0 ; i < 8 ; i++)
    logRTT[i] = 0

var singleChk = 0
var fullChk = 0

        user[index] = c 

          // Receive the incoming message and play it calling midi function
              $('#messages').append('<br>Now chatting with ' + user[index].peer);
              loadInstrument(index, firstInst)
    user[index].on('data', function(data){
      // $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');

  //console.log('received')

// while (pingFirst < 20) {
//   firstPinger()
// }

      if (data[1] == '0' && data[2] == '0') {
        if (pingIncoming[data[0]] != data[0]){
          data[2] = '1' ;
        for (var y = 0 ; y < 1 ; y++)
        user[index].send(data) ;
        pingIncoming.push(data[0])
          }       
        }

      else if (data[1] == '0' && data[2] == '1') {
       fullChk++
        if (pingCheck[data[0]] != data[0]){
          singleChk++
            endTime = new Date();
            rttTime = (endTime - startTime[data[0]]) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
            pingCheck.push(data[0])
            if (rttTime > 50)
              logRTT[7]++
            else if (rttTime > 30)
              logRTT[6]++
            else if (rttTime > 25)
              logRTT[5]++
            else if (rttTime > 20)
              logRTT[4]++
            else if (rttTime > 15)
              logRTT[3]++
            else if (rttTime > 10)
              logRTT[2]++
            else if (rttTime > 5)
              logRTT[1]++
            else
              logRTT[0]++
       $('#messages').empty().append('<br> Latency for ' + user[index].peer + ': ' + '  - - -  ' + rttString + 'ms');
         
          if (data[0] % 1000 == 0){

var under25 = logRTT[0] + logRTT[1] + logRTT[2] + logRTT[3] + logRTT[4]
var over25 = logRTT[5] + logRTT[6] + logRTT[7]

          console.log("Packets under 25ms: " + under25 + " || Packets over 25ms " + over25)
          console.log("0 - 5ms: " + logRTT[0])
          console.log("5 - 10ms: " + logRTT[1])
          console.log("10 - 15ms: " + logRTT[2])
          console.log("15 - 20ms: " + logRTT[3])
          console.log("20 - 25ms: " + logRTT[4])
          console.log("25 - 30ms: " + logRTT[5])
          console.log("30 - 50ms: " + logRTT[6])
          console.log(" > 50ms: " + logRTT[7])
          console.log("singleChk " + singleChk)
          console.log("fullChk " + fullChk)
          randomChk = 0
          fullChk = 0
        }

         }

          }

          ////////// Audio packet testing

      else if (data[1] == '5' && data[2] == '2') {
        receiveCt++
        console.log(data[0])
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
       
         var calculate = true
          for (var i = 0 ; i < midiCheck.length ; i++){
            if (midiCheck[i] == data[0])
              calculate = false
          }

        if (calculate) {
            triggerMidiDevice(index, data) ;
            midiCheck.push(data[0])
          }
     }

      else if (data[1] == 2) {          // keyboard play
        var calculate = true
          for (var i = 0 ; i < sampleCheck.length ; i++){
            if (sampleCheck[i] == data[0])
              calculate = false
          }

        if (calculate) {
            triggerSample(index, data) ;
            sampleCheck.push(data[0])
          }
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
      tempOsc.sound = data[3]
      tempOsc.inst = data[4]
      tempOsc.insType = data[5]
      tempOsc.frequency = data[6]
      // tempOsc.activeVoice = context.createOscillator()
      startOsc(tempOsc)
    }

      else if (data[2] == 'off') {
      tempOsc.activeVoice.stop(0)
      tempOsc.activeVoice.disconnect()
     }
   }

   else if (data[1] == 10) {
      startSample(userPad[index][data[8]])
   }

   else if (data[1] == 11){
          userPad[index][data[8]].sound = data[3]
      userPad[index][data[8]].inst = data[4]
      userPad[index][data[8]].insType = data[5]
      userPad[index][data[8]].frequency = data[6]
      userPad[index][data[8]].pathPointer = data[7]
      userPad[index][data[8]].noteIndex = data[9]
    loadDropInstr(index, data[8])
   }

    });
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 
          });

}