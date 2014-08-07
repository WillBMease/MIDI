
$(".knob").each(function(){
    var dataRel = $(this).attr('data-release')
    var dataRel2 = parseInt($(this).attr('data-release2'))
    var dataRel3 = $(this).attr('data-release3')
    var dataRel4 = $(this).attr('data-release4')
    var dataRel5 = parseInt($(this).attr('data-release5'))

    $(this).knob({
        width: 40,
        height: 40,
        value: parseInt($(this).attr('data-value')),
        min: parseInt($(this).attr('data-min')),
        max:  parseInt($(this).attr('data-max')),
        step: parseInt($(this).attr('data-step')),
        'release': function(v) { 
             console.log('here: ' + dataRel5)
            // dataRel = v
            switch(dataRel){
                case 'bus[0].reverb.level' :
                bus[0].reverb.level = v/dataRel5
                break;

                case 'bus[0].reverb.wetLevel' :
                bus[0].reverb.wetLevel = v/dataRel5
                break;

                case 'bus[0].reverb.dryLevel' :
                bus[0].reverb.dryLevel = v/dataRel5
                break;

                case 'bus[0].reverb.highCut' :
                bus[0].reverb.highCut = v
                break;

                case 'bus[0].reverb.lowCut' :
                bus[0].reverb.lowCut = v
                break;

                case 'bus[0].reverb.lowCut' :
                bus[0].reverb.lowCut = v
                break;

                case 'bus[0].chorus.rate' :
                bus[0].chorus.rate = v/dataRel5
                break;

                case 'bus[0].chorus.feedback' :
                bus[0].chorus.feedback = v/dataRel5
                break;

                case 'bus[0].chorus.delay' :
                bus[0].chorus.delay = v/dataRel5
                break;

                case 'bus[0].delay.feedback' :
                bus[0].delay.feedback = v/dataRel5
                break;

                case 'bus[0].delay.delayTime' :
                bus[0].delay.delayTime = v/dataRel5
                break;

                case 'bus[0].delay.wetLevel' :
                bus[0].delay.wetLevel = v/dataRel5
                break;

                case 'bus[0].delay.dryLevel' :
                bus[0].delay.dryLevel = v/dataRel5
                break;

                case 'bus[0].delay.cutoff' :
                bus[0].delay.cutoff = v/dataRel5
                break;

                case 'bus[0].phaser.rate' :
                bus[0].phaser.rate =v/dataRel5
                break;

                case 'bus[0].phaser.depth' :
                bus[0].phaser.depth =v/dataRel5
                break;

                case 'bus[0].phaser.feedback' :
                bus[0].phaser.feedback =v/dataRel5
                break;

                case 'bus[0].phaser.stereoPhase' :
                bus[0].phaser.stereoPhase =v/dataRel5
                break;

                case 'bus[0].phaser.baseModulationFrequency' :
                bus[0].phaser.baseModulationFrequency =v/dataRel5
                break;

                case 'bus[0].overdrive.outputGain' :
                bus[0].overdrive.outputGain = v/dataRel5
                break;

                case 'bus[0].overdrive.drive' :
                bus[0].overdrive.drive = v/dataRel5
                break;

                case 'bus[0].overdrive.curveLevel' :
                bus[0].overdrive.curveLevel = v/dataRel5
                break;

                case 'bus[0].overdrive.algorithmIndex' :
                bus[0].overdrive.algorithmIndex = v/dataRel5
                break;

                case 'bus[0].compressor.threshold' :
                bus[0].compressor.threshold = v/dataRel5
                break; 

                case 'bus[0].compressor.makeupGain' :
                bus[0].compressor.makeupGain = v/dataRel5
                break; 

                case 'bus[0].compressor.attack' :
                bus[0].compressor.attack = v/dataRel5
                break; 

                case 'bus[0].compressor.release' :
                bus[0].compressor.release = v/dataRel5
                break; 

                case 'bus[0].compressor.ratio' :
                bus[0].compressor.ratio = v/dataRel5
                break; 

                case 'bus[0].compressor.knee' :
                bus[0].compressor.knee = v/dataRel5
                break; 

                case 'bus[0].filter.Q':
                bus[0].filter.Q = v
                break;

                case 'bus[0].filter.frequency' :
                bus[0].filter.frequency = v
                break;

                case 'bus[0].filter.gain' :
                bus[0].filter.gain = v
                break;

                case 'bus[0].filter.filterType' :
                bus[0].filter.filterType = v
                break;

                case 'bus[0].tremolo.intensity' :
                bus[0].tremolo.intensity = v/dataRel5
                break;

                case 'tremolo.rate':
                tremolo.rate = v/dataRel5
                break;

                case 'bus[0].tremolo.stereoPhase' :
                bus[0].tremolo.stereoPhase = v
                break;

                case 'bus[0].wahwah.automode' :
                bus[0].wahwah.automode = v
                break;

                case 'bus[0].wahwah.baseFrequency' :
                bus[0].wahwah.baseFrequency = v/dataRel5
                break;

                case 'bus[0].wahwah.excursionOctaves' :
                bus[0].wahwah.excursionOctaves = v 
                break;

                case 'bus[0].wahwah.sweep' :
                bus[0].wahwah.sweep = v/dataRel5
                break;

                case 'bus[0].wahwah.resonance' :
                bus[0].wahwah.resonance = v
                break;

                case 'bus[0].wahwah.sensitivity' :
                bus[0].wahwah.sensitivity = v/dataRel5
                break;
            }
            
            effectMsg[1] = dataRel2
            effectMsg[2] = dataRel3
            effectMsg[3] = dataRel4
            effectMsg[4] = v/dataRel5
            outgoingEffectChange(effectMsg)
            // console.log(effectMsg[1])
            // console.log(effectMsg[2])
            // console.log(effectMsg[3])
            // console.log(effectMsg[4])

        }
    })
})


