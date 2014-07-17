var metroActive = false
var refreshIntervalId

function metronome() {

	midiMsg[1] = '2' ;
	midiMsg[2] = 100 ;

if (!metroActive) {
	metroActive = true
refreshIntervalId = setInterval(playMetronome, 1000);
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
