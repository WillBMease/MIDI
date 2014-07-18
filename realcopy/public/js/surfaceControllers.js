var setController = false
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
		log.innerText = ('Please move your desired controller')
		setController = true;
		console.log('setcontroller has been set to: ' + setController)
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
	var controller  = {
			id:"",
			type:"",
			velocity:"",
			controllerNum:""
	};

	controllerArray.push(controller);
	console.log("controllerArray length: " + controllerArray.length)
	controllerArray[controllerArray.length - 1].type = midiInput[2]
	controllerArray[controllerArray.length - 1].ID = midiInput[3]
	controllerArray[controllerArray.length - 1].controllerNum = controllerArray.length - 1;
	controllerArray[controllerArray.length - 1].velocity = midiInput[4]
	console.log('the controller id is: ' + controllerArray[controllerArray.length - 1].ID)

	for(var i = 0;i<controllerArray.length;i++){
		console.log('the controller id for ' + i + ' is: ' + controllerArray[i].ID + ' The type is for ' + i + ' is: ' + controllerArray[i].type)
		console.log('the controllerNum is: ' + controllerArray[i].controllerNum)
	}

	log.innerText = ('the controller number is: ' + controllerArray[controllerArray.length - 1].controllerNum)
	console.log('Number of controllers: ' + controllerArray.length)	
	setController = false;
}



function ConversionScale(controller, min, max){
	var y = (((max-min)*controller.velocity)/127) + min
	console.log(y)
	return y;
}

// function ConversionScale1(controller){
// 	var y = controller.velocity/127
// 	console.log(y)
// 	return y;
// }

// function ConversionScale10(controller){
// 	var y = (10*controller.velocity)/127
// 	console.log(y)
// 	return y;
// }

// function ConversionScale100(controller){
// 	var y = (100*controller.velocity)/127
// 	console.log(y)
// 	return y;
// }

// function ConversionScale1k(controller){
// 	var y = (1000*controller.velocity)/127
// 	console.log(y)
// 	return y;
// }

// function ConversionScale10k(controller){
// 	var y = (10000*controller.velocity)/127
// 	console.log(y)
// 	return y;
// }

// function ConversionScale20k(controller){
// 	var y = (20000*controller.velocity)/127
// 	console.log(y)
// 	return y;
// }
