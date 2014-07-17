var chorus = new tuna.Chorus({
                 rate: 1.5,         //0.01 to 8+
                 feedback: 0.2,     //0 to 1+
                 delay: 0.5,     //0 to 1
                 bypass: 1          //the value 1 starts the effect as bypassed, 0 or 1
             });

var delay = new tuna.Delay({
                feedback: 0.4,    //0 to 1+
                delayTime: 125,    //how many milliseconds should the wet signal be delayed? 
                wetLevel: 0.25,    //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 13000,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: 1
            });

var overdrive = new tuna.Overdrive({
                    outputGain: 0.4,         //0 to 1+
                    drive: 0.1,              //0 to 1
                    curveAmount: 0.3,          //0 to 1
                    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
                    bypass: 1
                });

var phaser = new tuna.Phaser({
                 rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
                 depth: 0.3,                    //0 to 1
                 feedback: 0.2,                 //0 to 1+
                 stereoPhase: 30,               //0 to 180
                 baseModulationFrequency: 700,  //500 to 1500
                 bypass: 1
             });

var cabinet = new tuna.Cabinet({
                  makeupGain: 15,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: 1
              });

var wahwah = new tuna.WahWah({
                 automode: true,                //true/false
                 baseFrequency: 0.5,            //0 to 1
                 excursionOctaves: 4,           //1 to 6
                 sweep: 0.3,                    //0 to 1
                 resonance: 80,                 //1 to 100
                 sensitivity: 0.8,              //-1 to 1
                 bypass: 1
             });

var tremolo = new tuna.Tremolo({
                  intensity: 0.3,    //0 to 1
                  rate: 0.1,         //0.001 to 8
                  stereoPhase: 0,    //0 to 180
                  bypass: 1
              });

// basic filter
var filter = new tuna.Filter({
                 frequency: 20,         //20 to 22050
                 Q: 1,                  //0.001 to 100
                 gain: 0,               //-40 to 40
                 bypass: 1,             //0 to 1+
                 filterType: 0,         //0 to 7, corresponds to the filter types in the native filter node: lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass in that order
                 bypass: 1
             });

var convolver = new tuna.Convolver({
                    highCut: 22050,                         //20 to 22050
                    lowCut: 20,                             //20 to 22050
                    dryLevel: 1,                            //0 to 1+
                    wetLevel: 1,                            //0 to 1+
                    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: 1
                });

var compressor = new tuna.Compressor({
                     threshold: 0.5,    //-100 to 0
                     makeupGain: 1,     //0 and up
                     attack: 1,         //0 to 1000
                     release: 0,        //0 to 3000
                     ratio: 4,          //1 to 20
                     knee: 5,           //0 to 40
                     automakeup: true,  //true/false
                     bypass: 1
                 });






function reverbEffect() {
	if (convolver.bypass == 0)
		convolver.bypass = 1
	else if (convolver.bypass == 1)
		convolver.bypass = 0
}

function wahEffect() {
	if (wahwah.bypass == 0)
		wahwah.bypass = 1
	else if (wahwah.bypass == 1)
		wahwah.bypass = 0
}

function overdriveEffect() {
	if (overdrive.bypass == 0)
		overdrive.bypass = 1
	else if (overdrive.bypass == 1)
		overdrive.bypass = 0
}

function chorusEffect() {
	if (chorus.bypass == 0)
		chorus.bypass = 1
	else if (chorus.bypass == 1)
		chorus.bypass = 0
}

function phaserEffect() {
	if (phaser.bypass == 0)
		phaser.bypass = 1
	else if (phaser.bypass == 1)
		phaser.bypass = 0
}

function cabinetEffect() {
	if (cabinet.bypass == 0)
		cabinet.bypass = 1
	else if (cabinet.bypass == 1)
		cabinet.bypass = 0
}

function tremoloEffect() {
	if (tremolo.bypass == 0)
		tremolo.bypass = 1
	else if (tremolo.bypass == 1)
		tremolo.bypass = 0
}

function delayEffect() {
	if (delay.bypass == 0)
		delay.bypass = 1
	else if (delay.bypass == 1)
		delay.bypass = 0
}

function compressorEffect() {
	if (compressor.bypass == 0)
		compressor.bypass = 1
	else if (compressor.bypass == 1)
		compressor.bypass = 0
}

function filterEffect() {
	if (filter.bypass == 0)
		filter.bypass = 1
	else if (filter.bypass == 1)
		filter.bypass = 0
}