var metroActive = false
var refreshIntervalId
var metroMsg = []
metroMsg[1] = '6' ;
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
		triggerSample(0, metroMsg)
}

function startMetronome() {
	for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0)
			user[i].send(metroMsg)
	}

}
