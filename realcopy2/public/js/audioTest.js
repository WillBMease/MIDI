var audioMsg = []
var audioActive = false
var packetID = 1
var packetCt = 0

	audioMsg[0] = packetCt
	audioMsg[1] = 5
	audioMsg[2] = 2

	for (var x = 5 ; x < 32 ; x++) {
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
	audioMsg[4] = +new Date();
	
	for (var y = 1 ; y < userLimit ; y++) {
	
	if (user[y] != 0) {
	packetCt++
	audioMsg[0] = packetCt
	user[y].send(audioMsg)
		}
	}
	packetID++ }, 2.6)

	audioActive = true

}

}
