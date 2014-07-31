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

// if (!firstRun) {
// 		for (var i = 0 ; i < 120 ; i++) {
// 		testing[i].activeVoice.disconnect
// 		testing[i].activeVoice.clear
// 		testing[i].full = false
// 	}
// }
	// notesLoad.clear
	// notesLoad.empty()

for (var i = 0 ; i < 120 ; i++) {
		paths[i] = 'http://localhost:8888/'
		// notesLoad[i] = null
}



	var instrument = '<audio id="" preload="auto">' + '</audio>';
	var target = $('.audioBin' + index + ' li');
	sampleActive = true;
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	
		for(var i = 1; i <= presetInstrument.notes; i++){
			testing[i].audioPointer = new Audio()

			target.append(instrument);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			// console.log(instrumentPath)
			// testing[i].audioPointer.src = instrumentPath
			// testing[i].audioPointer.type = "audio/ogg"
			paths[i] += instrumentPath
		}

		var noteWrap = $('.audioBin' + index + ' li');
		notesLoad = noteWrap.find('audio');

		// console.log(notesLoad[5])

		// noteNode[index][7] = context.createMediaElementSource(notesLoad[7])
		// noteNode[index][7].connect(cabinet[index].input)

// cabinet[index].disconnect(overdrive[index].input)
// cabinet[0].connect(overdrive[0].input)

// if (firstRun){
// 	noteNode[index][0] = context.createMediaElementSource(notesLoad[29])
// 	noteNode[index][0].connect(cabinet[index].input)
// }

	if (index != 4) {
		for (var i = 0 ; i <  presetInstrument.notes  ; i++) {
			if (!firstRun) {
				// notesLoad[i]
		 		noteNode[index][i] = null
			}
		}
		// for (var i = 0 ; i < presetInstrument.notes ; i++) {
		// 			noteNode[index][i] = context.createMediaElementSource(notesLoad[i])
		// 			noteNode[index][i].connect(cabinet[index].input)
		// }
	}
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
		
// noteNode[index][0].mediaElement.src = paths[mappedKey]
// noteNode[index][0].mediaElement = notesLoad[mappedKey]
// noteNode[index][0].mediaElement.id = mappedKey
// noteNode[index][0].mediaElement.nextSibling.src = paths[mappedKey + 1]
// noteNode[index][0].mediaElement.previousSibling.src = paths[mappedKey - 1]
// noteNode[index][0].mediaElement.nextSibling = notesLoad[mappedKey + 1]
// noteNode[index][0].mediaElement.previousSibling = notesLoad[mappedKey - 1]

// console.log(noteNode[index][0].src)
// console.log(noteNode[index][0])
// console.log(noteNode[index][0].mediaElement.parentNode)
// noteNode[index]
	// 	if (noteNode[index][mappedKey] == null) {
	// 	noteNode[index][0] = context.createMediaElementSource(notes[mappedKey])
	// 	noteNode[index][0].connect(cabinet[index].input)
	// 	console.log(noteNode[index][mappedKey])
	// 	noteNode[index][mappedKey] = 1
	// }

	// console.log(testing[mappedKey].audioPointer)
	// 		if (testing[mappedKey].full == false) {
	// 		testing[mappedKey].activeVoice = context.createMediaElementSource(testing[mappedKey].audioPointer)
	// 		testing[mappedKey].activeVoice.connect(cabinet[index].input)
	// 	// console.log(noteNode[index][mappedKey])
	// }

		if (noteNode[index][mappedKey] == null) {
			console.log(notes[mappedKey])
		noteNode[index][mappedKey] = context.createMediaElementSource(notesLoad[mappedKey])
		noteNode[index][mappedKey].connect(cabinet[index].input)
		console.log(noteNode[index][mappedKey])
	}

	// console.log(testing[mappedKey])
	// 		if (testing[mappedKey].full == false) {
	// 		testing[mappedKey].activeVoice = context.createMediaElementSource(testing[mappedKey].audioPointer)
	// 		testing[mappedKey].activeVoice.connect(cabinet[index].input)
	// 	// console.log(noteNode[index][mappedKey])
	// }

	// noteNode[index][7].mediaElement.src = noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey]
	// console.log(noteNode[index][7].mediaElement.src)

	// noteNode[index][7].connect(cabinet[index].input)

	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].pause()
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].currentTime = 0
	// noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey].play(0)

	// console.log(noteNode[index][7].mediaElement.parentNode.childNodes[mappedKey])
		notesLoad[mappedKey].pause();
		notesLoad[mappedKey].currentTime = 0
		notesLoad[mappedKey].volume = 0.2
		notesLoad[mappedKey].play(0)

		// noteNode[index][0].mediaElement.parentNode.childNodes[mappedKey].pause();
		// noteNode[index][0].mediaElement.parentNode.childNodes[mappedKey].currentTime = 0
		// noteNode[index][0].mediaElement.parentNode.childNodes[mappedKey].volume = 0.2
		// noteNode[index][0].mediaElement.parentNode.childNodes[mappedKey].play(0)

		// noteNode[index][0].mediaElement.pause();
		// noteNode[index][0].mediaElement.currentTime = 0
		// noteNode[index][0].mediaElement.volume = 0.2
		// noteNode[index][0].mediaElement.play(0)

		// notes[mappedKey].pause();
		// notes[mappedKey].currentTime = 0
		// notes[mappedKey].volume = 0.2
		// notes[mappedKey].play(0)
		// notes[mappedKey].clear
		// noteNode[mappedKey] = null
		// testing[mappedKey].audioPointer.pause();
		// testing[mappedKey].audioPointer.currentTime = 0
		// testing[mappedKey].audioPointer.volume = 0.2
		// testing[mappedKey].audioPointer.play(0)

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
