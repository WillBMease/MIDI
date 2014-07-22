var noteNode = [];

for (var i = 0 ; i < 120 ; i++) {
	noteNode[i] = null
}

var firstInst = 'gPiano'

/// you are 0
for (var i = 0 ; i < userLimit ; i++) {

		cabinet[i].connect(overdrive[i].input)
		overdrive[i].connect(compressor[i].input)
		compressor[i].connect(tremolo[i].input)
		tremolo[i].connect(chorus[i].input)
		chorus[i].connect(phaser[i].input)
		phaser[i].connect(convolver[i].input)
		convolver[i].connect(delay[i].input)
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

	if (presetInstrument.name == "metronome")
		index = 4

	var instrument = '<audio id="" preload="auto">' + '</audio>';
	var target = $('.audioBin' + index + ' li');
	sampleActive = true;
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	
	if (presetInstrument.name == "metronome") {
		for(var i = 1 ; i < 13 ; i++) {
			target.append(instrument);
			// console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			octave[index] = 1;
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
		}

		var notes = [];
		var noteWrap = $('.audioBin' + index + ' li');
		notes = noteWrap.find('audio');
		for (var i = 0 ; i < presetInstrument.notes ; i++) {
			if (noteNode[i] != null)
				noteNode[i].disconnect()
		}	

		for (var i = 0 ; i < presetInstrument.notes ; i++){
			 noteNode[i] = context.createMediaElementSource(notes[i])
			 noteNode[i].connect(cabinet[index].input)

		} // end for loop

	} // end else

} // end function


function triggerSample(index, key) {
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');

	notes = noteWrap.find('audio');
	// console.log('key is: ' + key[2]) ;
	transpose(index, key[2]);
	//var check = keyboardMap(key[2]) ;
	// console.log('check is: ' + check) ;
	//var mappedKey = check + (octave[index]*12);
	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);

	if(check != 200  && check != 49 && check != 96){
		notes[mappedKey].pause();
		notes[mappedKey].currentTime = 0
		notes[mappedKey].volume = 0.9
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
				controllerArray[i].velocity = midiData[4]        
				//filter[0].frequency.value = setFilterFreq(midiData);
				console.log('surface controller ' + controllerArray[i].controllerNum + ' detected! velocity is: ' + midiData[4])
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
