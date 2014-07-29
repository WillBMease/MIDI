var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var firstRun = true

var gainNode = context.createGain()
gainNode.connect(cabinet[i].input)

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

if (!firstRun) {
		for (var i = 0 ; i < 120 ; i++) {
		testing[i].activeVoice.disconnect
		testing[i].activeVoice.clear
		testing[i].full = false
	}
}

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
			testing[i].audioPointer = context.createBufferSource()
			target.append(instrument);
			// console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			console.log(instrumentPath)
			testing[i].audioPointer.src = instrumentPath
			testing[i].audioPointer.type = "audio/ogg"
			// paths[i] += instrumentPath
		}

		// var noteWrap = $('.audioBin' + index + ' li');
		// notesLoad = noteWrap.find('audio');

		console.log(notesLoad[5])

		// noteNode[index][7] = context.createMediaElementSource(notesLoad[7])
		// noteNode[index][7].connect(cabinet[index].input)

		for (var i = 0 ; i <  presetInstrument.notes  ; i++)
		 		noteNode[index][i] = null

	} // end bigger else
firstRun = false
} // end function


function triggerSample(index, key) {
	var notes = [];

	// var noteWrap = $('.audioBin' + index + ' li');

	// notes = noteWrap.find('audio');

	transpose(index, key[2]);
	var check = keyboardMap(key[2]) ;
	console.log(check)

	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);
	 console.log(mappedKey)
	if(check != 200  && check != 49 && check != 96){
		
	// 	if (noteNode[index][mappedKey] == null) {
	// 	noteNode[index][mappedKey] = context.createMediaElementSource(notes[mappedKey])
	// 	noteNode[index][mappedKey].connect(cabinet[index].input)
	// 	console.log(noteNode[index][mappedKey])
	// }

	console.log(testing[mappedKey])
			if (testing[mappedKey].full == false) {
			testing[mappedKey].activeVoice = context.createMediaElementSource(testing[mappedKey].audioPointer)
			testing[mappedKey].activeVoice.connect(cabinet[index].input)
		// console.log(noteNode[index][mappedKey])
	}

	// noteNode[index][7].mediaElement.src = noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey]
	// console.log(noteNode[index][7].mediaElement.src)

	// noteNode[index][7].connect(cabinet[index].input)

	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].pause()
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].currentTime = 0
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].play(0)

	// console.log(noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey])
	console.log(testing[mappedKey])
		testing[mappedKey].audioPointer.pause();
		testing[mappedKey].audioPointer.currentTime = 0
		testing[mappedKey].audioPointer.volume = 0.2
		testing[mappedKey].audioPointer.play(0)

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

			if (noteNode[index][key] == null) {		
		noteNode[index][key] = context.createMediaElementSource(notes[key])
		noteNode[index][key].connect(cabinet[index].input)
	}

		console.log(noteNode[index][key]) 

			notes[key].currentTime = 0;
			console.log('volume: ' + noteVolume(midiData))
			//filter.frequency = controllerArray[0].velocity
			notes[key].volume = noteVolume(midiData)
			notes[key].play(0);
		}
	}
}
