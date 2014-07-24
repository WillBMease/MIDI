var setController = false
var setVolumeParameter = false 
// var setReverbLevelParameter = false
// var setReverbWetLevelParameter = false
// var setFilterFrequencyParameter = false
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

	// if(setVolumeParameter){
	// 	for(var i = 0;i<controllerArray.length;i++){
	// 		if(controllerArray[i].parameter == 'volume'){
	// 			controllerArray[i].parameter = "";
	// 			console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 			log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 		}
	// 	}
	// 	controllerArray[controllerArray.length - 1].parameter = 'volume'
	// 	setVolumeParameter = false
	// }

	// if(setReverbLevelParameter){
	// 	for(var i = 0;i<controllerArray.length;i++){
	// 		if(controllerArray[i].parameter = 'reverbLevel'){
	// 			controllerArray[i].parameter = "";
	// 			console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 			log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 		}
	// 	}
	// 	controllerArray[controllerArray.length - 1].parameter = 'reverbLevel'
	// 	setReverbLevelParameter = false
	// }

	// if(setReverbWetLevelParameter){
	// 	for(var i = 0;i<controllerArray.length;i++){
	// 		if(controllerArray[i].parameter = 'reverbWetLevel'){
	// 			controllerArray[i].parameter = "";
	// 			console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 			log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 		}
	// 	}
	// 	controllerArray[controllerArray.length - 1].parameter = 'reverbWetLevel'
	// 	setReverbWetLevelParameter = false
	// }

	// if(setFilterFrequencyParameter){
	// 	for(var i = 0; i<controllerArray.length;i++){
	// 		if(controllerArray[i].parameter == 'filterFrequency'){
	// 			controllerArray[i].parameter = "";
	// 			console.log('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 			log.innerText = ('overriding the parameter for controller: ' + controllerArray[i].controllerNum)
	// 		}
	// 	}
	// 	controllerArray[controllerArray.length - 1].parameter = 'filterFrequency'
	// 	setFilterFrequencyParameter = false
	// }

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
	console.log(max)
	$(controller.parameter).val(ConversionScale(midiInput,min,max))
	.trigger('change');
	console.log($(controller.parameter).val())
}

// function setReverbLevel(midiInput){
// 	console.log('setReverbLevel called')
// 	$("#reverb-level").val(ConversionScale(midiInput,0,10))
// 	.trigger('change');
// }

// function setReverbWetLevel(midiInput){
// 	console.log('setReverbWetLevel called')
// 	$("#reverb-wetLevel").val(ConversionScale(controllerArray[i],0,10))
// 	.trigger('change');
// }

// function setFilterFrequency(midiInput){
// 	// console.log('setFilterFrequency called')
// 	// for(var i = 0;i<controllerArray.length;i++){
// 	// 	if(controllerArray[i].parameter == 'filterFrequency'){
// 	// 		$("#filter-frequency").val(ConversionScale(controllerArray[i],20,22050))
// 	// 		.trigger('change');
// 	// 	}
// 	// }
// }


function ConversionScale(midiInput, min, max){
	//var absMin = Math.abs(min)
	var y = (((max-min)*midiInput[4])/127) + min
	console.log(y)
	return y;
}

