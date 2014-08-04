	var numOfKey = 8
	var rowX = 4
	var rowY = 2 

	var configurationKey = [];// Saves soundObj in each index in relation to the order of generated button divs,
	//var filterKey = [];
	var beatMsg = []

	var jazzDrumList = {

	kick:"sounds/jazzdrums/note-5.ogg",highHat:"sounds/jazzdrums/note-1.ogg",crash1:"sounds/jazzdrums/note-2.ogg",
	crash2:"sounds/jazzdrums/note-3.ogg", crash3:"sounds/jazzdrums/note-4.ogg", openHH:"sounds/jazzdrums/note-6.ogg", phh:"sounds/jazzdrums/note-7.ogg",
	ride1:"sounds/jazzdrums/note-8.ogg",ride2:"sounds/jazzdrums/note-9.ogg", ride3:"sounds/jazzdrums/note-10.ogg", ride4:"sounds/jazzdrums/note-11.ogg", sdst:"sounds/jazzdrums/note-12.ogg",
	snare1:"sounds/jazzdrums/note-13.ogg", snare2:"sounds/jazzdrums/note-14.ogg", tomHi:"sounds/jazzdrums/note-14.ogg", tomLow:"sounds/jazzdrums/note-15.ogg",
	tomMid:"sounds/jazzdrums/note-17.ogg"

	}

	var numb = {
		one:"sounds/numb/note-1.ogg", two:"sounds/numb/note-2.ogg", three:"sounds/numb/note-3.ogg", four:"sounds/numb/note-4.ogg", five:"sounds/numb/note-5.ogg"
	}






