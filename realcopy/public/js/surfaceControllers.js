var setController = false
var setVolumeParameter = false 
var setFilterParameter = false
var controllerArray = []

// function assignControllers(){
// 	if (!log){
// 		log = document.getElementById("log");
// 	}
// 	if(midi == null){
// 		log.innerText = ('No midi device found!!');
// 		console.log('No midi device found!!')
// 	}
// 	else{
// 		log.innerText = ('Please move your desired controller')
// 		setController = true;
// 		console.log('setcontroller has been set to: ' + setController)
// 	}
// }

function assignControllers(parameter){
	if (!log){
		log = document.getElementById("log");
	}
	if(midi == null){
		log.innerText = ('No midi device found!!');
		console.log('No midi device found!!')
	}
	else{
		log.innerText = ('Please move your desired controller for: ' + parameter)
		setController = true;
		switch(parameter){
			case 'volume' : log.innerText = "Setting Volume as controller parameter"
			setVolumeParameter = true;
			break;

			case 'filter' : log.innerText = "Setting filter as controller parameter"
			setFilterParameter = true;
			break;
		}
		
		console.log('setcontroller has been set to: ' + setController)
	}
}


function setControls(midiInput){
	// log.innerText = ('Midimsg 2 : ' + midiInput[2])
	// log.innerText = ('Midimsg 3 : ' + midiInput[3])
	if(controllerArray.length !=0){
		for(var i = 0;i<controllerArray.length;i++){
			if(controllerArray[i].ID == midiInput[3] && controllerArray[i].type == midiInput[2]){
				log.innerText = ('You have already registered this controller!!!')
				if(setController){
					setController = false
				}

				if(setVolumeParameter){
					setVolumeParameter = false
				}

				if(setFilterParameter){
					setFilterParameter = false
				}

				return
			}
		}
	}
	var controller  = {
			id:"",
			type:"",
			velocity:"",
			controllerNum:"",
			parameter:""
	};

	controllerArray.push(controller);
	console.log("controllerArray length: " + controllerArray.length)
	controllerArray[controllerArray.length - 1].type = midiInput[2]
	controllerArray[controllerArray.length - 1].ID = midiInput[3]
	controllerArray[controllerArray.length - 1].controllerNum = controllerArray.length - 1;
	controllerArray[controllerArray.length - 1].velocity = midiInput[4]

	///////////Setting Parameters//////////////////////
	if(setVolumeParameter){
		for(var i = 0;i<controllerArray.length;i++){
			if(controllerArray[i].parameter == 'volume'){
				controllerArray[i].parameter = "";
				console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
				log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
			}
		}
		controllerArray[controllerArray.length - 1].parameter = 'volume'
		setVolumeParameter = false
	}

	if(setFilterParameter){
		for(var i = 0;i<controllerArray.length;i++){
			if(controllerArray[i].parameter = 'filter'){
				controllerArray[i].parameter = "";
				console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
				log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
			}
		}
		controllerArray[controllerArray.length - 1].parameter = 'filter'
		setFilterParameter = false
	}

	//controllerArray[controllerArray.length - 1].parameter = mappedParameter
	console.log('the controller id is: ' + controllerArray[controllerArray.length - 1].ID)

	// for(var i = 0;i<controllerArray.length;i++){
	// 	console.log('the controller id for ' + i + ' is: ' + controllerArray[i].ID + ' The type is for ' + i + ' is: ' + controllerArray[i].type)
	// 	console.log('the controllerNum is: ' + controllerArray[i].controllerNum)
	// }

	log.innerText = ('the controller number is: ' + controllerArray[controllerArray.length - 1].controllerNum)
	console.log('Number of controllers: ' + controllerArray.length)	
	setController = false;
}

// function assignControllerParameters(){
// 	if (!log){
// 		log = document.getElementById("log");
// 	}
// 	if(midi == null){
// 		log.innerText = ('No midi device found!!');
// 		console.log('No midi device found!!')
// 	}
// 	else{
// 		log.innerText = ('Please move your desired controller for Volume')
// 		setVolumeParameter = true;
// 		console.log('setVolumeParameter has been set to: ' + setVolumeParameter )
// 	}
// }

// function assignVolume(midiInput){
// 	console.log('assignVolume has been called')
// 	if(controllerArray.length < 1){
// 		log.innerText = ('No registered Controllers!')
// 		setVolumeParameter = false
// 		return
// 	}
// 	for(var i = 0;i<controllerArray.length;i++){
// 		if(midiInput[2] == controllerArray[i].type && midiInput[3] == controllerArray[i].ID){
// 			controllerArray[i].parameter = 'volume'
// 			controllerArray[i].velocity = midiInput[4]
// 			setVolumeParameter = false
// 			return;
// 		}
// 	}
// }

function noteVolume(midiInput){
	var volumeOutput = 0.5;
	// console.log('called noteVolume')	
	if(midiInput[4] != 0){
		for(var i = 0;i<controllerArray.length;i++){
			// console.log(controllerArray[i].parameter)
			if(controllerArray[i].parameter == 'volume'){
				volumeOutput = ConversionScale(controllerArray[i],0,1)
				//console.log(volumeOutput)
			}
		}
	}
	else{
		volumeOutput =0;
	}
	return volumeOutput;
}

function setFilterFreq(midiInput){
	var frequency = 500
	for(var i = 0;i<controllerArray.length;i++){
		if(controllerArray[i].parameter == 'filter'){
			frequency = ConversionScale(controllerArray[i],0,20000)
			console.log(frequency)
			return frequency;
		}
	}
}

function ConversionScale(controller, min, max){
	var y = (((max-min)*controller.velocity)/127) + min
	//console.log(y)
	return y;
}