// $("#reverb-highCut").knob({
// 	width:40,
// 	height:40,
// 	min:20,
// 	max:22050,
// 	step:1,
//     'release' : function (v) { 
//     	reverb[0].highCut = v
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'reverb'
//     	effectMsg[3] = 'highCut'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//      }
// })

// $("#reverb-lowCut").knob({
// 	width:40,
// 	height:40,
// 	min:20,
// 	max:22050,
// 	step:1,
//     'release' : function (v) { 
//     	reverb[0].lowCut = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'reverb'
//     	effectMsg[3] = 'lowCut'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#reverb-dryLevel").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	reverb[0].dryLevel = v / 100
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'reverb'
//     	effectMsg[3] = 'dryLevel'
//     	effectMsg[4] = v / 100
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#reverb-wetLevel").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:10,
// 	step:1,
//     'release' : function (v) { 
//     	reverb[0].wetLevel = v / 10
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'reverb'
//     	effectMsg[3] = 'wetLevel'
//     	effectMsg[4] = v / 10
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#reverb-level").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	reverb[0].level = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'reverb'
//     	effectMsg[3] = 'level'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#chorus-rate").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:800,
// 	step:1,
//     'release' : function (v) { 
//     	chorus[0].rate = v/800
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'chorus'
//     	effectMsg[3] = 'rate'
//     	effectMsg[4] = v/800
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#chorus-feedback").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	chorus[0].feedback = v/101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'chorus'
//     	effectMsg[3] = 'feedback'
//     	effectMsg[4] = v/101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#chorus-delay").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	chorus[0].delay = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'chorus'
//     	effectMsg[3] = 'delay'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#delay-feedback").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	delay[0].feedback = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'delay'
//     	effectMsg[3] = 'feedback'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#delay-time").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:1000,
// 	step:1,
//     'release' : function (v) { 
//     	delay[0].delayTime = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'delay'
//     	effectMsg[3] = 'delayTime'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#delay-wetLevel").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	delay[0].wetLevel = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'delay'
//     	effectMsg[3] = 'wetLevel'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#delay-dryLevel").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	delay[0].dryLevel = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'delay'
//     	effectMsg[3] = 'dryLevel'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })
// $("#delay-cutoff").knob({
// 	width:40,
// 	height:40,
// 	min:20,
// 	max:22050,
// 	step:1,
//     'release' : function (v) { 
//     	delay[0].cutoff = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'delay'
//     	effectMsg[3] = 'cutoff'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#phaser-rate").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:800,
// 	step:1,
//     'release' : function (v) { 
//     	phaser[0].rate = v / 801
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'phaser'
//     	effectMsg[3] = 'rate'
//     	effectMsg[4] = v / 801
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#phaser-depth").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	phaser[0].depth = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'phaser'
//     	effectMsg[3] = 'depth'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#phaser-feedback").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	phaser[0].feedback = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'phaser'
//     	effectMsg[3] = 'feedback'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#phaser-stereo").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:180,
// 	step:1,
//     'release' : function (v) { 
//     	phaser[0].stereoPhase = v
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'phaser'
//     	effectMsg[3] = 'stereoPhase'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#phaser-bmf").knob({
// 	width:40,
// 	height:40,
// 	min:500,
// 	max:1500,
// 	step:1,
//     'release' : function (v) { 
//     	phaser[0].baseModulationFrequency = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'phaser'
//     	effectMsg[3] = 'baseModulationFrequency'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#overdrive-outputGain").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	overdrive[0].outputGain = v /101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'overdrive'
//     	effectMsg[3] = 'outputGain'
//     	effectMsg[4] = v/101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#overdrive-drive").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	overdrive[0].drive = v /101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'overdrive'
//     	effectMsg[3] = 'drive'
//     	effectMsg[4] = v /101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#overdrive-curveLevel").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	overdrive[0].curveAmount = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'overdrive'
//     	effectMsg[3] = 'curveAmount'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#overdrive-algorithm").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:6,
// 	step:1,
//     'release' : function (v) { 
//     	overdrive[0].algorithmIndex = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'overdrive'
//     	effectMsg[3] = 'algorithmIndex'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#compressor-threshold").knob({
// 	width:40,
// 	height:40,
// 	min:-100,
// 	max:0,
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].threshold = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'threshold'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })
// $("#compressor-makeGain").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:10,
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].makeupGain = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'makeupGain'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#compressor-attack").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:1000,//10
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].attack = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'attack'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#compressor-release").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:3000,
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].release = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'release'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#compressor-ratio").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:20,
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].ratio = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'ratio'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#compressor-knee").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:40,
// 	step:1,
//     'release' : function (v) { 
//     	compressor[0].knee = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'compressor'
//     	effectMsg[3] = 'knee'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#filter-frequency").knob({
// 	width:40,
// 	height:40,
// 	min:20,
// 	max:22050,
// 	step:1,
//     'release' : function (v) { 
//     	filter[0].frequency = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'filter'
//     	effectMsg[3] = 'frequency'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#filter-q").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	filter[0].Q = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'filter'
//     	effectMsg[3] = 'Q'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#filter-gain").knob({
// 	width:40,
// 	height:40,
// 	min:-40,
// 	max:40,
// 	step:1,
//     'release' : function (v) { 
//     	filter[0].gain = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'filter'
//     	effectMsg[3] = 'gain'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#filter-type").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:8,
// 	step:1,
//     'release' : function (v) { 
//     	filter[0].filterType = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'filter'
//     	effectMsg[3] = 'filterType'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#tremolo-intensity").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	tremolo[0].intensity = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'tremolo'
//     	effectMsg[3] = 'intensity'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#tremolo-rate").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:80,
// 	step:1,
//     'release' : function (v) { 
//     	tremolo[0].rate = v / 80
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'tremolo'
//     	effectMsg[3] = 'rate'
//     	effectMsg[4] = v / 80
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#tremolo-phase").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:180,
// 	step:1,
//     'release' : function (v) { 
//     	tremolo[0].stereoPhase = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'tremolo'
//     	effectMsg[3] = 'stereoPhase'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#wahwah-auto").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:1,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].automode = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'automode'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#wahwah-base").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].baseFrequency = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'baseFrequency'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#wahwah-excursion").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:6,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].excursionOctaves = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'excursionOctaves'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#wahwah-sweep").knob({
// 	width:40,
// 	height:40,
// 	min:0,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].sweep = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'sweep'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
// 	}
// })


// $("#wahwah-resonance").knob({
// 	width:40,
// 	height:40,
// 	min:1,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].resonance = v 
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'resonance'
//     	effectMsg[4] = v
//     	outgoingEffectChange(effectMsg)
//     }
// })

// $("#wahwah-sensitivity").knob({
// 	width:40,
// 	height:40,
// 	min:-100,
// 	max:100,
// 	step:1,
//     'release' : function (v) { 
//     	wahwah[0].sensitivity = v / 101
//     	effectMsg[1] = 8
//     	effectMsg[2] = 'wahwah'
//     	effectMsg[3] = 'sensitivity'
//     	effectMsg[4] = v / 101
//     	outgoingEffectChange(effectMsg)
//     }
// })











