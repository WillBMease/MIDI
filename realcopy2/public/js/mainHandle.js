
// Legend

// midiMsg[0]
// Message ID for processing first to arrive

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
// 9 = Beat Map

// midiMsg[2]
// actual data value
//MIDI Note On/Off

// midiMsg[3]
// only for midi
//MIDI note value

// midiMsg[4]
// only for midi
//MIDI Velocity

var midiID = 0
var sampleID = 0

var midiMsg = [] ;
var sampleMsg = [] ;

midiMsg[0] = midiID ; // defines which message
midiMsg[1] = null ; // defines what type of message
midiMsg[2] = null ;
midiMsg[3] = null ;
midiMsg[4] = null ;

sampleMsg[0] = sampleID ;
sampleMsg[1] = null ;
sampleMsg[2] = null ;
sampleMsg[3] = null ;
sampleMsg[4] = null ;


var octave = []

for (var i = 0 ; i < userLimit ; i++)
octave[i] = 1;

var globalOctave;

//variable used to 
var midiActive = false;
var sampleActive = false;

var oscChecks = []

// var	canvasContext = document.getElementById( "meter" ).getContext("2d");

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

var ans = []
var ansT = []

for (var i = 0 ; i < userLimit ; i++){
	ans[i] = context.createAnalyser();
	ansT[i] = context.createAnalyser();
}

var soundOn ;
var soundOff ;
var isPlaying = false;
var whichType
var keypresses = []


// $(document).keydown(function(e){
// 	keypresses[e.which] = true
// 	if()
// }).keyup(function(e){

// })


$(document).keydown(function(e) { 
if(!sampleActive){

isPlaying = false

for (var i = 0 ; i < oscChecks.length ; i++){
	if (oscChecks[i] == e.which)
		isPlaying = true
}

	sampleMsg[0] = sampleID
	sampleMsg[1] = '2' ;
	sampleMsg[2] = e.which;

keypresses[e.which] = true

  if (isPlaying) {
  	return; }
else{	
whichType = 'synth'
	oscChecks.push(e.which);
	playSynth(0, 0, sampleMsg)
	return false
}
}

else if (sampleActive){     // make sure to disable this part
	sampleMsg[0] = sampleID
	sampleMsg[1] = '2' ;
	sampleMsg[2] = e.which ;
whichType = 'sample'
	triggerSample(0, sampleMsg, whichType)

for (var i = 1 ; i < userLimit ; i++) {
	if (user[i] != 0) {
		for (var x = 0 ; x < 3 ; x++) {
		user[i].send(sampleMsg);
		}
	}
}
	sampleID++
}

// else if ()

});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// SAMPLES
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var octaveMsg = []
octaveMsg[1] = 7


function transpose(index, noteInput){

console.log(noteInput)
	// 1
	if(noteInput == 49 && octave[index] < globalOctave){
		octave[index] = octave[index] + 1;
		octaveMsg[2] = octave[index]
	}
	// ~
	if(noteInput == 192 && octave[index] != 0){
		octave[index] = octave[index] - 1;
		octaveMsg[2] = octave[index]
	}

}

function keyGlow(cssClass){
	$('.active').removeClass(active);
	$(this).addClass('active');
	$('.button').click(function(){
	})
}