//////////////////////////////////////////////////////////////////////////////////
$(function(){
		//fill array with placeholder values
		for (i = 0; i <= numOfKey-1; i++) {

			soundObj = {
			sound:"",
			inst:"",
			insType:"",
			frequency: 0,
			activeVoice:"",
			audioPointer:"",
			pathPointer:""
		};

			configurationKey[i] = soundObj;
		
		}

		console.log(configurationKey);


	//////////////////////////////////////////////////////////////////////////////////


		


	//     _____ _____  _____ _____     _____ ______ _   _ ______ _____         _______ _____ ____  _   _ 
	//    / ____|  __ \|_   _|  __ \   / ____|  ____| \ | |  ____|  __ \     /\|__   __|_   _/ __ \| \ | |
	//   | |  __| |__) | | | | |  | | | |  __| |__  |  \| | |__  | |__) |   /  \  | |    | || |  | |  \| |
	//   | | |_ |  _  /  | | | |  | | | | |_ |  __| | . ` |  __| |  _  /   / /\ \ | |    | || |  | | . ` |
	//   | |__| | | \ \ _| |_| |__| | | |__| | |____| |\  | |____| | \ \  / ____ \| |   _| || |__| | |\  |
	//    \_____|_|  \_\_____|_____/   \_____|______|_| \_|______|_|  \_\/_/    \_\_|  |_____\____/|_| \_|
	//                                                                                                    
	//                                                                                                    
    $('#generate-grid').click(function(){
        rowX = parseInt($('#rowx').val())
        rowY = parseInt($('#rowy').val())
        gridGenerator()
        console.log(rowX, rowY)

    });

function gridGenerator(){

	$('#dropcontainer').empty()
	$('#btn').empty()
			numOfKey = rowX * rowY
			// console.log(numOfKey)
		// generate block container elements to #divcontainer
	for (i = 0; i <= numOfKey-1; i++) {

		$('<div/>', {
	    'id':"btn" + i,
	    'class':'genDiv',

	}).appendTo('#dropcontainer');


		$('</p>', {
	    'id':"p" + i,
	    'class':'genText',

	}).appendTo("#btn"+i);

	};


	var setRow = function(clrRow)
		{
			widthCol = (99 / clrRow) - (12/clrRow);


			finalStr = (widthCol.toString() + "%");
			
			console.log(finalStr);
			return finalStr;



		}


	$(".genDiv").css({

	height:setRow(rowY),
	width:setRow(rowX),
	}
		)

// }
	//generate mapping indicators to #btn elements

	////////////////////////////////////////////////////////////////////////////////////////


	//Mouse Event Handlers
		


	$(".genDiv").mousedown(function(){

		$(this).css({

			backgroundColor:"#00FF01"

		});

		thisID = $(this).attr("id");
		arNum = parseInt(thisID.substr(3,3))
		sampleID = configurationKey[arNum]

		beatMsg[3] = sampleID.sound
		beatMsg[4] = sampleID.inst
		beatMsg[5] = sampleID.insType
		beatMsg[6] = sampleID.frequency

	if (sampleID.inst == 'square synth') {
		beatMsg[1] = 9
		beatMsg[2] = 'on'


		if (sampleID != 0) 
		{
			vel = 127;
			startOsc(sampleID, vel);
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
			console.log("playSound called with " + sampleID)
		}
	}

	else if (sampleID.inst == "JD" || sampleID.inst == "numb") {

		beatMsg[1] = 10
		beatMsg[7] = sampleID.pathPointer
		// beatMsg[2]
		mySample(sampleID)
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
					console.log('shit')
					user[i].send(beatMsg)
				}
			}


	}

	})

	$(".genDiv").mouseup(function(){
		
		$(this).css({

			backgroundColor:"#FFFFFF"

			})

		thisID = $(this).attr("id");
		arNum = parseInt(thisID.substr(3,3))
		soundOff = configurationKey[arNum]
		console.log("mupID = " + soundOff)

if (configurationKey[arNum].inst == 'square synth') {
		beatMsg[1] = 9
		beatMsg[2] = 'off'
		// beatMsg[3] = soundOff.sound
		// beatMsg[4] = soundOff.inst
		// beatMsg[5] = soundOff.insType
		// beatMsg[6] = soundOff.frequency
		// beatMsg[7] = soundOff.activeVoice
		// beatMsg[8] = soundOff.audioPointer

		if (soundOff != 0){

			endOsc(soundOff);
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
		}
	}
	})

	$(".genDiv").mouseleave(function(){
		
		$(this).css({

			backgroundColor:"#FFFFFF"
		})

		thisID = $(this).attr("id");
		arNum = parseInt(thisID.substr(3,3))
		soundOff = configurationKey[arNum]
		console.log("mupID = " + soundOff)

		if (soundOff != 0){

			endOsc(soundOff);
		}

	})

// } // end of generateGrid()


	$(".filterButton").click(function(){

		$("#dropcontainer ,#instruments,.filterButton").css({
		   'filter'         : 'blur(5px)',
		   '-webkit-filter' : 'blur(5px)',
		   '-moz-filter'    : 'blur(5px)',
		   '-o-filter'      : 'blur(5px)',
		   '-ms-filter'     : 'blur(5px)',

		});

		$(".filterContainer").css({

			display:"inline"

		})

	})

	$(".closeBttn").click(function(){

		$("#dropcontainer ,#instruments,.filterButton").css({
		   'filter'         : 'none',
		   '-webkit-filter' : 'none',
		   '-moz-filter'    : 'none',
		   '-o-filter'      : 'none',
		   '-ms-filter'     : 'none',

		});

		$(".filterContainer").css({

			display:"none"

		})


	})



////dynamically sizing gendivs based on number of keys



	// var setRow = function(clrRow)
	// 	{
	// 		widthCol = (99 / clrRow) - (12/clrRow);


	// 		finalStr = (widthCol.toString() + "%");
			
	// 		console.log(finalStr);
	// 		return finalStr;



	// 	}


	// $(".genDiv").css({

	// height:setRow(rowY),
	// width:setRow(rowX),
	// }
	// 	)


//////////////////////////////////////////////////////////////////////////////////////












/////////////////////////////////////////////////////////////
//initalize jquery.ui elements

//    _____  _____            _____   _ _   _   _____  _____   ____  _____  
//   |  __ \|  __ \     /\   / ____| ( ) \ | | |  __ \|  __ \ / __ \|  __ \ 
//   | |  | | |__) |   /  \ | |  __  |/|  \| | | |  | | |__) | |  | | |__) |
//   | |  | |  _  /   / /\ \| | |_ |   | ` | | |  | | |  _  /| |  | |  ___/ 
//   | |__| | | \ \  / ____ \ |__| |   | |\  | | |__| | | \ \| |__| | |     
//   |_____/|_|  \_\/_/    \_\_____|   |_| \_| |_____/|_|  \_\\____/|_|     
//                                                                          
//  



	$("#instruments").accordion({
		heightStyle: "content",
        clearStyle: true, 
			});


	$(".draggable").draggable({
		helper:'clone',
		appendTo:'body',
		scroll:false,


			});


	$(".genDiv").droppable({
		
		drop: handleDropEvent

		
		
	 });


} // end gridGenerator()

});


