var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var bufferLoader;
var sampleRate = 48000
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

	sampleActive = true;
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated for " + presetInstrument.name + "!!!");
	
		for(var i = 1; i <= presetInstrument.notes; i++){
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			paths.push(instrumentPath)
}

    var finishedLoading = function(bufferList) {
      noteNode[index] = bufferList
    }
    
    myArrayBuffer = context.createBuffer(2,sampleRate*2,sampleRate)

    bufferLoader = new BufferLoader(
        context,
        paths,
        finishedLoading
    );
 
    bufferLoader.load()



} // end function


function triggerSample(index, key, whichSound) {

	transpose(index, key[2]);
	var check = keyboardMap(key[2]) ;

	 var mappedKey = keyboardMap(key[2]) + (octave[index]*12);

if(check != 200  && check != 49 && check != 96){

		if (whichSound == 'sample') {
	 var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][mappedKey];
    
    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }
}

else if (whichSound == 'synth'){

	instrument1 = context.createOscillator(),
    instrument2 = context.createOscillator(),
    instrument3 = context.createOscillator();

    var freq = 32.703 * Math.pow(1.059463094359, mappedKey - 12)

    instrument1.frequency.value = parseFloat(freq)
    instrument2.frequency.value = parseFloat(freq)
    instrument3.frequency.value = parseFloat(freq)

    instrument1.connect(bus[index].input)
    instrument2.connect(bus[index].input)
    instrument3.connect(bus[index].input)

    instrument1.noteOn(0)
    instrument2.noteOn(0)
    instrument3.noteOn(0)

var stillActive = true

$(document).keyup(function(e){
		console.log('stop!')
		console.log('e is ' + e.which)
		console.log('key is ' + key[2])
		 if (key[2] == e.which){
		 	endNote(instrument1, instrument2, instrument3)
    	for (var i = 0 ; i < oscChecks.length ; i++){
    		if (oscChecks[i] == key[2]) {
    			oscChecks[i] = null
    		}
    	}
    }
	stillActive = false ;
	return false;
});

// $(document).focus(function(e) { 
//   stillActive = false;
//   return false
// });

	}
 

	}

}

function endNote(instrument1, instrument2, instrument3){
	   	instrument1.noteOff(0)
    	instrument2.noteOff(0)
    	instrument3.noteOff(0)
    	instrument1.disconnect()
    	instrument2.disconnect()
    	instrument3.disconnect()
}

function playSynth(index, choose, keyTest){
	var testSynth = processSynth(choose)

	transpose(index, keyTest[2]);
	var check = keyboardMap(keyTest[2]) ;

	 var mappedKey = keyboardMap(keyTest[2]) + (octave[index]*12);

if(check != 200  && check != 49 && check != 96){

    var freq = 32.703 * Math.pow(1.059463094359, mappedKey - 12)
	
    testSynth.frequency.value = parseFloat(freq)

    testSynth.start(0)

    // setTimeout(function(){
    // 	testSynth.noteOff(0)
    // }, 1000)

	}

}

function processSynth(choose){

	if (choose == 0)
		testSynth = context.createOscillator(0)
	else if (choose == 1)
		testSynth = context.createOscillator(1)
	else if (choose == 2)
		testSynth = context.createOscillator(2)
	else if (choose == 3)
		testSynth = context.createOscillator(3)

	return testSynth
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
	 var source1 = context.createBufferSource();
    source1.buffer = noteNode[index][key];
    
    source1.connect(bus[index].input);
    source1.start(0);

    source1.onended = function() {
    	source1.stop()
    }

}
}


function triggerOsc(index, keyNote){

	var instrument1
	var instrument2
	var instrument3

	instrument1 = context.createOscillator(),
    instrument2 = context.createOscillator(),
    instrument3 = context.createOscillator();

    var mappedKey = keyboardMap(keyNote) + (octave[index]*12)

    var freq = 32.703 * pow(1.059463094359, mappedKey - 12)



    console.log(freq)

    instrument1.frequency.value = parseFloat(freq)
    instrument2.frequency.value = parseFloat(freq)
    instrument3.frequency.value = parseFloat(freq)

    instrument1.connect(bus[index].input)
    instrument2.connect(bus[index].input)
    instrument3.connect(bus[index].input)

    instrument1.start()
    instrument2.start()
    instrument3.start()

$(document).keyup(function(e) { 
	console.log(e.which)
	// if (keyNote == e.which){
    	instrument1.stop()
    	instrument2.stop()
    	instrument3.stop()
    	instrument1.disconnect()
    	instrument2.disconnect()
    	instrument3.disconnect()
    	for (var i = 0 ; i < oscChecks.length ; i++){
    		if (oscChecks[i] == keyNote)
    			oscChecks[i] = null
    	}
    // }
	})
}
