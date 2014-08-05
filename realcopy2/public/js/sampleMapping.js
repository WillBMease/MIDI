var noteNode = {}
var notesLoad = [];
var paths = []
var testing = []
var firstRun = true

// var gainNode = context.createGain()
// gainNode.connect(cabinet[i].input)

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



// //Load the Sound with XMLHttpRequest
// function loadSound() {
//     var request = new XMLHttpRequest();
//     request.open("GET", "sounds/jazzdrums/note-5.ogg", true); // Path to Audio File
//     request.responseType = "arraybuffer"; // Read as Binary Data
//     request.onload = function() {
//         var incomingData = request.response;
//         play(incomingData);
//     };
//     request.send();
// }
 
// // Play Function
// function play(incomingData) {
//     source = context.createBufferSource(); // Create Sound Source
//     buffer = context.createBuffer(2, incomingData, 41000); // Create Mono Source Buffer from Raw Binary
//     source.buffer = buffer; // Add Buffered Data to Object
//     source.connect(context.destination); // Connect Sound Source to Output
//     source.noteOn(context.currentTime); // Play the Source when Triggered
// }

// function loadSound(){
// var incomingData
// // Stereo
// var channels = 2;
// // Create an empty two second stereo buffer at the
// // sample rate of the AudioContext
// var frameCount = context.sampleRate * 2.0;

// var myArrayBuffer = context.createBuffer(2, frameCount, context.sampleRate);

//     var request = new XMLHttpRequest();
//     request.open("GET", "sounds/jazzdrums/note-5.ogg", true); // Path to Audio File
//     request.responseType = "arraybuffer"; // Read as Binary Data
//     //console.log(request)
//     request.send()
//     request.onload = function() {
//     	context.decodeAudioData(request.response)
//         incomingData = request.response;
//        console.log(request)
  



//   // Fill the buffer with white noise;
//   //just random values between -1.0 and 1.0
//   for (var channel = 0; channel < 2; channel++) {
// //    // This gives us the actual ArrayBuffer that contains the data

// 	console.log(myArrayBuffer.getChannelData(channel))
//    nowBuffering = myArrayBuffer.getChannelData(channel)
//    for (var i = 0; i < frameCount; i++) {
// //      // Math.random() is in [0; 1.0]
// //      // audio needs to be in [-1.0; 1.0]
// //      nowBuffering[i] = Math.random() * 2 - 1;
//    nowBuffering[i] = incomingData[i]
//    }

// }

// console.log(myArrayBuffer)
//   // Get an AudioBufferSourceNode.
//   // This is the AudioNode to use when we want to play an AudioBuffer
//   var source = context.createBufferSource();
//   // set the buffer in the AudioBufferSourceNode
//   source.buffer = myArrayBuffer;
//   // connect the AudioBufferSourceNode to the
//   // destination so we can hear the sound
//   source.connect(context.destination);
//   // start the source playing
//   source.start();
// }
// }

    // $('#testSound').click(function(){
    //   loadSound(gPiano)
    // });


// window.onload = init;

// var context;
var bufferLoader;

function loadSound(urls) {
    // context = new webkitAudioContext();
// if (bufferLoader){
    bufferLoader = new BufferLoader(
        context,
       urls,
        finishedLoading
    );
// }
// else{

// }

	console.log(bufferLoader)

    bufferLoader.load();
}

function finishedLoading(bufferList) {
    // Create two sources and play them both together.
//    for (var i = 0 ; i < 90 ; i++) 
noteNode[0] = bufferList
console.log(bufferList)
console.log(noteNode[0])
    // var source1 = context.createBufferSource();
    // var source2 = context.createBufferSource();
    // source1.buffer = bufferList[0];
    // source2.buffer = bufferList[1];
    
    // source1.connect(cabinet[0].input);
    // source2.connect(cabinet[0].input);
    // source1.start(0);
    // source2.start(0);
}




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
		// paths[i] = 'http://localhost:8888/'
		// notesLoad[i] = null
}

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
			// testing[i].audioPointer = new Audio()
			target.append(instrument);
			var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
			var newInstrument = target.find("audio:last-child");
			newInstrument.attr("src", instrumentPath);
			newInstrument.attr("id", i);
			// console.log(instrumentPath)
			// testing[i].audioPointer.src = instrumentPath
			// testing[i].audioPointer.type = "audio/ogg"
			paths.push(instrumentPath)
			//bufferLoader.bufferList.push(instrumentPath)
			// console.log(paths[i])
}

// noteNode[index] = bufferLoader.bufferList

// console.log(paths)

loadSound(paths)

// console.log(paths[5])
// 		bufferLoader = new BufferLoader(
//         context,
//         paths,
//         finishedLoading
//     );

//     bufferLoader.load();
	

		var noteWrap = $('.audioBin' + index + ' li');
		notesLoad = noteWrap.find('audio');

		console.log(notesLoad[8])
		console.log('u')

		// console.log(notesLoad[5])

		// noteNode[index][7] = context.createMediaElementSource(notesLoad[7])
		// noteNode[index][7].connect(cabinet[index].input)

// cabinet[index].disconnect(overdrive[index].input)
// cabinet[0].connect(overdrive[0].input)

// if (firstRun){
// 	noteNode[index][0] = context.createMediaElementSource(notesLoad[29])
// 	noteNode[index][0].connect(cabinet[index].input)
// }

	// if (index != 4) {
	// 	for (var i = 0 ; i <  presetInstrument.notes  ; i++) {
	// 		if (!firstRun) {
	// 			// notesLoad[i]
	// 	 		noteNode[index][i] = null
	// 		}
	// 	}
	// 	// for (var i = 0 ; i < presetInstrument.notes ; i++) {
	// 	// 			noteNode[index][i] = context.createMediaElementSource(notesLoad[i])
	// 	// 			noteNode[index][i].connect(cabinet[index].input)
	// 	// }

	// }
	// firstRun = false
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
    // var source2 = context.createBufferSource();
    source1.buffer = noteNode[index][mappedKey];
    // source2.buffer = bufferList[1];
    
    source1.connect(bus[index].input);
    // source2.connect(cabinet[0].input);
    source1.start(0);
    // source2.start(0);

    source1.onended = function() {
    	// source1.disconnect()
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
				// console.log('surface controller ' + controllerArray[i].controllerNum + ' detected! velocity is: ' + midiData[4])
				// console.log(controllerArray[i].parameter)
				effectControllers(controllerArray[i], midiData)
				log.innerText = ('controller: ' + controllerArray[i].controllerNum)
				return;
			}
		}
	 	key = masterConversion(midiData);
	 var source1 = context.createBufferSource();
    // var source2 = context.createBufferSource();
    source1.buffer = noteNode[index][key];
    // source2.buffer = bufferList[1];
    
    source1.connect(cabinet[0].input);
    // source2.connect(cabinet[0].input);
    source1.start(0);
    // source2.start(0);

    source1.onended = function() {
    	source1.disconnect()
    	source1.stop()
    }

	// 	notes = noteWrap.find('audio');

	// 	if(key != 200 && midiData[4] != 0){


	// 		if (noteNode[index][key] == null) {		
	// 	noteNode[index][key] = context.createMediaElementSource(notes[key])
	// 	noteNode[index][key].connect(cabinet[index].input)
	// }

	// 	console.log(noteNode[index][key]) 

	// 		notes[key].currentTime = 0;
	// 		console.log('volume: ' + noteVolume(midiData))
	// 		//filter.frequency = controllerArray[0].velocity
	// 		notes[key].volume = noteVolume(midiData)
	// 		notes[key].play(0);
	// 	}
	// }
}
}
