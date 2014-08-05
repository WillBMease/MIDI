var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var bufferLoader;
var firstInst = 'gPiano'
var firstRun = true

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
	noteNode[i] = []
}


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

if (paths[0]){
	paths = []
}

	var instrument = '<audio id="" preload="auto">' + '</audio>';
	var target = $('.audioBin' + index + ' li');
	sampleActive = true;
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	
		for(var i = 1; i <= presetInstrument.notes; i++){
			target.append(instrument);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);

			paths.push(instrumentPath)

}


    var finishedLoading = function(bufferList) {
      noteNode[index] = bufferList
    }
    
    myArrayBuffer = context.createBuffer(2,context.sampleRate*2,context.sampleRate)
    
    bufferLoader = new BufferLoader(
        context,
        paths,
        finishedLoading
    );
 
    bufferLoader.load()

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
	 var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][mappedKey];
    
    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }

 

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
