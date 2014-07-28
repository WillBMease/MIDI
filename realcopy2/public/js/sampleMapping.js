var noteNode = {}
var notesLoad = [];
var paths = []

for (var i = 0 ; i < userLimit ; i++) {
	//notesLoad[i] = null
	//noteNode[i] = context.createMediaElementSource(notesLoad[i])
	noteNode[i] = []
	// noteNode[i].connect(cabinet[i].input)
	// notesLoad[i] = new Audio()
}


var firstInst = 'gPiano'

/// you are 0

// Initialize your own instrument on startup
loadInstrument(0, firstInst)

function loadInstrument(index, instr){
	$.getJSON("js/instruments.json", function(json){
        generateNotes(index, json[instr])
	});
}

function generateNotes(index, presetInstrument){
	$(window).unbind();



for (var i = 0 ; i < 120 ; i++) {
		// paths[i] = 'http://localhost:8888/'
		notesLoad[i] = null
}

	var instrument = '<audio id="" preload="auto">' + '</audio>';
	var target = $('.audioBin' + index + ' li');
	sampleActive = true;
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	
	if (presetInstrument.name == "metronome" || index == 4) {
		for(var i = 1 ; i < 18 ; i++) {
			target.append(instrument);
			// console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
		}
	}

	else{
		for(var i = 1; i <= presetInstrument.notes; i++){
			target.append(instrument);
			// console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			// paths[i] += instrumentPath
		}

		var noteWrap = $('.audioBin' + index + ' li');
		notesLoad = noteWrap.find('audio');

		noteNode[index][7] = context.createMediaElementSource(notesLoad[7])
		noteNode[index][7].connect(cabinet[index].input)

		for (var i = 0 ; i <  presetInstrument.notes  ; i++)
		 		noteNode[index][i] = null

	} // end bigger else

} // end function


function triggerSample(index, key) {
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');

	notes = noteWrap.find('audio');

	transpose(index, key[2]);
	var check = keyboardMap(key[2]) ;
	console.log(check)

	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);
	 console.log(mappedKey)
	if(check != 200  && check != 49 && check != 96){
		
		if (noteNode[index][mappedKey] == null) {
		noteNode[index][mappedKey] = context.createMediaElementSource(notes[mappedKey])
		noteNode[index][mappedKey].connect(cabinet[index].input)
		console.log(noteNode[index][mappedKey])
	}

	// noteNode[index][7].mediaElement.src = noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey]
	// console.log(noteNode[index][7].mediaElement.src)

	// noteNode[index][7].connect(cabinet[index].input)

	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].pause()
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].currentTime = 0
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].play(0)

	// console.log(noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey])
	console.log(notes[mappedKey])
		notes[mappedKey].pause();
		notes[mappedKey].currentTime = 0
		notes[mappedKey].volume = 0.2
		notes[mappedKey].play(0)

	}
}

function triggerMidiDevice(index, midiData){
	var notes = [];
	var noteWrap = $('.audioBin' + index + ' li');
	if(setController){
		setControls(midiData);		
	}
	else{
		for(var i = 0;i<controllerArray.length;i++){
			if(midiData[2] == controllerArray[i].type && midiData[3] == controllerArray[i].ID){
				controllerArray[i].velocity = midiData[4];
				// console.log('surface controller ' + controllerArray[i].controllerNum + ' detected! velocity is: ' + midiData[4])
				// console.log(controllerArray[i].parameter)
				effectControllers(controllerArray[i], midiData)
				log.innerText = ('controller: ' + controllerArray[i].controllerNum)
				return;
			}
		}
		notes = noteWrap.find('audio');
		key = masterConversion(midiData);
		if(key != 200 && midiData[4] != 0){

			notes[key].currentTime = 0;
			console.log('volume: ' + noteVolume(midiData))
			//filter.frequency = controllerArray[0].velocity
			notes[key].volume = noteVolume(midiData)
			notes[key].play(0);
		}
	}
}
