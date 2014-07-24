var noteNode = [];
var tempNode = []
		var notesLoad = [];
		var paths = []

for (var i = 0 ; i < 120 ; i++) {
	//notesLoad[i] = null
	//noteNode[i] = context.createMediaElementSource(notesLoad[i])
	noteNode[i] = null
	// noteNode[i].connect(cabinet[i].input)
	tempNode[i] = null
}


var firstInst = 'gPiano'

/// you are 0
for (var i = 0 ; i < userLimit ; i++) {

		cabinet[i].connect(overdrive[i].input)
		overdrive[i].connect(compressor[i].input)
		compressor[i].connect(tremolo[i].input)
		tremolo[i].connect(chorus[i].input)
		chorus[i].connect(phaser[i].input)
		phaser[i].connect(reverb[i].input)
		reverb[i].connect(delay[i].input)
		delay[i].connect(filter[i].input)
		filter[i].connect(wahwah[i].input)

		wahwah[i].connect(context.destination);
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

for (var i = 0 ; i < 120 ; i++) {
		paths[i] = 'http://localhost:8888/'
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
			paths[i] += instrumentPath
		}
			// if (noteNode[3] != null) {
			// 	//console.log('before: ' + noteNode[i])
			// 	notesLoad.remove()
			// 	//notesLoad[i].clear
			// 	//notesLoad[i].disconnect
			// 	// noteNode.disconnect()
			// 	// noteNode[i].remove()
			// 	//console.log('after: ' + noteNode[i])
			// }

// console.log(noteNode)

// wahwah[index].disconnect()


// if (noteNode[3] != null) {
// 		for (var i = 0 ; i < presetInstrument.notes ; i++) {
// // 			// 	//console.log('before: ' + noteNode[i])
// 				notesLoad[i].remove()
// 				// notesLoad[i].disconnect(noteNode[i])
// // 				//noteNode[i].pause()
// // 				//cabinet[index].disconnect(noteNode[i])
// // 				//noteNode[i].disconnect(notesLoad[i])//(cabinet[index])
// 			    noteNode[i].disconnect()
// // 				// noteNode[i].clear
// // 				// notesLoad[i].disconnect
// // 				//noteNode[i].context = null
// // 				 // console.log(notesLoad[i])
// // 				//console.log(paths[i])
// // 				noteNode[i].mediaElement.source = notesLoad[i]
// // 				console.log(noteNode[i].mediaElement.source)
// // 				console.log(noteNode[i].mediaElement)
// // 				//console.log(noteNode[i])
// // 			// 	// noteNode[i].remove()
// // 			// 	//console.log('after: ' + noteNode[i])
// 			}
// 	}


		var noteWrap = $('.audioBin' + index + ' li');
		notesLoad = noteWrap.find('audio');





if (noteNode[3] != null) {
		for (var i = 0 ; i < presetInstrument.notes ; i++) {
			// 	//console.log('before: ' + noteNode[i])
			// 	notesLoad[i].remove()
				//notesLoad[i].disconnect(noteNode[i])
				//noteNode[i].pause()
				//cabinet[index].disconnect(noteNode[i])
				//noteNode[i].disconnect(notesLoad[i])//(cabinet[index])
			    //noteNode[i].disconnect()
				// noteNode[i].clear
				// notesLoad[i].disconnect
				//noteNode[i].context = null
				 // console.log(notesLoad[i])
				//console.log(paths[i])
				// noteNode[i].mediaElement.source = notesLoad[i]
				console.log('1st ' + noteNode[i].src)
				noteNode[i].src = notesLoad[i]
				console.log('2nd ' + noteNode[i].src)
				// noteNode[i].mediaElement = notesLoad[i]
				// // noteNode[i].mediaElement.outerHTML = notesLoad[i]
				// console.log(noteNode[i])
				// console.log(noteNode[i].mediaElement.source)
				// console.log(noteNode[i].mediaElement)
				//console.log(noteNode[i])
			// 	// noteNode[i].remove()
			// 	//console.log('after: ' + noteNode[i])
			}
	}


		//noteNode = tempNode

		// cabinet[index].connect(overdrive[index].input)
		// overdrive[index].connect(compressor[index].input)
		// compressor[index].connect(tremolo[index].input)
		// tremolo[index].connect(chorus[index].input)
		// chorus[index].connect(phaser[index].input)
		// phaser[index].connect(reverb[index].input)
		// reverb[index].connect(delay[index].input)
		// delay[index].connect(filter[index].input)
		// filter[index].connect(wahwah[index].input)

		// wahwah[index].connect(context.destination);	
else {


		for (var i = 0 ; i < presetInstrument.notes ; i++){
		// 	if (noteNode[i]) {
		// 	noteNode[i].disconnect(wahwah[index])
		// }
		// console.log ('in here')
		 noteNode[i] = context.createMediaElementSource(notesLoad[i])
		// 	 // noteNode[i] = context.createScriptProcessor(notesLoad[i])
		// 	 //noteNode[i].mediaElement.currentSrc = notesLoad[i]
			noteNode[i].connect(cabinet[index].input)
			// wahwah[index].connect(context.destination)
		} // end for loop

	} // end else
} // end bigger else



} // end function


function triggerSample(index, key) {
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');

	notes = noteWrap.find('audio');
	// console.log('key is: ' + key[2]) ;
	transpose(index, key[2]);
	var check = keyboardMap(key[2]) ;
	console.log(check)
	// console.log('check is: ' + check) ;
	//var mappedKey = check + (octave[index]*12);
	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);

	if(check != 200  && check != 49 && check != 96){
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
