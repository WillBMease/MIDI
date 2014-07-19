var metroActive = false
var refreshMetronome
var metroMsg = []
metroMsg[1] = '6' ;
metroMsg[2] = 100 ;

function metronome() {

if (!metroActive) {
	metroActive = true
refreshMetronome = setInterval(playMetronome, 1000);
}

else if (metroActive) {
	metroActive = false
	clearInterval(refreshMetronome)
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
		if (user[i] != 0)
			user[i].send(metroMsg)
	}
		metronome()
}
