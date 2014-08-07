var effectMsg = []
effectMsg[1] = 8




var AudioBus = function(){
    this.input = context.createGain();
    var output = context.createGain();

    //create effect nodes (Convolver and Equalizer are other custom effects from the library presented at the end of the article)

    // this[reverb] = nnytfjgfj

this.reverb = new tuna.Convolver({
                    highCut: 15000,                         //20 to 22050
                    lowCut: 10000,                             //20 to 22050
                    dryLevel: .4,                            //0 to 1+
                    wetLevel: .9,                            //0 to 1+
                    level: .8,                               //0 to 1+, adjusts total output of both wet and dry
                    impulse: "js/impulses/impulse_rev.wav",    //the path to your impulse response
                    bypass: true
                });

this.chorus = new tuna.Chorus({
                 rate: 5,         //0.01 to 8+
                 feedback: 0.8,     //0 to 1+
                 delay: 0.8,     //0 to 1
                 bypass: true          //the value 1 starts the effect as bypassed, 0 or 1
             });

this.delay = new tuna.Delay({
                feedback: 0.8,    //0 to 1+
                delayTime: 500,    //how many milliseconds should the wet signal be delayed? 
                wetLevel: 0.5,    //0 to 1+
                dryLevel: 0.4,       //0 to 1+
                cutoff: 13000,        //cutoff frequency of the built in highpass-filter. 20 to 22050
                bypass: true
            });

// overdrive] = new tuna.Overdrive({
//                     outputGain: 0.1,         //0 to 1+
//                     drive: 0.1,              //0 to 1
//                     curveAmount: 0.1,          //0 to 1
//                     algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
//                     bypass: true
//                 });

this.phaser = new tuna.Phaser({
                 rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
                 depth: 0.3,                    //0 to 1
                 feedback: 0.2,                 //0 to 1+
                 stereoPhase: 30,               //0 to 180
                 baseModulationFrequency: 700,  //500 to 1500
                 bypass: true
             });

this.cabinet = new tuna.Cabinet({
                  makeupGain: 15,                                 //0 to 20
                  impulsePath: "js/impulses/impulse_guitar.wav",    //path to your speaker impulse
                  bypass: true
              });

this.wahwah = new tuna.WahWah({
                 automode: true,                //true/false
                 baseFrequency: 0.5,            //0 to 1
                 excursionOctaves: 4,           //1 to 6
                 sweep: 0.8,                    //0 to 1
                 resonance: 80,                 //1 to 100
                 sensitivity: 0.8,              //-1 to 1
                 bypass: true
             });

this.tremolo = new tuna.Tremolo({
                  intensity: 0.3,    //0 to 1
                  rate: 0.1,         //0.001 to 8
                  stereoPhase: 0,    //0 to 180
                  bypass: true
              });

// basic filter
this.filter = new tuna.Filter({
                 frequency: 20,         //20 to 22050
                 Q: 1,                  //0.001 to 100
                 gain: 0,               //-40 to 40
                 bypass: true,             //0 to 1+
                 filterType: 0,         //0 to 7, corresponds to the filter types in the native filter node: lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass in that order
                 bypass: true
             });

this.compressor = new tuna.Compressor({
                     threshold: -0.5,    //-100 to 0
                     makeupGain: 1,     //0 and up
                     attack: 1,         //0 to 1000
                     release: 0,        //0 to 3000
                     ratio: 4,          //1 to 20
                     knee: 5,           //0 to 40
                     automakeup: true,  //true/false
                     bypass: true
                 });


    this.input.connect(this.cabinet.input);
	this.cabinet.connect(this.compressor.input)
		// overdrive].connect(compressor].input)
		this.compressor.connect(this.tremolo.input)
		this.tremolo.connect(this.chorus.input)
		this.chorus.connect(this.phaser.input)
		this.phaser.connect(this.reverb.input)
		this.reverb.connect(this.delay.input)
		this.delay.connect(this.filter.input)
		this.filter.connect(this.wahwah.input)
		this.wahwah.connect(output) 


    this.connect = function(target){
       output.connect(target);
    };
};


var bus = []

for (var i = 0 ; i < userLimit ; i++){
	bus[i] = new AudioBus()
	bus[i].connect(ans[i])
	bus[i].connect(ansT[i])
	bus[i].connect(context.destination)
}


