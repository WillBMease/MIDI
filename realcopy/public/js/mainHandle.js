
// Legend

// midiMsg[0]
// which user

// midiMsg[1]
// 0 = ping
// 1 = keyboard 
// 2 = MIDI 
// 3 = instrument change
// 4 = Audio test
// 5 = Audio test
// 6 = Metronome
// 7 = Octave Change
// 8 = Effect Change

// midiMsg[2]
// actual data value
//MIDI Note On/Off

// midiMsg[3]
// only for midi
//MIDI note value

// midiMsg[4]
// only for midi
//MIDI Velocity


var midiMsg = [] ;

midiMsg[0] = randID ; // defines which user
midiMsg[1] = null ; // defines what type of message
midiMsg[2] = null ;
midiMsg[3] = null ;
midiMsg[4] = null ;

var octave = 1;
var globalOctave;

//variable used to 
var midiActive = false;
var sampleActive = false;

// initialize web audio api
var context = new (window.AudioContext || window.webkitAudioContext ||  
	window.mozAudioContext || 
    window.oAudioContext || 
    window.msAudioContext)();
if (context) {
  // Web Audio API is available.
  var tuna = new Tuna(context)
} else {
  alert('browser not supported') ;
}

var soundOn ;
var soundOff ;
var isPlaying = false;



$(document).keypress(function(e) { 
if(!sampleActive){
  if (isPlaying) {
  	return; }
  
  isPlaying = true;
	on = e.which;
	return false;
}

else {
	midiMsg[1] = '2' ;
	midiMsg[2] = e.which ;

	triggerSample(0, midiMsg)

for (var i = 1 ; i < userLimit ; i++) {
	if (user[i] != 0) {
		user[i].send(midiMsg);
	}
}

}

});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// SAMPLES
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var octaveMsg = []
octaveMsg[1] = 7


function transpose(noteInput){
	var octaveTrue = false

	// 1
	if(noteInput == 49 && octave < globalOctave){
		octave = octave + 1;
		octaveMsg[2] = octave
		octaveTrue = true
	}
	// ~
	if(noteInput == 96 && octave != 0){
		octave = octave - 1;
		octaveMsg[2] = octave
		octaveTrue = true
	}

	if (octaveTrue) {
		for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0)
			user[i].send(octaveMsg)
		}
	}
}

function keyGlow(cssClass){
	$('.active').removeClass(active);
	$(this).addClass('active');
	$('.button').click(function(){
	})
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// MIDI
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var midi=null;
var inputs=null;
var outputs=null;
var input=null;
var output=null;
var log=null;

function runTest() {
	if (!log)
		log = document.getElementById("log");
	 log.innerText = "Starting up MIDI...\n";
	navigator.requestMIDIAccess().then( success, failure );
}
function h2d(h) {return parseInt(h,16);}

function handleMIDIMessage( ev ) {
	
	
		midiMsg[1] = 1 ;
		midiMsg[2] = ev.data[0].toString(16) ;
		midiMsg[3] = ev.data[1].toString(16) ;
		//console.log('ev raw data : ' + ev.data[2])
		//midiMsg[4] = h2d(ev.data[2]);
		midiMsg[4] = ev.data[2];//.toString(16)  ;
		// log.innerText += 'msg 2 is: ' + midiMsg[2] + '  '
		// log.innerText += 'msg 3 is: ' + midiMsg[3] + '  '
		// log.innerText += 'velocity is: ' + midiMsg[4]

		// console.log('msg 2 is: ' + midiMsg[2])
		// console.log('msg 3 is: ' + midiMsg[3])
		// console.log('msg 4 is: ' + midiMsg[4])
		// console.log('velocity is: ' + midiMsg[4])
		//console.log(ev.data[2])

	console.log('detect midi')

		triggerMidiDevice(0, midiMsg)

	for (var i = 1 ; i < userLimit ; i++ )
	{
		if (user[i] != 0){
			user[i].send(midiMsg);
			console.log("send to " + user[i].peer);
		}
	}

// Plays the drum note through MIDI output (Apple DLS Synth)
	// if (output)
	// 	output.send( ev.data );
}

function success( midiAccess ) {
	 log.innerText += "MIDI ready!\n";
	midi = midiAccess;

	inputs = midi.inputs();
	log.innerText += inputs.length+" inputs:\n";
	for (var i=0;i<inputs.length;i++)
		log.innerText += i + ": " + inputs[i].name + "\n";

	if (inputs.length>0) {
		input = inputs[0];
		input.onmessage = handleMIDIMessage;
		input.addEventListener("midimessage", handleMIDIMessage);
		log.innerText += inputs[0] + "Hooked up first input.\n";
	}

	outputs = midi.outputs();
	log.innerText += outputs.length+" outputs:\n";
	for (var i=0;i<outputs.length;i++)
		log.innerText += i + ": " + outputs[i].name + "\n";

	if (outputs.length) {
		output = outputs[0];
		output.send( [0xb0, 0x00, 0x7f] );	// If the first device is a Novation Launchpad, this will light it up!
	}
}

function failure( error ) {
	alert( "Failed to initialize MIDI - " + ((error.code==1) ? "permission denied" : ("error code " + error.code)) );
}