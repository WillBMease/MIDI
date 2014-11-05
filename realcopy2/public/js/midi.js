//            _     _ _ 
//           (_)   | (_)
//  _ __ ___  _  __| |_ 
// | '_ ` _ \| |/ _` | |
// | | | | | | | (_| | |
// |_| |_| |_|_|\__,_|_|
                      

var midi=null;
var inputs=null;
var outputs=null;
var input=null;
var output=null;
var noteUpArray = [];
var noteDownArray = [];
var buttonPress = 1;
var downPress = 0;
var upPress = 0;
var downKeyArray = [];
var mappingActive = false


function h2d(h) {return parseInt(h,16);}

function handleMIDIMessage(ev) 
{
	console.log(ev.data[0])
	console.log(ev.data[1])
	console.log(ev.data[2])

if (mappingActive) {

	var pressArray = [];
	pressArray[0] = ev.data[0]
	pressArray[1] = ev.data[1] 
	console.log(pressArray)

			console.log(ev.data[0])
		console.log(ev.data[1])
		console.log(ev.data[2])
	if (buttonPress <= numOfKey[0] * 2)
	{
		console.log(ev.data[0])
		console.log(ev.data[1])
		console.log(ev.data[2])


		if (buttonPress % 2 == 0)
		{
			noteUpArray[upPress] = ev.data
			console.log(noteUpArray)
				$("#btn" + upPress).css({
				backgroundColor:"#92F5FD"
				});

			buttonPress++;
			upPress++;
		}
		else {	
			noteDownArray[downPress] = pressArray
			console.log(noteDownArray)
			buttonPress++;
			downPress++;
		}	

		if (buttonPress > numOfKey[0] * 2) {
			
			setTimeout(function(){
			  for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			  }
			}, 300)

			setTimeout(function(){
			  for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#92F5FD"
				});
			  }
			}, 600)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			}
			}, 900)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#92F5FD"
				});
			}
			}, 1200)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			}
			}, 1500)	
	}
}

	else
	{
		console.log(ev.data[2])
		if (ev.data[2] > 0)
		{	
			for(var x = 0; x < noteDownArray.length; x++){

	      	if (noteDownArray[x][0] == pressArray[0] && noteDownArray[x][1] == pressArray[1])
	      	{

	      		$("#btn" + x).css({
				backgroundColor:"#92F5FD"
				});
	      				var vel = ev.data[2]

						thisID = $("#btn" + x).attr("id");
						arNum = parseInt(thisID.substr(3,3))
						sampleID = userPad[0][arNum]
		

		beatMsg[3] = sampleID.sound
		beatMsg[4] = sampleID.inst
		beatMsg[5] = sampleID.insType
		beatMsg[6] = sampleID.frequency

		if (sampleID.inst == "square synth") {
		beatMsg[1] = 9
		beatMsg[2] = 'on'
				for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
			if (sampleID != 0) {
			startOsc(sampleID, vel);

	}
}
				else if (sampleID.inst == "jazzdrums" || sampleID.inst == "numb") {

if (ev.data[2] != 0 && ev.data[0] == 153){

		beatMsg[1] = 10
		beatMsg[7] = sampleID.pathPointer
		beatMsg[8] = arNum
		beatMsg[9] = beatID
		startSample(0, arNum)
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
					for (var x = 0 ; x < 3 ; x++)
					user[i].send(beatMsg)
			   }
			  }
			 }	
			 beatID++
			}
	       }
	      }
      	 }

    if (ev.data[2] == 0 || ev.data[0] == 137) {	
		for(var x = 0; x < noteDownArray.length; x++) {

	       	if (noteUpArray[x][0] == pressArray[0] && noteUpArray[x][1] == pressArray[1])
	      	{
		  		$("#btn" + x).css({
				backgroundColor:"#FFFFFF"
				});

	      		arNum = x;
				soundOff = userPad[0][arNum]
				console.log("mupID = " + soundOff)
		if (soundOff.inst == "square synth"){	
				beatMsg[2] = 'off'

				if (soundOff != 0){
				endOsc(soundOff);
				for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
				}
			}
	      	}
	      }
      	}   
	}	

} // mappingActive


var playActualMIDI = true

	if (ev.data[0] == 153 || ev.data[0] == 143){
		console.log('look in here!')
		// playActualMIDI = false
	}

if (playActualMIDI){

	if (!sampleActive){
		oscID++
		oscMsg[0] = oscID
		oscMsg[1] = '16'
		oscMsg[2] = ev.data[0].toString(16)
		oscMsg[3] = ev.data[1].toString(16)
		oscMsg[4] = ev.data[2]
		oscMsg[6] = true

if (synthKey[0][oscMsg[3]] == null){
	soundObj = {
			isActive: false,
			tailActive: false,
			osc1:"",
			osc2:"",
			osc3:"",
			gain:"",
			decay:"",
		};
		synthKey[0][oscMsg[3]] = soundObj
}

if (ev.data[2] != 0 && ev.data[2] != 64){
		oscMsg[5] = '1'
		playSynth(0, oscMsg, true)
}

else if (ev.data[2] == 0 || ev.data[2] == 64){
	stopSynth(0, oscMsg)
	oscMsg[5] = '0'
}
	for (var i = 1 ; i < userLimit ; i++){
		if (user[i] != 0) {
			for (var x = 0 ; x < 3 ; x++)
				user[i].send(oscMsg);
		}
	}

}

	else if (sampleActive && ev.data[2] != 0){
		midiMsg[0] = midiID
		midiMsg[1] = 1 ;
		midiMsg[2] = ev.data[0].toString(16) ;
		midiMsg[3] = ev.data[1].toString(16) ;
		midiMsg[4] = ev.data[2];
		midiMsg[7] = +new Date()

		if (recordingActive){
		recording(0, midiMsg, true)
	}
		triggerMidiDevice(0, midiMsg)

	for (var i = 1 ; i < userLimit ; i++ )
	{
		if (user[i] != 0){
			for (var x = 0 ; x < 3 ; x++) {
			user[i].send(midiMsg);
			console.log("send to " + user[i].peer);
		} 
		}
	}

	midiID++
	}
  }
}



function runTest() {
	
	navigator.requestMIDIAccess().then( success, failure );
}



function success (access)
{
	midi = access;
	console.log("webmidi success")
	inputs = midi.inputs();
	console.log(inputs)
	console.log(midi)
	if (inputs.length>0)
	 {
	 	console.log(inputs[0].name)
		input = inputs[0];
		input.onmessage = handleMIDIMessage;
		input.addEventListener("midimessage", handleMIDIMessage);
		console.log("input devices present")
	}
}

function failure( error ) {
	alert( "Failed to initialize MIDI - " + ((error.code==1) ? "permission denied" : ("error code " + error.code)) );
}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// START MIDI

runTest();
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



$('#testMap').click(function(){
	if (!mappingActive){
		mappingActive = true
	}

	else if (mappingActive){
	noteUpArray = [];
	noteDownArray = [];
 	buttonPress = 1;
	downPress = 0;
	upPress = 0;
	}
})
