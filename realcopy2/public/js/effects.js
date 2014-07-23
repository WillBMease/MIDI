var chorus = []
var delay = []
var overdrive = []
var phaser = []
var cabinet = []
var wahwah = []
var tremolo = []
var filter = []
var reverb = []
var compressor = []

var effectMsg = []
effectMsg[1] = 8

for (var i = 0 ; i < userLimit ; i++) {
	chorus[i] = 0
	delay[i] = 0
	overdrive[i] = 0
	phaser[i] = 0
	cabinet[i] = 0
	wahwah[i] = 0
	tremolo[i] = 0
	filter[i] = 0
	reverb[i] = 0
	compressor[i] = 0
}


for (var i = 0 ; i < userLimit ; i++) {

reverb[i] = new tuna.Convolver({
                    highCut: 22050,                         //20 to 22050
                    lowCut: 20,                             //20 to 22050
                    dryLevel: 1,                            //0 to 1+
                    wetLevel: 1,                            //0 to 1+
                    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: 1
                });

chorus[i] = new tuna.Chorus({
                 rate: 1.5,         //0.01 to 8+
                 feedback: 0.2,     //0 to 1+
                 delay: 0.5,     //0 to 1
                 bypass: 1          //the value 1 starts the effect as bypassed, 0 or 1
             });

delay[i] = new tuna.Delay({
                feedback: 0.4,    //0 to 1+
                delayTime: 125,    //how many milliseconds should the wet signal be delayed? 
                wetLevel: 0.25,    //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 13000,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: 1
            });

overdrive[i] = new tuna.Overdrive({
                    outputGain: 0.4,         //0 to 1+
                    drive: 0.1,              //0 to 1
                    curveAmount: 0.3,          //0 to 1
                    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
                    bypass: 1
                });

phaser[i] = new tuna.Phaser({
                 rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
                 depth: 0.3,                    //0 to 1
                 feedback: 0.2,                 //0 to 1+
                 stereoPhase: 30,               //0 to 180
                 baseModulationFrequency: 700,  //500 to 1500
                 bypass: 1
             });

cabinet[i] = new tuna.Cabinet({
                  makeupGain: 15,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: 1
              });

wahwah[i] = new tuna.WahWah({
                 automode: true,                //true/false
                 baseFrequency: 0.5,            //0 to 1
                 excursionOctaves: 4,           //1 to 6
                 sweep: 0.3,                    //0 to 1
                 resonance: 80,                 //1 to 100
                 sensitivity: 0.8,              //-1 to 1
                 bypass: 1
             });

tremolo[i] = new tuna.Tremolo({
                  intensity: 0.3,    //0 to 1
                  rate: 0.1,         //0.001 to 8
                  stereoPhase: 0,    //0 to 180
                  bypass: 1
              });

// basic filter
filter[i] = new tuna.Filter({
                 frequency: 20,         //20 to 22050
                 Q: 1,                  //0.001 to 100
                 gain: 0,               //-40 to 40
                 bypass: 1,             //0 to 1+
                 filterType: 0,         //0 to 7, corresponds to the filter types in the native filter node: lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass in that order
                 bypass: 1
             });

compressor[i] = new tuna.Compressor({
                     threshold: 0.5,    //-100 to 0
                     makeupGain: 1,     //0 and up
                     attack: 1,         //0 to 1000
                     release: 0,        //0 to 3000
                     ratio: 4,          //1 to 20
                     knee: 5,           //0 to 40
                     automakeup: true,  //true/false
                     bypass: 1
                 });

}

for (var i = 0 ; i < 1 ; i++) {

		chorus[i].rate = $("#chorus-rate").val()/10;
		chorus[i].feedback = $("#chorus-feedback").val()/10;
		chorus[i].delay = $("#chorus-delay").val()/100;
		delay[i].feedback = $("#delay-feedback").val()/100;
		delay[i].delayTime = $("#delay-delayTime").val();
		delay[i].wetLevel = $("#delay-wetLevel").val()/10;
		delay[i].dryLevel = $("#delay-dryLevel").val()/10;
		delay[i].cutoff = $("#delay-cutoff").val();
}

function reverbEffect(index) {
	if (reverb[index].bypass == 0)
		reverb[index].bypass = 1
	else if (reverb[index].bypass == 1)
		reverb[index].bypass = 0

	console.log(reverb[index].highCut)
}

function wahEffect(index) {
	if (wahwah[index].bypass == 0)
		wahwah[index].bypass = 1
	else if (wahwah[index].bypass == 1)
		wahwah[index].bypass = 0
}

function overdriveEffect(index) {
	if (overdrive[index].bypass == 0)
		overdrive[index].bypass = 1
	else if (overdrive[index].bypass == 1)
		overdrive[index].bypass = 0
}

function chorusEffect(index) {
	if (chorus[index].bypass == 0)
		chorus[index].bypass = 1
	else if (chorus[index].bypass == 1)
		chorus[index].bypass = 0
}

function phaserEffect(index) {
	if (phaser[index].bypass == 0)
		phaser[index].bypass = 1
	else if (phaser[index].bypass == 1)
		phaser[index].bypass = 0
}

function cabinetEffect(index) {
	if (cabinet[index].bypass == 0)
		cabinet[index].bypass = 1
	else if (cabinet[index].bypass == 1)
		cabinet[index].bypass = 0
}

function tremoloEffect(index) {
	if (tremolo[index].bypass == 0)
		tremolo[index].bypass = 1
	else if (tremolo[index].bypass == 1)
		tremolo[index].bypass = 0
}

function delayEffect(index) {
	if (delay[index].bypass == 0)
		delay[index].bypass = 1
	else if (delay[index].bypass == 1)
		delay[index].bypass = 0
}

function compressorEffect(index) {
	if (compressor[index].bypass == 0)
		compressor[index].bypass = 1
	else if (compressor[index].bypass == 1)
		compressor[index].bypass = 0
}


function filterEffect(index) {
	if (filter[index].bypass == 0)
		filter[index].bypass = 1
	else if (filter[index].bypass == 1)
		filter[index].bypass = 0
}

function incomingEffect(index, effectName) {
	if (effectName == 'chorus')
		chorusEffect(index)
	else if (effectName == 'delay')
		delayEffect(index)
	else if (effectName == 'overdrive')
		overdriveEffect(index)
	else if (effectName == 'phaser')
		phaserEffect(index)
	else if (effectName == 'cabinet')
		cabinetEffect(index)
	else if (effectName == 'wahwah')
		wahEffect(index)
	else if (effectName == 'tremolo')
		tremoloEffect(index)
	else if (effectName == 'filter')
		filterEffect(index)
	else if (effectName == 'convolver')
		reverbEffect(index)
	else if (effectName == 'compressor')
		compressorEffect(index)
}

function outgoingEffectChange(chosenEffect) {
	effectMsg[2] = chosenEffect
	for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0)
			user[i].send(effectMsg)
	}
	incomingEffect(0, chosenEffect)
}