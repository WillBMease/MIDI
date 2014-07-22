var metroActive = false
var refreshMetronome
var metroMsg = []
metroMsg[1] = '6' ;
metroMsg[2] = 100 ;
var setDrum 
var beatCt = 0
var bpm = 350

//metroMsg[]

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

	if (beatCt % 4 == 0)
		setDrum = 5
	else if (beatCt % 2 == 0)
		setDrum = 10
	else
		setDrum = 3

		notes[setDrum].pause();
		notes[setDrum].currentTime = 0
		notes[setDrum].volume = 0.1
		notes[setDrum].play(0)

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

function toggleBPM() {
	if (bpm == 350)
		bpm += 100
	else if (bpm == 450)
		bpm += 100
	else if (bpm == 550)
		bpm = 350

	metroMsg[2] = bpm

	clearInterval(refreshMetronome)
	metroActive = false
	startMetronome()
}