// }

	function handleDropEvent( event, ui ) 
{
  var draggable = ui.draggable;
  dropID = "#" + $(this).attr('id');
  dragID ="#" + draggable.attr('id');

  if ($(dragID).attr("data-class") == "instrument"){
	  arNum = parseInt($(dropID).attr('id').substr(3,3))
	  console.log(arNum)
	  console.log(configurationKey[arNum])
	  configurationKey[arNum].sound = $(dragID).attr("data-sound");
	  configurationKey[arNum].inst = $(dragID).attr("data-instrument");
	  configurationKey[arNum].insType = $(dragID).attr("data-type");
	  configurationKey[arNum].frequency = $(dragID).attr("data-frequency")
	  des = $(this).find("p");
	  $(des).text(draggable.find("p").text());
	  console.log(configurationKey);

	  if ($(dragID).attr("data-instrument") == "JD" || $(dragID).attr("data-instrument") == "numb")
	  {

	  	pathPointer = $(dragID).attr("data-sound")

	  	configurationKey[arNum].pathPointer = pathPointer
		configurationKey[arNum].audioPointer = new Audio()

		if (configurationKey[arNum].inst == "JD")
			configurationKey[arNum].audioPointer.src = jazzDrumList[pathPointer]
		else if (configurationKey[arNum].inst == "numb")
			configurationKey[arNum].audioPointer.src = numb[pathPointer]

		configurationKey[arNum].audioPointer.type = "audio/ogg"
		configurationKey[arNum].audioPointer.id = configurationKey[arNum].sound + configurationKey[arNum].inst

		$(dropID).append(configurationKey[arNum]);
		console.log(configurationKey[arNum].audioPointer)

		audioElement = configurationKey[arNum].audioPointer
		configurationKey[arNum].activeVoice = context.createMediaElementSource(audioElement);
		gainNode = context.createGain();
		
		// gainNode.connect(context.destination)
		gainNode.connect(cabinet[0].input)
		

	  }

}

if ($(dragID).attr("data-class") == "filter"){






}



}


//  8""""8 8"""88 8   8 8"""8 8""""8    8""""8 8"""" 8"""8 8"""" 8"""8  8""""8 ""8"" 8"""88 8"""8  
//  8      8    8 8   8 8   8 8    8    8    " 8     8   8 8     8   8  8    8   8   8    8 8   8  
//  8eeeee 8    8 8e  8 8e  8 8e   8    8e     8eeee 8e  8 8eeee 8eee8e 8eeee8   8e  8    8 8eee8e 
//      88 8    8 88  8 88  8 88   8    88  ee 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  e   88 8    8 88  8 88  8 88   8    88   8 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  8eee88 8eeee8 88ee8 88  8 88eee8    88eee8 88eee 88  8 88eee 88   8 88   8   88  8eeee8 88   8 

  
 function startSample(soundObj, vel) {

		soundObj.audioPointer = new Audio()

		if (soundObj.inst == "JD")
		soundObj.audioPointer.src = jazzDrumList[soundObj.pathPointer]
		else if (soundObj.inst == "numb") {
		soundObj.audioPointer.src = numb[soundObj.pathPointer]
		console.log(numb[soundObj.pathPointer])
	}

		soundObj.audioPointer.type = "audio/ogg"
		soundObj.audioPointer.id = soundObj.sound + soundObj.inst

		soundObj.activeVoice = context.createMediaElementSource(soundObj.audioPointer);
		gainNode = context.createGain();
	soundObj.activeVoice.connect(context.destination);		
		// gainNode.connect(context.destination)
		// gainNode.connect(cabinet[1].input)

		console.log(soundObj.audioPointer)

	soundObj.audioPointer.pause();
	//soundObj.audioPointer.currentTime = 0;
	//gainNode.gain.value = vel/127;
	soundObj.audioPointer.play(0);

 }                                                                     

function mySample(soundObj, vel){
		audioElement = soundObj.audioPointer;

	console.log(audioElement)
	soundObj.activeVoice.connect(gainNode);
	audioElement.pause();
	audioElement.currentTime = 0;
	gainNode.gain.value = vel/127;
	audioElement.play(0);
}

function startOsc(soundObj, vel) {

if (soundObj.inst == "square synth") {
		soundObj.activeVoice = context.createOscillator();
		gainNode = context.createGain();
		// soundObj.activeVoice.connect(context.destination);
		soundObj.activeVoice.connect(cabinet[0].input);
		gainNode.gain.value = vel/127; // compare velocity to maximum
	
		console.log("noteOn")
		soundObj.activeVoice.frequency.value = soundObj.frequency // A
		soundObj.activeVoice.start(0); 
		// 	console.log(startOsc)// Play bass guitar instantly
	}
}

