function audioTest() {

for (var x = 3 ; x < 32 ; x++)
{
	midiMsg[x] = x
}

for (var i = 1 ; i < 501 ; i++) {
				midiMsg[0] = peer.label
				midiMsg[1] = 4
				midiMsg[2] = i
	
	for (var y = 1 ; y < userLimit ; y++) {
	if (user[y] != 0)
	user[y].send(midiMsg)
	}

}

}