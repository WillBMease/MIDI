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

    var oldDate = +new Date()
    var disperse


function dataProcess(index, c){

var pingCheck = []
var pingIncoming = []
var midiCheck = []
var sampleCheck = []
var logRTT = []
var lowRtt = 1000
var quantCt = []
var beatChk = []
var oscChk = []
var newer, older = 0
  
  for (var i = 0 ; i < 8 ; i++)
    logRTT[i] = 0

var singleChk = 0
var fullChk = 0

        user[index] = c 

          // Receive the incoming message and play it calling midi function
              $('#messages').append('<br>Now chatting with ' + user[index].peer);
              loadInstrument(index, firstInst)
    user[index].on('data', function(data){

console.log(data)
newer = new Date()
console.log(newer - older)
older = newer

      if (data[1] == '0' && data[2] == '0') {
        if (pingIncoming[data[0]] != data[0]){
          data[2] = '1' ;
        for (var y = 0 ; y < 3 ; y++)
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
            console.log(data[0])
            console.log('Latency is ' + rttTime + 'ms');
            console.log('')
            recentPing[index] = rttTime
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
         
          if (data[0] % 100 == 0 && data[0] != 0){

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
        // receiveCt++
        // console.log(data[0])
        // data[2] = '3' 
        console.log(data[4] - oldDate)
        oldDate = data[4]
        // if (receiveCt % 100 == 0) {
        // $('#messages').append('<br>' + 'Received packetID: ' + data[3] + ' & Count is: ' + receiveCt);
        //   }
        }

      else if (data[1] == '5' && data[2] == '3') {
       // $('#messages').append('<br>' + 'packetID: ' + packetID + ' & ' + data[3]);
            }

      ///////// End Audio packet testing

      else if (data[1] == 1) {          // midi play
       
         var calculate = true

            if (midiCheck[data[0]] == data[0])
              calculate = false

        if (calculate) {
            triggerMidiDevice(index, data) ;
            midiCheck[data[0]] = data[0]
          }
     }

      else if (data[1] == 2) {          // keyboard play
        var calculate = true
            
            if (sampleCheck[data[0]] == data[0])
              calculate = false

        if (calculate) {
            // triggerSample(index, data) ;
            quantizer(index, data)
            sampleCheck[data[0]] = data[0]
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

      if (data[2] == 'on') {
      tempOsc.sound = data[3]
      tempOsc.inst = data[4]
      tempOsc.insType = data[5]
      tempOsc.frequency = data[6]
      startOsc(tempOsc)
    }

      else if (data[2] == 'off') {
      tempOsc.activeVoice.stop(0)
      tempOsc.activeVoice.disconnect()
     }
   }

   else if (data[1] == 10) {
    if (data[9] != beatChk[data[9]]){
      startSample(index, data[8])
      beatChk[data[9]] = data[9]
    }
   }

   else if (data[1] == 11){

    if (userPad[index][data[8]] == null){
      soundObj = {
      sound: data[3],
      inst: data[4],
      insType: data[5],
      frequency: data[6],
      activeVoice: "",
      audioPointer: "",
      instPointer: "",
      pathPointer: data[7],
      noteIndex: data[9]
    };
      userPad[index][data[8]] = soundObj
    }

    loadDropInstr(index, data[8])
   }

   else if (data[1] == '12'){
      if (quantCt[data[0]] != data[0]){
      quantizer(index, data)
      quantCt[data[0]] = data[0]
    }
   }

   else if (data[1] == '13' && data[2] == '0'){
          data[2] = '1' ;
        for (var y = 0 ; y < 1 ; y++)
        user[index].send(data) ;
   }

   else if (data[1] == '13' && data[2] == '1'){
            endTime = new Date();
            rttTime = (endTime - startTime[data[0]]) ;
            if (rttTime < lowRtt)
              lowRtt = rttTime
            console.log('Latency is ' + rttTime + 'ms');
console.log(data[0])
            if (data[0] == '19')
              console.log('Low RTT is ' + lowRtt)
            // var rttString = rttTime.toString() ;
            // pingCheck.push(data[0])
   }

   else if (data[1] == '15'){
        benchmark[4] = data[2]
        doQuant = true
   }

   else if (data[1] == '16'){          // Synth Messages

    if (oscChk[data[0]] != data[0]){
         
          if (data[5] == '1')
            playSynth(index, data, data[6])
          else if (data[5] == '0')
            stopSynth(index, data)
          
          oscChk[data[0]] = data[0]
      }
   }

   else if (data[1] == '17'){
    if (data[2] == 'type'){
      if (data[3] == '1')
        osc1[index] = data[4]
      else if (data[3] == '2')
        osc2[index] = data[4]
      else if (data[3] == '3')
        osc3[index] = data[4]
    }
    else if (data[2] == 'attack'){
      if (data[3] == '1')
        attack1[index] = data[4]
      else if (data[3] == '2')
        attack2[index] = data[4]
      else if (data[3] == '3')
        attack3[index] = data[4]
    }
    else if (data[2] == 'decay'){
      if (data[3] == '1')
        decay1[index] = data[4]
      else if (data[3] == '2')
        decay2[index] = data[4]
      else if (data[3] == '3')
        decay3[index] = data[4]
    }
    else if (data[2] == 'vol'){
      if (data[3] == '1')
        oscVol1[index] = data[4]
      else if (data[3] == '2')
        oscVol2[index] = data[4]
      else if (data[3] == '3')
        oscVol3[index] = data[4]
    }


   }


    });
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 
          });

}