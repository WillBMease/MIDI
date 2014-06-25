
var octave = 1;
var globalOctave;


function triggerAudio(key, delay) {
	var notes = [];
	var noteWrap = $('.audioBin li');
	notes = noteWrap.find('audio');
	transpose(key);
	key = keyboardMap(key) + (octave*12);
	setTimeout(function(){
		notes[key].currentTime = 0;
		notes[key].play();
	}, delay);
}
function keyMap(e,delay) {
  var pressed = e.which;
	//pressed = pressed - 49;
	//if (pressed == 122) {};
	triggerAudio(pressed, delay);
	console.log(pressed);
}

$(document).ready(function(){
	// $('button.choose-inst').click(function(e){
	// 	e.preventDefault();
	// 	var inst = $(this).data('inst');
	// 	console.log(inst);
	// 	//$(window).unbind();
	// 	generateNotes(inst);
	// });
});

var instrument; 
instrument = '<audio id="" preload="auto">' +
			'</audio>';

//preset instrumemt list/////////////////////////////

var harp = { "name" : "harp", "octaveNum": 5, "notes": 57, "path" : "Sounds/Harp"};

var bass = { "name": "bass", "octaveNum": 3, "notes" : 31, "path" : "Sounds/E-Bass_Guitar"};



//var grand_Piano = { "name" : "gPiano" , "notes": , "path" : "Sounds/Grand_Piano"};




function generateNotes(presetInstrument){
	$(window).unbind();
	var target = $('.audioBin li');
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	for(var i = 1; i <presetInstrument.notes; i++){
		target.append(instrument);
		var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
	}

	$(window).on('keypress',function(e){
	  keyMap(e,20)
	});
}

function transpose(noteInput){
	// 1
	if(noteInput == 49 && octave < globalOctave){
		octave = octave + 1;
	}
	// ~
	if(noteInput == 96 && octave != 0){
		octave = octave - 1;
	}
}

function keyboardMap(keyInput){
	var output;

///////////////////// Transpose keys //////////////////////////////

	// // 1
	// if(keyInput == 49 && octave != presetInstrument.octaveNum){
	// 	octave = octave + 1;
	// }
	// // ~
	// if(keyInput == 96 && octave != 0){
	// 	octave = octave - 1;
	// }

	// z
	if(keyInput == 122){
		output = 1;
	}
	// s
	else if (keyInput == 115) {
		output = 2;
	}
	// x
	else if (keyInput == 120) {
		output = 3;
	}
	// d
	else if (keyInput == 100) {
		output = 4;
	}
	// c
	else if (keyInput == 99) {
		output = 5;
	}
	// v
	else if (keyInput == 118) {
		output = 6;
	}
	// g
	else if (keyInput == 103) {
		output = 7;
	}
	// b
	else if (keyInput == 98) {
		output = 8;
	}
	// h
	else if (keyInput == 104) {
		output = 9;
	}
	// n
	else if (keyInput == 110) {
		output = 10;
	}
	// j
	else if (keyInput == 106) {
		output = 11;
	}
	// m
	else if (keyInput == 109) {
		output = 12;
	}

///////////////////////////// Next Octave /////////////////////////////////
	// < OR q
	else if (keyInput == 44 || keyInput == 113) {
		output = 13;
	}
	// l OR 2
	else if (keyInput == 108 || keyInput == 50) {
		output = 14;
	}
	// > OR w
	else if (keyInput == 46 || keyInput == 119) {
		output = 15;
	}
	// ; OR 3
	else if (keyInput == 59 || keyInput == 51) {
		output = 16;
	}
	// ? OR e
	else if (keyInput == 47 || keyInput == 101) {
		output = 17;
	}
	// r
	else if (keyInput == 114) {
		output = 18;
	}
	// 5
	else if (keyInput == 53) {
		output = 19;
	}
	// t
	else if (keyInput == 116) {
		output = 20;
	}
	// 6
	else if (keyInput == 54) {
		output = 21;
	}
	// y
	else if (keyInput == 121) {
		output = 22;
	}
	// 7
	else if (keyInput == 55) {
		output = 23;
	}
	// u
	else if (keyInput == 117) {
		output = 24;
	}

/////////////////////// Start of the next Octave /////////////////////////

	// i
	else if (keyInput == 105) {
		output = 25;
	}
	// 9
	else if (keyInput == 57) {
		output = 26;
	}
	// o
	else if (keyInput == 111) {
		output = 27;
	}
	// 0
	else if (keyInput == 48) {
		output = 28;
	}
	// p
	else if (keyInput == 112) {
		output = 29;
	}
	// {
	else if (keyInput == 91) {
		output = 30;
	}
	// +
	else if (keyInput == 61) {
		output = 31;
	}
	// }
	else if (keyInput == 93) {
		output = 32;
	}

	return output;
}
