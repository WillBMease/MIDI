$('#synth').click(function(){
	sampleActive = false
	console.log('synth is here!')
})

$('.changeSynth1').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc1 = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc1 = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc1 = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc1 = 'sawtooth'
	}
})

$('.changeSynth2').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc2 = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc2 = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc2 = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc2 = 'sawtooth'
	}
})

$('.changeSynth3').click(function(){
	if ($(this).attr('id') == 'sine'){
		osc3 = 'sine'
	}
	else if ($(this).attr('id') == 'square'){
		osc3 = 'square'
	}
	else if($(this).attr('id') == 'triangle'){
		osc3 = 'triangle'
	}
	else if($(this).attr('id') == 'sawtooth'){
		osc3 = 'sawtooth'
	}
})


function createOscillator(index, freq, key) {
    var attack = 100
    synthKey[index][key[3]].decay = 150
    synthKey[index][key[3]].gain = context.createGain()

    synthKey[index][key[3]].osc1 = context.createOscillator();
	synthKey[index][key[3]].osc2 = context.createOscillator()
	synthKey[index][key[3]].osc3 = context.createOscillator()
        
    synthKey[index][key[3]].gain.connect(bus[index].input);
    synthKey[index][key[3]].gain.gain.setValueAtTime(0, context.currentTime);
    synthKey[index][key[3]].gain.gain.linearRampToValueAtTime(1, context.currentTime + attack / 1000);

	synthKey[index][key[3]].osc1.type = osc1
	synthKey[index][key[3]].osc2.type = osc2
	synthKey[index][key[3]].osc3.type = osc3

	synthKey[index][key[3]].osc1.connect(synthKey[index][key[3]].gain)
	synthKey[index][key[3]].osc2.connect(synthKey[index][key[3]].gain)
	synthKey[index][key[3]].osc3.connect(synthKey[index][key[3]].gain)
   
    synthKey[index][key[3]].osc1.frequency.value = freq
    synthKey[index][key[3]].osc2.frequency.value = freq
    synthKey[index][key[3]].osc3.frequency.value = freq

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
			gain:"",
			decay:"",
		};
		synthKey[index][key[3]] = soundObj
}

if (!synthKey[index][key[3]].isActive){

	if (midi){
		mappedkey = masterConversion(key)
		console.log(mappedKey)
		console.log(key)
	}
	else if (!midi){
	transpose(index, key[3]);

	var check = keyboardMap(key[3]) ;

	mappedKey = keyboardMap(key[3]) + (octave[index]*12);
}

if(check != 200  && check != 49 && check != 192){

    var freq = 32.703 * Math.pow(1.059463094359, mappedKey - 12)
console.log(mappedKey)
	createOscillator(index, freq, key)

	}

}

}

function stopSynth(index, key){
	
synthKey[index][key[3]].gain.gain.linearRampToValueAtTime(0, context.currentTime + synthKey[index][key[3]].decay / 1000);

setTimeout(function(){
if(synthKey[index][key[3]].tailActive){
	synthKey[index][key[3]].osc1.stop()
	synthKey[index][key[3]].osc2.stop()
	synthKey[index][key[3]].osc3.stop()
	synthKey[index][key[3]].gain.disconnect()
	synthKey[index][key[3]].tailActive = false
	}
}, synthKey[index][key[3]].decay)

	synthKey[index][key[3]].isActive = false
}
