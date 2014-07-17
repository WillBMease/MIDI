var setFader = false
var controllerArray = []

function assignControllers(){
	if (!log){
		log = document.getElementById("log");
	}
	if(midi == null){
		log.innerText = ('No midi device found!!');
		console.log('No midi device found!!')
	}
	else{
		log.innerText = ('Please move your desired fader')
		setFader = true;
		console.log('setFader has been set to: ' + setFader)
	}
}

function setControls(midiInput){
	log.innerText = ('Midimsg 2 : ' + midiInput[2])
	log.innerText = ('Midimsg 3 : ' + midiInput[3])
	if(controllerArray.length !=0){
		for(var i = 0;i<controllerArray.length;i++){
			if(controllerArray[i].ID == midiInput[3] && controllerArray[i].type == midiInput[2]){
				log.innerText = ('You have already registered this controller!!!')
				return
			}
		}
	}
	var fader  = {
			id:"",
			type:"",
			velocity:"",
			controllerNum:""
	};

	controllerArray.push(fader);
	console.log("controllerArray length: " + controllerArray.length)
	controllerArray[controllerArray.length - 1].type = midiInput[2]
	controllerArray[controllerArray.length - 1].ID = midiInput[3]
	controllerArray[controllerArray.length - 1].controllerNum = controllerArray.length - 1;
	controllerArray[controllerArray.length - 1].velocity = midiInput[4]
	console.log('the fader id is: ' + controllerArray[controllerArray.length - 1].ID)

	for(var i = 0;i<controllerArray.length;i++){
		console.log('the fader id for ' + i + ' is: ' + controllerArray[i].ID + ' The type is for ' + i + ' is: ' + controllerArray[i].type)
		console.log('the controllerNum is: ' + controllerArray[i].controllerNum)
	}

	log.innerText = ('the controller number is: ' + controllerArray[controllerArray.length - 1].controllerNum)
	console.log('Number of faders: ' + controllerArray.length)	
	setFader = false;
}

function freqConversion(midiInput){
	var x = 20000
}