var metroActive = false
var refreshMetronome
var metroMsg = []
var kick = 4
var snare = 12
var hihat = 0
var ride = 8
var crash = 2
var hiTom = 14
var medTom = 16
var lowTom = 15 
var beatCt = 0
var bpm = 350

metroMsg[1] = '6' ;
metroMsg[2] = 0
metroMsg[3] = bpm ;

//metroMsg[]

loadInstrument(4, 'metronome')

function metronome() {

if (!metroActive) {
	metroActive = true
refreshMetronome = setInterval(playDrums, bpm);
}

else if (metroActive) {
	metroActive = false
	clearInterval(refreshMetronome)
}

}

function playDrums() {
			// triggerSample(0, metroMsg)
		var notes = [];


	var noteWrap = $('.audioBin' + 4 + ' li');

	notes = noteWrap.find('audio');

	console.log(noteWrap)

	if (beatCt % 4 == 0) {
		notes[ride].pause();
		notes[ride].currentTime = 0
		notes[ride].volume = 0.1
		notes[ride].play(0)
}

	if ( (beatCt) % 2 == 0) {
		notes[snare].pause();
		notes[snare].currentTime = 0
		notes[snare].volume = 0.1
		notes[snare].play(0)
	}

		notes[kick].pause();
		notes[kick].currentTime = 0
		notes[kick].volume = 0.1
		notes[kick].play(0)

		beatCt++
}

function playMetronome() {
		// triggerSample(0, metroMsg)
		var notes = [];


	var noteWrap = $('.audioBin' + 4 + ' li');

	notes = noteWrap.find('audio');

	console.log(noteWrap)

		notes[3].pause();
		notes[3].currentTime = 0
		notes[3].volume = 0.1
		notes[3].play(0)
}

function startMetronome() {
	for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0) {
			user[i].send(metroMsg)
			console.log('sent metro start to ' + user[i].peer)
		}
	}
		metronome()
}

// function incomingMetro() {

// }

function toggleBPM() {
	if (bpm == 350)
		bpm += 100
	else if (bpm == 450)
		bpm += 100
	else if (bpm == 550)
		bpm = 350

	metroMsg[2] = 1
	metroMsg[3] = bpm

	clearInterval(refreshMetronome)
	metroActive = false
	startMetronome()
}
