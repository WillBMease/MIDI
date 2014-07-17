var metroActive = false

function metronome() {

	midiMsg[1] = '2' ;
	midiMsg[2] = 100 ;


if (metroActive)
	metroActive = false

else if (!metroActive)
	metroActive = true

	setInterval(function() {
		if (metroActive) {
		user[1].send(midiMsg)
		triggerSample(0, midiMsg)
	}

},1000)


}