$("#reverb-highCut").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { 
    	reverb[0].highCut = v
    	effectMsg[1] = 8
    	effectMsg[2] = 'reverb'
    	effectMsg[3] = 'highCut'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
     }
})

$("#reverb-lowCut").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { 
    	reverb[0].lowCut = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'reverb'
    	effectMsg[3] = 'lowCut'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#reverb-dryLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	reverb[0].dryLevel = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'reverb'
    	effectMsg[3] = 'dryLevel'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#reverb-wetLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	reverb[0].wetLevel = v
    	effectMsg[1] = 8
    	effectMsg[2] = 'reverb'
    	effectMsg[3] = 'wetLevel'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})
$("#reverb-level").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	reverb[0].level = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'reverb'
    	effectMsg[3] = 'level'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#chorus-rate").knob({
	width:40,
	height:40,
	min:1,
	max:150,
	step:1,
    'release' : function (v) { 
    	chorus[0].rate = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'chorus'
    	effectMsg[3] = 'rate'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#chorus-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { 
    	chorus[0].feedback = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'chorus'
    	effectMsg[3] = 'feedback'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#chorus-delay").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { 
    	chorus[0].delay = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'chorus'
    	effectMsg[3] = 'delay'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#delay-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { 
    	delay[0].feedback = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'delay'
    	effectMsg[3] = 'feedback'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})
$("#delay-time").knob({
	width:40,
	height:40,
	min:0,
	max:500,
	step:1,
    'release' : function (v) { 
    	delay[0].delayTime = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'delay'
    	effectMsg[3] = 'delayTime'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#delay-wetLevel").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { 
    	delay[0].wetLevel = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'delay'
    	effectMsg[3] = 'wetLevel'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})
$("#delay-dryLevel").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { 
    	delay[0].dryLevel = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'delay'
    	effectMsg[3] = 'dryLevel'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})
$("#delay-cutoff").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:50,
    'release' : function (v) { 
    	delay[0].cutoff = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'delay'
    	effectMsg[3] = 'cutoff'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#phaser-rate").knob({
	width:40,
	height:40,
	min:1,
	max:800,
	step:5,
    'release' : function (v) { 
    	phaser[0].rate = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'phaser'
    	effectMsg[3] = 'rate'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#phaser-depth").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	phaser[0].depth = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'phaser'
    	effectMsg[3] = 'depth'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#phaser-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { 
    	phaser[0].feedback = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'phaser'
    	effectMsg[3] = 'feedback'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#phaser-stereo").knob({
	width:40,
	height:40,
	min:0,
	max:180,
	step:1,
    'release' : function (v) { 
    	phaser[0].stereoPhase = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'phaser'
    	effectMsg[3] = 'stereoPhase'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#phaser-bmf").knob({
	width:40,
	height:40,
	min:500,
	max:1500,
	step:5,
    'release' : function (v) { 
    	phaser[0].baseModulationFrequency = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'phaser'
    	effectMsg[3] = 'baseModulationFrequency'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#overdrive-outputGain").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { 
    	overdrive[0].outputGain = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'overdrive'
    	effectMsg[3] = 'outputGain'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#overdrive-drive").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	overdrive[0].drive = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'overdrive'
    	effectMsg[3] = 'drive'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#overdrive-curveLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	overdrive[0].curveAmount = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'overdrive'
    	effectMsg[3] = 'curveAmount'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#overdrive-algorithm").knob({
	width:40,
	height:40,
	min:1,
	max:6,
	step:1,
    'release' : function (v) { 
    	overdrive[0].algorithmIndex = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'overdrive'
    	effectMsg[3] = 'algorithmIndex'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#compressor-threshold").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { 
    	compressor[0].threshold = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'threshold'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})
$("#compressor-makeGain").knob({
	width:40,
	height:40,
	min:1,
	max:10,
	step:1,
    'release' : function (v) { 
    	compressor[0].makeupGain = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'makeupGain'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#compressor-attack").knob({
	width:40,
	height:40,
	min:0,
	max:1000,//10
	step:1,
    'release' : function (v) { 
    	compressor[0].attack = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'attack'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#compressor-release").knob({
	width:40,
	height:40,
	min:0,
	max:3000,
	step:1,
    'release' : function (v) { 
    	compressor[0].release = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'release'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#compressor-ratio").knob({
	width:40,
	height:40,
	min:1,
	max:20,
	step:1,
    'release' : function (v) { 
    	compressor[0].ratio = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'ratio'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#compressor-knee").knob({
	width:40,
	height:40,
	min:0,
	max:40,
	step:1,
    'release' : function (v) { 
    	compressor[0].knee = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'compressor'
    	effectMsg[3] = 'knee'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#filter-frequency").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { 
    	filter[0].frequency = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'filter'
    	effectMsg[3] = 'frequency'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#filter-q").knob({
	width:40,
	height:40,
	min:1,
	max:40,
	step:1,
    'release' : function (v) { 
    	filter[0].Q = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'filter'
    	effectMsg[3] = 'Q'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#filter-gain").knob({
	width:40,
	height:40,
	min:-40,
	max:40,
	step:1,
    'release' : function (v) { 
    	filter[0].gain = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'filter'
    	effectMsg[3] = 'gain'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#filter-type").knob({
	width:40,
	height:40,
	min:1,
	max:8,
	step:1,
    'release' : function (v) { 
    	filter[0].filterType = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'filter'
    	effectMsg[3] = 'filterType'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#tremolo-intensity").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	tremolo[0].intensity = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'tremolo'
    	effectMsg[3] = 'intensity'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#tremolo-rate").knob({
	width:40,
	height:40,
	min:1,
	max:80,
	step:1,
    'release' : function (v) { 
    	tremolo[0].rate = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'tremolo'
    	effectMsg[3] = 'rate'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#tremolo-phase").knob({
	width:40,
	height:40,
	min:0,
	max:180,
	step:1,
    'release' : function (v) { 
    	tremolo[0].stereoPhase = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'tremolo'
    	effectMsg[3] = 'stereoPhase'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#wahwah-auto").knob({
	width:40,
	height:40,
	min:0,
	max:1,
	step:1,
    'release' : function (v) { 
    	wahwah[0].automode = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'automode'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#wahwah-base").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	wahwah[0].baseFrequency = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'baseFrequency'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#wahwah-excursion").knob({
	width:40,
	height:40,
	min:1,
	max:6,
	step:1,
    'release' : function (v) { 
    	wahwah[0].excursionOctaves = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'excursionOctaves'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#wahwah-sweep").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { 
    	wahwah[0].sweep = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'sweep'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
	}
})


$("#wahwah-resonance").knob({
	width:40,
	height:40,
	min:1,
	max:100,
	step:1,
    'release' : function (v) { 
    	wahwah[0].resonance = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'resonance'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})

$("#wahwah-sensitivity").knob({
	width:40,
	height:40,
	min:-10,
	max:10,
	step:1,
    'release' : function (v) { 
    	wahwah[0].sensitivity = v 
    	effectMsg[1] = 8
    	effectMsg[2] = 'wahwah'
    	effectMsg[3] = 'sensitivity'
    	effectMsg[4] = v
    	outgoingEffectChange(effectMsg)
    }
})