for (var i = 0 ; i < 1 ; i++) {
		bus[i].reverb.highCut = $("#reverb-highCut").val()
		bus[i].reverb.lowCut = $("#reverb-lowCut").val()
		bus[i].reverb.dryLevel = $("#reverb-dryLevel").val() / 101
		bus[i].reverb.wetLevel = $("#reverb-wetLevel").val() / 101
		bus[i].reverb.level = $("#reverb-level").val() / 101

		bus[i].chorus.rate = $("#chorus-rate").val()/800;
		bus[i].chorus.feedback = $("#chorus-feedback").val()/100;
		bus[i].chorus.delay = $("#chorus-delay").val()/100;

		bus[i].delay.feedback = $("#delay-feedback").val()/100;
		bus[i].delay.delayTime = $("#delay-time").val();
		bus[i].delay.wetLevel = $("#delay-wetLevel").val()/10;
		bus[i].delay.dryLevel = $("#delay-dryLevel").val()/10;
		bus[i].delay.cutoff = $("#delay-cutoff").val();

		bus[i].phaser.rate = $("#phaser-rate").val() / 801
		bus[i].phaser.depth = $("#phaser-depth").val() / 101
		bus[i].phaser.feedback = $("#phaser-feedback").val() / 101
		bus[i].phaser.stereoPhase = $("#phaser-stereo").val()
		bus[i].phaser.baseModulationFrequency = $("#phaser-bmf").val()

		// bus[i].overdrive.outputGain = $("#overdrive-outputGain").val() / 101
		// bus[i].overdrive.drive = $("#overdrive-drive").val() / 101
		// bus[i].overdrive.curveAmount = $("#overdrive-curveLevel").val() / 101
		// bus[i].overdrive.algorithmIndex = $("#overdrive-algorithm").val()

		bus[i].compressor.threshold = $("#compressor-threshold").val()
		bus[i].compressor.makeupGain = $("#compressor-makeGain").val()
		bus[i].compressor.attack = $("#compressor-attack").val()
		bus[i].compressor.release = $("#compressor-release").val()
		bus[i].compressor.ratio = $("#compressor-ratio").val()
		bus[i].compressor.knee = $("#compressor-knee").val()

		bus[i].filter.frequency = $("#filter-frequency").val()
		bus[i].filter.Q = $("#filter-q").val()
		bus[i].filter.gain = $("#filter-gain").val()
		bus[i].filter.filterType = $("#filter-type").val()

		bus[i].tremolo.intensity = $("#tremolo-intensity").val() / 101
		bus[i].tremolo.rate = $("#tremolo-rate").val() / 80
		bus[i].tremolo.stereoPhase = $("#tremolo-phase").val()

		bus[i].wahwah.automode = $("#wahwah-auto").val()
		bus[i].wahwah.baseFrequency = $("#wahwah-base").val() / 101
		bus[i].wahwah.excursionOctaves = $("#wahwah-excursion").val()
		bus[i].wahwah.sweep = $("#wahwah-sweep").val() / 101
		bus[i].wahwah.resonance = $("#wahwah-resonance").val()
		bus[i].wahwah.sensitivity = $("#wahwah-sensitivity").val() / 101
}

    $('.outgoingEffect').click(function(){
      var chosenEffect = $(this).attr('id')
      effectMsg[1] = 8
      effectMsg[2] = chosenEffect
      effectMsg[3] = "bypass"
      outgoingEffectChange(effectMsg)
      effectsMain(0, effectMsg)
    })

