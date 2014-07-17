var metroActive = false

function metronome() {

	midiMsg[1] = '2' ;
	midiMsg[2] = 100 ;

if (!metroActive) {
	metroActive = true
var refreshIntervalId = setInterval(playMetronome, 1000);
}

else if (metroActive) {
	metroActive = false
	clearInterval(refreshIntervalId)
}




}

function playMetronome() {
		user[1].send(midiMsg)
		triggerSample(0, midiMsg)
}
