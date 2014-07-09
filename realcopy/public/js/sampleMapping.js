function generateNotes(presetInstrument){
	$(window).unbind();
	sampleActive = true;
	var target = $('.audioBin li');
	target.empty();
	globalOctave = presetInstrument.octaveNum;
	console.log("generateNotes was initiated!!!");
	for(var i = 1; i <48; i++){
		target.append(instrument);
		console.log(i);
		var instrumentPath = String(presetInstrument.path + "/note-" + i + ".ogg");
		var newInstrument = target.find("audio:last-child");
		newInstrument.attr("src", instrumentPath);
		newInstrument.attr("id", i);
	}
	for(var i = 48; i <96; i++){
		target.append(instrument);
		console.log(i);
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


// function newGenerateNotes(presetInstrument){
// 	$(window).unbind();
// 	sampleActive = true;
// 	var target = $('.audioBin li');
// 	target.empty();
// 	globalOctave = presetInstrument.octaveNum;
// 	console.log("generateNotes was initiated!!!");
// 	for(var i = 1; i <presetInstrument.notes; i++){
// 		target.append(instrument);
// 		var instrumentPath = String(presetInstrument.path + "/__" + i + ".ogg");
// 		var newInstrument = target.find("audio:last-child");
// 		newInstrument.attr("src", instrumentPath);
// 		newInstrument.attr("id", i);
// 	}
// 	// $(window).on('keypress',function(e){
// 	//  triggerSample(e);
// 	// });
// }


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

function triggerMidiDevice(input){
	var notes1 = [];
	var notes2 = [];
	var noteWrap = $('.audioBin li');
	notes = noteWrap.find('audio');
	key = masterConversion(input);
	console.log(key);
	console.log(notes.size());
	//var keyTrue = keyboardMap(input) + (octave*12);
	//console.log(notes[key]);
	if(key != 200){
		notes[key].currentTime = 0;
		notes[key].play();
	}
	else{}

}

// function playMidiNote(noteInput){
// 	switch(noteInput){

// 		case 'C2': triggerSample(122) ;
// 		break ;
// 		case 'C#2': triggerSample(115) ;
// 		break ;
// 		case 'D2': triggerSample(120) ;
// 		break ;
// 		case 'D#2': triggerSample(100) ;
// 		break ;
// 		case 'E': triggerSample(99) ;
// 		break;
// 		case 'F': triggerSample(99);
// 		break;

// 	}

// }

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

if(midiInput[2] == 0){
	//console.log("NO!");
	output = 200;
}

else if(midiInput[0] == 99)
{
	switch (midiInput[1]){

		case '26': log.innerText = "Snare" ;
		output = 14;
		break ;

		case '24': log.innerText = "Kick" ;
		output = 5 ;
		break ;

		case '2e': log.innerText = "Hi-Hat" ;
		output = 6 ;
		break ;

		case '31': log.innerText = "Crash" ;
		output = 3 ;
		break ;

		case '33': log.innerText = "Ride" ;
		output = 9 ;
		break ;

		case '30': log.innerText = "Tom 1" ;
		output = 15 ;
		break ;

		case '2d': log.innerText = "Tom 2" ;
		output = 17 ;
		break ;

		case '2b': log.innerText = "Tom 3" ;
		output = 16 ;
		break ;
	}
}

else if (midiInput[0] != 89){
	switch (midiInput[1]){
	
		case '18' : log.innerText = "C1" ;
		output = '1';
		break ;

		case '19' : log.innerText = "C#1" ;
		output = '2';
		break ;

		case '1a' : log.innerText = "D1" ;
		output = '3';
		break ;

		case '1b' : log.innerText = "D#1" ;
		output = '4';
		break ;

		case '1c' : log.innerText = "E#1" ;
		output = '5';
		break ;

		case '1d' : log.innerText = "F1" ;
		output = '6';
		break ;

		case '1e' : log.innerText = "F#1" ;
		output = '7';
		break ;

		case '1f' : log.innerText = "G1" ;
		output = '8';
		break ;

		case '20' : log.innerText = "G#1" ;
		output = '9';
		break ;

		case '21' : log.innerText = "A1";
		output = '10';
		break ;

		case '22' : log.innerText = "A#1";
		output = '11';
		break ;

		case '23' : log.innerText = "B1";
		output = '12';
		break ;

		case '24' : log.innerText = "C2" ; 
		output = '13';
		break ;

		case '25' : log.innerText = "C#2" ;
		output = '14';
		break ;

		case '26' : log.innerText = "D2" ;
		output = '15';
		break ;

		case '27' : log.innerText = "D#2" ;
		output = '16';
		break ;

		case '28' : log.innerText = "E2" ;
		output = '17';
		break ;

		case '29' : log.innerText = "F2" ;
		output = '18';
		break ;

		case '2a' : log.innerText = "F#2" ;
		output = '19';
		break ;

		case '2b' : log.innerText = "G2" ;
		output = '20';
		break ;

		case '2c' : log.innerText = "G#2" ;
		output = '21';
		break ;

		case '2d' : log.innerText = "A2" ;
		output = '22';
		break ;

		case '2e' : log.innerText = "A#2" ;
		output = '23';
		break ;

		case '2f' : log.innerText = "B2" ;
		output = '24';
		break ;

		case '30' : log.innerText = "C3" ;
		output = '25';
		break ;

		case '31' : log.innerText = "C#3" ;
		output = '26';
		break ;

		case '32' : log.innerText = "D3" ;
		output = '27';
		break ;

		case '33' : log.innerText = "D#3" ;
		output = '28';
		break ;

		case '34' : log.innerText = "E3" ;
		output = '29';
		break ;

		case '35' : log.innerText = "F3" ;
		output = '30';
		break ;

		case '36' : log.innerText = "F#3" ;
		output = '31';
		break ;

		case '37' : log.innerText = "G3" ;
		output = '32';
		break ;

		case '38' : log.innerText = "G#3" ;
		output = '33';
		break ;

		case '39' : log.innerText = "A3" ;
		output = '34';
		break ;

		case '3a' : log.innerText = "A#3" ;
		output = '35';
		break ;

		case '3b' : log.innerText = "B3" ;
		output = '36';
		break ;

		case '3c' : log.innerText = "C4" ;
		output = '37';
		break ;

		case '3d' : log.innerText = "C#4" ;
		output = '38';
		break ;

		case '3e' : log.innerText = "D4" ;
		output = '39';
		break ;

		case '3f' : log.innerText = "D#4" ;
		output = '40';
		break ;

		case '40' : log.innerText = "E4" ;
		output = '41';
		break ;

		case '41' : log.innerText = "F4" ;
		output = '42';
		break ;
		
		case '42' : log.innerText = "F#4" ;
		output = '43';
		break ;
		
		case '43' : log.innerText = "G4" ;
		output = '44';
		break ;
		
		case '44' : log.innerText = "G#4" ;
		output = '45';
		break ;
		
		case '45' : log.innerText = "A4" ;
		output = '46';
		break ;
		
		case '46' : log.innerText = "A#4" ;
		output = '47';
		break ;

		case '47' : log.innerText = "B4" ;
		output = '48';
		break ;	

		case '48' : log.innerText = "C5" ;
		output = '49';
		break ;

		case '49' : log.innerText = "C#5" ;
		output = '50';
		break ;

		case '4a' : log.innerText = "D5" ;
		output = '51';
		break ;

		case '4b' : log.innerText = "D#5" ;
		output = '52';
		break ;

		case '4c' : log.innerText = "E5" ;
		output = '53';
		break ;

		case '4d' : log.innerText = "F5" ;
		output = '54';
		break ;

		case '4e' : log.innerText = "F#5" ;
		output = '55';
		break ;

		case '4f' : log.innerText = "G5" ;
		output = '56';
		break ;

		case '50' : log.innerText = "G#5" ;
		output = '57';
		break ;

		case '51' : log.innerText = "A5" ;
		output = '58';
		break ;

		case '52' : log.innerText = "A#5" ;
		output = '59';
		break ;

		case '53' : log.innerText = "B5" ;
		output = '60';
		break ;

		case '54' : log.innerText = "C6" ;
		output = '61';
		break;

		case '55' : log.innerText = "C#6" ;
		output = '62';
		break;

		case '56' : log.innerText = "D6" ;
		output = '63';
		break;

		case '57' : log.innerText = "D#6" ;
		output = '64';
		break;

		case '58' : log.innerText = "E6" ;
		output = '65';
		break;

		case '59' : log.innerText = "F6" ;
		output = '66';
		break;

		case '5a' : log.innerText = "F#6" ;
		output = '67';
		break;

		case '5b' : log.innerText = "G6" ;
		output = '68';
		break;

		case '5c' : log.innerText = "G#6" ;
		output = '69';
		break;

		case '5d' : log.innerText = "A6" ;
		output = '70';
		break;

		case '5e' : log.innerText = "A#6" ;
		output = '71';
		break;
	
		case '5f' : log.innerText = "B6" ;
		output = '72';
		break;

		case '60' : log.innerText = "C7" ;
		output = '73';
		break ;

		case '61' : log.innerText = "C#7" ;
		output = '74';
		break ;

		case '62' : log.innerText = "D7" ;
		output = '75';
		break ;

		case '63' : log.innerText = "D#7" ;
		output = '76';
		break ;

		case '64' : log.innerText = "E7" ;
		output = '77';
		break;

		case '66' : log.innerText = "F7" ;
		output = '78';
		break;

		case '66' : log.innerText = "F#7" ;
		output = '79';
		break;

		case '67' : log.innerText = "G7" ;
		output = '80';
		break;

		case '68' : log.innerText = "G#7" ;
		output = '81';
		break;

		case '69' : log.innerText = "A7" ;
		output = '82';
		break;

		case '6a' : log.innerText = "A#7" ;
		output = '83';
		break;

		case '6b' : log.innerText = "B7" ;
		output = '84';
		break;

		case '6c' : log.innerText = "C8" ;
		output = '85';
		break;

		case '6d' : log.innerText = "C#8" ;
		output = '86';
		break;

		case '6e' : log.innerText = "D8" ;
		output = '87';
		break;

		case '6f' : log.innerText = "D#8" ;
		output = '88';
		break;

		case '70' : log.innerText = "E8" ;
		output = '89';
		break;

		case '71' : log.innerText = "F8" ;
		output = '90';
		break;

		case '72' : log.innerText = "F#8" ;
		output = '91';
		break;

		case '73' : log.innerText = "G8" ;
		output = '92';
		break;

		case '74' : log.innerText = "G#8" ;
		output = '93';
		break;

		case '75' : log.innerText = "A8" ;
		output = '94';
		break;

		case '76' : log.innerText = "A#8" ;
		output = '95';
		break;

		case '77' : log.innerText = "B8" ;
		output = '96';
		break;
	
	}

}

	return output;
}
