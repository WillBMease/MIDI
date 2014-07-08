function generateNotes(presetInstrument){
	$(window).unbind();
	sampleActive = true;
	var target = $('.audioBin li');
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated!!!");
	for(var i = 1; i <presetInstrument.notes; i++){
		target.append(instrument);
		var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
	}
	// $(window).on('keypress',function(e){
	//  triggerSample(e);
	// });
}

function generateNotes1(presetInstrument){
	$(window).unbind();
	sampleActive = true;
	var target = $('.audioBin1 li');
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated!!!");
	for(var i = 1; i <presetInstrument.notes; i++){
		target.append(instrument);
		var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
	}
	// $(window).on('keypress',function(e){
	//  triggerSample(e);
	// });
}


function newGenerateNotes(presetInstrument){
	$(window).unbind();
	sampleActive = true;
	var target = $('.audioBin li');
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated!!!");
	for(var i = 1; i <presetInstrument.notes; i++){
		target.append(instrument);
		var instrumentPath = String(presetInstrument.path + "/__" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
	}
	// $(window).on('keypress',function(e){
	//  triggerSample(e);
	// });
}


function triggerSample(key) {
	var notes = [];
	var noteWrap = $('.audioBin li');
	notes = noteWrap.find('audio');
	transpose(key);
	var check = keyboardMap(key) ;
	var keyTrue = keyboardMap(key) + (octave*12);
	console.log(notes[keyTrue]);
		//notes[keyTrue].onloadedmetadata = function(){notes[keyTrue].currentTime = 0;}
	if(check == 200  || check == 49 || check == 96){

	}
	else{
		notes[keyTrue].currentTime = 0;
		notes[keyTrue].play();
	}
}

function triggerSample1(key) {
	var notes = [];
	var noteWrap = $('.audioBin1 li');
	notes = noteWrap.find('audio');
	transpose(key);
	var check = keyboardMap(key) ;
	var keyTrue = keyboardMap(key) + (octave*12);
	console.log(notes[keyTrue]);
		//notes[keyTrue].onloadedmetadata = function(){notes[keyTrue].currentTime = 0;}
	if(check == 200  || check == 49 || check == 96){

	}
	else{
		notes[keyTrue].currentTime = 0;
		notes[keyTrue].play();
	}
}

// function triggerMidiDevice(input){
// 	var notes = [];
// 	var noteWrap = $('.audioBin li');
// 	notes = noteWrap.find('audio');
	
// 	var keyTrue = keyboardMap(input) + (octave*12);
// 	console.log(notes[keyTrue]);
// 	notes[keyTrue].currentTime = 0;
// 	notes[keyTrue].play();
// }

function playMidiNote(noteInput){
	switch(noteInput){

		case 'C2': triggerSample(122) ;
		break ;
		case 'C#2': triggerSample(115) ;
		break ;
		case 'D2': triggerSample(120) ;
		break ;
		case 'D#2': triggerSample(100) ;
		break ;
		case 'E': triggerSample(99) ;
		break;
		case 'F': triggerSample();
		break;

	}

}

function keyboardMap(keyInput){
	var output;

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

function masterConversion(midiInput){

	var output;
	switch (midiInput[1]){
		case '14' : log.innerText = "C1" ; 
		output = 'C1';
		break ;

		case '15' : log.innerText = "C#1" ;
		output = 'C#1';
		break ;

		case '16' : log.innerText = "D1" ;
		output = 'D1';
		break ;

		case '17' : log.innerText = "B0" ;
		output = 'B0';
		break ;

		case '18' : log.innerText = "C1" ;
		output = 'C1';
		break ;

		case '19' : log.innerText = "C#1" ;
		output = 'C#1';
		break ;

		case '1a' : log.innerText = "D1" ;
		output = 'D1';
		break ;

		case '1b' : log.innerText = "D#1" ;
		output = 'D#1';
		break ;

		case '1c' : log.innerText = "E#1" ;
		output = 'E#1';
		break ;

		case '1d' : log.innerText = "F1" ;
		output = 'F1';
		break ;

		case '1e' : log.innerText = "F#1" ;
		output = 'F#1';
		break ;

		case '1f' : log.innerText = "G1" ;
		output = 'G1';
		break ;

		case '20' : log.innerText = "G#1" ;
		output = 'G#1';
		break ;

		case '21' : log.innerText = "A1";
		output = 'A1';
		break ;

		case '22' : log.innerText = "A#1";
		output = 'A#1';
		break ;

		case '23' : log.innerText = "B1";
		output = 'B1';
		break ;

		case '24' : log.innerText = "C2" ; 
		output = 'C2';
		break ;

		case '25' : log.innerText = "C#2" ;
		output = 'C#2';
		break ;

		case '26' : log.innerText = "D2" ;
		output = 'D2';
		break ;

		case '27' : log.innerText = "D#2" ;
		output = 'D#2';
		break ;

		case '28' : log.innerText = "E2" ;
		output = 'E2';
		break ;

		case '29' : log.innerText = "F2" ;
		output = 'F2';
		break ;

		case '2a' : log.innerText = "F#2" ;
		output = 'F#2';
		break ;

		case '2b' : log.innerText = "G2" ;
		output = 'G2';
		break ;

		case '2c' : log.innerText = "G#2" ;
		output = 'G#2';
		break ;

		case '2d' : log.innerText = "A2" ;
		output = 'A2';
		break ;

		case '2e' : log.innerText = "A#2" ;
		output = 'A#2';
		break ;

		case '2f' : log.innerText = "B2" ;
		output = 'B2';
		break ;

		case '30' : log.innerText = "C3" ;
		output = 'C3';
		break ;

		case '31' : log.innerText = "C#3" ;
		output = 'C#3';
		break ;

		case '32' : log.innerText = "D3" ;
		output = 'D3';
		break ;

		case '33' : log.innerText = "D#3" ;
		output = 'D#3';
		break ;

		case '34' : log.innerText = "E3" ;
		output = 'E3';
		break ;

		case '35' : log.innerText = "F3" ;
		output = 'F3';
		break ;

		case '36' : log.innerText = "F#3" ;
		output = 'F#3';
		break ;

		case '37' : log.innerText = "G3" ;
		output = 'G3';
		break ;

		case '38' : log.innerText = "G#3" ;
		output = 'G#3';
		break ;

		case '39' : log.innerText = "A3" ;
		output = 'A3';
		break ;

		case '3a' : log.innerText = "A#3" ;
		output = 'A#3';
		break ;

		case '3b' : log.innerText = "B3" ;
		output = 'B3';
		break ;

		case '3c' : log.innerText = "C4" ;
		output = 'C4';
		break ;

		case '3d' : log.innerText = "C#4" ;
		output = 'C#4';
		break ;

		case '3e' : log.innerText = "D4" ;
		output = 'D4';
		break ;

		case '3f' : log.innerText = "D#4" ;
		output = 'D#4';
		break ;

		case '40' : log.innerText = "E4" ;
		output = 'E4';
		break ;

		case '41' : log.innerText = "F4" ;
		output = 'F4';
		break ;
		
		case '42' : log.innerText = "F#4" ;
		output = 'F#4';
		break ;
		
		case '43' : log.innerText = "G4" ;
		output = 'G4';
		break ;
		
		case '44' : log.innerText = "G#4" ;
		output = 'G#4';
		break ;
		
		case '45' : log.innerText = "A4" ;
		output = 'A4';
		break ;
		
		case '46' : log.innerText = "A#4" ;
		output = 'A#4';
		break ;

		case '47' : log.innerText = "B4" ;
		output = 'B4';
		break ;	

		case '48' : log.innerText = "C5" ;
		output = 'C5';
		break ;

		case '49' : log.innerText = "C#5" ;
		output = 'C#5';
		break ;

		case '4a' : log.innerText = "D5" ;
		output = 'D5';
		break ;

		case '4b' : log.innerText = "D#5" ;
		output = 'D#5';
		break ;

		case '4c' : log.innerText = "E5" ;
		output = 'E5';
		break ;

		case '4d' : log.innerText = "F5" ;
		output = 'F5';
		break ;

		case '4e' : log.innerText = "F#5" ;
		output = 'F#5';
		break ;

		case '4f' : log.innerText = "G5" ;
		output = 'G5';
		break ;

		case '50' : log.innerText = "G#5" ;
		output = 'G#5';
		break ;

		case '51' : log.innerText = "A5" ;
		output = 'A5';
		break ;

		case '52' : log.innerText = "A#5" ;
		output = 'A#5';
		break ;

		case '53' : log.innerText = "B5" ;
		output = 'B5';
		break ;

		case '54' : log.innerText = "C6" ;
		output = 'C6';
		break;

		case '55' : log.innerText = "C#6" ;
		output = 'C6';
		break;

		case '56' : log.innerText = "D6" ;
		output = 'D6';
		break;

		case '57' : log.innerText = "D#6" ;
		output = 'D#6';
		break;

		case '58' : log.innerText = "E6" ;
		output = 'E6';
		break;

		case '59' : log.innerText = "F6" ;
		output = 'F6';
		break;

		case '5A' : log.innerText = "F#6" ;
		output = 'F#6';
		break;

		case '5B' : log.innerText = "G6" ;
		output = 'G6';
		break;

		case '5C' : log.innerText = "G#6" ;
		output = 'G#6';
		break;

		case '5D' : log.innerText = "A6" ;
		output = 'A6';
		break;

		case '5E' : log.innerText = "A#6" ;
		output = 'A#6';
		break;
	
		case '5F' : log.innerText = "B6" ;
		output = 'B6';
		break;

		case '60' : log.innerText = "C7" ;
		output = 'C7';
		break ;

		case '61' : log.innerText = "C#7" ;
		output = 'C#7';
		break ;

		case '62' : log.innerText = "D7" ;
		output = 'D7';
		break ;

		case '63' : log.innerText = "D#7" ;
		output = 'D#7';
		break ;

		case '64' : log.innerText = "E7" ;
		output = 'E7';
		break;

		case '66' : log.innerText = "F7" ;
		output = 'F7';
		break;

		case '66' : log.innerText = "F#7" ;
		output = 'F#7';
		break;

		case '67' : log.innerText = "G7" ;
		output = 'G7';
		break;

		case '68' : log.innerText = "G#7" ;
		output = 'G#7';
		break;

		case '69' : log.innerText = "A7" ;
		output = 'A7';
		break;

		case '6A' : log.innerText = "A#7" ;
		output = 'A#7';
		break;

		case '6B' : log.innerText = "B7" ;
		output = 'B7';
		break;

		case '6C' : log.innerText = "C8" ;
		output = 'C8';
		break;
	}
	return output;

}
