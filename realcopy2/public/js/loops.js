var crash = 2,
    kick = 4,
    hihat = 6,
    ride = 8,
    snare = 12,
    tom1 = 14,
    tom3 = 15,
    tom2 = 16;

var loop1 = [kick, hihat, kick, hihat, crash, snare, snare]
var rhythm1 = [0, 0, 500, 0, 500, 0, 500]
loopingActive = true
var loopMsg = []
loopMsg[1] = 20

var drumloop = []

for (var i = 0 ; i < 10 ; i++){
	drumloop[i] = []
}

for (var i = 0 ; i < loop1.length ; i++){
  console.log(loop1[i])
	drumloop[i][0] = loop1[i]
	drumloop[i][1] = rhythm1[i]
  drumloop[i][2] = false
}

loadInstrument(6, "jazzdrums")

    $('#loop').click(function(){
      console.log("dfsf")
      if (playingActive){
      playingActive = false
    }
    else{
      playingActive = true
      playLoop(0)

        for (var i = 1 ; i < userLimit ; i++){
    if (user[i] != 0) {
      for (var x = 0 ; x < 3 ; x++)
        user[i].send(loopMsg);
    }
  } 
    }
    })

    $('#kick1').click(function(){

    })

function playLoop(position)
{
	if (playingActive){
	var now = context.currentTime;
	var x = 1;
	var mappedKey
console.log(position)
	if(position < loop1.length) {
    	startTime = now

	var source1 = context.createBufferSource();
  var note = drumloop[position][0];

    source1.buffer = noteNode[6][note];
    source1.connect(bus[0].input);
    source1.start(startTime);

    source1.onended = function() {
    	source1.stop()
    }
 
   var newPosition = position + 1
   setTimeout(function(){
       playLoop(newPosition)
   }, drumloop[newPosition][1])
  } // end if

  else if (loopingActive && position == loop1.length){
  	// delayer += drumloop[position - 1][5]
  	// delayerCt++
  	// var delayTempo = averageTempo / (position - chordCt )
  	// console.log("delay tempo: " + delayTempo)
  	setTimeout(function(){
  		playLoop(0)
  	}, 500)
  }

  else{
  	console.log("done!")
  }
}
	else{
		position = 0
	}
}