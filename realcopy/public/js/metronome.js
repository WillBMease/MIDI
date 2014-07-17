var metroActive = false

function metronome() {

	midiMsg[1] = '2' ;
	midiMsg[2] = 100 ;


if (metroActive)
	metroActive = false
else if (!metroActive) {
setInterval(function() {
	user[1].send(midiMsg)
	triggerSample(0, midiMsg)
},1000)
metroActive = true
}

}