	var numOfKey = []
	var rowX
	var rowY
	var pathLink = []
	var userPad = {}
	var beatMsg = []
	var beatID = 0

	for (var i = 0 ; i < userLimit ; i++){
		userPad[i] = []
	}





//////////////////////////////////////////////////////////////////////////////////
$(function(){


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
			numOfKey[0] = rowX * rowY
			// console.log(numOfKey[0])
		// generate block container elements to #divcontainer
	for (i = 0; i <= numOfKey[0]-1; i++) {

		$('<div/>', {
	    'id':"btn" + i,
	    'class':'genDiv',

	}).appendTo('#dropcontainer');


		$('</p>', {
	    'id':"p" + i,
	    'class':'genText',

	}).appendTo("#btn"+i);

	};


////dynamically sizing gendivs based on number of keys


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

		//fill array with placeholder values
		for (i = 0; i <= numOfKey[0]-1; i++) {
		console.log('its here!')
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
			userPad[0][i] = soundObj;

			console.log(userPad[0][i])
		
		}

	//Mouse Event Handlers
		


	$(".genDiv").mousedown(function(){

		$(this).css({

			// backgroundColor:"#00FF01"
			backgroundColor: "#92F5FD"

		});

		thisID = $(this).attr("id");
		arNum = parseInt(thisID.substr(3,3))
		sampleID = userPad[0][arNum]

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

		startSample(0, arNum)
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
		soundOff = userPad[0][arNum]
		console.log("mupID = " + soundOff)

if (userPad[0][arNum].inst == 'square synth') {
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
		soundOff = userPad[0][arNum]
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


function loadDropInstr(index, arNum){

var createTheBuffer = function(thePath){
	var loadedBuffer = function(bufferList) {
      userPad[index][arNum].activeVoice = bufferList
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
        userPad[index][arNum].instPointer = json[userPad[index][arNum].inst].path
		userPad[index][arNum].pathPointer[0] = String(userPad[index][arNum].instPointer + "/note-" + userPad[index][arNum].noteIndex + ".ogg")
		createTheBuffer(userPad[index][arNum].pathPointer)
	});

 }


	function handleDropEvent( event, ui ) 
{
  var draggable = ui.draggable;
  dropID = "#" + $(this).attr('id');
  dragID ="#" + draggable.attr('id');

  if ($(dragID).attr("data-class") == "sample"){
	  arNum = parseInt($(dropID).attr('id').substr(3,3))
	  userPad[0][arNum].sound = $(dragID).attr("data-sound");
	  userPad[0][arNum].inst = $(dragID).attr("data-instrument");
	  userPad[0][arNum].insType = $(dragID).attr("data-type");
	  userPad[0][arNum].frequency = $(dragID).attr("data-frequency");
	  userPad[0][arNum].noteIndex = $(dragID).attr("data-noteIndex");
	  des = $(this).find("p");
	  $(des).text(draggable.find("p").text());
		
		beatMsg[1] = 11
		beatMsg[3] = userPad[0][arNum].sound
		beatMsg[4] = userPad[0][arNum].inst
		beatMsg[5] = userPad[0][arNum].insType
		beatMsg[6] = userPad[0][arNum].frequency
		beatMsg[7] = userPad[0][arNum].pathPointer
		beatMsg[8] = arNum
		beatMsg[9] = userPad[0][arNum].noteIndex

			for (var i = 1 ; i < userLimit ; i++){
				if (user[i] != 0) {
					user[i].send(beatMsg)
				}
			}

	loadDropInstr(0, arNum)

  }
}


//  8""""8 8"""88 8   8 8"""8 8""""8    8""""8 8"""" 8"""8 8"""" 8"""8  8""""8 ""8"" 8"""88 8"""8  
//  8      8    8 8   8 8   8 8    8    8    " 8     8   8 8     8   8  8    8   8   8    8 8   8  
//  8eeeee 8    8 8e  8 8e  8 8e   8    8e     8eeee 8e  8 8eeee 8eee8e 8eeee8   8e  8    8 8eee8e 
//      88 8    8 88  8 88  8 88   8    88  ee 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  e   88 8    8 88  8 88  8 88   8    88   8 88    88  8 88    88   8 88   8   88  8    8 88   8 
//  8eee88 8eeee8 88ee8 88  8 88eee8    88eee8 88eee 88  8 88eee 88   8 88   8   88  8eeee8 88   8 

  
// need to add velocity measure

 function startSample(index, arNum) {

var source = context.createBufferSource()
source.buffer = userPad[index][arNum].activeVoice[0]

source.connect(bus[index].input)
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

 