function effectsMain(index, effectMsg) {
	var mainctl


switch (effectMsg[2]) {

	case 'reverb' :
		mainctl = bus[index].reverb
		break ;
	case 'chorus' :
		mainctl = bus[index].chorus
		break ;
	case 'delay' :
		mainctl = bus[index].delay
		break ;
	case 'overdrive' :
		mainctl = bus[index].overdrive
		break ;
	case 'phaser' :
		mainctl = bus[index].phaser
		break ;
	case 'cabinet' :
		mainctl = bus[index].cabinet
		break ;
	case 'tremolo' :
		mainctl = bus[index].tremolo
		break ;
	case 'filter' :
		mainctl = bus[index].filter
		break ;
	case 'compressor' :
		mainctl = bus[index].compressor
		break ;
	case 'wahwah' :
		mainctl = bus[index].wahwah
		break ;
}

	switch (effectMsg[3]) {

	case 'bypass' :
		if (mainctl.bypass == 1)
			mainctl.bypass = 0
		else if (mainctl.bypass == 0)
			mainctl.bypass = 1
		break ;

	case 'highCut' :
		mainctl.highCut = effectMsg[4]
		break ;
	case 'lowCut' :
		mainctl.lowCut = effectMsg[4]
		break ;
	case 'dryLevel' :
		mainctl.dryLevel = effectMsg[4]
		break ;
	case 'wetLevel' :
		mainctl.wetLevel = effectMsg[4]
		break ;
	case 'level' :
		mainctl.level = effectMsg[4]
		break ;
	case 'rate' :
		mainctl.rate = effectMsg[4]
		break ;
	case 'feedback' :
		mainctl.feedback = effectMsg[4]
		break ;
	case 'delay' :
		mainctl.delay = effectMsg[4]
		break ;
	case 'delayTime' :
		mainctl.delayTime = effectMsg[4]
		break ;
	case 'cutoff' :
		mainctl.cutoff = effectMsg[4]
		break ;
	case 'depth' :
		mainctl.depth = effectMsg[4]
		break ;
	case 'stereoPhase' :
		mainctl.stereoPhase = effectMsg[4]
		break ;
	case 'baseModulationFrequency' :
		mainctl.baseModulationFrequency = effectMsg[4]
		break ;
	case 'outputGain' :
		mainctl.outputGain = effectMsg[4]
		break ;
	case 'drive' :
		mainctl.drive = effectMsg[4]
		break ;
	case 'curveAmount' :
		mainctl.curveAmount = effectMsg[4]
		break ;
	case 'algorithmIndex' :
		mainctl.algorithmIndex = effectMsg[4]
		break ;
	case 'threshold' :
		mainctl.threshold = effectMsg[4]
		break ;
	case 'makeupGain' :
		mainctl.makeupGain = effectMsg[4]
		break ;
	case 'attack' :
		mainctl.attack = effectMsg[4]
		break ;
	case 'release' :
		mainctl.release = effectMsg[4]
		break ;
	case 'ratio' :
		mainctl.ratio = effectMsg[4]
		break ;
	case 'knee' :
		mainctl.knee = effectMsg[4]
		break ;
	case 'frequency' :
		mainctl.frequency = effectMsg[4]
		break ;
	case 'Q' :
		mainctl.Q = effectMsg[4]
		break ;
	case 'gain' :
		mainctl.gain = effectMsg[4]
		break ;
	case 'filterType' :
		mainctl.filterType = effectMsg[4]
		break ;
	case 'intensity' :
		mainctl.intensity = effectMsg[4]
		break ;
	case 'automode' :
		mainctl.automode = effectMsg[4]
		break ;
	case 'baseFrequency' :
		mainctl.baseFrequency = effectMsg[4]
		break ;
	case 'excursionOctaves' :
		mainctl.excursionOctaves = effectMsg[4]
		break ;
	case 'sweep' :
		mainctl.sweep = effectMsg[4]
		break ;
	case 'resonance' :
		mainctl.resonance = effectMsg[4]
		break ;
	case 'sensitivity' :
		mainctl.sensitivity = effectMsg[4]
		break ;
}


switch (effectMsg[2]) {

	case 'reverb' :
		bus[index].reverb = mainctl
		break ;
	case 'chorus' :
		bus[index].chorus = mainctl
		break ;
	case 'delay' :
		bus[index].delay = mainctl
		break ;
	case 'overdrive' :
		bus[index].overdrive = mainctl
		break ;
	case 'phaser' :
		bus[index].phaser = mainctl
		break ;
	case 'cabinet' :
		bus[index].cabinet = mainctl
		break ;
	case 'tremolo' :
		bus[index].tremolo = mainctl
		break ;
	case 'filter' :
		bus[index].filter = mainctl
		break ;
	case 'compressor' :
		bus[index].compressor = mainctl
		break ;
	case 'wahwah' :
		bus[index].wahwah = mainctl
		break ;
}

}

function outgoingEffectChange(effectMsg) {
	for (var i = 1 ; i < userLimit ; i++) {
		if (user[i] != 0)
			user[i].send(effectMsg)
	}
}