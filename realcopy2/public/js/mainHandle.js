
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
var oscID = 0

var midiMsg = [] ;
var sampleMsg = [] ;
var oscMsg = []

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

var synthKey = []

var osc1 = []
var osc2 = []
var osc3 = []

for (var i = 0 ; i < userLimit ; i++){
osc1[i] = 'triangle'
osc2[i] = 'sine'
osc3[i] = 'sawtooth'
}

for (var i = 0 ; i < userLimit ; i++){
	synthKey[i] = []
}

var octave = []

for (var i = 0 ; i < userLimit ; i++)
octave[i] = 1;

var globalOctave = 5;

//variable used to 
var midiActive = false;
var sampleActive = true;

var oscChecks = []

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

var oscilloscopes = []

for (var i = 0 ; i < userLimit ; i++){
	ans[i] = context.createAnalyser();
	ansT[i] = context.createAnalyser();
}

// oscilloscopes[0] = new WavyJones(context, 'oscilloscope0');
// oscilloscopes[1] = new WavyJones(context, 'oscilloscope1');

var soundOn ;
var soundOff ;
var isPlaying = false;
var whichType
var keypresses = []

$(document).keydown(function(e) { 

if(!sampleActive){
	oscID++
	oscMsg[0] = oscID
	oscMsg[1] = '16' ;
	oscMsg[2] = null;
	oscMsg[3] = e.which
	oscMsg[4] = null
	oscMsg[5] = '1'
	oscMsg[6] = false
	oscMsg[7] = new Date()

if (synthKey[0][e.which] == null){
	soundObj = {
			isActive: false,
			tailActive: false,
			osc1:"",
			osc2:"",
			osc3:"",
			gain1:"",
			gain2:"",
			gain3:"",
		};
		synthKey[0][e.which] = soundObj
}

if (!synthKey[0][e.which].isActive){

	if (synthKey[0][e.which].tailActive){
		synthKey[0][e.which].osc1.stop()
		synthKey[0][e.which].osc2.stop()
		synthKey[0][e.which].osc3.stop()
		synthKey[0][e.which].gain1.disconnect()
		synthKey[0][e.which].gain2.disconnect()
		synthKey[0][e.which].gain3.disconnect()
		synthKey[0][e.which].tailActive = false
	}

	playSynth(0, oscMsg, false)

	if (recordingActive){
		console.log("osc")
		recording(0, oscMsg)
	}

	for (var i = 1 ; i < userLimit ; i++){
		if (user[i] != 0) {
			for (var x = 0 ; x < 3 ; x++)
				user[i].send(oscMsg);
		}
	}	

oscID++
}

// if (e.which == 32){
// 	navigator.getUserMedia({audio: true})
// } 

}

else if (sampleActive){     // make sure to disable this part
	sampleMsg[0] = sampleID
	sampleMsg[1] = '2' ;
	sampleMsg[2] = e.which ;
	sampleMsg[7] = +new Date()
	// setTimeout(function(){
		triggerSample(0, sampleMsg)
	// }, 25)


for (var i = 1 ; i < userLimit ; i++) {
	if (user[i] != 0) {
		for (var x = 0 ; x < 3 ; x++)
		user[i].send(sampleMsg);
	}
}
	if (recordingActive){
		recording(0, sampleMsg, false)
	}

	sampleID++
}

});


$(document).keyup(function(e){
	oscID++	

if (!sampleActive && e.which != 49 && e.which != 192){
	oscID++
	oscMsg[0] = oscID
	oscMsg[1] = '16' ;
	oscMsg[2] = null
	oscMsg[3] = e.which;
	oscMsg[4] = null
	oscMsg[5] = '0'
	oscMsg[6] = false
	stopSynth(0, oscMsg)

	for (var i = 1 ; i < userLimit ; i++){
		if (user[i] != 0) {
			for (var x = 0 ; x < 3 ; x++)
				user[i].send(oscMsg);
		}
	}
}
// if (e.which == 32){
// 	navigator.getUserMedia({audio: false})
// } 
})

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// SAMPLES
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


function keyGlow(cssClass){
	$('.active').removeClass(active);
	$(this).addClass('active');
	$('.button').click(function(){
	})
}
