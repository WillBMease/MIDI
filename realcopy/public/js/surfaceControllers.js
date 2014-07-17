// var numOfFaders = 1;
var setFader = false
var faderArray = []


function assignControllers(){
	if (!log){
		log = document.getElementById("log");
	}
	if(midi == null){
		log.innerText = ('No midi device found!!');
		console.log('No midi device found!!')
	}
	else{
		// numOfFaders = numOfFaders +1
		log.innerText = ('Please move your desired fader')
		setFader = true;
		console.log('setFader has been set to: ' + setFader)
	}
}

function setControls(midiInput){
	var output;
	//var fader.id = midiInput[3]
	log.innerText = ('Midimsg 2 : ' + midiInput[2])
	log.innerText = ('Midimsg 3 : ' + midiInput[3])
	var fader  = {
			id:"",
			type:"",
			velocity:"",
			controllerNum:""
		};
		//faderArray.append(fader);
		faderArray.push(fader);
		console.log("faderArray length: " + faderArray.length)
		faderArray[faderArray.length - 1].type = midiInput[2]
		faderArray[faderArray.length - 1].ID = midiInput[3]
		faderArray[faderArray.length - 1].controllerNum = faderArray.length - 1;
		faderArray[faderArray.length - 1].velocity = midiInput[4]
		console.log('the fader id is: ' + faderArray[faderArray.length - 1].ID)

		for(var i = 0;i<faderArray.length;i++){
			console.log('the fader id for ' + i + ' is: ' + faderArray[i].ID + ' The type is for ' + i + ' is: ' + faderArray[i].type)
			console.log('the controllerNum is: ' + faderArray[i].controllerNum)
		}
	//}
	// if(faderArray.length == 1){
	// 	//console.log("faderArray length: " + faderArray.length)
	// 	faderArray[0].type = midiInput[2]
	// 	faderArray[0].ID = midiInput[3]
	// 	faderArray[0].velocity = midiInput[4]
	// 	console.log('the fader id is: ' + faderArray[0].ID)
	// 	//faderArray.length++;
	// 	var fader  = {
	// 		id:"",
	// 		type:"",
	// 		velocity:""
	// 	};
	// 	//faderArray.append(fader);
	// 	faderArray.push(fader);
	// 	console.log("faderArray length: " + faderArray.length)
	// }
	// else{
		
	// 	faderArray[faderArray.length - 1].type = midiInput[2]
	// 	faderArray[faderArray.length - 1].ID = midiInput[3]
	// 	faderArray[faderArray.length - 1].velocity = midiInput[4]
	// 	console.log('the fader id is: ' + faderArray[faderArray.length - 1].ID)
	// }
	console.log('Number of faders: ' + faderArray.length)

	setFader = false;
}

