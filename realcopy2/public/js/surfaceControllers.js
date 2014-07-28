var setController = false
var setVolumeParameter = false 
var controllerArray = []
var parameterToBeMapped = null;

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
		parameterToBeMapped = parameter;
		setController = true;
		console.log('setcontroller has been set to: ' + setController)
	}
}


function setControls(midiInput){
	// log.innerText = ('Midimsg 2 : ' + midiInput[2])
	// log.innerText = ('Midimsg 3 : ' + midiInput[3])
	// if(controllerArray.length !=0){
	// 	for(var i = 0;i<controllerArray.length;i++){
	// 		if(controllerArray[i].ID == midiInput[3] && controllerArray[i].type == midiInput[2]){
	// 			log.innerText = ('You have already registered this controller!!!')
	// 			if(setController){
	// 				setController = false
	// 			}
	// 			return
	// 		}
	// 	}
	// }
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
	controllerArray[controllerArray.length - 1].parameter = String(parameterToBeMapped);
	parameterToBeMapped = null;
	console.log(controllerArray[controllerArray.length - 1].parameter)

	log.innerText = ('the controller number is: ' + controllerArray[controllerArray.length - 1].controllerNum)
	console.log('Number of controllers: ' + controllerArray.length)	
	setController = false;
}

function noteVolume(midiInput){
	var volumeOutput = midiInput[4]/127;
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
		volumeOutput = 0;
	}
	return volumeOutput;
}

function effectControllers(controller, midiInput){
	var max = $(controller.parameter).attr('data-max')
	var min = $(controller.parameter).attr('data-min')
	// console.log(sign)
	var test = $(controller.parameter).attr('data-release3')
	console.log(test)
	$(controller.parameter).val(ConversionScale(midiInput,1*min,max))
	.trigger('change');
	// console.log($(controller.parameter).val())
}

function ConversionScale(midiInput, min, max){
	var y = (((max-min)*midiInput[4])/127) + min
	console.log(y)
	return y;
}