function endOsc(soundObj){
soundOffIns = soundObj.insType
console.log(soundObj.sound)
	if (soundOffIns == 'synth')
	{
		soundObj.activeVoice.stop(0);
		soundObj.activeVoice.disconnect();
	}
}

 
//            _     _ _ 
//           (_)   | (_)
//  _ __ ___  _  __| |_ 
// | '_ ` _ \| |/ _` | |
// | | | | | | | (_| | |
// |_| |_| |_|_|\__,_|_|
                      

var midi=null;
var inputs=null;
var outputs=null;
var input=null;
var output=null;
var noteUpArray = [];
var noteDownArray = [];
var buttonPress = 1;
var downPress = 0;
var upPress = 0;
var downKeyArray = [];


function h2d(h) {return parseInt(h,16);}

function handleMIDIMessage(ev) 
{
	var pressArray = [];
	pressArray[0] = ev.data[0]
	pressArray[1] = ev.data[1] 
	console.log(pressArray)

			console.log(ev.data[0])
		console.log(ev.data[1])
		console.log(ev.data[2])
	if (buttonPress <= numOfKey * 2)
	{
		console.log(ev.data[0])
		console.log(ev.data[1])
		console.log(ev.data[2])


		if (buttonPress % 2 == 0)
		{
			noteUpArray[upPress] = ev.data
			console.log(noteUpArray)
			buttonPress++;
			upPress++;
		}
		else {	
			noteDownArray[downPress] = pressArray
			console.log(noteDownArray)
			buttonPress++;
			downPress++;
		}		
	}
	else
	{
		console.log(ev.data[2])
		if (ev.data[2] > 0)
		{	
			for(var x = 0; x < noteDownArray.length; x++){

	      	if (noteDownArray[x][0] == pressArray[0] && noteDownArray[x][1] == pressArray[1])
	      	{

	      		$("#btn" + x).css({
				backgroundColor:"#00FF01"
				});
	      				var vel = ev.data[2]

						thisID = $("#btn" + x).attr("id");
						arNum = parseInt(thisID.substr(3,3))
						sampleID = configurationKey[arNum]
		

		beatMsg[3] = sampleID.sound
		beatMsg[4] = sampleID.inst
		beatMsg[5] = sampleID.insType
		beatMsg[6] = sampleID.frequency

		if (sampleID.inst == "square synth") {
		beatMsg[1] = 9
		beatMsg[2] = 'on'
				for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
			if (sampleID != 0) {
			startOsc(sampleID, vel);
			console.log("playSound called with " + sampleID)

	}
}
				else if (sampleID.inst == "JD" || sampleID.inst == "numb") {

if (ev.data[2] != 0 && ev.data[0] == 153){

		beatMsg[1] = 10
		beatMsg[7] = sampleID.pathPointer
		// beatMsg[2]
		mySample(sampleID)
		console.log('hey hey hey!')
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
					console.log('shit')
					user[i].send(beatMsg)
			   }
			  }
			 }	
			}
	       }
	      }
      	 }

    if (ev.data[2] == 0) {	
		for(var x = 0; x < noteDownArray.length; x++) {

	       	if (noteUpArray[x][0] == pressArray[0] && noteUpArray[x][1] == pressArray[1])
	      	{
		  		$("#btn" + x).css({
				backgroundColor:"#FFFFFF"
				});

	      		arNum = x;
				soundOff = configurationKey[arNum]
				console.log("mupID = " + soundOff)
		if (soundOff.inst == "square synth"){	
				beatMsg[2] = 'off'

				if (soundOff != 0){
				endOsc(soundOff);
				for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0)
					user[i].send(beatMsg)
			}
				}
			}
	      	}
	      }
      	}   
	}	

var playActualMIDI = true

	if (ev.data[0] == 153 || ev.data[0] == 143){
		console.log('look in here!')
		playActualMIDI = false
	}

