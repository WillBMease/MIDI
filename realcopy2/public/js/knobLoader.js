
$(".knob").each(function(){
    var dataRel = $(this).attr('data-release')
    var dataRel2 = parseInt($(this).attr('data-release2'))
    var dataRel3 = $(this).attr('data-release3')
    var dataRel4 = $(this).attr('data-release4')
    var dataRel5 = parseInt($(this).attr('data-release5'))

    $(this).knob({
        width: 50,
        height: 50,
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

                case 'attack1' :
                attack1 = v
                break;

                case 'attack2' :
                attack2 = v
                break;

                case 'attack3' :
                attack3 = v
                break;

                case 'decay1' :
                decay1 = v
                break;

                case 'decay2' :
                decay2 = v
                break;

                case 'decay3' :
                decay3 = v
                break;

                case 'detune1' :
                detune1 = v
                break;

                case 'detune2' :
                detune2 = v
                break;

                case 'detune3' :
                detune3 = v
                break;

                case 'oscVol1' :
                oscVol1 = v / dataRel5
                break;

                case 'oscVol2' :
                oscVol2 = v / dataRel5
                break;

                case 'oscVol3' :
                oscVol3 = v / dataRel5
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

$("#attack").knob({
 width:40,
 height:40,
 min:0,
 max:1000,
 step:1,
    'release' : function (v) { 
     attack = v
     // effectMsg[1] = 8
     // effectMsg[2] = 'reverb'
     // effectMsg[3] = 'highCut'
     // effectMsg[4] = v
     // outgoingEffectChange(effectMsg)
     }
})

$("#decay").knob({
 width:40,
 height:40,
 min:0,
 max:1000,
 step:1,
    'release' : function (v) { 
     decay = v
     // effectMsg[1] = 8
     // effectMsg[2] = 'reverb'
     // effectMsg[3] = 'highCut'
     // effectMsg[4] = v
     // outgoingEffectChange(effectMsg)
     }
})











