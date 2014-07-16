
// Legend

// midiMsg[0]
// which user

// midiMsg[1]
// 0 = ping
// 1 = keyboard 
// 2 = MIDI 
// 3 = instrument change
// 4 = Audio test

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


var chorus = new tuna.Chorus({
                 rate: 1.5,         //0.01 to 8+
                 feedback: 0.2,     //0 to 1+
                 delay: 0.5,     //0 to 1
                 bypass: 0          //the value 1 starts the effect as bypassed, 0 or 1
             });

var delay = new tuna.Delay({
                feedback: 0.8,    //0 to 1+
                delayTime: 500,    //how many milliseconds should the wet signal be delayed? 
                wetLevel: 0.25,    //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 10000,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: 0
            });

var overdrive = new tuna.Overdrive({
                    outputGain: 0.4,         //0 to 1+
                    drive: 0.1,              //0 to 1
                    curveAmount: 0.3,          //0 to 1
                    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
                    bypass: 1
                });

var phaser = new tuna.Phaser({
                 rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
                 depth: 0.3,                    //0 to 1
                 feedback: 0.2,                 //0 to 1+
                 stereoPhase: 30,               //0 to 180
                 baseModulationFrequency: 700,  //500 to 1500
                 bypass: 0
             });

var cabinet = new tuna.Cabinet({
                  makeupGain: 15,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: 0
              });

var wahwah = new tuna.WahWah({
                 automode: true,                //true/false
                 baseFrequency: 0.5,            //0 to 1
                 excursionOctaves: 4,           //1 to 6
                 sweep: 0.3,                    //0 to 1
                 resonance: 80,                 //1 to 100
                 sensitivity: 0.8,              //-1 to 1
                 bypass: 0
             });

var tremolo = new tuna.Tremolo({
                  intensity: 0.3,    //0 to 1
                  rate: 0.1,         //0.001 to 8
                  stereoPhase: 0,    //0 to 180
                  bypass: 0
              });

// basic filter
var filter = new tuna.Filter({
                 frequency: 20,         //20 to 22050
                 Q: 1,                  //0.001 to 100
                 gain: 0,               //-40 to 40
                 bypass: 1,             //0 to 1+
                 filterType: 0,         //0 to 7, corresponds to the filter types in the native filter node: lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass in that order
                 bypass: 0
             });

var convolver = new tuna.Convolver({
                    highCut: 22050,                         //20 to 22050
                    lowCut: 20,                             //20 to 22050
                    dryLevel: 1,                            //0 to 1+
                    wetLevel: 1,                            //0 to 1+
                    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: 0
                });

var compressor = new tuna.Compressor({
                     threshold: 0.5,    //-100 to 0
                     makeupGain: 1,     //0 and up
                     attack: 1,         //0 to 1000
                     release: 0,        //0 to 3000
                     ratio: 4,          //1 to 20
                     knee: 5,           //0 to 40
                     automakeup: true,  //true/false
                     bypass: 0
                 });


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

function transpose(noteInput){
	// 1
	if(noteInput == 49 && octave < globalOctave){
		octave = octave + 1;
	}
	// ~
	if(noteInput == 96 && octave != 0){
		octave = octave - 1;
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
		log.innerText += 'msg 2 is: ' + midiMsg[2] + '  '
		log.innerText += 'msg 3 is: ' + midiMsg[3] + '  '
		log.innerText += 'velocity is: ' + midiMsg[4]

		console.log('msg 2 is: ' + midiMsg[2])
		console.log('msg 3 is: ' + midiMsg[3])
		console.log('velocity is: ' + midiMsg[4])
		//console.log(ev.data[2])

console.log('detect midi')

	triggerMidiDevice(0, midiMsg)

for (var i = 1 ; i < userLimit ; i++ )
{
		if (user[i] != 0)
		{
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