if (playActualMIDI){
		midiMsg[0] = midiID
		midiMsg[1] = 1 ;
		midiMsg[2] = ev.data[0].toString(16) ;
		midiMsg[3] = ev.data[1].toString(16) ;
		//console.log('ev raw data : ' + ev.data[2])
		//midiMsg[4] = h2d(ev.data[2]);
		midiMsg[4] = ev.data[2];//.toString(16)  ;
		// log.innerText += 'msg 2 is: ' + midiMsg[2] + '  '
		// log.innerText += 'msg 3 is: ' + midiMsg[3] + '  '
		// log.innerText += 'velocity is: ' + midiMsg[4]

		// console.log('msg 2 is: ' + midiMsg[2])
		// console.log('msg 3 is: ' + midiMsg[3])
		// console.log('msg 4 is: ' + midiMsg[4])
		// console.log('velocity is: ' + midiMsg[4])
		//console.log(ev.data[2])

	console.log('detect midi')



		triggerMidiDevice(0, midiMsg)

	for (var i = 1 ; i < userLimit ; i++ )
	{
		if (user[i] != 0){
			for (var x = 0 ; x < 3 ; x++) {
			user[i].send(midiMsg);
			console.log("send to " + user[i].peer);
		} 
		}
	}

	midiID++

	}
}



function runTest() {
	
	navigator.requestMIDIAccess().then( success, failure );
}



function success (access)
{
	midi = access;
	console.log("webmidi success")
	inputs = midi.inputs();
	console.log(inputs)

	if (inputs.length>0)
	 {

		input = inputs[0];
		input.onmessage = handleMIDIMessage;
		input.addEventListener("midimessage", handleMIDIMessage);
		console.log("input devices present")
	}
}

function failure( error ) {
	alert( "Failed to initialize MIDI - " + ((error.code==1) ? "permission denied" : ("error code " + error.code)) );
}

runTest();










	

// var midi=null;
// var inputs=null;
// var outputs=null;
// var input=null;
// var output=null;
// var log=null;

// function runTest() {
// 	if (!log)
// 		log = document.getElementById("log");
// 	 log.innerText = "Starting up MIDI...\n";
// 	navigator.requestMIDIAccess().then( success, failure );
// }


// function handleMIDIMessage( ev ) {
	
	// 	midiMsg[0] = midiID
	// 	midiMsg[1] = 1 ;
	// 	midiMsg[2] = ev.data[0].toString(16) ;
	// 	midiMsg[3] = ev.data[1].toString(16) ;
	// 	//console.log('ev raw data : ' + ev.data[2])
	// 	//midiMsg[4] = h2d(ev.data[2]);
	// 	midiMsg[4] = ev.data[2];//.toString(16)  ;
	// 	// log.innerText += 'msg 2 is: ' + midiMsg[2] + '  '
	// 	// log.innerText += 'msg 3 is: ' + midiMsg[3] + '  '
	// 	// log.innerText += 'velocity is: ' + midiMsg[4]

	// 	// console.log('msg 2 is: ' + midiMsg[2])
	// 	// console.log('msg 3 is: ' + midiMsg[3])
	// 	// console.log('msg 4 is: ' + midiMsg[4])
	// 	// console.log('velocity is: ' + midiMsg[4])
	// 	//console.log(ev.data[2])

	// console.log('detect midi')

	// 	triggerMidiDevice(0, midiMsg)

	// for (var i = 1 ; i < userLimit ; i++ )
	// {
	// 	if (user[i] != 0){
	// 		for (var x = 0 ; x < 3 ; x++) {
	// 		user[i].send(midiMsg);
	// 		console.log("send to " + user[i].peer);
	// 	} 
	// 	}
	// }

	// midiID++

// Plays the drum note through MIDI output (Apple DLS Synth)
	// if (output)
	// 	output.send( ev.data );





	
// }

// function success( midiAccess ) {
// 	 log.innerText += "MIDI ready!\n";
// 	midi = midiAccess;

// 	inputs = midi.inputs();
// 	log.innerText += inputs.length+" inputs:\n";
// 	for (var i=0;i<inputs.length;i++)
// 		log.innerText += i + ": " + inputs[i].name + "\n";

// 	if (inputs.length>0) {
// 		input = inputs[0];
// 		input.onmessage = handleMIDIMessage;
// 		input.addEventListener("midimessage", handleMIDIMessage);
// 		log.innerText += inputs[0] + "Hooked up first input.\n";
// 	}

// 	outputs = midi.outputs();
// 	log.innerText += outputs.length+" outputs:\n";
// 	for (var i=0;i<outputs.length;i++)
// 		log.innerText += i + ": " + outputs[i].name + "\n";

// 	if (outputs.length) {
// 		output = outputs[0];
// 		output.send( [0xb0, 0x00, 0x7f] );	// If the first device is a Novation Launchpad, this will light it up!
// 	}
// }

// function failure( error ) {
// 	alert( "Failed to initialize MIDI - " + ((error.code==1) ? "permission denied" : ("error code " + error.code)) );
// }



