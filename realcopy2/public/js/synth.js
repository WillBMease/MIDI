var oscChg = []
	oscChg[0] = 
	oscChg[1] = '17'
	// oscChg[2] = 




$('#synth').click(function(){
	sampleActive = false
	globalOctave = 5
	console.log('synth is here!')
})

$('.changeSynth1').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc1[0] = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc1[0] = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc1[0] = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc1[0] = 'sawtooth'
	}

	oscChg[2] = 'type'
	oscChg[3] = '1'
	oscChg[4] = osc1[0]
	outgoingSynthChange(oscChg)
})

$('.changeSynth2').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc2[0] = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc2[0] = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc2[0] = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc2[0] = 'sawtooth'
	}

	oscChg[2] = 'type'
	oscChg[3] = '2'
	oscChg[4] = osc2[0]
	outgoingSynthChange(oscChg)
})

$('.changeSynth3').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc3[0] = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc3[0] = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc3[0] = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc3[0] = 'sawtooth'
	}

	oscChg[2] = 'type'
	oscChg[3] = '3'
	oscChg[4] = osc3[0]
	outgoingSynthChange(oscChg)
})


function createOscillator(index, freq, key) {

    synthKey[index][key[3]].gain1 = context.createGain()
    synthKey[index][key[3]].gain2 = context.createGain()
    synthKey[index][key[3]].gain3 = context.createGain()

    synthKey[index][key[3]].osc1 = context.createOscillator();
	synthKey[index][key[3]].osc2 = context.createOscillator()
	synthKey[index][key[3]].osc3 = context.createOscillator()
        
    synthKey[index][key[3]].gain1.connect(bus[index].input);
    synthKey[index][key[3]].gain2.connect(bus[index].input);
    synthKey[index][key[3]].gain3.connect(bus[index].input);

    synthKey[index][key[3]].gain1.gain.value = 0 //oscVol1[index]
    synthKey[index][key[3]].gain2.gain.value = 0 //oscVol2[index]
    synthKey[index][key[3]].gain3.gain.value = 0 //oscVol3[index]

    synthKey[index][key[3]].gain1.gain.setValueAtTime(0, context.currentTime);
    synthKey[index][key[3]].gain2.gain.setValueAtTime(0, context.currentTime);
    synthKey[index][key[3]].gain3.gain.setValueAtTime(0, context.currentTime);

    synthKey[index][key[3]].gain1.gain.linearRampToValueAtTime(oscVol1[index], context.currentTime + attack1[index] / 1000);
    synthKey[index][key[3]].gain2.gain.linearRampToValueAtTime(oscVol2[index], context.currentTime + attack2[index] / 1000);
    synthKey[index][key[3]].gain3.gain.linearRampToValueAtTime(oscVol3[index], context.currentTime + attack3[index] / 1000);

	synthKey[index][key[3]].osc1.type = osc1[index]
	synthKey[index][key[3]].osc2.type = osc2[index]
	synthKey[index][key[3]].osc3.type = osc3[index]

	synthKey[index][key[3]].osc1.connect(synthKey[index][key[3]].gain1)
	synthKey[index][key[3]].osc2.connect(synthKey[index][key[3]].gain2)
	synthKey[index][key[3]].osc3.connect(synthKey[index][key[3]].gain3)
   
    synthKey[index][key[3]].osc1.frequency.value = freq[1] - detune1[index]
    synthKey[index][key[3]].osc2.frequency.value = freq[2] - detune2[index]
    synthKey[index][key[3]].osc3.frequency.value = freq[3] - detune3[index]

    synthKey[index][key[3]].osc1.start(0)
    synthKey[index][key[3]].osc2.start(0)
    synthKey[index][key[3]].osc3.start(0)

    synthKey[index][key[3]].isActive = true
    synthKey[index][key[3]].tailActive = true
}


