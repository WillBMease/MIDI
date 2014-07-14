function audioTest() {
	
// 	var startingTime = new Date()
// 	var audioCt = 0

// while (audioRunning) {

// 	audioCt++
// 	var nowTime = new Date()
// 	var checkTime = nowTime - startingTime

// 		if (checkTime % 100f == 0) {
// 				midiMsg[0] = peer.label
// 				midiMsg[1] = 4
// 				midiMsg[2] = audioCt

// 			for (var i = 0 ; i < userLimit ; i++) {

// 				if (user[i] != 0)
// 				user[i].send(midiMsg)
// 			}

// 		}


// 	}

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