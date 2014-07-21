var noteNode = [];


var filter = []
var delay = []

for (var i = 0 ; i < 120 ; i++) {
	noteNode[i] = 0
}

for (var i = 0 ; i < userLimit ; i++) {

	// delay[i] = context.createDelay()
	// delay[i].delayTime = 100

	// filter[i] = context.createBiquadFilter();
	// // Note: the Web Audio spec is moving from constants to strings.
	// // filter.type = 'lowpass';
	// filter[i].type = filter.LOWPASS;
	// filter[i].frequency.value = 10000;
	// // Connect the source to it, and the filter to the destination.

	// 	filter[i].connect(context.destination)

		// cabinet[i].connect(overdrive[i].input)
		// overdrive[i].connect(compressor[i].input)
		// compressor[i].connect(tremolo[i].input)
		// tremolo[i].connect(chorus[i].input)
		// chorus[i].connect(phaser[i].input)
		// phaser[i].connect(convolver[i].input)
		// convolver[i].connect(delay[i].input)
		// delay[i].connect(filter[i].input)
		// filter[i].connect(wahwah[i].input)

		// 	cabinet[i].connect(context.destination)
		// overdrive[i].connect(context.destination)
		// compressor[i].connect(context.destination)
		// tremolo[i].connect(context.destination)
		//chorus[i].connect(context.destination)
		// phaser[i].connect(context.destination)
		// convolver[i].connect(context.destination)
		// delay[i].connect(context.destination)
		// filter[i].connect(context.destination)

		// wahwah[i].connect(context.destination);
}

function loadInstrument(index, instr)
{
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
			console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			octave = 1;
		}
	}

	/////////for bass guitar////////////////////	
	else if(presetInstrument.name == "bass"){
		for(var i = 27; i <presetInstrument.notes + 27 +1; i++){
			target.append(instrument);
			console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			octave = 1;
		}
	}

	else{
		for(var i = 0; i <presetInstrument.notes +1; i++){
			target.append(instrument);
			console.log(i);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
		}

		var notes = [];
		var noteWrap = $('.audioBin' + index + ' li');
		notes = noteWrap.find('audio');


// if (noteNode[0] != 0){
// 	for (var i = 0 ; i < presetInstrument.notes ; i++)
// 		noteNode[i].disconnect()
// }

		for (var i = 0 ; i < presetInstrument.notes ; i++)
		{
			// noteNode[i] = context.createMediaElementSource(notes[i])
			// noteNode[i].connect(cabinet[index].input)
			// noteNode[i] = context.createMediaElementSource(notes[i])
			// noteNode[i].connect(delay[index])
			// //noteNode[i].connect(cabinet[index].input)

		}
	}


}


function triggerSample(index, key) {
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');

	notes = noteWrap.find('audio');
	console.log('key is: ' + key[2]) ;
	transpose(key[2]);
	var check = keyboardMap(key[2]) ;
	console.log('check is: ' + check) ;
	var mappedKey = keyboardMap(key[2]) + (octave*12);

	if(check != 200  && check != 49 && check != 96){
		notes[mappedKey].pause();
		notes[mappedKey].currentTime = 0
		notes[mappedKey].volume = 0.1
		notes[mappedKey].play(0)
	}

}

function triggerMidiDevice(index, midiData){
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');
	
	if(setController){
		setControls(midiData);
		
	}
	// else if(setVolumeParameter){
	// 	assignVolume(midiData)
	// }
	else{
		for(var i = 0;i<controllerArray.length;i++){
			if(midiData[2] == controllerArray[i].type && midiData[3] == controllerArray[i].ID){
				controllerArray[i].velocity = midiData[4]        
				// ConversionScale(controllerArray[i],0,1)
				console.log('surface controller ' + controllerArray[i].controllerNum + ' detected! velocity is: ' + midiData[4])
				log.innerText = ('controller: ' + controllerArray[i].controllerNum)
				return;
			}
		}

		notes = noteWrap.find('audio');
		key = masterConversion(midiData);

		if(key != 200){
			//console.log('midi key input is: ' + key);
			notes[key].currentTime = 0;
			// var velocity = parseInt(midiData[4]) ;
			// var velocity = midiData[4] ;
			// console.log('velocity is: ' + velocity)
			// if (velocity > 100)
				// 	velocity = velocity - 27
			// notes[key].volume = (velocity * .01)

			console.log('volume: ' + noteVolume(midiData))
			//filter.frequency = controllerArray[0].velocity
			notes[key].volume = noteVolume(midiData)
			//notes[key].volume = midiData[4]/127
			notes[key].play(0);
		}
	}
}