function playSynth(index, key, midi){
 var mappedKey
if (synthKey[index][key[3]] == null){
	soundObj = {
			isActive: false,
			tailActive: false,
			osc1:"",
			osc2:"",
			osc3:"",
			gain1:"",
			gain2:"",
			gain3:"",
		};
		synthKey[index][key[3]] = soundObj
}

if (!synthKey[index][key[3]].isActive){

	if (synthKey[index][key[3]].tailActive){
    // synthKey[index][key[3]].gain1.gain.setValueAtTime(0, context.currentTime);
    // synthKey[index][key[3]].gain2.gain.setValueAtTime(0, context.currentTime);
    // synthKey[index][key[3]].gain3.gain.setValueAtTime(0, context.currentTime);
	synthKey[index][key[3]].gain1.gain.cancelScheduledValues(1, context.currentTime);
    synthKey[index][key[3]].gain2.gain.cancelScheduledValues(1, context.currentTime);
    synthKey[index][key[3]].gain3.gain.cancelScheduledValues(1, context.currentTime);
		
		synthKey[index][key[3]].osc1.stop()
		synthKey[index][key[3]].osc2.stop()
		synthKey[index][key[3]].osc3.stop()
		synthKey[index][key[3]].gain1.disconnect()
		synthKey[index][key[3]].gain2.disconnect()
		synthKey[index][key[3]].gain3.disconnect()
		synthKey[index][key[3]].tailActive = false
	}

	if (key[1] == 100){
		mappedKey = key[3]
	}

	else if (midi){
		mappedKey = masterConversion(key)
		console.log(mappedKey)
	}
	else if (!midi){
	transpose(index, key[3]);

	var check = keyboardMap(key[3]) ;
	mappedKey = keyboardMap(key[3]) + (octave[index]*12);
}

if(check != 200  && check != 49 && check != 192){

	var frequency = 32.703 * Math.pow(1.059463094359, mappedKey - 12)
    var freq = []
    freq[1] = frequency
    freq[2] = frequency
    freq[3] = frequency
	createOscillator(index, freq, key)

	}

}

}

function stopSynth(index, key){

var highDecay = decay1[index]

if (highDecay < decay2[index])
	highDecay = decay2[index]
if (highDecay < decay3[index])
	highDecay = decay3[index]

	synthKey[index][key[3]].gain1.gain.cancelScheduledValues(0, context.currentTime);
    synthKey[index][key[3]].gain2.gain.cancelScheduledValues(0, context.currentTime);
    synthKey[index][key[3]].gain3.gain.cancelScheduledValues(0, context.currentTime);

    // synthKey[index][key[3]].gain1.gain.setValueAtTime(0, context.currentTime);
    // synthKey[index][key[3]].gain2.gain.setValueAtTime(0, context.currentTime);
    // synthKey[index][key[3]].gain3.gain.setValueAtTime(0, context.currentTime);

synthKey[index][key[3]].gain1.gain.linearRampToValueAtTime(0, context.currentTime + decay1[index] / 1000);
synthKey[index][key[3]].gain2.gain.linearRampToValueAtTime(0, context.currentTime + decay2[index] / 1000);
synthKey[index][key[3]].gain3.gain.linearRampToValueAtTime(0, context.currentTime + decay3[index] / 1000);

// setTimeout(function(){
// 	if (synthKey[index][key[3]].tailActive){
// 		synthKey[index][key[3]].osc1.stop()
// 		synthKey[index][key[3]].osc2.stop()
// 		synthKey[index][key[3]].osc3.stop()
// 		synthKey[index][key[3]].gain1.disconnect()
// 		synthKey[index][key[3]].gain2.disconnect()
// 		synthKey[index][key[3]].gain3.disconnect()
// 		synthKey[index][key[3]].tailActive = false
// 	}
// }, highDecay)

	synthKey[index][key[3]].isActive = false
}

function outgoingSynthChange(oMsg){
	for (var i = 1 ; i < userLimit ; i++){
		if (user[i] != 0)
			user[i].send(oMsg)
	}
}




