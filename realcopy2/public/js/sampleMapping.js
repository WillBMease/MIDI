var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var bufferLoader;
var sampleRate = 44100
var firstInst = 'gPiano'
var firstRun = true
var recordedNotes = []
var recordedCt = 0
var scheduler = 0
var schedDiff = 0
var chordCheck = []
var delayer = 0
var delayerCt = 0
var averageTempo = 0
var chordCt = 0
var thisChord = 1
var recordingActive = false
var loopingActive = false
var playingActive = false
var chordActive = false
var chordFinished = false

	var tempo = 60;
	var releaseTime = 1;
	var secondsPerBeat = 60.0 / tempo;
	var notePos = 0, startTime=0, osc = null;

		for (i = 0; i <= 120; i++) {

			soundObj = {
			sound:"",
			inst:"",
			insType:"",
			frequency: 0,
			activeVoice:"",
			audioPointer:"",
			full:false
		};

			testing[i] = soundObj;
		
		}

for (var i = 0 ; i < userLimit + 1 ; i++) {
	noteNode[i] = []
}

// Initialize your own instrument on startup
loadInstrument(0, firstInst)


function loadInstrument(index, instr){
	$.getJSON("js/instruments.json", function(json){
        generateNotes(index, json[instr])
	});
}

function generateNotes(index, presetInstrument){
	$(window).unbind();

if (paths[0]){
	paths = []
}

	sampleActive = true;
	globalOctave = presetInstrument.octaveNum;
	
		for(var i = 1; i <= presetInstrument.notes; i++){
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			paths.push(instrumentPath)
}

    var finishedLoading = function(bufferList) {
      noteNode[index] = bufferList
    }
    
    // myArrayBuffer = context.createBuffer(2,sampleRate*2,sampleRate)

    bufferLoader = new BufferLoader(
        context,
        paths,
        finishedLoading
    );
 
    bufferLoader.load()



} // end function


function triggerSample(index, key) {

	console.log(key)
	transpose(index, key[2]);
	var check = keyboardMap(key[2]) ;

	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);

if(check != 200  && check != 49 && check != 192){
	var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][mappedKey];
   
// source1.playbackRate.value = 5

    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }
 
 }

}


function triggerMidiDevice(index, midiData){

	if (recordingActive){
		recording(index, midiData, true)
	}

	if(setController){
		setControls(midiData);		
	}
	else{
		for(var i = 0;i<controllerArray.length;i++){
			if(midiData[2] == controllerArray[i].type && midiData[3] == controllerArray[i].ID){
				controllerArray[i].velocity = midiData[4];
				effectControllers(controllerArray[i], midiData)
				log.innerText = ('controller: ' + controllerArray[i].controllerNum)
				return;
			}
		}
	 	key = masterConversion(midiData);
	 var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][key];
    
    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }

}
}

    $('#playRecording').click(function(){
    	if (playingActive){
   	  playingActive = false
   	}
   	else{
   		playingActive = true
      playRecord(0)
   	}
    })

function playRecord(position)
{
	if (playingActive){
	var now = context.currentTime;
	var x = 1;
	var mappedKey

	if(position < recordedNotes.length) {
    	startTime = now + recordedNotes[position][5]
    	console.log(recordedNotes[position][5])

    	if (recordedNotes[position][0])
    		mappedKey = masterConversion(recordedNotes[position]);

    	else{
	transpose(0, recordedNotes[position][1]);
	var check = keyboardMap(recordedNotes[position][1]) ;

	 mappedKey = keyboardMap(recordedNotes[position][1]) + (octave[0]*12);
	}

if(check != 200  && check != 49 && check != 192){
	var source1 = context.createBufferSource();
    source1.buffer = noteNode[0][mappedKey];
   
// source1.playbackRate.value = 5
// source1.gain.value = .1

    source1.connect(bus[0].input);
    source1.start(startTime);

    source1.onended = function() {
    	source1.stop()
    }
 
   }
   var newPosition = position + 1
   	   playRecord(newPosition)
  } // end if

  else if (loopingActive && position == recordedNotes.length){
  	delayer += recordedNotes[position - 1][5]
  	delayerCt++
  	var delayTempo = averageTempo / (position - chordCt )
  	console.log("delay tempo: " + delayTempo)
  	setTimeout(function(){
  		playRecord(0)
  	}, recordedNotes[position-1][5]*1000 + delayTempo)
  }

  else{
  	console.log("done!")
  }
}
	else{
		position = 0
	}

}

function startRecord(){
	if (recordingActive){
		recordingActive = false
		recordedCt = 0
		chordMult = 0
	}
	else {
	recordingActive = true
	}
}

function startLooping(){
	if (loopingActive){
		loopingActive = false
	}
	else {
		loopingActive = true
	}
}


function recording(index, data, midi){
if (recordedCt == 0){
	schedDiff = data[7]
	chordCheck[0] = data[7]
	chordCheck[1] = data[7]
}

	var temp = data[7] - chordCheck[0]
	chordCheck[0] = chordCheck[1]
	chordCheck[1] = data[7]

	if (temp < 50){
		chordCt++
		thisChord++
		chordActive = true
		chordFinished = false
	}
	else if (!chordFinished){
		chordFinished = true
	}
	else{
		chordActive = false
	}

// if (data[7])
	
	recordedNotes[recordedCt] = []

if (midi){
	recordedNotes[recordedCt][0] = midi
	recordedNotes[recordedCt][2] = data[2]
	recordedNotes[recordedCt][3] = data[3]
	recordedNotes[recordedCt][4] = data[4]
	}
else{
	recordedNotes[recordedCt] = []
	recordedNotes[recordedCt][0] = midi
	recordedNotes[recordedCt][1] = data[2]
	}
	if (!chordActive){
		averageTempo += (data[7] - schedDiff)
	}
	// else if (chordFinished){
	// 	for (var i = 2 ; i <= thisChord ; i++){
	// 		var y = recordedCt-i
	// 		recordedNotes[y][5] = scheduler
	// 	}
	// 	thisChord = 1
	// }
	scheduler += (data[7] - schedDiff) / 1000
	recordedNotes[recordedCt][5] = scheduler
	schedDiff = data[7]

		recordedCt++
}


