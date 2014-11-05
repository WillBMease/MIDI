var trueCrash = []
var trueKick = []
var trueHihat = []
var trueRide = []
var trueSnare = []
var trueTom1 = []
var trueTom2 = []
var trueTom3 = []

for (var i = 0 ; i < 8 ; i++){
	trueCrash[i] = []
	trueKick[i] = []
	trueHihat[i] = []
	trueRide[i] = []
	trueSnare[i] = []
	trueTom1[i] = []
	trueTom2[i] = []
	trueTom3[i] = []
}

  // Simple Beat
trueCrash[0] = [0, 0, 0, 0, 0, 0, 0, 0]
trueKick[0] =  [1, 0, 1, 0, 1, 0, 1, 0]
trueHihat[0] = [0, 1, 0, 1, 0, 1, 0, 1]
trueRide[0] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueSnare[0] = [0, 0, 0, 0, 0, 0, 0, 0]
trueTom1[0] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueTom2[0] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueTom3[0] =  [0, 0, 0, 0, 0, 0, 0, 0]

  // Metronome
trueCrash[1] = [0, 0, 0, 0, 0, 0, 0, 0]
trueKick[1] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueHihat[1] = [0, 0, 0, 0, 0, 0, 0, 0]
trueRide[1] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueSnare[1] = [1, 1, 1, 1, 1, 1, 1, 1]
trueTom1[1] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueTom2[1] =  [0, 0, 0, 0, 0, 0, 0, 0]
trueTom3[1] =  [0, 0, 0, 0, 0, 0, 0, 0]


$('#chooseDrumBeat').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    console.log(optionSelected)
    console.log(valueSelected)
    changeDrumBeat(valueSelected)
});