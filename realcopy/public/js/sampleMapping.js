var noteNode = [];

for (var i = 0 ; i < 120 ; i++)
	noteNode[i] = 0

	cabinet.connect(overdrive.input)
	overdrive.connect(compressor.input)
	compressor.connect(tremolo.input)
	tremolo.connect(chorus.input)
	chorus.connect(phaser.input)
	phaser.connect(convolver.input)
	convolver.connect(delay.input)
	delay.connect(filter.input)
	filter.connect(wahwah.input)

	wahwah.connect(context.destination);

function loadInstrument(index, instr)
{
	$.getJSON("js/instruments.json", function(json){
        generateNotes(index, json[instr])
});

}

function generateNotes(index, presetInstrument){
	$(window).unbind();

var instrument = '<audio id="" preload="auto">' + '</audio>';

		var target = $('.audioBin' + index + ' li');

	sampleActive = true;
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	/////////for bass guitar////////////////////	
	if(presetInstrument.name == "bass"){
		for(var i = 27; i <presetInstrument.notes + 27; i++){
		target.append(instrument);
		console.log(i);
		var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
		}
	}

	else{
		for(var i = 0; i <presetInstrument.notes; i++){
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

if (noteNode[0] != 0){
	for (var i = 0 ; i < presetInstrument.notes ; i++)
		noteNode[i].disconnect
}

for (var i = 0 ; i < presetInstrument.notes ; i++)
{

	noteNode[i] = context.createMediaElementSource(notes[i])

	noteNode[i].connect(cabinet.input)

	// cabinet.connect(overdrive.input)
	// overdrive.connect(compressor.input)
	// compressor.connect(tremolo.input)
	// tremolo.connect(chorus.input)
	// chorus.connect(phaser.input)
	// phaser.connect(convolver.input)
	// convolver.connect(delay.input)
	// delay.connect(filter.input)
	// filter.connect(wahwah.input)

	// wahwah.connect(context.destination);

}
	} // end else

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
	//console.log(notes[mappedKey]);


	if(check == 200  || check == 49 || check == 96){
	}
	else{
	notes[mappedKey].pause();
	notes[mappedKey].currentTime = 0
	notes[mappedKey].volume = 0.1
	notes[mappedKey].play(0)
	//noteNode[mappedKey].start(0)
	}
}

function triggerMidiDevice(index, midiData){
	var notes = [];

	var noteWrap = $('.audioBin' + index + ' li');
	
	if(setFader){
		setControls(midiData);
		
	}
	else{
		for(var i = 0;i<controllerArray.length;i++){
			if(midiData[2] == controllerArray[i].type && midiData[3] == controllerArray[i].ID){
				controllerArray[0].velocity = midiData[4]
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

			console.log('volume: ' + midiData[4]/127)
			//filter.frequency = controllerArray[0].velocity
			notes[key].volume = midiData[4]/127
			notes[key].play(0);
		}
	}
}

// 