$("#reverb-highCut").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { reverb[0].highCut = v }
})

$("#reverb-lowCut").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { reverb[0].lowCut = v }
})

$("#reverb-dryLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { reverb[0].dryLevel = v }
})

$("#reverb-wetLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { reverb[0].wetLevel = v }
})
$("#reverb-level").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { reverb[0].level = v }
})

$("#chorus-rate").knob({
	width:40,
	height:40,
	min:1,
	max:150,
	step:1,
    'release' : function (v) { chorus[0].rate = v }
})

$("#chorus-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { chorus[0].feedback = v }
})

$("#chorus-delay").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { chorus[0].delay = v }
})

$("#delay-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { delay[0].feedback = v }
})
$("#delay-time").knob({
	width:40,
	height:40,
	min:0,
	max:500,
	step:1,
    'release' : function (v) { delay[0].delayTime = v }
})

$("#delay-wetLevel").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { delay[0].wetLevel = v }
})
$("#delay-dryLevel").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { delay[0].dryLevel = v }
})
$("#delay-cutoff").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:50,
    'release' : function (v) { delay[0].cutoff = v }
})

$("#phaser-rate").knob({
	width:40,
	height:40,
	min:1,
	max:800,
	step:5,
    'release' : function (v) { phaser[0].rate = v }
})

$("#phaser-depth").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { phaser[0].depth = v }
})

$("#phaser-feedback").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { phaser[0].feedback = v }
})

$("#phaser-stereo").knob({
	width:40,
	height:40,
	min:0,
	max:180,
	step:1,
    'release' : function (v) { phaser[0].stereoPhase = v }
})

$("#phaser-bmf").knob({
	width:40,
	height:40,
	min:500,
	max:1500,
	step:5,
    'release' : function (v) { phaser[0].baseModulationFrequency = v }
})

$("#overdrive-outputGain").knob({
	width:40,
	height:40,
	min:0,
	max:15,
	step:1,
    'release' : function (v) { overdrive[0].outputGain = v }
})

$("#overdrive-drive").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { overdrive[0].drive = v }
})

$("#overdrive-curveLevel").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { overdrive[0].curveAmount = v }
})

$("#overdrive-algorithim").knob({
	width:40,
	height:40,
	min:1,
	max:6,
	step:1,
    'release' : function (v) { overdrive[0].algorithmIndex = v }
})

$("#compressor-threshold").knob({
	width:40,
	height:40,
	min:0,
	max:100,
	step:1,
    'release' : function (v) { compressor[0].threshold = v }
})
$("#compressor-makeGain").knob({
	width:40,
	height:40,
	min:1,
	max:10,
	step:1,
    'release' : function (v) { compressor[0].makeupGain = v }
})

$("#compressor-attack").knob({
	width:40,
	height:40,
	min:0,
	max:1000,//10
	step:1,
    'release' : function (v) { compressor[0].attack = v }
})

$("#compressor-release").knob({
	width:40,
	height:40,
	min:0,
	max:3000,
	step:1,
    'release' : function (v) { compressor[0].release = v }
})

$("#compressor-ratio").knob({
	width:40,
	height:40,
	min:1,
	max:20,
	step:1,
    'release' : function (v) { compressor[0].ratio = v }
})

$("#compressor-knee").knob({
	width:40,
	height:40,
	min:0,
	max:40,
	step:1,
    'release' : function (v) { compressor[0].knee = v }
})

$("#filter-frequency").knob({
	width:40,
	height:40,
	min:20,
	max:22050,
	step:20,
    'release' : function (v) { filter[0].frequency = v }
})

$("#filter-q").knob({
	width:40,
	height:40,
	min:1,
	max:40,
	step:1,
    'release' : function (v) { filter[0].Q = v }
})

$("#filter-gain").knob({
	width:40,
	height:40,
	min:-40,
	max:40,
	step:1,
    'release' : function (v) { filter[0].gain = v }
})

$("#filter-type").knob({
	width:40,
	height:40,
	min:1,
	max:8,
	step:1,
    'release' : function (v) { filter[0].filterType = v }
})

$("#tremelo-intensity").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { tremolo[0].intensity = v }
})

$("#tremelo-rate").knob({
	width:40,
	height:40,
	min:1,
	max:80,
	step:1,
    'release' : function (v) { tremolo[0].rate = v }
})

$("#tremelo-phase").knob({
	width:40,
	height:40,
	min:0,
	max:180,
	step:1,
    'release' : function (v) { tremolo[0].stereoPhase = v }
})

$("#wahwah-auto").knob({
	width:40,
	height:40,
	min:0,
	max:1,
	step:1,
    'release' : function (v) { wahwah[0].automode = v }
})

$("#wahwah-base").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { wahwah[0].baseFrequency = v }
})

$("#wahwah-excursion").knob({
	width:40,
	height:40,
	min:1,
	max:6,
	step:1,
    'release' : function (v) { wahwah[0].excursionOctaves = v }
})

$("#wahwah-sweep").knob({
	width:40,
	height:40,
	min:0,
	max:10,
	step:1,
    'release' : function (v) { wahwah[0].sweep = v }
})


$("#wahwah-resonance").knob({
	width:40,
	height:40,
	min:1,
	max:100,
	step:1,
    'release' : function (v) { wahwah[0].resonance = v }
})

$("#wahwah-sensitivity").knob({
	width:40,
	height:40,
	min:-10,
	max:10,
	step:1,
    'release' : function (v) { wahwah[0].sensitivity = v }
})










