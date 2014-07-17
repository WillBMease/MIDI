var metroActive = false
var refreshIntervalId
var metroMsg = []
metroMsg[1] = '2' ;
metroMsg[2] = 100 ;

function metronome() {

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
