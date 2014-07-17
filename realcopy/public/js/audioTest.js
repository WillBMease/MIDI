var audioMsg = []
var audioActive = false
var packetID = 1

	audioMsg[0] = peer.label
	audioMsg[1] = 5
	audioMsg[2] = 2

	for (var x = 4 ; x < 32 ; x++) {
		audioMsg[x] = x
	}


function audioTest() {


if (audioActive) {
	audioActive = false
}
else if (!audioActive) {
	audioActive = true

	setInterval(function() {
	audioMsg[3] = packetID
	
	for (var y = 1 ; y < userLimit ; y++) {
	
	if (user[y] != 0) {
	user[y].send(audioMsg)
		}
	}
	packetID++ }, 100)

	audioActive = true

}

}
