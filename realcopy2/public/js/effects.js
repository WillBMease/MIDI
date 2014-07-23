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
                 sweep: 0.8,                    //0 to 1
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
		// reverb[i].highCut = $("#reverb-highCut").val()
		// reverb[i].lowCut = $("#reverb-lowCut").val()
		// reverb[i].dryLevel = $("#reverb-dryLevel").val()
		// reverb[i].wetLevel = $("#reverb-wetLevel").val()
		// reverb[i].level = $("#reverb-level").val()

		// chorus[i].rate = $("#chorus-rate").val()/10;
		// chorus[i].feedback = $("#chorus-feedback").val()/10;
		// chorus[i].delay = $("#chorus-delay").val()/100;

		// delay[i].feedback = $("#delay-feedback").val()/100;
		// delay[i].delayTime = $("#delay-delayTime").val();
		// delay[i].wetLevel = $("#delay-wetLevel").val()/10;
		// delay[i].dryLevel = $("#delay-dryLevel").val()/10;
		// delay[i].cutoff = $("#delay-cutoff").val();

		// phaser[i].rate = $("#phaser-rate").val()
		// phaser[i].depth = $("#phaser-depth").val()
		// phaser[i].feedback = $("#phaser-feedback").val()
		// phaser[i].stereoPhase = $("#phaser-stereo").val()
		// phaser[i].baseModulationFrequency = $("#phaser-bmf").val()

		// overdrive[i].outputGain = $("#overdrive-outputGain").val()
		// overdrive[i].drive = $("#overdrive-drive").val()
		// overdrive[i].curveAmount = $("#overdrive-curveLevel").val()
		// overdrive[i].algorithmIndex = $("#overdrive-algorithm").val()

		// compressor[i].threshold = $("#compressor-threshold").val()
		// compressor[i].makeupGain = $("#compressor-makeGain").val()
		// compressor[i].attack = $("#compressor-attack").val()
		// compressor[i].release = $("#compressor-release").val()
		// compressor[i].ratio = $("#compressor-ratio").val()
		// compressor[i].knee = $("#compressor-knee").val()

		// filter[i].frequency = $("#filter-frequency").val()
		// filter[i].Q = $("#filter-q").val()
		// filter[i].gain = $("#filter-gain").val()
		// filter[i].filterType = $("#filter-type").val()

		// tremolo[i].intensity = $("#tremolo-intensity").val()
		// tremolo[i].rate = $("#tremolo-rate").val()
		// tremolo[i].stereoPhase = $("#tremolo-phase").val()

		// wahwah[i].automode = $("#wahwah-auto").val()
		// wahwah[i].baseFrequency = $("#wahwah-base").val()
		// wahwah[i].excursionOctaves = $("#wahwah-excursion").val()
		// wahwah[i].sweep = $("#wahwah-sweep").val()
		// wahwah[i].resonance = $("#wahwah-resonance").val()
		// wahwah[i].sensitivity = $("#wahwah-sensitivity").val()
}

function reverbEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (reverb[index].bypass == 0)
		reverb[index].bypass = 1
	else if (reverb[index].bypass == 1)
		reverb[index].bypass = 0
}

	else if (effectMsg[3] == 'highCut')
		reverb[index].highCut = effectMsg[4]
	else if (effectMsg[3] == 'lowCut')
		reverb[index].lowCut = effectMsg[4]
	else if (effectMsg[3] == 'dryLevel')
		reverb[index].dryLevel = effectMsg[4]
	else if (effectMsg[3] == 'wetLevel')
		reverb[index].wetLevel = effectMsg[4]
	else if (effectMsg[3] == 'level')
		reverb[index].level = effectMsg[4]

}

function wahEffect(index, effectMsg) {

if (effectMsg[3] == 0) {
	if (wahwah[index].bypass == 0)
		wahwah[index].bypass = 1
	else if (wahwah[index].bypass == 1)
		wahwah[index].bypass = 0
}

	else if (effectMsg[3] == 'automode')
		wahwah[index].automode = effectMsg[4]
	else if (effectMsg[3] == 'baseFrequency')
		wahwah[index].baseFrequency = effectMsg[4]
	else if (effectMsg[3] == 'excursionOctaves')
		wahwah[index].excursionOctaves = effectMsg[4]
	else if (effectMsg[3] == 'sweep')
		wahwah[index].sweep = effectMsg[4]
	else if (effectMsg[3] == 'resonance')
		wahwah[index].resonance = effectMsg[4]
	else if (effectMsg[3] == 'sensitivity')
		wahwah[index] = effectMsg[4]
}

function overdriveEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (overdrive[index].bypass == 0)
		overdrive[index].bypass = 1
	else if (overdrive[index].bypass == 1)
		overdrive[index].bypass = 0
}

	else if (effectMsg[3] == 'outputGain')
		overdrive[index].outputGain = effectMsg[4]
	else if (effectMsg[3] == 'drive')
		overdrive[index].drive = effectMsg[4]
	else if (effectMsg[3] == 'curveAmount')
		overdrive[index].curveAmount = effectMsg[4]
	else if (effectMsg[3] == 'algorithmIndex')
		overdrive[index].algorithmIndex = effectMsg[4]
}

function chorusEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (chorus[index].bypass == 0)
		chorus[index].bypass = 1
	else if (chorus[index].bypass == 1)
		chorus[index].bypass = 0
}

	else if (effectMsg[3] == 'rate')
		chorus[index].rate = effectMsg[4]
	else if (effectMsg[3] == 'feedback')
		chorus[index].feedback = effectMsg[4]
	else if (effectMsg[3] == 'delay')
		chorus[index].delay = effectMsg[4]
}

function phaserEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (phaser[index].bypass == 0)
		phaser[index].bypass = 1
	else if (phaser[index].bypass == 1)
		phaser[index].bypass = 0
}

	else if (effectMsg[3] == 'rate')
		phaser[index].rate = effectMsg[4]
	else if (effectMsg[3] == 'depth')
		phaser[index].depth = effectMsg[4]
	else if (effectMsg[3] == 'feedback')
		phaser[index].feedback = effectMsg[4]
	else if (effectMsg[3] == 'stereoPhase')
		phaser[index].stereoPhase = effectMsg[4]
	else if (effectMsg[3] = 'baseModulationFrequency')
		phaser[index].baseModulationFrequency = effectMsg[4]
}

function cabinetEffect(index, effectMsg) {
	if (cabinet[index].bypass == 0)
		cabinet[index].bypass = 1
	else if (cabinet[index].bypass == 1)
		cabinet[index].bypass = 0
}

function tremoloEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (tremolo[index].bypass == 0)
		tremolo[index].bypass = 1
	else if (tremolo[index].bypass == 1)
		tremolo[index].bypass = 0
}

	else if (effectMsg[3] == 'intensity')
		tremolo[index].intensity = effectMsg[4]
	else if (effectMsg[3] == 'rate')
		tremolo[index].rate = effectMsg[4]
	else if (effectMsg[3] == 'stereoPhase')
		tremolo[index].stereoPhase = effectMsg[4]
}

function delayEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (delay[index].bypass == 0)
		delay[index].bypass = 1
	else if (delay[index].bypass == 1)
		delay[index].bypass = 0
}

	else if (effectMsg[3] == 'feedback')
		delay[index].feedback = effectMsg[4]
	else if (effectMsg[3] == 'delayTime')
		delay[index].delayTime = effectMsg[4]
	else if (effectMsg[3] == 'wetLevel')
		delay[index].wetLevel = effectMsg[4]
	else if (effectMsg[3] == 'dryLevel')
		delay[index].dryLevel = effectMsg[4]
	else if (effectMsg[3] == 'cutoff')
		delay[index].cutoff = effectMsg[4]
}

function compressorEffect(index, effectMsg) {

if (effectMsg[2] == 0) {
	if (compressor[index].bypass == 0)
		compressor[index].bypass = 1
	else if (compressor[index].bypass == 1)
		compressor[index].bypass = 0
}

	else if (effectMsg[3] == 'threshold')
		compressor[index].threshold = effectMsg[4]
	else if (effectMsg[3] == 'makeupGain')
		compressor[index].makeupGain = effectMsg[4]
	else if (effectMsg[3] == 'attack')
		compressor[index].attack = effectMsg[4]
	else if (effectMsg[3] == 'release')
		compressor[index].release = effectMsg[4]
	else if (effectMsg[3] == 'ratio')
		compressor[index].ratio = effectMsg[4]
	else if (effectMsg[3] == 'knee')
		compressor[index].knee = effectMsg[4]
}


function filterEffect(index, effectMsg) {

if (effectMsg[3] == 0) {
	if (filter[index].bypass == 0)
		filter[index].bypass = 1
	else if (filter[index].bypass == 1)
		filter[index].bypass = 0
}

	else if (effectMsg[3] == 'frequency')
		filter[index].frequency = effectMsg[4]
	else if (effectMsg[3] == 'Q')
		filter[index].Q = effectMsg[4]
	else if (effectMsg[3] == 'gain')
		filter[index].gain = effectMsg[4]
	else if (effectMsg[3] == 'filterType')
		filter[index].filterType = effectMsg[4]
}

function incomingEffect(index, effectMsg) {	

	if (effectMsg[2] == 'chorus')
		chorusEffect(index, effectMsg)
	else if (effectMsg[2] == 'delay')
		delayEffect(index, effectMsg)
	else if (effectMsg[2] == 'overdrive')
		overdriveEffect(index, effectMsg)
	else if (effectMsg[2] == 'phaser')
		phaserEffect(index, effectMsg)
	else if (effectMsg[2] == 'cabinet')
		cabinetEffect(index, effectMsg)
	else if (effectMsg[2] == 'wahwah')
		wahEffect(index, effectMsg)
	else if (effectMsg[2] == 'tremolo')
		tremoloEffect(index, effectMsg)
	else if (effectMsg[2] == 'filter')
		filterEffect(index, effectMsg)
	else if (effectMsg[2] == 'reverb')
		reverbEffect(index, effectMsg)
	else if (effectMsg[2] == 'compressor')
		compressorEffect(index, effectMsg)
}

function outgoingEffectChange(effectMsg) {
	//effectMsg[2] = chosenEffect
	for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0)
			user[i].send(effectMsg)
	}
	incomingEffect(0, effectMsg)
}