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
var bpm = 500
var section = true

// kick,kick,kick,pause
var beat1 = [4,4,12,'x']
var beat2 = [4,12,4,12]
var beat3 = [12,12,12,12]
var beatKids1 = [36,38,40,43,45,47,45,43,40,'x',38,'x']
var beatKids2 = [36,38,40,38,36,38,36,33,36,'x','x','x']

metroMsg[1] = '6' ;
metroMsg[2] = 0
metroMsg[3] = bpm ;

//metroMsg[]

// loadInstrument(4, 'gPiano')
// loadInstrument(4, 'metronome')

// console.log(beatKids[0])

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
		var loop = [];
		var beat ;
if (section)
	beat = beatKids1[beatCt]
else
	beat = beatKids2[beatCt]
// if (section)
	// beat = beat1[beatCt]
// else
	// beat = beat2[beatCt]


if (beat != 'x') {

	var noteWrap = $('.audioBin' + 4 + ' li');

	loop = noteWrap.find('audio');

	console.log(noteWrap)

	// if ( beatCt % 4 == 0 || beatCt == 1) {
	// 	loop[beatKids[0]].pause();
	// 	loop[beatKids[0]].currentTime = 0
	// 	loop[beatKids[0]].volume = 0.8
	// 	loop[beatKids[0]].play(0)
	// }

	// if ( (beatCt - 1) % 4 == 0 || beatCt == 2) {
	// 	loop[beatKids[1]].pause();
	// 	loop[beatKids[1]].currentTime = 0
	// 	loop[beatKids[1]].volume = 0.8
	// 	loop[beatKids[1]].play(0)
	// }
	
	// if ( (beatCt - 2) % 4 == 0 || beatCt == 3) {
	// 	loop[beatKids[2]].pause();
	// 	loop[beatKids[2]].currentTime = 0
	// 	loop[beatKids[2]].volume = 0.8
	// 	loop[beatKids[2]].play(0)
	// }
	//console.log(loop[beatKids[beatCt]])
	console.log(loop[beat])
		loop[beat].pause();
		loop[beat].currentTime = 0
		loop[beat].volume = 0.8
		loop[beat].play(0)

	// if ( (beatCt - 3) % 4 == 0 || beatCt == 4) {
	// 	if (beat1[4] == '/')
	// 	loop[beat1[3]].pause();
	// 	loop[beat1[3]].currentTime = 0
	// 	loop[beat1[3]].volume = 0.1
	// 	loop[beat1[3]].play(0)
	// }
}
console.log(beatCt)
		beatCt++

		if (beatCt > 11) {
			beatCt = 0
			if (section)
				section = false
			else
				section = true
		}
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
