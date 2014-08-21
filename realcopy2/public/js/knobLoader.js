
var synth = false

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
            switch(dataRel){
                case 'bus[0].reverb.level' :
                synth = false
                bus[0].reverb.level = v/dataRel5
                break;

                case 'bus[0].reverb.wetLevel' :
                synth = false
                bus[0].reverb.wetLevel = v/dataRel5
                break;

                case 'bus[0].reverb.dryLevel' :
                synth = false
                bus[0].reverb.dryLevel = v/dataRel5
                break;

                case 'bus[0].reverb.highCut' :
                synth = false
                bus[0].reverb.highCut = v
                break;

                case 'bus[0].reverb.lowCut' :
                synth = false
                bus[0].reverb.lowCut = v
                break;

                case 'bus[0].reverb.lowCut' :
                synth = false
                bus[0].reverb.lowCut = v
                break;

                case 'bus[0].chorus.rate' :
                synth = false
                bus[0].chorus.rate = v/dataRel5
                break;

                case 'bus[0].chorus.feedback' :
                synth = false
                bus[0].chorus.feedback = v/dataRel5
                break;

                case 'bus[0].chorus.delay' :
                synth = false
                bus[0].chorus.delay = v/dataRel5
                break;

                case 'bus[0].delay.feedback' :
                synth = false
                bus[0].delay.feedback = v/dataRel5
                break;

                case 'bus[0].delay.delayTime' :
                synth = false
                bus[0].delay.delayTime = v/dataRel5
                break;

                case 'bus[0].delay.wetLevel' :
                synth = false
                bus[0].delay.wetLevel = v/dataRel5
                break;

                case 'bus[0].delay.dryLevel' :
                synth = false
                bus[0].delay.dryLevel = v/dataRel5
                break;

                case 'bus[0].delay.cutoff' :
                synth = false
                bus[0].delay.cutoff = v/dataRel5
                break;

                case 'bus[0].phaser.rate' :
                synth = false
                bus[0].phaser.rate =v/dataRel5
                break;

                case 'bus[0].phaser.depth' :
                synth = false
                bus[0].phaser.depth =v/dataRel5
                break;

                case 'bus[0].phaser.feedback' :
                synth = false
                bus[0].phaser.feedback =v/dataRel5
                break;

                case 'bus[0].phaser.stereoPhase' :
                synth = false
                bus[0].phaser.stereoPhase =v/dataRel5
                break;

                case 'bus[0].phaser.baseModulationFrequency' :
                synth = false
                bus[0].phaser.baseModulationFrequency =v/dataRel5
                break;

                case 'bus[0].overdrive.outputGain' :
                synth = false
                bus[0].overdrive.outputGain = v/dataRel5
                break;

                case 'bus[0].overdrive.drive' :
                synth = false
                bus[0].overdrive.drive = v/dataRel5
                break;

                case 'bus[0].overdrive.curveLevel' :
                synth = false
                bus[0].overdrive.curveLevel = v/dataRel5
                break;

                case 'bus[0].overdrive.algorithmIndex' :
                synth = false
                bus[0].overdrive.algorithmIndex = v/dataRel5
                break;

                case 'bus[0].compressor.threshold' :
                synth = false
                bus[0].compressor.threshold = v/dataRel5
                break; 

                case 'bus[0].compressor.makeupGain' :
                synth = false
                bus[0].compressor.makeupGain = v/dataRel5
                break; 

                case 'bus[0].compressor.attack' :
                synth = false
                bus[0].compressor.attack = v/dataRel5
                break; 

                case 'bus[0].compressor.release' :
                synth = false
                bus[0].compressor.release = v/dataRel5
                break; 

                case 'bus[0].compressor.ratio' :
                synth = false
                bus[0].compressor.ratio = v/dataRel5
                break; 

                case 'bus[0].compressor.knee' :
                synth = false
                bus[0].compressor.knee = v/dataRel5
                break; 

                case 'bus[0].filter.Q':
                synth = false
                bus[0].filter.Q = v
                break;

                case 'bus[0].filter.frequency' :
                synth = false
                bus[0].filter.frequency = v
                break;

                case 'bus[0].filter.gain' :
                synth = false
                bus[0].filter.gain = v
                break;

                case 'bus[0].filter.filterType' :
                synth = false
                bus[0].filter.filterType = v
                break;

                case 'bus[0].tremolo.intensity' :
                synth = false
                bus[0].tremolo.intensity = v/dataRel5
                break;

                case 'tremolo.rate':
                synth = false
                tremolo.rate = v/dataRel5
                break;

                case 'bus[0].tremolo.stereoPhase' :
                synth = false
                bus[0].tremolo.stereoPhase = v
                break;

                case 'bus[0].wahwah.automode' :
                synth = false
                bus[0].wahwah.automode = v
                break;

                case 'bus[0].wahwah.baseFrequency' :
                synth = false
                bus[0].wahwah.baseFrequency = v/dataRel5
                break;

                case 'bus[0].wahwah.excursionOctaves' :
                synth = false
                bus[0].wahwah.excursionOctaves = v 
                break;

                case 'bus[0].wahwah.sweep' :
                synth = false
                bus[0].wahwah.sweep = v/dataRel5
                break;

                case 'bus[0].wahwah.resonance' :
                synth = false
                bus[0].wahwah.resonance = v
                break;

                case 'bus[0].wahwah.sensitivity' :
                synth = false
                bus[0].wahwah.sensitivity = v/dataRel5
                break;

                case 'attack1' :
                synth = true
                attack1[0] = v
                oscChg[2] = 'attack'
                oscChg[3] = '1'
                oscChg[4] = attack1[0]
                break;

                case 'attack2' :
                synth = true
                attack2[0] = v
                oscChg[2] = 'attack'
                oscChg[3] = '2'
                oscChg[4] = attack2[0]
                break;

                case 'attack3' :
                synth = true
                attack3[0] = v
                oscChg[2] = 'attack'
                oscChg[3] = '3'
                oscChg[4] = attack3[0]
                break;

                case 'decay1' :
                synth = true
                decay1[0] = v
                oscChg[2] = 'decay'
                oscChg[3] = '1'
                oscChg[4] = decay1[0]
                break;

                case 'decay2' :
                synth = true
                decay2[0] = v
                oscChg[2] = 'decay'
                oscChg[3] = '2'
                oscChg[4] = decay2[0]
                break;

                case 'decay3' :
                synth = true
                decay3[0] = v
                oscChg[2] = 'decay'
                oscChg[3] = '3'
                oscChg[4] = decay3[0]
                break;

                case 'detune1' :
                synth = true
                detune1[0] = v
                oscChg[2] = 'detune'
                oscChg[3] = '1'
                oscChg[4] = detune1[0]
                break;

                case 'detune2' :
                synth = true
                detune2[0] = v
                oscChg[2] = 'detune'
                oscChg[3] = '2'
                oscChg[4] = detune2[0]
                break;

                case 'detune3' :
                synth = true
                detune3[0] = v
                oscChg[2] = 'detune'
                oscChg[3] = '3'
                oscChg[4] = detune3[0]
                break;

                case 'oscVol1' :
                synth = true
                oscVol1[0] = v / dataRel5
                oscChg[2] = 'vol'
                oscChg[3] = '1'
                oscChg[4] = oscVol1[0]
                break;

                case 'oscVol2' :
                synth = true
                oscVol2[0] = v / dataRel5
                oscChg[2] = 'vol'
                oscChg[3] = '2'
                oscChg[4] = oscVol2[0]
                break;

                case 'oscVol3' :
                synth = true
                oscVol3[0] = v / dataRel5
                oscChg[2] = 'vol'
                oscChg[3] = '3'
                oscChg[4] = oscVol3[0]
                break;
            }
            
            if (!synth){
            effectMsg[1] = dataRel2
            effectMsg[2] = dataRel3
            effectMsg[3] = dataRel4
            effectMsg[4] = v/dataRel5
            
            outgoingEffectChange(effectMsg)
            }
            else if (synth)
            outgoingSynthChange(oscChg)

        }
    })
})











