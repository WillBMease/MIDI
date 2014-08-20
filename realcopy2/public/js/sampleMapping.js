var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var bufferLoader;
var sampleRate = 44100
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

for (var i = 0 ; i < userLimit + 1 ; i++) {
	noteNode[i] = []
}

// Initialize your own instrument on startup
// loadInstrument(0, firstInst)


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
	 	console.log(key)
	 	console.log(midiData)
	 var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][key];
    
    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }

}
}

