	var numOfKey = 8
	var rowX = 4
	var rowY = 2 
	var pathLink = []

	var configKey = [];// Saves soundObj in each index in relation to the order of generated button divs,
	var userPad = {

	}
	var beatMsg = []






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
			instPointer:"",
			pathPointer:[],
			noteIndex:0
		};

			configKey[i] = soundObj;
		
		}

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
		sampleID = configKey[arNum]

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
		}
	}

	else if (sampleID.inst == "jazzdrums" || sampleID.inst == "numb") {

		beatMsg[1] = 10
		beatMsg[7] = sampleID.pathPointer

		startSample(sampleID)
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
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
		soundOff = configKey[arNum]
		console.log("mupID = " + soundOff)

if (configKey[arNum].inst == 'square synth') {
		beatMsg[1] = 9
		beatMsg[2] = 'off'

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
		soundOff = configKey[arNum]
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
//   | |  | |  _  /   / /\ \| | |_ |   | ` | | | |  | |  _  /| |  | |  ___/ 
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


function loadDropInstr(arNum){

  if (configKey[arNum].inst == "jazzdrums" || configKey[arNum].inst == "numb"){

var createTheBuffer = function(thePath){
	var loadedBuffer = function(bufferList) {
      configKey[arNum].activeVoice = bufferList
      console.log(configKey[arNum].activeVoice)
    }

    myArrayBuffer = context.createBuffer(2,sampleRate*2,sampleRate)

		bufferLoading = new BufferLoader(
			context,
			thePath,
			loadedBuffer
		);

		bufferLoading.load()
	}

	$.getJSON("js/instruments.json", function(json){
        configKey[arNum].instPointer = json[configKey[arNum].inst].path
		configKey[arNum].pathPointer[0] = String(configKey[arNum].instPointer + "/note-" + configKey[arNum].noteIndex + ".ogg")
		createTheBuffer(configKey[arNum].pathPointer)
	});

  }
}


	function handleDropEvent( event, ui ) 
{
  var draggable = ui.draggable;
  dropID = "#" + $(this).attr('id');
  dragID ="#" + draggable.attr('id');

  if ($(dragID).attr("data-class") == "instrument"){
	  arNum = parseInt($(dropID).attr('id').substr(3,3))
	  configKey[arNum].sound = $(dragID).attr("data-sound");
	  configKey[arNum].inst = $(dragID).attr("data-instrument");
	  configKey[arNum].insType = $(dragID).attr("data-type");
	  configKey[arNum].frequency = $(dragID).attr("data-frequency");
	  configKey[arNum].noteIndex = $(dragID).attr("data-noteIndex");
	  des = $(this).find("p");
	  $(des).text(draggable.find("p").text());

	loadDropInstr(arNum)

		beatMsg[3] = configKey[arNum].sound
		beatMsg[4] = configKey[arNum].inst
		beatMsg[5] = configKey[arNum].insType
		beatMsg[6] = configKey[arNum].frequency
		beatMsg[1] = 11
		beatMsg[7] = configKey[arNum].pathPointer
		beatMsg[8] = arNum
		beatMsg[9] = configKey[arNum].noteIndex

			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
					user[i].send(beatMsg)
				}
			}


  }
}


//  8""""8 8"""88 8   8 8"""8 8""""8    8""""8 8"""" 8"""8 8"""" 8"""8  8""""8 ""8"" 8"""88 8"""8  
//  8      8    8 8   8 8   8 8    8    8    " 8     8   8 8     8   8  8    8   8   8    8 8   8  
//  8eeeee 8    8 8e  8 8e  8 8e   8    8e     8eeee 8e  8 8eeee 8eee8e 8eeee8   8e  8    8 8eee8e 
//      88 8    8 88  8 88  8 88   8    88  ee 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  e   88 8    8 88  8 88  8 88   8    88   8 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  8eee88 8eeee8 88ee8 88  8 88eee8    88eee8 88eee 88  8 88eee 88   8 88   8   88  8eeee8 88   8 

  
// need to add velocity measure

 function startSample(soundObj, vel) {

console.log(soundObj.activeVoice[0])

var source = context.createBufferSource()
source.buffer = soundObj.activeVoice[0]

source.connect(bus[0].input)
source.start(0)

source.onended = function(){
	source.stop()
  }

}                                                                     


function startOsc(soundObj, vel) {

if (soundObj.inst == "square synth") {
		soundObj.activeVoice = context.createOscillator();
		gainNode = context.createGain();
		// soundObj.activeVoice.connect(context.destination);
		soundObj.activeVoice.connect(bus[0].input);
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
var mappingActive = false


function h2d(h) {return parseInt(h,16);}

function handleMIDIMessage(ev) 
{

if (mappingActive) {

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
				$("#btn" + upPress).css({
				backgroundColor:"#00FF01"
				});

			buttonPress++;
			upPress++;
		}
		else {	
			noteDownArray[downPress] = pressArray
			console.log(noteDownArray)
			buttonPress++;
			downPress++;
		}	

		if (buttonPress > numOfKey * 2) {
			
			setTimeout(function(){
			  for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			  }
			}, 300)

			setTimeout(function(){
			  for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#00FF01"
				});
			  }
			}, 600)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			}
			}, 900)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#00FF01"
				});
			}
			}, 1200)

			setTimeout(function(){
				for (var i = 0 ; i <= upPress ; i++){
				$("#btn" + i).css({
				backgroundColor:"#FFFFFF"
				});
			}
			}, 1500)	
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
						sampleID = configKey[arNum]
		

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

	}
}
				else if (sampleID.inst == "jazzdrums" || sampleID.inst == "numb") {

if (ev.data[2] != 0 && ev.data[0] == 153){

		beatMsg[1] = 10
		beatMsg[7] = sampleID.pathPointer
		beatMsg[8] = arNum
		startSample(sampleID)
			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
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
				soundOff = configKey[arNum]
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

} // mappingActive


var playActualMIDI = true

	if (ev.data[0] == 153 || ev.data[0] == 143){
		console.log('look in here!')
		playActualMIDI = false
	}

if (playActualMIDI && ev.data[2] != 0){
		midiMsg[0] = midiID
		midiMsg[1] = 1 ;
		midiMsg[2] = ev.data[0].toString(16) ;
		midiMsg[3] = ev.data[1].toString(16) ;
		midiMsg[4] = ev.data[2];

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
	console.log(midi)
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


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// START MIDI

runTest();
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



$('#testMap').click(function(){
	if (!mappingActive){
		console.log('works')
		mappingActive = true
	}

	else if (mappingActive){
	noteUpArray = [];
	noteDownArray = [];
 	buttonPress = 1;
	downPress = 0;
	upPress = 0;
	}
})






	

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
// 	if (output)
// 		output.send( ev.data );





	
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



